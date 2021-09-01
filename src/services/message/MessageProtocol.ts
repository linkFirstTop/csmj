class MessageProtocol {
	public constructor() {
	}
	public static REQ:number = 0x00000000; //请求消息类型 
	public static ACK:number = 0x08000000; //应答消息类型

	public static VGID_NOTIFY:number = 0x01000000;

	public static CLIENT_LIST_BASE:number = 0x00006C00;

	public static HeartBeat:number = MessageProtocol.CLIENT_LIST_BASE + 0x00;

	public static LOGIN:number = MessageProtocol.CLIENT_LIST_BASE + 0x0001;
	// 广播消息
	public static VGID_NOTIFYMSG:number = MessageProtocol.CLIENT_LIST_BASE + 0x0002;
}