class ViewManager extends egret.DisplayObjectContainer {
	private static _ins: ViewManager;
	public static get ins(): ViewManager {
		if (ViewManager._ins == null) {
			ViewManager._ins = new ViewManager();
		}
		return ViewManager._ins;
	}
	public tipLayer: egret.Sprite;
	//最顶层
	public topLayer: egret.Sprite;
	//弹出提示层
	public popLayer: egret.Sprite;
	//主ui层
	private middleLayer: egret.Sprite;
	//背景层
	private bottomLayer: egret.Sprite;

	private waitUI: WaitUI;
	private alertUI: comm.Alert;
	private ruleUI: room.RoomRuleUI;
	private roomView: room.RoomView;
	public gameView: game.GameView;
	public curview: string = "";
	private outTimeNum: number;
	public constructor() {
		super();

		//初始化视图三层结构
		this.bottomLayer = new egret.Sprite();
		this.middleLayer = new egret.Sprite();
		this.popLayer = new egret.Sprite();
		this.topLayer = new egret.Sprite();
		this.tipLayer = new egret.Sprite();
		this.addChild(this.bottomLayer);
		this.addChild(this.middleLayer);
		this.addChild(this.popLayer);
		this.addChild(this.topLayer);
		this.addChild(this.tipLayer);
		this.init();
		if (Global.isDeal) {
			let gamezhuapai: game.GameZhuaPaiQiUI = new game.GameZhuaPaiQiUI();
			this.addChild(gamezhuapai);
		}
		new ScreenManager(this);
		this.reTimeOut();
	}
	private init(): void {
		//初始化tip msg提示层工具
		TipsUtils.topLayer = this.tipLayer;

	}
	public onResize(): void {
		if (this.roomView) {
			this.roomView.onResize();
		}
		if (this.alertUI) {
			this.alertUI.onResize();
		}
		if (this.waitUI) {
			this.waitUI.onResize();
		}
	}
	/*
	*msg 提示信息
	*/
	public showAlert(msg: string, fun: Function = null): void {
		if (this.alertUI == null) {
			this.alertUI = new comm.Alert();
		}
		this.topLayer.addChild(this.alertUI);
		this.alertUI.showAlert(msg, fun);
	}
	/*显示等待界面*/
	private waitInterval: number = 0;
	public showWait(msg: string, isAutoHide: boolean = false): void {
		if (this.waitUI == null) {
			this.waitUI = new WaitUI();
		}
		this.topLayer.addChild(this.waitUI);
		this.waitUI.showWait(msg);
		egret.clearTimeout(this.waitInterval);
		if (isAutoHide) {
			this.waitInterval = egret.setTimeout(this.hideWait, this, 15000);
		}
	}
	public hideWait(): void {
		egret.clearTimeout(this.waitInterval);
		if (this.waitUI) {
			this.waitUI.hideWait();
			if (this.waitUI.parent) {
				this.waitUI.parent.removeChild(this.waitUI);
			}
		}
	}
	public showRule(): void {
	
		console.log("调用打开规则11");
		try {
			window["openActiveGame"](4);//打开帮助
		} catch (error) { }
		console.log("调用打开规则");
	}

	public switchToRoom(): void {
		this.curview = "room";
		this.leaveGameView();
		if (this.roomView == null) {
			this.roomView = new room.RoomView();
		}
		this.middleLayer.addChild(this.roomView);
		this.roomView.onUpdataView();
		ViewManager.ins.reTimeOut();
		MessageUI.ins.y = 125;
	}

	public switchToGame(): void {
		this.curview = "game";
		this.hideWait();
		if (this.gameView == null) {
			this.gameView = new game.GameView();
		}
		this.middleLayer.addChild(this.gameView);
		this.gameView.onAddView();
		MessageUI.ins.y = 10;
	}
	public leaveGameView(): void {
		if (this.gameView) {
			this.gameView.onRemoveView();
			if (this.gameView.parent) {
				this.gameView.parent.removeChild(this.gameView);
			}
			this.gameView = null;
		}
		//this.clearTip();
		MessageUI.ins.showMessage([]);
	}
	private clearTip(): void {
		while (this.tipLayer.numChildren > 0) {
			var item = this.tipLayer.removeChildAt(0);
			item = null;
		}
	}

	public reTimeOut(): void {
		egret.clearTimeout(this.outTimeNum);
		this.outTimeNum = egret.setTimeout(function (arg): void {
			//room.RoomWebSocket.instance().onTimeOut();
		}, this, 10 * 60 * 1000);
	}
}