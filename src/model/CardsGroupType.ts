module game {
	export class CardsGroupType {
		public constructor() {
		}
		/**
		 *抓牌
			* **/
		public static CATCH: number = 1;
		/**
		 *正常打牌（非摸打）
			* **/
		public static PLAY: number = 2;
		/**
		 *理牌补花
			* **/
		public static BUHUA: number = 3;
		/**
		 *吃牌
			* **/
		public static CHI: number = 4;

		/**
		 *碰牌
			* **/
		// 杠摇
		public static BGANGYAO: number = 24;
		public static MGANGYAO: number = 26;
		public static AGANGYAO: number = 27;
		// 起手胡
		public static QISHOUHU: number = 25;
		public static PENG: number = 5;
		/**
		 *明杠牌
			* **/
		public static MINGGANG: number = 6;
		/**
		 *暗杠牌
			* **/
		public static ANGANG: number = 7;
		/**
		 *胡牌
			* **/
		public static HU: number = 8;
		/**
		 *摸牌补花
			* **/
		public static BUHUAMO: number = 9;
		/**
		 *摸牌杠牌
			* **/
		public static GANGMO: number = 10;
		/** 
		 *过
			* **/
		public static NO_OPERATION: number = 11;
		/**
		 *手牌
			* **/
		public static HANDCARDS: number = 12;

		/**
		 *补杠
			* **/
		public static BUGANG: number = 13;
		/**
		 *抢杠胡
			* **/
		public static MOPLAY: number = 14;

		/**
		 *听
		* **/
		public static CALL: number = 15;
		/*天胡*/
		public static TIHU: number = 16;
		/**
		 * 客户端统一杠的现实
		 * */
		public static GANG: number = 17;

		public static MJ_OperationType = {
			摸牌 : 0,	//摸牌
			手切 : 1,	//手切，打出的是手中的牌，吃碰之后都是手切
			MJ_OT_D_DISCARD : 2,	//摸切，打出的是刚摸到的牌
			MJ_OT_L_CHOW : 3,	//左吃，吃的牌是最小点, 例如45吃3
			MJ_OT_M_CHOW : 4,	//中吃，吃的牌是中间点，例如24吃3
			MJ_OT_R_CHOW : 5,	//右吃，吃的牌是最大点，例如12吃3
			MJ_OT_PONG : 6,	//碰
			MJ_OT_C_KONG : 7,	//暗杠
			MJ_OT_E_KONG : 8,	//直杠
			MJ_OT_P_KONG : 9,	//补杠
			MJ_OT_TING : 10,	//听
			MJ_OT_WIN : 11,	//和
			MJ_OT_PASS : 12,	//过
	}

	}
}