module game {
	export class BasePoolCardUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		private imgBack: eui.Image = new eui.Image();
		private imgCard: eui.Image = new eui.Image();
		public cardInfo: game.CardInfo;
		/*p:方位 index:牌的索引 value:牌值 */
		public setCard(p: number, index: number, value: number): void {
			let g: eui.Group = new eui.Group();
			this.addChild(g);
			// g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			this.imgCard.horizontalCenter = 0;
			var strIndex: string;
			if (value < 10) {
				strIndex = "0" + (value+1);
			} else {
				strIndex = "" + (value+1);
			}
		
			if (p == 0) {
				this.imgCard.source =  "cardValueV" + strIndex;
				if(value == -1 ){
					
					this.imgCard.source = "cardGangD";
				}
			}
			if (p == 1) {
				this.imgCard.source = "cardValueR" + strIndex;
				//this.imgCard.verticalCenter = -12;
				if(value == -1){
					this.imgCard.source = "cardGangR";//背面
			
				}
			}
			
			if (p == 2) {
				this.imgCard.source = "cardValueU1" + strIndex;
				if(value == -1 ){
					this.imgCard.source = "cardGangD2"; //cardValueU1

					
				}
			}
			if (p == 3) {
				this.imgCard.source = "cardValueH" + strIndex;
				if(value == -1 ){
					this.imgCard.source = "cardGangL";
				}
			}
		}
	}
}