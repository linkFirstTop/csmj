module game {
	export class SoundModel {
		public constructor() {
		}
		public static HU:string = "hu_mp3";
		public static ZIMO:string = "zimo_mp3";
		public static PENG:string = "peng_mp3";
		public static CHI:string = "chi_mp3";
		public static GANG:string = "gang_mp3";
		public static WIN:string = "win_mp3";
		public static LOSE:string = "lose_mp3";
		public static CPGEFFECT:string = "cpgEffect_mp3";
		public static CHU:string = "sendCard_mp3";
		public static ZHUA:string = "zhuapai_mp3";
		public static TIME:string = "time_mp3";
		public static playCardSound(CardID:number):void{
			let index:number = CardID + 1;
			if(index >= 1 && index <= 9){
				sound.SoundManager.getInstance().playEffect(index+"w_mp3");
				return ;
			}
			if(index >= 10 && index <= 18){
				sound.SoundManager.getInstance().playEffect((index-9)+"t_mp3");
				return ;
			}
			if(index >= 19 && index <= 27){
				sound.SoundManager.getInstance().playEffect((index-18)+"b_mp3");
				return ;
			}
			// var pszWind:Array<number>=[28, 30, 29, 31];//["东风", "南风", "西风", "北风"];
			// var pszJian:Array<number>=[32, 33, 34];//["红中", "绿发", "白板"]
			// var pszFlower:Array<number>=[35 , 36 , 37 , 38];//["梅" , "兰" , "竹" , "菊"]
			// var pszSeason:Array<number>=[39 , 40 , 41 , 42];//["春" , "夏" , "秋" , "冬"];
			var playStr:string="";
			switch( index ){
				case 28 :	// 
					playStr="f_1";
					break ;
				case 30:	//
					playStr="f_2"; 
					break ;
				case 29 :	// 
					playStr="f_3";
					break ;
				case 31 :	// 
					playStr="f_4";
					break ;
				
				case 32 :	// 
					playStr="f_5";
					break ;
				
				case 33 :	// 
					playStr="f_6";
					break ;
				
				case 34 :	// 
					playStr="f_7";
					break ;
				case 35 :	// 

					break ;
				
				case 36 :	// 
					
					break ;
				
				case 37 :	// 
					
					break ;
				case 38 :	// 
					
					break ;

				case 39 :	// 
					
					break ;
				case 40 :	// 
					
					break ;
				case 41 :	// 
					
					break ;
				case 42 :	// 
					
					break ;
			}
			if(playStr!=""){
				sound.SoundManager.getInstance().playEffect(playStr+"_mp3");
			}
		}
		public static playEffect(str:string):void{
			sound.SoundManager.getInstance().playEffect(str);
		}
		
	}
}