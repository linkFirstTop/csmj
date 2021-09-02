module game {
	export class GameUserInfo {
		public constructor() {
		}
		/**
		 * 玩家名称
		 * **/
		public userName:string = "";
		/**
		 * 玩家座位号
		 * **/
		public  userSit:number = -1;
		/**
		 * 玩家展示名称
		 * **/
		public  userShowName:string = "";
		/**
		 * 玩家头像
		 * **/
		public  userImage:string = "";
		/*
		*玩家金币
		*/
		public userCoin:number = 0;
		/**
		 * 定缺
		 * **/
		public  cardType:number = -1;//万条并 012

	}
}