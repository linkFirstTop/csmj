class MessageSocketSender {
	public constructor() {
		
	}
	public HeartBeatReq():void{
		let data = new message.HeartBeatReq();
		data.time = 1;
		let body = message.HeartBeatReq.encode(data).finish();
		MessageWebSocket.instance().SendMeseage(MessageProtocol.REQ | MessageProtocol.HeartBeat,body);
	}
	public loginMessage():void{
		let data = new message.reqLogin();
		data.userName = Global.userName;
		data.avatarUrl = "";
		data.channelId = "";
		data.gameId = Global.gameID;
		data.ticket = Global.token;
		let body = message.reqLogin.encode(data).finish();
		MessageWebSocket.instance().SendMeseage(MessageProtocol.REQ | MessageProtocol.LOGIN,body);
	}
	
}