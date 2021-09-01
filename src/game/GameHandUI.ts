module game {
	export class GameHandUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		/*四个玩家手牌容器*/
		private gHandCardL:eui.Group = new eui.Group();
		private gHandCardU:eui.Group = new eui.Group();
		private gHandCardR:eui.Group = new eui.Group();
		private gHandCardD:eui.Group = new eui.Group();
		/*四个玩家吃碰杠容器*/
		private gOtherCardL:eui.Group = new eui.Group();
		private gOtherCardU:eui.Group = new eui.Group();
		private gOtherCardR:eui.Group = new eui.Group();
		private gOtherCardD:eui.Group = new eui.Group();
		/*四个玩家胡牌容器*/
		private gHuCardL:eui.Group = new eui.Group();
		private gHuCardU:eui.Group = new eui.Group();
		private gHuCardR:eui.Group = new eui.Group();
		private gHuCardD:eui.Group = new eui.Group();
		public initUI():void{
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.addChild(this.gHuCardL);
			this.addChild(this.gHuCardU);
			this.addChild(this.gHuCardR);
			this.addChild(this.gHuCardD);

			this.addChild(this.gHandCardL);
			this.addChild(this.gHandCardU);
			this.addChild(this.gHandCardR);
			this.addChild(this.gHandCardD);

			this.addChild(this.gOtherCardL);
			this.addChild(this.gOtherCardU);
			this.addChild(this.gOtherCardR);
			this.addChild(this.gOtherCardD);

			/* this.updataHandsByPosition(0,1);
			this.updataHandsByPosition(1,1);
			this.updataHandsByPosition(2,1);
			this.updataHandsByPosition(3,1); */

			this.updataHandsByPosition(0,0);
			this.updataHandsByPosition(1,0);
			this.updataHandsByPosition(2,0);
			this.updataHandsByPosition(3,0);

			for(let n:number = 0;n < 4;n++){
				for(let i:number = 0;i < 3;i++){
					this.createCPGItem(n,i+1);
				}
			}
			
			
		}
		/*sit:玩家座位号 state:暗牌或者亮牌*/
		private updataHandsByPosition(sit:number,state:number):void{
			//let p:number = Global.getUserPosition(sit);
			let p:number = sit;
			let ghand:eui.Group = this.findHandGroup(p);
			this.clearGroup(ghand);
			let index:number = 0;
			let len:number = 5;
			if(len % 3 == 2){//玩家有摸牌牌权
				index = 0;
			}else{
				index = 1;
			}
			for(let i:number = 0;i < len;i++){
				let card:game.BaseHandCardUI = new game.BaseHandCardUI();
				ghand.addChild(card);
				card.setCard(p,i,0,state);
				if(p == 0){
					if(state == 0){
						card.y = i*47;
						card.x -= i*8;
						if(i == len-1 && index == 0){
							card.y += 15;
							card.x -= 4;
						}
					}else{
						card.y = i*48;
						card.x -= i*8;
						if(i == len-1 && index == 0){
							card.y += 15;
							//card.x -= 4;
						}
					}
					
				}
				if(p == 1){
					if(state == 0){
						card.x = i*47;
					}else{
						card.x = i*49;
					}
					card.x = i*47;
					if(i > 0 && index == 0){
						card.x += 10;
					}
				}
				if(p == 2){
					if(state == 0){
						card.y = i*47;
						card.x += i*8;
						if(i > 0 && index == 0){
							card.y += 15;
							card.x += 4;
						}
					}else{
						card.y = i*48;
						card.x += i*8;
						if(i > 0 && index == 0){
							card.y += 15;
							//card.x -= 4;
						}
					}
					
					
				}
				if(p == 3){
					if(state == 0){
						card.x = i*110;
					}else{
						card.x = i*106;
					}
					
					if(i == len-1 && index == 0){
						card.x += 20;
					}
				}
				
			}
			if(p == 0){
				this.gHandCardL.x = 420;
				this.gHandCardL.y = GameConfig.curHeight() - this.gHandCardL.height - 230;
			}
			if(p == 1){
				this.gHandCardU.x = 600;
				this.gHandCardU.y = 100;
			}
			if(p == 2){
				this.gHandCardR.x = GameConfig.curWidth() - 500;
				this.gHandCardR.y = 120;
			}
			if(p == 3){
				this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height - 20;
				this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 100;
			}
		}

		private createCPGItem(p:number,index:number):void{
			let g:eui.Group = this.findOptGroup(p);
			let isAnGang:boolean = true;
			
			let gItem:eui.Group = new eui.Group();
			g.addChild(gItem);
			for(let i:number = 0;i < 4;i++){
				let card:game.BaseOhterCardUI = new game.BaseOhterCardUI();
				gItem.addChild(card);
				card.setCard(p,index,0,isAnGang);
				if(p == 0){
					card.x = -11*i;
					card.y = 45*i;
					if(i == 3){
						card.x = gItem.getChildAt(1).x - 12;
						card.y = gItem.getChildAt(1).y - 18;
					}
				}
				if(p == 1){
					card.x = -42*i;
					if(i == 3){
						card.x = gItem.getChildAt(1).x;
						card.y = -15;
					}
				}
				if(p == 2){
					card.x -= 11*i;
					card.y -= 45*i;
					
					if(i == 3){
						card.x = gItem.getChildAt(1).x + 12;
						card.y = gItem.getChildAt(1).y - 18;
						gItem.addChild(card);
					}else{
						gItem.addChildAt(card,0);
					}
				}
				if(p == 3){
					card.x = i*(card.width-8);
					if(i == 3){
						card.x = gItem.getChildAt(1).x;
						card.y = -18;
					}
				}
			}
			if(p == 0){
				gItem.x -= (g.numChildren - 1) * 34;
				gItem.y = (g.numChildren - 1) * (gItem.height + 10);
				this.gOtherCardL.x = 320;
				this.gOtherCardL.y = 200;
			}
			if(p == 1){
				gItem.x -= (g.numChildren - 1) * 140;
				this.gOtherCardU.y = 70;
				this.gOtherCardU.x = 1300;
			}
			if(p == 2){
				gItem.x -= (g.numChildren - 1) * 32;
				gItem.y -= (g.numChildren - 1) * 160;
				this.gOtherCardR.x = GameConfig.curWidth() - 300;;
				this.gOtherCardR.y = GameConfig.curHeight() - 350;
			}
			if(p == 3){
				gItem.x = (g.numChildren - 1) * (gItem.width+10);
				this.gOtherCardD.x = 350;
				this.gOtherCardD.y = GameConfig.curHeight() - 120;
			}
		}

		private clearGroup(g:eui.Group):void{
			while(g.numChildren > 0){
				let item = g.removeChildAt(0);
				item = null ;
			}
		}
		
		private findHandGroup(p:number):eui.Group{
			if(p == 0){
				return this.gHandCardL;
			}
			if(p == 1){
				return this.gHandCardU;
			}
			if(p == 2){
				return this.gHandCardR;
			}
			if(p == 3){
				return this.gHandCardD;
			}
		}
		private findOptGroup(p:number):eui.Group{
			if(p == 0){
				return this.gOtherCardL;
			}
			if(p == 1){
				return this.gOtherCardU;
			}
			if(p == 2){
				return this.gOtherCardR;
			}
			if(p == 3){
				return this.gOtherCardD;
			}
		}
		private findHuGroup(p:number):eui.Group{
			if(p == 0){
				return this.gHuCardL;
			}
			if(p == 1){
				return this.gHuCardU;
			}
			if(p == 2){
				return this.gHuCardR;
			}
			if(p == 3){
				return this.gHuCardD;
			}
		}
		private clearAllGroup():void{
			this.clearGroup(this.gHandCardD);
			this.clearGroup(this.gHandCardL);
			this.clearGroup(this.gHandCardR);
			this.clearGroup(this.gHandCardU);

			this.clearGroup(this.gOtherCardD);
			this.clearGroup(this.gOtherCardL);
			this.clearGroup(this.gOtherCardR);
			this.clearGroup(this.gOtherCardU);

			this.clearGroup(this.gHuCardD);
			this.clearGroup(this.gHuCardL);
			this.clearGroup(this.gHuCardR);
			this.clearGroup(this.gHuCardU);
		}
	}
}