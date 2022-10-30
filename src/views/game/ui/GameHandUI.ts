module game {
	export class GameHandUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		//[{x:0,y:0},{x:0,y:0},{x:0,y:0}]
		/*左边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrLHP: Array<any> = [
			{ x: 330, y: 743 }, { x: 342, y: 681 }, { x: 350, y: 635 },
			 { x: 359, y: 588 }, { x: 367, y: 542 }, { x: 375, y: 495 },
			{ x: 385, y: 449 }, { x: 393, y: 403 }, { x: 402, y: 355 }, 
			{ x: 410, y: 309 }, { x: 418, y: 263 }, { x: 427, y: 215 }, 
			{ x: 435, y: 170 }, { x: 443, y: 125 }];

		private arrLLP: Array<any> = [{ x: 324, y: 768 }, { x: 334, y: 708 }, { x: 342, y: 658 }, { x: 351, y: 608 }, { x: 361, y: 558 }, { x: 370, y: 508 },
		{ x: 379, y: 458 }, { x: 389, y: 408 }, { x: 398, y: 359 }, { x: 407, y: 310 }, { x: 416, y: 260 }, { x: 424, y: 213 }, { x: 433, y: 162 }, { x: 443, y: 115 }];

		private arrLCP: Array<any> = [
			[{ x: 343, y: 155 }, { x: 332, y: 199 }, { x: 322, y: 244 }],
			[{ x: 310, y: 311 }, { x: 299, y: 355 }, { x: 288, y: 401 }],
			[{ x: 274, y: 468 }, { x: 263, y: 513 }, { x: 251, y: 559 }],
			[{ x: 240, y: 633 }, { x: 228, y: 679 }, { x: 218, y: 726 }]
		];

		private arrLAP: Array<any> = [
			[{ x: 341, y: 151 }, { x: 329, y: 196 }, { x: 319, y: 243 }, { x: 319, y: 179 }],
			[{ x: 307, y: 309 }, { x: 296, y: 354 }, { x: 285, y: 400 }, { x: 287, y: 336 }],
			[{ x: 272, y: 465 }, { x: 260, y: 512 }, { x: 250, y: 559 }, { x: 250, y: 495 }],
			[{ x: 238, y: 630 }, { x: 226, y: 677 }, { x: 215, y: 723 }, { x: 216, y: 662 }]];


		/*右边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrRHP: Array<any> = [{ x: 1424, y: 125 }, { x: 1435, y: 188 }, { x: 1443, y: 231 }, { x: 1452, y: 279 }, { x: 1457, y: 325 }, { x: 1465, y: 371 },
		{ x: 1475, y: 419 }, { x: 1483, y: 464 }, { x: 1490, y: 510 }, { x: 1499, y: 557 }, { x: 1507, y: 603 }, { x: 1515, y: 649 }, { x: 1523, y: 696 }, { x: 1532, y: 743 }];

		private arrRLP: Array<any> = [{ x: 1402, y: 115 }, { x: 1410, y: 172 }, { x: 1418, y: 223 }, { x: 1426, y: 270 }, { x: 1435, y: 320 }, { x: 1444, y: 369 },
		{ x: 1452, y: 418 }, { x: 1459, y: 468 }, { x: 1467, y: 518 }, { x: 1475, y: 568 }, { x: 1484, y: 618 }, { x: 1493, y: 668 }, { x: 1502, y: 718 }, { x: 1511, y: 768 }];

		private arrRCP: Array<any> = [
			[{ x: 1618, y: 726 }, { x: 1609, y: 679 }, { x: 1598, y: 633 }],
			[{ x: 1587, y: 559 }, { x: 1577, y: 513 }, { x: 1567, y: 468 }],
			[{ x: 1553, y: 401 }, { x: 1543, y: 355 }, { x: 1533, y: 311 }],
			[{ x: 1522, y: 244 }, { x: 1512, y: 199 }, { x: 1503, y: 155 }]
		];


		private arrRAP: Array<any> = [
			[{ x: 1618, y: 723 }, { x: 1607, y: 677 }, { x: 1596, y: 630 }, { x: 1619, y: 662 }],
			[{ x: 1586, y: 559 }, { x: 1575, y: 512 }, { x: 1564, y: 465 }, { x: 1588, y: 495 }],
			[{ x: 1554, y: 400 }, { x: 1543, y: 354 }, { x: 1532, y: 309 }, { x: 1554, y: 336 }],
			[{ x: 1522, y: 243 }, { x: 1511, y: 196 }, { x: 1501, y: 151 }, { x: 1524, y: 179 }]];


		private arrHuP: Array<any> = [
			[{ x: 319, y: 842 }, { x: 335, y: 799 }, { x: 350, y: 757 }, { x: 367, y: 715 }],
			[{ x: 496, y: 381 }],
			[{ x: 1335, y: 471 }, { x: 1348, y: 506 }, { x: 1360, y: 543 }, { x: 1372, y: 579 }],
			[{ x: 1523, y: 863 }, { x: 1457, y: 863 }, { x: 1392, y: 863 }, { x: 1331, y: 863 }]];
		private sprTmpDown: eui.Group = new eui.Group();
		private sprTmpRight: eui.Group = new eui.Group();
		private sprTmpLeft: eui.Group = new eui.Group();
		private sprTmpUp: eui.Group = new eui.Group();
		/*四个玩家手牌容器*/
		private gHandCardL: eui.Group = new eui.Group();
		private gHandCardU: eui.Group = new eui.Group();
		private gHandCardR: eui.Group = new eui.Group();
		private gHandCardD: eui.Group = new eui.Group();
		/*四个玩家吃碰杠容器*/
		private gOtherCardL: eui.Group = new eui.Group();
		private gOtherCardU: eui.Group = new eui.Group();
		private gOtherCardR: eui.Group = new eui.Group();
		private gOtherCardD: eui.Group = new eui.Group();
		/*四个玩家胡牌容器*/
		private gHuCardL: eui.Group = new eui.Group();
		private gHuCardU: eui.Group = new eui.Group();
		private gHuCardR: eui.Group = new eui.Group();
		private gHuCardD: eui.Group = new eui.Group();
		private nAutoTime: number = -1;//自动摸打计时器
		private arrHSZCards: Array<BaseHandCardUI> = [];
		private currentCard: BaseHandCardUI;
		private isSortComplete: boolean = false;
		private isHSZStart: boolean = false;
		public initHand(): void {
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();
			this.sprTmpDown.height = 190;
			this.sprTmpDown.bottom = 10;
			this.sprTmpDown.x = 10;
			this.addChild(this.sprTmpLeft);
			this.addChild(this.sprTmpRight);
			this.addChild(this.sprTmpUp);
			this.addChild(this.sprTmpDown);
			this.sprTmpLeft.addChild(this.gOtherCardL);
			this.sprTmpLeft.addChild(this.gHandCardL);
			this.sprTmpLeft.x = 0;
			this.sprTmpLeft.y = 0;
			this.sprTmpLeft.anchorOffsetX = 0;
			this.sprTmpLeft.anchorOffsetY = 0;
			this.sprTmpRight.addChild(this.gHandCardR);
			this.sprTmpRight.addChild(this.gOtherCardR);
			this.sprTmpRight.x = 0;
			this.sprTmpRight.y = 0;
			this.sprTmpRight.anchorOffsetX = 0;
			this.sprTmpRight.anchorOffsetY = 0;
			this.sprTmpUp.addChild(this.gHandCardU);
			this.sprTmpUp.addChild(this.gOtherCardU);
			this.sprTmpDown.addChild(this.gOtherCardD);
			this.sprTmpDown.addChild(this.gHandCardD);
			this.arrHSZCards = [];
			this.currentCard = null;
			this.isSortComplete = false;
			this.isHSZStart = false;
			this.addChild(this.gHuCardL);
			this.addChild(this.gHuCardU);
			this.addChild(this.gHuCardR);
			this.addChild(this.gHuCardD);

			this.gHandCardD.addEventListener("OnClickHandCard", this.onClickHandCard, this);

			this.clearAllGroup();
		}

		/*创建手牌  state 0暗牌状态 1亮牌状态*/
		public createHandCard(isShow: boolean, state: number): void {
			console.log("创建手牌")
			for (let j: number = 1; j < 5; j++) {
				this.updataHandsByPosition(j, state, isShow);
			}
			if (!isShow) {
				this.showHandCard();
			}
		}

		private onTimeUpdate():void{
			for (let j: number = 1; j < 5; j++) {
				this.updataHandsByPosition(j, 0);
			}
		}

		private onTimeComplete():void{
		
		}
		/*用于处理开始的发牌*/
		private showHandCard(): void {
			var len: number = 0;
			for (let j: number = 0; j < 4; j++) {
				for (let i: number = 0; i < 4; i++) {
					let g: eui.Group = this.findHandGroup(i);
					let count: number = len + 4 > g.numChildren ? g.numChildren : len + 4;
					for (let n: number = len; n < count; n++) {
						if(g){
							
						}
						egret.Tween.get(g).wait(j * 800).call(function () {
							g.getChildAt(n).visible = true;
						}, this);
					}
				}
				len += 4;
			}
			egret.Tween.get(this).wait(4000).call(function () {
				game.GamePlayData.SetHandCardsSorting(Global.userSit);
				this.updataHandsByPosition(Global.userSit, 0);
				this.isSortComplete = true;
				//this.onShowHSZCards();
			}, this);
		}
		/*显示玩家的胡牌*/
		public showHuCard(sit: number, cardID: number, type: number): void {
			let p: number = Global.getUserPosition(sit-1);
			GamePlayData.CardsWall_Hua_Index++;
			let card: game.CardInfo = new game.CardInfo();
			card.CardID = cardID;
			card.Sit = sit;
			let cardValue: number = game.GameParmes.getCardID(card);
			let gHu: eui.Group = this.findHuGroup(p);
			let len: number = gHu.numChildren;
			let item: game.BaseHuCardUI = new game.BaseHuCardUI();
			item.setCard(p, len, cardValue);
			item.cardInfo = card;
			// console.log(item.cardInfo);
			gHu.addChild(item);
			if (p == 0) {
				if (len < 4) {
					item.x = this.arrHuP[p][len % 4].x;
					item.y = this.arrHuP[p][len % 4].y;
					gHu.addChildAt(item, 0);
				} else {
					item.x = this.arrHuP[p][len % 4].x - 8;
					item.y = this.arrHuP[p][len % 4].y - 20;
					gHu.addChildAt(item, 4);
				}
			}
			if (p == 1) {
				if (len < 4) {
					item.x = this.arrHuP[p][0].x + len * 40;
					item.y = this.arrHuP[p][0].y;
				} else {
					item.x = this.arrHuP[p][0].x + (len % 4) * 40 - 4;
					item.y = this.arrHuP[p][0].y - 10;
				}
			}
			if (p == 2) {
				if (len < 4) {
					item.x = this.arrHuP[p][len % 4].x;
					item.y = this.arrHuP[p][len % 4].y;
				} else {
					item.x = this.arrHuP[p][len % 4].x + 6;
					item.y = this.arrHuP[p][len % 4].y - 10;
				}
			}
			if (p == 3) {
				if (len < 4) {
					item.x = this.arrHuP[p][len % 4].x;
					item.y = this.arrHuP[p][len % 4].y;
				} else {
					item.x = this.arrHuP[p][len % 4].x + 6;
					item.y = this.arrHuP[p][len % 4].y - 16;
				}
			}
			// if(type == 3){//自摸
			// 	game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(sit),[card],sit);
			// 	if(p == 3 && GameParmes.nHuType == 16){//天胡自摸的时候需要删除手牌中的胡牌
			// 		this.updataHandsByPosition(Global.userSit,0);
			// 	}else{
			// 		this.delHandCard(p);
			// 	}
			// 	comm.DragonAnim.ins.playAnimByPosition("zmbd",item.x+50,item.y);
			// }
		}
		/*删除自摸胡牌的那张手牌*/
		private delHandCard(p: number): void {
			let g: eui.Group = this.findHandGroup(p);
			let len: number = g.numChildren;
			let item: game.BaseHandCardUI;
			if (p == 2) {//删除第一张
				item = g.removeChildAt(0) as game.BaseHandCardUI;
			} else {//删除最后一张
				item = g.removeChildAt(len - 1) as game.BaseHandCardUI;
			}
			item = null;
		}
		public getOneCard(info: game.CardInfo): void {
			let p: number = Global.getUserPosition(info.Sit-1);
			// let nQue: number = game.GameUserList.arrUserList[info.Sit].cardType;
			let ghand: eui.Group = this.findHandGroup(p);
			let card: BaseHandCardUI = new BaseHandCardUI();
			ghand.addChild(card);
			let isQue: boolean = false;
			let cardValue: number = game.GameParmes.getCardID(info);
			
			if (p == 3) {
				if (cardValue > 0) {
					let nHua: number = game.GameParmes.getHua(info);
					// if (nHua == nQue) {
					// 	isQue = true;
					// }
				}
				//自动打牌
				if (GameParmes.isHu) {
					this.nAutoTime = egret.setTimeout(function () {
						egret.clearTimeout(this.nAutoTime);
						this.nAutoTime = -1;
						GameController.ReqUserSendCard(info);
					}, this, 1500);
				}

			}
			card.setCard(p, 0, cardValue, 0, isQue);
			if (p == 0) {
				// card.x = this.arrLHP[0].x;
				// card.y = this.arrLHP[0].y;
				card.x = 40 + 50;
				card.y = 692;
				egret.Tween.get(card).to({ x: 40, touchEnabled: true }, 200);
				ghand.addChild(card);
			}
			if (p == 1) {
				// card.x = -54;
				card.x = -96;
				card.y = 50;
				egret.Tween.get(card).to({ y: 0, touchEnabled: true }, 200);
			}
			if (p == 2) {
				card.setCard(p, 16, 1, 0, isQue);
				// card.x = this.arrRHP[0].x;
				// card.y = this.arrRHP[0].y;
				card.y = 0;
				card.x = -50;
				ghand.addChildAt(card, 0);
				egret.Tween.get(card).to({ x: 0, touchEnabled: true }, 200);
			}
			if (p == 3) {
				card.cardInfo = info;
				card.y = -50;
				// card.x = (ghand.numChildren - 1) * 90;
				// card.x += 10;
				card.x = (ghand.numChildren - 1) * (126 - 5) + 15;

				egret.Tween.get(card).to({ y: 0, touchEnabled: true }, 200);
			}
		}
		/*停止自动出牌*/
		public stopAutoSendCard(): void {
			if (this.nAutoTime > -1) {
				egret.clearTimeout(this.nAutoTime);
				this.nAutoTime = -1;
			}
		}
		private copyHandCard(arrTmp: Array<CardInfo>): Array<CardInfo> {
			if (!arrTmp) {
				return
			}

			let arr: Array<game.CardInfo> = [];
			for (let i: number = 0; i < arrTmp.length; i++) {
				let card: game.CardInfo = new game.CardInfo();
				card.CardID = arrTmp[i].CardID;
				card.Sit = arrTmp[i].Sit;
				arr.push(card);
			}
			return arr;

			// console.log("=arrTmp=",arrTmp)

			if (!arrTmp) {
				return
			}

			// console.log("=arrTmp==",arrTmp)
			//const arr: Array<CardInfo> = [];
			// for (let i: number = 0; i < arrTmp.length; i++) {
			// 	const card: CardInfo = new CardInfo();
			// 	card.CardID = arrTmp[i].CardID;
			// 	card.Sit = arrTmp[i].Sit;
			// 	arr.push(card);
			// }
			// return arr;
		}

		public updataHandsByPosition(sit: number, state: number, isShow: boolean = true, isQishou: boolean = false): void {
			let p: number = Global.getUserPosition(sit);
			//console.log("====updataHandsByPosition==",sit,p)
			// let nQue:number = game.GameUserList.arrUserList[sit].cardType;
			let ghand: eui.Group = this.findHandGroup(p);
			//this.clearGroup(ghand);
			let arr: Array<CardInfo> = this.copyHandCard(game.GamePlayData.getHandCards(sit));
			// console.log("===arr===",arr)
			if(isQishou){
				this.clearSomeGroup(ghand,arr);
			}else{
				this.clearGroup(ghand);
			}
			let index: number = 0;
			let len: number = arr.length;
			if (arr.length % 3 == 2) {//玩家有摸牌牌权
				index = 0;
			} else {
				index = 1;
			}
			for (var i: number = 0; i < len; i++) {
				
				let isQue: boolean = false;
				let info: game.CardInfo = arr[i];
				let cardValue: number = info.CardID; // game.GameParmes.getCardID(info);
			
				if(cardValue==-1 && isQishou){
					continue;
				}
				let card: BaseHandCardUI = new BaseHandCardUI();
				ghand.addChild(card);
				card.visible = isShow;
				let nOptHei: number = 0;
				let nOptW: number = 0;

				if (p == 0) {


					let itemCardWidth: number = 126 - 5;
					card.setCard(p, (i + index), cardValue, state, isQue);
					card.cardInfo = info;
					if (GameParmes.isHu) {
						card.setMaskFlag(false);
						if (i == len - 1 && index == 0) {
							card.setMaskFlag(true);
						}
					}
					if (state == 0) {
						card.x = i * itemCardWidth;
						if (i == 13) {//自己出牌，断线回来
							card.x = i * itemCardWidth + 20;
						}else if((len==11&&i==10)||(len==8&&i==7)||(len==5&&i==4)||(len==2&&i==1)){
							card.x = i * itemCardWidth + 20;
						}
				
						// if (i == len - 1 && index == 0) {
						// 	card.x += 10;
						// }

					}
					else {
						card.x = i * card.width - i * 2;
					}
				}
				if (p == 1) {
										card.setCard(p, 16 - i - index, cardValue, state, isQue);
					if (state == 0) {
						card.x = (1578 - 1555) + i * 18;
						card.y = (143 - 90) + i * 42;
						if (i == 13) {
							card.y = 0;
							card.x = 0;
							ghand.addChildAt(card, 0);
						} else {
							ghand.addChild(card);
						}
						this.gHandCardR.x = this.gHandCardR.y = 0;
						this.gOtherCardR.y = 0;
						this.sprTmpRight.x = 1555 - 20;
						this.sprTmpRight.y = 90 + 150;
						this.sprTmpRight.scaleX = this.sprTmpRight.scaleY = 0.8;
					} else {
						card.x = i * 19;
						card.y = i * 44;
						ghand.addChild(card);
					}
	

				}
				 if (p == 2) {

					let itemCardWidth: number = 76 - 1;
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (state == 0) {
						card.x = (i) * itemCardWidth;
						if (index == 0 && i == 0) {
							card.x -= 10;
						}
						this.gOtherCardU.x = 1350 - 520;
						this.sprTmpUp.x = 520;
						this.sprTmpUp.y = 36 + 50;
					} else {
						card.x = i * 64;
					}


				}
				if (p == 3) {
					let itemX: number = 277;
					let itemY: number = 144;
					let mcX: number = 304;
					let mcY: number = 16;
					nOptHei = 160;
					nOptW = 72;
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (state == 0) {//暗牌
						card.x = itemX - (12 - i) * 18;
						card.y = itemY + (12 - i) * 41;

						if (i == 13) {
							//最后一张牌多出20像素
							card.x = 40;
							card.y = 692;
							ghand.addChild(card);
						} else {
							ghand.addChildAt(card, 0);
						}
						this.gHandCardL.y = 0;
						this.sprTmpLeft.y = 150;
						this.sprTmpLeft.x = 90 - 5;
						this.sprTmpLeft.scaleX = this.sprTmpLeft.scaleY = 0.8;
					} else {//亮牌
						card.x = 304 - (12 - i) * 19;
						card.y = 144 + (12 - i) * 44 + 20;
						ghand.addChildAt(card, 0);
					}

		
				}
			}
			if (p == 0) {
				if (i == 14) {
					this.gHandCardD.x = 1740 - this.gHandCardD.width + 20 + 126 - 5;
				} else {
					this.gHandCardD.x = 1740 - this.gHandCardD.width;
				}
				// console.log(this.gHandCardD.x, this.gHandCardD.width);
			}


			this.sprTmpUp.x = 520;
			this.sprTmpUp.y = 36 + 50;

		}


	

		/*增加牌的下落动画*/
		public showHandCardAnim(arr: Array<any>): void {
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				for (let j: number = 0; j < arr.length; j++) {
					if (item.cardInfo.CardID == arr[j].CardID) {
						item.y = -50;
						egret.Tween.get(item).to({ y: 0 }, 200);
					}
				}
			}
		}

		/*创建全部玩家的吃碰杠数据*/
		public createAllCPG(b: boolean): void {
			for (let i: number = 0; i < 4; i++) {
				this.createCPGCard(i, b);
			}
		}
		private copyCardGroup(arrTmp: Array<CardsGroupInfo>): Array<CardsGroupInfo> {
			let arr: Array<CardsGroupInfo> = [];
			for (let i: number = 0; i < arrTmp.length; i++) {
				let tmp: CardsGroupInfo = arrTmp[i];
				let cardsgroup: CardsGroupInfo = new CardsGroupInfo();
				cardsgroup.CardsGroupType = tmp.CardsGroupType;
				cardsgroup.cardsit = tmp.cardsit;
				cardsgroup.obtainCard.Sit = tmp.obtainCard.Sit;
				cardsgroup.obtainCard.CardID = tmp.obtainCard.CardID;
				for (var j: number = 0; j < tmp.cards.length; j++) {
					var card: game.CardInfo = new game.CardInfo();
					card.CardID = tmp.cards[j].CardID;
					if (card.CardID == tmp.obtainCard.CardID) {
						card.Sit = tmp.obtainCard.Sit;
					} else {
						card.Sit = tmp.cardsit;
					}
					cardsgroup.cards.push(card);
				}
				arr.push(cardsgroup);
			}
			return arr;
		}
		/*创建吃碰杠牌*/
		public createCPGCard(nSit: number, b: boolean = false): void {

			let p: number = Global.getUserPosition(nSit);
			let g: eui.Group = this.findOptGroup(p);
			this.clearGroup(g);
			let arrCards: Array<CardsGroupInfo> = game.GamePlayData.getOtherCards(nSit);//this.copyCardGroup(game.GamePlayData.getOtherCards(nSit));
			let nOptCount: number = arrCards.length;//玩家吃碰杠数组
			var mc: eui.Group;
			if (p == 0) {
				let itemX: number = 277;
				let itemY: number = 144;
				let mcX: number = 304;
				let mcY: number = 16;
				let nOptHei = 160;
				let nOptW = 72;

				for (var i: number = 0; i < nOptCount; i++) {//吃碰杠的创建
					mc = this.createCPGItem(p, i, arrCards[i]);
					if (this.gOtherCardL.numChildren > 0) {
						mc.x = mcX - (nOptW * i);
						mc.y = mcY + (nOptHei * i);
					} else {
						mc.x = mcX;
						mc.y = mcY;
					}
					this.gOtherCardL.addChild(mc);
				}
				this.gHandCardL.y = 0;
				this.sprTmpLeft.y = 150;
				this.sprTmpLeft.x = 90 - 5;
				this.sprTmpLeft.scaleX = this.sprTmpLeft.scaleY = 0.8;
			}
			if (p == 1) {
				for (let i = nOptCount - 1; i >= 0; i--) {//吃碰杠的创建
					mc = this.createCPGItem(p, i, arrCards[i]);
					mc.x = i * -208;
					this.gOtherCardU.addChild(mc);
				}

				this.gOtherCardU.x = 1350 - 520;
				this.sprTmpUp.x = 520;
				this.sprTmpUp.y = 36 + 50;
			}
			if (p == 2) {
				for (let i = nOptCount - 1; i >= 0; i--) {//吃碰杠的创建

					mc = this.createCPGItem(p, i, arrCards[i]);
					mc.x = (1758 - 1555) - (i) * 72;
					mc.y = (678 - 90) - (i) * 158;
					this.gOtherCardR.addChild(mc);
				}
				this.gHandCardR.x = this.gHandCardR.y = 0;
				this.gOtherCardR.y = 0;
				this.sprTmpRight.x = 1555 - 20;
				this.sprTmpRight.y = 90 + 150;
				this.sprTmpRight.scaleX = this.sprTmpRight.scaleY = 0.8;
			}
			if (p == 3) {

				for (let i = 0; i < nOptCount; i++) {//吃碰杠的创建
					mc = this.createCPGItem(p, i, arrCards[i]);
					if (this.gOtherCardD.numChildren > 0) {
						mc.x = this.gOtherCardD.numChildren*89*3 + 50;
					}
					this.gOtherCardD.addChild(mc);
				}
				if (b) {//断线续玩
					this.gOtherCardD.x = -100;
					this.gHandCardD.getChildAt(this.gHandCardD.numChildren - 1).x += 15;
					//this.gOtherCardD.x = this.gHandCardD.x - 34 - this.gOtherCardD.width;//554
				} else {
					this.gOtherCardD.x = -100;
					this.gHandCardD.x += this.gHandCardD.getChildAt(this.gHandCardD.numChildren - 1).width;//126
					this.gHandCardD.getChildAt(this.gHandCardD.numChildren - 1).x += 15;
					//this.gOtherCardD.x = this.gHandCardD.x - 34 - this.gOtherCardD.width;//554
					// console.log("gOtherCardD的X坐标:" + this.gOtherCardD.x, "gHandCardD的x" + this.gHandCardD.x, "gOtherCardD宽 :" + this.gOtherCardD.width);
				}
			}

		}
		/*p 玩家位置 index 牌组索引*/
		private createCPGItem(p: number, index: number, info: CardsGroupInfo): eui.Group {
			var mc: eui.Group = new eui.Group();
			var arrItems: Array<BaseOtherCardUI> = [];
			let g: eui.Group = this.findOptGroup(p);
			let isAnGang: boolean = false;
			if (info.CardsGroupType == CardsGroupType.ANGANG) {
				isAnGang = true;
				console.log("暗杠"+info.cards.length);
				
			} else {
				isAnGang = false;
			}
			// let gItem: eui.Group = new eui.Group();
			g.addChild(mc);
			for (let i: number = 0; i < info.cards.length; i++) {
				var cardInfo: game.CardInfo = info.cards[i];
				let cardValue: number = game.GameParmes.getCardID(info.cards[i]);
				let item: BaseOtherCardUI = new BaseOtherCardUI();
				item.cardInfo = info.cards[i];
				// gItem.addChild(item);
				let itemUpW: number = 64 + 1;
				let itemDownW: number = 86 - 2;
				//牌高度
				let itemHei: number = 0;
				arrItems.push(item);
				if (p == 0) {//左
					if (isAnGang) {
						if (i == 3) {

							item.setCard(p, (index * 4 + i - 2), 0, isAnGang);
						} else {
							item.setCard(p, (index * 4 + i), 0, isAnGang);
						}



					} else {

						item.setCard(p, index * 4 + i, cardValue, isAnGang);

					}


				}
				if (p == 1) {//上

					if (isAnGang) {
						item.y = -20
						if (i == 3) {//暗杠时在上面那张牌

							item.setCard(p, index - 2, 0, isAnGang);

						} else {
							item.setCard(p, index, 0, isAnGang);

						}

					} else {

						item.setCard(p, index, cardValue, isAnGang);


					}
				}
				if (p == 2) {//右

					if (isAnGang) {
						if (i == 3) {

							item.setCard(p, (index * 4 + i - 2), 0, isAnGang);

						} else {

							item.setCard(p, (index * 4 + i), 0, isAnGang);
						}


					} else {

						item.setCard(p, index * 4 + i, cardValue, isAnGang);



					}
				}
				if (p == 3) {//下

					if (isAnGang) {
						item.y = 50;
						if (i == 3) {
							item.setCard(p, index, cardValue, isAnGang);
						} else {
							item.setCard(p, index, 0, isAnGang);
						}
					} else {
						item.setCard(p, index, cardValue, isAnGang);
					}
				}
				if (p == 0 || p == 2) {
					//总高度，使用了26
					let itemHei = 51;
					if (mc.numChildren > 0) {
						if (p == 0) {
							item.x = i * -23;
						} else {
							item.x = i * 23;
						}
						item.y = i * itemHei;
					}
					mc.addChild(item);
					if (i == 3) {
						//杠的特殊处理
						// item.y = mc.getChildAt(1).y - 15;
						//杠的特殊处理
						if (p == 2) {
							item.x = mc.getChildAt(1).x + 5;
							item.y = mc.getChildAt(1).y - 32;
						} else {
							item.x = mc.getChildAt(1).x - 5;
							item.y = mc.getChildAt(1).y - 32;
						}
					}
				} else {//p=1,p=3
					if (i > 0) {
						if (p == 3 && i != 3) {
							item.x = arrItems[i - 1].x + itemDownW;
							mc.width = item.x + itemDownW;
						} else {
							item.x = arrItems[i - 1].x + itemUpW;
							mc.width = item.x + itemUpW;
						}
					}
					mc.addChildAt(item, 0);
					if (p == 3) {
						item.y = 50;
					}
					if (i == 3) {
						item.x = arrItems[1].x;
						if (p == 3) {
							item.y = 24;
						} else {
							item.y = -40;
						}
						mc.addChild(item);
					}

				}
			}


			return mc;

		}
		/*点击了手牌*/
		private onClickHandCard(evt: egret.Event): void {
			let item: BaseHandCardUI = evt.data;

			if (GameParmes.gameStage == GameStageType.PLAYING) {//出牌阶段
				if (this.currentCard == item) {
					if (game.GamePlayData.playingSeat == Global.userSit) {
						this.dispatchEvent(new egret.Event("ShowTingTip", true, true, { "isShowTing": item.isTingFlag, "index": item.cardIndex }));
						var cardInfo: game.CardInfo = new game.CardInfo();
						cardInfo.CardID = item.cardInfo.CardID;
						if (GameParmes.nHuType == 14 && item.isHuFlag) {//天胡处理
							let info: CardsGroupInfo = GamePlayData.Hu_Groups[0];
							info.obtainCard.CardID = item.cardInfo.CardID;
							// room.RoomWebSocket.instance().roomSender.ReqSendCard(info);
							const cardInfo: CardInfo = new CardInfo();
							cardInfo.CardID = item.cardInfo.CardID;

							const opt: room.MJ_Operation = new room.MJ_Operation()
							opt.operationType = CardsGroupType.MJ_OperationType.MJ_OT_TING;//摸切
							opt.Tiles = [item.cardInfo.CardID] //牌组  如果是出牌则数组中只有一张牌
							opt.tingTileInfo = [{
								callTile: item.cardInfo.CardID,	//听哪张牌
								// optional	int32		callTileCount	= 2;	//听的这张牌还有几张
								// optional	int32		fans			= 3;	//和这张牌有几番s
							}]
							room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
							if (this.nAutoTime > -1) {
								egret.clearTimeout(this.nAutoTime);
								this.nAutoTime = -1;
							}


						} else {
							GameController.ReqUserSendCard(cardInfo);
							if (this.nAutoTime > -1) {
								egret.clearTimeout(this.nAutoTime);
								this.nAutoTime = -1;
							}
						}
					} else {
						item.onSelectCard();
						this.currentCard = null;
					}

				} else {
					if (this.currentCard != null) {
						this.currentCard.onSelectCard();
						this.currentCard = null;
					}
					this.currentCard = item;
					item.onSelectCard();
					if (item.isTingFlag) {//显示要听的牌
						this.dispatchEvent(new egret.Event("ShowTingGroup", true, true, item.cardIndex));
					}
				}
			}
		}
		// /*选择出换三张推荐的牌*/
		// public onShowHSZCards():void{
		// 	if(this.isSortComplete && this.arrHSZCards.length == 0){
		// 		this.arrHSZCards = [];
		// 		GamePlayData.HSZUserChoose = [];
		// 		for(let i:number = 0;i < GamePlayData.HSZRecommend.length;i++){
		// 			let card:proto.CardInfo = GamePlayData.HSZRecommend[i];
		// 			GamePlayData.HSZUserChoose.push(card);
		// 			for(let j:number = 0;j < this.gHandCardD.numChildren;j++){
		// 				let item:BaseHandCardUI = this.gHandCardD.getChildAt(j) as BaseHandCardUI;
		// 				if(item.cardInfo.CardID == card.CardID){
		// 					this.arrHSZCards.push(item);
		// 					item.onSelectCard();
		// 				}
		// 			}
		// 		}
		// 	}

		// }
		/*重新排序定缺的手牌*/
		/*public sortHandCardQue(type:number):void{
			let arr:Array<CardInfo> = GamePlayData.getHandCards(Global.userSit);
			let num:number = arr.length;
			var count:number = 0;
			for(var i:number = 0;i < num;i++){
				var card:CardInfo = arr[count];
				if(GameParmes.getHua(card) == type){
					arr.push(arr.splice(count,1)[0]);
				}else{
					count += 1;
				}
			}
			this.updataHandsByPosition(Global.userSit,0,true);
		}*/
		public closeTingFlag(): void {
			let len: number = this.gHandCardD.numChildren;
			for (let i: number = 0; i < len; i++) {
				let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
				item.touchEnabled = true;
				item.touchChildren = true;
				item.setMaskFlagEX(false);
			}
		}
		//停牌后显示遮罩
		public showTingMask(): void {
			let len: number = this.gHandCardD.numChildren;
			for (let i: number = 0; i < len; i++) {
				let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
				item.touchEnabled = true;
				item.touchChildren = true;
				item.setMaskFlagEX(true);
			}
		}
		/*手牌上显示听牌标志*/
		public showTingFlag(flag: boolean, str: string): void {
			let len: number = this.gHandCardD.numChildren;
			if (flag) {
				let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
				for (let i: number = 0; i < len; i++) {
					let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
					if (str == "tingEX") {
						item.touchEnabled = false;
						item.touchChildren = false;
						item.setMaskFlagEX(true);
					}
					for (let j: number = 0; j < arr.length; j++) {
						// Global.log(item.cardIndex+" yyy"+arr[j].ObtainCardIndex+1);
						if (item.cardIndex == GameParmes.getCardIDByID(arr[j].ObtainCardIndex)) {
							item.setTingFlag(true, str);
							item.touchEnabled = true;
							item.touchChildren = true;
							if (game.GamePlayData.tingData[Global.userSit] == false) {
								item.setMaskFlagEX(false);
							} else {
								item.setMaskFlagEX(true);
							}

							break;
						}
					}
				}
			} else {
				for (let i: number = 0; i < len; i++) {
					let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
					item.setTingFlag(false, "");
					item.clearSelectCard();
				}
			}
		}
		/*给手牌上增加遮罩*/
		public showHuFlag(): void {
			let len: number = this.gHandCardD.numChildren;
			for (let i: number = 0; i < len; i++) {
				let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
				item.setMaskFlag(false);
			}
		}
		/*查找亮牌张数*/
		public checkLPCards(): void {
			GamePlayData.arrLPCards = [];
			for (let i: number = 0; i < 60; i++) {
				let arr: Array<number> = [];
				GamePlayData.arrLPCards.push(arr);
			}
			//添加手牌数据
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				this.addLPCard(item.cardInfo);
			}
			//添加碰杠数据
			for (let i: number = 0; i < 4; i++) {
				let g: eui.Group = this.findOptGroup(i);
				let len: number = g.numChildren;
				for (let j: number = 0; j < len; j++) {
					let gItem: eui.Group = g.getChildAt(j) as eui.Group;
					for (let n: number = 0; n < gItem.numChildren; n++) {
						let item: BaseOtherCardUI = gItem.getChildAt(n) as BaseOtherCardUI;
						this.addLPCard(item.cardInfo);
					}

				}
			}
			//添加胡牌数据
			for (let i: number = 0; i < 4; i++) {
				let g: eui.Group = this.findHuGroup(i);
				let len: number = g.numChildren;
				for (let j: number = 0; j < len; j++) {
					let item: BaseHuCardUI = g.getChildAt(j) as BaseHuCardUI;
					this.addLPCard(item.cardInfo);
				}
			}
		}
		private addLPCard(cardInfo): void {
			if (cardInfo) {
				let cardValue: number = GameParmes.getCardID(cardInfo);
				if (cardValue > 0) {
					if (GamePlayData.arrLPCards[cardValue].indexOf(cardInfo.CardID) == -1) {
						GamePlayData.arrLPCards[cardValue].push(cardInfo.CardID);
					}
				}
			}

		}
		private clearGroup(g: eui.Group): void {
			while (g.numChildren > 0) {
				let item = g.removeChildAt(0);
				item = null;
			}
		}
		private clearSomeGroup(g: eui.Group,p:  Array<game.CardInfo>): void {
			for(let i =0;i<p.length;i++){
				if(p[i].CardID!=-1){
					let item = g.removeChildAt(0);
					item = null;
				}
			}
		}
		private findHandGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gHandCardD;
			}
			if (p == 1) {
				return this.gHandCardR;
				
			}
			if (p == 2) {
				return this.gHandCardU;
			}
			if (p == 3) {
				return this.gHandCardL;
			}
		}
		private findOptGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gOtherCardD;
			}
			if (p == 1) {
				return this.gOtherCardR;
			}
			if (p == 2) {
				return this.gOtherCardU;
			}
			if (p == 3) {
				return this.gOtherCardL;
				
			}
		}
		private findHuGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gHuCardD;
			}
			if (p == 1) {
				return this.gHuCardR;
			}
			if (p == 2) {
				return this.gHuCardU;
				
			}
			if (p == 3) {
				return this.gHuCardL;
				
			}
		}
		private clearAllGroup(): void {
			this.clearGroup(this.gHandCardD);
			this.clearGroup(this.gHandCardL);
			this.clearGroup(this.gHandCardR);
			this.clearGroup(this.gHandCardU);

			this.clearGroup(this.gOtherCardD);
			this.clearGroup(this.gOtherCardL);
			this.clearGroup(this.gOtherCardR);
			this.clearGroup(this.gOtherCardU);



			this.clearGroup(this.gHuCardD);
			this.clearGroup(this.gHuCardL);
			this.clearGroup(this.gHuCardR);
			this.clearGroup(this.gHuCardU);
		}
		/*测试代码*/
		private testHand(sit: number, state: number): void {
			let p: number = sit
			let nQue: number = 1;
			let ghand: eui.Group = this.findHandGroup(p);
			this.clearGroup(ghand);

			let index: number = 0;
			let len: number = 16;
			if (len % 3 == 2) {//玩家有摸牌牌权
				index = 0;
			} else {
				index = 1;
			}
			for (let i: number = 0; i < len; i++) {
				let isQue: boolean = false;
				let cardValue: number = 1 + Math.floor(Math.random() * 27);
				let card: BaseHandCardUI = new BaseHandCardUI();
				ghand.addChild(card);

				if (p == 0) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (state == 0) {//暗牌
						card.x = this.arrLHP[i + index].x;
						card.y = this.arrLHP[i + index].y;
					} else {//亮牌
						card.x = this.arrLLP[i + index].x;
						card.y = this.arrLLP[i + index].y;
					}
					ghand.addChildAt(card, 0);
				}
				if (p == 1) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					card.x = i * 44;
					if (index == 0 && i == 0) {
						card.x -= 10;
					}
				}
				if (p == 2) {
					card.setCard(p, 16 - i - index, cardValue, state, isQue);
					if (state == 0) {
						card.x = this.arrRHP[i + index].x;
						card.y = this.arrRHP[i + index].y;
					} else {
						card.x = this.arrRLP[i + index].x;
						card.y = this.arrRLP[i + index].y;
					}
					ghand.addChild(card);
				}
				if (p == 3) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (GameParmes.isHu) {
						card.setMaskFlag(false);
						if (i == len - 1 && index == 0) {
							card.setMaskFlag(true);
						}
					}
					card.x = i * 90;
					if (i == len - 1 && index == 0) {
						card.x += 10;
					}
				}
			}
			this.gHandCardU.y = 310;
			this.gHandCardU.x = 700;
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 150;
		}
	}
}