class MessageWebSocket {
	private static ins: MessageWebSocket;
	public msgSender:MessageSocketSender;
	private msgReceive:MessageScoketReceive;
	private webSocket: egret.WebSocket;
	private isConnected: boolean = false;//是否已经连接
	private interval:number;				//心跳延迟
	private intervalConnect:number;			//重连服务器延迟
	private nCount:number = 0;

	public static instance(): MessageWebSocket{
        if(MessageWebSocket.ins != null) {
            
        }else{
			MessageWebSocket.ins = new MessageWebSocket();
        }
        return MessageWebSocket.ins;
    }
	public constructor() {
		this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
        this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
        this.webSocket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this);

		this.msgSender = new MessageSocketSender();
		this.msgReceive = new MessageScoketReceive();
		
	}
	public connectServer():void
    {
        if (this.isConnected||Global.istest) {
			return;
		}
        if (this.webSocket == null) {
			this.webSocket = new egret.WebSocket();
			this.webSocket.type = egret.WebSocket.TYPE_BINARY;
			this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
			this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
			this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
			this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
		}
		this.connectSocket();
    }
	public connectSocket():void{
		if(!this.isConnected){
			Global.roomIP = Global.arrSocket[Global.nCurrentSocket];
			this.webSocket.connectByUrl(Global.roomIP+"/message");
		}
	}
    public onSocketOpen(): void {
		this.isConnected = true;
		this.startHeart();
		this.msgSender.loginMessage();
    }
    
    //发送消息
    public SendMeseage(messageid:number,obj:any): void
    {
        if(this.webSocket.connected == false){
            return ;
        }
        //var bytes = obj.toArrayBuffer();
		var bytes = obj;
        //计算长度
        var bodyBytes: egret.ByteArray = new egret.ByteArray(bytes);
        var len = bodyBytes.length;
        var sendMsg: egret.ByteArray = new egret.ByteArray();
        sendMsg.endian = egret.Endian.LITTLE_ENDIAN;
        sendMsg.writeInt(messageid);
        sendMsg.writeInt(len);
        sendMsg.writeInt(0);
        sendMsg.writeBytes(bodyBytes);
        sendMsg.position = 0;
        
        this.webSocket.writeBytes(sendMsg,0,sendMsg.bytesAvailable); 
    }
    public onReceiveMessage(e: egret.Event): void {
        var sendMsg: egret.ByteArray = new egret.ByteArray();
        sendMsg.endian = egret.Endian.LITTLE_ENDIAN;
        this.webSocket.readBytes(sendMsg);
        var msgID = sendMsg.readInt();
        var len = sendMsg.readInt();
        var type = sendMsg.readInt();
        if(sendMsg.bytesAvailable >= len) {
            var bytes: egret.ByteArray = new egret.ByteArray();
            sendMsg.readBytes(bytes,0,len);
            this.msgReceive.initHandlers(msgID,bytes);
        } 
    }
    /**
     * 服务器断开连接
     */
    public onSocketClose(): void {
		if(this.isConnected){
			Global.log("message server disconnect");
			this.isConnected = false;
			egret.clearTimeout(this.interval);	//不再发送心跳
		}
    }
    public reconnectionSever():void{
		this.ClearSocket();
		this.connectServer();
	}

	public CloseSocket():void
	{
		egret.clearTimeout(this.interval);	//不再发送心跳
		if(this.webSocket){
			this.webSocket.close();
			Global.log("message socket主动关闭");
		}
	}

	public ClearSocket():void
	{
		egret.clearTimeout(this.interval);	//不再发送心跳
		if(this.webSocket){
			this.webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
			this.webSocket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
			this.webSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
			this.webSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
			this.webSocket.close();
			this.isConnected = false;
			Global.log("message socket主动销毁");
			this.webSocket = null;	
		}
	}
    /**
     * 服务器连接错误
     */
    public onSocketError(): void {
        this.isConnected = false;
		egret.clearTimeout(this.interval);	//不再发送心跳
		
		//this.connectServer();
    }
	/**
	 * 发送心跳
	 */
	private startHeart():void
	{
		egret.clearTimeout(this.interval);
		this.msgSender.HeartBeatReq();
		this.interval = egret.setTimeout(this.startHeart,this,10000);
	}
}