class MessageSocketSender {
	public constructor() {
		
	}
	public HeartBeatReq():void{
		let data = new message.VGHeartBeatReq();
		data.time = 1;
		let body = message.VGHeartBeatReq.encode(data).finish();
		MessageWebSocket.instance().SendMeseage(MessageProtocol.REQ | MessageProtocol.HeartBeat,body);
	}
	public loginMessage():void{
		let data = new message.VGLoginReq();
		
		let body = message.VGLoginReq.encode(data).finish();
		MessageWebSocket.instance().SendMeseage(MessageProtocol.REQ | MessageProtocol.LOGIN,body);
	}
	
}