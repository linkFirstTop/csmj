module game {
  export class GamePoolUI extends eui.Component implements eui.UIComponent {
    public constructor() {
      super();
    }
    /*左边玩家牌池坐标*/
    private arrLP: Array<any> = [
      { x: 723, y: 498 },
      { x: 717, y: 535 },
      { x: 711, y: 573 },
      { x: 703, y: 613 },
      { x: 696, y: 654 },
      { x: 690, y: 697 },
      { x: 655, y: 498 },
      { x: 647, y: 535 },
      { x: 638, y: 573 },
      { x: 629, y: 613 },
      { x: 619, y: 654 },
      { x: 610, y: 697 },
      { x: 585, y: 498 },
      { x: 574, y: 535 },
      { x: 563, y: 573 },
      { x: 554, y: 611 },
      { x: 541, y: 653 },
      { x: 530, y: 697 },
    ];
    /*上边玩家牌池坐标*/
    private arrUP: Array<any> = [
      { x: 1063, y: 466 },
      { x: 1011, y: 466 },
      { x: 960, y: 466 },
      { x: 905, y: 466 },
      { x: 851, y: 466 },
      { x: 795, y: 466 },
      { x: 1058, y: 423 },
      { x: 1009, y: 423 },
      { x: 960, y: 423 },
      { x: 907, y: 423 },
      { x: 854, y: 423 },
      { x: 801, y: 423 },
      { x: 1055, y: 382 },
      { x: 1006, y: 382 },
      { x: 960, y: 382 },
      { x: 908, y: 382 },
      { x: 859, y: 382 },
      { x: 807, y: 382 },
    ];
    /*右边玩家牌池坐标*/
    private arrRP: Array<any> = [
      { x: 1147, y: 697 },
      { x: 1144 - 14, y: 654 },
      { x: 1140, y: 613 },
      { x: 1136, y: 573 },
      { x: 1131, y: 535 },
      { x: 1128, y: 498 },
      { x: 1225, y: 697 },
      { x: 1217, y: 654 },
      { x: 1209, y: 613 },
      { x: 1204, y: 573 },
      { x: 1196, y: 535 },
      { x: 1192, y: 498 },
      { x: 1302, y: 697 },
      { x: 1293, y: 653 },
      { x: 1283, y: 611 },
      { x: 1275, y: 573 },
      { x: 1266, y: 535 },
      { x: 1258, y: 498 },
    ];
    /*下边玩家牌池坐标*/
    private arrDP: Array<any> = [
      { x: 778, y: 727 },
      { x: 843 + 18, y: 727 },
      { x: 903 + 18, y: 727 },
      { x: 966 + 18, y: 727 },
      { x: 1024 + 18, y: 727 },
      { x: 1085 + 18, y: 727 },
      { x: 772, y: 793 },
      { x: 837 + 18, y: 793 },
      { x: 901 + 18, y: 793 },
      { x: 966 + 18, y: 793 },
      { x: 1027 + 18, y: 793 },
      { x: 1089 + 18, y: 793 },
      { x: 765, y: 861 },
      { x: 834 + 18, y: 861 },
      { x: 899 + 18, y: 861 },
      { x: 966 + 18, y: 861 },
      { x: 1028 + 18, y: 861 },
      { x: 1093 + 18, y: 861 },
    ];
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
      this.tipAnim.visible = false;

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
      for (var i: number = 1; i < 5; i++) {
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
      let cardValue: number = card.CardID; //game.GameParmes.getCardID(card);//Math.floor(Math.random()*27)+1;
      item.setCard(p, len, cardValue);

      if (p == 0) {
        g.addChild(item);

        if (len == 5 || len == 11 || len == 17) {
          g.addChildAt(item, len + nLevel * 18 - 5);
        }
        item.x = this.arrDP[len].x - 600;
        item.y = this.arrDP[len].y - 800;
        if (nLevel == 1) {
          item.y -= 15;
        }
        this.tipAnim.x = g.x + item.x + 30;
        this.tipAnim.y = g.y + item.y + 15;
      }
      if (p == 1) {
        g.addChild(item);
        var count: number = g.numChildren - 1;
        //一排最大数

        g.addChildAt(item, 0 + nLevel * 18);
        item.x = this.arrRP[len].x - 300;
        item.y = this.arrRP[len].y - 300;
        if (nLevel == 1) {
          item.y -= 15;
        }
        this.tipAnim.x = g.x + item.x + 50;
        this.tipAnim.y = g.y + item.y + 2;
      }
      if (p == 2) {
        g.addChild(item);
        var count: number = g.numChildren - 1;
        //一排最大数
        var itemMax: number = 10;
        //倒序Y

        g.addChildAt(item, (len % 6) + nLevel * 18);
        item.x = this.arrUP[len].x - 600;
        item.y = this.arrUP[len].y - 450;
        if (len == 5 || len == 11 || len == 17) {
          g.addChildAt(item, 0 + nLevel * 18);
        }
        if (nLevel == 1) {
          item.y -= 15;
        }
        this.tipAnim.x = g.x + item.x + 30;
        this.tipAnim.y = g.y + item.y + 10;
      }
      if (p == 3) {
        g.addChild(item);

        if (len == 5 || len == 11 || len == 17) {
          g.addChildAt(item, len + nLevel * 18 - 5);
        }
        item.x = this.arrLP[len].x - 1600;
        item.y = this.arrLP[len].y - 360;
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
      comm.DragonAnim.ins.playAnimByPosition(
        "hluolei",
        this.tipAnim.x,
        this.tipAnim.y
      );
      egret.setTimeout(
        function () {
          this.removeCardToPool(sit);
        },
        this,
        1000
      );
    }
    /*移除牌池里的牌*/
    public removeCardToPool(sit: number): void {
      let p: number = Global.getUserPosition(sit);
      let arr: Array<game.CardInfo> = this.arrCard[p];
      if (arr.length > 0) {
        let card: game.CardInfo = arr[arr.length - 1];
        let g: eui.Group = this.findGroupByPosition(p);
        for (let i: number = 0; i < g.numChildren; i++) {
          let item: game.BasePoolCardUI = g.getChildAt(
            i
          ) as game.BasePoolCardUI;
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
              if (
                GamePlayData.arrLPCards[cardValue].indexOf(
                  item.cardInfo.CardID
                ) == -1
              ) {
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
