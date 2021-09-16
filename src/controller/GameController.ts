module game {
	export class GameController {
		/**
		 * 接收服务器下发的游戏规则消息
		 * */
		public static AckGameRuleFun(body: any): void {

			var rule = body;
			GameParmes.firstSit = rule.FirstSit;// 第一个游戏的人
			GameParmes.gameType = rule.GameType;// 游戏类型  0：打一副牌结束  1：打一圈牌结束  2：打4圈（一局）
			GameParmes.gameNextChiPengGangTime = rule.Is_Next_ChiPengGangTime;// 下家吃碰杠考虑时间
			GameParmes.gameNotNextChiPengGangPengTime = rule.Not_Next_ChiPengGangTime;//非下家吃碰杠考虑时间
			GameParmes.gameHuTime = rule.HuTime;//胡牌考虑时间
			GameParmes.gamePlayTime = rule.PlayTime;//游戏中打牌时长
			GameParmes.gameDelayTime = rule.DelayTime;//延时时长
			GameParmes.gameDelayRestrictions = rule.DelayRestrictions;//延时限制（几次）
			GameParmes.gameTrustRestrictions = rule.TrustRestrictions;//托管次数
			GameParmes.gameBureau = rule.Bureau;//当前第几局
			GameParmes.gameRing = rule.Ring;//当前第几圈
			GameParmes.gamePair = rule.PAIR;//当前第几副
			GameParmes.gameFirstSendTime = rule.FirstSendTime;//第一次出牌时间
			GameParmes.chiPengGangSurplusTime = rule.ChiPengGangSurplusTime;
			GameParmes.ArrangementCardsOverTime = rule.ArrangementCardsOverTime;
			GameParmes.GoOnGaneTime = rule.GoOnGaneTime;
			GameParmes.TrustNum = GameParmes.gameTrustRestrictions;
			GameParmes.gameDelayRestrictions = GameParmes.gameDelayRestrictions;
			GameParmes.hszTime = rule.HuanSanzhang;
			GameParmes.dqTime = rule.dingque;
		}
		/**
		 * 接收服务器发送的色子和手牌
		 * */
		public static AckGameDiceAndCards(body: any): void {
			game.GamePlayData.SaveDice(body.FirstDice, body.SecondDice, body.FirstSit, body.SecondSit, body.FirstCardsIndexes);
			game.GamePlayData.SetCardsWallIndex("Head", 65);
			game.GamePlayData.SaveHandCarsd(body.HandCards);
			game.GamePlayData.SetHandCardsSorting(Global.userSit);//理牌
			game.GamePlayData.HSZRecommend = body.huan_san_zhang;
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEDICEANDCARDS));
		}
		/**
		 * 客户端通知服务器打牌
		 * 0  cardID
		 * */
		public static ReqUserSendCard(card: proto.CardInfo = null): void {

			var cardsGroup: CardsGroupInfo = new CardsGroupInfo();
			cardsGroup.cardsit = Global.userSit;
			cardsGroup.CardsGroupType = CardsGroupType.PLAY;
			/*if(card.CardID==GamePlayData.Current_Card.CardID){
				cardsGroup.CardsGroupType = CardsGroupType.MOPLAY;
			}*/
			cardsGroup.cards.push(card);
			room.RoomWebSocket.instance().roomSender.ReqSendCard(cardsGroup);
			//game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(cardsGroup);
		}
		/** 
		 * @param e
		 * 客户端通知服务器听牌
		 */
		public static ReqCallPai(c: proto.CardInfo): void {
			var cardsGroup: CardsGroupInfo = new CardsGroupInfo();
			cardsGroup.cardsit = Global.userSit;
			cardsGroup.CardsGroupType = CardsGroupType.CALL;
			var card: proto.CardInfo = c;
			cardsGroup.cards.push(card);
			room.RoomWebSocket.instance().roomSender.ReqSendCard(cardsGroup);
		}
		/**
		 * 服务器通知补花
		 * */
		public static NotBuhua(body: proto.NotBuhua): void {
			// var card =new proto.CardInfo();
			// card.Sit=body.seatNo;
			// card.CardID=body.bupai;
			// game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.seatNo),[card],body.seatNo);
			for (var i: number = 0; i < body.bupai.length; i++) {
				var card = new proto.CardInfo();
				card.Sit = body.seatNo;
				if (card.Sit != Global.userSit) {
					card.CardID = -1;
				} else {
					card.CardID = body.huapai[i];
				}
				game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.seatNo), [card], body.seatNo);

				var cardGroup = new proto.CardsGroup();
				var card2 = new proto.CardInfo();
				card2.Sit = body.seatNo;
				card2.CardID = body.bupai[i];
				cardGroup.Cards = [card2];

				game.GamePlayData.AddHandCards(body.seatNo, cardGroup);
			}
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.NotBuhua, true, true, body));
		}
		/**
		 * 服务器返回补花吃碰杠胡的操作
		 * */
		public static AckGameSendCards(body: proto.NotSendCard): void {
			let card: proto.CardInfo;
			let dataArray: any[] = [];
			switch (body.Card.Type) {
				case CardsGroupType.CATCH://抓牌
					Global.log("抓牌");
					game.GamePlayData.SetCardsWallIndex("Head", 1);
					game.GamePlayData.AddHandCards(body.Card.Sit, body.Card);
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					//玩家自己抓的牌
					card = body.Card.Cards[0] as proto.CardInfo;
					card.Sit = body.Card.Sit;
					if (body.Card.Sit == Global.userSit) {
						game.GamePlayData.SaveCurrentCard(body.Card.Cards[0].CardID, body.Card.Sit);
					}
					dataArray.push(card);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_ZHUAPAI, true, true, dataArray));
					break;
				case CardsGroupType.PLAY://正常打牌(非摸打)
					Global.log("正常打牌(非摸打)");
					card = body.Card.Cards[0] as proto.CardInfo;
					card.Sit = body.Card.Sit;
					game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.Card.Sit), [card], body.Card.Sit);
					game.GamePlayData.AddCardPool(body.Card.Cards, body.Card.Sit);
					if (body.Card.Sit == Global.userSit) {
						game.GamePlayData.SaveCurrentCard(0, -1);
					}
					dataArray.push(card);
					dataArray.push(false);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_SENDCARD, true, true, dataArray));
					break;
				case CardsGroupType.MOPLAY://抢杠胡
					Global.log("抢杠胡");
					card = body.Card.Cards[0] as proto.CardInfo;
					card.Sit = body.Card.Sit;
					//*************容错断线回来  服务器发送该出牌的人的牌是13张   但是又发送该他出牌的消息   故容错***************
					var handcardsNum: number = game.GamePlayData.getHandCards(body.Card.Sit).length;
					if (handcardsNum % 3 != 1) {
						game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.Card.Sit), [card], body.Card.Sit);
					}

					game.GamePlayData.AddCardPool(body.Card.Cards, body.Card.Sit);
					if (body.Card.Sit == Global.userSit) {
						game.GamePlayData.SaveCurrentCard(0, -1);
					}
					dataArray.push(card);
					dataArray.push(true);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_SENDCARD, true, true, dataArray));
					break;
				case CardsGroupType.CHI://吃牌
					Global.log("吃牌");
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					card = game.GamePlayData.AddChiPengGangCards(body.Card, body.Card.Sit);
					dataArray.push(body.Card.Sit);
					dataArray.push(card);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_CHIPAI, true, true, dataArray));
					break;
				case CardsGroupType.GANGYAO://杠摇
					Global.log("杠摇");
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					card = game.GamePlayData.AddChiPengGangCards(body.Card, body.Card.Sit);
					dataArray.push(body.Card.Sit);
					dataArray.push(card);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_GANGYAOPAI, true, true, dataArray));
					break;
				case CardsGroupType.PENG://碰牌
					Global.log("碰牌");
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					card = game.GamePlayData.AddChiPengGangCards(body.Card, body.Card.Sit);
					dataArray.push(body.Card.Sit);
					dataArray.push(card);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_PENGPAI, true, true, dataArray));
					break;
				case CardsGroupType.MINGGANG://明杠牌
					Global.log("明杠牌");
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					card = game.GamePlayData.AddChiPengGangCards(body.Card, body.Card.Sit);

					dataArray.push(body.Card.Sit);
					dataArray.push(card);
					dataArray.push(body.Card.ObtainCardSit);
					//dataArray.push(body.gangCoin);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_MINGGANGPAI, true, true, dataArray));
					break;
				case CardsGroupType.ANGANG://暗杠牌
					Global.log("暗杠牌");
					game.GamePlayData.SaveCurrentCard(0, -1);
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					card = game.GamePlayData.AddChiPengGangCards(body.Card, body.Card.Sit);

					dataArray.push(body.Card.Sit);
					dataArray.push(card);
					dataArray.push(body.Card.ObtainCardSit);
					//dataArray.push(body.gangCoin);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_ANGANGPAI, true, true, dataArray));
					break;
				case CardsGroupType.BUGANG://补杠牌  先碰再杠
					Global.log("补杠牌");
					game.GamePlayData.SaveOperationSit(body.Card.Sit);
					card = game.GamePlayData.AddChiPengGangCards(body.Card, body.Card.Sit);
					game.GamePlayData.SaveCurrentCard(0, -1);

					dataArray.push(body.Card.Sit);
					dataArray.push(card);
					dataArray.push(body.Card.ObtainCardSit);
					//dataArray.push(body.gangCoin);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_BUGANGPAI, true, true, dataArray));
					break;
				case CardsGroupType.GANGMO://杠牌牌尾摸牌
					Global.log("杠牌牌尾摸牌:" + body.Card.Sit);
					game.GamePlayData.SetCardsWallIndex("Tail", 1);
					game.GamePlayData.AddHandCards(body.Card.Sit, body.Card);
					card = body.Card.Cards[0] as proto.CardInfo;
					card.Sit = body.Card.Sit;
					if (body.Card.Sit == Global.userSit) {
						game.GamePlayData.SaveCurrentCard(card.CardID, card.Sit);
					}
					dataArray.push(card);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_PAIWEIMOPAI, true, true, dataArray));
					break;
				case CardsGroupType.NO_OPERATION://过    
					Global.log("过牌");
					// game.GamePlayData.M_C_P_G_sit = (game.GamePlayData.M_C_P_G_sit+1)%4;
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_NO_OPERATION, true, true, body.Card.Sit));
					break;
				case CardsGroupType.CALL://听
					Global.log("有人听牌");

					// game.GamePlayData.M_C_P_G_sit = (game.GamePlayData.M_C_P_G_sit+1)%4;
					body.Card.Type = 2;
					card = body.Card.Cards[0] as proto.CardInfo;

					card.Sit = body.Card.Sit;
					game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.Card.Sit), [card], body.Card.Sit);
					game.GamePlayData.AddCardPool(body.Card.Cards, body.Card.Sit);
					if (body.Card.Sit == Global.userSit) {
						game.GamePlayData.SaveCurrentCard(0, -1);
					}
					dataArray.push(card);
					dataArray.push(false);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_SENDCARD, true, true, dataArray));
					game.GamePlayData.tingData[body.Card.Sit] = true;
					GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_TINGPAI, true, true, body.Card.Sit));
					break;
				case CardsGroupType.BUHUA://补花
					Global.log("补花sss");
					var card2 = new proto.CardInfo();
					card2.Sit = body.Card.Sit;
					card2.CardID = body.Card.ObtainCard.CardID;

					if (body.Card.Sit != Global.userSit) {
						card2.CardID = -1;
					}
					game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.Card.Sit), [card2], body.Card.Sit);
					game.GamePlayData.AddHandCards(body.Card.Sit, body.Card);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.NotBuhua, true, true, body));
					break;

			}
		}
		/**
		 * 服务器通知客户端能够吃碰杠胡的显示权限 AckUserOperation
		 * */
		public static AckGameUserOperation(body: any): void {
			game.GamePlayData.SaveChiPengGangHu(body);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_USEROPERATION, true, true, body));
		}
		/**
		 * 服务器通知客户端单次胡牌
		 * */
		public static AckGameOnResult(body: any): void {
			Global.log("胡牌玩家长度:" + body.hulist.length);
			GameParmes.isGameFlower = false;
			for (let i: number = 0; i < body.hulist.length; i++) {
				if (body.hulist[i].seat == Global.userSit) {//自己胡做下标记
					GameParmes.isHu = true;
					break;
				}
			}
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMERESULT, true, true, body));
		}
		//结算亮牌
		public static AckGameEnd(body: proto.NotGameEnd): void {
			game.GamePlayData.SaveResultEnd(body);
			game.GamePlayData.tingData = [false, false, false, false];
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_ALLGAMEEND, true, true, body));
		}
		//  服务器通知客户端扎鸟消息
		public static AckGameZnaio(body: proto.NotZaNiao): void {

			// body.others.unshift(body.player);
			// game.GamePlayData.SaveResultData(body.others);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEZNAIO, true, true, body));
		}
		/**
		 * 服务器通知客户端结果消息
		 * */
		public static AckGameResult(body: proto.NotGameResult): void {
			body.others.unshift(body.player);
			game.GamePlayData.SaveResultData(body.others);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_ALLGAMERESULT, true, true, body));
		}


		/**
		 *断线续完同步消息 发完玩家列表和规则后下发此消息
			* */
		public static AckPlayerContinued(body: proto.AckEnterTable): void {
			game.GamePlayData.M_C_P_G_sit = body.info.currentActionSeat;
			if (game.GamePlayData.M_C_P_G_sit == -1) {
				game.GamePlayData.M_C_P_G_sit = GameParmes.firstSit;
			}
			GameParmes.TrustNum = 9999;
			GameParmes.gameDelayRestrictions = 0;
			GameParmes.onBreakPlayerState = [];//玩家状态
			GameParmes.hu_player = [];
			//GameParmes.onBreakPlayerHuCards = [body.hupai0,body.hupai1,body.hupai2,body.hupai3];
			// if(GameParmes.onBreakPlayerHuCards[Global.userSit].length > 0){
			// 	GameParmes.isHu = true;
			// }
			for (let n: number = 0; n < GameParmes.onBreakPlayerHuCards.length; n++) {
				if (GameParmes.onBreakPlayerHuCards[n].length > 0) {
					GameParmes.isGameFlower = false;
					break;
				}
			}
			GameParmes.nHSZComplete = 1;//0:没有换  1:已经换了
			GameParmes.arrDQState = [];//-1没有定缺


			GameParmes.gameStage = body.table.gamePhase;
			var is_Card: proto.CardInfo = new proto.CardInfo();
			if (GameParmes.gameStage != GameStageType.GAMEOVER) {
				// game.GamePlayData.CardsWall_Head_Index = body.BeginCardindex;
				// game.GamePlayData.CardsWall_Tail_Index = body.EndCardindex;

				for (var i: number = 0; i < body.info.players.length; i++) {
					if (body.info.players[i].seatNo == Global.userSit && body.info.players[i].lastCard != null) {
						var card: proto.CardInfo = game.GamePlayData.SaveCurrentCard(body.info.players[i].lastCard.CardID, body.info.players[i].lastCard.Sit);
					}
					game.GamePlayData.AddCardPool(body.info.players[i].discard, body.info.players[i].seatNo);
					game.GamePlayData.CardsWall_Tail_Index += body.info.players[i].discard.length;
					game.GamePlayData.SetHandCardsValue(body.info.players[i].cards, -1, body.info.players[i].seatNo);
					game.GamePlayData.CardsWall_Head_Index += body.info.players[i].cards.length;
					game.GamePlayData.SetOtherCardsValue(body.info.players[i].patterns, body.info.players[i].seatNo);
					for (var n: number = 0; n < body.info.players[i].patterns.length; n++) {
						game.GamePlayData.CardsWall_Head_Index += body.info.players[i].patterns[n].Cards.length;
					}
					var arrHua: Array<number> = [];
					for (var n: number = 0; n < body.info.players[i].huapai.length; n++) {
						arrHua.push(body.info.players[i].huapai[n].CardID);
					}
					GameParmes.onBreakPlayerHuCards[i] = arrHua;
					if (body.info.players[i].ting == 1) {
						game.GamePlayData.tingData[i] = true;
					}
				}
				// var i:number=0;

				// //手牌数据
				// for(i=0;i<body.HandCards.length;i++){
				// 	var playerHandCards = body.HandCards[i];
				// 	game.GamePlayData.SetHandCardsValue(playerHandCards.Cards,-1,i);
				// 	if(body.IsMoPai&&i==body.CurrentSit){
				// 		is_Card.Sit = i;
				// 		for(var x=0;x<playerHandCards.Cards.length;x++){
				// 			var cardsGroup = playerHandCards.Cards[x];
				// 			if(cardsGroup.Type==CardsGroupType.HANDCARDS){
				// 				is_Card.CardID = cardsGroup.Cards[cardsGroup.Cards.length-1].CardID;
				// 				game.GamePlayData.SaveCurrentCard(cardsGroup.Cards[cardsGroup.Cards.length-1].CardID,cardsGroup.Cards[cardsGroup.Cards.length-1].Sit);
				// 				break;
				// 			}
				// 		}
				// 	}

				// }
				game.GamePlayData.SetHandCardsSorting(Global.userSit);
			}
			// 			for(let i:number = 0;i < GameParmes.onBreakPlayerHuCards.length;i++){
			// 	let arr:Array<number> = GameParmes.onBreakPlayerHuCards[i];
			// 	for(let j:number = 0;j < arr.length;j++){
			// 		this.showHuCard(i,arr[j],4);
			// 	}

			// }

			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAMECONTINUED, true, true, is_Card));
		}

		//川麻换三张
		public static AckHuanSanZhang(body: any): void {
			var cards: Array<proto.CardInfo> = [];
			var count: number = body.req_huan.length;
			for (var i: number = 0; i < count; i++) {
				var card: proto.CardInfo = new proto.CardInfo();
				card.CardID = body.req_huan[i].CardID;
				card.Sit = Global.userSit;
				cards.push(card);
			}
			GamePlayData.HSZGetCards = body.huan_san_zhang;
			game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(Global.userSit), cards, Global.userSit);
			game.GamePlayData.AddHuanSanZhangCards(game.GamePlayData.getHandCards(Global.userSit), body.huan_san_zhang);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_HSZ, true, true, body));
		}
		//定缺
		public static AckDingQue(body: any): void {
			for (var i: number = 0; i < body.dingque.length; i++) {
				game.GameUserList.getPlayerformSit(i).cardType = body.dingque[i];
			}
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_DINGQUE));
		}
	}
}