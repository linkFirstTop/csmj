module game {
	export class BaseTingCardUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		private imgValue: eui.Image;
		private lbFan: eui.Label;
		private lbNum: eui.Label;
		private nLeft: number = 0;
		public cardIndex: number = 0;
		protected childrenCreated(): void {
			super.childrenCreated();
		}
		/*cardIndex 牌值 type 番型 num 剩余张数*/
		public setInfo(cardIndex: number, type: number, num: number): void {
			this.nLeft = num;
			var strIndex: string;
			if (cardIndex < 10) {
				strIndex = "0" + cardIndex;
			} else {
				strIndex = "" + cardIndex;
			}
			this.cardIndex = cardIndex;
			this.imgValue.source = "cardValue00" + strIndex;
			this.lbFan.text = type + Global.dic["台"];
			if (Global.language != "en") {
				this.lbNum.text = num + Global.dic["张数"];
			} else {
				this.lbNum.text = "Rest " + num;
			}

		}

	}
}