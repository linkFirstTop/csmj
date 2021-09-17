module game {
	export class GameResultUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private btnContinue: BaseButton;


		private labelColor: eui.Label;

		private resultBg: eui.Image;
		private resultText: eui.Image;
		private resultHuawen: eui.Image;
		private btnClose: BaseButton;
		private difen: eui.Label;
		// private listTitleLayout: eui.TileLayout;
		protected childrenCreated(): void {
			super.childrenCreated();
			this.btnClose.setImg("Close_png")
			this.visible = false;
			// if (Global.language == "en") {
			// 	this.listTitleLayout.requestedColumnCount = 2;
			// } else {
			// 	this.listTitleLayout.requestedColumnCount = 4;
			// }

			this.btnContinue.icon = "gameResult_continue_" + Global.language + "_png";;
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResultTap, this);
		}
		private onResultTap(evt: egret.TouchEvent): void {
			if (evt.target.name == "btnContinue") {
				this.visible = false;
				this.dispatchEvent(new egret.Event("OnGameContinue", true, true));
				return;
			}
			if (evt.target.name == "btnClose") {
				this.visible = false;
				this.dispatchEvent(new egret.Event("OnHideResult"));
				return;
			}
			this.alpha = this.alpha == 1 ? 0.2 : 1;
		}
		public showResult(body: proto.NotGameResult): void {
			this.visible = true;
			this.alpha = 1;
			let arr: Array<any> = body.others;
			var sourceSelf: number = 0;//自己的得分
			for (let i: number = 0; i < 4; i++) {
				let info: proto.PlayerGameResult = arr[i];
				// console.log(body);
				let p: number = Global.getUserPosition(info.seat);
				if (p == 3) {//玩家自己
					this["userZ"].setResult(info, body.result);
					sourceSelf = Number(info.money);
					Global.gameCoin = Number(info.chips);
					this["userZ"].showDetailInfo(body.fan);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(room.RoomMessage.OGID_ROOM_UPDATECOIN));
				} else {//其他玩家
					this["user" + p].setResult(info, body.result);
					this["user" + p].showDetailInfo(body.fan);
				}
			}
			// this.showDetailInfo(body.fan);
			//结果 0 胡 1 流局 2 失败 3 不输不赢
			if (body.result == 1) {
				this.setPing();
			} else if (body.result == 2) {
				this.setLose();
			} else if (body.result == 3) {
				this.setNull();
			} else if (body.result == 0) {

				this.setWin();

			}
			for (var i: number = 0; i < Global.roomData.length; i++) {
				if (Global.roomData[i].id == Global.roomId) {
					this.difen.text = Global.dic["底分/台分"] + ":" + ChipUtils.formatCoin(Number(Global.roomData[i].baseScore)) + "/" + ChipUtils.formatCoin((Global.roomData[i].taifen));
					return;
				}
			}
			this.difen.text = "";
		}
		private setWin(): void {
			this.resultBg.source = "gameResult_win_png";
			this.resultText.source = "winText_" + Global.language + "_png";


			this.resultHuawen.source = "winHw_png";
		}
		private setLose(): void {
			this.resultBg.source = "gameResult_lose_png";
			this.resultText.source = "loseText_" + Global.language + "_png";


			this.resultHuawen.source = "loseHw_png";
		}
		private setPing(): void {
			this.resultBg.source = "gameResult_lose_png";
			this.resultText.source = "heText_" + Global.language + "_png";

			this.resultHuawen.source = "tieHw_png";
		}
		private setNull(): void {
			this.resultBg.source = "gameResult_lose_png";
			this.resultText.source = "";

		}
		// /*显示详细信息*/
		// private showDetailInfo(arr: Array<any>): void {
		// 	var collection = new eui.ArrayCollection();
		// 	for (let i: number = 0; i < arr.length; i++) {
		// 		collection.addItem({ "label": "" + this.getTypeName(arr[i].fanxing) + " " + arr[i].taishu + Global.dic["台"] });
		// 	}
		// 	this.gInfo.dataProvider = collection;
		// }
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