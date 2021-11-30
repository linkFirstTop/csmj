module game {
	export class GameOperationUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private arrPosition: Array<number> = [0, 189, 378, 567, 756];
		private gBtns: eui.Group;
		private btnPeng: eui.Image;
		private btnGang: eui.Image;
		private btnChi: eui.Image;
		private btnTing: eui.Image;
		private btnHu: eui.Image;
		private btnGuo: eui.Image;
		private btnQishouHu: eui.Image;
		private btnGangyao: eui.Image;

		private btnGangyaoAo: dragonBones.EgretArmatureDisplay;
		private GangyaoCards: eui.Group;
		private GangYaoGroup: eui.Group;
		private gameUI: game.GameMainUI;
		private GangyaoGroupAni: eui.Group;

		private arrTmp: Array<any> = [];

		private gCardBg: eui.Group;
		private gPGCards: eui.Group;
		private gTingCards: eui.Group;
		private thisData: any;
		private huIcon: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();

			this.initBtns();
		
			//杠摇动画
			if(this.btnGangyaoAo==null){
				this.btnGangyaoAo = comm.DragonAnim.ins.getAnimByName("gy");
			}

		
			this.GangyaoGroupAni.addChild(this.btnGangyaoAo);
			//this.gBtns.addChild(this.btnGangyaoAo);
			this.btnGangyaoAo.visible=false;
			// this.btnGangyao.visible = false;
			this.GangYaoGroup.visible = false;
			this.btnPeng.source = "gameButton_peng_" + Global.language + "_png";
			this.btnChi.source = "gameButton_chi_" + Global.language + "_png";
			this.btnGang.source = "gameButton_gang_" + Global.language + "_png";
			this.btnTing.source = "gameButton_ting_" + Global.language + "_png";
			this.btnHu.source = "gameButton_hu_" + Global.language + "_png";
			this.btnQishouHu.source = "gameButton_hu_" + Global.language + "_png";
			this.btnGuo.source = "gameButton_guo_" + Global.language + "_png";
			this.huIcon.source = "gameIcon_hu_" + Global.language + "_png";
			// this.btnGangyao.source = "gameButton_gang_yao_png";


			this.btnPeng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPeng, this);
			this.btnGang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGang, this);
			this.btnTing.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTing, this);
			this.btnChi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChi, this);
			this.btnHu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHu, this);
			this.btnQishouHu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQishouHu, this);
			this.btnGuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGuo, this);
			this.gPGCards.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPGGroupTap, this);
			// this.btnGangyao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGangyao, this);
			this.btnGangyaoAo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGangyao, this);
			this.GangyaoGroupAni.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGangyao, this);
		}
		public initBtns(): void {
			this.arrTmp = [];
			this.GangyaoGroupAni.visible = false;
			if(this.btnGangyaoAo!=null){
				this.btnGangyaoAo.visible = false;
			}
			this.btnPeng.visible = false;
			this.btnGang.visible = false;
			this.btnTing.visible = false;
			this.btnHu.visible = false;
			this.btnQishouHu.visible = false;
			this.btnGuo.visible = false;
			this.gCardBg.visible = false;
			this.gPGCards.visible = false;
			this.gTingCards.visible = false;
			this.btnChi.visible = false;
		}
		public showOpt(data: proto.NotUserOperation): void {

			this.initBtns();
			this.thisData = data;
			var isChi: boolean = false;
			var isPeng: boolean = false;
			var isGang: boolean = false;
			var isHu: boolean = false;
			var isTing: boolean = false;
			var istianHu: boolean = false;
			var isGangyao: boolean = false;
			var isQishouHu: boolean = false;
			
			console.log(data, data.operations);
			for (var i: number = 0; i < data.operations.length; i++) {
				var temp = data.operations[i];
				if (temp.type == 4) {
					isChi = true;
				}
				if (temp.type == 5) {
					isPeng = true;
				}
				if (temp.type == 24) {
					isGangyao = true;
				}
				if (temp.type == 6 || temp.type == 7 || temp.type == 13) {
					isGang = true;

				}
				if (temp.type == 8 || temp.type == 16) {
					isHu = true;
				}
				if (temp.type == 16) {
					istianHu = true;
				}
				if (temp.type == 25) {
					isQishouHu = true;
				}
			}
			if (data.callCards.length > 0) {
				isTing = true;
			}
			console.log("isPeng:" + isPeng, "isGang:" + isGang, "isHu:" + isHu, "isTing:" + isTing, "isChi:" + isChi, "isGangyao:" + isGangyao);
			if (isHu) {
				this.arrTmp.unshift(this.btnHu);
				this.btnHu.visible = true;
			}
			if (isQishouHu) {
				this.arrTmp.unshift(this.btnQishouHu);
				this.btnQishouHu.visible = true;
			}
			if (isGang) {
				this.arrTmp.unshift(this.btnGang);
				this.btnGang.visible = true;

			}
			if (isGangyao) {
				this.GangyaoGroupAni.visible = true;
				this.arrTmp.unshift(this.GangyaoGroupAni);
				// this.btnGangyaoAo.visible = true;
				// this.btnGangyaoAo.animation.play("gy", 0);
				//this.arrTmp.unshift(this.btnGangyaoAo);
				this.btnGangyaoAo.visible = true;
				this.btnGangyaoAo.animation.play("gy", 0);
				//this.btnGangyaoAo.x= 30;
				this.btnGangyaoAo.y= 72;
			}
			if (isPeng) {
				this.arrTmp.unshift(this.btnPeng);
				this.btnPeng.visible = true;
			}
			if (isChi) {
				this.arrTmp.unshift(this.btnChi);
				this.btnChi.visible = true;
			}
			if (isTing) {
				//this.arrTmp.unshift(this.btnTing);
				// if(temp.type!=16){
				//this.btnTing.visible = true;
				// }else{
				// 	this.btnTing.visible = false;
				// }
				this.btnTing.visible = false;
			}

			if (this.arrTmp.length > 0) {
				this.visible = true;
				this.arrTmp.unshift(this.btnGuo);

				if (istianHu == false) {
					this.btnGuo.visible = true;
				} else {
					this.btnGuo.visible = false;
				}
			}
			for (let i: number = 0; i < this.arrTmp.length; i++) {
				let img: eui.Image = this.arrTmp[i];
				let imgAi: dragonBones.EgretArmatureDisplay = this.arrTmp[i];
				let imgGr: eui.Group = this.arrTmp[i];
				img.x = this.arrPosition[4 - i];
				imgAi.x = this.arrPosition[4 - i];
				imgGr.x = this.arrPosition[4 - i];
			}
			
		}
		public showQishouhu(): void {
			this.initBtns();
			this.arrTmp.unshift(this.btnQishouHu);
			this.btnQishouHu.visible = true;
			this.arrTmp.unshift(this.btnGuo);
			this.btnGuo.visible = true;
			for (let i: number = 0; i < this.arrTmp.length; i++) {
				let img: eui.Image = this.arrTmp[i];
				img.x = this.arrPosition[4 - i];
			}
		}
		// 杠摇
		private onGangyao(): void {
			console.log("点击杠摇");
			this.initBtns();
			// this.GangyaoGroupAni.visible = true;
			// this.arrTmp.unshift(this.GangyaoGroupAni);
			// this.btnGangyaoAo.visible = true;
			// this.btnGangyaoAo.animation.play("gy", 0);


			// 杠摇牌型
			//this.GangYaoGroup.visible = true;
			//let card: BaseHandCardUI = new BaseHandCardUI();
			//杠摇
			var arr: Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.GANGYAO);
			if (arr.length == 1) {
				room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Gangyao_Groups[0]);
				console.log("发送杠摇请求");
				return;
			}
			this.isChi = false;
			this.showCardGroups(arr);
		}
		private onPeng(): void {
			this.initBtns();
			let arr: Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.PENG);
			room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Peng_Groups[0]);

		}
		private onGang(): void {
			this.initBtns();
			var arr: Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.GANG);
			if (arr.length == 1) {
				room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Gang_Groups[0]);

				return;
			}
			this.isChi = false;
			this.showCardGroups(arr);
		}
		private onTing(): void {
			this.initBtns();
			this.arrTmp.unshift(this.btnGuo);
			this.btnGuo.visible = true;
			for (let i: number = 0; i < this.arrTmp.length; i++) {
				let img: eui.Image = this.arrTmp[i];
				img.x = this.arrPosition[4 - i];
			}
			this.dispatchEvent(new egret.Event("ShowTingHuFlag"));
		}
		private onChi(): void {
			let arr: Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CHI);
			if (arr.length == 1) {
				this.initBtns();
				room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Chi_Groups[0]);
				return;
			}
			this.isChi = true;
			this.showCardGroups(arr);



		}
		private onHu(): void {
			if (GameParmes.nHuType == 16) {//此时是天胡情况
				this.dispatchEvent(new egret.Event("ShowTianHuFlag"));
			} else {
				room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Hu_Groups[0]);

			}
			this.initBtns();
		}
		private onQishouHu(): void {
			console.log("点击起手胡");
			this.initBtns();
			room.RoomWebSocket.instance().roomSender.ReqSendCardQiShou(GamePlayData.QiShouHu_Groups[0]);
		}
		private onGuo(): void {
			this.initBtns();
			if (GameParmes.hasClickTing == false) {
				this.sendGameNoOperation();
			} else {
				this.dispatchEvent(new egret.Event("CloseTingHuFlag"));
				this.showOpt(this.thisData);
			}
		
		}
		private sendGameNoOperation(): void {
			var cardsGroup: CardsGroupInfo = new CardsGroupInfo();
			cardsGroup.cardsit = Global.userSit;
			cardsGroup.CardsGroupType = CardsGroupType.NO_OPERATION;
			room.RoomWebSocket.instance().roomSender.ReqSendCard(cardsGroup);

		}
		/** 
		 * @param arrGroup
		 * 显示吃碰杠牌组
		 */
		private showCardGroups(arrGroup: Array<CardsGroupInfo>): void {
			this.clearCardGroup();
			this.visible = this.gCardBg.visible = this.gPGCards.visible = true;
			let num: number = arrGroup.length;
			if (num >= 3) {//最多有六组吃碰杠牌组(三行三列)
				// this["gameCommbg_png"].width = 150;
				// this["gameCommbg_png"].height=150;
				let gPGCardsLayout: eui.TileLayout = new eui.TileLayout();
				gPGCardsLayout.horizontalGap = 30;
				gPGCardsLayout.requestedRowCount = 3;
				this.gPGCards.layout = gPGCardsLayout;
			} else {
				let gPGCardsLayout: eui.HorizontalLayout = new eui.HorizontalLayout();
				gPGCardsLayout.gap = 30;
				this.gPGCards.layout = gPGCardsLayout;
			}
			for (let i: number = 0; i < num; i++) {
				let cardGroup: CardsGroupInfo = arrGroup[i] as CardsGroupInfo;
				let g: eui.Group = new eui.Group();
				this.gPGCards.addChild(g);//吃碰杠容器
				let layout: eui.HorizontalLayout = new eui.HorizontalLayout();
				layout.gap = 0;
				g.layout = layout;
				g.name = "" + i;
				g.touchChildren = false;
				for (let j: number = 0; j < cardGroup.cards.length; j++) {
					let card: proto.CardInfo = cardGroup.cards[j] as proto.CardInfo;
					let item: game.BaseCardUI = new game.BaseCardUI();
					g.addChild(item);
					let cardValue: number = game.GameParmes.getCardID(card);
					item.setCard(cardValue);
					// item.x = j * 126;
					g.scaleX = g.scaleY = 0.9;
				}

			}
			this.gCardBg.width = this.gPGCards.width + 58;

		}
		private isChi: boolean = false;
		private onPGGroupTap(evt: egret.TouchEvent): void {
			var index: number = Number(evt.target.name);
			if (this.isChi == true) {
				room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Chi_Groups[index]);
			} else {
				room.RoomWebSocket.instance().roomSender.ReqSendCard(GamePlayData.Gang_Groups[index]);
			}


		}
		/*显示待胡牌*/
		public showTingGroup(nIndex: number): void {
			this.clearTingGroup();
			this.visible = this.gCardBg.visible = this.gTingCards.visible = true;
			let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
			for (let i: number = 0; i < arr.length; i++) {
				let info: any = arr[i];

				if (GameParmes.getCardIDByID(info.ObtainCardIndex) == nIndex) {
					this.createHuCards(info.CallCards);
					break;
				}
			}
			this.gCardBg.width = this.gTingCards.width + 58;
		}
		private createHuCards(arr: Array<any>): void {
			for (let i: number = 0; i < arr.length; i++) {
				let item: game.BaseTingCardUI = new game.BaseTingCardUI();
				this.gTingCards.addChild(item);
				let cardNum: number = 4 - GamePlayData.arrLPCards[GameParmes.getCardIDByID(arr[i].CardIndex)].length;
				cardNum = cardNum > -1 ? cardNum : 0;
				item.setInfo(GameParmes.getCardIDByID(arr[i].CardIndex), arr[i].FanType, cardNum);
			}
		}
		private clearTingGroup(): void {
			while (this.gTingCards.numChildren > 1) {
				let item = this.gTingCards.removeChildAt(1);
				item = null;
			}
		}
		private clearCardGroup(): void {
			while (this.gPGCards.numChildren > 0) {
				let item = this.gPGCards.removeChildAt(0);
				item = null;
			}
		}
		//清除杠摇
		private clearGangYaoGroup(): void {
			while (this.GangyaoCards.numChildren > 0) {
				let item = this.GangyaoCards.removeChildAt(0);
				item = null;
			}
		}
	}
}