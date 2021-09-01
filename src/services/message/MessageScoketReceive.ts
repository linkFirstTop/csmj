class MessageScoketReceive {
	
	public constructor() {
	
	}
	public initHandlers(id: number,byte: egret.ByteArray): void {
		switch(id)
		{
			case MessageProtocol.ACK | MessageProtocol.HeartBeat:
				this.OGID_HeartBeat(byte);
				break ;
			case MessageProtocol.ACK | MessageProtocol.LOGIN:
				this.OGID_UserLogin(byte);
				break ;
			case MessageProtocol.ACK | MessageProtocol.VGID_NOTIFYMSG:
				this.OGID_GetMessage(byte);
				break ;
		}
		
	}
	private OGID_HeartBeat(byte: egret.ByteArray):void{
		
	}
	/*
	*登录返回消息
	*/
	public OGID_UserLogin(byte: egret.ByteArray):void{
		var body:message.VGLoginAck = message.VGLoginAck.decode(byte.bytes);
	}
	/*
	*登录返回消息
	*/
	public OGID_GetMessage(byte: egret.ByteArray):void{
		
		var body:message.NotifyMsgNtc = message.NotifyMsgNtc.decode(byte.bytes);
		var arr:Array<string> = [];
		arr.push("["+body.title+"]:"+body.content);
		MessageUI.ins.showMessage(arr);
		Global.log("["+body.title+"]:"+body.content);
	}
	
	
}