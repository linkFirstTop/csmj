module game {
	export class GameResultOtherInfo extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		private lbName: eui.Label;
		private lbCoin: eui.BitmapLabel;
		private imgHead: eui.Image;
		private icon_f: eui.Image;
		private icon_h: eui.Image;
		private gInfo: eui.List;
		private zhuangImg: eui.Image;
		private listTitleLayout: eui.TileLayout;
		private CandsGroup: eui.Group;


		protected childrenCreated(): void {
			super.childrenCreated();
			if (Global.language == "en") {
				this.listTitleLayout.requestedColumnCount = 2;//列
			} else {
				this.listTitleLayout.requestedColumnCount = 3;//列
			}
			this.zhuangImg.source = "gameIcon_zhuang_" + Global.language + "_png";
			this.icon_h.source = "gameResult_icon_htype_" + Global.language + "__png";
		}
		public setResult(info: room.VGGameResultNtc, type: number,hu: number): void {
			if(hu==1){
				this.icon_h.visible = true;
			}else{
				this.icon_h.visible = false;
			}
			if (type == 0) {//胡
				this.lbName.textColor = 0xFCEFCE;
				this.gInfo.itemRendererSkinName.textColor = 0xFCEFCE;
			
			} else if (type == 1 || type == 2) {//失败或者流局
				this.lbName.textColor = 0xE8ECFF;
				this.gInfo.itemRendererSkinName.textColor = 0xE8ECFF;
		
			}
			// if (info.seat == Global.userSit) {
			// 	this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName), 10, "...");
			// 	this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
			// 	// console.log(Global.commURL + "head/iconHead" + Global.userHead + ".png");

			// 	if (Number(info.money) >= 0) {
			// 		this.lbCoin.font = "resultWinGameFnt_fnt";
			// 		this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.money));
			// 	} else {
			// 		this.lbCoin.font = "resultLoseGameFnt_fnt";
			// 		this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.money));
			// 	}

			// } else {
			// 	this.lbName.text = GameUtils.getShowName(info.username);
			// 	if (Number(info.money) >= 0) {
			// 		this.lbCoin.font = "resultWinGameFnt_fnt";
			// 		this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.money));
			// 	} else {
			// 		this.lbCoin.font = "resultLoseGameFnt_fnt";
			// 		this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.money));
			// 	}
			// 	this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(GameUtils.getShowName(info.username)) + ".png";
			// 	// console.log(info.username);
			// 	if (Global.getUserPosition(info.seat) == 2) {
			// 		this.imgHead.scaleX = -1;
			// 	}
			// }
			// if (info.seat == game.GameParmes.firstSit) {
			// 	this.zhuangImg.visible = true;
			// } else {
			// 	this.zhuangImg.visible = false;
			// }
			// console.log(info.seat);
		//	this.icon_f.source = "gameResult_icon_" + Global.getCurrentPositionName(info.seat) + "_" + Global.language + "_png";

		}
		/*显示详细信息*/
		public showDetailInfo(arr: Array<any>): void {
			var collection = new eui.ArrayCollection();
			for (let i: number = 0; i < arr.length; i++) {
				collection.addItem({ "label": "" + Global.getTypeName(arr[i].fanxing) + " " + arr[i].taishu + Global.dic["台"] });
			}
			this.gInfo.dataProvider = collection;
		}

		/*显示剩余手牌*/
		public showHandCardInfo(arr: Array<any>): void {
		
			let znValue: Array<number> = [];
			for (let i: number = 0; i < arr[0].cards.length; i++) {
				let info: game.CardInfo = arr[0].cards[i] as game.CardInfo;
				let cardValue: number = game.GameParmes.getCardID(info);
	
				if (cardValue < 10) {//万
					znValue.push(cardValue);
				} else if (cardValue >= 10 && cardValue < 19) {//条
					znValue.push(cardValue - 9);
				} else if (cardValue >= 19 && cardValue < 28) {//筒
					znValue.push(cardValue - 18);
				}
				let card: BaseHandCardUI = new BaseHandCardUI();
					 card.setCard(3, i, cardValue, 0, false);
		
				// item.x = j * 126;
				this.CandsGroup.scaleX = this.CandsGroup.scaleY = 0.5;
				this.CandsGroup.addChild(card);
			}	
		}

	}
}