module game {
	export class GamePositionUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		/*方位底*/
		private imgLeft: eui.Image;
		private imgUp: eui.Image;
		private imgRight: eui.Image;
		private imgDown: eui.Image;

		/*方位*/
		private imgIconLeft: eui.Image;
		private imgIconUp: eui.Image;
		private imgIconRight: eui.Image;
		private imgIconDown: eui.Image;

		private lbTime: eui.BitmapLabel;

		private mcTimer: egret.Timer;
		private nCount: number = 0;
		private strState: string = "";
		protected childrenCreated(): void {
			super.childrenCreated();

			//this.visible = false;

			this.mcTimer = new egret.Timer(1000);
			this.mcTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			this.lbTime.text = GameParmes.chiPengGangSurplusTime + "";
		}

		public setPosition(): void {
			this.visible = true;
			for (var i: number = 0; i < 4; i++) {
				let p: number = Global.getUserPosition(i);
				let str: string = Global.getCurrentPositionName(i);
				if (p == 0) {
					this.imgLeft.source = "ps_" + str + "_dark_left";
					if (Global.language == "cn") {
						this.imgIconLeft.source = "ps_" + str + "_dark";
					} else {
						this.imgIconLeft.source = "ps_" + str + "_dark_" + Global.language + "_png";
					}

				} else if (p == 1) {
					this.imgUp.source = "ps_" + str + "_dark_up";
					if (Global.language == "cn") {
						this.imgIconUp.source = "ps_" + str + "_dark";
					} else {
						this.imgIconUp.source = "ps_" + str + "_dark_" + Global.language + "_png";
					}

				} else if (p == 2) {
					this.imgRight.source = "ps_" + str + "_dark_right";
					if (Global.language == "cn") {
						this.imgIconRight.source = "ps_" + str + "_dark";
					} else {
						this.imgIconRight.source = "ps_" + str + "_dark_" + Global.language + "_png";
					}

				} else if (p == 3) {
					this.imgDown.source = "ps_" + str + "_dark_down";
					if (Global.language == "cn") {
						this.imgIconDown.source = "ps_" + str + "_dark";
					} else {
						this.imgIconDown.source = "ps_" + str + "_dark_" + Global.language + "_png";
					}

				}
			}
		}
		public setCurrentPosition(n: number): void {

			this.setPosition();
			let p: number = Global.getUserPosition(n);
			let str: string = Global.getCurrentPositionName(n);
			if (p == 0) {
				this.imgLeft.source = "ps_" + str + "_light_left";
				if (Global.language == "cn") {
					this.imgIconLeft.source = "ps_" + str + "_light";
				} else {
					this.imgIconLeft.source = "ps_" + str + "_light_" + Global.language + "_png";
				}

			} else if (p == 1) {
				this.imgUp.source = "ps_" + str + "_light_up";
				if (Global.language == "cn") {
					this.imgIconUp.source = "ps_" + str + "_light";
				} else {
					this.imgIconUp.source = "ps_" + str + "_light_" + Global.language + "_png";
				}

			} else if (p == 2) {
				this.imgRight.source = "ps_" + str + "_light_right";
				if (Global.language == "cn") {
					this.imgIconRight.source = "ps_" + str + "_light";
				} else {
					this.imgIconRight.source = "ps_" + str + "_light_" + Global.language + "_png";
				}

			} else if (p == 3) {
				this.imgDown.source = "ps_" + str + "_light_down";
				if (Global.language == "cn") {
					this.imgIconDown.source = "ps_" + str + "_light";
				} else {
					this.imgIconDown.source = "ps_" + str + "_light_" + Global.language + "_png";
				}

			}
		}
		public stopTime(): void {
			if (this.mcTimer.running) {
				this.mcTimer.stop();
			}
			this.nCount = 0;
			this.lbTime.text = GameParmes.chiPengGangSurplusTime + "";
			this.strState = "";
		}
		public startTime(count: number, str: string = ""): void {
			console.log(count, str);
			this.mcTimer.start();
			this.nCount = count;
			this.lbTime.text = this.nCount + "";
			this.strState = str;
		}
		private onTimer(): void {
			if (this.nCount > 0) {
				this.nCount -= 1;
				this.lbTime.text = this.nCount + "";
			} else {
				if (this.mcTimer.running) {
					this.mcTimer.stop();
				}
				if (this.strState != "") {
					this.dispatchEvent(new egret.Event("OnTimeComplete", true, true, this.strState));
				}
			}
		}
	}
}