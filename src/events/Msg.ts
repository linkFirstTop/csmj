module GDGame {
	export class Msg extends egret.EventDispatcher {

		private static _ins: GDGame.Msg;

		public constructor() {
			super();
		}
		public static get ins(): GDGame.Msg {
			if (GDGame.Msg._ins == null) {
				GDGame.Msg._ins = new GDGame.Msg();
			}
			return GDGame.Msg._ins;
		}

		public on (type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number){
			GDGame.Msg._ins.addEventListener(type, listener, thisObject, useCapture, priority)
		}

		public off (type: string, listener: Function, thisObject: any, useCapture?: boolean){
			GDGame.Msg._ins.removeEventListener(type, listener, thisObject, useCapture)
		}
	}
}