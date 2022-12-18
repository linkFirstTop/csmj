module game {
  export class GameHandUI extends eui.Component implements eui.UIComponent {
    public constructor() {
      super();
    }
    //[{x:0,y:0},{x:0,y:0},{x:0,y:0}]
    /*左边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrLHP: Array<any> = [{ x: 208, y: 845 }, { x: 228, y: 800 }, { x: 248, y: 755 }, { x: 267, y: 712 }, { x: 285, y: 670 }, { x: 302, y: 628 },
      { x: 321, y: 587 }, { x: 337, y: 549 }, { x: 354, y: 510 }, { x: 371, y: 472 }, { x: 387, y: 435 }, { x: 402, y: 399 }, { x: 417, y: 365 }, { x: 431, y: 332 }];
  
      private arrLLP: Array<any> = [{ x: 200, y: 894 }, { x: 220, y: 842 }, { x: 238, y: 799 }, { x: 255, y: 757 }, { x: 274, y: 715 }, { x: 291, y: 674 },
      { x: 309, y: 633 }, { x: 326, y: 593 }, { x: 344, y: 555 }, { x: 358, y: 516 }, { x: 374, y: 479 }, { x: 389, y: 443 }, { x: 404, y: 407 }, { x: 420, y: 372 }];
  
      private arrLCP: Array<any> = [[{ x: 326, y: 356 }, { x: 307, y: 390 }, { x: 289, y: 426 }, { x: 296, y: 369 }], [{ x: 265, y: 481 }, { x: 245, y: 519 }, { x: 225, y: 558 }, { x: 236, y: 499 }],
      [{ x: 197, y: 617 }, { x: 175, y: 659 }, { x: 152, y: 702 }, { x: 164, y: 638 }], [{ x: 121, y: 773 }, { x: 97, y: 818 }, { x: 72, y: 867 }, { x: 86, y: 799 }]];
  
      private arrLAP: Array<any> = [[{ x: 331, y: 328 }, { x: 312, y: 367 }, { x: 292, y: 407 }, { x: 304, y: 351 }], [{ x: 264, y: 465 }, { x: 245, y: 507 }, { x: 224, y: 550 }, { x: 238, y: 492 }],
      [{ x: 193, y: 611 }, { x: 172, y: 656 }, { x: 150, y: 700 }, { x: 163, y: 638 }], [{ x: 121, y: 771 }, { x: 98, y: 817 }, { x: 75, y: 865 }, { x: 89, y: 802 }]];
  
      /*右边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
      private arrRHP: Array<any> = [{ x: 1434, y: 352 }, { x: 1445, y: 378 }, { x: 1457, y: 412 }, { x: 1472, y: 448 }, { x: 1485, y: 485 }, { x: 1500, y: 523 },
      { x: 1517, y: 563 }, { x: 1533, y: 601 }, { x: 1549, y: 641 }, { x: 1566, y: 683 }, { x: 1582, y: 726 }, { x: 1600, y: 769 }, { x: 1617, y: 813 }, { x: 1637, y: 858 }];
  
      private arrRLP: Array<any> = [{ x: 1411, y: 371 }, { x: 1430, y: 415 }, { x: 1444, y: 452 }, { x: 1459, y: 488 }, { x: 1475, y: 526 }, { x: 1490, y: 563 },
      { x: 1506, y: 600 }, { x: 1523, y: 640 }, { x: 1539, y: 682 }, { x: 1557, y: 723 }, { x: 1574, y: 765 }, { x: 1592, y: 808 }, { x: 1611, y: 850 }, { x: 1629, y: 894 }];
  
      private arrRCP: Array<any> = [[{ x: 1733, y: 867 }, { x: 1711, y: 818 }, { x: 1689, y: 773 }, { x: 1723, y: 802 }], [{ x: 1662, y: 702 }, { x: 1643, y: 659 }, { x: 1623, y: 617 }, { x: 1654, y: 638 }],
      [{ x: 1597, y: 558 }, { x: 1579, y: 519 }, { x: 1561, y: 481 }, { x: 1588, y: 500 }], [{ x: 1539, y: 426 }, { x: 1523, y: 390 }, { x: 1507, y: 356 }, { x: 1532, y: 371 }]];
  
      private arrRAP: Array<any> = [[{ x: 1734, y: 865 }, { x: 1712, y: 817 }, { x: 1691, y: 771 }, { x: 1723, y: 802 }], [{ x: 1665, y: 700 }, { x: 1644, y: 656 }, { x: 1624, y: 611 }, { x: 1656, y: 638 }],
      [{ x: 1597, y: 550 }, { x: 1577, y: 507 }, { x: 1557, y: 465 }, { x: 1586, y: 492 }], [{ x: 1533, y: 407 }, { x: 1514, y: 367 }, { x: 1496, y: 328 }, { x: 1525, y: 351 }]];
  
    private arrHuP: Array<any> = [
      [
        { x: 319, y: 842 },
        { x: 335, y: 799 },
        { x: 350, y: 757 },
        { x: 367, y: 715 },
      ],
      [{ x: 496, y: 381 }],
      [
        { x: 1335, y: 471 },
        { x: 1348, y: 506 },
        { x: 1360, y: 543 },
        { x: 1372, y: 579 },
      ],
      [
        { x: 1523, y: 863 },
        { x: 1457, y: 863 },
        { x: 1392, y: 863 },
        { x: 1331, y: 863 },
      ],
    ];

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

    private nAutoTime: number = -1; //自动摸打计时器
    private arrHSZCards: Array<BaseHandCardUI> = [];
    private currentCard: BaseHandCardUI;
    private isSortComplete: boolean = false;
    private isHSZStart: boolean = false;
    public initHand(): void {

      this.width = GameConfig.curWidth();
      this.height = GameConfig.curHeight();
    
			this.addChild(this.gHandCardL);
			this.addChild(this.gHandCardU);

			this.addChild(this.gHuCardU);//调整对家胡牌层级

			this.addChild(this.gHandCardR);
			this.addChild(this.gHandCardD);

      this.addChild(this.gOtherCardL);
			this.addChild(this.gOtherCardU);
			this.addChild(this.gOtherCardR);
			this.addChild(this.gOtherCardD);

      this.gOtherCardR.x = 100;

      this.gHandCardL.x = -100;
      this.gHandCardL.y = -200;

      this.gHandCardR.x = 100;
      this.gHandCardR.y = -160;

      this.arrHSZCards = [];

      this.currentCard = null;
      this.isSortComplete = false;
      this.isHSZStart = false;

      this.addChild(this.gHuCardL);
      this.addChild(this.gHuCardU);
      this.addChild(this.gHuCardR);
      this.addChild(this.gHuCardD);

      this.gHandCardD.addEventListener( "OnClickHandCard",this.onClickHandCard, this);

      this.clearAllGroup();
    }

    /*创建手牌  state 0暗牌状态 1亮牌状态*/
    public createHandCard(isShow: boolean, state: number): void {
      console.log("创建手牌");
      for (let j: number = 1; j < 5; j++) {
        this.updataHandsByPosition(j, state, isShow);
      }
      if (!isShow) {
        this.showHandCard();
      }
    }

    private onTimeUpdate(): void {
      for (let j: number = 1; j < 5; j++) {
        this.updataHandsByPosition(j, 0);
      }
    }

    private onTimeComplete(): void {}
    /*用于处理开始的发牌*/
    private showHandCard(): void {
      var len: number = 0;
      for (let j: number = 0; j < 4; j++) {
        for (let i: number = 0; i < 4; i++) {
          let g: eui.Group = this.findHandGroup(i);
          let count: number = len + 4 > g.numChildren ? g.numChildren : len + 4;
          for (let n: number = len; n < count; n++) {
            if (g) {
              egret.Tween.get(g)
              .wait(j * 800)
              .call(function () {
                if(g.getChildAt(n)){
                  g.getChildAt(n).visible = true;
                }
               
              }, this);
            }

          }
        }
        len += 4;
      }
      egret.Tween.get(this)
        .wait(4000)
        .call(function () {
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
      if (p == 2) {
        //删除第一张
        item = g.removeChildAt(0) as game.BaseHandCardUI;
      } else {
        //删除最后一张
        item = g.removeChildAt(len - 1) as game.BaseHandCardUI;
      }
      item = null;
    }

    public getOneCard(info: game.CardInfo): void {
      let p: number = Global.getUserPosition(info.Sit);
    

      let ghand: eui.Group = this.findHandGroup(p);
      let card: BaseHandCardUI = new BaseHandCardUI();
    
      let isQue: boolean = false;
      let cardValue: number = info.CardID; //game.GameParmes.getCardID(info);

      if (p == 0) {
        ghand.addChild(card);
        card.isMoCard = true;
        if (cardValue > 0) {
          let nHua: number = game.GameParmes.getHua(info);
          // if (nHua == nQue) {
          // 	isQue = true;
          // }
        }
        //自动打牌
        if (GameParmes.isHu) {
          this.nAutoTime = egret.setTimeout(
            function () {
              egret.clearTimeout(this.nAutoTime);
              this.nAutoTime = -1;
              GameController.ReqUserSendCard(info);
            },
            this,
            1500
          );
        }
      }
      card.setCard(p, 0,cardValue, 0);
      if (p == 0) {
      	ghand.addChild(card);
				card.cardInfo = info;
				card.x = (ghand.numChildren - 1) * 90;
				card.x += 10;
        card.y = -50;

        egret.Tween.get(card).to({ y: 0, touchEnabled: true }, 200);
 
      }
      if (p == 1) {
        ghand.addChildAt(card, 0);
				card.setCard(p, 13, 1, 0);
				card.x = this.arrRHP[0].x- 20;
				card.y = this.arrRHP[0].y - 100;
        egret.Tween.get(card).to({ y: this.arrRHP[0].y - 50, touchEnabled: true }, 200);
      }
      if (p == 2) {
        ghand.addChildAt(card, 0);
        card.setCard(p, 0,16,  0);
        // card.x = this.arrRHP[0].x;
        // card.y = this.arrRHP[0].y;
         card.y = -20;
        card.x = -100;
       
        egret.Tween.get(card).to({ y: 0, touchEnabled: true }, 200);
      }
      if (p == 3) {
        card.x = this.arrLHP[0].x -25;
				card.y = this.arrLHP[0].y + 20;

        egret.Tween.get(card).to({ y: this.arrLHP[0].y + 70, touchEnabled: true }, 200);
				ghand.addChild(card);
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
        return;
      }

      let arr: Array<game.CardInfo> = [];
      for (let i: number = 0; i < arrTmp.length; i++) {
        let card: game.CardInfo = new game.CardInfo();
        card.CardID = arrTmp[i].CardID;
        card.Sit = arrTmp[i].Sit;
        arr.push(card);
      }
      return arr;
    }

    public updataHandsByPosition(  sit: number,  state: number, isShow: boolean = true,  isQishou: boolean = false  ): void {
      let p: number = Global.getUserPosition(sit);
      let ghand: eui.Group = this.findHandGroup(p);
     
      this.clearGroup(ghand);
      let arr: Array<CardInfo> = this.copyHandCard(
        game.GamePlayData.getHandCards(p)
      );
    
      let index: number = 0;
      let len: number = arr.length;
      // console.log("====arr",p,arr)
    
      for (var i: number = 0; i < len; i++) {
        let isQue: boolean = false;
        let info: game.CardInfo = arr[i];
      
        let cardValue: number = info.CardID; // game.GameParmes.getCardID(info);
        // console.log("====updataHandsB  arr yPoarr=",cardValue)
        if (cardValue == -1 && isQishou) {
          continue;
        }
        let card: BaseHandCardUI = new BaseHandCardUI();
        ghand.addChild(card);
        card.visible = isShow;
        let nOptHei: number = 0;
        let nOptW: number = 0;

        if (p == 0) {
       // console.log("===cardvalue",cardValue)
         
          let itemCardWidth: number = 90;
          card.setCard(p, (i + index), cardValue, state);
          card.cardInfo = info;
          if (GameParmes.isHu) {
            card.setMaskFlag(false);
            if (i == len - 1 && index == 0) {
              card.setMaskFlag(true);
            }
          }
          if (state == 0) {
            card.x = i * itemCardWidth;
            // if (i == 13) {
            //   //自己出牌，断线回来
            //   card.x = i * itemCardWidth + 20;
            // } 
          } else {
            card.x = i * itemCardWidth;
          }
          this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 180;
        }
        if (p == 1) {
          card.setCard(p, 13 - i - index, cardValue, state);
          if (state == 0) {
            card.x = this.arrRHP[i + index].x;
						card.y = this.arrRHP[i + index].y;
          } else {
            card.x = this.arrRHP[i + index].x;
						card.y = this.arrRHP[i + index].y;
          }
          ghand.addChild(card);
   
        }
        if (p == 2) {
         
          card.setCard(p, (i + index), cardValue, state);
					card.x = i * 44;

        }
        if (p == 3) {
          card.setCard(p, (i + index), cardValue, state);
        	if (state == 0) {//暗牌
						card.x = this.arrLHP[i + index].x;
						card.y = this.arrLHP[i + index].y;
					} else {//亮牌
						card.x = this.arrLLP[i + index].x;
						card.y = this.arrLLP[i + index].y;
					}
          
          ghand.addChildAt(card, 0);
        }
      }


  	//	this.gHandCardU.y = 310;
			this.gHandCardU.x = 600;
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 300;
    }

    /*增加牌的下落动画*/
    public showHandCardAnim(arr: Array<any>): void {
      for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
        let item: BaseHandCardUI = this.gHandCardD.getChildAt(
          i
        ) as BaseHandCardUI;
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
    private copyCardGroup(
      arrTmp: Array<CardsGroupInfo>
    ): Array<CardsGroupInfo> {
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
			let arrCards: Array<CardsGroupInfo> = game.GamePlayData.getOtherCards(p);//this.copyCardGroup(game.GamePlayData.getOtherCards(nSit));

			let nOptCount: number = arrCards.length;//玩家吃碰杠数组

			for (let i: number = 0; i < nOptCount; i++) {

				this.createCPGItem(p, i, arrCards[i]);
			}

        /*测试数据*/
        // for(let i:number = 0;i < 4;i++){
        //   this.createCPGItem(p,i,arrCards[0]);
        // }
    }
		/** 
		 * 这是吃 碰 杠后的牌
		*p 玩家位置 index 牌组索引
		*/
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
				let cardValue: number = info.cards[i].CardID ;
				let item: BaseOtherCardUI = new BaseOtherCardUI();
				item.cardInfo = info.cards[i];
				gItem.addChild(item);
        if (p == 3) {//右

            if (isAnGang) {
              if (i == 3) {
                item.setCard(p, (index * 4 + i), cardValue, isAnGang);
              } else {
                item.setCard(p, (index * 4 + i), -1, isAnGang);
              }
              item.x = this.arrLAP[index][i].x;
              item.y = this.arrLAP[index][i].y;
            } else {
              if (i == 3) {
                item.setCard(p, (index * 4 + i), cardValue, isAnGang);
              } else {
                item.setCard(p, (index * 4 + i), cardValue, isAnGang);
              }
              item.x = this.arrLCP[index][i].x;
              item.y = this.arrLCP[index][i].y;
            }
            item.y -= 280;
            item.x += 20;
					

				}
				if (p == 2) {//UP
          if (isAnGang) {
					//	item.y = 320;
						if (i == 3) {
							item.setCard(p, index, cardValue, isAnGang);
							item.x = GameConfig.curWidth() - index * 140 - (i - 2) * 40 - 550;
							//item.y = 300;
						} else {
							item.setCard(p, index, -1, isAnGang);
							item.x = GameConfig.curWidth() - index * 140 - i * 40 - 550;
						}
					} else {
						item.setCard(p, index, cardValue, isAnGang);
						if (i == 3) {
							item.x = GameConfig.curWidth() - index * 140 - (i - 2) * 42 - 550;
							//item.y = 305;
						} else {
							item.x = GameConfig.curWidth() - index * 140 - i * 42 - 550;
							//item.y = 320;
						}

					}
				}
		
				if (p == 1) {// right
        
          if (isAnGang) {
						if (i == 3) {
							gItem.addChild(item);
							item.setCard(p, (index * 4 + i), cardValue, isAnGang);
						} else {
							gItem.addChildAt(item, 0);
							item.setCard(p, (index * 4 + i), -1, isAnGang);
						}
						item.x = this.arrRAP[index][i].x;
						item.y = this.arrRAP[index][i].y + 10;
					} else {
						if (i == 3) {
							gItem.addChild(item);
						} else {
							gItem.addChildAt(item, 0);
						}
						item.setCard(p, index * 4 + i, cardValue, isAnGang);
						item.x = this.arrRCP[index][i].x;
						item.y = this.arrRCP[index][i].y;

					}

          item.x -= 20; 
				
				}
				if (p == 0) {//下
          if (isAnGang) {
						item.y = GameConfig.curHeight() - 120;
						if (i == 3) {
							item.setCard(p, index, cardValue, isAnGang);
							item.x = 300 + index * 260 + (i - 2) * 70;
							item.y = GameConfig.curHeight() - 120 - 20;
						} else {
							item.setCard(p, index, -1, isAnGang);
							item.x = 300 + index * 260 + i * 70;
						}
					} else {

						item.setCard(p, index, cardValue, isAnGang);
						if (i == 3) {
							item.x = 300 + index * 260 + (i - 2) * 70;
							item.y = GameConfig.curHeight() - 142;
						} else {
							item.x = 300 + index * 260 + i * 70;
							item.y = GameConfig.curHeight() - 120;
						}
					}
				}
			}
		}
		/*点击了手牌*/
		private onClickHandCard(evt: egret.Event): void {
			let item: BaseHandCardUI = evt.data;
     // console.log("===item",item.cardInfo.CardID)

			if (GameParmes.gameTurn == GameTurnType.SELFTURN) {//出牌阶段
				if (this.currentCard == item) {
					if (game.GamePlayData.playingSeat == Global.userSit) {
						//判断是欧所有的牌都是 炮
						let isAllPao = true;
						const ln = this.gHandCardD.$children.length;
						for (let i = 0; i < ln; i++) {
							let pai: any = this.gHandCardD.getChildAt(i);
							if (!pai.imgPao) {
								isAllPao = false;
								break;
							}
							if (pai.imgPao && pai.imgPao.visible == false) {
								isAllPao = false;
								break;
							}
						}


						// if (!isAllPao && item.imgPao && item.imgPao.visible && !GamePlayData.isSelfTing) {
						// 	TipsUtils.showTipsFromCenter("不可打出该牌!")
						// 	return;
						// 	// console.log("====is Pao===")
						// }

						if (item.isTingFlag) {//显示要听的牌
							// 抱听操作

							const cardInfo: CardInfo = new CardInfo();
							cardInfo.CardID = item.cardInfo.CardID;

							const opt: room.MJ_Operation = new room.MJ_Operation()
					
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
							return;
						}

						const cardInfo: CardInfo = new CardInfo();
						cardInfo.CardID = item.cardInfo.CardID;

						const opt: room.MJ_Operation = new room.MJ_Operation()

						if (item.isMoCard) {
						 	opt.operationType = CardsGroupType.MJ_OperationType.摸牌;//摸切
						} else {
						 	opt.operationType = CardsGroupType.MJ_OperationType.手切;//操作类型
						}

						opt.Tiles = [item.cardInfo.CardID] //牌组  如果是出牌则数组中只有一张牌
						room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
						if (this.nAutoTime > -1) {
							egret.clearTimeout(this.nAutoTime);
							this.nAutoTime = -1;
						}
						//}
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
						this.dispatchEvent(new egret.Event("ShowTingGroup", true, true, item.cardInfo.CardID));
					}
				}
			}
		}

    // public closeTingFlag(): void {
    //   let len: number = this.gHandCardD.numChildren;
    //   for (let i: number = 0; i < len; i++) {
    //     let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(
    //       i
    //     ) as game.BaseHandCardUI;
    //     item.touchEnabled = true;
    //     item.touchChildren = true;
    //     item.setMaskFlagEX(false);
    //   }
    // }
    //停牌后显示遮罩
    public showTingMask(): void {
      let len: number = this.gHandCardD.numChildren;
      for (let i: number = 0; i < len; i++) {
        let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(
          i
        ) as game.BaseHandCardUI;
        item.touchEnabled = true;
        item.touchChildren = true;
      //  item.setMaskFlagEX(true);
      }
    }
    /*手牌上显示听牌标志*/
    public showTingFlag(flag: boolean, str: string): void {
      let len: number = this.gHandCardD.numChildren;
      if (flag) {
        let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(
          CardsGroupType.CALL
        );
        for (let i: number = 0; i < len; i++) {
          let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(
            i
          ) as game.BaseHandCardUI;
          if (str == "tingEX") {
            item.touchEnabled = false;
            item.touchChildren = false;
            //item.setMaskFlagEX(true);
          }
          for (let j: number = 0; j < arr.length; j++) {
            // Global.log(item.cardIndex+" yyy"+arr[j].ObtainCardIndex+1);
            if (
              item.cardIndex == GameParmes.getCardIDByID(arr[j].ObtainCardIndex)
            ) {
              item.setTingFlag(true, str);
              item.touchEnabled = true;
              item.touchChildren = true;
              // if (game.GamePlayData.tingData[Global.userSit] == false) {
              //   item.setMaskFlagEX(false);
              // } else {
              //   item.setMaskFlagEX(true);
              // }

              break;
            }
          }
        }
      } else {
        for (let i: number = 0; i < len; i++) {
          let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(
            i
          ) as game.BaseHandCardUI;
          item.setTingFlag(false, "");
          item.clearSelectCard();
        }
      }
    }
    /*给手牌上增加遮罩*/
    public showHuFlag(): void {
      let len: number = this.gHandCardD.numChildren;
      for (let i: number = 0; i < len; i++) {
        let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(
          i
        ) as game.BaseHandCardUI;
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
        let item: BaseHandCardUI = this.gHandCardD.getChildAt(
          i
        ) as BaseHandCardUI;
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
          if (
            GamePlayData.arrLPCards[cardValue].indexOf(cardInfo.CardID) == -1
          ) {
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
    private clearSomeGroup(g: eui.Group, p: Array<game.CardInfo>): void {
      for (let i = 0; i < p.length; i++) {
        if (p[i].CardID != -1) {
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
  }
}
