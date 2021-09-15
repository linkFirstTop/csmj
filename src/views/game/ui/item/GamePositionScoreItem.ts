module game {
	export class GamePositionScoreItem extends eui.Component implements eui.UIComponent {
		public bmp: eui.Image;
		public item: eui.Image;
		private fangXiang: string = "";

		public constructor() {
			super();
		}
		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);

		}
		protected childrenCreated(): void {
			super.childrenCreated();


		}

		//-----------------------------------初始化东西南北   0-东，1-西，2-南，3-北-----------------------------------
		public setData(str: string, p: number): void {

			this.clearUI();
			if (p == 0) {
				this.bmp.source = RES.getRes("direction_left");
				this.fangXiang = "left";
			} else if (p == 1) {
				this.bmp.source = RES.getRes("direction_up");
				this.fangXiang = "up";
			} else if (p == 2) {
				this.bmp.source = RES.getRes("direction_right");
				this.fangXiang = "right";
			} else {
				this.bmp.source = RES.getRes("direction_down");
				this.fangXiang = "down";
			}
			Global.log("当前位置=" + p + "sit=" + Global.userSit);// 0-左边，1-上边，2-右边，3下边    玩家座位号(0-东，1-西，2-南，3-北)
			if (str == "east") {

				this.fangXiang = Global.language + "dong_" + this.fangXiang;
				this.item.source = RES.getRes(this.fangXiang + "_1" + "_png");
			} else if (str == "west") {

				this.fangXiang = Global.language + "xi_" + this.fangXiang;
				this.item.source = RES.getRes(this.fangXiang + "_2" + "_png");
			} else if (str == "south") {

				this.fangXiang = Global.language + "nan_" + this.fangXiang;
				this.item.source = RES.getRes(this.fangXiang + "_2" + "_png");
			} else {

				this.fangXiang = Global.language + "bei_" + this.fangXiang;
				this.item.source = RES.getRes(this.fangXiang + "_2" + "_png");
			}


			this.onTweenLoopAnim();
		}
		//-----------------------------------循环亮不亮动画-----------------------------------
		private onTweenLoopAnim(): void {
			// console.log( this.bmp.visible);
			egret.Tween.get(this.bmp).to({ alpha: 0 }, 1500).call(function () {
				egret.Tween.get(this.bmp).to({ alpha: 1 }, 1500).call(function () {
					this.onTweenLoopAnim();
				}, this);
			}, this);
		}
		//-----------------------------------设置牌权显示-----------------------------------
		public setChoose(b: boolean) {
			this.bmp.visible = b;
			if (b == false) {
				this.item.source = RES.getRes(this.fangXiang + "_2" + "_png");
			} else {
				this.item.source = RES.getRes(this.fangXiang + "_1" + "_png");
			}
		}
		private clearUI() {
			this.fangXiang = "";
			egret.Tween.removeTweens(this.bmp);
			this.bmp.source = RES.getRes("");
			this.item.source = RES.getRes("");
		}

		public onClosed(): void {

			this.clearUI();
			this.removeChild(this.bmp);
			this.removeChild(this.item);
		}

	}
}