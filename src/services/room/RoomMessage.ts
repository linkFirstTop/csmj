module room {
	export class RoomMessage {
		public constructor() {
		}
		public static ROOM_BASE:string = "ROOM_MSG_BASE";
		/**
		 *登录结果
			*/
		public static  ON_LOGIN:string =RoomMessage.ROOM_BASE+"ON_LOGIN";
		/**
		 *游戏列表
			*/
		public static  ON_GAME_LIST:string =RoomMessage.ROOM_BASE+"ON_GAME_LIST";
		/**
		 *创建桌子结果
			*/
		public static  ON_CREATE_TAB:string =RoomMessage.ROOM_BASE+"ON_CREATE_TAB";
		/**
		 *解散桌子结果
			*/
		public static  ON_DISBAND_TAB:string =RoomMessage.ROOM_BASE+"ON_DISBAND_TAB";
		/**
		 *广播解散桌子
			*/
		public static  ON_BROAD_DISBANDTAB:string =RoomMessage.ROOM_BASE+"ON_BROAD_DISBANDTAB";
		/**
		 *加入桌子结果
			*/
		public static  ON_ADD_TAB:string =RoomMessage.ROOM_BASE+"ON_ADD_TAB";
		/**
		 *离开桌子结果
			*/
		public static  ON_LEAVE_TAB:string =RoomMessage.ROOM_BASE+"ON_LEAVE_TAB";
		/**
		 *准备
			*/
		public static  ON_READY:string =RoomMessage.ROOM_BASE+"ON_READY";

		/**
		 *返回推送类  1账号被动挤
			*/
		public static  ON_BROAD_USER_MSG:string =RoomMessage.ROOM_BASE+"ON_BROAD_USER_MSG";
		/**
		 *连接异常   1服务器断开  2连接异常
			*/
		public static  ON_SOCKET_ERROR:string =RoomMessage.ROOM_BASE+"ON_SOCKET_ERROR";
		/**
		 *查询用户创建的牌桌
			*/
		public static  ON_QUERY_ROOM:string =RoomMessage.ROOM_BASE+"ON_QUERY_ROOM";
		/**
		 *通知牌桌当前信息
			*/
		public static  ON_TABUSER:string =RoomMessage.ROOM_BASE+"ON_TABUSER";
		/**
		 *通知请求启动游戏
			*/
		public static  ON_QINGQIU_START_GAME:string =RoomMessage.ROOM_BASE+"ON_QINGQIU_START_GAME";
		/**
		 *通知启动游戏
			*/
		public static  ON_START_GAME:string =RoomMessage.ROOM_BASE+"ON_START_GAME";

		/**
		 *通知更新钻石个数
			*/
		public static  ON_UPDATA_ZUANSHI:string =RoomMessage.ROOM_BASE+"ON_UPDATA_ZUANSHI";

		/**
		 *通知环信
			*/
		public static  ON_UPDATA_HX:string =RoomMessage.ROOM_BASE+"ON_UPDATA_HX";
		/**
		 * 更新位置信息
		 */
		public static ON_UPDATE_DISTANCE:string = RoomMessage.ROOM_BASE + "ON_UPDATE_DISTANCE";

		/**
		 * 广播玩家在线离线状态
		 */
		public static ON_USER_ONLINE:string = RoomMessage.ROOM_BASE + "ON_USER_ONLINE";
		/**
		 * 心跳
		 */
		public static OGID_DUXLIVETICK:string = RoomMessage.ROOM_BASE + "OGID_DUXLIVETICK";
		/**
		 * 金币变化
		 */
		public static OGID_ROOM_UPDATECOIN:string = RoomMessage.ROOM_BASE+"OGID_ROOM_UPDATECOIN";
	}
}