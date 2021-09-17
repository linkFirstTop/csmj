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
		public setResult(info: proto.PlayerGameResult, type: number): void {
			if (type == 0) {//胡
				this.lbName.textColor = 0xFCEFCE;
				this.gInfo.itemRendererSkinName.textColor = 0xFCEFCE;
			} else if (type == 1 || type == 2) {//失败或者流局
				this.lbName.textColor = 0xE8ECFF;
				this.gInfo.itemRendererSkinName.textColor = 0xE8ECFF;

			}
			if (info.seat == Global.userSit) {
				this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName), 10, "...");
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
				// console.log(Global.commURL + "head/iconHead" + Global.userHead + ".png");

				if (Number(info.money) >= 0) {
					this.lbCoin.font = "resultWinGameFnt_fnt";
					this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.money));
				} else {
					this.lbCoin.font = "resultLoseGameFnt_fnt";
					this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.money));
				}

			} else {
				this.lbName.text = GameUtils.getShowName(info.username);
				if (Number(info.money) >= 0) {
					this.lbCoin.font = "resultWinGameFnt_fnt";
					this.lbCoin.text = "+" + ChipUtils.formatCoin(Number(info.money));
				} else {
					this.lbCoin.font = "resultLoseGameFnt_fnt";
					this.lbCoin.text = "-" + ChipUtils.formatCoin(-Number(info.money));
				}
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(GameUtils.getShowName(info.username)) + ".png";
				// console.log(info.username);
				if (Global.getUserPosition(info.seat) == 2) {
					this.imgHead.scaleX = -1;
				}
			}
			if (info.seat == game.GameParmes.firstSit) {
				this.zhuangImg.visible = true;
			} else {
				this.zhuangImg.visible = false;
			}
			// console.log(info.seat);
			this.icon_f.source = "gameResult_icon_" + Global.getCurrentPositionName(info.seat) + "_" + Global.language + "_png";

		}
		/*显示详细信息*/
		public showDetailInfo(arr: Array<any>): void {
			var collection = new eui.ArrayCollection();
			for (let i: number = 0; i < arr.length; i++) {
				collection.addItem({ "label": "" + this.getTypeName(arr[i].fanxing) + " " + arr[i].taishu + Global.dic["台"] });
			}
			this.gInfo.dataProvider = collection;
		}
		/*1刮风 2下雨 3自摸 4胡  5花猪  6大叫 7呼叫转移 8补杠 9退税*/
		private getTypeName(type: number): string {
			let str: string = "";
			if (Global.language == "cn") {
				switch (type) {
					case 0:
						str = "庄家"
						break;
					case 1:
						str = "正花"
						break;
					case 2:
						str = "海底捞月"
						break;
					case 3:
						str = "杠上开花"
						break;
					case 4:
						str = "听牌"
						break;
					case 5:
						str = "抢杠胡"
						break;
					case 6:
						str = "三元牌"
						break;
					case 7:
						str = "独听"
						break;
					case 8:
						str = "自摸"
						break;
					case 9:
						str = "门清"
						break;
					case 10:
						str = "三暗刻";
						break;
					case 11:
						str = "全求人"
						break;
					case 12:
						str = "春夏秋冬"
						break;
					case 13:
						str = "梅兰竹菊"
						break;
					case 14:
						str = "平胡"
						break;
					case 15:
						str = "门清自摸"
						break;
					case 16:
						str = "混一色"
						break;
					case 17:
						str = "小三元"
						break;
					case 18:
						str = "碰碰胡"
						break;
					case 19:
						str = "地听";
						break;
					case 20:
						str = "四暗刻";
						break;
					case 21:
						str = "天听"
						break;
					case 22:
						str = "清一色"
						break;
					case 23:
						str = "大三元"
						break;
					case 24:
						str = "五暗刻"
						break;
					case 25:
						str = "小四喜"
						break;
					case 26:
						str = "八仙过海"
						break;
					case 27:
						str = "大四喜"
						break;
					case 28:
						str = "地胡"
						break;
					case 29:
						str = "天胡";
						break;
					case 30:
						str = "明杠";
						break;
					case 31:
						str = "暗杠";
						break;
					case 32:
						str = "无番胡";
						break;
				}
			} else if (Global.language == "tc") {
				switch (type) {
					case 0:
						str = "莊家"
						break;
					case 1:
						str = "正花"
						break;
					case 2:
						str = "海底撈月"
						break;
					case 3:
						str = "杠上開花"
						break;
					case 4:
						str = "聽牌"
						break;
					case 5:
						str = "搶杠胡"
						break;
					case 6:
						str = "三元牌"
						break;
					case 7:
						str = "獨聽"
						break;
					case 8:
						str = "自摸"
						break;
					case 9:
						str = "門清"
						break;
					case 10:
						str = "三暗刻";
						break;
					case 11:
						str = "全求人"
						break;
					case 12:
						str = "春夏秋冬"
						break;
					case 13:
						str = "梅蘭竹菊"
						break;
					case 14:
						str = "平胡"
						break;
					case 15:
						str = "門清自摸"
						break;
					case 16:
						str = "混壹色"
						break;
					case 17:
						str = "小三元"
						break;
					case 18:
						str = "碰碰胡"
						break;
					case 19:
						str = "地聽";
						break;
					case 20:
						str = "四暗刻";
						break;
					case 21:
						str = "天聽"
						break;
					case 22:
						str = "清壹色"
						break;
					case 23:
						str = "大三元"
						break;
					case 24:
						str = "五暗刻"
						break;
					case 25:
						str = "小四喜"
						break;
					case 26:
						str = "八仙過海"
						break;
					case 27:
						str = "大四喜"
						break;
					case 28:
						str = "地胡"
						break;
					case 29:
						str = "天胡";
						break;
					case 30:
						str = "明杠";
						break;
					case 31:
						str = "暗杠";
						break;
					case 32:
						str = "無番胡";
						break;
				}

			} else if (Global.language == "en") {
				switch (type) {
					case 0:
						str = "Dealer"
						break;
					case 1:
						str = "Bonus Tiles"
						break;
					case 2:
						str = "Under the Sea"
						break;
					case 3:
						str = "Win After Kong"
						break;
					case 4:
						str = "Ready Hand"
						break;
					case 5:
						str = "Snatch Kong"
						break;
					case 6:
						str = "The Dragons"
						break;
					case 7:
						str = "Du Ting"
						break;
					case 8:
						str = "Self-Draw"
						break;
					case 9:
						str = "Concealed Hand"
						break;
					case 10:
						str = "Three Concealed Pongs";
						break;
					case 11:
						str = "Melded Hand"
						break;
					case 12:
						str = "Season Tiles"
						break;
					case 13:
						str = "Flower Tiles"
						break;
					case 14:
						str = "All Chows"
						break;
					case 15:
						str = "Self-drawn Concealed Hand"
						break;
					case 16:
						str = "Half Flush"
						break;
					case 17:
						str = "Small Dragon"
						break;
					case 18:
						str = "All Pongs"
						break;
					case 19:
						str = "De Ting";
						break;
					case 20:
						str = "Four Concealed Pongs";
						break;
					case 21:
						str = "Heavenly Ready"
						break;
					case 22:
						str = "Pure One Suit"
						break;
					case 23:
						str = "Great Dragon"
						break;
					case 24:
						str = "Five Concealed Pongs"
						break;
					case 25:
						str = "Small Winds"
						break;
					case 26:
						str = "Eight Immortals"
						break;
					case 27:
						str = "Great Winds"
						break;
					case 28:
						str = "Earthly Hand"
						break;
					case 29:
						str = "Heavenly Hand";
						break;
					case 30:
						str = "Exposed Kong";
						break;
					case 31:
						str = "Concealed Kong";
						break;
					case 32:
						str = "No Fan Hu";
						break;
				}

			}

			return str;
		}
	}
}