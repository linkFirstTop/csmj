module room {
	export class RoomMainUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private imgTopbg: eui.Image;
		private imgInfobg: eui.Image;
		private itemGroup: eui.Group;
		private gTop: eui.Group;
		private imgHead: eui.Image;
		private lbName: eui.Label;
		private lbCoin: eui.Label;
		private gBtns: eui.Group;
		private btnRule: BaseButton;
		private btnRecord: BaseButton;
		private btnHall: BaseButton;
		private btnLanguage: BaseButton;

		private gItems: eui.Group;
		private gRW: eui.Group;
		private nRoomInfo: room.RoomItem;
		private historyUI: room.HistoryUI;
		private changeHeadUI: room.ChangeHeadUI;
		private headBtn: eui.Group;
		public isCreated: boolean = false;
		private changeLanguage: room.ChangeLanguageUI;
		private imgLogo: eui.Image;
		private hotGame: room.HotGameUI;
		private logo_0: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();
			this.isCreated = true;
			this.onResize();
			this.createAnim();
			//this.gTop.alpha = 0;
			this.gItems.addEventListener("OnItemClick", this.onItemClick, this);
			GDGame.Msg.ins.addEventListener("OnGameResLoad", this.onGameResLoad, this);
			this.btnRecord.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowRecord, this);
			this.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowHelp, this);
			this.btnHall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHall, this);
			this.headBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeHead, this);
			this.logo_0.source = Global.commURL + "logo.png";
			this.imgLogo.source = "resource/assets/language/" + Global.language + "/logo/roomlogo.png";
			this.btnLanguage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeLanguage, this);
			this.updataUserInfo();
		}
		private createAnim(): void {
			dragonBones.EgretFactory.factory.parseDragonBonesData(RES.getRes("csmjcgrw_ske_json"));
			dragonBones.EgretFactory.factory.parseTextureAtlasData(RES.getRes("csmjcgrw_tex_json"), RES.getRes("csmjcgrw_tex_png"));

			this.gRW = new eui.Group();
			this.addChild(this.gRW);
			let ar: dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay("csmjcgrw");
			ar.animation.play("csmjcgrw", 0);
			this.gRW.addChild(ar);
			this.gRW.x = 290;
			this.gRW.y = 700;
			this.gRW.alpha = 0;
		}
		private onChangeHead(): void {
			if (this.changeHeadUI == null) {
				this.changeHeadUI = new room.ChangeHeadUI();
				this.addChild(this.changeHeadUI);
				this.changeHeadUI.addEventListener("ChangeHeadSuccess", this.onChangeHeadComplete, this);
			}
			this.changeHeadUI.showUI();
		}
		private onChangeHeadComplete(): void {
			if (Global.istest == false) {
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
			}
		}
		public onResize(): void {
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();
		}
		public updataUserInfo(): void {
			this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName), 10, "...");
			this.lbCoin.text = ChipUtils.formatCoin(Global.gameCoin);
			this.btnHall.scaleX = Global.isShowHall ? 1 : 0;
			this.gBtns.right = Global.isShowHall ? 30 : -20;
			//var str:string=Global.commURL + "head/iconHead"+Global.userHead+".png";
			egret.setTimeout(function () {
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
			}, this, 200);

		}
		private onChangeLanguage(): void {
			if (this.changeLanguage == null) {
				this.changeLanguage = new room.ChangeLanguageUI();
			}
			this.addChild(this.changeLanguage);
			this.changeLanguage.showUI();
		}
		public updataRoomList(arrList: Array<any>): void {
			this.initAnim()
			for (let i: number = 0; i < arrList.length; i++) {
				let info: any = arrList[i];
				let item: room.RoomItemUI = new room.RoomItemUI();
				this.gItems.addChild(item);
				item.setItem(info);
				item.x = (i % 3) * (item.width + 43);
				item.y = Math.floor(i / 3) * (item.height + 10);
			}
			this.addChild(this.gItems);
			this.initTopinfo();
			ViewManager.ins.hideWait();
			this.showRoomAnim();
		}
		private onGameResLoad(): void {
			if (this.nRoomInfo && this.nRoomInfo.roomID > 0) {
				Global.roomInfo = this.nRoomInfo;
				room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(this.nRoomInfo.roomID);
			}
			if (Global.isContinue) {
				room.RoomWebSocket.instance().roomSender.REQ_GAMECONTINUR();
			}
		}
		private onItemClick(evt: egret.Event): void {
			const body: room.RoomItem = evt.data;
			this.nRoomInfo = body;
			const roomID = body.roomID;
			//Global.myPos.roomID = evt.data;
			if (Global.isGameLoad) {
				Global.roomInfo = body;
				room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(roomID);
			} else {
				ViewManager.ins.showWait("正在进入游戏中...");
			}
		}
		private showRoomAnim(): void {
			// this.gTop.y = -190;
			// egret.Tween.get(this.gTop).to({y:0,alpha:1},1200,egret.Ease.elasticOut);
			this.gRW.x = -200;
			egret.Tween.get(this.gRW).to({ x: 290, alpha: 1 }, 1200, egret.Ease.elasticOut);

			this.gItems.right = -263;
			egret.Tween.get(this.gItems).to({ right: 63 }, 1200, egret.Ease.elasticOut);
			// if (this.hotGame == null) {
			// 	this.hotGame = new HotGameUI();
			// 	this.addChild(this.hotGame);
			// 	this.hotGame.getGameList();
			// 	this.hotGame.y = 170;
			// }
		}
		private initTopinfo(): void {
			this.imgTopbg.source = Global.commURL + "/shareSheet/commHallTopbg.png";
			this.imgInfobg.source = Global.commURL + "/shareSheet/commHallInfobg.png";
			this.btnHall.setImg(Global.commURL + "/shareSheet/commHallButton_hall.png");
			this.btnRecord.setImg(Global.commURL + "/shareSheet/commHallButton_recode.png");
			this.btnRule.setImg(Global.commURL + "/shareSheet/commHallButton_help.png");
			this.btnLanguage.setImg(Global.commURL + "/shareSheet/commHallButton_language.png");
		}
		private initAnim(): void {
			for (let i: number = 1; i <= 6; i++) {
				//dragonBones.EgretFactory.factory.parseDragonBonesData(RES.getRes("roomItem"+i+"_ske_json"));
				//dragonBones.EgretFactory.factory.parseTextureAtlasData( RES.getRes("roomItem"+i+"_tex_json"),RES.getRes("roomItem"+i+"_tex_png"));
			}
		}
		private onShowRecord(): void {
			if (this.historyUI == null) {
				this.historyUI = new room.HistoryUI();
				this.addChild(this.historyUI);
			}
			this.historyUI.onShowUI();

		}
		private onShowHelp(): void {
			ViewManager.ins.showRule();
		}
		private onBackHall(): void {
			if (egret.getOption("showHall") == "2") {
				try {
					window["closeGame"]();
				} catch (e) { }
			} else {
				window.location.href = Global.gameHallURL + "?token=" + Global.token;
			}
		}
	}
}