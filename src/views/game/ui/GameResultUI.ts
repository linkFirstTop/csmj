module game {
	export class GameResultUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private btnContinue: BaseButton;

		private userGroup: eui.Group;
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
		public showResult(body: room.VGGameResultNtc): void {
			console.log("页面展示");
			this.visible = true;
			this.alpha = 1;
			let arr: Array<any> = body.userInfos;
			var sourceSelf: number = 0;//自己的得分
			console.log(body);
			for (let i: number = 0; i < 4; i++) {
				let info:room.VGUserInfo = arr[i];
			
				// console.log(body);
				let p: number = Global.getUserPosition(info.userPos.seatID);

				const User: game.GameResultOtherInfo = <GameResultOtherInfo>this.userGroup.getChildAt(i);
				
				if (p == 0) {//玩家自己
					

					sourceSelf = Number(info.resultCoin);
					if(sourceSelf>0){
						User.setResult(info,1);
					}else{
						User.setResult(info,0);
					}
					Global.gameCoin = Number(info.gameCoin);
					if(sourceSelf!=0){
						User.showDetailInfo(info.fan);
					}
					User.showHandCardInfo(info.tileSets[0].Tiles);
					GDGame.Msg.ins.dispatchEvent(new egret.Event(room.RoomMessage.OGID_ROOM_UPDATECOIN));
				} else {//其他玩家
					const resultCoin = Number(info.resultCoin);
				//	this["user" + p].setResult(info, body.result);
					if(resultCoin>0){
						User.setResult(info,1);
					}else{
						User.setResult(info, 0);
					}
					if(resultCoin!=0){
						User.showDetailInfo(info.fan);
					}
					//User.showHandCardInfo(info.tileSets[0].Tiles);
				}
			}
			// this.showDetailInfo(body.fan);
			//结果 0 胡 1 流局 2 失败 3 不输不赢
			if (sourceSelf == 0) {
				this.setPing();
			} else if (sourceSelf < 0) {
				this.setLose();
			} else if (sourceSelf > 3) {
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
		
		
	}
}