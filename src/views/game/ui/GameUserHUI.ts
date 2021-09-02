module game {
	export class GameUserHUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		private lbName: eui.Label;
		private lbCoin: eui.Label;
		private imgHead: eui.Image;
		private imgDQ: eui.Image;
		private imgZhuang: eui.Image;
		private nCoin: number = 0;
		//private lbCoinWinAnim:eui.BitmapLabel;
		//private lbCoinLoseAnim:eui.BitmapLabel;
		private anim: dragonBones.EgretArmatureDisplay;
		private nSit: number = -1;
		private imgTing: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();
			this.imgTing.visible = false;
			this.imgTing.source = "bttip_" + Global.language + "_png";
			this.imgZhuang.source = "gameIcon_zhuang_" + Global.language + "_png";

		}
		public initUser(): void {
			this.imgDQ.source = "";
			this.imgHead.source = "";
			this.imgZhuang.source = "";
			this.imgTing.visible = false;
		}
		public setTingType(b: boolean): void {
			this.imgTing.visible = b;
		}
		public setUserInfo(user: game.GameUserInfo): void {
			if (game.GamePlayData.tingData[user.userSit] == true) {
				this.imgTing.visible = true;
			} else {
				this.imgTing.visible = false;
			}

			let strName: string = "";
			if (user.userShowName == "") {
				strName = user.userName;
			} else {
				strName = user.userShowName;
			}

			if (Global.getUserPosition(this.nSit) == 3) {
				this.lbCoin.text = ChipUtils.formatCoin(user.userCoin);
			} else {
				this.lbCoin.text = ChipUtils.formatCoin(user.userCoin, true);
			}

			this.nCoin = user.userCoin;
			this.nSit = user.userSit;
			this.imgZhuang.source = "";
			if (Global.getUserPosition(this.nSit) == 3) {
				strName = Global.userName;
				this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(strName), 10, "...");
			} else {
				this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(strName), 10, "...");
			}
			if (this.nSit == game.GameParmes.firstSit) {
				this.imgZhuang.source = "gameIcon_zhuang_" + Global.language + "_png";
			}
			if (this.nCoin <= 0) {
				this.nCoin = 0;
				this.dispatchEvent(new egret.Event("UserLoseGame", true, true, this.nSit));
			}
			if (Global.getUserPosition(this.nSit) == 3) {
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";

			} else {
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(user.userName) + ".png";

				console.log(user.userName);
			}
			if (Global.getUserPosition(this.nSit) == 2) {
				this.imgHead.scaleX = -1;
			} else {
				this.imgHead.scaleX = 1;
			}

		}
		public showResultCoin(coin: number): void {
			if (Global.getUserPosition(this.nSit) == 3) {
				this.lbCoin.text = ChipUtils.formatCoin(coin);
			} else {
				this.lbCoin.text = ChipUtils.formatCoin(coin, true);
			}

			this.nCoin = coin;
		}
		public showCurrentAnim(b: boolean): void {
			if (b) {
				if (this.anim == null) {
					this.anim = comm.DragonAnim.ins.getAnimByName("txhhxd");
					this.addChild(this.anim);
					this.anim.x = 174;
					this.anim.y = 80;
				}
				this.anim.visible = true;
				this.anim.animation.play("txhhxd", 0);
			} else {
				if (this.anim) {
					this.anim.visible = false;
					this.anim.animation.stop();
				}
			}
		}
		public updataCoin(coin: number): void {
			this.nCoin += coin;
			if (this.nCoin <= 0) {
				this.nCoin = 0;
				this.dispatchEvent(new egret.Event("UserLoseGame", true, true, this.nSit));
			}
			if (Global.getUserPosition(this.nSit) == 3) {
				this.lbCoin.text = ChipUtils.formatCoin(this.nCoin);
			} else {
				this.lbCoin.text = ChipUtils.formatCoin(this.nCoin, true);
			}

			//this.showCoinAnim(coin);

		}
		private showCoinAnim(coin: number): void {
			/*this.lbCoinWinAnim.text = this.lbCoinLoseAnim.text = "";
			if(coin>0){
				this.lbCoinWinAnim.text = "+"+ChipUtils.formatCoin(coin);
				this.lbCoinWinAnim.alpha = 1
				this.lbCoinWinAnim.y = 60;
				egret.Tween.get(this.lbCoinWinAnim).wait(2000).to({y:-100,alpha:0},300);
			}else{
				this.lbCoinLoseAnim.text = "-"+ChipUtils.formatCoin(-coin);
				this.lbCoinLoseAnim.alpha = 1
				this.lbCoinLoseAnim.y = 60;
				egret.Tween.get(this.lbCoinLoseAnim).wait(2000).to({y:-100,alpha:0},300);
			}*/

		}
		public setUserDQ(type: number, str: string): void {
			this.imgDQ.source = "";
			if (type == 0) {//万
				this.imgDQ.source = "gameIcon_wan";
			} else if (type == 1) {//条
				this.imgDQ.source = "gameIcon_tiao";
			} else if (type == 2) {//饼
				this.imgDQ.source = "gameIcon_tong";
			}
			if (str == "left") {
				this.imgDQ.x = 15;
			} else {
				this.imgDQ.x = 95;
			}
		}
	}
}