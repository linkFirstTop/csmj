module room {
	export class RoomProtocol {
		public constructor() {
		}
		public static REQ: number = 0x00000000; //请求消息类型 
		public static ACK: number = 0x08000000; //应答消息类型

		public static VGID_CSMJ:number  = 0x003D0000;
		
		public static VGID_CLIENT = RoomProtocol.VGID_CSMJ + 0x00006C00	//����Ϳͻ���ͨ����Ϣ���ͣ�5λΪ���䣨6����6λΪ�ͻ��ˣ�C��

		public static VGID_HEART_BEAT:number 		=		RoomProtocol.VGID_CLIENT + 0x0000;		//������Ϣ
		public static VGID_ROOM_LOGIN:number 		=		RoomProtocol.VGID_CLIENT + 0x0001;		//��¼
		public static VGID_ROOM_ROOMLIST:number 	=		RoomProtocol.VGID_CLIENT + 0x0002;		//���󷿼��б�
		public static VGID_ROOM_SITDOWN:number    	=		RoomProtocol.VGID_CLIENT + 0x0003;		//��������
		public static VGID_ROOM_SITUP:number 		=		RoomProtocol.VGID_CLIENT + 0x0004;		//����վ��

		public static  VGID_GAME_GAMESTATUS:number 		= RoomProtocol.VGID_CLIENT + 0x0080	;	//��Ϸ״̬�㲥��Ϣ
		public static  VGID_GAME_SYNCGAMEDATA:number 	=	 RoomProtocol.VGID_CLIENT + 0x0084;		//ͬ����Ϸ����
		public static  VGID_GAME_GAMESTART:number 		=	 RoomProtocol.VGID_CLIENT + 0x0088;		//��ʼ��Ϸ�㲥��Ϣ
		public static  VGID_GAME_SENDCARD:number 		=	 RoomProtocol.VGID_CLIENT + 0x008C;		//���ƹ㲥��Ϣ
		public static  VGID_GAME_OPERATION	:number 	=	 RoomProtocol.VGID_CLIENT + 0x0094;		//���ƹ㲥��Ϣ
		public static  VGID_GAME_GAMERESULT	:number 	=  RoomProtocol.VGID_CLIENT + 0x0098;		//����㲥��Ϣ
		public static  VGID_USER_OPERATION:number 		=	 RoomProtocol.VGID_CLIENT + 0x00C0;	//���������Ϣ
		public static  VGID_USER_MANAGED:number 		=	 RoomProtocol.VGID_CLIENT + 0x00C2;		//����й���Ϣ
		public static  VGID_USER_CHAT:number 			=	 RoomProtocol.VGID_CLIENT + 0x00C4;		//���������Ϣ

		public static  VGID_SERVICE_MAGICTILES	=	RoomProtocol.VGID_CLIENT + 0x00F0;		//������


		//金币变化
		public static OGID_CLIENT_LIST_ROOM_UPDATECOIN: number = RoomProtocol.VGID_CLIENT + 0x08;
		//断线续玩
		public static OGID_CLIENT_LIST_ROOM_CONTINUE_GAME: number = RoomProtocol.VGID_CLIENT + 0x09;




		
		//Game服务玩家断线状态
		// public static OGID_GAME_DISCONNECTED:number = RoomProtocol.OGID_CLIENT_LIST_BASE +　0x18;

		//*******************发牌器****************************************************************
		// // 发牌器初始化
		// public static GLID_CLIENT_SET_OPEN_DOOR_TILE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x12;
		// // /发牌器抓拍
		// public static GLID_CLIENT_SET_WALL_TLE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x11;

		// //换三张 
		// public static OGID_SCMJ_HUAN_SAN_ZHANG: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x18;
		// //换三张 整理牌结束
		// public static OGID_SCMJ_HUAN_SAN_ZHANG_END: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x19;

		// //定缺
		// public static OGID_SCMJ_DING_QUE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x1a;
		// //玩家状态  0：正常状态，1：听牌 2:胡 3：认输
		// public static OGID_SCMJ_GAME_STATUS: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x1b;
		// //单次胡
		// public static OGID_SCMJ_GAME_HU_RESULT: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x20

		// //发牌器
		// public static VGID_SERVICE_MAGICTILES: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0xF0


	}
}