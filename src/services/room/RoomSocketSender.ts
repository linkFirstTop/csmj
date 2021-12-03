module room {
	export class RoomSocketSender {
		public constructor() {
		}
		/**
		 * 心跳
		 */
		public HEART_BEAT(): void {
			let data = new proto.Heartbeat();
			data.times = 1;
			let body = proto.Heartbeat.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.HEARTBEAT, body);
		}
		public REQ_LOGIN(): void {
			let data = new proto.ReqLogin();
			data.certType = 1;
			data.cert = Global.token;
			data.nickName = Global.showName;
			data.avatar = "";
			data.channelId = 0;
			let body = proto.ReqLogin.encode(data).finish();
			Global.log("客户端发送登录请求" + Global.token + "<>" + Global.loginType);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.LOGIN, body);
		}
		/*
		*请求房间列表
		*/
		public REQ_ROOMLIST(): void {
			let data = new proto.ReqRoomList();
			data.userId = Global.userId;
			let body = proto.ReqRoomList.encode(data).finish();
			Global.log("客户端发送请求房间列表");
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ROOM_LIST, body);
		}

		/*
		*请求进入房间
		*/
		public REQ_ROOMENTERROOM(roomData: any, isContinue: boolean = false, tableId: string = ""): void {
			let data = new proto.ReqEnterRoom();
			data.userId = Global.userId;
			data.roomId = roomData.id;
			data.mapId = roomData.mapId;
			data.tableId = tableId;
			data.goldCoin = Global.gameCoin;
			if (isContinue == true) {
				data.type = roomData.id;
			}
			let body = proto.ReqEnterRoom.encode(data).finish();
			Global.log("客户端发送请求进入房间" + roomData.id);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ENTER_ROOM, body);
		}

		/*
		*请求离开房间
		*/
		public REQ_ROOMLeaveRoomReq(pos: any): void {
			// let data = new room.OGLeaveRoomReq();
			// data.userName = Global.userName;
			// data.userPos = pos;
			// data.change = 1;
			// let body = room.OGLeaveRoomReq.encode(data).finish();
			// Global.log("客户端发送请求离开房间"+1);
			// room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_LEAVEROOM,body);
		}
		//请求进入牌桌
		public ReqEnterTable(): void {
			let data = new proto.ReqEnterTable();
			data.userId = Global.userId;
			data.tableId = Global.tableId;
			data.tableMapId = Global.tableMapId;
			data.goldCoin = Global.gameCoin;
			let body = proto.ReqEnterTable.encode(data).finish();
			Global.log("客户端发送请求进入牌桌" + data.tableId);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ENTER_TABLE, body);

		}
		/*准备消息*/
		public ReqReady(): void {

			let data = new proto.ReqReady();
			data.tableId = Global.tableId;
			data.tableMapId = Global.tableMapId;
			data.seatNo = Global.userSit;
			data.userId = Global.userId;
			data.status = 1;
			var body = proto.ReqReady.encode(data).finish();
			RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.READY, body);
			Global.log("请求准备");

		}
		//请求游戏的操作
		public ReqSendCard(cardsGroup: CardsGroupInfo): void {

			var cardsArray: any[] = [];
			var ObtainCardSit: number = 0;

			var ObtainCard;
			if (cardsGroup.obtainCard.CardID != 0) {
				ObtainCard = new proto.CardInfo();
				ObtainCard.CardID = cardsGroup.obtainCard.CardID;
				ObtainCardSit = cardsGroup.obtainCard.Sit;
			}
			for (var i: number = 0; i < cardsGroup.cards.length; i++) {
				var cardInfobody = new proto.CardInfo();
				cardInfobody.CardID = cardsGroup.cards[i].CardID;
				cardsArray.push(cardInfobody);
			}

			var cardsGroupbody = new proto.CardsGroup();
			cardsGroupbody.Sit = Global.userSit;
			if (game.GameParmes.hasClickTing == true) {
				cardsGroupbody.Type = game.CardsGroupType.CALL;
			} else {
				cardsGroupbody.Type = cardsGroup.CardsGroupType;
			}

			cardsGroupbody.Cards = cardsArray;
			cardsGroupbody.ObtainCard = ObtainCard;
			cardsGroupbody.ObtainCardSit = ObtainCardSit;

			let data = new proto.ReqSendCard();
			data.Card = cardsGroupbody;
			data.tableId = Global.tableId;
			data.tableMapId = Global.tableMapId;
			data.userId = Global.userId;
			// data.roundId = Global.round
			let body = proto.ReqSendCard.encode(data).finish();
			console.log("请求游戏的操作" + JSON.stringify(data));
			Global.log("请求游戏的操作" + JSON.stringify(data));
			RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.DISCARD, body);
		}
			//请求起手胡操作
			public ReqSendCardQiShou(cardsGroup: CardsGroupInfo): void {

				var cardsArray: any[] = [];
				var ObtainCardSit: number = 0;
	
				var ObtainCard;
		
				var cardsGroupbody = new proto.CardsGroup();
				cardsGroupbody.Sit = Global.userSit;
			    cardsGroupbody.Type = game.CardsGroupType.QISHOUHU;
				cardsGroupbody.Cards = cardsArray;
				cardsGroupbody.ObtainCard = ObtainCard;
				cardsGroupbody.ObtainCardSit = ObtainCardSit;
	
				let data = new proto.ReqSendCard();
				data.Card = cardsGroupbody;
				data.tableId = Global.tableId;
				data.tableMapId = Global.tableMapId;
				data.userId = Global.userId;
				// data.roundId = Global.round
				let body = proto.ReqSendCard.encode(data).finish();
				Global.log("请求游戏的操作" + JSON.stringify(data));
				RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.DISCARD, body);
			}
		
		/*
		*请求下一张牌
		*/
		public ReqZhuaPai(id: number): void {
			let data = new proto.ReqAppointNextCard();
			data.tableId = Global.tableId;
			data.tableMapId = Global.tableMapId;
			data.userId = Global.userId;
			var card: proto.CardInfo = new proto.CardInfo();
			card.CardID = id;
			data.cards = [card];
			var body = proto.ReqAppointNextCard.encode(data).finish();
			RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.APPOINT_NEXT_CARD, body);
			Global.log("请求下一张牌");
		}
		/*
		*请求开局发牌
		*/
		public ReqZxiaPai(zhuang: number, handCard: Array<proto.HandCards>): void {
			let data = new proto.ReqAppointCards();
			data.tableMapId = Global.tableMapId;
			data.userId = Global.userId;
			data.banker = zhuang;
			data.handCards = handCard;
			var body = proto.ReqAppointCards.encode(data).finish();
			RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.APPOINT_CARD, body);
			Global.log("请求开局发牌");
		}
		//请求解除托管
		public TRUST(): void {

			// required int64 userId     = 1;//用户ID
			// required string tableId     = 2;//牌桌ID
			// required int64 tableMapId = 3;//牌桌映射ID
			// required int64 type = 4;    //1 取消托管
			// extensions 100 to 200;

			let data = new proto.ReqTrust();
			data.tableMapId = Global.tableMapId;
			data.userId = Global.userId;
			data.tableId = Global.tableId;
			data.type = 1;
			var body = proto.ReqTrust.encode(data).finish();
			RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.TRUST, body);
		}
		/*
		*请求开始
		*/
		public REQ_ROOMQickGameReqReq(pos: any): void {
			// let data  = new room.OGQickGameReq()
			// data.userName = Global.userName;
			// data.userPos = pos;
			// let body = room.OGQickGameReq.encode(data).finish();
			// Global.log("客户端发送请求开始");
			// room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_QUICKGAME,body);
		}
		public REQ_GAMECONTINUR(): void {
			// let data = new room.OGContinueGameReq();
			// data.username = Global.userName;
			// let body = room.OGContinueGameReq.encode(data).finish();
			// Global.log("客户端请求断线续玩消息");
			// room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_CONTINUE_GAME,body);
		}
	}
}