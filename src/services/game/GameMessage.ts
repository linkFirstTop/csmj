module game {
	export class GameMessage {
		public static GAME_BASE: string = "GAME_MSG_BASE";
		public static VGID_CLIENT: string = "GAME_CLIENT_BASE";
		/**


		public static VGID_GAME_GAMESTATUS: string = GameMessage.GAME_BASE + "VGID_GAME_GAMESTATUS";
		public static VGID_GAME_SYNCGAMEDATA: string = GameMessage.GAME_BASE + "VGID_GAME_SYNCGAMEDATA";
		public static VGID_GAME_GAMESTART: string = GameMessage.GAME_BASE + "VGID_GAME_GAMESTART";
		

		/**游戏状态 */
		public static VGID_GAME_GAMESTATUS: string = GameMessage.VGID_CLIENT + "VGID_GAME_GAMESTATUS";

		


		/**发牌信息 */
		public static VGID_GAME_GAMESTART: string = GameMessage.VGID_CLIENT + "VGID_GAME_GAMESTART";

		/**发牌信息 */
		public static VGID_GAME_SENDCARD: string = GameMessage.VGID_CLIENT + "VGID_GAME_SENDCARD";

	
		public static VGID_GAME_GAMERESULT: string = GameMessage.VGID_CLIENT + "VGID_GAME_GAMERESULT";
		/**行牌单播消息 */
		public static VGID_GAME_OPERATION: string = GameMessage.VGID_CLIENT + "VGID_GAME_OPERATION";

		/**行牌 应答 */
	    public static VGID_USER_OPERATION: string = GameMessage.VGID_CLIENT + "VGID_USER_OPERATION";

		/**
		 *服务器通知客户端托管
		*/
		public static VGID_USER_MANAGED: string = GameMessage.VGID_CLIENT + "VGID_USER_MANAGED";

		/**
		 *广播聊天
		*/
		public static VGID_USER_CHAT: string = GameMessage.VGID_CLIENT + "VGID_USER_CHAT";


		/**发牌器 */
	    public static VGID_SERVICE_MAGICTILES: string = GameMessage.VGID_CLIENT + "VGID_SERVICE_MAGICTILES";




	}

}