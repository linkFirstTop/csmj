module game {
	export class GamePosition extends eui.Component implements eui.UIComponent {

		private item0: game.GamePositionScoreItem;
		private item1: game.GamePositionScoreItem;
		private item2: game.GamePositionScoreItem;
		private item3: game.GamePositionScoreItem;
		private timeNum_lab: eui.BitmapLabel;
		private mcTimer: egret.Timer;
		private nCount: number = 0;
		private strState: string;

		public constructor() {
			super();
		}
		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		protected childrenCreated(): void {
			super.childrenCreated();

			this.mcTimer = new egret.Timer(1000);
			this.mcTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			this.timeNum_lab.text = GameParmes.chiPengGangSurplusTime + "";

			this.item3.item.x = 217;//右边
			this.item3.item.y = 61;

			this.item2.item.x = 130;//上边
			this.item2.item.y = 7;

			this.item1.item.x = 45;//左边
			this.item1.item.y = 61;

			this.item0.item.x = 130;//下边
			this.item0.item.y = 130;
		}



		//-----------------------------------东西南北方位-----------------------------------
		public setPositionItem(n: number) {
			for (var i: number = 0; i < 4; i++) {
				this["item" + i].setChoose(false);
				if (i == n) {
					(this["item" + i] as GamePositionScoreItem).setChoose(true);
				}
			}
		}

		public setPosition(n: number): void {
			this.visible = true;
			this.setCurrentRing();
			this.setPositionItem(n);
		}

		/** 
		 * 确定当前的圈，局
		 */
		public setCurrentRing(): void {
			for (let i: number = 0; i < 4; i++) {
				const p: number = Global.getUserPosition(i);
				(this["item" + p] as GamePositionScoreItem).setData(Global.getCurrentPositionName(i), p);
			}
		}

		//-----------------------------------计时器处理-----------------------------------
		public stopTime(): void {
			if (this.mcTimer)
				this.mcTimer.stop();
			this.nCount = 0;
			this.timeNum_lab.text = GameParmes.chiPengGangSurplusTime + "";//"00";
			this.strState = "";
		}

		public startTime(count: number, str: string = ""): void {
			this.mcTimer.start();
			this.nCount = count;
			this.timeNum_lab.text = this.nCount + "";
			this.strState = str;
		}
		private onTimer(): void {
			if (this.nCount > 0) {
				this.nCount -= 1;
				this.timeNum_lab.text = this.nCount + "";
			} else {
				if (this.mcTimer.running) {
					this.mcTimer.stop();
				}
				if (this.strState != "") {
					this.dispatchEvent(new egret.Event("OnTimeComplete", true, true, this.strState));
				}
			}
		}

		public onClosed(): void {
			for (var i: number = 0; i < 4; i++) {
				this["item" + i].onClosed();
			}
			while (this.numChildren > 0) {
				let mc = this.removeChildAt(0);
				mc = null;
			}
			if (this.mcTimer != null) {
				this.mcTimer.stop();
				this.mcTimer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			}
			this.mcTimer = null;
		}

	}
}