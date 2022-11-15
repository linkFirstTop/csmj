module game {
	export class BaseCardUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		private imgValue: eui.Image;
		private gCards: eui.Group;



		protected childrenCreated(): void {
			super.childrenCreated();
		}

		public setCard(value: number, islight: boolean = false): void {
			this.gCards.addChild(this.imgValue);
			var strIndex: string;
			if (value < 10) {
				strIndex = "0" + (value+1);
			} else {
				strIndex = "" + (value+1);
			}

			console.log("===setCard",value)
			this.imgValue.source = "cardValue00" + strIndex;
			if (islight) {
				let guangQuanBg: eui.Image = new eui.Image();
				guangQuanBg.source = "guangquan_png";
				this.gCards.addChild(guangQuanBg);
			}
		}
	}
}