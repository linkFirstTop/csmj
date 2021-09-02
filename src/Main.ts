
class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            //egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            //egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadUserinfo();

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);

    }
    private domain: string;
    private loadingView: LoadingUI;
    private async loadUserinfo() {
        this.domain = window.location.host;
        Global.token = egret.getOption("token");
        egret.ImageLoader.crossOrigin = "anonymous";
        this.domain = "ts0068.com";
        // if(Global.token == ""){
        //     Global.token = "10_baoxue004";
        // }
        if (egret.getOption("deal") == "true") {
            Global.isDeal = true;
        }
        if (Global.istest == true) {
            if (egret.getOption("showlog") == "true") {
                Global.isShowLog = true;
            }

            Global.setLanguage(1);
            await this.loadResource();

            egret.ImageLoader.crossOrigin = "anonymous";

            Global.loadTime = Date.now() - Global.loadTime;
            this.stage.removeChild(this.loadingView);
            this.loadingView.removeLoading();
            this.loadingView = null;



            this.stage.addChild(ViewManager.ins);
            ViewManager.ins.switchToRoom();

            comm.DragonAnim.ins;

            //通知消息
            this.stage.addChild(MessageUI.ins);
            MessageUI.ins.x = (GameConfig.curWidth() - 1173) / 2;

            //当前页面是否在活动状态
            this.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
            this.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeActivate, this);
            this.stage.addEventListener(egret.Event.RESIZE, this.onStageResize, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this);
            this.connectServer();
            RES.loadGroup("gameAnim_" + Global.language);
            return;
        }
        Global.baseURL = "https://" + this.domain + "/clientapi/API/";
        Global.gameHallURL = "https://" + this.domain + "/gamehall/index.html";
        Global.commURL = "https://" + this.domain + "/public/";
        Global.activeURL = "https://" + this.domain + "/jpgameapi/";
        let baseURL: string = "https://" + this.domain + "/clientapi/API/GetUserInfo";
        Global.setLanguage(1);
        BaseHttpRequest.sendRequestGetOnce(baseURL, this.getLanguageSet, this, "token=" + Global.token);
    }
    private async getLanguageSet(evt: egret.Event) {
        var json = evt.target.data;
        var jsondata = eval("(" + json + ")");
        if (jsondata.state == 0) {
            Global.setLanguage(jsondata.value.language);
            Global.showName = jsondata.value.nickname;
            Global.channel = jsondata.value.channel;
            if (isNaN(Number(jsondata.value.icon)) == false) {
                Global.userHead = Number(jsondata.value.icon);
                if (Global.userHead <= 0 || Global.userHead > 15) {
                    Global.userHead = 1;
                }
            }
            Global.isShowCoin = jsondata.value.coinshowtype == 1 ? true : false;
            Global.exchange = jsondata.value.exchangerate;
            Global.isSound = jsondata.value.sound == 1 ? true : false;

        }
        await this.loadResource();
        this.createGameScene()

        RES.loadGroup("gameAnim_" + Global.language);

    }
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        switch (event.groupName) {
            case "gameAnim_cn":
            case "gameAnim_en":
            case "gameAnim_tc":
                Global.isAnimLoad = true;
                comm.DragonAnim.ins.initAnim();
                break;
        }

    }
    private onResourceLoadError(event: RES.ResourceEvent): void {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    }
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    private async loadResource() {
        try {
            RES.getVirtualUrl = function (url: string): string { return url + "?ver=1.3.1.6" };

            await RES.loadConfig("resource/default.res.json", "resource/");

            await this.loadTheme();
            await RES.loadGroup("preload");

            Global.loadTime = Date.now();
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            this.loadingView.initView();
            await RES.loadGroup("room", 0, this.loadingView);
            await RES.loadGroup("game_" + Global.language);
        }
        catch (e) {
            console.error(e);
        }
    }
    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
    private loadConfig(): void {
        //是否显示返回游戏大厅按钮
        if (egret.getOption("showHall") == "1" && egret.Capabilities.isMobile) {//在移动设备上
            Global.isShowHall = true;
        } else if (egret.getOption("showHall") == "2") {
            Global.isShowHall = true;
        }

        if (egret.getOption("showlog") == "true") {
            Global.isShowLog = true;
        }



        BaseHttpRequest.sendRequestGetOnce(Global.baseURL + "GetSocket", this.onGetSocketIP, this, "token=" + Global.token);
    }
    private onGetSocketIP(evt: egret.Event): void {
        var json = evt.target.data;
        if (json == "") {
            return;
        }
        var jsondata = eval("(" + json + ")");
        if (jsondata.state == 0) {
            Global.arrConfig = jsondata.value;
            this.onCheckGameStatus();
        } else {
            ViewManager.ins.showAlert(Global.dic["账号不存在"]);
        }
    }


    protected createGameScene(): void {


        Global.loadTime = Date.now() - Global.loadTime;
        this.stage.removeChild(this.loadingView);

        this.loadingView.removeLoading();
        this.loadingView = null;

        this.loadConfig();

        this.stage.addChild(ViewManager.ins);

        ViewManager.ins.switchToRoom();
        comm.DragonAnim.ins;

        //通知消息
        this.stage.addChild(MessageUI.ins);
        MessageUI.ins.x = (GameConfig.curWidth() - 1173) / 2;

        //当前页面是否在活动状态
        this.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
        this.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeActivate, this);
        this.stage.addEventListener(egret.Event.RESIZE, this.onStageResize, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this);

        /*加载活动资源*/
        try {
            window["loadingActivityGame"](Global.token, Global.gameID, 1);
        } catch (error) { }
    }

    private onStageResize(): void {
        ViewManager.ins.onResize();
    }
    private isTimeout: boolean = false;
    private nTimeID: number = -1;
    private onCheckGameStatus(): void {
        //检查游戏ip，5秒后不管返回，强制进入游戏
        BaseHttpRequest.sendRequestGetOnce(Global.baseURL + "ResetUser", this.onCheckGameFinish, this, "token=" + Global.token + "&gametype=" + Global.gameID);
        this.nTimeID = egret.setTimeout(function () {
            if (this.isTimeout == false) {
                this.connectServer();
            }
            this.isTimeout = true;
        }, this, 5000);
    }
    private onCheckGameFinish(e: egret.Event): void {
        egret.clearTimeout(this.nTimeID);
        if (this.isTimeout) {
            return;
        }
        var json = e.target.data;
        if (json == "") {
            return;
        }
        var jsondata = eval("(" + json + ")");
        if (jsondata.state == 0) {
            this.isTimeout = true;
            this.connectServer();
        } else if (jsondata.state == 642) {
            ViewManager.ins.hideWait();
            ViewManager.ins.showAlert(Global.dic["游戏中"], function () {
                window.location.href = location.href;
            });
        } else {
            if (this.isTimeout == false) {
                this.connectServer();
            }
            this.isTimeout = true;
        }
    }
    private connectServer(): void {
        if (Global.token == "") {
            ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
                window.location.href = location.href;
            });
            return;
        }
        room.RoomWebSocket.instance().connectServer();
        ViewManager.ins.showWait("loading...");
    }

    private onEnterFrame(evt: egret.Event): void {
        Global.nTimerCount = egret.getTimer();
    }
    private onActivate(): void {
        Global.isWebActive = true;

        if (this.stage.hasEventListener(egret.Event.ENTER_FRAME)) {
            this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }
        //重新进入游戏
        if (!Global.isOpenActive) {
            sound.SoundManager.getInstance().setBgOn(Global.isSound);
            sound.SoundManager.getInstance().setEffectOn(Global.isSound);
        }
    }
    /*当前页面不再活动状态*/
    private onDeActivate(): void {
        Global.isWebActive = false;
        Global.nTimerCount = egret.getTimer();
        this.stage.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        sound.SoundManager.getInstance().setBgOn(false);
        sound.SoundManager.getInstance().setEffectOn(false);
        GDGame.Msg.ins.dispatchEvent(new egret.Event("changeWebActivate"));

    }
    private onStageClick(): void {
        sound.SoundManager.getInstance().playEffect("blank_mp3");
        sound.SoundManager.getInstance().playBg("mjBgm_mp3");
        sound.SoundManager.getInstance().setBgOn(Global.isSound);
        sound.SoundManager.getInstance().setEffectOn(Global.isSound);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this);
    }
    public static activeToGame(type: number): void {
        if (type == 1) {//活动加载完，显示相关按钮
            Global.isActiveLoad = true;
            GDGame.Msg.ins.dispatchEvent(new egret.Event("isShowActive"));
        }
        if (type == 2) {//活动关闭 播放游戏声音等操作
            Global.isOpenActive = false;
            sound.SoundManager.getInstance().setBgOn(Global.isSound);
            sound.SoundManager.getInstance().setEffectOn(Global.isSound);
            Global.getUserCoin();
        }

    }

}
