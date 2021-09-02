class HitprocalMode {
		public constructor() {
		}
		//注单号
		public id:string = "";
		//创建时间
		public createtime_string:string = "";
		//局号
		public roundid:string = "";
		//身份 1为庄，2为闲，其他显示“--”
		public isbanker:string = "--";
		//实际输赢额   最大10个字符，接口返回内容中的“money”+“servicemoney”。
		public money:number = 0;
		public servicemoney:number = 0;
		public info1:number = 0;
		public setData(data:any):void
		{
			for( let key in data )
			{
				if( this[key] != undefined && typeof data[key] != "function" )
					this[key] = data[key];
			}
		}
			
	}