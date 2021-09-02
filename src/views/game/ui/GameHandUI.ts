module game {
	export class GameHandUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		//[{x:0,y:0},{x:0,y:0},{x:0,y:0}]
		/*左边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrLHP: Array<any> = [{ x: 203, y: 845 }, { x: 225, y: 795 }, { x: 242, y: 757 }, { x: 258, y: 720 }, { x: 274, y: 685 }, { x: 288, y: 649 },
		{ x: 304, y: 614 }, { x: 318, y: 582 }, { x: 332, y: 549 }, { x: 346, y: 517 }, { x: 360, y: 486 }, { x: 373, y: 455 }, { x: 385, y: 426 }, { x: 397, y: 399 }, { x: 408, y: 369 }, { x: 420, y: 340 }, { x: 431, y: 314 }];

		private arrLLP: Array<any> = [{ x: 210, y: 874 }, { x: 218, y: 830 }, { x: 233, y: 794 }, { x: 248, y: 758 }, { x: 264, y: 723 }, { x: 278, y: 688 },
		{ x: 294, y: 652 }, { x: 308, y: 619 }, { x: 322, y: 587 }, { x: 335, y: 554 }, { x: 348, y: 523 }, { x: 361, y: 492 }, { x: 374, y: 462 }, { x: 388, y: 432 }, { x: 401, y: 403 }, { x: 413, y: 374 }, { x: 426, y: 346 }];

		private arrLCP: Array<any> = [
			[{ x: 322, y: 339 }, { x: 307, y: 366 }, { x: 292, y: 395 }, { x: 300, y: 353 }],
			[{ x: 272, y: 446 }, { x: 257, y: 473 }, { x: 242, y: 502 }, { x: 250, y: 460 }],
			[{ x: 223, y: 546 }, { x: 207, y: 576 }, { x: 191, y: 607 }, { x: 200, y: 563 }],
			[{ x: 169, y: 655 }, { x: 151, y: 688 }, { x: 133, y: 722 }, { x: 144, y: 675 }],
			[{ x: 108, y: 779 }, { x: 89, y: 815 }, { x: 69, y: 854 }, { x: 82, y: 803 }]];

		private arrLAP: Array<any> = [
			[{ x: 330, y: 318 }, { x: 315, y: 349 }, { x: 300, y: 380 }, { x: 309, y: 336 }],
			[{ x: 276, y: 424 }, { x: 261, y: 455 }, { x: 245, y: 487 }, { x: 254, y: 442 }],
			[{ x: 222, y: 533 }, { x: 207, y: 567 }, { x: 191, y: 601 }, { x: 202, y: 555 }],
			[{ x: 166, y: 650 }, { x: 149, y: 686 }, { x: 131, y: 721 }, { x: 142, y: 671 }],
			[{ x: 108, y: 777 }, { x: 90, y: 814 }, { x: 71, y: 853 }, { x: 83, y: 802 }]];

		/*右边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrRHP: Array<any> = [{ x: 1441, y: 315 }, { x: 1458, y: 353 }, { x: 1467, y: 382 }, { x: 1480, y: 412 }, { x: 1491, y: 439 }, { x: 1501, y: 468 },
		{ x: 1514, y: 499 }, { x: 1525, y: 530 }, { x: 1538, y: 562 }, { x: 1552, y: 595 }, { x: 1566, y: 627 }, { x: 1579, y: 662 }, { x: 1594, y: 698 }, { x: 1607, y: 733 }, { x: 1622, y: 770 }, { x: 1637, y: 808 }, { x: 1653, y: 846 }];

		private arrRLP: Array<any> = [{ x: 1427, y: 346 }, { x: 1441, y: 382 }, { x: 1452, y: 411 }, { x: 1464, y: 440 }, { x: 1476, y: 470 }, { x: 1487, y: 500 },
		{ x: 1498, y: 531 }, { x: 1512, y: 562 }, { x: 1525, y: 596 }, { x: 1536, y: 627 }, { x: 1549, y: 660 }, { x: 1562, y: 696 }, { x: 1575, y: 731 }, { x: 1589, y: 766 }, { x: 1603, y: 802 }, { x: 1618, y: 838 }, { x: 1632, y: 874 }];

		private arrRCP: Array<any> = [
			[{ x: 1757, y: 854 }, { x: 1740, y: 815 }, { x: 1722, y: 779 }, { x: 1748, y: 802 }],
			[{ x: 1700, y: 722 }, { x: 1685, y: 688 }, { x: 1668, y: 655 }, { x: 1693, y: 675 }],
			[{ x: 1648, y: 607 }, { x: 1634, y: 576 }, { x: 1620, y: 546 }, { x: 1642, y: 563 }],
			[{ x: 1602, y: 502 }, { x: 1589, y: 473 }, { x: 1577, y: 446 }, { x: 1597, y: 460 }],
			[{ x: 1552, y: 395 }, { x: 1539, y: 366 }, { x: 1527, y: 339 }, { x: 1547, y: 353 }]];

		private arrRAP: Array<any> = [
			[{ x: 1756, y: 853 }, { x: 1739, y: 814 }, { x: 1722, y: 777 }, { x: 1747, y: 802 }],
			[{ x: 1701, y: 721 }, { x: 1684, y: 686 }, { x: 1668, y: 650 }, { x: 1694, y: 671 }],
			[{ x: 1647, y: 601 }, { x: 1631, y: 567 }, { x: 1615, y: 533 }, { x: 1638, y: 555 }],
			[{ x: 1596, y: 487 }, { x: 1580, y: 455 }, { x: 1566, y: 424 }, { x: 1589, y: 442 }],
			[{ x: 1542, y: 380 }, { x: 1527, y: 349 }, { x: 1513, y: 318 }, { x: 1536, y: 336 }]];

		private arrHuP: Array<any> = [
			[{ x: 319, y: 842 }, { x: 335, y: 799 }, { x: 350, y: 757 }, { x: 367, y: 715 }],
			[{ x: 496, y: 381 }],
			[{ x: 1335, y: 471 }, { x: 1348, y: 506 }, { x: 1360, y: 543 }, { x: 1372, y: 579 }],
			[{ x: 1523, y: 863 }, { x: 1457, y: 863 }, { x: 1392, y: 863 }, { x: 1331, y: 863 }]];
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


			this.arrHSZCards = [];
			this.currentCard = null;
			this.isSortComplete = false;
			this.isHSZStart = false;

			this.addChild(this.gHuCardL);
			this.addChild(this.gHuCardU);
			this.addChild(this.gHuCardR);
			this.addChild(this.gHuCardD);

			this.addChild(this.gHandCardL);
			this.addChild(this.gHandCardU);
			this.addChild(this.gHandCardR);
			this.addChild(this.gHandCardD);

			this.gHandCardD.addEventListener("OnClickHandCard", this.onClickHandCard, this);

			this.addChild(this.gOtherCardL);
			this.addChild(this.gOtherCardU);
			this.addChild(this.gOtherCardR);
			this.addChild(this.gOtherCardD);


			this.clearAllGroup();

			/*for(let i:number = 0;i < 4;i++){
				this.showHuCard(i,1,3);
			}*/

			/*for(let j:number = 0;j < 4;j++){
				this.testHand(j,0);
			}*/


		}
		/*创建手牌  state 0暗牌状态 1亮牌状态*/
		public createHandCard(isShow: boolean, state: number): void {
			for (let j: number = 0; j < 4; j++) {
				this.updataHandsByPosition(j, state, isShow);
			}
			if (!isShow) {
				this.showHandCard();
			}
		}
		/*用于处理开始的发牌*/
		private showHandCard(): void {
			var len: number = 0;
			for (let j: number = 0; j < 4; j++) {
				for (let i: number = 0; i < 4; i++) {
					let g: eui.Group = this.findHandGroup(i);
					let count: number = len + 4 > g.numChildren ? g.numChildren : len + 4;
					for (let n: number = len; n < count; n++) {
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
			let p: number = Global.getUserPosition(sit);
			GamePlayData.CardsWall_Hua_Index++;
			let card: proto.CardInfo = new proto.CardInfo();
			card.CardID = cardID;
			card.Sit = sit;
			let cardValue: number = game.GameParmes.getCardID(card);
			let gHu: eui.Group = this.findHuGroup(p);
			let len: number = gHu.numChildren;
			let item: game.BaseHuCardUI = new game.BaseHuCardUI();
			item.setCard(p, len, cardValue);
			item.cardInfo = card;
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
		public getOneCard(info: proto.CardInfo): void {
			let p: number = Global.getUserPosition(info.Sit);
			let nQue: number = game.GameUserList.arrUserList[info.Sit].cardType;
			let ghand: eui.Group = this.findHandGroup(p);
			let card: BaseHandCardUI = new BaseHandCardUI();
			ghand.addChild(card);
			let isQue: boolean = false;
			let cardValue: number = game.GameParmes.getCardID(info);
			if (p == 3) {
				if (cardValue > 0) {
					let nHua: number = game.GameParmes.getHua(info);
					if (nHua == nQue) {
						isQue = true;
					}
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
				card.x = this.arrLHP[0].x;
				card.y = this.arrLHP[0].y;
				ghand.addChild(card);
			}
			if (p == 1) {
				card.x = -54;
			}
			if (p == 2) {
				card.setCard(p, 16, 1, 0, isQue);
				card.x = this.arrRHP[0].x;
				card.y = this.arrRHP[0].y;
				ghand.addChildAt(card, 0);
			}
			if (p == 3) {
				card.cardInfo = info;
				card.x = (ghand.numChildren - 1) * 90;
				card.x += 10;
			}
		}
		/*停止自动出牌*/
		public stopAutoSendCard(): void {
			if (this.nAutoTime > -1) {
				egret.clearTimeout(this.nAutoTime);
				this.nAutoTime = -1;
			}
		}
		private copyHandCard(arrTmp: Array<proto.CardInfo>): Array<proto.CardInfo> {
			let arr: Array<proto.CardInfo> = [];
			for (let i: number = 0; i < arrTmp.length; i++) {
				let card: proto.CardInfo = new proto.CardInfo();
				card.CardID = arrTmp[i].CardID;
				card.Sit = arrTmp[i].Sit;
				arr.push(card);
			}
			return arr;
		}

		public updataHandsByPosition(sit: number, state: number, isShow: boolean = true): void {
			let p: number = Global.getUserPosition(sit);
			// let nQue:number = game.GameUserList.arrUserList[sit].cardType;
			let ghand: eui.Group = this.findHandGroup(p);
			this.clearGroup(ghand);
			let arr: Array<proto.CardInfo> = this.copyHandCard(game.GamePlayData.getHandCards(sit));
			let index: number = 0;
			let len: number = arr.length;
			if (arr.length % 3 == 2) {//玩家有摸牌牌权
				index = 0;
			} else {
				index = 1;
			}
			for (let i: number = 0; i < len; i++) {
				let isQue: boolean = false;
				let info: proto.CardInfo = arr[i];
				let cardValue: number = game.GameParmes.getCardID(info);
				if (cardValue > 0) {
					let nHua: number = game.GameParmes.getHua(info);
					// if(nHua == nQue){
					// 	isQue = true;
					// }
				}
				let card: BaseHandCardUI = new BaseHandCardUI();
				ghand.addChild(card);
				card.visible = isShow;
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
					card.cardInfo = info;
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
			this.gHandCardU.y = 301;
			this.gHandCardU.x = 600;
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 150;
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
		/*调整自己手牌位置 换三张后的显示*/
		public adjustMyHandCard(): void {
			for (let j: number = 0; j < GamePlayData.HSZUserChoose.length; j++) {
				for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
					let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
					if (GamePlayData.HSZUserChoose[j].CardID == item.cardInfo.CardID) {
						this.gHandCardD.removeChild(item);
						break;
					}
				}
			}
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				item.x = i * 90;
				item.y = 0;
			}
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = (GameConfig.curWidth() - this.gHandCardD.width) / 2;
		}
		/*创建全部玩家的吃碰杠数据*/
		public createAllCPG(): void {
			for (let i: number = 0; i < 4; i++) {
				this.createCPGCard(i);
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
					var card: proto.CardInfo = new proto.CardInfo();
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
		public createCPGCard(nSit: number): void {
			let p: number = Global.getUserPosition(nSit);
			let g: eui.Group = this.findOptGroup(p);
			this.clearGroup(g);
			let arrCards: Array<CardsGroupInfo> = game.GamePlayData.getOtherCards(nSit);//this.copyCardGroup(game.GamePlayData.getOtherCards(nSit));
			let nOptCount: number = arrCards.length;//玩家吃碰杠数组
			for (let i: number = 0; i < nOptCount; i++) {
				this.createCPGItem(p, i, arrCards[i]);
			}
			/*测试数据*/
			/*for(let i:number = 0;i < 4;i++){
				this.createCPGItem(nSit,i,null);
			}*/
		}
		/*p 玩家位置 index 牌组索引*/
		private createCPGItem(p: number, index: number, info: CardsGroupInfo): void {
			let g: eui.Group = this.findOptGroup(p);
			let isAnGang: boolean = false;
			if (info.CardsGroupType == CardsGroupType.ANGANG) {
				isAnGang = true;
			} else {
				isAnGang = false;
			}
			let gItem: eui.Group = new eui.Group();
			g.addChild(gItem);
			for (let i: number = 0; i < info.cards.length; i++) {
				let cardValue: number = game.GameParmes.getCardID(info.cards[i]);
				let item: BaseOtherCardUI = new BaseOtherCardUI();
				item.cardInfo = info.cards[i];
				gItem.addChild(item);
				if (p == 0) {//左
					if (isAnGang) {
						if (i == 3) {
							//item.setCard(p,(index*4+i),cardValue,isAnGang);
							item.setCard(p, (index * 4 + i - 2), 0, isAnGang);
						} else {
							item.setCard(p, (index * 4 + i), 0, isAnGang);
						}
						item.x = this.arrLAP[index][i].x;
						item.y = this.arrLAP[index][i].y;
					} else {
						item.setCard(p, index * 4 + i, cardValue, isAnGang);
						item.x = this.arrLCP[index][i].x;
						item.y = this.arrLCP[index][i].y;
					}

				}
				if (p == 1) {//上
					if (isAnGang) {
						item.y = 320;
						if (i == 3) {
							//item.setCard(p,index,cardValue,isAnGang);
							item.setCard(p, index - 2, 0, isAnGang);
							item.x = GameConfig.curWidth() - index * 140 - (i - 2) * 40 - 550;
							item.y = 300;
						} else {
							item.setCard(p, index, 0, isAnGang);
							item.x = GameConfig.curWidth() - index * 140 - i * 40 - 550;
						}
					} else {
						item.setCard(p, index, cardValue, isAnGang);
						if (i == 3) {
							item.x = GameConfig.curWidth() - index * 140 - (i - 2) * 42 - 550;
							item.y = 305;
						} else {
							item.x = GameConfig.curWidth() - index * 140 - i * 42 - 550;
							item.y = 320;
						}

					}
				}
				if (p == 2) {//右
					if (isAnGang) {
						if (i == 3) {
							gItem.addChild(item);
							item.setCard(p, (index * 4 + i - 2), 0, isAnGang);
							//item.setCard(p,(index*4+i),cardValue,isAnGang);
						} else {
							gItem.addChildAt(item, 0);
							item.setCard(p, (index * 4 + i), 0, isAnGang);
						}
						item.x = this.arrRAP[index][i].x;
						item.y = this.arrRAP[index][i].y - 30;
					} else {
						if (i == 3) {
							gItem.addChild(item);
						} else {
							gItem.addChildAt(item, 0);
						}
						item.setCard(p, index * 4 + i, cardValue, isAnGang);
						item.x = this.arrRCP[index][i].x;
						item.y = this.arrRCP[index][i].y - 20;

					}
				}
				if (p == 3) {//下
					if (isAnGang) {
						item.y = GameConfig.curHeight() - 120;
						if (i == 3) {
							item.setCard(p, index, cardValue, isAnGang);
							item.x = 250 + index * 260 + (i - 2) * 70;
							item.y = GameConfig.curHeight() - 120 - 20;
						} else {
							item.setCard(p, index, 0, isAnGang);
							item.x = 250 + index * 260 + i * 70;
						}
					} else {
						item.setCard(p, index, cardValue, isAnGang);
						if (i == 3) {
							item.x = 250 + index * 260 + (i - 2) * 70;
							item.y = GameConfig.curHeight() - 142;
						} else {
							item.x = 250 + index * 260 + i * 70;
							item.y = GameConfig.curHeight() - 120;
						}


					}
				}
			}

		}
		/*点击了手牌*/
		private onClickHandCard(evt: egret.Event): void {
			let item: BaseHandCardUI = evt.data;

			if (GameParmes.gameStage == GameStageType.CHANGE) {//换三张阶段
				let index: number = this.arrHSZCards.indexOf(item);
				if (index > -1) {
					if (!item.isSelect) {
						this.arrHSZCards.splice(index, 1);
					}
				} else {
					if (item.isSelect) {
						this.arrHSZCards.push(item);
					}
				}

				if (this.arrHSZCards.length == 4) {
					let popItem: BaseHandCardUI = this.arrHSZCards.shift();
					popItem.onSelectCard();
				}

				GamePlayData.HSZUserChoose.length = 0;
				for (let j: number = 0; j < this.arrHSZCards.length; j++) {
					GamePlayData.HSZUserChoose.push((this.arrHSZCards[j] as BaseHandCardUI).cardInfo);
				}
			}
			if (GameParmes.gameStage == GameStageType.PLAYING) {//出牌阶段
				if (this.currentCard == item) {
					if (game.GamePlayData.M_C_P_G_sit == Global.userSit) {
						this.dispatchEvent(new egret.Event("ShowTingTip", true, true, { "isShowTing": item.isTingFlag, "index": item.cardIndex }));
						var cardInfo: proto.CardInfo = new proto.CardInfo();
						cardInfo.CardID = item.cardInfo.CardID;
						if (GameParmes.nHuType == 16 && item.isHuFlag) {//天胡处理
							let info: CardsGroupInfo = GamePlayData.Hu_Groups[0];
							info.obtainCard.CardID = item.cardInfo.CardID;
							room.RoomWebSocket.instance().roomSender.ReqSendCard(info);
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

		private findHandGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gHandCardL;
			}
			if (p == 1) {
				return this.gHandCardU;
			}
			if (p == 2) {
				return this.gHandCardR;
			}
			if (p == 3) {
				return this.gHandCardD;
			}
		}
		private findOptGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gOtherCardL;
			}
			if (p == 1) {
				return this.gOtherCardU;
			}
			if (p == 2) {
				return this.gOtherCardR;
			}
			if (p == 3) {
				return this.gOtherCardD;
			}
		}
		private findHuGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gHuCardL;
			}
			if (p == 1) {
				return this.gHuCardU;
			}
			if (p == 2) {
				return this.gHuCardR;
			}
			if (p == 3) {
				return this.gHuCardD;
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