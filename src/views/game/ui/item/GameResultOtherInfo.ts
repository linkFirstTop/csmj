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
		private zhuangImg: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();
			this.zhuangImg.source = "zhuangText_" + Global.language + "_png";
		}
		public setResult(info: proto.PlayerGameResult): void {

			if (info.seat == Global.userSit) {
				this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName), 10, "...");
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
				console.log(Global.commURL + "head/iconHead" + Global.userHead + ".png");

				if (Number(info.money) >= 0) {
					this.lbCoin.font = "resultWinFntBig_fnt";
					this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.money));
				} else {
					this.lbCoin.font = "resultWinFntSml_fnt";
					this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.money));
				}

			} else {
				this.lbName.text = GameUtils.getShowName(info.username);
				if (Number(info.money) >= 0) {
					this.lbCoin.font = "resultWinFnt_fnt";
					this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.money));
				} else {
					this.lbCoin.font = "resultLoseFnt_fnt";
					this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.money));
				}
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(GameUtils.getShowName(info.username)) + ".png";
				console.log(info.username);

				if (Global.getUserPosition(info.seat) == 2) {
					this.imgHead.scaleX = -1;
				}
			}
			if (info.seat == game.GameParmes.firstSit) {
				this.zhuangImg.visible = true;
			} else {
				this.zhuangImg.visible = false;
			}
			console.log(info.seat);
			this.icon_f.source = "gameResult_icon_" + Global.getCurrentPositionName(info.seat) + "_" + Global.language + "_png";

		}
	}
}