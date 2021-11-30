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

		private nRoomID: number = 0;
		private imgItem: eui.Image;
		private info: any;
		private gContent: eui.Group;
		private nLoadNum: number = 0;
		private lbEnterGroup: eui.Group;
		private bonesJson: any;
		private textureJson: any;
		private texture: any;
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
			this.dispatchEvent(new egret.Event("OnItemClick", true, true, this.info));
		}
		private itemWenZiArr: Array<string> = ["rmg", "cjg", "zjg", "gjg", "djg", "zzg"];
		public setItem(data: any): void {
			this.info = data;
			// this.lbTai.text = ChipUtils.formatCoin(Number(data.taifen), true);
			this.lbBase.text = ChipUtils.formatCoin(Number(data.baseScore), true);//底分
			this.lbEnter.text = ChipUtils.formatCoin((data.limit[0]), true);//准入
			if (Global.language == "en") {
				this.lbEnter.x = 32;
			}
			//this.nRoomID = data.roomID;
			if (this.info.id > 3) {//高级馆以上

				this.lbBaseT.font = Global.language + "roomItemFnt0_fnt";

				this.lbEnterT.font = Global.language + "roomItemFnt0_fnt";

				this.lbBase.font = Global.language + "roomItemNumFnt0_fnt";

				this.lbEnter.font = Global.language + "roomItemNumFnt0_fnt";
			} else {


				this.lbBaseT.font = Global.language + "roomItemFnt1_fnt";

				this.lbEnterT.font = Global.language + "roomItemFnt1_fnt";

				this.lbBase.font = Global.language + "roomItemNumFnt1_fnt";

				this.lbEnter.font = Global.language + "roomItemNumFnt1_fnt";
			}
			let str: string = "roomItem" + this.info.id;


			try {
				RES.getResByUrl("resource/assets/language/" + Global.language + "/roomAnim/" + str + "_ske.json", function (text: any) {
					if (text) {
						this.bonesJson = text;
						this.getAnimComplete();
					}

				}, this, RES.ResourceItem.TYPE_JSON);
				RES.getResByUrl("resource/assets/language/" + Global.language + "/roomAnim/" + str + "_tex.json", function (text: any) {
					if (text) {
						this.textureJson = text;
						this.getAnimComplete();
					}

				}, this, RES.ResourceItem.TYPE_JSON);
				RES.getResByUrl("resource/assets/language/" + Global.language + "/roomAnim/" + str + "_tex.png", function (texture: any) {
					if (texture) {
						this.texture = texture;
						this.getAnimComplete();
					}

				}, this, RES.ResourceItem.TYPE_IMAGE);
			} catch (error) { }
		}
		private getAnimComplete(): void {
			this.nLoadNum += 1;
			if (this.nLoadNum == 3) {
				let factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
				factory.parseDragonBonesData(this.bonesJson);
				factory.parseTextureAtlasData(this.textureJson, this.texture);
				let armatureDisplay2 = factory.buildArmatureDisplay(this.itemWenZiArr[this.info.id - 1]);
				armatureDisplay2.animation.play(this.itemWenZiArr[this.info.id - 1], 0);
				this.gContent.addChildAt(armatureDisplay2, 0);
				armatureDisplay2.x = 180;
				armatureDisplay2.y = 150;
				//this.gItem.addChild( this.lbEnter );
			}
		}
	}
}