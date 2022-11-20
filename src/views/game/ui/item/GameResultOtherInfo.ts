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
		public setResult(info: room.VGUserInfo,hu: number): void {
	
			this.showHandCardInfo(info.tileSets[0].Tiles)
			if (Global.getUserPosition(info.userPos.seatID ) == 0) {
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
			} else {
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(info.userName) + ".png";
			}
			
			this.zhuangImg.visible = info.role == 0;
			if(hu==1){
				this.icon_h.visible = true;
				this.lbName.textColor = 0xFCEFCE;
				this.gInfo.itemRendererSkinName.textColor = 0xFCEFCE;
			}else{
				this.icon_h.visible = false;
				this.lbName.textColor = 0xE8ECFF;
				this.gInfo.itemRendererSkinName.textColor = 0xE8ECFF;
			}
			this.lbName.text = info.userName;


			if (info.userPos.seatID == Global.userSit) {
				this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName), 10, "...");
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
				// console.log(Global.commURL + "head/iconHead" + Global.userHead + ".png");
			} else {
		
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(GameUtils.getShowName(info.userName)) + ".png";
				// console.log(info.username);
			}

			if( info.resultCoin >= 0) {
				this.lbCoin.font = "resultWinGameFnt_fnt";
				this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.resultCoin));
			} else {
				this.lbCoin.font = "resultLoseGameFnt_fnt";
				this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.resultCoin));
			}
			this.icon_f.source = "gameResult_icon_" + Global.getCurrentPositionName(info.userPos.seatID) + "_" + Global.language + "_png";

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
		public showHandCardInfo(arr: Array<number>): void {
			// console.log("===array",arr)
			let znValue: Array<number> = [];
			for (let i: number = 0; i < arr.length; i++) {
			
				let cardValue: number = arr[i] + 1
	
		
				let card: BaseHandCardUI = new BaseHandCardUI();
				card.setCard(0,  cardValue, 0, false);
		
				card.x = i * 126;
				this.CandsGroup.scaleX = this.CandsGroup.scaleY = 0.5;
			//	this.CandsGroup.y += 50;
				this.CandsGroup.addChild(card);
			}	
		}

	}
}