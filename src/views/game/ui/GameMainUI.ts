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
		public zniaoGroup: eui.Group;
		public znaioItemGroup: eui.Group;

		public CardGroup: eui.Group;

		private trustText: eui.Image;
		private huIcon: eui.Image;
		private private: eui.Group;

		private btnTest: eui.Image;

		public twoChi:eui.Group;
		private lchiGroup:eui.Group;
		private RchiGroup:eui.Group;

		private birdsGroup:eui.Group;



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
			this.CardGroup.addChild(this.gamePool);
			this.gamePool.initCard();

			this.gameHand = new game.GameHandUI();
			this.CardGroup.addChild(this.gameHand);
			this.gameHand.addEventListener("ShowTingGroup", this.onShowTingGroup, this);
			this.gameHand.addEventListener("ShowTingTip", this.onShowTingTip, this);
			this.gameHand.initHand();
			this.addChild(this.gameOpt);
			this.gameOpt.addEventListener("ShowTianHuFlag", this.onShowTHFlag, this);
			this.gameOpt.addEventListener("ShowTingHuFlag", this.onShowTingFlag, this);
			this.gameOpt.addEventListener("CloseTingHuFlag", this.onCloseTingFlag, this);

			this.lchiGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapLeftChi, this);
			this.RchiGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapRightChi, this);

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
			this.lbLeftCard.text = Global.dic["??????"] + ":0" + Global.dic["???"];
			this.initGame();
			this.initBtns();


			// ???????????????
			this.btnTest.visible = false;
			this.btnTest.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
				// ViewManager.ins.gameView.gameMatch.stopAnim();
				// this.initPosition();
				// this.onShowOpt([true,true,true,true,true]);
				// return
				//const card =  new game.CardInfo()
				// GameParmes.gameStage = GameStageType.PLAYING

				//const nSit = 1;
			
				// let card1: CardInfo = { CardID:2, Sit: 1 };
				// this.userSendCard(card1, false);
				//  let card2: CardInfo = { CardID:11, Sit: 2};
				//  this.userSendCard( card2,false);
				//  let card3: CardInfo = { CardID:18, Sit: 3 };
				//  this.userSendCard( card3,false);
				//  let card4: CardInfo = { CardID:18, Sit: 4 };
				//  this.userSendCard( card4,false);


				//  let card10: CardInfo = { CardID:1, Sit: 2 };
				//  this.userSendCard( card10,false);
				//  let card20: CardInfo = { CardID:11, Sit: 2 };
				//  this.userSendCard( card20,false);
				//  let card30: CardInfo = { CardID:18, Sit: 2 };
				//  this.userSendCard( card30,false);
				//  let card40: CardInfo = { CardID:18, Sit: 2 };
				//  this.userSendCard( card40,false);


				//  let card11: CardInfo = { CardID:1, Sit: 1 };
				//  this.userSendCard( card11,false);
				//  let card21: CardInfo = { CardID:11, Sit: 1 };
				//  this.userSendCard( card21,false);
				//  let card31: CardInfo = { CardID:18, Sit: 1 };
				//  this.userSendCard( card31,false);
				//  let card41: CardInfo = { CardID:18, Sit: 1 };
				//  this.userSendCard( card41,false);

			//   const gameopt = game.GamePlayData.MockGameOption();
			// 	ViewManager.ins.gameView.ACK_GAME_OPERATION( <any>{data:gameopt} );

				// const Useropt = game.GamePlayData.MockUserOption();
				// ViewManager.ins.gameView.ACK_USER_OPERATION(<any>{data:Useropt} );

				//    const gameopt = game.GamePlayData.MockSyncGameNtc();
				//    game.GamePlayData.ContinueGame(gameopt);

				   const gameopt = game.GamePlayData.MockResultNtc();
				   ViewManager.ins.gameView.ACK_ALL_GAMERESULT( <any>{data:gameopt} );

				// this.gamePosition.setPositionItem(0);
				ViewManager.ins.gameView.gameMatch.stopAnim();
				
			}, this);
		
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
				TipsUtils.showTipsFromCenter(Global.dic["???????????????"]);
			}
		}
		/*?????????????????????*/
		public initUser(): void {
		
			this.isGaming = true;
			let len: number = game.GameUserList.arrUserList.length;
			for (let i: number = 0; i < len; i++) {
				let user: game.GameUserInfo = game.GameUserList.arrUserList[i];
				let p: number = Global.getUserPosition(user.userSit);	
				this["gameUser" + p].setUserInfo(user);
				this["gameUser" + p].visible = true;
			}
			/*??????????????????*/
			if (!Global.isContinue) {
				//comm.DragonAnim.ins.playAnimByName("ksyx", -1);
				Global.isContinue = false;
			}
			this.showGameInfo();
			
			//this.gamePosition.setDirectionsPosition(game.GameParmes.firstSit)
		}
		private showGameInfo(): void {
			this.gGameInfo.visible = true;
			this.lbInfo.text = Global.dic["??????"] +": "+ Global.strGameGUID + " " + this.findRoomName();
		}
		public initPosition(): void {
			this.gamePosition.setDirectionsPosition(game.GameParmes.firstSit);
		}
		/*?????????????????????*/
		public initHandCard(): void {
			this.gameHand.createHandCard(false, 0);
		}
		// ????????????????????????
		public initQshHandCard(): void {
			for (let i: number = 0; i < 4; i++) {
				const startFun = this["gameUser" + i].startFan
				if(startFun){
					let str = ''
					startFun.forEach(e=>{
						if( e == 0){
							str  += "x "; // ?????????
						}
						if(  e == 1){
							str  += "b ";  // ?????????
						}
						
						if(  e == 2){
							str  += "l "; // ?????????
						}
						
						if(  e == 3){
							str  += "q "; // ?????????
							
						}
						

					})
					
					this["qsh" + i].visible = false;
					this["qsh" + i].text = str; 
			
				}else{
					this["qsh" + i].visible = false;
				}
				
			}
		}
		public showWallCount(num): void {
			this.lbLeftCard.text = `${Global.dic["??????"]}:${num}${Global.dic["???"]}`;
		}


		public showHuaCard(sit, CardID): void {
			this.gameHand.showHuCard(sit, CardID, 0);
		}

		/*????????????*/
		public userSendCard(card: game.CardInfo, b: boolean): void {
			this.gameOpt.visible = false;
			this.gamePool.addCardToPool(card);
			this.gameHand.updataHandsByPosition(card.Sit, 0);
			game.SoundModel.playCardSound(card.CardID);
	
		}

		public showRoomGUID(guid: string) {

			//this.duyi.text = `${Global.dic["??????"]}:${guid}`;
		}
		/*??????????????????????????????*/
		public onShowOpt(data:  Array<any>): void {
			this.gameOpt.showOpt(data);//0 ??? 1??? 2??? 3??? 4???
			this.onCloseTingFlag();

		
			// if(GameParmes.isHu == false && arr[4]){
			// if (game.GamePlayData.playingSeat == Global.userSit) {//????????????????????????????????????
			// 	this.gameHand.showTingFlag(true, "ting");
			// 	this.checkLPCards();
			// }
			//}
		}
		public showHandCardMask(): void {
			this.gameHand.showTingMask();
		}
		private checkLPCards(): void {//??????????????????????????????????????????????????????
			this.gameHand.checkLPCards();
			this.gamePool.checkLPCards();
		}
		//????????????????????????
		public onCloseTingFlag(): void {
			GameParmes.hasClickTing = false;
			if (game.GamePlayData.tingData[Global.userSit] == true) {
				return;
			}
			// this.gameHand.closeTingFlag();
		}
		//????????????????????????
		private onShowTingFlag(): void {
			GameParmes.hasClickTing = true;
			this.gameHand.showTingFlag(true, "tingEX");
			this.checkLPCards();
		}
		/*??????*/
		private onShowTHFlag(): void {
			this.gameHand.showTingFlag(true, "hu");
			this.imgTHTip.visible = true;
		}
		private onShowTingGroup(evt: egret.Event): void {
			let nCardIndex: number = evt.data;
			this.gameOpt.showTingGroup(nCardIndex);
		}

		/*??????????????????*/
		public showTrust(b: boolean): void {
		
			this.gameTrust.visible = b;
		}
		/*????????????*/
		private onCancelTrust(): void {
	
			room.RoomWebSocket.instance().roomSender.ReqGamePlayerReleveTrustFun()
		}
		/**
		 * @param card ?????????????????????
		 */
		public getOneCard(card: game.CardInfo): void {
			this.gameOpt.visible = false;

			//???????????????????????????????????????????????????????????????
			if (GameParmes.gameStage == GameStageType.PLAYING) {
				this.gameHand.getOneCard(card);
			}			
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
			this.gamePool.playHuAnim(sit);//??????????????????,?????????????????????
		}
		/** 
		 * @param nSit ????????????????????????
		 * ?????????????????????????????????ch
		 */
		public updataUserCPG(nSit: number, card: game.CardInfo): void {
			this.gameHand.updataHandsByPosition(nSit, 0);
			this.gameHand.createCPGCard(nSit);
			if (card.Sit != nSit) {//?????????????????????????????????????????????????????????????????????????????????
				this.gamePool.removeCardToPool(card.Sit);
			}
			this.gamePosition.stopTime();
			// this.gamePosition.startTime(GameParmes.chiPengGangSurplusTime);
			this.gameOpt.visible = false;

			// egret.setTimeout(function(){
			// 	for (let j: number = 1; j < 5; j++) {
			// 		this.gameHand.updataHandsByPosition(j, 0);
			// 	}
			// },this,10);
			
		}
		public onGameContinue(): void {
			this.gameHand.createHandCard(true, 0);//????????????
			this.gameHand.createAllCPG(true);//??????????????????
			this.gamePool.reductionCardsPool();//????????????
			this.gamePosition.setDirectionsPosition(game.GamePlayData.playingSeat);//????????????
			this.showGameInfo();

			room.RoomWebSocket.instance().roomSender.ReqGamePlayerReleveTrustFun()
	
			//??????????????????
			for (let i: number = 0; i < GameParmes.onBreakPlayerHuCards.length; i++) {
				let arr: Array<number> = GameParmes.onBreakPlayerHuCards[i];
				for (let j: number = 0; j < arr.length; j++) {
					this.showHuCard(i, arr[j], 4);
				}

			}
			//this.changeUserRight();
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
			this.gameHand.createHandCard(true, 1);//??????????????????
			for (let i: number = 0; i < 4; i++) {
				this["gameUser" + i].showCurrentAnim(false);
			}

		}

		public showQishouhu(): void {
			this.gameOpt.visible = true;
			this.gameOpt.showQishouhu();
		}

		public setUserTing(sit: number): void {
			let p: number = Global.getUserPosition(sit);
			this["gameUser" + p].setTingType(true);
		}
		/*??????????????????*/
		public showCoinChange(arrCoin: Array<number>): void {
			//??????1s????????????????????????
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
		/*??????????????????*/
		public updataUserCoin(sit: number, coin: number): void {
			let p: number = Global.getUserPosition(sit);
			this["gameUser" + p].showResultCoin(coin);
			if (Global.userSit == sit) {
				Global.gameCoin = coin;
			}
		}
		/*???????????????*/
		public onUserLoseGame(evt: egret.Event): void {
			let nSit: number = evt.data;
			//this.gameHSZ.showUserLose(evt.data);
			if (nSit == Global.userSit) {//??????????????????????????????????????????
				this.gameHand.showHuFlag();
			}
		}
		public playAnim(str: string, sit: number, obSit: number = -1): void {
			let p: number = Global.getUserPosition(sit);
			let op: number = Global.getUserPosition(obSit);
			if (str == "hdly") {
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "gy") {//??????
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
			if (str == "qgh") {//???????????? ???????????? ?????????
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "ypdx") {//????????????
				//comm.DragonAnim.ins.playAnimByName("ypdx",op);
			}
			if (str == "djjs" || str == "liuju") {//????????????
				//comm.DragonAnim.ins.playAnimByName(str,-1);
			}
			if (str == "dj" || str == "hz") {//???????????????
				//comm.DragonAnim.ins.playAnimByName(str,p);
			}
		}
		// ????????????????????????????????????
		public changeUserRight(nSit): void {

			let p: number = Global.getUserPosition(nSit);
			//console.error(`?????? ???????????????:${nSit},  ????????????:${Global.userSit} , ???????????????${p}`)
		
			this.gamePosition.setPositionItem(p);

			for (let i: number = 0; i < 4; i++) {
				if (p == i) {
					this["gameUser" + i].showCurrentAnim(true);
				} else {
					this["gameUser" + i].showCurrentAnim(false);
				}
			}
		}



		public hideZhaBird(){
			this.zniaoGroup.visible = false;
			this.birdsGroup.removeChildren();

			for( let i = 0; i< 4;i++ ){
				this["qsh" + i].visible = false;
				this[`zniao${i}`].visible = false;
			}

		}

		public showZhaBird(body:room.VGGameResultNtc){
			this.zniaoGroup.visible = true;

			const birds = body.birdTiles;
			birds.forEach( e=>{
				let strIndex = `cardValue00${e +1}` ;
				if (e < 9) {
					strIndex = `cardValue000${e +1}` ;
				}

				let card: BaseHandCardUI = new BaseHandCardUI();
				this.birdsGroup.addChild(card);
				let imgCard: eui.Image = new eui.Image();
		
				card.addChild(imgCard);

				imgCard.source  = strIndex;
			})

			body.userInfos.forEach( (e)=>{
				const seatid = e.userPos.seatID;
				const p = Global.getUserPosition(seatid);
				//this["gameUser" + p].setUserInfo(user);
				this[`zniao${p}`].visible = true;
				//this[`zniao${p}`]. = true;
				this[`zniao${p}`].text = e["niaoMulti"];
			})
		}

		public stopAllUserAnim(){
			for (let i: number = 0; i < 4; i++) {
				this["gameUser" + i].showCurrentAnim(false);
			}
		}
		public showResultBtn(): void {
			this.btnContinue.visible = true;
			this.addChild(this.btnContinue);
		}
		public onBtnContinue(): void {
			
			this.hideZhaBird();
			this.btnContinue.visible = false;
			GameController.onRequeseNextGame();
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
		/*???????????????????????????*/
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


		//?????? ?????? ?????????????????????
		public showTwochi( leftArr:number[], rightArr:number[] ){
			this.gameOpt.HasTwoChi = true;
			this.twoChi.visible = true;
			// console.log("= this.lchiGroup==s", leftArr,rightArr)

			leftArr.forEach( e=>{
				let strIndex = `cardValue00${e +1}` ;
			
				if (e < 9) {
					strIndex = `cardValue000${e+1}` ;
				}

				let card: BaseHandCardUI = new BaseHandCardUI();
				this.lchiGroup.addChild(card);
				let imgCard: eui.Image = new eui.Image();
				let g: eui.Group = new eui.Group();
				this.addChild(g);
				card.addChild(imgCard);
	
				imgCard.source  = strIndex;

			})

			rightArr.forEach( e=>{
				let strIndex = `cardValue00${e+1}` ;
				if (e < 9) {
					strIndex = `cardValue000${e+1}` ;
				}

				let card: BaseHandCardUI = new BaseHandCardUI();
				this.RchiGroup.addChild(card);
				let imgCard: eui.Image = new eui.Image();
				let g: eui.Group = new eui.Group();
				this.addChild(g);
				card.addChild(imgCard);
	
				imgCard.source  = strIndex;

			})
		}

		public clearTwoChi(){
			this.gameOpt.HasTwoChi = false;
			this.twoChi.visible = false;
			
			this.lchiGroup.removeChildren();
			this.RchiGroup.removeChildren();
		}

		private onTapRightChi(){
		
			this.gameOpt.initBtns();
			this.clearTwoChi();

			const mj_opts = game.GamePlayData.GetMJ_Operation();
			let mj_opt: room.MJ_Operation
			mj_opts.forEach(e => {
				if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
					mj_opt = e;
				}
			})

			if (!mj_opt) {
				return;
			}

			const opt: room.MJ_Operation = new room.MJ_Operation()
			opt.operationType = mj_opt.operationType;//????????????
			opt.Tiles = [] //??????  ??????????????????????????????????????????
			//??????????????????????????????????????????????????????????????????
			opt.ObtainTile = mj_opt.ObtainTile //????????????????????????????????? 
			opt.ObtainSeat = mj_opt.ObtainSeat //??????????????????????????????????????? 

			//????????????????????????????????????????????????
			opt.tingTileInfo = [] //MJ_TingTileInfo /????????????

			//????????????????????????????????????????????????
			opt.maxFan = 3 //???????????? 
			//opt.fans = 3 // MJ_FanInfo ??????????????????????????????????????? 
			//opt.operationID = Global.userSit + 1 //??????id

			room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
		}

		private onTapLeftChi(){
			this.gameOpt.HasTwoChi = false;
			this.gameOpt.initBtns();
			this.twoChi.visible = false;
			this.lchiGroup.removeChildren();
			this.RchiGroup.removeChildren();

			console.log("=onTapLeftChi==")

			const mj_opts = game.GamePlayData.GetMJ_Operation();
			let mj_opt: room.MJ_Operation
			mj_opts.forEach(e => {
				if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
					mj_opt = e;
				}
			})

			if (!mj_opt) {
				return;
			}

			const opt: room.MJ_Operation = new room.MJ_Operation()
			opt.operationType = mj_opt.operationType;//????????????
			opt.Tiles = [] //??????  ??????????????????????????????????????????
			//??????????????????????????????????????????????????????????????????
			opt.ObtainTile = mj_opt.ObtainTile //????????????????????????????????? 
			opt.ObtainSeat = mj_opt.ObtainSeat //??????????????????????????????????????? 

			//????????????????????????????????????????????????
			opt.tingTileInfo = [] //MJ_TingTileInfo /????????????

			//????????????????????????????????????????????????
			opt.maxFan = 3 //???????????? 
			//opt.fans = 3 // MJ_FanInfo ??????????????????????????????????????? 
			//opt.operationID = Global.userSit + 1 //??????id

			room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt);
		}



		/*???????????????*/
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
			if (str == "hsz") {//???????????????,????????????
				//this.gameHSZ.autoHSZ();
			}
		}


		private findRoomName(): string {
			let str: string = "";
			switch (Global.roomId) {
				case 1:
					str = Global.dic["?????????"];
					break;
				case 2:
					str = Global.dic["?????????"];
					break;
				case 3:
					str = Global.dic["?????????"];
					break;
				case 4:
					str = Global.dic["?????????"];
					break;
				case 5:
					str = Global.dic["?????????"];
					break;
				case 6:
					str = Global.dic["?????????"];
					break;
			}
			return str;
		}
		public dispose(): void {

		}
	}
}