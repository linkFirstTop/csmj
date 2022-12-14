module room {
	export class RoomMessage {
		public constructor() {
		}
		public static ROOM_BASE:string = "ROOM_MSG_BASE";
		public static GAME_BASE:string = "GAME_MSG_BASE";
		public static CLIENT_BASE:string = "GAME_CLIENT_BASE";
		/**
		 *登录结果
			*/
		public static  ON_LOGIN:string =RoomMessage.ROOM_BASE+"ON_LOGIN";
		/**
		 *游戏列表
			*/
		public static  ON_GAME_LIST:string =RoomMessage.ROOM_BASE+"ON_GAME_LIST";
		/**
		 *创建桌子结果
			*/
		public static  ON_CREATE_TAB:string =RoomMessage.ROOM_BASE+"ON_CREATE_TAB";
		/**
		 *解散桌子结果
			*/
		public static  ON_DISBAND_TAB:string =RoomMessage.ROOM_BASE+"ON_DISBAND_TAB";
		/**
		 *广播解散桌子
			*/
		public static  ON_BROAD_DISBANDTAB:string =RoomMessage.ROOM_BASE+"ON_BROAD_DISBANDTAB";
		/**
		 *加入桌子结果
			*/
		public static  ACK_START_GAME:string =RoomMessage.ROOM_BASE+"ACK_START_GAME";
		/**
		 *离开桌子结果
			*/
		public static  ON_LEAVE_TAB:string =RoomMessage.ROOM_BASE+"ON_LEAVE_TAB";
		/**
		 *准备
			*/
		public static  ON_READY:string =RoomMessage.ROOM_BASE+"ON_READY";

		/**
		 *返回推送类  1账号被动挤
			*/
		public static  ON_BROAD_USER_MSG:string =RoomMessage.ROOM_BASE+"ON_BROAD_USER_MSG";
		/**
		 *连接异常   1服务器断开  2连接异常
			*/
		public static  ON_SOCKET_ERROR:string =RoomMessage.ROOM_BASE+"ON_SOCKET_ERROR";
		/**
		 *查询用户创建的牌桌
			*/
		public static  ON_QUERY_ROOM:string =RoomMessage.ROOM_BASE+"ON_QUERY_ROOM";
		/**
		 *通知牌桌当前信息
			*/
		public static  ON_TABUSER:string =RoomMessage.ROOM_BASE+"ON_TABUSER";
		/**
		 *通知请求启动游戏
			*/
		public static  ON_QINGQIU_START_GAME:string =RoomMessage.ROOM_BASE+"ON_QINGQIU_START_GAME";
		/**
		 *通知启动游戏
			*/
		public static  ON_START_GAME:string =RoomMessage.ROOM_BASE+"ON_START_GAME";

		/**
		 *通知更新钻石个数
			*/
		public static  ON_UPDATA_ZUANSHI:string =RoomMessage.ROOM_BASE+"ON_UPDATA_ZUANSHI";

		/**
		 *通知环信
			*/
		public static  ON_UPDATA_HX:string =RoomMessage.ROOM_BASE+"ON_UPDATA_HX";
		/**
		 * 更新位置信息
		 */
		public static ON_UPDATE_DISTANCE:string = RoomMessage.ROOM_BASE + "ON_UPDATE_DISTANCE";

		/**
		 * 金币变化
		 */
		public static OGID_ROOM_UPDATECOIN:string = RoomMessage.ROOM_BASE+"OGID_ROOM_UPDATECOIN";

		/**
		 *请求进入GameID创建的游戏服务
		*/
		public static  REQ_ENTERGAME:string = RoomMessage.GAME_BASE+"REQ_ENTERGAME";


		/**
		 *返回游戏未开时突然结束的广播消息
			*/
		public static  ACK_OVERGAME:string = RoomMessage.GAME_BASE+"ACK_OVERGAME";
		/**
		 *下发游戏阶段消息
			*/
		public static  ACK_GAMESTAGE:string = RoomMessage.GAME_BASE+"ACK_GAMESTAGE";

			/**
		 *下发游戏玩家列表
			*/
		public static ACK_GAMEPLAYERLIST: string = RoomMessage.GAME_BASE + "ACK_GAMEPLAYERLIST";
			/**
			 *
				*/
			public static  ACK_ENTER_TABLE:string = RoomMessage.GAME_BASE+"ACK_ENTER_TABLE";
			/**
			 *下发游戏规则
				*/
			public static  ACK_GAMERULE:string = RoomMessage.GAME_BASE+"ACK_GAMERULE";
			/**
			 *接收服务器发送的色子和手牌
				*/
			public static  ACK_GAMEDICEANDCARDS:string = RoomMessage.GAME_BASE+"ACK_GAMEDICEANDCARDS";
			/*庄家开始出牌*/
			public static ACK_GAME_STARTPLAYING:string = RoomMessage.GAME_BASE+"ACK_GAME_STARTPLAYING";
			/**
			 *客户端请求服务器理牌结束
				*/
			public static  REQ_GAMEHANDCARDSOVER:string = RoomMessage.GAME_BASE+"REQ_GAMEHANDCARDSOVER";
			
			/**
			 *游戏中请求的操作
				*/
			public static  REQ_GAMESENDCARD:string = RoomMessage.GAME_BASE+"REQ_GAMESENDCARD";
			/**
			 *游戏中返回玩家的操作
				*/
			public static  ACK_GAMESENDCARD:string = RoomMessage.GAME_BASE+"ACK_GAMESENDCARD";
			/**
			 *服务器通知客户端能够进行操作的权限  比如能吃碰杠胡的显示
				*/
			public static  ACK_GAMEUSEROPERATION:string = RoomMessage.GAME_BASE+"ACK_GAMEUSEROPERATION";
			/**
			 *服务器通知客户端结果消息
				*/
			public static  ACK_GAMERESULT:string = RoomMessage.GAME_BASE+"ACK_GAMERESULT";
			
			public static ACK_ALLGAMERESULT:string = RoomMessage.GAME_BASE+"ACK_ALLGAMERESULT";
			/**
			 *客户端请求服务器托管
				*/
			public static  REQ_GAMEPLAYERTRUST:string = RoomMessage.GAME_BASE+"REQ_GAMEPLAYERTRUST";
			/**
			 *服务器通知客户端托管
				*/
			public static  ACK_GAMEPLAYERTRUST:string = RoomMessage.GAME_BASE+"ACK_GAMEPLAYERTRUST";
	
	       /**
		   *断线重联后 继续游戏
			*/
			public static ACK_GAME_CONTINUE: string = RoomMessage.GAME_BASE + "ACK_GAME_CONTINUE";
	
			/**
			 *客户端请求服务器延时操作
				*/
			public static  REQ_GAMEDELAY:string = RoomMessage.GAME_BASE+"REQ_GAMEDELAY";
			/**
			 *服务器通知客户端延时操作
				*/
			public static  ACK_GAMEDELAY:string = RoomMessage.GAME_BASE+"ACK_GAMEDELAY";
	
			/**
			 *广播聊天
			*/
			public static ACK_GAME_CHAT:string = RoomMessage.GAME_BASE + "ACK_GAME_CHAT";
			/**
			 *广播断线
			*/
			public static ACK_GAME_DISCONNECTED:string = RoomMessage.GAME_BASE + "ACK_GAME_DISCONNECTED";
			/**
			 * GPS
			 */
			public static ACK_GAME_GPS:string = RoomMessage.GAME_BASE+"ACK_GAME_GPS";
	
		
		
	
	}
}