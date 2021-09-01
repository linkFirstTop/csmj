module comm {
	export class DragonAnim extends egret.DisplayObjectContainer {
		private static _ins:DragonAnim;
		public static get ins():DragonAnim{
			if(DragonAnim._ins==null){
				DragonAnim._ins = new DragonAnim();
			}
			return DragonAnim._ins;
		}
		private dataArray:Array<string>=[];
		public topLayer:egret.DisplayObjectContainer;
		public constructor() {
			super();
			
			for(var i:number=0;i<this.dataArray.length;i++){
				let str:string = this.dataArray[i];
				if(str == "cpts"||str == "dqSelect"||str == "hluolei"||str == "ljf"||str == "txhhxd"||str == "txshxd"||str == "xy"||str == "zmbd"){

				}else{
					str += "_"+Global.language;
				}
				var	dragonbonesData = RES.getRes(str +"_ske_json" );
				var	textureData = RES.getRes( str+"_tex_json" );  
				var	texture = RES.getRes( str+"_tex_png" );
				dragonBones.EgretFactory.factory.parseDragonBonesData(dragonbonesData);
				dragonBones.EgretFactory.factory.parseTextureAtlasData(textureData, texture);
			}

		}
		public testAnim():void{
			for(var i:number=0;i<this.dataArray.length;i++){
				let str:string = this.dataArray[i];
				console.log(str);
				if(str == "cpts"||str == "dqSelect"||str == "hluolei"||str == "ljf"||str == "txhhxd"||str == "txshxd"||str == "xy"||str == "zmbd"){

				}else{
					this.playAnimByName(str,1);
				}
				
			}
		}
		public getAnimByName(str:string):dragonBones.EgretArmatureDisplay{
			return dragonBones.EgretFactory.factory.buildArmatureDisplay(str);
		}
		public playAnimByPosition(str:string,xpos:number,ypos:number):void{
			let ar:dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay(str);
			this.topLayer.addChild(ar);
			ar.animation.play(str,1);
			ar.x = xpos;
			ar.y = ypos;
			dragonBones.Armature.prototype.eventDispatcher.addDBEventListener( dragonBones.EgretEvent.COMPLETE, this.onPlayCompletedAnimation, this );
			//ar.armature.addEventListener( dragonBones.EgretEvent.COMPLETE, this.onPlayCompletedAnimation, this );
		}
		public playAnimByName(str:string,p:number):void{
			let pos:any = this.getPoint(str,p);
			let ar:dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay(str);
			this.topLayer.addChild(ar);
			ar.animation.play(str,1);
			ar.x = pos.x;
			ar.y = pos.y;
			//ar.armature.addEventListener( dragonBones.EgretEvent.COMPLETE, this.onPlayCompletedAnimation, this );
		}
		
		private onPlayCompletedAnimation( event: dragonBones.EgretEvent){
			/*let keyname: string = event.armature.name;
			let item:dragonBones.Armature = event.armature;
			egret.setTimeout(function(){
				this.topLayer.removeChild( item.display );
				item.dispose();
			},this,400); */ 
		}
		private getPoint(str:string,p:number):any{
			
			return {"x":GameConfig.curWidth()/2,"y":GameConfig.curHeight()/2}
		}
		
	}
}