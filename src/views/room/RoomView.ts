module room {
	export class RoomView extends egret.DisplayObjectContainer {
		private roomUI: room.RoomMainUI;
		public constructor() {
			super();
			this.onInitView();
			this.addMEL();
		}
		public onUpdataView(): void {
			this.onUpdataUserInfo();

		}

		public onResize(): void {
			if (this.roomUI) {
				this.roomUI.onResize();
			}
		}
		/*初始化view*/
		private onInitView(): void {
			this.roomUI = new room.RoomMainUI();
			this.addChild(this.roomUI);
		}
		private addMEL(): void {
			GDGame.Msg.ins.addEventListener(RoomMessage.ON_GAME_LIST, this.onUpdataRoomList, this);
			GDGame.Msg.ins.addEventListener(RoomMessage.OGID_ROOM_UPDATECOIN, this.onUpdataUserInfo, this);
		}
		
		/*更新房间列表*/
		private onUpdataRoomList(evt: egret.Event): void {
			var arrList: Array<any> = evt.data.roomInfo;
			this.roomUI.updataRoomList(arrList);
		}
		/*更新玩家信息*/
		private onUpdataUserInfo(): void {
			if (this.roomUI.isCreated == true) {
				this.roomUI.updataUserInfo();
			}

		}
	}
}