module room {
	export class RoomProtocol {
		public constructor() {
		}
		public static GF_REQ: number = 0x00000000;
		// public  static  GF_ACK:number = 0x80000000;
		public static GF_ACK: number = 0x00000000;
		public static COMMON_BASE: number = 0x010000;
		public static ACCESS_BASE: number = 0x020000;
		public static ROOM_BASE: number = 0x040000;
		public static GAME_BASE: number = 0x080000;

		public static HEARTBEAT: number = RoomProtocol.COMMON_BASE + 0x00;
		public static SVR_REGISTER: number = RoomProtocol.COMMON_BASE + 0x01;

		public static KICK: number = RoomProtocol.COMMON_BASE + 0x02;

		public static NOT_CURRENCY: number = RoomProtocol.COMMON_BASE + 0x10;
		public static NOT_NOTIFY: number = RoomProtocol.COMMON_BASE + 0x11;
		public static NOT_BREAK: number = RoomProtocol.COMMON_BASE + 0x12;

		public static TRANSFER: number = RoomProtocol.COMMON_BASE + 0xFF;

		public static LOGIN: number = RoomProtocol.ACCESS_BASE + 0x01;
		public static ROOM_LIST: number = RoomProtocol.ACCESS_BASE + 0x02;
		public static ROOM_STATUS: number = RoomProtocol.ACCESS_BASE + 0x03;

		public static ACCOUNT_AVAILABLE: number = RoomProtocol.ACCESS_BASE + 0x0F;
		public static QUERY_COIN: number = RoomProtocol.ACCESS_BASE + 0x10;
		public static PLAYING_RECORD: number = RoomProtocol.ACCESS_BASE + 0x11;

		public static ENTER_ROOM: number = RoomProtocol.ROOM_BASE + 0x01;
		public static LEAVE_ROOM: number = RoomProtocol.ROOM_BASE + 0x02;

		public static NOT_ENTERTABLE: number = RoomProtocol.ROOM_BASE + 0x10;

		public static ENTER_TABLE: number = RoomProtocol.GAME_BASE + 0x01;
		public static LEAVE_TABLE: number = RoomProtocol.GAME_BASE + 0x02;
		public static READY: number = RoomProtocol.GAME_BASE + 0x03;
		public static DISCARD: number = RoomProtocol.GAME_BASE + 0x04;
		public static TRUST: number = RoomProtocol.GAME_BASE + 0x05;

		public static NOT_CHAIR: number = RoomProtocol.GAME_BASE + 0x10;
		public static NOT_BUHUA: number = RoomProtocol.GAME_BASE + 0x11;
		public static NOT_CARDS: number = RoomProtocol.GAME_BASE + 0x12;
		public static NOT_BUHUAENDS: number = RoomProtocol.GAME_BASE + 0x13;
		public static NOT_USER_OPERATION: number = RoomProtocol.GAME_BASE + 0x14;
		public static NOT_SEND_CARD: number = RoomProtocol.GAME_BASE + 0x15;
		public static NOT_CHAT: number = RoomProtocol.GAME_BASE + 0x1F;

		public static NOT_USER_TING: number = RoomProtocol.GAME_BASE + 0x20;
		public static NOT_GAME_END: number = RoomProtocol.GAME_BASE + 0x21;
		public static NOT_GAME_RESULT: number = RoomProtocol.GAME_BASE + 0x22;
		//通知扎鸟
		public static NOT_ZA_NIAO: number = RoomProtocol.GAME_BASE + 0x23;
		public static SVR_CREATE_TABLE: number = RoomProtocol.GAME_BASE + 0x40;
		public static SVR_DISMISS_TABLE: number = RoomProtocol.GAME_BASE + 0x41;
		public static SVR_QUERY_CHIPS: number = RoomProtocol.GAME_BASE + 0x44;
		public static SVR_NOT_STATUS: number = RoomProtocol.GAME_BASE + 0x45;
		public static SVR_NOT_BILL: number = RoomProtocol.GAME_BASE + 0x46;
		public static SVR_NOT_GAMEOVER: number = RoomProtocol.GAME_BASE + 0x47;

		public static APPOINT_CARD: number = RoomProtocol.GAME_BASE + 0xFF;//请求开始指定发牌
		public static APPOINT_NEXT_CARD: number = RoomProtocol.GAME_BASE + 0xFE;//请求指定下一张牌
	}
}