module game {
	export class BaseHandCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		private imgBack:eui.Image = new eui.Image();
		private imgCard:eui.Image = new eui.Image();
		/*p:方位 index:牌的索引 value:牌值 state:0 暗牌 1亮牌 isDQ:是否定缺牌*/
		public setCard(p:number,index:number,value:number,state:number):void{
			let g:eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			this.imgCard.horizontalCenter = 0;
			if(p == 0){//左
				if(state == 0){
					this.imgBack.source = "card_hand_L";
				}else{
					this.imgBack.source = "card_hu_L";
					this.imgCard.source = "9w_png";
					this.imgCard.scaleX = 0.5;
					this.imgCard.scaleY = 0.5;
					this.imgCard.rotation = 90;
					this.imgCard.skewY = 7;
					this.imgCard.horizontalCenter = -5;
					this.imgCard.verticalCenter = -13;
				}
			}
			if(p == 1){//上
				if(state == 0){
					this.imgBack.source = "card_hand_U";
				}else{
					this.imgBack.source = "card_hu_U";
					this.imgCard.source = "9w_png";
					this.imgCard.scaleX = -0.45;
					this.imgCard.scaleY = -0.45;
					this.imgCard.verticalCenter = -12;
				}
			}
			if(p == 2){//右
				if(state == 0){
					this.imgBack.source = "card_hand_L";
					this.imgBack.scaleX = -1;
				}else{
					this.imgBack.source = "card_hu_L";
					this.imgBack.scaleX = -1;
					this.imgCard.source = "9w_png";
					this.imgCard.scaleX = 0.5;
					this.imgCard.scaleY = 0.5;
					this.imgCard.rotation = -90;
					this.imgCard.skewY = -7;
					this.imgCard.horizontalCenter = 5;
					this.imgCard.verticalCenter = -13;
				}
			}
			if(p == 3){
				if(state == 0){
					this.imgBack.source = "card_hand_D";
					this.imgCard.source = "9w_png";
					this.imgCard.verticalCenter = 10;
				}else{
					this.imgBack.source = "card_hu_D";
					this.imgCard.source = "9w_png";
					this.imgCard.verticalCenter = -10;
				}
			}
			
		}
	}
}