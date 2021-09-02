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
		public static Current_Card: proto.CardInfo = new proto.CardInfo();
		//牌桌上最后一次打出的牌
		public static Catch_Card: proto.CardInfo = new proto.CardInfo();
		//当前摸牌的人或者吃碰杠人的座位号
		public static M_C_P_G_sit: number = -1;
		//吃牌
		public static Chi_Groups: Array<CardsGroupInfo> = [];
		//碰牌
		public static Peng_Groups: Array<CardsGroupInfo> = [];
		//杠牌
		public static Gang_Groups: Array<CardsGroupInfo> = [];
		//胡牌
		public static Hu_Groups: Array<CardsGroupInfo> = [];

		public static Call_Groups: Array<any> = [];
		public static isTuoguan: boolean = false;
		//服务器的推荐换三张与玩家选择
		public static HSZRecommend: Array<proto.CardInfo> = [];
		public static HSZUserChoose: Array<proto.CardInfo> = [];
		//换完后的牌
		public static HSZGetCards: Array<any> = [];
		public static tingData: Array<boolean> = [false, false, false, false];
		//是否加入了三张牌
		public static isAddHuanSanZhang: boolean = false;

		private static arrHandCards: Array<any> = [];

		public static arrOtherCards: Array<any> = [[], [], [], []];

		public static arrPoolCards: Array<any> = [[], [], [], []];

		public static arrLPCards: Array<Array<number>> = [];//亮牌数组 用于听牌张数判断

		/*初始化数据*/
		public static initData(): void {
			GamePlayData.firstCardsIndexes = -1;
			GamePlayData.CardsWall_Head_Index = 0;
			GamePlayData.CardsWall_Tail_Index = 0;
			GamePlayData.CardsWall_Hua_Index = 0;
			GamePlayData.M_C_P_G_sit = -1;
			GamePlayData.Peng_Groups = [];
			GamePlayData.Gang_Groups = [];
			GamePlayData.Hu_Groups = [];
			GamePlayData.Call_Groups = [];
			GamePlayData.HSZRecommend = [];
			GamePlayData.HSZUserChoose = [];
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
		 * 记录最后摸牌或者吃碰杠操作的人的座位号
		 * */
		public static SaveOperationSit(sit: number): void {
			this.M_C_P_G_sit = sit;
		}
		/**
		 * 记录最后一次摸的牌
		 * */
		public static SaveCurrentCard(cardid: number, sit: number): proto.CardInfo {
			this.Current_Card.CardID = cardid;
			this.Current_Card.Sit = sit;
			return this.Current_Card;
		}
		/**
		 * 根据发牌数据创建手牌
		 * */
		public static SaveHandCarsd(handcard: proto.HandCards): void {
			for (let i: number = 0; i < 4; i++) {
				let arrTmp: Array<any> = [];
				if (i == handcard.seat) {
					arrTmp = handcard.cards
				} else {
					let cardsLength: number = 16;
					if (i == game.GameParmes.firstSit) cardsLength = 17;
					for (let j: number = 0; j < cardsLength; j++) {
						let card: proto.CardInfo = new proto.CardInfo();
						card.CardID = -1;
						card.Sit = i;
						arrTmp.push(card);
					}
				}

				game.GamePlayData.arrHandCards.push(arrTmp);
			}
		}
		//结算手牌数据
		public static SaveResultEnd(body: proto.NotGameEnd): void {
			for (let i: number = 0; i < body.playerCards.length; i++) {

				if (body.playerCards[i].seat != Global.userSit) {
					let arrCards: Array<any> = body.playerCards[i].cards;
					let arrTmp: Array<proto.CardInfo> = [];
					for (let j: number = 0; j < arrCards.length; j++) {
						let info: any = arrCards[j];
						// if(info.Type == 12){//手牌
						// for(let n:number = 0; n < info.Cards.length;n++){
						// 	let card:proto.CardInfo = new proto.CardInfo();
						// 	card.CardID = info.Cards[n].CardID;
						// 	card.Sit = info.Sit;
						// 	arrTmp.push(card);
						// }
						// }
						arrTmp.push(info);
					}
					arrTmp = this.SortCards(arrTmp).reverse();
					if (body.playerCards[i].huCard != null && body.playerCards[i].huCard != undefined) {
						var cardtemp: proto.CardInfo = new proto.CardInfo();
						cardtemp.CardID = body.playerCards[i].huCard.CardID;
						cardtemp.Sit = body.playerCards[i].huCard.Sit;
						arrTmp.push(cardtemp);
					}
					this.arrHandCards[body.playerCards[i].seat] = arrTmp;
				}
			}
		}
		/*结算数据*/
		public static SaveResultData(arr: Array<any>): void {
			// for(let i:number = 0;i < arr.length;i++){
			// 	if(arr[i].seat != Global.userSit){
			// 		let arrCards:Array<any> = arr[i].handCards;
			// 		let arrTmp:Array<proto.CardInfo> = [];
			// 		for(let j:number = 0;j < arrCards.length;j++){
			// 			let info:any = arrCards[j];
			// 			if(info.Type == 12){//手牌
			// 				for(let n:number = 0; n < info.Cards.length;n++){
			// 					let card:proto.CardInfo = new proto.CardInfo();
			// 					card.CardID = info.Cards[n].CardID;
			// 					card.Sit = info.Sit;
			// 					arrTmp.push(card);
			// 				}
			// 			}
			// 		}
			// 		arrTmp = this.SortCards(arrTmp);
			// 		this.arrHandCards[arr[i].seat] = arrTmp;
			// 	}
			// }
		}
		public static SetOtherCardsValue(arr: Array<proto.ICardsGroup>, sit: number): void {
			var arrtemp: Array<CardsGroupInfo> = [];
			for (var i: number = 0; i < arr.length; i++) {
				var infoTemp: CardsGroupInfo = new CardsGroupInfo();
				var cardsTemp: Array<proto.CardInfo> = [];
				for (var n: number = 0; n < arr[i].Cards.length; n++) {
					var tempcard: proto.CardInfo = new proto.CardInfo();
					tempcard.CardID = arr[i].Cards[n].CardID;
					tempcard.Sit = arr[i].Cards[n].Sit;
					cardsTemp.push(tempcard);
				}
				infoTemp.cards = cardsTemp;
				infoTemp.CardsGroupType = arr[i].Type;
				infoTemp.cardsit = arr[i].Sit;
				var obCardtemp: proto.CardInfo = new proto.CardInfo();
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
			var handCards: Array<proto.CardInfo> = [];
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
			if (body.ObtainCard) {
				cardsgroup.obtainCard.Sit = body.ObtainCardSit;
				cardsgroup.obtainCard.CardID = body.ObtainCard.CardID;
			} else {
				cardsgroup.obtainCard.Sit = -1;
				cardsgroup.obtainCard.CardID = -1;
			}

			for (var i: number = 0; i < body.Cards.length; i++) {
				var card: proto.CardInfo = new proto.CardInfo();
				card.CardID = body.Cards[i].CardID;
				if (body.ObtainCard) {
					if (card.CardID == body.ObtainCard.CardID) {
						card.Sit = body.ObtainCardSit;
					} else {
						card.Sit = body.Sit;
					}
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
		public static AddChiPengGangCards(body: any, sit: number): proto.CardInfo {
			var group: CardsGroupInfo = this.CopyCardsGroup(new CardsGroupInfo(), body);
			var handCards: Array<proto.CardInfo> = this.getHandCards(sit);
			var otherCards: Array<CardsGroupInfo> = this.getOtherCards(sit);
			switch (body.Type) {
				case CardsGroupType.CHI://吃牌
					this.DelectCardPool(this.getCardsPool(group.obtainCard.Sit));
					//处理手牌
					this.ClearHandCards(handCards, group.cards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.PENG://碰牌
					this.DelectCardPool(this.getCardsPool(group.obtainCard.Sit));
					//处理手牌
					this.ClearHandCards(handCards, group.cards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.BUGANG://补杠牌
					//处理手牌
					for (var i: number = 0; i < otherCards.length; i++) {
						if (otherCards[i].CardsGroupType == CardsGroupType.PENG) {
							if (game.GameParmes.getHua(otherCards[i].cards[0]) == game.GameParmes.getHua(group.obtainCard) && game.GameParmes.getValue(otherCards[i].cards[0]) == game.GameParmes.getValue(group.obtainCard)) {
								//手中是碰  自摸杠 
								otherCards[i].CardsGroupType = CardsGroupType.BUGANG;
								otherCards[i].cards.push(group.obtainCard);
								var cardtemp: proto.CardInfo = new proto.CardInfo();
								cardtemp.CardID = group.obtainCard.CardID;
								cardtemp.Sit = group.obtainCard.Sit;
								this.ClearHandCards(handCards, [cardtemp], body.Sit);
								break;
							}
						}
					}
					break;
				case CardsGroupType.MINGGANG://明杠牌
					this.DelectCardPool(this.getCardsPool(group.obtainCard.Sit));
					this.ClearHandCards(handCards, group.cards, body.Sit);
					otherCards.push(group);
					break;
				case CardsGroupType.ANGANG://暗杠牌
					this.ClearHandCards(handCards, group.cards, sit);
					otherCards.push(group);
					break;
				case CardsGroupType.HU://胡牌
					break;
			}
			return group.obtainCard;
		}
		/**
		 * 删除一组/张手牌数据
		 * 0  HandCardsInfo
		 * 1  CardsGroup.Cards
		 * */
		public static ClearHandCards(handcards: Array<proto.CardInfo>, cards: Array<proto.CardInfo>, sit: number): void {

			for (var x: number = 0; x < cards.length; x++) {
				for (var y: number = 0; y < handcards.length; y++) {
					if (handcards[y].CardID == -1 && sit == cards[x].Sit) {
						handcards.shift();
						break;
					} else {
						if (cards[x].CardID == handcards[y].CardID && sit == cards[x].Sit) {
							handcards.splice(y, 1);
							break;
						}
					}

				}
			}

			if (sit == Global.userSit) {
				this.Chi_Groups.length = 0;
				this.Peng_Groups.length = 0;
				this.Gang_Groups.length = 0;
				this.Hu_Groups.length = 0;
				this.Call_Groups.length = 0;
				/*console.log("清理碰杠权限数组:"+this.Call_Groups.length);
				if(isPeng == false){//用户处理碰后听牌的情况
					this.Call_Groups.length = 0;
				} */
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
			}
			return [];
		}
		/**
		 * 保存吃碰杠胡  AckUserOperation
		 * */
		public static SaveChiPengGangHu(body: proto.NotUserOperation): void {
			// if(body.Chi){
			// 	this.Chi_Groups = this.CopyChiPengGangHu(this.Chi_Groups,body.ChiCards);
			// }
			// if(body.Peng){
			// 	this.Peng_Groups = this.CopyChiPengGangHu(this.Peng_Groups,body.PengCards);
			// }
			// if(body.Gang){
			// 	this.Gang_Groups = this.CopyChiPengGangHu(this.Gang_Groups,body.GangCards);
			// }
			// if(body.Hu){
			// 	this.Hu_Groups = this.CopyChiPengGangHu(this.Hu_Groups,body.HuCards);
			// 	if(body.HuCards.length > 0){
			// 		GameParmes.nHuType = body.HuCards[0].Type;//8普通胡 16天胡
			// 		console.log("胡牌张数:"+body.HuCards.length,"type="+GameParmes.nHuType);
			// 	}
			// }
			// this.Call_Groups.length = 0;
			// console.log("碰杠权限,听牌长度："+body.CallCards.length);
			// for(var i:number=0;i<body.CallCards.length;i++){
			// 	var cardgroup:any = body.CallCards[i];	
			// 	this.Call_Groups.push(cardgroup);
			// }

			// required int32 CATCH = 1;//抓牌
			// required int32 PLAY = 2;//打牌非摸打
			// required int32 BUHUA = 3;//补花
			// required int32 CHI = 4;//吃牌
			// required int32 PENG = 5;//碰牌
			// required int32 GANG = 6;//明杠牌
			// required int32 ANGANG = 7;//暗杠牌
			// required int32 HU = 8;//胡牌
			// required int32 BUHUAMO = 9;//摸牌补花
			// required int32 KANGMO = 10;//摸牌杠牌

			// required int32 NO_OPERATION = 11;//过
			// required int32 HANDCARDS = 12;//手牌

			// required int32 BUGANG = 13;//补杠
			// required int32 MOPLAY = 14;//打牌摸打
			this.Chi_Groups.length = 0;
			this.Peng_Groups.length = 0;
			this.Gang_Groups.length = 0;
			this.Hu_Groups.length = 0;
			this.Call_Groups.length = 0;
			for (var i: number = 0; i < body.operations.length; i++) {
				var temp = body.operations[i];;
				if (temp.type == 2) {
					game.GamePlayData.SaveOperationSit(Global.userSit);
				}
				if (temp.type == 4) {
					this.Chi_Groups = this.CopyChiPengGangHu(this.Chi_Groups, temp.options);
				}
				if (temp.type == 5) {
					this.Peng_Groups = this.CopyChiPengGangHu(this.Peng_Groups, temp.options);
				}
				if (temp.type == 6 || temp.type == 7 || temp.type == 13) {
					this.Gang_Groups = this.CopyChiPengGangHu(this.Gang_Groups, temp.options);
				}
				if (temp.type == 8) {
					this.Hu_Groups = this.CopyChiPengGangHu(this.Hu_Groups, temp.options);
				}
			}
			for (var i: number = 0; i < body.callCards.length; i++) {
				var cardgroup: any = body.callCards[i];
				this.Call_Groups.push(cardgroup);
			}
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
		public static AddHandCards(sit: number, cardGroup: any): void {
			let handcards: Array<proto.CardInfo> = this.getHandCards(sit);
			for (var x: number = 0; x < cardGroup.Cards.length; x++) {
				var card: proto.CardInfo = new proto.CardInfo();
				card.CardID = cardGroup.Cards[x].CardID;
				card.Sit = cardGroup.Sit;
				handcards.push(card);
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
			}
			if (sit == Global.userSit) {//根据定缺要排序
				handcards = this.SortCards(handcards);
				let type: number = game.GameUserList.arrUserList[sit].cardType;
				if (type > -1) {
					GamePlayData.SortHandCardQue(type);
				}
			}
		}
		/**
		 * 添加牌池
		 * */
		public static AddCardPool(body: Array<any>, sit: number, istest: boolean = false): void {
			let cardpool: Array<proto.CardInfo> = this.getCardsPool(sit);
			for (var x: number = 0; x < body.length; x++) {
				var card: proto.CardInfo = new proto.CardInfo();
				card.CardID = body[x].CardID;
				card.Sit = sit;
				if (cardpool.length > 0) {
					if (istest == false) {
						if (card.CardID != cardpool[cardpool.length - 1].CardID) {
							cardpool.push(card);
						}
					} else {
						cardpool.push(card);
					}

				} else {
					cardpool.push(card);
				}

			}

		}
		/**
		 * 川麻添加换三张的牌
		 * */
		public static AddHuanSanZhangCards(handcards: Array<proto.CardInfo>, body: any): void {
			/*if (this.isAddHuanSanZhang) return;
			this.isAddHuanSanZhang = true;*/
			for (var x: number = 0; x < body.length; x++) {
				var card: proto.CardInfo = new proto.CardInfo();
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
		public static getHandCards(sit: number): Array<proto.CardInfo> {
			let arr: Array<proto.CardInfo> = game.GamePlayData.arrHandCards[sit];
			return arr;
		}
		// 保存吃碰杠数据
		public static getOtherCards(sit: number): Array<CardsGroupInfo> {
			let arr: Array<CardsGroupInfo> = game.GamePlayData.arrOtherCards[sit];
			return arr;
		}
		// 保存牌池数据
		public static getCardsPool(sit: number): Array<proto.CardInfo> {
			let arr: Array<proto.CardInfo> = game.GamePlayData.arrPoolCards[sit];
			return arr;
		}
		/**
		 * 删除牌池最后一张
		 * */
		public static DelectCardPool(cardpool: Array<proto.CardInfo>): void {
			cardpool.pop();
		}
		/*根据定缺重新排序手牌*/
		public static SortHandCardQue(type: number): void {
			let arr: Array<proto.CardInfo> = GamePlayData.getHandCards(Global.userSit);
			let num: number = arr.length;
			var count: number = 0;
			for (var i: number = 0; i < num; i++) {
				var card: proto.CardInfo = arr[count];
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
			let arrCards: Array<proto.CardInfo> = this.getHandCards(sit);
			arrCards = this.SortCards(arrCards);
		}
		public static SortCards(arr: Array<proto.CardInfo>): Array<proto.CardInfo> {
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
	}
}