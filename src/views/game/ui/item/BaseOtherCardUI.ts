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
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			var strIndex: string;
			if (value < 10) {
				strIndex = "0" + value;
			} else {
				strIndex = "" + value;
			}
			if (p == 0) {//左
				if (isAnGang) {
					this.imgBack.source = "cardGangL";
					if (value > 0) {
						this.imgBack.source = "cardValueH" + strIndex;
					}
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.5 - 0.01 * (3 - index);
					// this.imgCard.verticalCenter = -8;
					// this.imgCard.rotation = 90;
					// this.imgCard.skewY = 25;
				} else {
					this.imgCard.source = "cardValueH" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.5 - 0.01 * (15 - index);
					// this.imgCard.verticalCenter = -8;
					// this.imgCard.rotation = 90;
					// this.imgCard.skewY = 25;
				}
				this.imgCard.horizontalCenter = -5;
			}
			if (p == 1) {//上
				if (isAnGang) {
					if (value > 0) {
						this.imgBack.source = "cardValueU1" + strIndex;//正面
						// this.imgCard.source = "cardValue" + value;
						// this.imgCard.scaleX = 0.5;
						// this.imgCard.scaleY = -0.35;
						// this.imgCard.verticalCenter = -10;
					} else {
						this.imgBack.source = "cardGangD2";//背面
					}
				} else {//明杠，吃，碰
					this.imgBack.source = "cardValueU1" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }
					// this.imgCard.scaleX = 0.5;
					// this.imgCard.scaleY = -0.4;
					// this.imgCard.verticalCenter = -7;
				}
				// this.imgCard.horizontalCenter = 0;
			}
			if (p == 2) {//右
				if (isAnGang) {
					this.imgBack.source = "cardGangR";
					// this.imgBack.scaleX = -1;
					if (value > 0) {
						// this.imgCard.source = "cardValue" + value;
						this.imgBack.source = "cardValueR" + strIndex;
					}
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.5 - 0.01 * index;
					// this.imgCard.rotation = -90;
					// this.imgCard.skewY = -25;
					// this.imgCard.verticalCenter = -8;
				} else {
					this.imgBack.source = "cardValueR" + strIndex;
					// if (value > 0) {
					// 	this.imgCard.source = "cardValue" + value;
					// }
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.5 - 0.01 * index;
					// this.imgCard.rotation = -90;
					// this.imgCard.skewY = -25;
					// this.imgCard.verticalCenter = -8;
					// this.imgBack.scaleX = -1;
				}
				// this.imgCard.horizontalCenter = 5;
			}
			if (p == 3) {
				if (isAnGang) {
					if (value > 0) {
						//明牌（正面）
						// this.imgBack.source = "card_down_a2";
						this.imgBack.source = "cardValueV" + strIndex;
						// this.imgCard.source = "cardValue" + value;
						// this.imgCard.scaleX = this.imgCard.scaleY = 0.8;
						// this.imgCard.verticalCenter = -12;
					} else {
						//暗牌（背面）
						this.imgBack.source = "cardGangD";
					}
				} else {//明杠，吃，碰
					// this.imgBack.source = "card_down_a2";
					// if (value > 0) {
					this.imgCard.source = "cardValueV" + strIndex;
					// }
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.8;
					// this.imgCard.verticalCenter = -12;
				}
				// this.imgCard.horizontalCenter = 0;
			}
		}
	}
}