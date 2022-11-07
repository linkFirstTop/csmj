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
			if (value < 10) {
				strIndex = "0" + value;
			} else {
				strIndex = "" + value;
			}
			if (p == 0) {//down
				if (isAnGang) {
					if (value > 0) {
						//明牌（正面）
						// this.imgBack.source = "card_down_a2";
						//this.imgBack.source = "cardGangR" + strIndex;
						this.imgCard.source = "cardValueV" + strIndex;
	
					} else {
						//暗牌（背面）
						this.imgBack.source = "cardGangD";
					}
				} else {//明杠，吃，碰
					// this.imgBack.source = "card_down_a2";
					// if (value > 0) {
						console.log("==strIndex=",strIndex)
					this.imgCard.source = "cardValueV" + strIndex;
					// }
				}
				this.imgCard.verticalCenter = 0;
			}
			if (p == 1) {//right
				if (isAnGang) {
					console.log("==isAnGang===")
					if (value > 0) {
						//this.imgBack.source = "cardGang" + strIndex;//正面
						 this.imgCard.source = "cardValueR" + strIndex;
					} else {
						this.imgBack.source = "cardGangR";//背面
					}
				} else {//明杠，吃，碰
					console.log("===strIndex=",strIndex)
					this.imgBack.source = "cardValueR" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }
				}
				// this.imgCard.horizontalCenter = 0;
			}
			if (p == 2) {//
				if (isAnGang) {
					this.imgBack.source = "cardGangR"; //cardValueU1
					// this.imgBack.scaleX = -1;
					if (value > 0) {
						// this.imgCard.source = "cardValue" + value;
						this.imgBack.source = "cardValueU1" + strIndex;
					}
				} else {
					this.imgBack.source = "cardValueU1" + strIndex;
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
						this.imgBack.source = "cardValueH" + strIndex;
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