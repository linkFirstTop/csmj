module game {
	export class GamePoolUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
        private gLeftPool:eui.Group = new eui.Group();
		private gUpPool:eui.Group = new eui.Group();
		private gRightPool:eui.Group = new eui.Group();
		private gDownPool:eui.Group = new eui.Group();

        public initCard():void{
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.addChild(this.gLeftPool);
			this.addChild(this.gUpPool);
			this.addChild(this.gRightPool);
			this.addChild(this.gDownPool);

			this.gLeftPool.x = 740;
			this.gLeftPool.y = 320;

            this.gUpPool.x = 1060;
            this.gUpPool.y = 280;

			this.gRightPool.x = 1130;
			this.gRightPool.y = 540;


            this.gDownPool.x = 800;
            this.gDownPool.y = 580;

			this.clearCardPool();

		
			//this.createPool();//测试代码
			for(let i:number = 0;i < 18;i++){
                this.addCardToPool(0);
            }
            for(let i:number = 0;i < 18;i++){
                this.addCardToPool(1);
            }
			for(let i:number = 0;i < 6;i++){
                this.addCardToPool(2);
            }
            for(let i:number = 0;i < 18;i++){
                this.addCardToPool(3);
            }
		}
        public addCardToPool(sit:number):void{
            let p:number = sit
            let g:eui.Group = this.findGroupByPosition(p);
            let len:number = g.numChildren;
			
            let item:game.BasePoolCardUI = new game.BasePoolCardUI();
            item.setCard(p,len,0);
            g.addChild(item);
            let row:number = Math.floor(len/6);//行
            let col:number = len%6;//列
            if(p == 0){
				item.y = col * (item.height-25);
				item.x -= (col * 4.5 + row*(item.width-13)); 
				g.addChildAt(item,row+col);
				if(len== 6 || len == 12 || len == 18){
					g.addChildAt(item,0);
				}
            }
            if(p == 1){
                item.x -= col*(item.width-4);
                item.y -= row * (item.height-18);
				g.addChildAt(item,row);
				if(len== 6 || len == 12 || len == 18){
					g.addChildAt(item,0);
				}
            }
            if(p == 2){
				item.y -= col * (item.height-25);
				item.x = (-col * 2 + row*(item.width-13)); 
				g.addChildAt(item,row);
				if(len== 5 || len == 11 || len == 17){
					g.addChildAt(item,0);
				}
            }
            if(p == 3){
                item.x = col*(item.width-4);
                item.y = row * (item.height-20);
                
            }
        }
        private findGroupByPosition(p:number):eui.Group{
			if(p == 0){
				return this.gLeftPool;
			}
			if(p == 1){
				return this.gUpPool;
			}
			if(p == 2){
				return this.gRightPool;
			}
			if(p == 3){
				return this.gDownPool;
			}
		}
		private clearCardPool():void{
			this.clearCardGroup(this.gLeftPool);
			this.clearCardGroup(this.gUpPool);
			this.clearCardGroup(this.gRightPool);
			this.clearCardGroup(this.gDownPool);
		}
		private clearCardGroup(g:eui.Group):void{
			while(g.numChildren > 0){
				let item = g.removeChildAt(0);
				item = null;
			}
		}
    }
}