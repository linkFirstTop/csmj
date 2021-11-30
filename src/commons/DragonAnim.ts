module comm {
	export class DragonAnim extends egret.DisplayObjectContainer {
		private static _ins: DragonAnim;
		public static get ins(): DragonAnim {
			if (DragonAnim._ins == null) {
				DragonAnim._ins = new DragonAnim();
			}
			return DragonAnim._ins;
		}
		private dataArray: Array<string> = ["dqSelect", "cpts", "txshxd", "txhhxd", "gy"];
		private dataArrayGame: Array<string> = ["hdly", "ag", "bh", "bt", "chi", "hu", "jg", "ksyx", "mg", "peng", "qgh", "zm"];
		public topLayer: egret.DisplayObjectContainer;
		public constructor() {
			super();
			for (var i: number = 0; i < this.dataArray.length; i++) {
				var dragonbonesData = RES.getRes(this.dataArray[i] + "_ske_json");
				var textureData = RES.getRes(this.dataArray[i] + "_tex_json");
				var texture = RES.getRes(this.dataArray[i] + "_tex_png");
				dragonBones.EgretFactory.factory.parseDragonBonesData(dragonbonesData);
				dragonBones.EgretFactory.factory.parseTextureAtlasData(textureData, texture);
			}
		}
		public initAnim(): void {
			var str = "";
			if (Global.language != "cn") {
				str = Global.language;
			}
			for (var i: number = 0; i < this.dataArrayGame.length; i++) {
				var dragonbonesData = RES.getRes(str + this.dataArrayGame[i] + "_ske_json");
				var textureData = RES.getRes(str + this.dataArrayGame[i] + "_tex_json");
				var texture = RES.getRes(str + this.dataArrayGame[i] + "_tex_png");
				dragonBones.EgretFactory.factory.parseDragonBonesData(dragonbonesData);
				dragonBones.EgretFactory.factory.parseTextureAtlasData(textureData, texture);
			}
		}
		public getAnimByName(str: string): dragonBones.EgretArmatureDisplay {
			return dragonBones.EgretFactory.factory.buildArmatureDisplay(str);
		}
		public playAnimByPosition(str: string, xpos: number, ypos: number): void {
			if (Global.isAnimLoad == false) {
				return;
			}
			let ar: dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay(str);
			this.topLayer.addChild(ar);
			ar.animation.play(str, 1);
			ar.x = xpos;
			ar.y = ypos;
			ar.armature.addEventListener(dragonBones.EgretEvent.COMPLETE, this.onPlayCompletedAnimation, this);
		}
		public playAnimByName(str: string, p: number): void {
			if (Global.isAnimLoad == false) {
				return;
			}
			let pos: any = this.getPoint(str, p);
			let ar: dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay(str);
			this.topLayer.addChild(ar);
			ar.animation.play(str, 1);
			ar.x = pos.x;
			ar.y = pos.y;
			ar.armature.addEventListener(dragonBones.EgretEvent.COMPLETE, this.onPlayCompletedAnimation, this);
		}

		private onPlayCompletedAnimation(event: dragonBones.EgretEvent) {
			let keyname: string = event.armature.name;
			let item: dragonBones.Armature = event.armature;
			egret.setTimeout(function () {
				this.topLayer.removeChild(item.display);
				item.dispose();
			}, this, 0.4);
		}
		private getPoint(str: string, p: number): any {
			if (p == -1) {
				if (str == "ksyx" || str == "xy" || str == "liuju" || str == "djjs") {
					return { "x": GameConfig.curWidth() / 2, "y": GameConfig.curHeight() / 2 }
				}
			} else {//qgh 抢杠胡 ypdx一炮多响 gskh杠上开花 hjzy呼叫转移
				if (str == "hdly" || str == "mg" || str == "jg" || str == "bt" || str == "bh" || str == "gf" || str == "ljf" || str == "gy" || str == "xyz" || str == "peng" || str == "chi" || str == "hu" || str == "bt" || str == "zm"
					|| str == "qgh" || str == "ag" || str == "ypdx" || str == "gskh" || str == "hjzy" || str == "dj" || str == "hz") {
					if (p == 0) {
						return { "x": 400, "y": GameConfig.curHeight() / 2 }
					} else if (p == 1) {
						return { "x": GameConfig.curWidth() / 2, "y": 300 }
					} else if (p == 2) {
						return { "x": GameConfig.curWidth() - 400, "y": GameConfig.curHeight() / 2 }
					} else {
						return { "x": GameConfig.curWidth() / 2, "y": 950 }
					}
				}
				if (str == "zmbd") {
					if (p == 0) {
						return { "x": 400, "y": 700 }
					} else if (p == 1) {
						return { "x": 500, "y": 300 }
					} else if (p == 2) {
						return { "x": GameConfig.curWidth() - 400, "y": 400 }
					} else {
						return { "x": GameConfig.curWidth() - 300, "y": 950 }
					}
				}
			}
			return { "x": GameConfig.curWidth() / 2, "y": GameConfig.curHeight() / 2 }
		}

	}
}