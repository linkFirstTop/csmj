module game {
	export class GameView extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}
		private gameUI: game.GameMainUI;
		private gameOperationUI: game.GameOperationUI;
		private gameMatch: game.GameMatchUserUI;
		private gameResult: game.GameResultUI;
		/*添加view*/
		public onAddView(): void {
			this.gameUI = new game.GameMainUI();
			this.addChild(this.gameUI);

			this.gameResult = new game.GameResultUI();
			this.addChild(this.gameResult);
			this.gameResult.addEventListener("OnHideResult", this.onHideResult, this);

			this.addEventListener("OnGameContinue", this.onGameContinue, this);

			this.gameMatch = new game.GameMatchUserUI();
			this.addChild(this.gameMatch);

			// this.gameMatch.startAnim();

			if (!Global.isContinue) {
				this.gameMatch.x = (GameConfig.curWidth() - this.gameMatch.width) / 2;
				this.gameMatch.y = (GameConfig.curHeight() - this.gameMatch.height) / 2;
				this.gameMatch.startAnim();
			}
			if (egret.getOption("pai") == "1") {
				Global.isDeal = true;
			}
			if (Global.isDeal) {
				let gamezhuapai: GameZhuaPaiQiUI = new GameZhuaPaiQiUI();
				this.addChild(gamezhuapai);
			}
			this.addMEL();
		}
		private addMEL(): void {
			//进入游戏结果
			//GDGame.Msg.ins.addEventListener(GameMessage.ACK_ENTERGAME, this.onEnterGame, this);
			//游戏阶段
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_GAMESTATUS, this.onGameStage, this);
			// //玩家列表
			// GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERLIST, this.ACK_GAME_PLAYERLIST, this);


			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_GAMERESULT, this.ACK_GAME_RESULT, this);
			// //游戏全部结束
			// GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_GAMERESULT, this.ACK_ALL_GAMERESULT, this);
	
			//服务器通知客户端托管操作
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_USER_MANAGED, this.ACK_USER_PLAYERTRUST, this);
		

		    //开始发牌
		    GDGame.Msg.ins.addEventListener(game.GameMessage.VGID_GAME_GAMESTART, this.ACK_GAME_DICEANDCARDS, this);

			//行牌单播消息
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_OPERATION, this.ACK_GAME_OPERATION, this);
			//行牌应答
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_USER_OPERATION, this.ACK_USER_OPERATION, this);


			//服务器广播补花

		}
		/*返回游戏服务登录结果*/
		private onEnterGame(evt: egret.Event): void {
			var body = evt.data;
			this.gameUI.initGame();
		}
		/** 
		 * @param msg
		 * 返回游戏未开时突然结束的广播消息
		 */
		private ACK_OVER_GAME(body: egret.Event): void {
			this.gameMatch.stopAnim();
		}
		/*返回游戏阶段信息*/
		private onGameStage(evt: egret.Event): void {

		}

		/*
		*收到玩家列表
		*/
		private ACK_GAME_PLAYERLIST(evt: egret.Event): void {
			var data = evt.data;
			this.gameMatch.stopAnim();
			if (data.info) {
				this.gameUI.initUser();
			}
			// this.gameUI.initUser();
			this.gameUI.showTrust(game.GamePlayData.isTuoguan);
		}
		/*
		*收到游戏规则
		*/
		private ACK_GAME_RULE(): void {
			this.gameUI.initPosition();
		}
		/*
		*骰子、手牌消息
		*/
		private ACK_GAME_DICEANDCARDS(): void {
			console.log("ACK_GAME_DICEANDCARDS");
			this.gameUI.initUser();
			this.gameUI.initHandCard();
			egret.setTimeout(function () {
				this.gameUI.initPosition();
				this.gameUI.initQshHandCard();
			}, this, 2000);
		}

		/*
		*某玩家出牌
		*/
		private ACK_USER_SENDCARD(evt: egret.Event): void {
			var arr = evt.data;
			var card: game.CardInfo = arr[0];
			if(card.CardID==-1) return;
			var b: boolean = arr[1];
	
			this.gameUI.userSendCard(card, b);
			SoundModel.playEffect(SoundModel.CHU);
		}
		/** 
		 * 显示吃碰杠等按钮
		 */
		public ACK_GAME_USEROPERATION(evt: egret.Event): void {
			this.gameUI.onShowOpt(evt.data);
		}
		/** 
		 * @param msg
		 * 服务器广播过牌消息
		 */
		private ACK_GAME_NO_OPERATION(evt: egret.Event): void {
			var nSit: number = evt.data;
			Global.log("有人选择过====" + nSit + "自己的座位号=" + Global.userSit);
			this.gameUI.changeUserRight();
		}
		/** 
		 * @param msg
		 * 服务器广播牌尾摸牌消息
		 */
		private ACK_USER_PAIWEIMOPAI(evt: egret.Event): void {
			var cardInfo: game.CardInfo = evt.data[0] as game.CardInfo;
			this.gameUI.getOneCard(cardInfo);
			//SoundModel.playEffect(SoundModel.ZHUA);
		}
		/** 
		 * @param msg
		 * 服务器广播正常抓牌消息
		 */
		private ACK_USER_ZHUAPAI(evt: egret.Event): void {
			var cardInfo: game.CardInfo = evt.data[0] as game.CardInfo;
			//this.gameUI.znaioItemGroup.removeChildren();
			this.gameUI.zniaoGroup.visible = false;
			this.gameUI.getOneCard(cardInfo);
			//SoundModel.playEffect(SoundModel.ZHUA);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端吃
		 */
		private ACK_USER_CHIPAI(evt: egret.Event): void {
			let nSit: number = evt.data[0];
			let card: game.CardInfo = evt.data[1];
			this.gameUI.playAnim("chi", nSit);
			//this.gameUI.playAnim("hdly",nSit);
			this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.CHI);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端碰牌
		 */
		private ACK_USER_PENGPAI(evt: egret.Event): void {
			// let nSit: number = evt.data[0];
			// let card: proto.CardInfo = evt.data[1];
			// this.gameUI.playAnim("peng", nSit);
			// this.gameUI.updataUserCPG(nSit, card);
			// SoundModel.playEffect(SoundModel.PENG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端明杠摇
		 */
		 private ACK_USER_MINGGANGYAO(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: game.CardInfo = evt.data[1];
			var obSit: number = evt.data[2];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("mingGang", nSit, obSit);
			var arrCoin: Array<number> = evt.data[3];
			//this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端暗杠摇
		 */
		private ACK_USER_ANGANGYAO(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: game.CardInfo = evt.data[1];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("anGang", nSit);
			var arrCoin: Array<number> = evt.data[3];
			// this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
			/** 
		 * @param msg
		 * 服务器通知客户端补杠摇
		 */
		private ACK_USER_BUGANGYAO(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: game.CardInfo = evt.data[1];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("buGang", nSit);
			var arrCoin: Array<number> = evt.data[3];
			//this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
	   }
		/** 
		 * @param msg
		 * 服务器通知客户端明杠
		 */
		private ACK_USER_MINGGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: game.CardInfo = evt.data[1];
			var obSit: number = evt.data[2];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("mingGang", nSit, obSit);
			var arrCoin: Array<number> = evt.data[3];
			//this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端暗杠
		 */
		private ACK_USER_ANGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: game.CardInfo = evt.data[1];
			this.gameUI.updataUserCPG(nSit, card);
			
			this.gameUI.playAnim("anGang", nSit);
			var arrCoin: Array<number> = evt.data[3];
			// this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		private ACK_USER_TINGPAI(evt: egret.Event): void {
			var data: any = evt.data;
			if (data == Global.userSit) {
				this.gameUI.showHandCardMask();
			}
			this.gameUI.setUserTing(data);
			this.gameUI.playAnim("bt", data);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端补杠
		 */
		private ACK_USER_BUGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: game.CardInfo = evt.data[1];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("buGang", nSit);
			var arrCoin: Array<number> = evt.data[3];
			//this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端 单次胡牌
		 */
		private ACK_GAME_RESULT(evt: egret.Event): void {
			// let body:game.HuResultAck = evt.data;
			// let arrScore:Array<number> = [0,0,0,0];
			// for(let i:number = 0;i < body.hulist.length;i++){
			// 	this.checkHuInfo(body.hulist[i]);
			// 	for(let j:number = 0;j<body.hulist[i].huInfo.score_change.length;j++){
			// 		arrScore[j] += body.hulist[i].huInfo.score_change[j];
			// 	}
			// }
			// if(body.hulist.length > 1){//一炮多响
			// 	this.gameUI.playAnim("ypdx",body.hulist[0].seat,body.hulist[0].huInfo.obtainsit);
			// }
			// this.gameUI.showCoinChange(arrScore);
		}
		private checkHuInfo(info: any): void {
			let str: string = "";
			let arrFan: Array<number> = info.huInfo.fan_zhong;
			if (arrFan && arrFan.length > 0) {//12杠上开花 13杠上炮(呼叫转移) 14抢杠胡
				console.log("胡牌玩家番种:" + arrFan);
				if (arrFan.indexOf(12) > -1) {
					str = "gskh";
				}
				if (arrFan.indexOf(13) > -1) {
					str = "hjzy";
				}
				if (arrFan.indexOf(14) > -1) {
					str = "qgh";
				}
				if (str != "") {
					this.gameUI.playAnim(str, info.seat);
				}
			}
			if (info.huInfo.type == 3) {//1刮风 2下雨 3自摸 4胡  5花猪  6大叫 7呼叫转移 8补杠 9退税
				if (str == "") {
					this.gameUI.playAnim("zm", info.seat);
				}
				SoundModel.playEffect(SoundModel.ZIMO);
			}
			if (info.huInfo.type == 4) {
				if (str == "") {
					this.gameUI.playAnim("hu", info.seat);
				}
				this.gameUI.delPoolCard(info.huInfo.obtainsit);
				SoundModel.playEffect(SoundModel.HU);
			}
			if (info.seat == Global.userSit) {//自己胡牌
				GameParmes.isHu = true;
				this.gameUI.hideTingFlag();
			}

			this.gameUI.showHuCard(info.seat, info.huInfo.huCardID, info.huInfo.type);
			GameParmes.nHuType = 0;//把天胡的标记重置，胡了一次后就没用了
		}



		
		/** 
		 * @param msg
		 * 服务器通知客户端 全部结束
		 */
		private ACK_ALL_GAMERESULT(evt: egret.Event): void {
			// let body: proto.NotGameResult = evt.data;
			// this.gameUI["zniaoGroup"].visible = false;
			// this.gameResult.showResult(body);
		}
		private onGameContinue(): void {
			room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(Global.roomInfo.roomID);
		}
		private onHideResult(): void {
			this.gameUI.showResultBtn();
		}
		/** 
		 * @param msg
		 * 托管消息
		 */
		private ACK_USER_PLAYERTRUST(): void {
			this.gameUI.showTrust(true);
		}
		/** 
		 * @param msg
		 * 解除托管消息
		 */
		private ACK_USER_PLAYERRELIEVETRUST(): void {
			this.gameUI.showTrust(false);
		}
		/*庄家开始出牌*/
		private ACK_GAME_STARTPLAYING(): void {
			this.gameUI.showWallCount();
			this.gameUI.startTime(GameParmes.gamePlayTime);
			// if(Global.userSit == GameParmes.firstSit && Global.userSit ==game.GamePlayData.M_C_P_G_sit){
			// 	//我是庄的时候，第一次出牌的倒计时时间为15S
			// 	this.gameUI.startTime(GameParmes.gamePlayTime);
			// }
		}
		private NotBuhua(evt: egret.Event): void {
			var body = evt.data;
			if (body.seatNo != null && body.seatNo != NaN && body.seatNo != undefined) {
				this.gameUI.userBuhua(body.seatNo);
				for (var i: number = 0; i < body.huapai.length; i++) {
					this.gameUI.showHuaCard(body.seatNo, body.huapai[i]);
				}
				this.gameUI.playAnim("bh", body.seatNo);
				SoundModel.playEffect("buhua_mp3");
			} else {
				this.gameUI.userBuhua(body.Card.Cards[0].Sit);
				this.gameUI.showHuaCard(body.Card.Cards[0].Sit, body.Card.ObtainCard.CardID);
				this.gameUI.playAnim("bh", body.Card.Cards[0].Sit);
				this.gameUI.gamePosition.startTime(GameParmes.chiPengGangSurplusTime);
				SoundModel.playEffect("buhua_mp3");
			}
		}


		/**
		 * 行牌单播消息  根据这个显示操作按钮
		 * @param evt 
		 */
		private ACK_GAME_OPERATION(evt: egret.Event) {
			const body: room.VGGameOperationNtc = evt.data;
			console.log(">>行牌单播消息  根据这个显示操作按钮", body)
			const nSit = body.seatid;
			console.log(`>>需要操作的玩家的座位=${nSit}, 自己座位${Global.userSit}`,)
			this.gameUI.showRoomGUID(body.roundGuid);
			//	body.remainCount
			this.gameUI.startTime(body.second);
			game.GamePlayData.M_C_P_G_sit = nSit;
			this.gameUI.changeUserRight();

			GameParmes.isCurTing = false;

			if (body.operation.length == 0) {
				// 其他人的操作通知
				return;
			}

			if (nSit != Global.userSit) {
				//座位号 不是 自己
				GameParmes.gameTurn = GameTurnType.OTHERTURN;
				return;
			}
		
				game.GamePlayData.SaveMJ_Operation(body.operation);
				const optArr = [false, false, false, false, false];

				//玩家自己操作
				body.operation.forEach((opt: room.MJ_Operation) => {
				//摸牌s
				//if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {}

				//手切，打出的是手中的牌，吃碰之后都是手切
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD) {
					GameParmes.gameStage = GameStageType.PLAYING;
					GameParmes.gameTurn = GameTurnType.SELFTURN;

				}
				//摸切，打出的是刚摸到的牌s
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_D_DISCARD) {
					GameParmes.gameStage = GameStageType.PLAYING;
					GameParmes.gameTurn = GameTurnType.SELFTURN;
				}

				//左吃，吃的牌是最小点, 例如45吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
					optArr[0] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}
				//中吃，吃的牌是中间点，例如24吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) {
					optArr[0] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}
				//右吃，吃的牌是最大点，例如12吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
					optArr[0] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
					optArr[1] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//暗杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//直杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//补杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//听
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
					egret.log("=====收到了 停的  操作请求 ==")
					optArr[4] = true;
					game.GamePlayData.SaveChiPengGangHu(body);
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
					GameParmes.isCurTing = true;
				}

				//和
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
					optArr[3] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//过
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {
				}
			})

			const isShow = optArr.some((e) => (e))
			egret.log(">>>>操作按钮 数组<<<<", isShow, optArr)
			if (isShow) {
				this.gameUI.onShowOpt(optArr)
			}
		}


		/**
		 * 行牌应答 这是玩家操作的结果
		 * @param evt 
		 */

		private ACK_USER_OPERATION(evt: egret.Event) {
			const body: room.VGUserOperationAck = evt.data;
			egret.log("****行牌应答:这是玩家操作的结果:", body)
			//console.log("=== 行牌应答 这是玩家操作的seat:", body["seatID"])
			const nSit = body["seatID"];
			GameParmes.gameStage = GameStageType.PLAYING;
			this.gameUI.showWallCount()//body.remainCount

			let p = Global.getUserPosition(nSit)
			//console.log(`****当前操作玩家座位号:${nSit}，和局部座位号:${p},玩家座位号：${Global.userSit}`)
			const opt: room.MJ_Operation = <any>body.operation;
			GameParmes.isCurTing = false;
			if (!opt) {
				return;
			}
		
			//摸牌s
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {
				// game.GamePlayData.SetCardsWallIndex("Head", 1);

				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;
				// console.log("====MOPAI=====",card)

				game.GamePlayData.AddHandCards(nSit, card);
				this.gameUI.getOneCard(card);
				
				//room.RoomWebSocket.instance().roomSender.REQ_MAGICTILES()
			}
	
			//手切，打出的是手中的牌，吃碰之后都是手切
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD) {
				//	console.log("=====打出的是手中的牌，吃碰之后都是手切==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;

				const Cards = [card];
			//	game.GamePlayData.ClearHandCards(p, [card], nSit);
				game.GamePlayData.AddCardPool(Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);
				}

				const b: boolean = false;
				this.gameUI.userSendCard(card, b);
				SoundModel.playEffect(SoundModel.CHU);


			}

			//摸切，打出的是刚摸到的牌s
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_D_DISCARD) {
				//console.log("=====摸切==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;
				//*************容错断线回来  服务器发送该出牌的人的牌是13张   但是又发送该他出牌的消息   故容错***************
				// const handcardsNum: number = game.GamePlayData.getHandCards(p).length;
				// if (handcardsNum % 3 != 1) {
				// 	game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(p), [card], nSit);
				// }
	
				game.GamePlayData.ClearHandCards(p, [card], nSit);
				const Cards = [card];
				game.GamePlayData.AddCardPool(Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);
				}

				const b: boolean = false;
				this.gameUI.userSendCard(card, b);
				SoundModel.playEffect(SoundModel.CHU);
				
			}
			//左吃，吃的牌是最小点, 例如45吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
				//console.log("=====左吃==")
			}

			//中吃，吃的牌是中间点，例如24吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) {
				//console.log("=====中吃，吃的牌是中间点，例如24吃3==")
			}

			//右吃，吃的牌是最大点，例如12吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
				//console.log("=====右吃，吃的牌是最大点，例如12吃3==")
			}

			//碰
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
				this.ON_USER_PENGPAI(opt, body.seatID)
			}
	
			//暗杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
				//	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.ANGANG,
					ObtainCardSit: opt.ObtainSeat,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
					],
				}
				game.GamePlayData.SaveCurrentCard(0, -1);
				game.GamePlayData.AddChiPengGangCards(body, nSit);

				this.ON_USER_ANGANGPAI(card, nSit);
			}
			//直杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.MINGGANG,
					ObtainCardSit: opt.ObtainSeat,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
					],
				}

				game.GamePlayData.AddChiPengGangCards(body, nSit);

				this.ON_USER_MINGGANGPAI(card, nSit, opt.ObtainSeat);
			}
			//补杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.BUGANG,
					ObtainCardSit: opt.ObtainSeat,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
					],
				}
				game.GamePlayData.AddChiPengGangCards(body, nSit);
				game.GamePlayData.SaveCurrentCard(0, -1);

				this.ON_USER_BUGANGPAI(card, nSit);
			}

			//听
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
				//this.gameUI.onShowTHFlag();
				//console.log("=====收到了 停的  操作通知 ==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;

				const Cards = [card];
				//game.GamePlayData.ClearHandCards(p, [card], nSit);
				game.GamePlayData.AddCardPool(Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);
				}

				const b: boolean = false;
				this.gameUI.userSendCard(card, b);
				//SoundModel.playEffect(SoundModel.fanOrLiang);
	
				if (nSit != Global.userSit) {
					// opt.tingTileInfo.forEach((o: room.MJ_TingTileInfo) => {
					// 	GamePlayData.MJ_LiangOtherPais.push(o)
					// })

					//console.log("==GamePlayData.MJ_LiangOtherPais===",GamePlayData.MJ_LiangOtherPais)
				} else {
					// GamePlayData.isSelfTing = true;
					// opt.tingTileInfo.forEach((o: any) => {
					// 	GamePlayData.MJ_selfTingarr.push(o)
					// })

					// this.gameUI.onShowTingTip()
				}
				// this.gameUI.onShowUserLiang(nSit)

				// GamePlayData.MJ_LiangSitArr.push(nSit);
				// this.gameUI.gameHand.createLiangPai(nSit)
			}

			//和
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
				GameParmes.isGameFlower = false;
				// this.gameUI.gameOpt.visible = false;
				// GamePlayData.isSelfTing = false;
				// GamePlayData.MJ_LiangOtherPais = [];


				if (opt.ObtainSeat != nSit) {
					//--
					const card: CardInfo = new CardInfo();
					card.CardID = opt.ObtainTile;
					card.Sit = opt.ObtainSeat;

					let op = Global.getUserPosition(opt.ObtainSeat);
					//this.gameUI.gamePool.removeCardToPool(opt.ObtainSeat, card);
					GamePlayData.DelectCardPool(GamePlayData.getCardsPool(op));

				}
					
				if (nSit == Global.userSit) {
					//this.gameUI.gameHand.delHandCard(nSit);
				
					SoundModel.playEffect(SoundModel.WIN);

					GameParmes.isHu = true;
					this.gameUI.hideTingFlag();
				} else {
					//this.gameUI.gameHand.delHandCard(nSit);
					SoundModel.playEffect(SoundModel.LOSE);
				}

				this.checkHuInfo(opt, nSit);
			}

			//过
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {
				//this.gameUI.changeUserRight();
			}

			const userInfo :room.VGUserInfo  = <any>body["userInfo"];


			if(userInfo){
				if(userInfo.tingTileInfo.length>0){
					// GamePlayData.MJ_selfTingarr = null;
					// GamePlayData.MJ_selfTingarr = [];
					// userInfo.tingTileInfo.forEach((o: any) => {
					// 	GamePlayData.MJ_selfTingarr.push(o)
					// })
				}
			}
			// this.gameUI.startTime(body.second);
		}

		/** 
		* @param msg
		* 服务器通知客户端碰牌
		*/
		private ON_USER_PENGPAI(data: room.MJ_Operation, seat: number): void {
			let nSit: number = seat;
			let card: CardInfo = { CardID: data.ObtainTile, Sit: data.ObtainSeat };

			const body = {
				ObtainCard: card,
				Type: CardsGroupType.PENG,
				ObtainCardSit: data.ObtainSeat,
				sit: nSit,
				Cards: [
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
				],
				DelCards: [
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
				]
			}

			if (nSit == data.ObtainSeat) {
				// console.log("=====ADD DEL")
				body.DelCards.push({ CardID: data.ObtainTile, Sit: nSit })
			}

			card = game.GamePlayData.AddChiPengGangCards(body, nSit);

			this.gameUI.playAnim("peng", nSit);
			this.gameUI.updataUserCPG(nSit, card);
			let p: number = Global.getUserPosition(nSit);
			const sex =  this.gameUI["gameUser" + p].sex;
			SoundModel.playEffect(`${sex}${SoundModel.PENG}` );
		}


		private ON_USER_ANGANGPAI(card, seat: number): void {
			const nSit: number = seat;

			this.gameUI.updataUserCPG(nSit, card);

			this.gameUI.playAnim("anGang", nSit);
			// const arrCoin: Array<number> = data.Tiles;
			// this.gameUI.showCoinChange(arrCoin);
			let p: number = Global.getUserPosition(nSit);
			const sex =  this.gameUI["gameUser" + p].sex ;
			SoundModel.playEffect(`${sex}${SoundModel.GANG}`);
		}


		private ON_USER_BUGANGPAI(card, seat: number): void {
			const nSit: number = seat;

			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("buGang", nSit);
			// const arrCoin: Array<number> = data.Tiles;
			// this.gameUI.showCoinChange(arrCoin);
			let p: number = Global.getUserPosition(nSit);
			const sex =  this.gameUI["gameUser" + p].sex ;
			SoundModel.playEffect(`${sex}${SoundModel.GANG}`);
		}


		/** 
		 * @param msg
		 * 服务器通知客户端明杠
		 */
		 private ON_USER_MINGGANGPAI(card, seat: number, obSit): void {
			const nSit: number = seat;

			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("mingGang", nSit, obSit);
			//const arrCoin: Array<number> = data.Tiles;
			//this.gameUI.showCoinChange(arrCoin);
			let p: number = Global.getUserPosition(nSit);
			const sex =  this.gameUI["gameUser" + p].sex ;
			SoundModel.playEffect(`${sex}${SoundModel.GANG}`);
		}


		/*
		*断线续玩
		*/
		private ACK_USER_CONTINUED(evt: egret.Event): void {
			Global.log("断线续完界面");
			this.gameUI.onGameContinue();
		}
		private removeMEL(): void {
			this.removeEventListener("OnGameContinue", this.onGameContinue, this);
			//进入游戏结果
			// //进入游戏结果
			//游戏阶段
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_GAME_GAMESTATUS, this.onGameStage, this);
			// //玩家列表
			// GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERLIST, this.ACK_GAME_PLAYERLIST, this);


			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_GAME_GAMERESULT, this.ACK_GAME_RESULT, this);
			// //游戏全部结束
			// GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_GAMERESULT, this.ACK_ALL_GAMERESULT, this);

			//服务器通知客户端托管操作
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_USER_MANAGED, this.ACK_USER_PLAYERTRUST, this);


			//开始发牌
			GDGame.Msg.ins.removeEventListener(game.GameMessage.VGID_GAME_GAMESTART, this.ACK_GAME_DICEANDCARDS, this);

			//行牌单播消息
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_GAME_OPERATION, this.ACK_GAME_OPERATION, this);
			//行牌应答
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_USER_OPERATION, this.ACK_USER_OPERATION, this);
					

			// //服务器广播补花
			// GDGame.Msg.ins.removeEventListener(GameMessage.NotBuhua, this.NotBuhua, this);

	
		}
		/*移除view的时候必须调用*/
		public onRemoveView(): void {
			this.removeMEL();
			if (this.gameUI) {
				this.gameUI.dispose();
				this.gameUI.parent.removeChild(this.gameUI);
				this.gameUI = null;
			}
			if (this.gameResult) {
				this.gameResult.removeEventListener("OnHideResult", this.onHideResult, this);
				this.gameResult.parent.removeChild(this.gameResult);
				this.gameResult = null;
			}
			if (this.gameMatch) {
				this.gameMatch.parent.removeChild(this.gameMatch);
				this.gameMatch = null;
			}
		}

	}
}