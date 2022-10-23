module game {
	export class GameZhuaPaiQiUI extends egret.Sprite {
		private parItem: egret.Sprite;
		private btnItem: egret.Sprite;
		//private showMode:number=0;
		private txtModel: egret.TextField = new egret.TextField();
		private txtDel: egret.TextField = new egret.TextField();
		private textFirstSit: egret.TextField = new egret.TextField;
		private textSit0: egret.TextField = new egret.TextField;
		private textSit1: egret.TextField = new egret.TextField;
		private textSit2: egret.TextField = new egret.TextField;
		private textSit3: egret.TextField = new egret.TextField;
		//抓牌器
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
		}

		private init(): void {
			this.parItem = new egret.Sprite();
			this.addChild(this.parItem);
			this.btnItem = new egret.Sprite();
			this.addChild(this.btnItem);
			for (let i = 0; i < 27; i++) {
				let item: egret.Sprite = new egret.Sprite();
				item.graphics.beginFill(0xFF8C00);
				item.graphics.drawRect(0, 0, 50, 50);
				item.graphics.endFill();
				item.alpha = 0.8;

				this.parItem.addChild(item);
				let txt: egret.TextField = new egret.TextField();
				item.addChild(txt);
				if (i / 9 <= 0.9) {
					txt.text = (i % 9) + 1 + "万";
					item.name = "0x0" + (i % 9) + "1";
				} else if (i / 9 <= 1.9) {
					txt.text = (i % 9) + 1 + "条"
					item.name = "0x1" + (i % 9) + "1";
				} else {
					txt.text = (i % 9) + 1 + "饼";
					item.name = "0x2" + (i % 9) + "1";
				}
				txt.x = 50 / 2 - txt.textWidth / 2;
				txt.y = 50 / 2 - txt.textHeight / 2;

				item.x = (i) % 9 * 50 + i % 9 * 25+20;
				item.y = Math.floor(i / 9) * 50 + Math.floor(i / 9) * 25;
				item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				item.touchEnabled = true;
			}
			// let item: egret.Sprite = new egret.Sprite();
			// item.graphics.beginFill(0xFF8C00);
			// item.graphics.drawRect(0, 0, 50, 50);
			// item.graphics.endFill();
			// item.alpha = 0.8;
			// item.name = "0x401";
			// this.parItem.addChild(item);
			// item.x = 0;
			// item.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item.touchEnabled = true;
			// let txt: egret.TextField = new egret.TextField();
			// txt.text = "红中";
			// item.addChild(txt);

			// let item2: egret.Sprite = new egret.Sprite();
			// item2.graphics.beginFill(0xFF8C00);
			// item2.graphics.drawRect(0, 0, 50, 50);
			// item2.graphics.endFill();
			// item2.alpha = 0.8;
			// item2.name = "0x421";
			// this.parItem.addChild(item2);
			// item2.x = item.x + item.width + 10;
			// item2.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item2.touchEnabled = true;
			// let txt2: egret.TextField = new egret.TextField();
			// txt2.text = "白板";
			// item2.addChild(txt2);

			// let item3: egret.Sprite = new egret.Sprite();
			// item3.graphics.beginFill(0xFF8C00);
			// item3.graphics.drawRect(0, 0, 50, 50);
			// item3.graphics.endFill();
			// item3.alpha = 0.8;
			// item3.name = "0x411";
			// this.parItem.addChild(item3);
			// item3.x = item2.x + item2.width + 10;
			// item3.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item3.touchEnabled = true;
			// let txt3: egret.TextField = new egret.TextField();
			// txt3.text = "绿发";
			// item3.addChild(txt3);

			// let item4: egret.Sprite = new egret.Sprite();
			// item4.graphics.beginFill(0xFF8C00);
			// item4.graphics.drawRect(0, 0, 50, 50);
			// item4.graphics.endFill();
			// item4.alpha = 0.8;
			// item4.name = "0x301";
			// this.parItem.addChild(item4);
			// item4.x = item3.x + item3.width + 10;
			// item4.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item4.touchEnabled = true;
			// let txt4: egret.TextField = new egret.TextField();
			// txt4.text = "东风";
			// item4.addChild(txt4);

			// let item5: egret.Sprite = new egret.Sprite();
			// item5.graphics.beginFill(0xFF8C00);
			// item5.graphics.drawRect(0, 0, 50, 50);
			// item5.graphics.endFill();
			// item5.alpha = 0.8;
			// item5.name = "0x311";
			// this.parItem.addChild(item5);
			// item5.x = item4.x + item4.width + 10;
			// item5.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item5.touchEnabled = true;
			// let txt5: egret.TextField = new egret.TextField();
			// txt5.text = "南风";
			// item5.addChild(txt5);

			// let item6: egret.Sprite = new egret.Sprite();
			// item6.graphics.beginFill(0xFF8C00);
			// item6.graphics.drawRect(0, 0, 50, 50);
			// item6.graphics.endFill();
			// item6.alpha = 0.8;
			// item6.name = "0x321";
			// this.parItem.addChild(item6);
			// item6.x = item5.x + item5.width + 10;
			// item6.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item6.touchEnabled = true;
			// let txt6: egret.TextField = new egret.TextField();
			// txt6.text = "西风";
			// item6.addChild(txt6);


			// let item7: egret.Sprite = new egret.Sprite();
			// item7.graphics.beginFill(0xFF8C00);
			// item7.graphics.drawRect(0, 0, 50, 50);
			// item7.graphics.endFill();
			// item7.alpha = 0.8;
			// item7.name = "0x331";
			// this.parItem.addChild(item7);
			// item7.x = item6.x + item6.width + 10;
			// item7.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			// item7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item7.touchEnabled = true;
			// let txt7: egret.TextField = new egret.TextField();
			// txt7.text = "北风";
			// item7.addChild(txt7);


			// let item8: egret.Sprite = new egret.Sprite();
			// item8.graphics.beginFill(0xFF8C00);
			// item8.graphics.drawRect(0, 0, 50, 50);
			// item8.graphics.endFill();
			// item8.alpha = 0.8;
			// item8.name = "0x601";
			// this.parItem.addChild(item8);
			// item8.x = item7.x + item7.width + 10;
			// item8.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 125;
			// item8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item8.touchEnabled = true;
			// let txt8: egret.TextField = new egret.TextField();
			// txt8.text = "春";
			// item8.addChild(txt8);

			// let item9: egret.Sprite = new egret.Sprite();
			// item9.graphics.beginFill(0xFF8C00);
			// item9.graphics.drawRect(0, 0, 50, 50);
			// item9.graphics.endFill();
			// item9.alpha = 0.8;
			// item9.name = "0x611";
			// this.parItem.addChild(item9);
			// item9.x = item8.x + item8.width + 10;
			// item9.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 125;
			// item9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item9.touchEnabled = true;
			// let txt9: egret.TextField = new egret.TextField();
			// txt9.text = "夏";
			// item9.addChild(txt9);

			// let item10: egret.Sprite = new egret.Sprite();
			// item10.graphics.beginFill(0xFF8C00);
			// item10.graphics.drawRect(0, 0, 50, 50);
			// item10.graphics.endFill();
			// item10.alpha = 0.8;
			// item10.name = "0x621";
			// this.parItem.addChild(item10);
			// item10.x = item9.x + item9.width + 10;
			// item10.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 125;
			// item10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item10.touchEnabled = true;
			// let txt10: egret.TextField = new egret.TextField();
			// txt10.text = "秋";
			// item10.addChild(txt10);

			// let item11: egret.Sprite = new egret.Sprite();
			// item11.graphics.beginFill(0xFF8C00);
			// item11.graphics.drawRect(0, 0, 50, 50);
			// item11.graphics.endFill();
			// item11.alpha = 0.8;
			// item11.name = "0x631";
			// this.parItem.addChild(item11);
			// item11.x = item10.x + item10.width + 10;
			// item11.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 125;
			// item11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item11.touchEnabled = true;
			// let txt11: egret.TextField = new egret.TextField();
			// txt11.text = "冬";
			// item11.addChild(txt11);


			// let item14: egret.Sprite = new egret.Sprite();
			// item14.graphics.beginFill(0xFF8C00);
			// item14.graphics.drawRect(0, 0, 50, 50);
			// item14.graphics.endFill();
			// item14.alpha = 0.8;
			// item14.name = "0x501";
			// this.parItem.addChild(item14);
			// item14.x = item7.x + item7.width + 10;
			// item14.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 195;
			// item14.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item14.touchEnabled = true;
			// let txt14: egret.TextField = new egret.TextField();
			// txt14.text = "梅";
			// item14.addChild(txt14);

			// let item15: egret.Sprite = new egret.Sprite();
			// item15.graphics.beginFill(0xFF8C00);
			// item15.graphics.drawRect(0, 0, 50, 50);
			// item15.graphics.endFill();
			// item15.alpha = 0.8;
			// item15.name = "0x511";
			// this.parItem.addChild(item15);
			// item15.x = item8.x + item8.width + 10;
			// item15.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 195;
			// item15.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item15.touchEnabled = true;
			// let txt15: egret.TextField = new egret.TextField();
			// txt15.text = "兰";
			// item15.addChild(txt15);

			// let item16: egret.Sprite = new egret.Sprite();
			// item16.graphics.beginFill(0xFF8C00);
			// item16.graphics.drawRect(0, 0, 50, 50);
			// item16.graphics.endFill();
			// item16.alpha = 0.8;
			// item16.name = "0x521";
			// this.parItem.addChild(item16);
			// item16.x = item9.x + item9.width + 10;
			// item16.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 195;
			// item16.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item16.touchEnabled = true;
			// let txt16: egret.TextField = new egret.TextField();
			// txt16.text = "竹";
			// item16.addChild(txt16);

			// let item17: egret.Sprite = new egret.Sprite();
			// item17.graphics.beginFill(0xFF8C00);
			// item17.graphics.drawRect(0, 0, 50, 50);
			// item17.graphics.endFill();
			// item17.alpha = 0.8;
			// item17.name = "0x531";
			// this.parItem.addChild(item17);
			// item17.x = item10.x + item10.width + 10;
			// item17.y = Math.floor(26 / 9) * 100 + Math.floor(26 / 9) * 25 + 195;
			// item17.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			// item17.touchEnabled = true;
			// let txt17: egret.TextField = new egret.TextField();
			// txt17.text = "菊";
			// item17.addChild(txt17);


			////
			let item12: egret.Sprite = new egret.Sprite();
			item12.graphics.beginFill(0xFF8C00);
			item12.graphics.drawRect(0, 0, 50, 50);
			item12.graphics.endFill();
			item12.alpha = 0.8;
			item12.name = "shou";
			this.btnItem.addChild(item12);
			item12.x = 210;
			item12.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 100;
			item12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item12.touchEnabled = true;
			let txt12: egret.TextField = new egret.TextField();
			txt12.text = "收";
			item12.addChild(txt12);

			let item13: egret.Sprite = new egret.Sprite();
			item13.graphics.beginFill(0xFF8C00);
			item13.graphics.drawRect(0, 0, 50, 50);
			item13.graphics.endFill();
			item13.alpha = 0.8;
			item13.name = "kai";
			this.btnItem.addChild(item13);
			item13.x = item12.x + item12.width + 10;
			item13.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 100;
			item13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item13.touchEnabled = true;
			let txt13: egret.TextField = new egret.TextField();
			txt13.text = "开";
			item13.addChild(txt13);

			let itemModel: egret.Sprite = new egret.Sprite();
			itemModel.graphics.beginFill(0xFF8C00);
			itemModel.graphics.drawRect(0, 0, 200, 50);
			itemModel.graphics.endFill();
			itemModel.alpha = 0.8;
			itemModel.name = "model";
			this.btnItem.addChild(itemModel);
			itemModel.x = item12.x + item12.width + 200;
			itemModel.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 100;
			itemModel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			itemModel.touchEnabled = true;
	

			this.txtModel.text = "存储开局发牌";

			itemModel.addChild(this.txtModel);



			let btnDel: egret.Sprite = new egret.Sprite();
			btnDel.graphics.beginFill(0xFF8C00);
			btnDel.graphics.drawRect(0, 0, 150, 50);
			btnDel.graphics.endFill();
			btnDel.alpha = 0.8;
			btnDel.name = "del";
			this.btnItem.addChild(btnDel);
			btnDel.x = 10;
			btnDel.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 100;
			btnDel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			btnDel.touchEnabled = true;

			if (Global.openDell) {
				this.txtDel.text = "开局牌：开";
			} else {
				this.txtDel.text = "开局牌：关";
			}

			btnDel.addChild(this.txtDel);

			this.textFirstSit.type = egret.TextFieldType.INPUT;
			this.textFirstSit.width = 100;
			this.textFirstSit.height = 43;
			this.textFirstSit.x = 10;
			this.textFirstSit.y = 550;
			this.textFirstSit.textColor = 0xffffff;
			this.textFirstSit.text = "0";
			this.textFirstSit.border = true;
			this.textFirstSit.borderColor = 0xffffff;
			this.textFirstSit.restrict = "0-3";
			this.parItem.addChild(this.textFirstSit);

			this.textSit0.type = egret.TextFieldType.INPUT;
			this.textSit0.width = 400;
			this.textSit0.height = 43;
			this.textSit0.x = 10;
			this.textSit0.y = 600;
			this.textSit0.textColor = 0xffffff;
			this.textSit0.text = "";
			this.textSit0.border = true;
			this.textSit0.borderColor = 0xffffff;
			this.textSit0.restrict = "0-9,";
			this.parItem.addChild(this.textSit0);

			this.textSit1.type = egret.TextFieldType.INPUT;
			this.textSit1.width = 400;
			this.textSit1.height = 43;
			this.textSit1.x = 10;
			this.textSit1.y = 650;
			this.textSit1.textColor = 0xffffff;
			this.textSit1.text = "";
			this.textSit1.border = true;
			this.textSit1.borderColor = 0xffffff;
			this.textSit1.restrict = "0-9,";
			this.parItem.addChild(this.textSit1);

			this.textSit2.type = egret.TextFieldType.INPUT;
			this.textSit2.width = 400;
			this.textSit2.height = 43;
			this.textSit2.x = 10;
			this.textSit2.y = 700;
			this.textSit2.textColor = 0xffffff;
			this.textSit2.text = "";
			this.textSit2.border = true;
			this.textSit2.borderColor = 0xffffff;
			this.textSit2.restrict = "0-9,";
			this.parItem.addChild(this.textSit2);

			this.textSit3.type = egret.TextFieldType.INPUT;
			this.textSit3.width = 400;
			this.textSit3.height = 43;
			this.textSit3.x = 10;
			this.textSit3.y = 750;
			this.textSit3.textColor = 0xffffff;
			this.textSit3.text = "";
			this.textSit3.border = true;
			this.textSit3.borderColor = 0xffffff;
			this.textSit3.restrict = "0-9,";
			this.parItem.addChild(this.textSit3);
		}
		private strToCard(str: string): proto.HandCards {
			var handC: proto.HandCards = new proto.HandCards();
			var tempArr0: Array<string> = str.split(",");
			handC.cards = [];
			var tempC0: Array<proto.CardInfo> = [];
			for (var i: number = 0; i <= tempArr0.length; i++) {
				var cardId: number = parseInt("0x" + tempArr0[i]);
				var cardInfo: proto.CardInfo = new proto.CardInfo();
				cardInfo.CardID = cardId;
				if (cardId != 0 && isNaN(cardId) == false) {
					handC.cards.push(cardInfo);
				} else {
					console.log("");

				}


			}
			return handC;
		}
		private onClick(e: egret.TouchEvent): void {
			console.log("点击开局发牌"+e.target.name);
			if (e.target.name == "kai") {
				this.parItem.visible = true;
				return;
			} else if (e.target.name == "shou") {
				this.parItem.visible = false;
				return;
			} else if (e.target.name == "model") {
				// if(this.showMode==1){
				// 	this.showMode=0;
				// 	this.txtModel.text = "下一张";
				// }else{
				// 	this.showMode=1;
				// 	this.txtModel.text = "开局发牌";
				// }
				var zhuangSit: number = 0;
				if (this.textFirstSit.text != "") {
					zhuangSit = Number(this.textFirstSit.text);
				}
				var handCards: Array<proto.HandCards> = [];
				var hand0: proto.HandCards = new proto.HandCards();

				if (this.textSit0.text != "") {
					hand0 = this.strToCard(this.textSit0.text);
					hand0.seat = 0;

				}
				var hand1: proto.HandCards = new proto.HandCards();

				if (this.textSit1.text != "") {
					hand1 = this.strToCard(this.textSit1.text);
					hand1.seat = 1;
				}
				var hand2: proto.HandCards = new proto.HandCards();

				if (this.textSit2.text != "") {
					hand2 = this.strToCard(this.textSit2.text);
					hand2.seat = 2;
				}
				var hand3: proto.HandCards = new proto.HandCards();

				if (this.textSit3.text != "") {
					hand3 = this.strToCard(this.textSit3.text);
					hand3.seat = 3;
				}

				handCards.push(hand0);
				handCards.push(hand1);
				handCards.push(hand2);
				handCards.push(hand3);
				Global.zhuangSit = zhuangSit;
				// Global.handCardsFP = handCards;
				//room.RoomWebSocket.instance().roomSender.ReqZxiaPai(Global.zhuangSit,Global.handCardsFP);
				return;
			} else if (e.target.name == "del") {
				if (Global.openDell) {
					Global.openDell = false;
					this.txtDel.text = "开局牌：关";
				} else {
					Global.openDell = true;
					this.txtDel.text = "开局牌：开";
				}
				return;
			}
			let btn: egret.Sprite = e.target;

			room.RoomWebSocket.instance().roomSender.ReqZhuaPai(Number(btn.name));


		}
	}
}