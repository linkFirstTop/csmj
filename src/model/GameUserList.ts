module game {
	export class GameUserList {
		public constructor() {
		}
		public static arrUserList: Array<game.GameUserInfo> = [];
		public static saveUserListInfo(arr: Array<any>): void {
		
			game.GameUserList.arrUserList = [];
			for (let i: number = 0; i < arr.length; i++) {
				let info:room.IVGUserInfo = arr[i];
				let user: game.GameUserInfo = new game.GameUserInfo();
				user.userName = info.userName;
				user.userShowName = info.showName;
				user.userSit = info.userPos.seatID;
				user.userCoin = Number(info.gameCoin);
				user.userPos = info.userPos;
				//user.userImage = info.user.avatar;
				game.GameUserList.arrUserList.push(user);
				if (user.userName == Global.userName) {
					Global.userSit = user.userSit;
				}
			}
		}


		public static updateUserListInfo(arr: Array<room.IVGUserInfo>) {
			for (let i: number = 0; i < arr.length; i++) {
				let info = arr[i];
				// console.log("====info",info)
				let user: game.GameUserInfo = this.arrUserList[i];
				if (!user) {
					user = new game.GameUserInfo();
					game.GameUserList.arrUserList.push(user);

				}
				user.userName = info.userName;
				user.userShowName = info.showName;
				user.userSit = info.userPos.seatID;
				user.userCoin = Number(info.gameCoin);
				user.userImage = "";
				user.origin = info;

				if (user.userName == Global.userName) {
					Global.userSit = user.userSit;
					// console.log("===在这个地方 给角色 座位 ID",Global.userSit)
				}
				user.init();
			}
		}
		/**
		 * 根据座位号获取玩家个人信息
		 * */
		public static getPlayerformSit(sit: number): game.GameUserInfo {
			return game.GameUserList.arrUserList[sit];
		}

		/**
		 * 获取自己的信息
		 * @returns 
		 */
		public static getCurrentPlayerInfo(): game.GameUserInfo {
			return game.GameUserList.arrUserList[2]
		}

		/**
		 * 根据名称 查询自己的座位
		 */
		public static getUserSitByName(name:string) {
			let sit = -1;
			game.GameUserList.arrUserList.forEach((e:game.GameUserInfo)=>{
				if(e.userName == name){
					sit = e.userSit
				}

			})
			return sit;
		}
	}

	export enum RoomStatus {
		/*
		*默认状态什么都不处理
		*/
		"开局等待" = 0,
		/**开局动画状态*/
		"初始化角色" = 1,
		/**开局状态*/
		"开始"      = 2,
		/**发牌状态*/
		"发牌" = 4,
		/**行牌状态*/
		"行牌" = 5,
		/**结算状态*/
		"结算" = 6,

	}

	export class RoomInfo {

		private static _ins: RoomInfo;

		public static get ins() {
			if (!this._ins) {
				this._ins = new RoomInfo();
			}
			return this._ins;
		}

		constructor() {
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.listenerUpdate, this);
			this.timer.start();
		}

		private timer: egret.Timer = new egret.Timer(1000);


		private _status: RoomStatus = RoomStatus["开局等待"];

		private _lastStatus: RoomStatus = RoomStatus["结算"];

		private _curStateEndTime: number = 0;

		public ChangeStatus(value: RoomStatus, timer: number) {
			GameParmes.gameStage = value;
			if (this._status === value) {
				return;
			}
			this._lastStatus = this._status;
			this._status = value;
			this._curStateEndTime = timer;
			if( GameParmes.gameStage  )
			GDGame.Msg.ins.dispatchEventWith(game.GameMessage.NTF_ROOM_STATE);
			// GDGame.Msg.ins.dispatchEventWith(game.GameMessage.VGID_GAME_GAMESTART);
		}

		public get status(): RoomStatus {
			return this._status;
		}

		public get curStateEndTime(): number {
			return this._curStateEndTime;
		}

		public get lastStatus(): RoomStatus {
			return this._lastStatus;
		}

		private listenerUpdate() {
			if (this._curStateEndTime <= 0) {
				return;
			}
			this._curStateEndTime -= 1;
		}



	}

}

