class GameUI extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		let handUI:game.GameHandUI = new game.GameHandUI();
		this.addChild(handUI);
		handUI.initUI();

		let poolUI:game.GamePoolUI = new game.GamePoolUI();
		this.addChild(poolUI);
		poolUI.initCard();
	}
	public onAddView():void{

	}
	public onRemoveView():void{
		
	}
}