//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
    }
    private sprProgress: egret.Sprite;
    private bmpProgress: egret.Bitmap;
    private bmpMask: eui.Rect;
    private lbProgress: eui.Label;
    private imgbg: eui.Image;
    private imgPerson: eui.Image;
    private logoGroup: eui.Group;
    public initView(): void {
        this.imgbg = new eui.Image();
        this.imgbg.source = "loadingbg_jpg";
        this.imgbg.width = GameConfig.curWidth();
        this.imgbg.height = GameConfig.curHeight();
        this.addChild(this.imgbg);

        this.logoGroup = new eui.Group();
        this.addChild(this.logoGroup);
        var logo: eui.Image = new eui.Image();
        logo.source = "resource/assets/language/" + Global.language + "/logo/loadingLogo.png";
        this.logoGroup.addChild(logo);
        if (Global.language != "en") {
            this.logoGroup.x = (GameConfig.curWidth() - 1039) / 2;
        } else {
            this.logoGroup.x = (GameConfig.curWidth() - 820) / 2;
        }
        var logo1: eui.Image = new eui.Image();
        logo1.source = Global.commURL + "logo.png";
        this.logoGroup.addChild(logo1);
        logo1.width = 173;
        logo1.height = 123;
        logo1.x = 0;
        logo1.y = 0;
        logo1.scaleX = logo1.scaleY = 0.75;
        this.logoGroup.y = (GameConfig.curHeight() - 327) / 2 - 100;
        this.sprProgress = new egret.Sprite();
        this.addChild(this.sprProgress);
        var proBg: egret.Bitmap = GameUtils.createBitmapByName("loadprogressbg_png");
        this.sprProgress.addChild(proBg);
        this.bmpProgress = GameUtils.createBitmapByName("loadprogress_png");
        this.sprProgress.addChild(this.bmpProgress);
        this.bmpProgress.x = this.bmpProgress.y = 1;
        this.bmpMask = new eui.Rect(proBg.width, proBg.height, 0x000000);
        this.sprProgress.addChild(this.bmpMask);
        this.bmpMask.width = 0;
        this.bmpProgress.mask = this.bmpMask;
        this.sprProgress.x = 600;
        this.sprProgress.y = 700;
        this.lbProgress = new eui.Label();
        this.sprProgress.addChild(this.lbProgress);
        this.lbProgress.text = "0%";
        this.lbProgress.size = 36;
        this.lbProgress.x = (this.sprProgress.width - 50) / 2;
        this.lbProgress.y = 50;
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
  
    }
    private onResize(): void {
        this.imgbg.width = GameConfig.curWidth();
        this.imgbg.height = GameConfig.curHeight();

        this.logoGroup.x = (GameConfig.curWidth() - this.logoGroup.width) / 2;
        this.logoGroup.y = (GameConfig.curHeight() - this.logoGroup.height) / 2 - 100;

        this.sprProgress.x = 600;
        this.sprProgress.y = 700;
    }
    public onProgress(current: number, total: number): void {

        var index: number = Math.ceil(current / total * 100);
        if (index > 100) index = 100;
        this.bmpMask.width = 769 * index / 100;
        this.lbProgress.text = index + "%";

        try {
            window["gameLoading"](index);
        } catch (e) { }
    }
    public removeLoading(): void {
        while (this.numChildren > 0) {
            var obj: any = this.getChildAt(0);
            obj.parent.removeChild(obj);
            obj = null;
        }
    }
}
