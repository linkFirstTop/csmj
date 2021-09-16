module game {
	export class BaseCardUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		private imgValue: eui.Image;

		protected childrenCreated(): void {
			super.childrenCreated();
		}

		public setCard(value: number): void {
			var strIndex: string;
			if (value < 10) {
				strIndex = "0" + value;
			} else {
				strIndex = "" + value;
			}
			// this.imgValue.source = "cardValue" + value;
			this.imgValue.source = "cardValue00" + strIndex;
		}
	}
}