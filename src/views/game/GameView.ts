module game {
	export class GameView extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}
		private gameUI: game.GameMainUI;
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
			this.gameMatch.x = (GameConfig.curWidth() - this.gameMatch.width) / 2;
			this.gameMatch.y = (GameConfig.curHeight() - this.gameMatch.height) / 2;
			this.gameMatch.startAnim();
			this.addMEL();
		}
		private addMEL(): void {
			//进入游戏结果
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_ENTERGAME, this.onEnterGame, this);
			//游戏阶段
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMESTAGE, this.onGameStage, this);
			//玩家列表
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERLIST, this.ACK_GAME_PLAYERLIST, this);
			//游戏规则
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMERULE, this.ACK_GAME_RULE, this);
			//骰子、手牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEDICEANDCARDS, this.ACK_GAME_DICEANDCARDS, this);
			//庄家准备开始出牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAME_STARTPLAYING, this.ACK_GAME_STARTPLAYING, this);
			//断线续玩
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMECONTINUED, this.ACK_USER_CONTINUED, this);
			//玩家出牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_SENDCARD, this.ACK_USER_SENDCARD, this);
			//吃碰杠权限
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAME_USEROPERATION, this.ACK_GAME_USEROPERATION, this);
			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMERESULT, this.ACK_GAME_RESULT, this);
			//游戏全部结束
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_ALLGAMERESULT, this.ACK_ALL_GAMERESULT, this);
			//通知结算亮牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_ALLGAMEEND, this.ACK_ALLGAMEEND, this);
			//游戏通知抓鸟
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEZNAIO, this.ACK_GAMEZNAIO, this);
			//服务器通知客户端托管操作
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERTRUST, this.ACK_USER_PLAYERTRUST, this);
			//服务器通知客户端解除托管操作
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERRELIEVETRUST, this.ACK_USER_PLAYERRELIEVETRUST, this);
			//返回游戏未开时突然结束的广播消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_OVERGAME, this.ACK_OVER_GAME, this);
			//服务器广播过牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAME_NO_OPERATION, this.ACK_GAME_NO_OPERATION, this);
			//服务器广播牌尾摸牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_PAIWEIMOPAI, this.ACK_USER_PAIWEIMOPAI, this);
			//服务器广播正常抓牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_ZHUAPAI, this.ACK_USER_ZHUAPAI, this);
			//服务器通知客户端  碰牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_PENGPAI, this.ACK_USER_PENGPAI, this);
			//服务器通知客户端  碰牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_CHIPAI, this.ACK_USER_CHIPAI, this);
			//服务器通知客户端  明杠
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_MINGGANGPAI, this.ACK_USER_MINGGANGPAI, this);
			//服务器通知客户端  杠摇
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_GANGYAOPAI, this.ACK_USER_GANGYAOPAI, this);
			//服务器通知客户端  暗杠
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_ANGANGPAI, this.ACK_USER_ANGANGPAI, this);
			//服务器通知客户端  补杠
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_BUGANGPAI, this.ACK_USER_BUGANGPAI, this);
			//服务器通知客户端定缺
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_DINGQUE_STATE, this.ACK_USER_DINGQUESTATE, this);
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_DINGQUE, this.ACK_USER_DINGQUE, this);
			//服务器通知客户端换三张
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_HSZ_STATE, this.ACK_USER_HSZSTATE, this);
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_HSZ, this.ACK_USER_HSZ, this);
			//听牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_TINGPAI, this.ACK_USER_TINGPAI, this);

			//服务器广播补花
			GDGame.Msg.ins.addEventListener(GameMessage.NotBuhua, this.NotBuhua, this);

			GDGame.Msg.ins.addEventListener(GameMessage.NOT_CHAIR, this.NOT_CHAIR, this);

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
		private NOT_CHAIR(evt: egret.Event): void {
			var data = evt.data;
			if (data.type == 4) {
				GamePlayData.isTuoguan = true;
				this.gameUI.showTrust(true);
			} else {
				GamePlayData.isTuoguan = false;
				this.gameUI.showTrust(false);
			}
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
			var card: proto.CardInfo = arr[0];
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
			var cardInfo: proto.CardInfo = evt.data[0] as proto.CardInfo;
			this.gameUI.getOneCard(cardInfo);
			//SoundModel.playEffect(SoundModel.ZHUA);
		}
		/** 
		 * @param msg
		 * 服务器广播正常抓牌消息
		 */
		private ACK_USER_ZHUAPAI(evt: egret.Event): void {
			var cardInfo: proto.CardInfo = evt.data[0] as proto.CardInfo;
			this.gameUI.getOneCard(cardInfo);
			//SoundModel.playEffect(SoundModel.ZHUA);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端吃
		 */
		private ACK_USER_CHIPAI(evt: egret.Event): void {
			let nSit: number = evt.data[0];
			let card: proto.CardInfo = evt.data[1];
			this.gameUI.playAnim("chi", nSit);
			//this.gameUI.playAnim("hdly",nSit);
			this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.CHI);
		}
		// 服务器通知客户端杠摇 
		private ACK_USER_GANGYAOPAI(evt: egret.Event): void {
			let nSit: number = evt.data[0];
			let card: proto.CardInfo = evt.data[1];
			this.gameUI.playAnim("gy", nSit);
			// this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.GANG);
		}

		/** 
		 * @param msg
		 * 服务器通知客户端碰牌
		 */
		private ACK_USER_PENGPAI(evt: egret.Event): void {
			let nSit: number = evt.data[0];
			let card: proto.CardInfo = evt.data[1];
			this.gameUI.playAnim("peng", nSit);
			this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.PENG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端明杠
		 */
		private ACK_USER_MINGGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: proto.CardInfo = evt.data[1];
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
			var card: proto.CardInfo = evt.data[1];
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
			var card: proto.CardInfo = evt.data[1];
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
		//结算亮牌
		private ACK_ALLGAMEEND(evt: egret.Event): void {
			let body: proto.NotGameEnd = evt.data;

			// this.gameUI.playAnim("zm",body.seatNo);
			// this.gameUI.playAnim("qgh",body.seatNo);
			// this.gameUI.playAnim("hu",body.seatNo);
			if (body.result == 0) {
				if (body.huType == 1) {
					this.gameUI.playAnim("zm", body.winner);
				} else if (body.huType == 2) {
					this.gameUI.playAnim("hu", body.winner);
					SoundModel.playEffect(SoundModel.HU);
				} else if (body.huType == 3) {
					this.gameUI.playAnim("qgh", body.winner);
				} else if (body.huType == 4) {
					this.gameUI.playAnim("hdly", body.winner);
				}
			}
			this.gameUI.onCloseTingFlag();
			this.gameUI.showAllHandCard();

		}

		//游戏通知抓鸟
		private ACK_GAMEZNAIO(evt: egret.Event): void {
			let body: proto.NotZaNiao = evt.data;
			//进行抓鸟界面操作
			this.gameUI.showZhuaNiaoResult(body);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端 全部结束
		 */
		private ACK_ALL_GAMERESULT(evt: egret.Event): void {
			let body: proto.NotGameResult = evt.data;
			this.gameUI["zniaoGroup"].visible = false;
			this.gameResult.showResult(body);
		}
		private onGameContinue(): void {
			room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(Global.roomInfo);
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
		/*服务通知客户端开始换三张*/
		private ACK_USER_HSZSTATE(): void {
			//this.gameUI.startHSZAndDQ(1);
			GameParmes.hszTime = GameParmes.hszTime - 5;
			this.gameUI.startTime(GameParmes.hszTime, "hsz");
		}
		/*换三张结束*/
		private ACK_USER_HSZ(evt: egret.Event): void {
			//this.gameUI.onUserHSZ(evt.data);
		}
		//通知客户端定缺状态
		private ACK_USER_DINGQUESTATE(evt: egret.Event): void {
			//this.gameUI.startHSZAndDQ(2);
			this.gameUI.startTime(GameParmes.dqTime);
		}
		/*收到定缺消息*/
		private ACK_USER_DINGQUE(): void {
			this.gameUI.onUserDingQue();
			this.gameUI.changeUserRight();
			this.gameUI.startTime(GameParmes.gamePlayTime);
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
			//进入游戏结果
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_ENTERGAME, this.onEnterGame, this);
			//游戏阶段
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMESTAGE, this.onGameStage, this);
			//玩家列表
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERLIST, this.ACK_GAME_PLAYERLIST, this);
			//游戏规则
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMERULE, this.ACK_GAME_RULE, this);
			//骰子、手牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEDICEANDCARDS, this.ACK_GAME_DICEANDCARDS, this);
			//庄家准备开始出牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAME_STARTPLAYING, this.ACK_GAME_STARTPLAYING, this);
			//断线续玩
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMECONTINUED, this.ACK_USER_CONTINUED, this);
			//玩家出牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_SENDCARD, this.ACK_USER_SENDCARD, this);
			//吃碰杠权限
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAME_USEROPERATION, this.ACK_GAME_USEROPERATION, this);
			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMERESULT, this.ACK_GAME_RESULT, this);
			//游戏全部结束
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_ALLGAMERESULT, this.ACK_ALL_GAMERESULT, this);
			//游戏结算亮牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_ALLGAMEEND, this.ACK_ALLGAMEEND, this);
			//游戏通知抓鸟
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEZNAIO, this.ACK_GAMEZNAIO, this);
			//服务器通知客户端托管操作
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERTRUST, this.ACK_USER_PLAYERTRUST, this);
			//服务器通知客户端解除托管操作
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERRELIEVETRUST, this.ACK_USER_PLAYERRELIEVETRUST, this);
			//返回游戏未开时突然结束的广播消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_OVERGAME, this.ACK_OVER_GAME, this);
			//服务器广播过牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAME_NO_OPERATION, this.ACK_GAME_NO_OPERATION, this);
			//服务器广播牌尾摸牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_PAIWEIMOPAI, this.ACK_USER_PAIWEIMOPAI, this);
			//服务器广播正常抓牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_ZHUAPAI, this.ACK_USER_ZHUAPAI, this);
			//服务器通知客户端  碰牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_PENGPAI, this.ACK_USER_PENGPAI, this);
			//服务器通知客户端  碰牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_CHIPAI, this.ACK_USER_CHIPAI, this);
			//服务器通知客户端  明杠
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_MINGGANGPAI, this.ACK_USER_MINGGANGPAI, this);
			//服务器通知客户端  暗杠
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_ANGANGPAI, this.ACK_USER_ANGANGPAI, this);
			//服务器通知客户端  补杠
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_BUGANGPAI, this.ACK_USER_BUGANGPAI, this);
			//服务器通知客户端  杠摇
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_GANGYAOPAI, this.ACK_USER_GANGYAOPAI, this);

			//服务器通知客户端定缺
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_DINGQUE_STATE, this.ACK_USER_DINGQUESTATE, this);
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_DINGQUE, this.ACK_USER_DINGQUE, this);
			//服务器通知客户端换三张
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_HSZ_STATE, this.ACK_USER_HSZSTATE, this);
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_HSZ, this.ACK_USER_HSZ, this);
			//听牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_TINGPAI, this.ACK_USER_TINGPAI, this);

			//服务器广播补花
			GDGame.Msg.ins.removeEventListener(GameMessage.NotBuhua, this.NotBuhua, this);

			GDGame.Msg.ins.removeEventListener(GameMessage.NOT_CHAIR, this.NOT_CHAIR, this);
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