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
		public setInfo(info:any):void{
			let str:string = Global.getTypeName(info.fanxing);
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
	
	}
}