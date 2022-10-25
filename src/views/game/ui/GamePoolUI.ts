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
		{ x: 1183, y: 434 }, { x: 1178, y: 393 }, { x: 1176, y: 351 }, { x: 1263, y: 564 }, { x: 1258, y: 519 }, { x: 1252, y: 475 }, { x: 1248, y: 434 }, { x: 1243, y: 393 }, { x: 1238, y: 351 }];
		/*下边玩家牌池坐标*/
		private arrDP: Array<any> = [{ x: 796, y: 597 }, { x: 852, y: 597 }, { x: 907, y: 597 }, { x: 964, y: 597 }, { x: 1015, y: 597 }, { x: 1069, y: 597 }, { x: 792, y: 659 }, { x: 850, y: 659 }, { x: 905, y: 659 },
		{ x: 964, y: 659 }, { x: 1016, y: 659 }, { x: 1071, y: 659 }, { x: 789, y: 723 }, { x: 847, y: 723 }, { x: 906, y: 723 }, { x: 964, y: 723 }, { x: 1018, y: 723 }, { x: 1074, y: 723 }];
		private gLeftPool: eui.Group = new eui.Group();
		private gUpPool: eui.Group = new eui.Group();
		private gRightPool: eui.Group = new eui.Group();
		private gDownPool: eui.Group = new eui.Group();
		private arrCard: Array<any> = [[], [], [], []];
		private tipAnim: dragonBones.EgretArmatureDisplay;
		public initCard(): void {
			this.width = 1920;
			this.height = 1080;
			this.x = 192;
			this.y = 108;
			this.horizontalCenter = "0";
			this.verticalCenter = "0";
			this.scaleX = 0.8;
			this.scaleY = 0.8;
			//上方玩家牌池坐标
			this.gUpPool.width = 805;
			this.gUpPool.height = 186;
			this.gUpPool.x = 640;
			this.gUpPool.y = 244;
			//  左边玩家牌池坐标
			this.gLeftPool.width = 0;
			this.gLeftPool.height = 570;
			this.gLeftPool.x = 535;
			this.gLeftPool.y = 204;
			this.gLeftPool.anchorOffsetX = 0;
			this.gLeftPool.anchorOffsetY = 0;
			// 右边玩家牌池坐标
			this.gRightPool.width = 19.09;
			this.gRightPool.height = 570;
			this.gRightPool.x = 1384;
			this.gRightPool.y = 204;
			this.gRightPool.anchorOffsetX = 0;
			this.gRightPool.anchorOffsetY = 0;

			//下边玩家牌池坐标
			this.gDownPool.width = 805;
			this.gDownPool.height = 186;
			this.gDownPool.x = 548;
			this.gDownPool.y = 680;
			this.gDownPool.anchorOffsetX = 0;
			this.gDownPool.anchorOffsetY = 0;


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
					let card: game.CardInfo = new game.CardInfo();
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
				var arrCards: Array<game.CardInfo> = GamePlayData.getCardsPool(i);
				var num: number = arrCards.length;
				for (var j: number = 0; j < num; j++) {
					var cardInfo: game.CardInfo = arrCards[j] as game.CardInfo;
					this.addCardToPool(cardInfo);
				}
			}

		}
		/*添加牌到牌池  card:CardInfo*/
		public addCardToPool(card: game.CardInfo): void {
			console.log("==card==",)
			console.log("==card==",card)
			console.log("==card==",)
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
			let cardValue: number = card.CardID //game.GameParmes.getCardID(card);//Math.floor(Math.random()*27)+1;
			item.setCard(p, len, cardValue);
			
			g.addChild(item);
	
			if (p == 0) {

				var count: number = g.numElements - 1;
				//一排最大数
				var itemMax: number = 10;

				//正序Y
				var invertedOrderX: number = count % itemMax;
				var invertedOrderY: number = count % itemMax;
				var elementWidth: number = -23;
				var elementHeight: number = 54;
				if (count >= 20) {
					invertedOrderY = count - 20;
					invertedOrderX = count - 20;
				}
				var childX: number = invertedOrderX * elementWidth - 115;
				var childY: number = invertedOrderY * elementHeight;
				if (count >= 10 && count < 20) {
					// //最多2排
					childX = childX - 89;
					childY = childY;
					g.setChildIndex(item, count - 10);
				} else if (count >= 20) {
					childX = childX;
					childY = childY;
					g.setChildIndex(item, count);
				}
				item.x = childX;
				item.y = childY
				// g.addChildAt(item, len % 6 + nLevel * 18);
				// item.x = this.arrLP[len].x;
				// item.y = this.arrLP[len].y;
				// if (nLevel == 1) {
				// 	item.y -= 15;//往上面移动一层
				// }
				this.tipAnim.x = g.x + item.x + 50;
				this.tipAnim.y = g.y + item.y;
			}
			if (p == 1) {

				var count: number = g.numChildren - 1;
				//一排最大数
				var itemMax: number = 10;
				//倒序Y
				var invertedOrderX: number = 0;
				var invertedOrderY: number = 0;


				var elementWidth: number = 64;
				var elementHeight: number = 82;

				invertedOrderX = (itemMax - 1) - count % itemMax;
				invertedOrderY = Math.min(3, Math.floor(count / itemMax));

				var childX: number = invertedOrderX * elementWidth;
				var childY: number = invertedOrderY * -62;
				if (count >= 20) {
					childX = childX;
					childY = -12;
					g.setChildIndex(item, count);
				} else {
					g.setChildIndex(item, 0);
				}
				item.x = childX;
				item.y = childY
				// g.addChildAt(item, len % 6 + nLevel * 18);
				// item.x = this.arrUP[len].x;
				// item.y = this.arrUP[len].y;
				// if (len == 5 || len == 11 || len == 17) {
				// 	g.addChildAt(item, 0 + nLevel * 18);
				// }
				// if (nLevel == 1) {
				// 	item.y -= 15;
				// }
				this.tipAnim.x = g.x + item.x + 30;
				this.tipAnim.y = g.y + item.y + 10;
			}
			if (p == 2) {
				var count: number = g.numChildren - 1;
				//一排最大数
				var itemMax: number = 10;
				//倒序Y
				var invertedOrderY: number = (itemMax - 1) - count % itemMax;
				var invertedOrderX: number = (itemMax - 1) - count % itemMax;
				var elementWidth: number = 23;
				var elementHeight: number = 54;

				var childX: number = invertedOrderX * elementWidth;
				var childY: number = invertedOrderY * elementHeight;

				if (count >= 10 && count <= 19) {
					childX = childX + 89;
				}
				if (count >= 20) {
					//最多2排
					childX = childX + 6;//(itemMax-1) - (count) % itemMax * elementWidth;//89 - elementWidth*(count-19);
					childY = childY;//(itemMax-1) - (count) % itemMax * elementHeight;
					g.addChildAt(item, count - count % 20);
				} else {
					g.addChildAt(item, 0);
				}
				item.x = childX;
				item.y = childY


				// g.addChildAt(item, 0 + nLevel * 18);
				// item.x = this.arrRP[len].x;
				// item.y = this.arrRP[len].y;
				// if (nLevel == 1) {
				// 	item.y -= 15;
				// }
				this.tipAnim.x = g.x + item.x + 50;
				this.tipAnim.y = g.y + item.y + 2;
			}
			if (p == 3) {

				var count: number = g.numElements - 1;
				//一排最大数
				var itemMax: number = 10;
				//倒序Y
				var invertedOrderX: number = 0;
				var invertedOrderY: number = 0;

				var elementWidth: number = 82;
				var elementHeight: number = 94;

				invertedOrderX = count % itemMax;
				invertedOrderY = Math.min(3, Math.floor(count / itemMax));

				var childX: number = invertedOrderX * elementWidth;
				var childY: number = invertedOrderY * elementHeight;

				if (count >= 20) {
					childX = childX;
					childY = 0;
				}
				item.x = childX;
				item.y = childY

				// if (len == 5 || len == 11 || len == 17) {
				// 	g.addChildAt(item, len + nLevel * 18 - 5);
				// }
				// item.x = this.arrDP[len].x;
				// item.y = this.arrDP[len].y;
				// if (nLevel == 1) {
				// 	item.y -= 15;
				// }
				this.tipAnim.x = g.x + item.x + 35;
				this.tipAnim.y = g.y + item.y + 15;
			}
			this.tipAnim.visible = true;
			this.tipAnim.animation.play("cpts", 0);
			console.log("====item==",item.x,item.x)
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
			let arr: Array<game.CardInfo> = this.arrCard[p];
			if (arr.length > 0) {
				let card: game.CardInfo = arr[arr.length - 1];
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
			for (let i: number = 1; i < 5; i++) {
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
				return this.gDownPool;
				
			}
			if (p == 1) {
				return this.gLeftPool;
				
			}
			if (p == 2) {
				return this.gUpPool;
				
			}
			if (p == 3) {
				return this.gRightPool;
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