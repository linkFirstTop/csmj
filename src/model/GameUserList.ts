module game {
	export class GameUserList {
		public constructor() {
		}
		public static arrUserList: Array<game.GameUserInfo> = [];
		public static saveUserListInfo(arr: Array<any>): void {
			game.GameUserList.arrUserList = [];
			for (let i: number = 0; i < arr.length; i++) {
				let info = arr[i];
				let user: game.GameUserInfo = new game.GameUserInfo();
				user.userName = info.user.nickName;
				user.userShowName = info.user.nickName;
				user.userSit = info.seatNo;
				user.userCoin = Number(info.user.goldCoin);
				user.userImage = info.user.avatar;
				game.GameUserList.arrUserList.push(user);
				if (user.userName == Global.userName) {
					Global.userSit = user.userSit;
				}
			}
		}
		/**
		 * 根据座位号获取玩家个人信息
		 * */
		public static getPlayerformSit(sit: number): game.GameUserInfo {
			return game.GameUserList.arrUserList[sit];
		}
	}
}

