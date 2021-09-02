module room {
	export class RoomRuleUI extends eui.Component implements eui.UIComponent {

		private tabBar: eui.TabBar;
		private scroller: eui.Scroller;
		private gContent: eui.Group;
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private closeButton: BaseButton;

		protected childrenCreated(): void {
			super.childrenCreated();
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();
			this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
			this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
			this.tabBar.addEventListener(egret.Event.CHANGE, this.tabBarChange, this);
			this.onShowUI();
		}
		public onShowUI(): void {
			this.gContent.scaleX = this.gContent.scaleY = 0.8;
			egret.Tween.get(this.gContent).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);

		}

		private tabBarChange(): void {
			this.scroller.viewport.scrollV = 0;
		}
		private onResize(): void {
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();
		}
		private onClose(): void {
			if (this.parent) {
				this.parent.removeChild(this);
			}
		}
	}
}