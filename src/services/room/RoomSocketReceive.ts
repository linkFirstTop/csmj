module room {
	export class RoomSocketReceive {
		public constructor() {
		}
		public initHandlers(id: number, byte: egret.ByteArray): void {
			GDGame.Msg.ins.addEventListener("OnGameResLoad", this.onGameResLoad, this);
			switch (id) {
				case RoomProtocol.GF_ACK | RoomProtocol.LOGIN://返回进入游戏服务结果
					this.ON_ACK_LOGIN(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.HEARTBEAT://发送心跳
					this.ON_ACK_DuxLiveTick(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.ROOM_LIST://请求房间列表
					this.ON_ACK_GAME_LIST(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.ENTER_ROOM://请求进入房间
					this.ON_ACK_ROOM_ENTERROOM(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_ENTERTABLE:
					this.NOT_ENTERTABLE(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.ENTER_TABLE:
					this.ENTER_TABLE(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_CARDS:
					this.NOT_CARDS(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_BUHUA:
					this.NOT_BUHUA(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_BUHUAENDS:
					this.NOT_BUHUAENDS(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_USER_OPERATION:
					this.NOT_USER_OPERATION(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_SEND_CARD:
					this.NOT_SEND_CARD(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_CHAT:
					this.NOT_CHAT(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_GAME_RESULT:
					this.NOT_GAME_RESULT(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_GAME_END:
					this.NOT_GAME_END(byte);
					break;
				//通知扎鸟
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_ZA_NIAO:
					this.NOT_ZA_NIAO(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_USER_QISHOUHU:
				this.NOT_QISHOU_HU(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.ACK_USER_QISHOUHU:
				this.ACK_SHOW_QISHOU_HU(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.DISCARD:
					this.DISCARD(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_USER_TING:
					this.NOT_USER_TING(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.NOT_CHAIR:
					this.NOT_CHAIR(byte);
					break;
				case RoomProtocol.GF_ACK | RoomProtocol.KICK:
					this.KICK(byte);
					break;

			}
		}
		//返回进入游戏服务结果
		private ON_ACK_LOGIN(byte: egret.ByteArray): void {
			var body: proto.AckLogin = proto.AckLogin.decode(byte.bytes);
			Global.log("收到登陆返回:" + body.result);
			if (body.result == 0) {//登陆成功
				room.RoomWebSocket.instance().roomSender.REQ_ROOMLIST();

				Global.userName = body.userName;
				Global.gameCoin = Number(body.goldCoin);
				Global.userId = Number(body.userId);
				GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.OGID_ROOM_UPDATECOIN));
				if (body.roomId && body.roomId != null && body.roomId != undefined && body.roomId != 0) {
					Global.isContinue = true;
					Global.roomId = body.roomId;
					Global.tableId = body.tableId;
				}
				// if(body.userPos.tableGuid != ""){
				// 	Global.isContinue = true;
				// 	if(Global.isGameLoad){
				// 		room.RoomWebSocket.instance().roomSender.REQ_GAMECONTINUR();
				// 	}
				// }
				try {
					window["sendUserInfo"](body.userName, Global.gameID, Global.loadTime);
				} catch (error) {
				}
			} else if (body.result == 303) {


				ViewManager.ins.showAlert(Global.dic["游戏中"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});

			}
			else if (body.result == 302) {

				ViewManager.ins.showAlert(Global.dic["用户频繁登陆"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 203) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 301) {
				ViewManager.ins.showAlert(Global.dic["token过期"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 305) {
				ViewManager.ins.showAlert(Global.dic["状态异常"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 401) {
				ViewManager.ins.showAlert(Global.dic["游戏未开放"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 501) {
				ViewManager.ins.showAlert(Global.dic["单一钱包"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == -1) {
				ViewManager.ins.showAlert(Global.dic["停服"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else {
				ViewManager.ins.showAlert("登录失败" + body.result, function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			}
		}

		//返回游戏列表
		private ON_ACK_GAME_LIST(byte: egret.ByteArray): void {
			console.log("重连ON_ACK_GAME_LIST----");
			var body: proto.AckRoomList = proto.AckRoomList.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.ON_GAME_LIST, true, true, body));
			Global.roomData = body.roomList;
			if (Global.roomId && Global.roomId != null && Global.roomId != undefined && Global.roomId != 0) {

				for (var i: number = 0; i < body.roomList.length; i++) {
					if (body.roomList[i].id == Global.roomId) {
						Global.roomInfo = body.roomList[i];
						if (Global.isGameLoad == true) {
							room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(body.roomList[i], true, Global.tableId);
						} else {
							this.roomData = body.roomList[i];
							Global.isShowGame = true;
						}

						return;
					}
				}
			}
			//断线重连进来,不用主动连接，等服务器推送接受链接服务器
			// if(Global.myPos.tableGuid != "" ){
			// 	//ViewManager.ins.showWait("正在进入未完成牌局的房间，请等待...");
			// 	//TipsUtils.showTipsFromCenter("正在进入未完成牌局的房间，请等待...");
			// }else{
			// 	ViewManager.ins.hideWait();
			// }
		}
		private roomData: any;
		private onGameResLoad(): void {
			if (Global.isShowGame == true && this.roomData != null) {
				Global.isShowGame = false;
				room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(this.roomData, true, Global.tableId);
			}

		}
		//返回离开桌子结果
		private ON_ACK_LEAVE_TAB(byte: egret.ByteArray): void {
			Global.log("返回离开桌子结果");
			// var body:room.OGLeaveRoomAck = room.OGLeaveRoomAck.decode(byte.bytes);
			// GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.ON_LEAVE_TAB,true,true,body));
		}

		//接收心跳消息
		private ON_ACK_DuxLiveTick(byte: egret.ByteArray): void {
			room.RoomWebSocket.instance().nRoomTimerCount = 0;
		}
		//接收到请求开始游戏
		private ON_ACK_QUICKGAME(byte: egret.ByteArray): void {
			Global.log("接收到请求开始游戏");
			GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.ON_QINGQIU_START_GAME));
		}
		//请求进入房间
		private ON_ACK_ROOM_ENTERROOM(byte: egret.ByteArray): void {
			var body = proto.AckEnterRoom.decode(byte.bytes);
			Global.log("请求进入房间" + body.result);

			if (body.tableMapId && body.tableMapId != undefined && body.tableMapId != null && body.tableMapId != 0) {
				Global.tableMapId = Number(body.tableMapId);
				Global.tableId = body.tableId;
				room.RoomWebSocket.instance().roomSender.ReqEnterTable();
			}
			ViewManager.ins.hideWait();

			if (body.result == 0) {

				ViewManager.ins.switchToGame();
				ViewManager.ins.reTimeOut();
				try {
					window["sendUserClick"](Global.userName, Global.gameID, body.roomId);
				} catch (error) {
				}
			} else if (body.result == 100) {

				ViewManager.ins.showAlert(Global.dic["状态异常"], function () {
					ViewManager.ins.leaveGameView();
				});


			} else if (body.result == 1) {

				ViewManager.ins.showAlert(Global.dic["停服"], function () {
					ViewManager.ins.leaveGameView();
				});


			} else if (body.result == -2) {


				ViewManager.ins.showAlert(Global.dic["金币不足"], function () {
					ViewManager.ins.leaveGameView();
				});

			} else if (body.result == -3) {


				ViewManager.ins.showAlert(Global.dic["金币太高"], function () {
					ViewManager.ins.leaveGameView();
				});

			} else if (body.result == 203) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 303) {
				ViewManager.ins.showAlert(Global.dic["游戏中"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 305) {
				ViewManager.ins.showAlert(Global.dic["状态异常2"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 501) {
				ViewManager.ins.showAlert(Global.dic["单一钱包2"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 1002) {
				ViewManager.ins.showAlert(Global.dic["停服"], function () {
					window.location.href = location.href;//+"?ver="+Math.random()*9999;
				});
			} else if (body.result == 1003) {
				ViewManager.ins.showAlert(Global.dic["金币不足"], function () {
					ViewManager.ins.leaveGameView();
				});
			} else if (body.result == 1004) {
				ViewManager.ins.showAlert(Global.dic["金币不足"], function () {
					ViewManager.ins.leaveGameView();
				});
			} else {
				TipsUtils.showTipsDownToUp("进入房间失败" + body.result);
			}
		}
		//下发进入牌桌
		private NOT_ENTERTABLE(byte: egret.ByteArray): void {
			var body = proto.NotEnterTable.decode(byte.bytes);
			game.GamePlayData.initData();
			game.GameParmes.initData();
			Global.log("进入游戏结果" + body.roomId);

			Global.roomId = body.roomId;
			Global.tableId = body.tableId;
			Global.tableMapId = Number(body.tableMapId);
			if (Global.openDell == true) {
				room.RoomWebSocket.instance().roomSender.ReqZxiaPai(Global.zhuangSit, Global.handCardsFP);
			}
			room.RoomWebSocket.instance().roomSender.ReqEnterTable();
		}
		//请求进入牌桌结果
		private ENTER_TABLE(byte: egret.ByteArray): void {
			var body = proto.AckEnterTable.decode(byte.bytes);
			Global.log("请求进入牌桌结果" + JSON.stringify(body));
			if (body.result == 0) {
				Global.userSit = body.seatNo;
				game.GamePlayData.isTuoguan = false;

				game.GameParmes.firstSit = -1;
				game.GameParmes.chiPengGangSurplusTime = body.countdown.guanpai;
				game.GameParmes.gamePlayTime = body.countdown.playCard;
				game.GameUserList.saveUserListInfo(body.table.chairs);
				Global.strGameGUID = body.roundId;
				room.RoomWebSocket.instance().roomSender.ReqReady();
				if (body.info != null) {
					game.GameParmes.firstSit = body.info.banker;
					game.GameController.AckPlayerContinued(body);
					if (body.info.operations) {
						if ((body.info.operations && body.info.operations.operations.length > 0) || (body.info.operations.callCards && body.info.operations.callCards.length > 0)) {
							game.GameController.AckGameUserOperation(body.info.operations);
						}
					}
					if (body.info.trust == 1) {
						game.GamePlayData.isTuoguan = true;
					}
				}
				GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAMEPLAYERLIST, true, true, body));
			}
		}
		private NOT_CARDS(byte: egret.ByteArray): void {
			var body = proto.NotCards.decode(byte.bytes);
			game.GameParmes.firstSit = body.banker;

			game.GameController.AckGameDiceAndCards(body);
			ViewManager.ins.reTimeOut();
			Global.log("接收到发牌消息" + body.banker);

		}
		private NOT_BUHUA(byte: egret.ByteArray): void {
			var body = proto.NotBuhua.decode(byte.bytes);
			Global.log("收到补花消息");
			game.GameController.NotBuhua(body);


		}


		private NOT_BUHUAENDS(byte: egret.ByteArray): void {
			var body = proto.NotBuhuaEnds.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAMESTAGE, true, true, body));
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAME_STARTPLAYING));
			game.GameParmes.gameStage = game.GameStageType.PLAYING;
			Global.log("收到补花结束消息");
		}
		private NOT_USER_OPERATION(byte: egret.ByteArray): void {

			var body = proto.NotUserOperation.decode(byte.bytes);
			Global.log("服务器返回客户端可进行吃碰杠的操作" + JSON.stringify(body));
			if ((body.operations && body.operations.length > 0) || (body.callCards && body.callCards.length > 0)) {
				game.GameController.AckGameUserOperation(body);
			}

		}
		private KICK(byte: egret.ByteArray): void {
			var body = proto.NotKick.decode(byte.bytes);
			Global.log("被踢" + body.code);
			if (body.code == 1) {

				ViewManager.ins.showAlert(Global.dic["在别处登陆账号"], function () {
					window.location.href = location.href;
				});
			}
		}
		private DISCARD(byte: egret.ByteArray): void {
			var body = proto.AckSendCard.decode(byte.bytes);
			Global.log("服务器返回客户端单独对牌的结果" + body.result);
		}
		private NOT_CHAIR(byte: egret.ByteArray): void {
			var body = proto.NotChairStatus.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.NOT_CHAIR, true, true, body));
		}
		private NOT_USER_TING(byte: egret.ByteArray): void {
			//var body = proto.
		}
		private NOT_SEND_CARD(byte: egret.ByteArray): void {

			var body = proto.NotSendCard.decode(byte.bytes);
			Global.log("服务器返回客户端对牌的操作" + JSON.stringify(body));
			game.GameController.AckGameSendCards(body);
		}
		private NOT_GAME_END(byte: egret.ByteArray): void {
			var body = proto.NotGameEnd.decode(byte.bytes);
			Global.log("服务器通知客户端结算亮牌" + JSON.stringify(body));
			game.GameController.AckGameEnd(body);
		}
		// 通知扎鸟
		private NOT_ZA_NIAO(byte: egret.ByteArray): void {
			var body = proto.NotZaNiao.decode(byte.bytes);
			Global.log("服务器通知客户端扎鸟消息" + JSON.stringify(body));
			game.GameController.AckGameZnaio(body);

		}
		// 通知起手胡
		private NOT_QISHOU_HU(byte: egret.ByteArray): void {
			var body = proto.NotUserQishouhu.decode(byte.bytes);
			Global.log("服务器通知客户端起手胡消息" + JSON.stringify(body));
			game.GameController.AckQiShouhu(body);

		}
		// 展示起手胡
		private ACK_SHOW_QISHOU_HU(byte: egret.ByteArray): void {
			var body = proto.AckQishouhu.decode(byte.bytes);
			Global.log("客户端收到服务器起手胡展示消息" + JSON.stringify(body));
			game.GameController.AckShowQiShouhu(body);
			
			// for (let i: number = 0; i < body.qishouhus.length; i++) {
			// 	let t ="";
			// 	for(let j:number =0;j<body.qishouhus[i].qishouType.length;j++){
            //         if(body.qishouhus[i].qishouType[j]==1){
            //             t+="b ";
			// 		}else if(body.qishouhus[i].qishouType[j]==2){
			// 			t+="x ";
			// 		}else if(body.qishouhus[i].qishouType[j]==3){
			// 			t+="l ";
			// 		}else if(body.qishouhus[i].qishouType[j]==4){
			// 			t+="q ";
			// 		}
			// 	}
			// 	this["qsh" + i].text=t;
			// 	this["qsh" + 	body.qishouhus[i].winners].visible = true;
			// }
			// for (let i: number = 0; i < 4; i++) {
			// 	this["qsh" + i].visible = true;
			// 	this["qsh" + i].text="l";
			// }

		}
		private NOT_GAME_RESULT(byte: egret.ByteArray): void {
			var body = proto.NotGameResult.decode(byte.bytes);
			Global.log("服务器通知客户端结果消息" + JSON.stringify(body));

			game.GameController.AckGameResult(body);

		}
		private NOT_CHAT(byte: egret.ByteArray): void {
			Global.log("聊天消息");
		}




	}
}