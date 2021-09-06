module game {
	export class GamePoolUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		/*左边玩家牌池坐标*/
		private arrLP: Array<any> = [{ x: 740, y: 350 }, { x: 736, y: 391 }, { x: 733, y: 433 }, { x: 728, y: 475 }, { x: 726, y: 519 }, { x: 723, y: 563 }, { x: 676, y: 350 }, { x: 672, y: 391 }, { x: 667, y: 433 },
		{ x: 662, y: 475 }, { x: 657, y: 519 }, { x: 652, y: 563 }, { x: 611, y: 350 }, { x: 605, y: 391 }, { x: 598, y: 433 }, { x: 595, y: 474 }, { x: 587, y: 518 }, { x: 582, y: 563 }];
		/*上边玩家牌池坐标*/
		private arrUP: Array<any> = [{ x: 1060, y: 303 }, { x: 1011, y: 303 }, { x: 964, y: 303 }, { x: 911, y: 303 }, { x: 861, y: 303 }, { x: 809, y: 303 }, { x: 1058, y: 253 }, { x: 1011, y: 253 }, { x: 964, y: 253 },
		{ x: 912, y: 253 }, { x: 862, y: 253 }, { x: 812, y: 253 }, { x: 1056, y: 203 }, { x: 1009, y: 203 }, { x: 964, y: 203 }, { x: 914, y: 203 }, { x: 865, y: 203 }, { x: 816, y: 203 }];
		/*右边玩家牌池坐标*/
		private arrRP: Array<any> = [{ x: 1125, y: 564 }, { x: 1124, y: 520 }, { x: 1123, y: 477 }, { x: 1120, y: 434 }, { x: 1118, y: 393 }, { x: 1116, y: 351 }, { x: 1193, y: 564 }, { x: 1189, y: 520 }, { x: 1185, y: 477 },
		{ x: 1183, y: 4334 }, { x: 1178, y: 393 }, { x: 1176, y: 351 }, { x: 1263, y: 564 }, { x: 1258, y: 519 }, { x: 1252, y: 475 }, { x: 1248, y: 434 }, { x: 1243, y: 393 }, { x: 1238, y: 351 }];
		/*下边玩家牌池坐标*/
		private arrDP: Array<any> = [{ x: 796, y: 597 }, { x: 852, y: 597 }, { x: 907, y: 597 }, { x: 964, y: 597 }, { x: 1015, y: 597 }, { x: 1069, y: 597 }, { x: 792, y: 659 }, { x: 850, y: 659 }, { x: 905, y: 659 },
		{ x: 965, y: 659 }, { x: 1016, y: 659 }, { x: 1071, y: 659 }, { x: 789, y: 723 }, { x: 847, y: 723 }, { x: 906, y: 723 }, { x: 964, y: 723 }, { x: 1018, y: 723 }, { x: 1074, y: 723 }];
		private gLeftPool: eui.Group = new eui.Group();
		private gUpPool: eui.Group = new eui.Group();
		private gRightPool: eui.Group = new eui.Group();
		private gDownPool: eui.Group = new eui.Group();
		private arrCard: Array<any> = [[], [], [], []];
		private tipAnim: dragonBones.EgretArmatureDisplay;
		public initCard(): void {
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.addChild(this.gLeftPool);
			this.addChild(this.gUpPool);
			this.addChild(this.gRightPool);
			this.addChild(this.gDownPool);

			this.clearCardPool();

			if (this.tipAnim == null) {
				this.tipAnim = comm.DragonAnim.ins.getAnimByName("cpts");
			}
			this.addChild(this.tipAnim);
			this.tipAnim.visible = false

			this.arrCard = [[], [], [], []];
			//this.createPool();//测试代码
		}
		private createPool(): void {
			for (let i: number = 0; i < 4; i++) {
				for (let j: number = 0; j < 24; j++) {
					let card: proto.CardInfo = new proto.CardInfo();
					card.CardID = 1;
					card.Sit = i;
					this.addCardToPool(card);
				}


			}
		}
		/** 
		 * 还原牌池里的牌
		 */
		public reductionCardsPool(): void {
			for (var i: number = 0; i < 4; i++) {
				var arrCards: Array<proto.CardInfo> = GamePlayData.getCardsPool(i);
				var num: number = arrCards.length;
				for (var j: number = 0; j < num; j++) {
					var cardInfo: proto.CardInfo = arrCards[j] as proto.CardInfo;
					this.addCardToPool(cardInfo);
				}
			}

		}
		/*添加牌到牌池  card:CardInfo*/
		public addCardToPool(card: proto.CardInfo): void {
			let p: number = Global.getUserPosition(card.Sit);
			let g: eui.Group = this.findGroupByPosition(p);
			let len: number = 0;
			let nLevel: number = 0;
			if (g.numChildren > 17) {
				len = g.numChildren - 18;
				nLevel = 1;
			} else {
				len = g.numChildren;
			}
			this.arrCard[p].push(card);
			let item: game.BasePoolCardUI = new game.BasePoolCardUI();
			item.cardInfo = card;
			let cardValue: number = game.GameParmes.getCardID(card);//Math.floor(Math.random()*27)+1;
			item.setCard(p, len, cardValue);
			if (p == 0) {
				g.addChildAt(item, len % 6 + nLevel * 18);
				item.x = this.arrLP[len].x;
				item.y = this.arrLP[len].y;
				if (nLevel == 1) {
					item.y -= 15;
				}
				this.tipAnim.x = g.x + item.x + 50;
				this.tipAnim.y = g.y + item.y;
			}
			if (p == 1) {
				g.addChildAt(item, len % 6 + nLevel * 18);
				item.x = this.arrUP[len].x;
				item.y = this.arrUP[len].y;
				if (len == 5 || len == 11 || len == 17) {
					g.addChildAt(item, 0 + nLevel * 18);
				}
				if (nLevel == 1) {
					item.y -= 15;
				}
				this.tipAnim.x = g.x + item.x + 30;
				this.tipAnim.y = g.y + item.y + 10;
			}
			if (p == 2) {
				g.addChildAt(item, 0 + nLevel * 18);
				item.x = this.arrRP[len].x;
				item.y = this.arrRP[len].y;
				if (nLevel == 1) {
					item.y -= 15;
				}
				this.tipAnim.x = g.x + item.x + 50;
				this.tipAnim.y = g.y + item.y + 2;
			}
			if (p == 3) {
				g.addChild(item);
				if (len == 5 || len == 11 || len == 17) {
					g.addChildAt(item, len + nLevel * 18 - 5);
				}
				item.x = this.arrDP[len].x;
				item.y = this.arrDP[len].y;
				if (nLevel == 1) {
					item.y -= 15;
				}
				this.tipAnim.x = g.x + item.x + 35;
				this.tipAnim.y = g.y + item.y + 15;
			}
			this.tipAnim.visible = true;
			this.tipAnim.animation.play("cpts", 0);

		}
		public playHuAnim(sit: number): void {
			comm.DragonAnim.ins.playAnimByPosition("hluolei", this.tipAnim.x, this.tipAnim.y);
			egret.setTimeout(function () {
				this.removeCardToPool(sit);
			}, this, 1000);

		}
		/*移除牌池里的牌*/
		public removeCardToPool(sit: number): void {
			let p: number = Global.getUserPosition(sit);
			let arr: Array<proto.CardInfo> = this.arrCard[p];
			if (arr.length > 0) {
				let card: proto.CardInfo = arr[arr.length - 1];
				let g: eui.Group = this.findGroupByPosition(p);
				for (let i: number = 0; i < g.numChildren; i++) {
					let item: game.BasePoolCardUI = g.getChildAt(i) as game.BasePoolCardUI;
					if (item.cardInfo.CardID == card.CardID) {
						g.removeChildAt(i);
						item = null;
						break;
					}
				}
			}
			this.tipAnim.visible = false;
			this.tipAnim.animation.stop();
		}
		public checkLPCards(): void {
			for (let i: number = 0; i < 4; i++) {
				let g: eui.Group = this.findGroupByPosition(i);
				let len: number = g.numChildren;
				for (let j: number = 0; j < len; j++) {
					let item: BasePoolCardUI = g.getChildAt(j) as BasePoolCardUI;
					if (item.cardInfo) {
						let cardValue: number = GameParmes.getCardID(item.cardInfo);
						if (cardValue > 0) {
							if (GamePlayData.arrLPCards[cardValue].indexOf(item.cardInfo.CardID) == -1) {
								GamePlayData.arrLPCards[cardValue].push(item.cardInfo.CardID);
							}
						}
					}

				}
			}
		}
		private findGroupByPosition(p: number): eui.Group {
			if (p == 0) {
				return this.gLeftPool;
			}
			if (p == 1) {
				return this.gUpPool;
			}
			if (p == 2) {
				return this.gRightPool;
			}
			if (p == 3) {
				return this.gDownPool;
			}
		}
		private clearCardPool(): void {
			this.clearCardGroup(this.gLeftPool);
			this.clearCardGroup(this.gUpPool);
			this.clearCardGroup(this.gRightPool);
			this.clearCardGroup(this.gDownPool);
		}
		private clearCardGroup(g: eui.Group): void {
			while (g.numChildren > 0) {
				let item = g.removeChildAt(0);
				item = null;
			}
		}
	}
}