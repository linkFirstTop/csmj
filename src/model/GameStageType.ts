module game {
	export class GameStageType {
		public constructor() {
		}
		/**
		 * 游戏开始状态
		 * **/
		public static STARGAME: number = 1;
		/**
		 * 游戏补花状态
		 * **/
		public static BUHUA: number = 2;
		/**
		 * 游戏打牌阶段
		 * **/
		public static PLAYING: number = 3;
		/**
		 * 游戏结算阶段
		 * **/
		public static GAMEOVER: number = 4;
		/**
		 * 游戏换三张状态
		 * **/
		public static CHANGE: number = 6;
		/**
		 * 游戏定缺状态
		 * **/
		public static DINGQUE: number = 7;

		/**
		* 玩家出牌
		*/
		public static SELFTURN : number = 5;

		/**
		 * 其他玩家出牌
		 */
		public static OTHERTURN : number = 5;
	 
	}

	export class GameTurnType {
		public constructor() {
		}
		

		/**
		 * 玩家出牌
		 */
		 public static SELFTURN : number = 0;

		/**
		 * 其他玩家出牌
		 */
		 public static OTHERTURN : number = 1;

		// /**
		//  * 游戏定缺状态
		//  * **/
		// public static DINGQUE: number = 7;
	}
}