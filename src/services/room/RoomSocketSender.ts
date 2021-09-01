module room {
	export class RoomSocketSender {
		public constructor() {
		}
		/**
		 * 心跳
		 */
		public HEART_BEAT():void
		{
			/*let data = new room.HeartBeatReq();
			data.time = 1;
			let body = room.HeartBeatReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.DuxLiveTick,body);*/
		}
		
	}
}