module game {
	export class GameMainUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private gGameInfo: eui.Group;
		private lbInfo: eui.Label;
		private lbLeftCard: eui.Label;
		public gameHand: game.GameHandUI;
		private gamePool: game.GamePoolUI;
		// public gamePosition: game.GamePositionUI;
		public gamePosition: game.GamePosition;
		private gameOpt: game.GameOperationUI;
		// private gameHSZ:game.GameHSZUI;
		private gameTrust: eui.Group;
		private btnTrust: eui.Image;
		private gBtns: eui.Group;
		private btnMore: BaseButton;
		private gSound: eui.Group;
		private btnSoundOff: BaseButton;
		private btnSoundOn: BaseButton;
		private btnRule: BaseButton;
		private btnBack: BaseButton;
		private isGaming: boolean = false;
		private imgTHTip: eui.Image;
		private imgTingTip: eui.Image;
		private gTingTip: eui.Group;
		private gTingCards: eui.Group;
		private arrTingCards: Array<any> = [];
		private btnContinue: eui.Image;
		private zniaoGroup: eui.Group;

		private trustText: eui.Image;
		private huIcon: eui.Image;
		private private: eui.Group;

		private infoBg: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();

			comm.DragonAnim.ins.topLayer = this;

			if (Global.language != "en") {
				this.infoBg.width = 500;
			} else {
				this.infoBg.width = 650;
			}

			this.btnTrust.source = "gameButton_cancelTrust_" + Global.language + "_png";
			this.trustText.source = "gameIcon_tuoguan_" + Global.language + "_png";
			this.huIcon.source = "gameIcon_hu_" + Global.language + "_png";
			this.imgTHTip.source = "gameIcon_tianhu_" + Global.language + "_png";
			this.btnContinue.source = "gameResult_continue_" + Global.language + "_png";
			this.gamePool = new game.GamePoolUI();
			this.addChild(this.gamePool);
			this.gamePool.initCard();

			this.gameHand = new game.GameHandUI();
			this.addChild(this.gameHand);
			this.gameHand.addEventListener("ShowTingGroup", this.onShowTingGroup, this);
			this.gameHand.addEventListener("ShowTingTip", this.onShowTingTip, this);
			this.gameHand.initHand();
			this.addChild(this.gameOpt);
			this.gameOpt.addEventListener("ShowTianHuFlag", this.onShowTHFlag, this);
			this.gameOpt.addEventListener("ShowTingHuFlag", this.onShowTingFlag, this);
			this.gameOpt.addEventListener("CloseTingHuFlag", this.onCloseTingFlag, this);
			// this.addChild(this.gameHSZ);
			// this.gameHSZ.addEventListener("OnSendHSZCards",this.onSendHSZCards,this);
			// this.gameHSZ.addEventListener("OnHSZAnimComplete",this.onHSZAnimComplete,this);

			this.addChild(this.gameTrust);
			this.btnTrust.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelTrust, this);

			this.addChild(this.gBtns);
			this.btnMore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowMoreBtns, this);
			this.gSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundChange, this);
			this.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowRule, this);
			this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackRoom, this);
			this.imgTingTip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTingTipClick, this);
			this.btnContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnContinue, this);

			this.addEventListener("UserLoseGame", this.onUserLoseGame, this);
			this.gamePosition.addEventListener("OnTimeComplete", this.onTimeComplete, this);
			this.lbLeftCard.text = Global.dic["余牌"] + ":0" + Global.dic["张"];
			this.initGame();
			this.initBtns();
			//test
			// var playList:Array<any>=[];
			// for(var i:number=0;i<4;i++){
			// 	let user:proto.PlayerInfo = new proto.PlayerInfo();
			// 	user.UserName = "test";
			// 	user.UsershowName = "test";
			// 	user.UserSit = i;
			// 	user.Coin = 9999;
			// 	user.UserImage = "";
			// 	playList.push(user);
			// }
			// game.GameUserList.saveUserListInfo(playList);
			// var handCardinfo:Array<any>=[];
			// for(var i:number=0;i<17;i++){
			// 	var cardInfo:proto.CardInfo=new proto.CardInfo();
			// 	cardInfo.CardID=1;
			// 	cardInfo.Sit=0;
			// 	handCardinfo.push(cardInfo);
			// }
			// game.GamePlayData.SaveHandCarsd(handCardinfo);
			// this.gameHand.createHandCard(true,0);
			// for(i=0;i<4;i++){
			// 	var cardArr:Array<any>=[];
			// 	for(var n:number=0;n<20;n++){
			// 		var cardInfo:proto.CardInfo=new proto.CardInfo();
			// 		cardInfo.CardID=1;
			// 		cardInfo.Sit=i;
			// 		cardArr.push(cardInfo);
			// 	}
			// 	game.GamePlayData.AddCardPool(cardArr,i,true);
			// }
			// this.gamePool.reductionCardsPool();//还原牌池
			this.gameOpt.visible = true;
		}
		public initGame(): void {
			this.btnContinue.visible = false;
			this.gGameInfo.visible = false;
			this.gameTrust.visible = false;
			this.imgTHTip.visible = false;
			this.imgTingTip.visible = false;
			this.gTingTip.visible = false;
			this.isGaming = false;
			this.arrTingCards = [];
			// this.gameHSZ.init();
			this.gamePool.initCard();
			this.gameHand.initHand();
			this.gameOpt.initBtns();
			this.startTime(0);
			if (Global.isSound == true) {
				this.btnSoundOn.visible = true;
				this.btnSoundOff.visible = false;
			} else {
				this.btnSoundOn.visible = false;
				this.btnSoundOff.visible = true;
			}
			for (let i: number = 0; i < 4; i++) {
				this["gameUser" + i].visible = false;
			}
			this.changeMoreGroup(false, false);
		}
		private initBtns(): void {
			this.btnMore.setImg(Global.commURL + "/shareSheet/commGameButton_more.png");
			this.btnSoundOn.setImg(Global.commURL + "/shareSheet/commGameButton_soundon.png");
			this.btnSoundOff.setImg(Global.commURL + "/shareSheet/commGameButton_soundoff.png");
			this.btnRule.setImg(Global.commURL + "/shareSheet/commGameButton_help.png");
			this.btnBack.setImg(Global.commURL + "/shareSheet/commGameButton_back.png");
		}
		private onShowMoreBtns(): void {
			if (this.gSound.visible) {
				this.changeMoreGroup(false, true);
			} else {
				this.changeMoreGroup(true, true);
			}
		}
		private changeMoreGroup(b: boolean, isAnim: boolean): void {
			if (isAnim) {
				if (b) {
					this.gSound.visible = this.btnRule.visible = this.btnBack.visible = true;
					this.gSound.y = this.btnRule.y = this.btnBack.y = 0;
					egret.Tween.get(this.gSound).to({ y: 240 }, 200);
					egret.Tween.get(this.btnRule).to({ y: 120 }, 100);
					egret.Tween.get(this.btnBack).to({ y: 360 }, 300);
				} else {

					egret.Tween.get(this.gSound).to({ y: 0 }, 200);
					egret.Tween.get(this.btnRule).to({ y: 0 }, 100);
					egret.Tween.get(this.btnBack).to({ y: 0 }, 300).call(function () {
						this.gSound.visible = this.btnRule.visible = this.btnBack.visible = false;
					}, this);
				}
			} else {
				this.gSound.visible = this.btnRule.visible = this.btnBack.visible = b;
			}
		}
		private onSoundChange(): void {
			this.btnSoundOn.visible = !this.btnSoundOn.visible;
			this.btnSoundOff.visible = !this.btnSoundOn.visible;
			if (this.btnSoundOn.visible) {
				Global.isSound = true;
				sound.SoundManager.getInstance().setBgOn(Global.isSound);
				sound.SoundManager.getInstance().setEffectOn(true);
				sound.SoundManager.getInstance().playBg("mjBgm_mp3");

				BaseHttpRequest.sendRequestGetOnce(Global.baseURL + "SetUserInfo", this.onChangeMyHead, this, "token=" + Global.token + "&sound=" + 1);
			} else {
				Global.isSound = false;
				sound.SoundManager.getInstance().setBgOn(Global.isSound);
				sound.SoundManager.getInstance().setEffectOn(false);
				sound.SoundManager.getInstance().stopBg();
				BaseHttpRequest.sendRequestGetOnce(Global.baseURL + "SetUserInfo", this.onChangeMyHead, this, "token=" + Global.token + "&sound=" + 2);
			}
		}
		private onChangeMyHead(evt: egret.Event): void {
			var json = evt.target.data;
			if (json == "") {
				return;
			}

		}
		private onShowRule(): void {
			ViewManager.ins.showRule();
		}
		private onBackRoom(): void {
			if (!this.isGaming) {
				ViewManager.ins.switchToRoom();
			} else {
				TipsUtils.showTipsFromCenter(Global.dic["游戏未结束"]);
			}
		}
		/*初始化四个玩家*/
		public initUser(): void {
			this.isGaming = true;
			let len: number = game.GameUserList.arrUserList.length;
			for (let i: number = 0; i < len; i++) {
				let user: game.GameUserInfo = game.GameUserList.arrUserList[i];
				let p: number = Global.getUserPosition(user.userSit);
				this["gameUser" + p].setUserInfo(user);
				this["gameUser" + p].visible = true;
			}
			/*开始游戏动画*/
			if (!Global.isContinue) {
				comm.DragonAnim.ins.playAnimByName("ksyx", -1);
				Global.isContinue = false;
			}
			this.showGameInfo();
		}
		private showGameInfo(): void {
			this.gGameInfo.visible = true;
			this.lbInfo.text = Global.dic["局号"] + Global.strGameGUID + " " + this.findRoomName();
		}
		public initPosition(): void {
			this.gamePosition.setPosition();
		}
		/*初始化玩家手牌*/
		public initHandCard(): void {
			this.gameHand.createHandCard(false, 0);
		}
		// 初始化起手牌牌型
		public initQshHandCard(): void {
			for (let i: number = 0; i < 4; i++) {
				this["znaio" + i].visible = false;
				this["qsh" + i].visible = true;
			}
		}
		public showWallCount(): void {
			if (108 - GamePlayData.CardsWall_Head_Index - GamePlayData.CardsWall_Tail_Index - GamePlayData.CardsWall_Hua_Index > 0) {
				this.lbLeftCard.text = Global.dic["余牌"] + ":" + (108 - GamePlayData.CardsWall_Head_Index - GamePlayData.CardsWall_Tail_Index - GamePlayData.CardsWall_Hua_Index) + Global.dic["张"];
			} else {
				this.lbLeftCard.text = Global.dic["余牌"] + ":0" + Global.dic["张"];
			}

		}
		/*显示玩家的定缺*/
		public onUserDingQue(): void {
			let len: number = game.GameUserList.arrUserList.length;
			for (let i: number = 0; i < len; i++) {
				let user: game.GameUserInfo = game.GameUserList.arrUserList[i];
				let p: number = Global.getUserPosition(user.userSit);
				if (p == 2) {
					this["gameUser" + p].setUserDQ(user.cardType, "left");
				} else {
					this["gameUser" + p].setUserDQ(user.cardType, "right");
				}
				if (Global.userSit == user.userSit) {
					//重新排序自己的手牌
					GamePlayData.SortHandCardQue(user.cardType);
					this.gameHand.updataHandsByPosition(Global.userSit, 0, true);
				}
			}
			// this.gameHSZ.initHSZ();
		}
		// public startHSZAndDQ(state:number):void{
		// 	if(state == 1){//换三张提示
		// 		this.gameHSZ.showHSZTips();
		// 		this.gameHand.onShowHSZCards();
		// 	}else{//定缺提示
		// 		this.gameHSZ.showDQTips();
		// 	}

		// }
		// /*玩家换三张*/
		// public onUserHSZ(data:game.AckHuanSanZhang):void{
		// 	this.gameHSZ.showHSZAnim(data.order);
		// }
		private onHSZAnimComplete(): void {
			this.gameHand.updataHandsByPosition(Global.userSit, 0);
			this.gameHand.showHandCardAnim(GamePlayData.HSZGetCards);
			//发送换三张结束
			game.GameWebSocket.instance().gameSender.ReqHuanSanZhangEnd();
		}
		/*玩家点击了换三张的确定按钮*/
		private onSendHSZCards(): void {
			this.gameHand.adjustMyHandCard();
		}
		public showHuaCard(sit, CardID): void {
			this.gameHand.showHuCard(sit, CardID, 0);
		}
		public userBuhua(sit): void {
			this.gameHand.updataHandsByPosition(sit, 0);
			//this.gameHand.showHuCard(sit,huCardID,type);
		}
		/*玩家出牌*/
		public userSendCard(card: proto.CardInfo, b: boolean): void {
			this.gameOpt.visible = false;
			this.gamePool.addCardToPool(card);
			this.gameHand.updataHandsByPosition(card.Sit, 0);
			game.SoundModel.playCardSound(card);
			let cardValue: number = game.GameParmes.getCardID(card);
			if (this.gTingTip.visible) {
				for (let i: number = 0; i < this.gTingCards.numChildren; i++) {
					let item: game.BaseTingCardUI = this.gTingCards.getChildAt(i) as game.BaseTingCardUI;
					if (item.cardIndex == cardValue) {
						item.updataLeftCard();
					}
				}
			}
		}
		/*显示吃碰杠等操作按钮*/
		public onShowOpt(data: proto.NotUserOperation): void {

			this.gameOpt.showOpt(data);//0 吃 1碰 2杠 3胡 4听
			this.onCloseTingFlag();
			this.gamePosition.startTime(GameParmes.chiPengGangSurplusTime);
			// if(GameParmes.isHu){//如果玩家胡牌后，这时候再次胡或杠停止自动出牌
			// 	if(arr[2] || arr[3]){
			// 		this.gameHand.stopAutoSendCard();
			// 	}
			// }
			// if(arr[3] && GameParmes.nHuType == 16){//此时是天胡情况 下面的判断就不用走了
			// 	return ;
			// }
			// if(GameParmes.isHu == false && arr[4]){
			if (game.GamePlayData.M_C_P_G_sit == Global.userSit) {//自己牌权时才判断是否听牌
				this.gameHand.showTingFlag(true, "ting");
				this.checkLPCards();
			}
			//}
		}
		public showHandCardMask(): void {
			this.gameHand.showTingMask();
		}
		private checkLPCards(): void {//需要同时调用，顺序固定，先手牌在牌池
			this.gameHand.checkLPCards();
			this.gamePool.checkLPCards();
		}
		//关闭停牌并解锁牌
		public onCloseTingFlag(): void {
			GameParmes.hasClickTing = false;
			if (game.GamePlayData.tingData[Global.userSit] == true) {
				return;
			}
			this.gameHand.closeTingFlag();
		}
		//显示听牌并锁定牌
		private onShowTingFlag(): void {
			GameParmes.hasClickTing = true;
			this.gameHand.showTingFlag(true, "tingEX");
			this.checkLPCards();
		}
		/*显示*/
		private onShowTHFlag(): void {
			this.gameHand.showTingFlag(true, "hu");
			this.imgTHTip.visible = true;
		}
		private onShowTingGroup(evt: egret.Event): void {
			let nCardIndex: number = evt.data;
			this.gameOpt.showTingGroup(nCardIndex);
		}

		/*显示托管界面*/
		public showTrust(b: boolean): void {
			this.gameTrust.visible = b;
		}
		/*取消托管*/
		private onCancelTrust(): void {
			room.RoomWebSocket.instance().roomSender.TRUST();
		}
		/**
		 * @param card 得到的牌的信息
		 */
		public getOneCard(card: proto.CardInfo): void {
			this.gameOpt.visible = false;
			this.showWallCount();
			//在打牌阶段得倒的牌不用刷新，把牌放在最右边
			if (GameParmes.gameStage == GameStageType.PLAYING) {
				this.gamePosition.startTime(GameParmes.gamePlayTime);
				this.gameHand.getOneCard(card);
				let p: number = Global.getUserPosition(card.Sit);//刷新剩余牌张数，听牌显示
				if (this.gTingTip.visible && p == 3) {
					let cardValue: number = game.GameParmes.getCardID(card);
					for (let i: number = 0; i < this.gTingCards.numChildren; i++) {
						let item: game.BaseTingCardUI = this.gTingCards.getChildAt(i) as game.BaseTingCardUI;
						if (item.cardIndex == cardValue) {
							item.updataLeftCard();
						}
					}
				}

			}
			this.changeUserRight();
		}
		public hideTingFlag(): void {
			this.gameHand.showTingFlag(false, "");
			this.gameHand.showHuFlag();
		}
		public showHuCard(sit: number, huCardID: number, type: number): void {
			this.imgTHTip.visible = false;
			this.gameHand.showHuCard(sit, huCardID, type);
		}
		public delPoolCard(sit: number): void {
			this.gamePool.playHuAnim(sit);//播放闪电动画,然后移除这张牌
		}
		/** 
		 * @param nSit 吃碰杠玩家座位号
		 * 有玩家进行了吃碰杠操作ch
		 */
		public updataUserCPG(nSit: number, card: proto.CardInfo): void {
			this.gameHand.updataHandsByPosition(nSit, 0);
			this.gameHand.createCPGCard(nSit);
			if (card.Sit != nSit) {//吃碰杠的牌的座位号和吃碰的人的座位号不等，牌池的牌消失
				this.gamePool.removeCardToPool(card.Sit);
			}
			this.gamePosition.stopTime();
			this.gamePosition.startTime(GameParmes.chiPengGangSurplusTime);
			this.gameOpt.visible = false;
			this.changeUserRight();
		}
		public onGameContinue(): void {
			this.gameHand.createHandCard(true, 0);//还原手牌
			this.gameHand.createAllCPG();//还原吃碰杠牌
			this.gamePool.reductionCardsPool();//还原牌池
			this.showGameInfo();
			GameWebSocket.instance().gameSender.ReqGamePlayerReleveTrustFun();//解除托管
			if (GameParmes.gameStage == GameStageType.PLAYING) {
				this.onUserDingQue();
			} else if (GameParmes.gameStage == GameStageType.CHANGE) {//换三张阶段
				if (GameParmes.nHSZComplete == 1) {//0:没有换  1:已经换了
					game.GameWebSocket.instance().gameSender.ReqHuanSanZhangEnd();//发送换三张结束
				} else {
					//this.startHSZAndDQ(1);
				}
			} else if (GameParmes.gameStage == GameStageType.DINGQUE) {//定缺阶段
				if (GameParmes.arrDQState.length > 0 && GameParmes.arrDQState[0] == -1) {//没有定缺
					//this.startHSZAndDQ(2);
				} else {
					this.onUserDingQue();
				}
			}
			//还原胡牌数据
			for (let i: number = 0; i < GameParmes.onBreakPlayerHuCards.length; i++) {
				let arr: Array<number> = GameParmes.onBreakPlayerHuCards[i];
				for (let j: number = 0; j < arr.length; j++) {
					this.showHuCard(i, arr[j], 4);
				}

			}
			this.changeUserRight();
			for (var i: number = 0; i < 4; i++) {
				if (game.GamePlayData.tingData[i] == true) {
					if (i == Global.userSit) {
						this.showHandCardMask();
					}
					let p: number = Global.getUserPosition(i);
					this["gameUser" + p].setTingType(true);
				}
			}
		}
		public showAllHandCard(): void {
			this.imgTingTip.visible = false;
			this.gTingTip.visible = false;
			this.gameTrust.visible = false;
			this.gameOpt.visible = false;
			this.isGaming = false;
			this.gameHand.createHandCard(true, 1);//全部亮开手牌
			for (let i: number = 0; i < 4; i++) {
				this["gameUser" + i].showCurrentAnim(false);
			}

		}
		//抓鸟
		public showZhuaNiaoResult(body: proto.NotZaNiao) {
			this["qsh0"].visible = this["qsh1"].visible = this["qsh2"].visible = this["qsh3"].visible = false;
			console.log("抓鸟结果" + JSON.stringify(body));
			this.zniaoGroup.visible = true;
			this.zniaoGroup.touchEnabled = false;
			let state = 0;
			if (body.stage == 4) {
				let arr: Array<proto.CardInfo> = [];
				for (let i: number = 0; i < body.result.length; i++) {
					let info: proto.CardInfo = body.result[i];
					arr.push(info);
					let cardValue: number = game.GameParmes.getCardID(info);
					let card: BaseHandCardUI = new BaseHandCardUI();
					card.setCard(3, i, cardValue, state, false);
					this.zniaoGroup.addChild(card);
					let p: number = Global.getUserPosition(info.Sit);
					this["znaio" + p].visible = true;
					this["znaio" + p].font = Global.language + "znFnt_fnt";
					this["znaio" + p].text = p;
				}
			}

		}
		public setUserTing(sit: number): void {
			let p: number = Global.getUserPosition(sit);
			this["gameUser" + p].setTingType(true);
		}
		/*玩家金币变化*/
		public showCoinChange(arrCoin: Array<number>): void {
			//延迟1s显示加减金币动画
			for (let i: number = 0; i < arrCoin.length; i++) {
				if (arrCoin[i] != 0) {
					let p: number = Global.getUserPosition(i);
					let coin: number = arrCoin[i];
					egret.setTimeout(function () {
						this["gameUser" + p].updataCoin(coin);
						//this.gameHSZ.showCoinAnim(p,coin);
					}, this, 1000);
				}
			}
		}
		/*更新玩家金币*/
		public updataUserCoin(sit: number, coin: number): void {
			let p: number = Global.getUserPosition(sit);
			this["gameUser" + p].showResultCoin(coin);
			if (Global.userSit == sit) {
				Global.gameCoin = coin;
			}
		}
		/*某玩家认输*/
		public onUserLoseGame(evt: egret.Event): void {
			let nSit: number = evt.data;
			//this.gameHSZ.showUserLose(evt.data);
			if (nSit == Global.userSit) {//如果是自己认输，自己手牌置灰
				this.gameHand.showHuFlag();
			}
		}
		public playAnim(str: string, sit: number, obSit: number = -1): void {
			let p: number = Global.getUserPosition(sit);
			let op: number = Global.getUserPosition(obSit);
			if (str == "hdly") {
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "anGang") {
				comm.DragonAnim.ins.playAnimByName("ag", p);
			}
			if (str == "peng") {
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "bt") {
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "bh") {
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "mingGang") {
				comm.DragonAnim.ins.playAnimByName("mg", p);
				//comm.DragonAnim.ins.playAnimByName("ljf",op);
			}
			if (str == "mingGang") {
				comm.DragonAnim.ins.playAnimByName("mg", p);
				//comm.DragonAnim.ins.playAnimByName("ljf",op);
			}
			if (str == "chi") {
				comm.DragonAnim.ins.playAnimByName("chi", p);
				//comm.DragonAnim.ins.playAnimByName("xy",-1);
			}
			if (str == "buGang") {
				comm.DragonAnim.ins.playAnimByName("jg", p);
				//comm.DragonAnim.ins.playAnimByName("ljf",-1);
			}
			if (str == "hu" || str == "zm") {
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "qgh") {//杠上开花 呼叫转移 抢杠胡
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "ypdx") {//一炮多响
				//comm.DragonAnim.ins.playAnimByName("ypdx",op);
			}
			if (str == "djjs" || str == "liuju") {//对局结束
				//comm.DragonAnim.ins.playAnimByName(str,-1);
			}
			if (str == "dj" || str == "hz") {//大叫，花猪
				//comm.DragonAnim.ins.playAnimByName(str,p);
			}
		}
		// 显示当前出牌玩家头像动画
		public changeUserRight(): void {
			var nCurrent: number = game.GamePlayData.M_C_P_G_sit;//当前操作人的座位号
			// this.gamePosition.setCurrentPosition(nCurrent);
			let p: number = Global.getUserPosition(nCurrent);
			this.gamePosition.onShowOpetorPostion(p);

			for (let i: number = 0; i < 4; i++) {
				if (p == i) {
					this["gameUser" + i].showCurrentAnim(true);
				} else {
					this["gameUser" + i].showCurrentAnim(false);
				}
			}
		}
		public showResultBtn(): void {
			this.btnContinue.visible = true;
			this.addChild(this.btnContinue);
		}
		private onBtnContinue(): void {
			this.btnContinue.visible = false;
			this.dispatchEvent(new egret.Event("OnGameContinue", true, true));
		}
		public startTime(count: number, str: string = ""): void {
			this.gamePosition.startTime(count, str);
		}
		private onTingTipClick(): void {
			this.gTingTip.visible = !this.gTingTip.visible;
			if (this.gTingTip.visible) {
				this.addChild(this.gTingTip);
				this.createHuCards(this.arrTingCards);
			}
		}
		/*显示听牌的灯泡提示*/
		private onShowTingTip(evt: egret.Event): void {
			//"isShowTing":item.isTingFlag,"index":item.cardIndex
			if (GameParmes.isHu) {
				return;
			}
			let obj = evt.data;
			this.imgTingTip.visible = obj.isShowTing;
			if (this.imgTingTip.visible) {
				this.showTingGroup(obj.index);
				this.addChild(this.imgTingTip);
			} else {
				this.gTingTip.visible = false;
				this.arrTingCards = [];
			}
		}
		/*显示待胡牌*/
		private showTingGroup(nIndex: number): void {
			let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
			for (let i: number = 0; i < arr.length; i++) {
				let info: any = arr[i];
				if (GameParmes.getCardIDByID(info.ObtainCardIndex) == nIndex) {
					// console.log(info.ObtainCardIndex, GameParmes.getCardIDByID(info.ObtainCardIndex));
					this.copyTingCards(info.CallCards);
					this.createHuCards(info.CallCards);
					break;
				}
			}
		}
		private copyTingCards(arr: Array<any>): void {
			this.arrTingCards = [];
			for (let i: number = 0; i < arr.length; i++) {
				this.arrTingCards.push(arr[i]);
			}
		}
		private createHuCards(arr: Array<any>): void {
			while (this.gTingCards.numChildren > 1) {
				let item = this.gTingCards.removeChildAt(1);
				item = null;
			}
			this.checkLPCards();
			for (let i: number = 0; i < arr.length; i++) {
				let item: game.BaseTingCardUI = new game.BaseTingCardUI();
				this.gTingCards.addChild(item);
				let cardNum: number = 4 - GamePlayData.arrLPCards[GameParmes.getCardIDByID(arr[i].CardIndex)].length;

				cardNum = cardNum > -1 ? cardNum : 0;
				item.setInfo(GameParmes.getCardIDByID(arr[i].CardIndex), arr[i].FanType, cardNum);
			}
			this.gTingTip.width = this.gTingCards.width + 58;
		}
		private onTimeComplete(evt: egret.Event): void {
			let str: string = evt.data;
			if (str == "hsz") {//玩家未操作,帮他处理
				//this.gameHSZ.autoHSZ();
			}
		}
		private findRoomName(): string {
			let str: string = "";
			switch (Global.roomId) {
				case 1:
					str = Global.dic["入门馆"];
					break;
				case 2:
					str = Global.dic["初级馆"];
					break;
				case 3:
					str = Global.dic["中级馆"];
					break;
				case 4:
					str = Global.dic["高级馆"];
					break;
				case 5:
					str = Global.dic["顶级馆"];
					break;
				case 6:
					str = Global.dic["至尊馆"];
					break;
			}
			return str;
		}
		public dispose(): void {

		}
	}
}