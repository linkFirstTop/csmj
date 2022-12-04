module game {
	export class GamePlayData {
		public constructor() {
		}
		//第一次色子数
		public static firstDice: string = "";
		//第一次色子的座位号
		public static firstDiceSit: number = -1;
		//第二次色子数
		public static secondDice: string = "";
		//第二次色子的座位号
		public static secondDiceSit: number = -1;
		//当前牌墙的索引应该从多少开始
		public static firstCardsIndexes: number = -1;

		//前牌墙的索引
		public static CardsWall_Head_Index: number = 0;
		//尾牌墙的索引
		public static CardsWall_Tail_Index: number = 0;//共144张牌

		public static CardsWall_Hua_Index: number = 0;

		//牌桌上记录最后一次摸的牌(有点问题，sit值是当前玩家出牌值，后来强制循环找到该cardid重新赋值)
		public static Current_Card: game.CardInfo = new game.CardInfo();
		//牌桌上最后一次打出的牌
		// public static Catch_Card: game.CardInfo = new game.CardInfo();
		/**当前摸牌的人或者吃碰杠人的座位号*/
		public static playingSeat: number = -1;
		//吃牌
		public static Chi_Groups: Array<CardsGroupInfo> = [];
		//碰牌
		public static Peng_Groups: Array<CardsGroupInfo> = [];
		//杠牌
		public static Gang_Groups: Array<CardsGroupInfo> = [];
		//胡牌
		public static Hu_Groups: Array<CardsGroupInfo> = [];
		//杠摇
		public static Gangyao_Groups: Array<CardsGroupInfo> = [];
		//起手胡
		public static QiShouHu_Groups: Array<CardsGroupInfo> = [];
		public static Call_Groups: Array<any> = [];
		public static isTuoguan: boolean = false;
		//服务器的推荐换三张与玩家选择
		// public static HSZRecommend: Array<proto.CardInfo> = [];
		// public static HSZUserChoose: Array<proto.CardInfo> = [];
		//换完后的牌
		public static HSZGetCards: Array<any> = [];
		public static tingData: Array<boolean> = [false, false, false, false];
		//是否加入了三张牌
		public static isAddHuanSanZhang: boolean = false;

		public static arrHandCards: Array<any> = [];	


		public static arrOtherCards: Array<any> = [[], [], [], []];

		public static arrPoolCards: Array<any> = [[], [], [], []];

		public static arrLPCards: Array<Array<number>> = [];//亮牌数组 用于听牌张数判断

		public static MJ_Operation: Array<room.MJ_Operation> = [];
		/**
		 * 玩家听
		 */
		public static isSelfTing : boolean = false;

		/*初始化数据*/
		public static initData(): void {
			GamePlayData.firstCardsIndexes = -1;
			GamePlayData.CardsWall_Head_Index = 0;
			GamePlayData.CardsWall_Tail_Index = 0;
			GamePlayData.CardsWall_Hua_Index = 0;

			GamePlayData.Peng_Groups = [];
			GamePlayData.Gang_Groups = [];
			GamePlayData.Gangyao_Groups = [];
			GamePlayData.Hu_Groups = [];
			GamePlayData.Call_Groups = [];
			GamePlayData.QiShouHu_Groups=[];
			// GamePlayData.HSZRecommend = [];
			// GamePlayData.HSZUserChoose = [];
			GamePlayData.HSZGetCards = [];
			GamePlayData.arrHandCards = [];
		
			GamePlayData.arrOtherCards = [[], [], [], []];
			GamePlayData.arrPoolCards = [[], [], [], []];
			GamePlayData.arrLPCards = [];
			game.GamePlayData.tingData = [false, false, false, false];
			GamePlayData.isAddHuanSanZhang = false;
			GamePlayData.isTuoguan = false;
			GameParmes.nHuType = 0;
		}

		/**
		 * 保存色子信息
		 * */
		public static SaveDice(FirstDice: string, SecondDice: string, FirstSit: number, SecondSit: number, FirstCardsIndexes: number): void {
			this.firstDice = FirstDice;
			this.secondDice = SecondDice;
			this.firstDiceSit = FirstSit;
			this.secondDiceSit = SecondSit;
			this.firstCardsIndexes = FirstCardsIndexes;
		}

		/**
		 * 记录最后一次摸的牌
		 * */
		//  public static SaveCurrentCard(cardid: number, sit: number): game.CardInfo {
		// 	this.Current_Card.CardID = cardid;
		// 	this.Current_Card.Sit = sit;
		// 	return this.Current_Card;
		// }

		/**
		 * 根据发牌数据创建手牌
		 * */
		public static SaveHandCarsd(arr: Array<room.IVGUserInfo>): void {
			game.GamePlayData.arrHandCards = null;
	
			const array = [[], [], [],[]];
			arr.forEach((e, i) => {
				const tiles = [...e.tileSets[0].Tiles];
				const arrTmp = [];
				const ln = tiles.length;
				for (let j = 0; j < ln; j++) {
					// console.log(j, tiles[j])
					let card: CardInfo = new CardInfo();
					card.CardID = tiles[j];
					card.Sit = e.userPos.seatID;
					arrTmp[j] = card;
				}

				let p =  Global.getUserPosition(e.userPos.seatID) // - 1;
				array[p] = arrTmp;
			})
			game.GamePlayData.arrHandCards = array;
	
		}

		//结算手牌数据
		public static SaveResultEnd(body:  Array<any>): void {
			// console.log("亮手牌");
			// for (let i: number = 0; i < body.playerCards.length; i++) {
			// 	if (body.playerCards[i].seat != Global.userSit) {
			// 		let arrCards: Array<any> = body.playerCards[i].cards;
			// 		// let arrTmp: Array<proto.CardInfo> = [];
			// 		for (let j: number = 0; j < arrCards.length; j++) {
			// 			let info: any = arrCards[j];
			// 			// if(info.Type == 12){//手牌
						// for(let n:number = 0; n < info.Cards.length;n++){
						// 	let card:proto.CardInfo = new proto.CardInfo();
						// 	card.CardID = info.Cards[n].CardID;
						// 	card.Sit = info.Sit;
						// 	arrTmp.push(card);
						// }
						// }
						//arrTmp.push(info);
							// let card:proto.CardInfo = new proto.CardInfo();
							// card.CardID = info.CardID;
							// card.Sit = info.Sit;
							// arrTmp.push(card);
					// }
					//arrTmp = this.SortCards(arrTmp).reverse();
					// console.log(arrTmp);
					// if (body.playerCards[i].huCard != null && body.playerCards[i].huCard != undefined) {
					// 	var cardtemp: proto.CardInfo = new proto.CardInfo();
					// 	cardtemp.CardID = body.playerCards[i].huCard.CardID;
					// 	cardtemp.Sit = body.playerCards[i].huCard.Sit;
					// 	arrTmp.push(cardtemp);
					// }
					// this.arrHandCards[body.playerCards[i].seat] = arrTmp;
				// }
			// }
		}
		/*结算数据*/
		public static SaveResultData(arr: Array<any>): void {
			console.log("结算展示手牌");
			for(let i:number = 0;i < arr.length;i++){
				if(arr[i].seat != Global.userSit){
					console.log(arr);
					console.log(arr[i].username);
					let arrCards:Array<any> = arr[i].playerCards;
					console.log(arrCards);
					let arrTmp:Array<game.CardInfo> = [];
					console.log( arrCards[0]);
					console.log( arrCards[0].length);
					// for(let j:number = 0;j < arrCards[0].length;j++){
					// 	let info:any = arrCards[j];
					// 	// if(info.Type == 12){//手牌
					// 		for(let n:number = 0; n < info.Cards.length;n++){
					// 			let card:proto.CardInfo = new proto.CardInfo();
					// 			card.CardID = info.Cards[n].CardID;
					// 			card.Sit = info.Sit;
					// 			arrTmp.push(card);
					// 		}
					// 	// }
					// }
					// arrTmp = this.SortCards(arrTmp);
					// this.arrHandCards[arr[i].seat] = arrTmp;
				}
			}
		}


		//拷贝牌组数据
		public static CopyCardsGroup(cardsgroup: CardsGroupInfo, body: any): CardsGroupInfo {

			cardsgroup.CardsGroupType = body.Type;
			cardsgroup.cardsit = body.Sit;
			cardsgroup.obtainCard.Sit = body.ObtainCardSit;
			cardsgroup.obtainCard.CardID = body.ObtainCard.CardID;
			for (var i: number = 0; i < body.Cards.length; i++) {
				var card: CardInfo = new CardInfo();
				card.CardID = body.Cards[i].CardID;
				if (card.CardID == body.ObtainCard.CardID) {
					card.Sit = body.ObtainCardSit;
				} else {
					card.Sit = body.Sit;
				}
				cardsgroup.cards.push(card);
			}
			return cardsgroup;


		}
		/**
		 * 添加手牌吃碰杠
		 * */
		public static AddChiPengGangCards(body: any, sit: number): CardInfo {
			const group: CardsGroupInfo = this.CopyCardsGroup(new CardsGroupInfo(), body);
			// console.group("==CopyCardsGroup==", group)
			let p = Global.getUserPosition(sit)
			//const handCards: Array<CardInfo> = this.getHandCards(p);
			const otherCards: Array<CardsGroupInfo> = this.getOtherCards(p);
			let op =  Global.getUserPosition(group.obtainCard.Sit) 
			switch (body.Type) {
				case CardsGroupType.CHI://吃牌
					this.DelectCardPool(this.getCardsPool(op));
					//处理手牌
					this.ClearHandCards(p, group.cards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.PENG://碰牌
					this.DelectCardPool(this.getCardsPool(op));
					//处理手牌
					this.ClearHandCards(p, body.DelCards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.BUGANG://补杠牌
					//处理手牌
					for (var i: number = 0; i < otherCards.length; i++) {
						if (otherCards[i].CardsGroupType == CardsGroupType.PENG) {
							if ( otherCards[i].cards[0].CardID ==group.obtainCard.CardID) {
								//手中是碰  自摸杠 
								otherCards[i].CardsGroupType = CardsGroupType.BUGANG;
								otherCards[i].cards.push(group.obtainCard);
								var cardtemp: CardInfo = new CardInfo();
								cardtemp.CardID = group.obtainCard.CardID;
								cardtemp.Sit = op;

								this.ClearHandCards(p, [cardtemp], sit);
								break;
							}
						}
					}
					break;
				case CardsGroupType.MINGGANG://明杠牌
					this.DelectCardPool(this.getCardsPool(op));
					this.ClearHandCards(p, group.cards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.ANGANG://暗杠牌
					this.ClearHandCards(p, group.cards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.HU://胡牌
					break;
			}
			return group.obtainCard;
		}
		/**
		 * 删除一组/张手牌数据
		 * p  本地座位号
		 * cards  要删除的牌
		 * 1  CardsGroup.Cards
		 * */
		 public static ClearHandCards(p: number, cards: Array<CardInfo>, sit: number): void {
			//  console.log("====ClearHandCardsS== ", handcards,cards);
			let handcards = GamePlayData.arrHandCards[p];
			if(!cards){return}

			
			if (sit == Global.userSit) {
				this.Chi_Groups.length = 0;
				this.Peng_Groups.length = 0;
				this.Gang_Groups.length = 0;
				this.Hu_Groups.length = 0;
				this.Call_Groups.length = 0;
				for (var x: number = 0; x < cards.length; x++) {
					for (var y: number = handcards.length - 1; y >= 0; y--) {
						if (cards[x].CardID == handcards[y].CardID) {
							handcards.splice(y, 1);
							break;
						}
					}
				}
			} else {
				const Max = cards.length;
				for (let i = 0; i < Max; i++) {
					handcards.pop();
				}
			}
		}
		/**
		 * 获取吃碰杠的数据
		 * */
		public static GetChiPengGangHuGroup(type: number): Array<any> {
			switch (type) {
				case CardsGroupType.CHI:
					return GamePlayData.Chi_Groups;
				case CardsGroupType.PENG:
					return GamePlayData.Peng_Groups;
				case CardsGroupType.GANG:
					return GamePlayData.Gang_Groups;
				case CardsGroupType.HU:
					return GamePlayData.Hu_Groups;
				case CardsGroupType.CALL:
					return GamePlayData.Call_Groups;
				case CardsGroupType.BGANGYAO:
					return GamePlayData.Gangyao_Groups;
				case CardsGroupType.MGANGYAO:
					return GamePlayData.Gangyao_Groups;
				case CardsGroupType.AGANGYAO:
					return GamePlayData.Gangyao_Groups;
				case CardsGroupType.QISHOUHU:
					return GamePlayData.Gangyao_Groups;
			}
			return [];
		}
		/**
		 * 保存吃碰杠胡  AckUserOperation
		 * */
		public static SaveChiPengGangHu(body: room.VGGameOperationNtc): void {

			const nSit = body.seatid;
			if (body.operation.length == 0) {
				// 其他人的操作通知
				return;
			}

			if (nSit != Global.userSit) {
				//座位号 不是 自己
				return;
			}

			body.operation.forEach((opt:  room.MJ_Operation) => {
				//左吃，吃的牌是最小点, 例如45吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) { }
				//中吃，吃的牌是中间点，例如24吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) { }
				//右吃，吃的牌是最大点，例如12吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) { }

				//碰
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) { }

				//暗杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) { }

				//直杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) { }

				//补杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) { }

				//听
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
					//console.log("==**===BAOCUN TING==**===")
					//game.GamePlayData.SaveChiPengGangHu(body);
					this.Call_Groups.push(opt);
				}
				//和
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
					//吃 碰 杠 胡 停
					// this.Hu_Groups = this.CopyChiPengGangHu(this.Hu_Groups, body.HuCards);
					// if (body.HuCards.length > 0) {
					// 	GameParmes.nHuType = body.HuCards[0].Type;//8普通胡 16天胡
					// 	console.log("胡牌张数:" + body.HuCards.length, "type=" + GameParmes.nHuType);
					// }
				}
				//过
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {

				}
			})

		}
		private static CopyChiPengGangHu(arr_A: Array<any>, arr_B: Array<any>): Array<any> {
			arr_A.length = 0;
			for (var i: number = 0; i < arr_B.length; i++) {
				var body_group = arr_B[i];
				var cardgroup: CardsGroupInfo = new CardsGroupInfo();
				cardgroup = this.CopyCardsGroup(cardgroup, body_group);
				arr_A.push(cardgroup);
			}
			return arr_A;
		}
		/**
		 * 添加一张手牌数据
		 * */
		public static AddHandCards(sit: number, Card: any): void {
			let p = Global.getUserPosition(sit);
			let handcards: Array<game.CardInfo> = this.getHandCards(p);

			var card: game.CardInfo = new game.CardInfo();
			card.CardID = Card.CardID;
			card.Sit = Card.Sit;
			handcards.push(card);

		}
		/**
		 * 添加牌池
		 * */
		public static AddCardPool(body: Array<any>, sit: number, istest: boolean = false): void {
			 let p = Global.getUserPosition(sit)

			let cardpool: Array<CardInfo> = this.getCardsPool(p);

			for (var x: number = 0; x < body.length; x++) {
				var card: CardInfo = new CardInfo();
				card.CardID = body[x].CardID;
				card.Sit = sit;
	
				cardpool.push(card);
			}
		}
		/**
		 * 川麻添加换三张的牌
		 * */
		public static AddHuanSanZhangCards(handcards: Array<game.CardInfo>, body: any): void {
			/*if (this.isAddHuanSanZhang) return;
			this.isAddHuanSanZhang = true;*/
			for (var x: number = 0; x < body.length; x++) {
				var card: game.CardInfo = new game.CardInfo();
				for (var y: number = 0; y < handcards.length; y++) {
					if (handcards[handcards.length - 1].CardID < body[x].CardID) {
						card.CardID = body[x].CardID;
						card.Sit = Global.userSit;
						handcards.push(card);
						break;
					} else {
						if (handcards[y].CardID > body[x].CardID) {
							card.CardID = body[x].CardID;
							card.Sit = Global.userSit;
							handcards.splice(y, 0, card);
							break;
						}
					}
				}
			}
		}
		/**获得手牌数据 请用转换后的本地座位号 */
		public static getHandCards(sit: number): Array<CardInfo> {
			let arr: Array<CardInfo> = game.GamePlayData.arrHandCards[sit];
	
			// 
			return arr;
		}
		// 保存吃碰杠数据
		public static getOtherCards(sit: number): Array<CardsGroupInfo> {
			let arr: Array<CardsGroupInfo> = game.GamePlayData.arrOtherCards[sit];
			return arr;
		}
		// 保存牌池数据
		public static getCardsPool(sit: number): Array<game.CardInfo> {
			let arr: Array<game.CardInfo> = game.GamePlayData.arrPoolCards[sit];
			return arr;
		}
		/**
		 * 删除牌池最后一张
		 * */
		public static DelectCardPool(cardpool: Array<game.CardInfo>): void {
			cardpool && cardpool.pop();
		}

		/**
		 * 排序手牌（必须是自己的手牌）
		 * */
		public static SetHandCardsSorting(sit: number): void {
			let p = Global.getUserPosition(sit)
			let arrCards: Array<game.CardInfo> = this.getHandCards(p);
			arrCards = this.SortCards(arrCards);
		}
		public static SortCards(arr: Array<game.CardInfo>): Array<game.CardInfo> {
			if(!arr){
				return [];
			}
			for (var x: number = 0; x < arr.length - 1; x++) {
				for (var y: number = x + 1; y < arr.length; y++) {
					if (arr[x].CardID > arr[y].CardID) {
						var temp: number = arr[x].CardID;
						arr[x].CardID = arr[y].CardID;
						arr[y].CardID = temp;
					}
				}
			}
			return arr;
		}
		/**
		 * 牌墙数据减少  type:"Head"  "Tail"  num:减少的数量
		 * */
		public static SetCardsWallIndex(type: string, num: number): void {
			switch (type) {
				case "Head":
					this.CardsWall_Head_Index += num;
					break;
				case "Tail":
					this.CardsWall_Tail_Index += num;
					break;
			}
		}

		/**
		 * 记录最后一次摸的牌
		 * */
		public static SaveCurrentCard(cardid: number, sit: number): game.CardInfo {
			this.Current_Card.CardID = cardid;
			this.Current_Card.Sit = sit;
			return this.Current_Card;
		}
		

		/**
		 * 保存 玩家 当前可以进行操作
		 */

		public static SaveMJ_Operation(operation: any) {
			this.MJ_Operation = operation;
		}


		/**
		 * 保存 玩家 当前可以进行操作
		 */

			public static GetMJ_Operation() {
			return this.MJ_Operation || [];
		}

		//********TEST */

		public static MockStart(){	
			// game.GamePlayData.initData();
			// game.GameParmes.initData();
			ViewManager.ins.switchToGame();

			Global.userSit = 1;
			const users:any = GamePlayData.MockUsers();
			game.GameUserList.saveUserListInfo(users);

			ViewManager.ins.gameView.gameUI.initUser();
		// //	game.GameUserList.saveUserListInfo(body.userInfos);
			game.GamePlayData.SaveHandCarsd(users);
			ViewManager.ins.gameView.gameUI.initHandCard();
		}

		public static MockUsers(){
			const users = [];
			for( let i= 1;i<5;i++){
				let user = null;
				if(i == 1){
					user = GamePlayData.MockSelfUser();
				}else{
					user = GamePlayData.MockUser(i);
				}
				
				users.push(user);
			}
			return users;
		}
		public static MockSelfUser(){
			const user = {
				fan: [],
				feeCoin: 0,
				gameCoin: 10488,
				isManaged: 0,
				resultCoin: 0,
				role: 1,
				showName: "jytzyztp0v",
				status: 3,
				tingTileInfo: [],
				userName: "jytzyztp0v",
				userPos:{
					roomID: 1,
					seatID: 1,
					tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
				},
				tileSets:[
					{Tiles: [1, 5, 6 , 9, 8, 10, 15, 16, 20, 20, 21, 21, 21],
					Type: 0},
				]
			}
			return user;
		}
		

		public static MockUser(i){

			const user = {
				fan: [],
				feeCoin: 0,
				gameCoin: 10488,
				
				isManaged: 0,
				resultCoin: 0,
				role: 1,
				showName: "jytzyztp0v",
				status: 3,
				tingTileInfo: [],
				userName: "jytzyztp0v",
				userPos:{
					roomID: 1,
					seatID: i,
					tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
				},
				tileSets:[
					{Tiles: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					Type: 0},
					{Tiles: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					Type: 8},
					{Tiles: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
					Type: 10},
			
				]
			}
			return user;

		}


		public static MockGameOption (){
			return  {
				operation: [
					{
						ObtainSeat: 3,
						ObtainTile: 0,
						Tiles: [ 3,4,5],
						fans: [],
						operationID: 0,
						operationType: CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW,
						tingTileInfo: [],	
			
					},
					{
						ObtainSeat: 3,
						ObtainTile: 0,
						Tiles: [ 5,6,7],
						fans: [],
						operationID: 0,
						operationType: CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW,
						tingTileInfo: [],	
			
					},
					
				],
				remainCount: 54,
				result: 0,
				seatid: 1,
				userInfo:{},
			}

		}

		public static MockUserOption(){
			return {
				operation:
					{
						ObtainSeat: 1,
						ObtainTile: 3,
						Tiles: [3,3,3],
						fans: [],
						operationID: 0,
						operationType: CardsGroupType.MJ_OperationType.MJ_OT_PONG,
						tingTileInfo: [],		
					},
					// {
					// 	ObtainSeat: 0,
					// 	ObtainTile: 2,
					// 	Tiles: [2],
					// 	fans: [],
					// 	operationID: 1,
					// 	operationType: 2,
					// 	tingTileInfo: [],		
					// }
				
				roundGuid: "611668085300221",
				seatID: 1,
				second: 20,
				userInfo:{
					fan: [],
					feeCoin: 0,
					gameCoin: 10488,
					isManaged: 0,
					resultCoin: 0,
					role: 1,
					showName: "jytzyztp0v",
					status: 3,
					tingTileInfo: [],
					userName: "jytzyztp0v",
					userPos:{
						roomID: 1,
						seatID: 1,
						tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
					},
					tileSets:[
						{Tiles: [3, 3, 3 , 8, 10, 11, 16, 17, 19, 19, 22, 23, 25],
						Type: 0},
					]
				}
	

			}
			
		}

		public static MockSyncGameNtc(){
			return {
				remainCount: 50,
				roomID: 1,
				roundGuid: "611668521740514",
				second: 19,
				settlementInfos: [],
				status: 3,
				tableID: "{3724DEF0-3FAB-46A1-9932-3542E8CE8048}",
				userInfos:[
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						userPos:{
							roomID: 1,
							seatID: 1,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
							Type: 0},
							{Tiles: [10,11],
							Type: 10},
						]
					},
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						userPos:{
							roomID: 1,
							seatID: 2,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
							Type: 0},
							{Tiles: [-1],
							Type: 8},
							{Tiles: [],
							Type: 10},
						]
					},
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						userPos:{
							roomID: 1,
							seatID: 3,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [2, 8, 12, 15, 16, 19, 20, 21, 21, 26],
							Type: 0},
							{Tiles: [ 10,11],
							Type: 10},
							{
								ObtainSeat: 4,
								ObtainTile: 9,
								Tiles: [ 9,9,9],
								Type: 2},
						]
					},
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						userPos:{
							roomID: 1,
							seatID: 4,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
							Type: 0},
							{Tiles: [9, 14, 24],
							Type: 10},
							{
								ObtainSeat: 4,
								ObtainTile: 9,
								Tiles: [10, 10, 10],
								Type: 2},
						]
					}
				]
			}
		}

		public static ContinueGame( body ){
			game.GameUserList.saveUserListInfo(body.userInfos)
			GDGame.Msg.ins.dispatchEventWith(room.RoomMessage.ACK_GAMEPLAYERLIST, false, body);

			game.GamePlayData.SaveHandCarsd(body.userInfos);
			//console.log('=====同步游戏:', body);
			if (Number(body.status) == 0) {
				return;
			}

			//if (Global.isContinue) {
				//ViewManager.ins.switchToGame();

				ViewManager.ins.hideWait();
				ViewManager.ins.gameView.onGameContinue();
				//GDGame.Msg.ins.dispatchEventWith(room.RoomMessage.ACK_GAME_CONTINUE);
				Global.isContinue = false;
			//}
		}

		public static MockResultNtc(){
			return {
				birdTiles: [1,2,3,5],
				roomID: 1,
				roundGuid: "611668521740514",
				second: 19,
				settlementInfos: [],
				status: 3,
				tableID: "{3724DEF0-3FAB-46A1-9932-3542E8CE8048}",
				userInfos:[
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						niaoMulti:1,
						userPos:{
							roomID: 1,
							seatID: 1,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [2, 2, 2, 5, 6, 7, 19, 20, 20, 21],
							Type: 0},
							{Tiles: [16,16,16],
							Type: 2},
						]
					},
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						niaoMulti:1,
						userName: "jytzyztp0v",
						userPos:{
							roomID: 1,
							seatID: 2,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [2, 2, 2, 5, 6, 7, 19, 20, 20, 21],
							Type: 0},
							{Tiles: [-1],
							Type: 8},
							{Tiles: [],
							Type: 10},
						]
					},
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						niaoMulti:1,
						userPos:{
							roomID: 1,
							seatID: 3,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [2, 8, 12, 15, 16, 19, 20, 21, 21, 26],
							Type: 0},
							{Tiles: [ 10,11],
							Type: 10},
							{
								ObtainSeat: 4,
								ObtainTile: 9,
								Tiles: [ 9,9,9],
								Type: 2},
						]
					},
					{
						fan: [],
						feeCoin: 0,
						gameCoin: 10488,
						isManaged: 0,
						resultCoin: 0,
						role: 1,
						showName: "jytzyztp0v",
						status: 3,
						tingTileInfo: [],
						userName: "jytzyztp0v",
						niaoMulti:3,
						userPos:{
							roomID: 1,
							seatID: 4,
							tableID: "{F29C47DB-B580-4F96-92B8-3975E587574D}",
						},
						tileSets:[
							{Tiles: [0, 8, 12, 15, 16, 19, 20, 21, 21, 26],
							Type: 0},
							{Tiles: [9, 14, 24],
							Type: 10},
							{
								ObtainSeat: 4,
								ObtainTile: 9,
								Tiles: [10, 10, 10],
								Type: 2},
						]
					}
				]
			}
		}
	}
}