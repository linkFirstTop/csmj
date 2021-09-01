module game {
	export class BaseOhterCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		private imgBack:eui.Image = new eui.Image();
		private imgCard:eui.Image = new eui.Image();

		/*p:方位 index:牌的索引 value:牌值 isAnGang:是否暗杠*/
		public setCard(p:number,index:number,value:number,isAnGang:boolean):void{
			let g:eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			if(p == 0){
				if(isAnGang){
					this.imgBack.source = "card_act_LA";
				}else{
					this.imgBack.source = "card_act_L"
					this.imgCard.source = "9w_png";
					this.imgCard.rotation = 90;
					this.imgCard.scaleX = this.imgCard.scaleY = 0.5;
					this.imgCard.horizontalCenter = -8;
					this.imgCard.verticalCenter = -14;
					this.imgCard.skewY = 12;
					
				}
			}
			if(p == 1){
				if(isAnGang){
					this.imgBack.source = "card_act_UA1";
				}else{
					this.imgBack.source = "card_act_U1"
					this.imgCard.source = "9w_png";
					this.imgCard.scaleX = this.imgCard.scaleY = -0.35;
					this.imgCard.horizontalCenter = 0;
					this.imgCard.verticalCenter = -14;
					
				}
			}
			if(p == 2){
				if(isAnGang){
					this.imgBack.source = "card_act_LA";
					this.imgBack.scaleX = -1;
				}else{
					this.imgBack.source = "card_act_L"
					this.imgBack.scaleX = -1;
					this.imgCard.source = "9w_png";
					this.imgCard.rotation = -90;
					this.imgCard.scaleX = this.imgCard.scaleY = 0.5;
					this.imgCard.horizontalCenter = 8;
					this.imgCard.verticalCenter = -12;
					this.imgCard.skewY = -12;
				}
			}
			if(p == 3){
				if(isAnGang){
					this.imgBack.source = "card_act_DA1";
				}else{
					this.imgBack.source = "card_act_D1"
					this.imgCard.source = "9w_png";
					this.imgCard.scaleX = this.imgCard.scaleY = 0.5;
					this.imgCard.horizontalCenter = 0;
					this.imgCard.verticalCenter = -10;
					
				}
			}
		}
    }
}