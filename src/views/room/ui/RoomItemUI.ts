module room {
	export class RoomItemUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private lbBase: eui.BitmapLabel;
		// private lbTai: eui.BitmapLabel;
		private lbEnter: eui.BitmapLabel;

		private lbBaseT: eui.BitmapLabel;
		// private lbTaiT: eui.BitmapLabel;
		private lbEnterT: eui.BitmapLabel;

	
		private info: any;
		private gContent: eui.Group;
		protected childrenCreated(): void {
			super.childrenCreated();

			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onItemTap, this);
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
			this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
			this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
			this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);

		}
		private touchBegin(event: egret.TouchEvent): void {
			sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");

			this.gContent.scaleX = 0.9;
			this.gContent.scaleY = 0.9;
		}
		private touchCancel(event: egret.TouchEvent): void {
			this.gContent.scaleX = 1;
			this.gContent.scaleY = 1;


		}
		private onItemTap(): void {
			/*if(Global.gameCoin < this.info.entry_min){
				TipsUtils.showTipsFromCenter("您的金币不足,请进入其他场馆");
				return ;
			}*/
			//console.log("==ssss")
			//ViewManager.ins.switchToGame();


			this.dispatchEvent(new egret.Event("OnItemClick", true, true, this.info));
		}
		private itemWenZiArr: Array<string> = ["rmg", "cjg", "zjg", "gjg", "djg", "zzg"];
		public setItem(data: any): void {
			this.info = data;
			// this.lbTai.text = ChipUtils.formatCoin(Number(data.taifen), true);
			this.lbBase.text = ChipUtils.formatCoin(Number(data.basic_bet), true);//底分
			this.lbEnter.text = ChipUtils.formatCoin((data.entry_min), true);//准入
			if (Global.language == "en") {
				this.lbEnter.x = 32;
			}
			//this.nRoomID = data.roomID;
			// if (this.info.roomID > 3) {//高级馆以上

			// 	this.lbBaseT.font = Global.language + "roomItemFnt0_";
			// 	this.lbEnterT.font = Global.language + "roomItemFnt0";
			// 	this.lbBase.font = Global.language + "roomItemNumFnt0";
			// 	this.lbEnter.font = Global.language + "roomItemNumFnt0";
			// } else {

			// 	this.lbBaseT.font = Global.language + "roomItemFnt1";
			// 	this.lbEnterT.font = Global.language + "roomItemFnt1";
			// 	this.lbBase.font = Global.language + "roomItemNumFnt1";
			// 	this.lbEnter.font = Global.language + "roomItemNumFnt1";
			// }


			let str: string = "roomItem" + this.info.roomID;
			let factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();

			factory.parseDragonBonesData(
			  RES.getRes(`${str}_ske_json`)
			); //xlrw_tex_webp
			factory.parseTextureAtlasData(
			  RES.getRes(`${str}_tex_json`),
			  RES.getRes(`${str}_tex_png`)
			);
	  
			let ar: dragonBones.EgretArmatureDisplay = factory.buildArmatureDisplay(this.itemWenZiArr[this.info.roomID - 1]);
			ar.animation.play("Sprite", 0);
			ar.x = 240;
			ar.y = 160;
			ar.animation.play(this.itemWenZiArr[this.info.roomID - 1], 0);
			this.gContent.addChildAt(ar, 0);
	  
		
		}


	}
}