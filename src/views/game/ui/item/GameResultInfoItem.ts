module game {
	export class GameResultInfoItem extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private lbInfo:eui.Label;
		private lbCoin:eui.Label;
		private lbSeat:eui.Label;

		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public setInfo(info:proto.Fan):void{
			let str:string = this.getTypeName(info.fanxing);
			this.lbInfo.text=str;
			this.lbCoin.text=info.taishu+Global.dic["台"];
		}
		private getUserPosition(p:number):string{
			let str:string = "";
			if(p == 0){
				str = "上家";
			}else if(p == 1){
				str = "对家";
			}else if(p == 2){
				str = "下家";
			}else if(p == 3){
				str = "本家";
			}
			return str;
		}
		/*1刮风 2下雨 3自摸 4胡  5花猪  6大叫 7呼叫转移 8补杠 9退税*/
		private getTypeName(type:number):string{
			let str:string = "";
			if(Global.language=="cn"){
				switch(type){
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
			}else if(Global.language=="tc"){
				switch(type){
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

			}else if(Global.language=="en"){
				switch(type){
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