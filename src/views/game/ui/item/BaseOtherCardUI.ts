module game {
	export class BaseOtherCardUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		private imgBack: eui.Image = new eui.Image();
		private imgCard: eui.Image = new eui.Image();
		public cardInfo: game.CardInfo;
		/*p:方位 index:牌的索引 value:牌值 isAnGang:是否暗杠*/
		public setCard(p: number, index: number, value: number, isAnGang: boolean): void {
			let g: eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
		//	this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			var strIndex: string;
			if (value < 9) {
				strIndex = "0" + (value +1);
			} else {
				strIndex = "" + (value+1);
			}
			//console.log("=====chid hi", p)
			if (p == 0) {//down
				if (isAnGang) {
					if (value > 0) {
						this.imgCard.source = "cardValueV" + strIndex;
					} else {
						this.imgBack.source = "cardGangD";
					}
				} else {//明杠，吃，碰
			
					this.imgCard.source = "cardValueV" + strIndex;
			
				}
				this.imgCard.verticalCenter = 0;
			}
			if (p == 1) {//right
				if (isAnGang) {
				
					if (value > 0) {
						//this.imgBack.source = "cardGang" + strIndex;//正面
						 this.imgCard.source = "cardValueR" + strIndex;
					} else {
						//console.log("=====chid hi")
						this.imgBack.source = "cardGangR";//背面
					}
				} else {//明杠，吃，碰
				
					
					this.imgCard.source = "cardValueR" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }else{

					// }
				}
				// this.imgCard.horizontalCenter = 0;
			}
			if (p == 2) {//
				if (isAnGang) {
				
					// this.imgBack.scaleX = -1;
					if (value > 0) {
						// this.imgCard.source = "cardValue" + value;
						this.imgCard.source = "cardValueU1" + strIndex;
					}else{
						this.imgBack.source = "cardGangD2"; //cardValueU1
					}
				} else {
					this.imgCard.source = "cardValueU1" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }
				}
				// this.imgCard.horizontalCenter = 5;
			}
			if (p == 3) {
				if (isAnGang) {
					this.imgBack.source = "cardGangL";
					if (value > 0) {
						this.imgBack.source = "cardValueL" + strIndex;
					}
				} else {
				
					this.imgCard.source = "cardValueH" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }
				}
				this.imgCard.horizontalCenter = -5;
			}
		}
	}
}