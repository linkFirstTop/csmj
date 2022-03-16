class Global {
	public constructor() {
	}
	public static istest: boolean = false;
	/*游戏api*/
	public static baseURL: string = "";
	public static recordAPI: string = "";
	public static commURL: string = "";
	/*是否htpps*/
	public static isHttps: boolean = true;
	/*房间IP和端口*/
	public static roomIP: string = "";
	public static gameIP: string = "";
	public static nCurrentSocket: number = 0;
	public static arrSocket: Array<string> = ["ws://172.16.2.12:6010"];
	/*兑换率*/
	public static nChange: number = 100;
	public static strChange: string = "";
	/*声音是否加载完成*/
	public static isSoundLoad: boolean = true;
	/*动画是否加载完成*/
	public static isGameLoad: boolean = true;

	public static isShowGame: boolean = false;
	//游戏是否激活
	public static isWebActive: boolean = true;
	/*玩家用户名*/
	public static userName: string = "";
	/*玩家金币*/
	public static gameCoin: number = 0;
	/*token*/
	public static token: string = "";
	public static gameTicket: string = "";
	public static userId: number = 0;
	/*游戏ID*/
	public static gameID: number = 61;
	/*加载资源时间*/
	public static loadTime: number = 0;
	/*是否需要返回大厅*/
	public static isShowHall: boolean = false;
	public static gameHallURL: string = "";
	public static checkGameURL: string = "";
	public static userHead: number = 1;
	/*是否开启音效*/
	public static isEffectOn: boolean = true;
	/*计时器 用于页面最小化的处理*/
	public static nTimerCount: number = 0;
	public static loginType: number = 1;

	//游戏相关
	/*我的位置信息*/
	public static myPos: any;
	public static userSit: number = 0;
	/*选择的房间信息*/
	public static roomInfo: any;
	public static strGameGUID: string = "";
	public static roomData: Array<any> = [];
	/*显示名*/
	public static showName: string = "";
	/*渠道*/
	public static channel: string = "";
	/*是否断线续玩*/
	public static isContinue: boolean = false;
	public static isShowLog: boolean = false;
	public static isShowCoin: boolean = true;
	public static exchange: number = 100;

	/*声音是否加载完成*/
	public static isSound: boolean = true;

	public static soundOn: boolean = false;
	public static isDeal: boolean = false;
	public static openDell: boolean = false;//是否开启首局发牌

	/*动画是否加载完成*/
	public static isAnimLoad: boolean = false;

	public static zhuangSit: number = 0;//发牌器首局座位号
	public static handCardsFP: Array<proto.HandCards> = [];//发牌器的手牌
	/*room公用的一些值*/
	public static roomId: number = 0;
	public static tableId: string = "";
	public static tableMapId: number = 0;

	public static activeURL: string = "";

	public static arrConfig: Array<string> = [];
	public static isOpenActive: boolean = false;
	public static isActiveLoad: boolean = false;

	public static nSocketIndex: number = 0;
	public static getWebActive(): boolean {
		var isActive: boolean = true;
		if (Global.isWebActive == false) {
			var timeCount: number = (egret.getTimer() - Global.nTimerCount) / 1000;
			if (timeCount > 1) {//页面最小化了，计时器都不起作用了(正常应该是0.016左右)
				isActive = false;
			}
			Global.nTimerCount = egret.getTimer();
		}
		return isActive;
	}
	/*1刮风 2下雨 3自摸 4胡  5花猪  6大叫 7呼叫转移 8补杠 9退税*/
	public static getTypeName(type: number): string {

		let str: string = "";
		if (Global.language == "cn") {
			switch (type) {
				case 0:
					str = "庄家"
					break;
				case 1:
					str = "中一鸟"
					break;
				case 2:
					str = "中二鸟"
					break;
				case 3:
					str = "中三鸟"
					break;
				case 4:
					str = "中四鸟"
					break;
				case 5:
					str = "板板胡";
					break;
				case 6:
					str = "小四喜"
					break;
				case 7:
					str = "六六顺"
					break;
				case 8:
					str = "缺一色"
					break;
				
				case 9:
					str = "抢杠胡"
					break;
				case 10:
					str = "独听"
					break;
				case 11:
					str = "自摸"
					break;
				case 12:
					str = "平胡"
					break;
				case 13:
					str = "碰碰胡"
					break;
				case 14:
					str = "清一色"
					break;
				case 15:
					str = "将将胡"
					break;
				case 16:
					str = "全求人"
					break;
				case 17:
					str = "七对"
					break;
				case 18:
					str = "豪华七对"
					break;
				case 19:
					str = "双豪华七对";
					break;
				case 20:
					str = "海底捞月";
					break;
				case 21:
					str = "海底炮"
					break;
				case 22:
					str = "杠上开花"
					break;
				case 23:
					str = "杠上炮"
					break;
				case 24:
					str = "天胡"
					break;
				case 25:
					str = "地胡"
					break;
				case 26:
					str = "门清"
					break;
				case 27:
					str = "明杠"
					break;
				case 28:
					str = "暗杠"
					break;
				case 29:
					str = "补杠";
					break;
				case 30:
					str = "听牌";
					break;
				case 31:
					str = "无番和";
					break;
			}
		} else if (Global.language == "tc") {
			switch (type) {
				case 0:
					str = "莊家"
					break;
				case 1:
					str = "正花"
					break;
				case 2:
					str = "海底撈月"
					break;
				case 3:
					str = "杠上開花"
					break;
				case 4:
					str = "聽牌"
					break;
				case 5:
					str = "搶杠胡"
					break;
				case 6:
					str = "三元牌"
					break;
				case 7:
					str = "獨聽"
					break;
				case 8:
					str = "自摸"
					break;
				case 9:
					str = "門清"
					break;
				case 10:
					str = "三暗刻";
					break;
				case 11:
					str = "全求人"
					break;
				case 12:
					str = "春夏秋冬"
					break;
				case 13:
					str = "梅蘭竹菊"
					break;
				case 14:
					str = "平胡"
					break;
				case 15:
					str = "門清自摸"
					break;
				case 16:
					str = "混壹色"
					break;
				case 17:
					str = "小三元"
					break;
				case 18:
					str = "碰碰胡"
					break;
				case 19:
					str = "地聽";
					break;
				case 20:
					str = "四暗刻";
					break;
				case 21:
					str = "天聽"
					break;
				case 22:
					str = "清壹色"
					break;
				case 23:
					str = "大三元"
					break;
				case 24:
					str = "五暗刻"
					break;
				case 25:
					str = "小四喜"
					break;
				case 26:
					str = "八仙過海"
					break;
				case 27:
					str = "大四喜"
					break;
				case 28:
					str = "地胡"
					break;
				case 29:
					str = "天胡";
					break;
				case 30:
					str = "明杠";
					break;
				case 31:
					str = "暗杠";
					break;
				case 32:
					str = "無番胡";
					break;
			}

		} else if (Global.language == "en") {
			switch (type) {
				case 0:
					str = "Dealer"
					break;
				case 1:
					str = "Bonus Tiles"
					break;
				case 2:
					str = "Under the Sea"
					break;
				case 3:
					str = "Win After Kong"
					break;
				case 4:
					str = "Ready Hand"
					break;
				case 5:
					str = "Snatch Kong"
					break;
				case 6:
					str = "The Dragons"
					break;
				case 7:
					str = "Du Ting"
					break;
				case 8:
					str = "Self-Draw"
					break;
				case 9:
					str = "Concealed Hand"
					break;
				case 10:
					str = "Three Concealed Pongs";
					break;
				case 11:
					str = "Melded Hand"
					break;
				case 12:
					str = "Season Tiles"
					break;
				case 13:
					str = "Flower Tiles"
					break;
				case 14:
					str = "All Chows"
					break;
				case 15:
					str = "Self-drawn Concealed Hand"
					break;
				case 16:
					str = "Half Flush"
					break;
				case 17:
					str = "Small Dragon"
					break;
				case 18:
					str = "All Pongs"
					break;
				case 19:
					str = "De Ting";
					break;
				case 20:
					str = "Four Concealed Pongs";
					break;
				case 21:
					str = "Heavenly Ready"
					break;
				case 22:
					str = "Pure One Suit"
					break;
				case 23:
					str = "Great Dragon"
					break;
				case 24:
					str = "Five Concealed Pongs"
					break;
				case 25:
					str = "Small Winds"
					break;
				case 26:
					str = "Eight Immortals"
					break;
				case 27:
					str = "Great Winds"
					break;
				case 28:
					str = "Earthly Hand"
					break;
				case 29:
					str = "Heavenly Hand";
					break;
				case 30:
					str = "Exposed Kong";
					break;
				case 31:
					str = "Concealed Kong";
					break;
				case 32:
					str = "No Fan Hu";
					break;
			}

		}

		return str;


		}
	public static getHeadByName(name: string): number {
		var count: number = 0;
		for (var i: number = 0; i < name.length; i++) {
			count += name.charCodeAt(i);
		}
		return (count % 15) + 1;
	}
	public static getUserCoin(): void {
		BaseHttpRequest.sendRequestGetOnce(Global.baseURL + "GetUserInfo", function (evt: egret.Event): void {
			var json = evt.target.data;
			if (json == "") {
				return;
			}
			var jsondata = eval("(" + json + ")");
			if (jsondata.state == 0) {
				Global.showName = jsondata.value.nickname;
				Global.gameCoin = jsondata.value.balance;
				if (isNaN(Number(jsondata.value.icon)) == false) {
					Global.userHead = Number(jsondata.value.icon);
					if (Global.userHead <= 0 || Global.userHead > 15) {
						Global.userHead = 1;
					}
				}

				Global.isShowCoin = jsondata.value.coinshowtype == 1 ? true : false;
				Global.exchange = jsondata.value.exchangerate;
				GDGame.Msg.ins.dispatchEvent(new egret.Event("UpdataUserInfo", true, true));
			}
		}, this, "token=" + Global.token);
	}

	public static log(message?: any, ...optionalParams: any[]): void {
		if (Global.isShowLog == true) {
			var timer: string = StringUtils.format(new Date(), "yyyy-MM-dd hh:mm:ss.S");
			var args = Array.prototype.slice.call(arguments);
			args.push("   " + timer);
			console.log.apply(console, args);
		}

	}
	/** 
	 * @param nSeat 玩家座位号(0-东，1-西，2-南，3-北)
	 * 根据玩家座位号判断玩家位置 （玩家游戏界面中的方位 0-左边，1-上边，2-右边，3下边）
	 */
	public static getUserPosition(nSeat: number): number {
		var mySeat: number = Global.userSit;//跟据我自己的座位号确定其他玩家方位，自己永远在下方
		if (mySeat > -1) {
			var nSide: number = (3 + mySeat - nSeat) % 4;
			return nSide;
		}
		return -1;
	}
	/**
	 * 当前出牌玩家的方位永远是东   0-东，1-西，2-南，3-北
	 */
	public static getCurrentPositionName(n: number): string {
		var str: string = "";
		if (n == game.GameParmes.firstSit) {
			str = "east";
		} else if ((game.GameParmes.firstSit + 1) % 4 == n) {
			str = "south";
		} else if ((game.GameParmes.firstSit + 2) % 4 == n) {
			str = "west";
		} else if ((game.GameParmes.firstSit + 3) % 4 == n) {
			str = "north";
		}
		return str;
	}
	public static getCardName(index: number): string {
		let str: string = "牌值:" + index;
		if (index >= 1 && index <= 9) {
			str = index + "万"
		}
		if (index >= 10 && index <= 18) {
			str = (index - 9) + "饼"
		}
		if (index >= 19 && index <= 27) {
			str = (index - 18) + "条"
		}
		return str;
	}
	/*多语言*/
	public static language: string = "";
	public static dic: any = {};
	public static setLanguage(type: number): void {
		if (type == 2) {
			Global.language = "tc";
			Global.dic["底池"] = "底池";
			Global.dic["单注"] = "單註";
			Global.dic["底注"] = "底註";
			Global.dic["准入"] = "準入";
			Global.dic["局号"] = "局號";
			Global.dic["小计"] = "小計";
			Global.dic["总计"] = "總計";
			Global.dic["条"] = "條";
			Global.dic["闲"] = "閑";
			Global.dic["庄"] = "莊";
			Global.dic["转账失败"] = "您所使用的ID轉賬失敗，詳細信息請咨詢客服。";
			Global.dic["渠道未开放"] = "您所在的渠道未開放，詳細信息請咨詢客服。";
			Global.dic["时间选择错误"] = "您選擇的開始時間大於結束時間，無法查詢";
			Global.dic["选择日期"] = "可查詢至即日起至14天之前的數據";
			Global.dic["金币不足"] = "您的金額不符合此房間準入額，請進入其他房間。";
			Global.dic["金币太高"] = "您的金額不符合此房間準入額，請進入其他房間。";
			Global.dic["进入房间失败"] = "進入房間失敗";
			Global.dic["游戏中"] = "您正在其他遊戲中,請稍後再試";
			Global.dic["账号不存在"] = "對不起，賬號不存在或鏈接失效，請重新登錄。";
			Global.dic["进入游戏"] = "準備進入遊戲中,請耐心等待...";
			Global.dic["匹配"] = "正在匹配玩家...";
			Global.dic["流局"] = "本局當中無人叫地主，本盤遊戲沒有結束，\n稍後將重新發牌。";
			Global.dic["失去链接"] = "對不起，您與服務器失去鏈接，請重新登錄";
			Global.dic["用户状态异常"] = "您的ID出現狀態異常，詳細信息請咨詢客服。";
			Global.dic["用户频繁登陆"] = "您所使用的D頻繁登陸，請稍後再試。";
			Global.dic["游戏维护"] = "遊戲正在維護中，請您稍後再嘗試登錄";
			Global.dic["房间未开放"] = "房間暫未開放";
			Global.dic["游戏未结束"] = "您的牌局尚未結束,無法退出";
			Global.dic["选择筹码"] = "請先選擇籌碼";
			Global.dic["最大限额"] = "您的下註額已達到最大限額";
			Global.dic["金额太少"] = "您的金額不足";
			Global.dic["入门馆"] = "入門館";
			Global.dic["初级馆"] = "初級館";
			Global.dic["中级馆"] = "中級館";
			Global.dic["高级馆"] = "高級館";
			Global.dic["顶级馆"] = "頂級館";
			Global.dic["至尊馆"] = "至尊館";
			Global.dic["单人房1"] = "單人館1";
			Global.dic["单人房2"] = "單人館2";
			Global.dic["顶注"] = "頂注";
			Global.dic["自动开始"] = "每局結束自動開始下一局";
			Global.dic["同花色"] = "需要選擇三張同花色的牌";
			Global.dic["数量不符"] = "您選擇牌的數量不符";
			Global.dic["余牌"] = "余牌";
			Global.dic["张"] = "張";
			Global.dic["底分/台分"] = "底分/臺分";
			Global.dic["台"] = "臺";
			Global.dic["张数"] = "張";

			Global.dic["token过期"] = "您所使用的token已過期，詳細信息請咨詢客服。";
			Global.dic["状态异常"] = "您的ID出現狀態異常，詳細信息請咨詢客服。";
			Global.dic["游戏未开放"] = "遊戲還未開放，請您耐心等待。";
			Global.dic["单一钱包"] = "登錄失敗，請您聯系客服。";
			Global.dic["在别处登陆账号"] = "對不起，您與服務器失去鏈接，請重新登錄。";
			Global.dic["停服"] = "遊戲開始失敗，請重新進入遊戲。";
			Global.dic["长时间未操作"] = '您長時間未操作，請嘗試重新進入遊戲';
			Global.dic["状态异常2"] = "您的賬號暫時無法遊戲，請與客服聯系";
			Global.dic["单一钱包2"] = "遊戲開局失敗，請重新獲取鏈接進入。";
		} else if (type == 3) {
			Global.language = "en";
			Global.dic["底池"] = "Pot";
			Global.dic["单注"] = "Minimum";
			Global.dic["底注"] = "Ante";
			Global.dic["准入"] = "Allowance";
			Global.dic["局号"] = "Round No.";
			Global.dic["小计"] = "Sum";
			Global.dic["总计"] = "Total";
			Global.dic["条"] = "scripts";
			Global.dic["闲"] = "Player";
			Global.dic["庄"] = "Banker";
			Global.dic["转账失败"] = "Account transfer failed. Please contact the customer service.";
			Global.dic["渠道未开放"] = "Channel is not available. Please contact the customer service.";
			Global.dic["时间选择错误"] = "Data not found because beginning you've selected is later than ending.";
			Global.dic["选择日期"] = "Data will be available for checking for 14 days.";
			Global.dic["金币不足"] = "Your balance is not satisfied with the requirement. Please choose another room.";
			Global.dic["金币太高"] = "Your balance is not satisfied with the requirement. Please choose another room.";
			Global.dic["进入房间失败"] = "Entering room failed.";
			Global.dic["游戏中"] = "Account is in another game. Please try again later.";
			Global.dic["账号不存在"] = "Sorry, invalid account or connection, please login again.";
			Global.dic["进入游戏"] = "Entering the game. Please wait.";
			Global.dic["匹配"] = "Looking for opponents. Please wait.";
			Global.dic["失去链接"] = "Connection lost. Please login again.";
			Global.dic["用户状态异常"] = "Your ID is in abnormal state. Please contact the customer service.";
			Global.dic["用户频繁登陆"] = "Frequently login ID. Please try again later.";
			Global.dic["游戏维护"] = "Game is under maintenance. Please try again later.";
			Global.dic["房间未开放"] = "Room is not open yet.";
			Global.dic["游戏未结束"] = "Your game has not finished yet. Cannot exit right now.";
			Global.dic["选择筹码"] = "Please select chips first";
			Global.dic["最大限额"] = "Your chip-in amount has reached the maximum.";
			Global.dic["金额太少"] = "Your balance is insufficient.";
			Global.dic["入门馆"] = "FreshRoom";
			Global.dic["初级馆"] = "BeginnerRoom";
			Global.dic["中级馆"] = "IntermediateRoom";
			Global.dic["高级馆"] = "AdvancedRoom";
			Global.dic["顶级馆"] = "SuperiorRoom";
			Global.dic["至尊馆"] = "MasterRoom";
			Global.dic["单人房1"] = "SingleRoom1";
			Global.dic["单人房2"] = "SingleRoom2";
			Global.dic["顶注"] = "Max Chip-in";
			Global.dic["自动开始"] = "Next game starts automatically when last game ends";
			Global.dic["同花色"] = "Select 3 tiles in the same shape.";
			Global.dic["数量不符"] = "The selected tiles number is incorrect.";
			Global.dic["余牌"] = "Rest";
			Global.dic["张"] = "";
			Global.dic["底分/台分"] = "Ante/Tai points";
			Global.dic["台"] = "Tai";
			Global.dic["张数"] = "张";

			Global.dic["token过期"] = "Expired token. Please contact with the customer service.";
			Global.dic["状态异常"] = "Abnormal ID status. Please contact with the customer service.";
			Global.dic["游戏未开放"] = "Game is under development. Please wait for the notice.";
			Global.dic["单一钱包"] = "Login failed. Please contact with the customer service.";
			Global.dic["在别处登陆账号"] = "Sorry, connection lost. Please login again.";
			Global.dic["停服"] = "Game start failed. Please enter the game again.";
			Global.dic["长时间未操作"] = 'No operation for a long time. Please enter the game again.';
			Global.dic["状态异常2"] = "Account is not available for gaming. Please contact with the customer service.";
			Global.dic["单一钱包2"] = "Game start failed. Please access the connection again.";

		} else {
			Global.language = "cn";
			Global.dic["底池"] = "底池";
			Global.dic["单注"] = "单注";
			Global.dic["底注"] = "底注";
			Global.dic["准入"] = "准入";
			Global.dic["局号"] = "局号";
			Global.dic["小计"] = "小计";
			Global.dic["总计"] = "总计";
			Global.dic["条"] = "条";
			Global.dic["闲"] = "闲";
			Global.dic["庄"] = "庄";
			Global.dic["转账失败"] = "您所使用的ID转账失败，详细信息请咨询客服。";
			Global.dic["渠道未开放"] = "您所在的渠道未开放，详细信息请咨询客服。";
			Global.dic["失去链接"] = "对不起，您与服务器失去链接，请重新登录";
			Global.dic["金币不足"] = "您的金额不符合此房间准入额，请进入其他房间。";
			Global.dic["金币太高"] = "您的金额不符合此房间准入额，请进入其他房间。";
			Global.dic["进入房间失败"] = "进入房间失败";
			Global.dic["游戏中"] = "您正在其他游戏中,请稍后再试";
			Global.dic["账号不存在"] = "对不起，账号不存在或链接失效，请重新登录。";
			Global.dic["进入游戏"] = "准备进入游戏中,请耐心等待...";
			Global.dic["匹配"] = "正在匹配玩家...";
			Global.dic["用户状态异常"] = "您的ID出现状态异常，详细信息请咨询客服。";
			Global.dic["用户频繁登陆"] = "您所使用的ID频繁登陆，请稍后再试。";
			Global.dic["时间选择错误"] = "您选择的开始时间大于结束时间，无法查询!";
			Global.dic["选择日期"] = "可查询至即日起至14天之前的数据";
			Global.dic["游戏维护"] = "游戏正在维护中，请您稍后再尝试登录";
			Global.dic["房间未开放"] = "房间暂未开放";
			Global.dic["游戏未结束"] = "您的牌局尚未结束,无法退出";
			Global.dic["选择筹码"] = "请先选择筹码";
			Global.dic["最大限额"] = "您的下注额已达到最大限额";
			Global.dic["金额太少"] = "您的金额不足";
			Global.dic["入门馆"] = "入门馆";
			Global.dic["初级馆"] = "初级馆";
			Global.dic["中级馆"] = "中级馆";
			Global.dic["高级馆"] = "高级馆";
			Global.dic["顶级馆"] = "顶级馆";
			Global.dic["至尊馆"] = "至尊馆";
			Global.dic["单人房1"] = "单人馆1";
			Global.dic["单人房2"] = "单人馆2";
			Global.dic["顶注"] = "顶注";
			Global.dic["自动开始"] = "每局结束自动开始下一局";
			Global.dic["同花色"] = "需要选择三张同花色的牌";
			Global.dic["数量不符"] = "您选择牌的数量不符";
			Global.dic["余牌"] = "余牌";
			Global.dic["张"] = "张";
			Global.dic["底分/台分"] = "底分/台分";
			Global.dic["台"] = "番";
			Global.dic["张数"] = "张";

			Global.dic["token过期"] = "您所使用的token已过期，详细信息请咨询客服。";
			Global.dic["状态异常"] = "您的ID出现状态异常，详细信息请咨询客服。";
			Global.dic["游戏未开放"] = "游戏还未开放，请您耐心等待。";
			Global.dic["单一钱包"] = "登录失败，请您联系客服。";
			Global.dic["在别处登陆账号"] = "对不起，您与服务器失去链接，请重新登录。";
			Global.dic["停服"] = "游戏开始失败，请重新进入游戏。";
			Global.dic["长时间未操作"] = '您长时间未操作，请尝试重新进入游戏';
			Global.dic["状态异常2"] = "您的账号暂时无法游戏，请与客服联系";
			Global.dic["单一钱包2"] = "游戏开局失败，请重新获取链接进入。";
		}
	}
}