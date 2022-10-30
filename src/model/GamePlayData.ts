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

		private static arrHandCards: Array<any> = [];	

		private static arrQshHandCards: Array<any> = [];

		public static arrOtherCards: Array<any> = [[], [], [], []];

		public static arrPoolCards: Array<any> = [[], [], [], []];

		public static arrLPCards: Array<Array<number>> = [];//亮牌数组 用于听牌张数判断

		public static MJ_Operation: Array<room.MJ_Operation> = [];

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
			GamePlayData.arrQshHandCards = [];
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

				let p = e.userPos.seatID - 1;
				array[p] = arrTmp;
			})
			game.GamePlayData.arrHandCards = array;
	
		}
		/** 更新玩家的手牌 */

		public static SaveHandCardsBySeatID(seatID: number, array){
			game.GamePlayData.arrHandCards[seatID-1] = array;
			//console.log("=game.GamePlayData.arrHandCards[seatID-1]==",game.GamePlayData.arrHandCards[seatID-1])
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
		public static SetOtherCardsValue(arr: Array<game.ICardsGroup>, sit: number): void {
			var arrtemp: Array<CardsGroupInfo> = [];
			for (var i: number = 0; i < arr.length; i++) {
				var infoTemp: CardsGroupInfo = new CardsGroupInfo();
				var cardsTemp: Array<game.CardInfo> = [];
				for (var n: number = 0; n < arr[i].Cards.length; n++) {
					var tempcard: game.CardInfo = new game.CardInfo();
					tempcard.CardID = arr[i].Cards[n].CardID;
					tempcard.Sit = arr[i].Cards[n].Sit;
					cardsTemp.push(tempcard);
				}
				infoTemp.cards = cardsTemp;
				infoTemp.CardsGroupType = arr[i].Type;
				infoTemp.cardsit = arr[i].Sit;
				var obCardtemp: game.CardInfo = new game.CardInfo();
				// obCardtemp.CardID=arr[i].ObtainCard.CardID;
				// obCardtemp.Sit=arr[i].ObtainCard.Sit;
				infoTemp.obtainCard = obCardtemp;
				arrtemp.push(infoTemp);

			}

			this.arrOtherCards[sit] = arrtemp;
		}
		/**
		 *手牌赋值数据 arr CardsGroup
			* */
		public static SetHandCardsValue(arr: Array<any>, cardID: number, sit: number): void {
			var handCards: Array<game.CardInfo> = [];
			var otherCards: Array<CardsGroupInfo> = [];
			for (var x: number = 0; x < arr.length; x++) {
				var cardsGroup = arr[x];
				//if(cardsGroup.Type==CardsGroupType.HANDCARDS){
				// for(var y:number=0;y<cardsGroup.Cards.length;y++){
				// 	if(cardsGroup.Cards[y].CardID!=cardID){
				// 		var handcard:proto.CardInfo = new proto.CardInfo();
				// 		handcard.CardID = cardsGroup.Cards[y].CardID;
				// 		handcard.Sit = cardsGroup.Sit;
				// 		handCards.push(handcard);
				// 	}
				// }
				handCards.push(cardsGroup);
				handCards = this.SortCards(handCards);
				// }else{
				// 	var group_temp:CardsGroupInfo = this.CopyCardsGroup(new CardsGroupInfo(),cardsGroup);
				// 	otherCards.push(group_temp);
				// }
			}
			this.arrHandCards.push(handCards);

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
			// cardsgroup.CardsGroupType = body.Type;
			// cardsgroup.cardsit = body.Sit;
			// if (body.ObtainCard) {
			// 	cardsgroup.obtainCard.Sit = body.ObtainCardSit;
			// 	cardsgroup.obtainCard.CardID = body.ObtainCard.CardID;
			// } else {
			// 	cardsgroup.obtainCard.Sit = -1;
			// 	cardsgroup.obtainCard.CardID = -1;
			// }

			// for (var i: number = 0; i < body.Cards.length; i++) {
			// 	var card: game.CardInfo = new game.CardInfo();
			// 	card.CardID = body.Cards[i].CardID;
			// 	if (body.ObtainCard) {
			// 		if (card.CardID == body.ObtainCard.CardID) {
			// 			card.Sit = body.ObtainCardSit;
			// 		} else {
			// 			card.Sit = body.Sit;
			// 		}
			// 	} else {
			// 		card.Sit = body.Sit;
			// 	}

			// 	cardsgroup.cards.push(card);
			// }
			// return cardsgroup;
		}
		/**
		 * 添加手牌吃碰杠
		 * */
		public static AddChiPengGangCards(body: any, sit: number): CardInfo {
			const group: CardsGroupInfo = this.CopyCardsGroup(new CardsGroupInfo(), body);
			// console.group("==CopyCardsGroup==", group)
			let p = Global.getUserPosition(sit-1)
			//const handCards: Array<CardInfo> = this.getHandCards(p);
			const otherCards: Array<CardsGroupInfo> = this.getOtherCards(sit);
			let op = group.obtainCard.Sit
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
				//console.log("====MAX", Max);
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

		//	let p = Global.getUserPosition(sit);
			// let handcards: Array<game.CardInfo> = this.getHandCards(sit);

			// var card: game.CardInfo = new game.CardInfo();
			// card.CardID = Card.CardID;
			// card.Sit = Card.Sit;
			// handcards.push(card);

			// let handcards: Array<game.CardInfo> = this.getHandCards(sit);
			// for (var x: number = 0; x < cardGroup.Cards.length; x++) {
			// 	var card: game.CardInfo = new game.CardInfo();
			// 	card.CardID = cardGroup.Cards[x].CardID;
			// 	card.Sit = cardGroup.Sit;
				//handcards.push(card);
				/*if(cardGroup.Sit==Global.userSit){
					for(var y:number = 0;y<handcards.length;y++){
						if(handcards[handcards.length-1].CardID<cardGroup.Cards[x].CardID){
							card.CardID = cardGroup.Cards[x].CardID;
							card.Sit = cardGroup.Sit;
							handcards.push(card);
							break;
						}else{
							if(handcards[y].CardID>cardGroup.Cards[x].CardID){
								card.CardID = cardGroup.Cards[x].CardID;
								card.Sit = cardGroup.Sit;
								handcards.splice(y,0,card);
								break;
							}
						}
					}
				}else{
					card.CardID = cardGroup.Cards[x].CardID;
					card.Sit = cardGroup.Sit;
					handcards.push(card);
				}*/
			//}
			// if (sit == Global.userSit) {//根据定缺要排序
			// 	handcards = this.SortCards(handcards);

			// 	let type: number = game.GameUserList.arrUserList[sit].cardType;
			// 	if (type > -1) {
			// 		GamePlayData.SortHandCardQue(type);
			// 	}
			// }
		}
		/**
		 * 添加牌池
		 * */
		public static AddCardPool(body: Array<any>, sit: number, istest: boolean = false): void {
			// let p = Global.getUserPosition(sit)

			let cardpool: Array<CardInfo> = this.getCardsPool(sit);
			for (var x: number = 0; x < body.length; x++) {
				var card: CardInfo = new CardInfo();
				card.CardID = body[x].CardID;
				card.Sit = sit;
				// if (cardpool.length > 0) {
				// 	if (card.CardID != cardpool[cardpool.length - 1].CardID) {
				// 		cardpool.push(card);
				// 	}
				// } else {
				cardpool.push(card);
				// }
			}


			// let cardpool: Array<CardInfo> = this.getCardsPool(sit);
			// for (var x: number = 0; x < body.length; x++) {
			// 	var card: CardInfo = new CardInfo();
			// 	card.CardID = body[x].CardID;
			// 	card.Sit = sit;
			// 	if (cardpool.length > 0) {
			// 		if (istest == false) {
			// 			if (card.CardID != cardpool[cardpool.length - 1].CardID) {
			// 				cardpool.push(card);
			// 			}
			// 		} else {
			// 			cardpool.push(card);
			// 		}

			// 	} else {
			// 		cardpool.push(card);
			// 	}

			// }

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
		// 保存手牌数据
		public static getHandCards(sit: number): Array<CardInfo> {
			let arr: Array<CardInfo> = game.GamePlayData.arrHandCards[sit-1];
			if( sit == Global.userSit ){
				//console.log("=getHandCards==", arr)
			}
			// 
			return arr;
		}
		// 保存吃碰杠数据
		public static getOtherCards(sit: number): Array<CardsGroupInfo> {
			let arr: Array<CardsGroupInfo> = game.GamePlayData.arrOtherCards[sit-1];
			return arr;
		}
		// 保存牌池数据
		public static getCardsPool(sit: number): Array<game.CardInfo> {
			let arr: Array<game.CardInfo> = game.GamePlayData.arrPoolCards[sit-1];
			return arr;
		}
		/**
		 * 删除牌池最后一张
		 * */
		public static DelectCardPool(cardpool: Array<game.CardInfo>): void {
			cardpool.pop();
		}
		/*根据定缺重新排序手牌*/
		public static SortHandCardQue(type: number): void {
			let arr: Array<game.CardInfo> = GamePlayData.getHandCards(Global.userSit);
			let num: number = arr.length;
			var count: number = 0;
			for (var i: number = 0; i < num; i++) {
				var card: game.CardInfo = arr[count];
				if (GameParmes.getHua(card) == type) {
					arr.push(arr.splice(count, 1)[0]);
				} else {
					count += 1;
				}
			}
		}
		/**
		 * 排序手牌（必须是自己的手牌）
		 * */
		public static SetHandCardsSorting(sit: number): void {

			let arrCards: Array<game.CardInfo> = this.getHandCards(sit);
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
		
	}
}