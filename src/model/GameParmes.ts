module game {
	export class GameParmes {
		public constructor() {
		}
		/**
		 *当前牌墙中牌头的索引 
			*/
		public static curWallHeadIndex: number = 0;
		/**
		 *当前牌墙中牌尾的索引 
			*/
		public static curWallTailIndex: number = 0;

		/**
		 * 游戏阶段
		 * **/
		public static gameStage: number = 0;
		/**
		 * 第一个操作的玩家座位号（庄家）
		 * **/
		public static firstSit: number = -1;
		/**
		 * 游戏类型（0=1副，1=1圈，2=1局）
		 * **/
		public static gameType: number = 0;
		/**
		 * 下家吃碰杠考虑时间
		 * **/
		public static gameNextChiPengGangTime: number = 0;
		/**
		 * 非下家吃碰杠考虑时间
		 * **/
		public static gameNotNextChiPengGangPengTime: number = 0;
		/**
		 * 游戏胡牌时间
		 * **/
		public static gameHuTime: number = 0;
		/**
		 * 游戏打牌时间
		 * **/
		public static gamePlayTime: number = 15;

		public static hszTime: number = 0;

		public static dqTime: number = 0;
		/**
		 * 剩余托管次数
		 * **/
		public static TrustNum: number = 0;
		/**
		 * 游戏打牌延时时间
		 * **/
		public static gameDelayTime: number = 0;
		/**
		 *客户端记录当前超时托管次数 
			*/
		public static nCurTrustCount: number = 0;

		public static isCurTing : boolean = false;

		/**
		* 游戏轮
		* **/
		public static  gameTurn:number = 0;

		/**
		 *游戏打牌延时次数 
			*/
		public static gameDelayRestrictions: number = 0;
		/**
		 *托管限制次数 
			*/
		public static gameTrustRestrictions: number = 0;
		/**
		 * 游戏当前第几局
		 * **/
		public static gameBureau: number = 0;
		/**
		 * 游戏当前第几圈
		 * **/
		public static gameRing: number = 0;
		/**
		 * 游戏当前第几副
		 * **/
		public static gamePair: number = 0;
		/**
		 * 第一次出牌时间
		 * **/
		public static gameFirstSendTime: number = 0;
		/**
		 * 吃碰杠后剩余出牌的考虑时间
		 * **/
		public static chiPengGangSurplusTime: number = 15;

		/**
		 * 游戏吃碰杠打牌延时操作
		 */
		public static timeOutNum: number = 2000;

		/**
		 * 理牌结束超时
		 * **/
		public static ArrangementCardsOverTime: number;
		/**
		 * 结算自动开始超时
		 * **/
		public static GoOnGaneTime: number;

		/**
		 *出牌与吃碰杠时间间隔
			*/
		public static oldTimeCount: number;
		/*是否已经胡牌*/
		public static isHu: boolean = false;
		/*是否流局*/
		public static isGameFlower: boolean = true;
		/**
		 *是否听牌 
			*/
		public static isGameCall: boolean = false;
		/**
		 *断线回来后，玩家的状态    ，0：正常状态，1：听牌 2:胡 3：认输
			*/
		public static onBreakPlayerState: Array<number> = [];
		/**
		 * 胡牌顺序 用来展示几胡
		 * 
		 */
		public static hu_player: Array<any> = [];
		/**
		 *断线回来后，玩家的胡的牌ID
			*/
		public static onBreakPlayerHuCards: Array<Array<number>> = [];
		//断线回来换三张是否完成
		public static nHSZComplete: number = -1;
		//断线回来定缺是否完成
		public static arrDQState: Array<number> = [];
		//胡牌类型
		public static nHuType: number = 0;
		//是否点击听按钮
		public static hasClickTing: boolean = false;

		public static initData(): void {
			this.isGameCall = false;
			this.isHu = false;
			this.hu_player = [];
			this.onBreakPlayerState = [];
			this.onBreakPlayerHuCards = [];
			this.nHSZComplete = -1;
			this.arrDQState = [];
			this.nHuType = 0;
			this.isGameFlower = true;
		}

		//花色
		public static getHua(card: game.CardInfo): number {
			if (card.CardID == 0 || card.CardID == -1) return -1;//牌背
			var hua: number = (card.CardID >> 8) & 0x0F;
			return hua;
		}
		//牌值
		public static getValue(card: game.CardInfo): number {
			if (card.CardID == 0 || card.CardID == -1) return -1;//牌背
			var value: number = (card.CardID >> 4) & 0x0F;
			return value;
		}
		public static getCardID(card: game.CardInfo): number {
			//对应的帧数
			var pszType: Array<number> = [1, 10, 19];//["万" , "条" , "饼"];
			var pszWind: Array<number> = [28, 30, 29, 31];//["东风", "南风", "西风", "北风"];
			var pszJian: Array<number> = [32, 33, 34];//["红中", "绿发", "白板"]
			var pszFlower: Array<number> = [35, 36, 37, 38];//["梅" , "兰" , "竹" , "菊"]
			var pszSeason: Array<number> = [39, 40, 41, 42];//["春" , "夏" , "秋" , "冬"];

			var nColor: number = GameParmes.getHua(card);
			var nValue: number = GameParmes.getValue(card);
			// 根据花色、点数、ID号构造牌的名字
			switch (nColor) {
				case 0:	// 万
				case 1:	// 条
				case 2:	// 饼
					var nID: number = nValue + pszType[nColor];
					break;
				case 3:	// 风牌（东南西北）
					nID = pszWind[nValue];
					break;

				case 4:	// 箭牌（中发白）
					nID = pszJian[nValue];
					break;

				case 5:	// 梅兰竹菊
					nID = pszFlower[nValue];
					break;

				case 6:	// 春夏秋冬
					nID = pszSeason[nValue];
					break;
			}
			return nID;
		}
		//花色
		public static getHuaByNum(card: number): number {
			if (card == 0 || card == -1) return -1;//牌背
			var hua: number = (card >> 8) & 0x0F;
			return hua;
		}
		//牌值
		public static getValueByNum(card: number): number {
			if (card == 0 || card == -1) return -1;//牌背
			var value: number = (card >> 4) & 0x0F;
			return value;
		}
		public static getCardIDByID(card: number): number {
			//对应的帧数
			var pszType: Array<number> = [1, 10, 19];//["万" , "条" , "饼"];
			var pszWind: Array<number> = [28, 30, 29, 31];//["东风", "南风", "西风", "北风"];
			var pszJian: Array<number> = [32, 33, 34];//["红中", "绿发", "白板"]
			var pszFlower: Array<number> = [35, 36, 37, 38];//["梅" , "兰" , "竹" , "菊"]
			var pszSeason: Array<number> = [39, 40, 41, 42];//["春" , "夏" , "秋" , "冬"];

			var nColor: number = GameParmes.getHuaByNum(card);
			var nValue: number = GameParmes.getValueByNum(card);
			// 根据花色、点数、ID号构造牌的名字
			switch (nColor) {
				case 0:	// 万
				case 1:	// 条
				case 2:	// 饼
					var nID: number = nValue + pszType[nColor];
					break;
				case 3:	// 风牌（东南西北）
					nID = pszWind[nValue];
					break;

				case 4:	// 箭牌（中发白）
					nID = pszJian[nValue];
					break;

				case 5:	// 梅兰竹菊
					nID = pszFlower[nValue];
					break;

				case 6:	// 春夏秋冬
					nID = pszSeason[nValue];
					break;
			}
			return nID;
		}
		private static fanList: Array<string> = [];
		public static initFanList(): void {
			this.fanList[103] = "4个杠";
			this.fanList[10] = "平胡";
			this.fanList[11] = "自摸";
			this.fanList[12] = "杠上开花";
			this.fanList[13] = "杠上炮";
			this.fanList[14] = "抢杠";
			this.fanList[101] = "根";
			this.fanList[102] = "杠";
			this.fanList[15] = "对对胡";
			this.fanList[16] = "金钩钓";
			this.fanList[17] = "海底捞月";
			this.fanList[21] = "清一色";
			this.fanList[22] = "七对";
			this.fanList[23] = "全带幺";
			this.fanList[31] = "清对";
			this.fanList[33] = "龙七对";
			this.fanList[41] = "清七对";
			this.fanList[42] = "清带幺";
			this.fanList[44] = "清金钩钓";
			this.fanList[55] = "清龙七对";
			this.fanList[56] = "天胡";
			this.fanList[57] = "地胡";
			this.fanList[58] = "人胡";
			this.fanList[59] = "十八罗汉";
			this.fanList[60] = "清十八罗汉";
		}
		public static fanIdConvertString(id: number): string {
			if (this.fanList.length == 0) {
				this.initFanList();
			}
			var fanStr: string = this.fanList[id];
			if (fanStr == undefined || fanStr == "") {
				fanStr = id + "";
			}
			return fanStr;
		}

	}
}