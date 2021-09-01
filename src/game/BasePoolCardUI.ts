module game {
	export class BasePoolCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		private imgBack:eui.Image = new eui.Image();
		private imgCard:eui.Image = new eui.Image();

        /*p:方位 index:牌的索引 value:牌值 */
		public setCard(p:number,index:number,value:number):void{
			let g:eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
            let row:number = Math.floor(index/6);//行
            let col:number = index%6;//列
            if(p == 0){
                this.imgBack.source = "card_pool_L3";
            }
            if(p == 1){
                this.imgBack.source = "card_pool_U33";
                this.imgCard.source = "9w_png";
                this.imgCard.scaleX = this.imgCard.scaleY = -0.38;
                this.imgCard.horizontalCenter = 0;
                this.imgCard.verticalCenter = -12;
            }
            if(p == 2){
                this.imgBack.source = "card_pool_L1";
                this.imgBack.scaleX = -1;
            }
            if(p == 3){
                this.imgBack.source = "card_pool_D13";
                this.imgCard.source = "9w_png";
                this.imgCard.scaleX = this.imgCard.scaleY = 0.48;
                this.imgCard.horizontalCenter = 0;
                this.imgCard.verticalCenter = -12;
            }
        }
    }
}