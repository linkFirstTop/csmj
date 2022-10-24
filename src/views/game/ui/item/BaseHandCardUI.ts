module game {
	export class BaseHandCardUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		public cardInfo: game.CardInfo;
		public cardIndex: number = -1;
		public isSelect: boolean = false;
		public isTingFlag: boolean = false;
		public isHuFlag: boolean = false;
		private imgBack: eui.Image = new eui.Image();
		private imgCard: eui.Image = new eui.Image();
		private imgMask: eui.Image = new eui.Image();
		private imgTip: eui.Image;
		/*p:方位 index:牌的索引 value:牌值 state:0 暗牌 1亮牌 isDQ:是否定缺牌*/
		public setCard(p: number, index: number, value: number, state: number, isDQ: boolean = false): void {
			let g: eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			this.imgCard.horizontalCenter = 0;
			var strIndex: string;

			if (value < 10) {
				strIndex = "0" + value;
			} else {
				strIndex = "" + value;
			}
			if (p == 3) {//左
				if (state == 0) {//暗牌
					this.imgBack.source = "cardhandL";
				} else {//明牌
					this.imgBack.source = "cardValueH" + strIndex;
					// this.imgCard.source = "cardValue" + value;
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.5 - 0.01 * index;
					// this.imgCard.rotation = 90;
					// this.imgCard.skewY = 25;
				}
			}
			if (p == 2) {//上
				if (state == 0) {
					this.imgBack.source = "cardBackUp";
				} else {
					this.imgBack.source = "cardValueU1" + strIndex;
					// this.imgCard.source = "cardValue" + value;
					// this.imgCard.scaleX = 0.5;
					// this.imgCard.scaleY = -0.4;//垂直翻转
					// this.imgCard.verticalCenter = -7;
				}
			}
			if (p ==1) {//右

				if (state == 0) {
					this.imgBack.source = "cardhandR";
				} else {
					this.imgBack.source = "cardValueR" + strIndex;
					// this.imgCard.source = "cardValue" + value;
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.5 - 0.01 * index;
					// this.imgCard.rotation = -90;
					// this.imgCard.skewY = -25;
					// this.imgCard.verticalCenter = -8;
				}
				// this.imgBack.scaleX = -1;//水平翻转由左向右
			}
			if (p == 0) {

				this.cardIndex = value;

				if (state == 0) {//暗牌（手牌）
					this.imgBack.source = "cardValue00" + strIndex;

					this.isSelect = false;
					this.isTingFlag = false;
					this.isHuFlag = false;
					this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCardTap, this);
					if (isDQ) {
						this.setMaskFlag();
					}
				} else {//明牌
					this.imgBack.source = "cardValueV" + strIndex;
					// this.imgCard.scaleX = this.imgCard.scaleY = 0.9;
					// this.imgCard.verticalCenter = -10;
				}
			}
			if (game.GamePlayData.tingData[Global.userSit] == true && p == 3) {
				this.setMaskFlagEX(true);
			} else {

				this.setMaskFlagEX(false);
			}


		}
		private onCardTap(): void {
			if (GameParmes.gameStage == GameStageType.CHANGE) {//换三张阶段
				this.onSelectCard();
				this.dispatchEvent(new egret.Event("OnClickHandCard", true, true, this));
			}
			if (GameParmes.gameStage == GameStageType.PLAYING) {//出牌阶段
				this.dispatchEvent(new egret.Event("OnClickHandCard", true, true, this));
			}
		}
		public onSelectCard(): void {
			this.isSelect = !this.isSelect;
			this.y = this.isSelect ? -50 : 0;
		}
		public clearSelectCard(): void {
			this.isSelect = false;
			this.y = 0;
		}
		public setTingFlag(b: boolean, str: string): void {

			if (b) {//显示听提示
				if (this.imgTip == null) {
					this.imgTip = new eui.Image();
					(this.getChildAt(0) as eui.Group).addChild(this.imgTip);
					this.imgTip.x = 23;
					this.imgTip.y = -60;
				} else {
					this.imgTip.visible = true;
				}
				if (str == "ting") {
					this.imgTip.source = "gameIcon_ting_" + Global.language + "_png";
					this.isTingFlag = true;
				}
				if (str == "hu") {
					this.imgTip.source = "gameIcon_th_" + Global.language + "_png";
					this.isHuFlag = true;
				}

			} else {
				this.isTingFlag = false;
				this.isHuFlag = false;
				if (this.imgTip) {
					this.imgTip.visible = false;
				}
			}
		}

		public setMaskFlag(isEnabled: boolean = true): void {
			this.imgMask.source = "black_png";
			this.imgMask.width = this.imgBack.width;
			this.imgMask.height = this.imgBack.height;
			this.imgMask.alpha = 0.4;
			this.addChild(this.imgMask);
			this.touchEnabled = this.touchChildren = isEnabled;
		}
		public setMaskFlagEX(isEnabled: boolean = true): void {
			if (isEnabled == true) {
				this.imgMask.source = "black_png";
				this.imgMask.width = this.imgBack.width;
				this.imgMask.height = this.imgBack.height;
				this.imgMask.alpha = 0.4;
				this.addChild(this.imgMask);
			} else {
				if (this.imgMask && this.imgMask.parent) {
					this.imgMask.parent.removeChild(this.imgMask);
				}
			}

			//this.touchEnabled = this.touchChildren = isEnabled;
		}
	}
}