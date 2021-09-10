type Long = protobuf.Long;

/** Namespace proto. */
declare namespace proto {

    /** Properties of a Heartbeat. */
    interface IHeartbeat {

        /** Heartbeat times */
        times?: (number|Long|null);
    }

    /** Represents a Heartbeat. */
    class Heartbeat implements IHeartbeat {

        /**
         * Constructs a new Heartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHeartbeat);

        /** Heartbeat times. */
        public times: (number|Long);

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Heartbeat instance
         */
        public static create(properties?: proto.IHeartbeat): proto.Heartbeat;

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link proto.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHeartbeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link proto.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHeartbeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Heartbeat;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Heartbeat;

        /**
         * Verifies a Heartbeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotKick. */
    interface INotKick {

        /** NotKick userId */
        userId: (number|Long);

        /** NotKick code */
        code: number;

        /** NotKick reason */
        reason?: (string|null);
    }

    /** Represents a NotKick. */
    class NotKick implements INotKick {

        /**
         * Constructs a new NotKick.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotKick);

        /** NotKick userId. */
        public userId: (number|Long);

        /** NotKick code. */
        public code: number;

        /** NotKick reason. */
        public reason: string;

        /**
         * Creates a new NotKick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotKick instance
         */
        public static create(properties?: proto.INotKick): proto.NotKick;

        /**
         * Encodes the specified NotKick message. Does not implicitly {@link proto.NotKick.verify|verify} messages.
         * @param message NotKick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotKick, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotKick message, length delimited. Does not implicitly {@link proto.NotKick.verify|verify} messages.
         * @param message NotKick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotKick, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotKick message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotKick;

        /**
         * Decodes a NotKick message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotKick;

        /**
         * Verifies a NotKick message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotCurrencyChange. */
    interface INotCurrencyChange {

        /** NotCurrencyChange userId */
        userId: (number|Long);

        /** NotCurrencyChange currencyType */
        currencyType: number;

        /** NotCurrencyChange changeValue */
        changeValue: (number|Long);

        /** NotCurrencyChange currentValue */
        currentValue: (number|Long);
    }

    /** Represents a NotCurrencyChange. */
    class NotCurrencyChange implements INotCurrencyChange {

        /**
         * Constructs a new NotCurrencyChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotCurrencyChange);

        /** NotCurrencyChange userId. */
        public userId: (number|Long);

        /** NotCurrencyChange currencyType. */
        public currencyType: number;

        /** NotCurrencyChange changeValue. */
        public changeValue: (number|Long);

        /** NotCurrencyChange currentValue. */
        public currentValue: (number|Long);

        /**
         * Creates a new NotCurrencyChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotCurrencyChange instance
         */
        public static create(properties?: proto.INotCurrencyChange): proto.NotCurrencyChange;

        /**
         * Encodes the specified NotCurrencyChange message. Does not implicitly {@link proto.NotCurrencyChange.verify|verify} messages.
         * @param message NotCurrencyChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotCurrencyChange, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotCurrencyChange message, length delimited. Does not implicitly {@link proto.NotCurrencyChange.verify|verify} messages.
         * @param message NotCurrencyChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotCurrencyChange, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotCurrencyChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotCurrencyChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotCurrencyChange;

        /**
         * Decodes a NotCurrencyChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotCurrencyChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotCurrencyChange;

        /**
         * Verifies a NotCurrencyChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Server. */
    interface IServer {

        /** Server type */
        type: number;

        /** Server ip */
        ip?: (string|null);

        /** Server port */
        port?: (number|null);

        /** Server domain */
        domain?: (string|null);
    }

    /** Represents a Server. */
    class Server implements IServer {

        /**
         * Constructs a new Server.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServer);

        /** Server type. */
        public type: number;

        /** Server ip. */
        public ip: string;

        /** Server port. */
        public port: number;

        /** Server domain. */
        public domain: string;

        /**
         * Creates a new Server instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Server instance
         */
        public static create(properties?: proto.IServer): proto.Server;

        /**
         * Encodes the specified Server message. Does not implicitly {@link proto.Server.verify|verify} messages.
         * @param message Server message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Server message, length delimited. Does not implicitly {@link proto.Server.verify|verify} messages.
         * @param message Server message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Server message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Server;

        /**
         * Decodes a Server message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Server;

        /**
         * Verifies a Server message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a KVPair. */
    interface IKVPair {

        /** KVPair key */
        key?: (number|Long|null);

        /** KVPair lVal */
        lVal?: (number|Long|null);

        /** KVPair sVal */
        sVal?: (string|null);
    }

    /** Represents a KVPair. */
    class KVPair implements IKVPair {

        /**
         * Constructs a new KVPair.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IKVPair);

        /** KVPair key. */
        public key: (number|Long);

        /** KVPair lVal. */
        public lVal: (number|Long);

        /** KVPair sVal. */
        public sVal: string;

        /**
         * Creates a new KVPair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KVPair instance
         */
        public static create(properties?: proto.IKVPair): proto.KVPair;

        /**
         * Encodes the specified KVPair message. Does not implicitly {@link proto.KVPair.verify|verify} messages.
         * @param message KVPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IKVPair, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified KVPair message, length delimited. Does not implicitly {@link proto.KVPair.verify|verify} messages.
         * @param message KVPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IKVPair, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KVPair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.KVPair;

        /**
         * Decodes a KVPair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.KVPair;

        /**
         * Verifies a KVPair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Countdown. */
    interface ICountdown {

        /** Countdown playCard */
        playCard: number;

        /** Countdown guanpai */
        guanpai: number;
    }

    /** Represents a Countdown. */
    class Countdown implements ICountdown {

        /**
         * Constructs a new Countdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICountdown);

        /** Countdown playCard. */
        public playCard: number;

        /** Countdown guanpai. */
        public guanpai: number;

        /**
         * Creates a new Countdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Countdown instance
         */
        public static create(properties?: proto.ICountdown): proto.Countdown;

        /**
         * Encodes the specified Countdown message. Does not implicitly {@link proto.Countdown.verify|verify} messages.
         * @param message Countdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICountdown, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Countdown message, length delimited. Does not implicitly {@link proto.Countdown.verify|verify} messages.
         * @param message Countdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICountdown, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Countdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Countdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Countdown;

        /**
         * Decodes a Countdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Countdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Countdown;

        /**
         * Verifies a Countdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Room. */
    interface IRoom {

        /** Room id */
        id: number;

        /** Room mapId */
        mapId: (number|Long);

        /** Room name */
        name: string;

        /** Room icon */
        icon?: (string|null);

        /** Room type */
        type?: (number|null);

        /** Room level */
        level?: (number|null);

        /** Room baseScore */
        baseScore?: (number|Long|null);

        /** Room limit */
        limit?: ((number|Long)[]|null);

        /** Room describes */
        describes?: (string|null);

        /** Room servers */
        servers?: (proto.IServer[]|null);

        /** Room taifen */
        taifen?: (number|Long|null);
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoom);

        /** Room id. */
        public id: number;

        /** Room mapId. */
        public mapId: (number|Long);

        /** Room name. */
        public name: string;

        /** Room icon. */
        public icon: string;

        /** Room type. */
        public type: number;

        /** Room level. */
        public level: number;

        /** Room baseScore. */
        public baseScore: (number|Long);

        /** Room limit. */
        public limit: (number|Long)[];

        /** Room describes. */
        public describes: string;

        /** Room servers. */
        public servers: proto.IServer[];

        /** Room taifen. */
        public taifen: (number|Long);

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: proto.IRoom): proto.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link proto.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId: (number|Long);

        /** User nickName */
        nickName: string;

        /** User avatar */
        avatar?: (string|null);

        /** User goldCoin */
        goldCoin?: (number|Long|null);

        /** User status */
        status?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUser);

        /** User userId. */
        public userId: (number|Long);

        /** User nickName. */
        public nickName: string;

        /** User avatar. */
        public avatar: string;

        /** User goldCoin. */
        public goldCoin: (number|Long);

        /** User status. */
        public status: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: proto.IUser): proto.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUser, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUser, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Chair. */
    interface IChair {

        /** Chair seatNo */
        seatNo: number;

        /** Chair user */
        user?: (proto.IUser|null);

        /** Chair status */
        status?: (number|null);
    }

    /** Represents a Chair. */
    class Chair implements IChair {

        /**
         * Constructs a new Chair.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IChair);

        /** Chair seatNo. */
        public seatNo: number;

        /** Chair user. */
        public user?: (proto.IUser|null);

        /** Chair status. */
        public status: number;

        /**
         * Creates a new Chair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chair instance
         */
        public static create(properties?: proto.IChair): proto.Chair;

        /**
         * Encodes the specified Chair message. Does not implicitly {@link proto.Chair.verify|verify} messages.
         * @param message Chair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IChair, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Chair message, length delimited. Does not implicitly {@link proto.Chair.verify|verify} messages.
         * @param message Chair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IChair, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Chair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Chair;

        /**
         * Decodes a Chair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Chair;

        /**
         * Verifies a Chair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReconnectPlayerInfo. */
    interface IReconnectPlayerInfo {

        /** ReconnectPlayerInfo seatNo */
        seatNo: number;

        /** ReconnectPlayerInfo cards */
        cards?: (proto.ICardInfo[]|null);

        /** ReconnectPlayerInfo discard */
        discard?: (proto.ICardInfo[]|null);

        /** ReconnectPlayerInfo position */
        position?: (number|null);

        /** ReconnectPlayerInfo huapai */
        huapai?: (proto.ICardInfo[]|null);

        /** ReconnectPlayerInfo patterns */
        patterns?: (proto.ICardsGroup[]|null);

        /** ReconnectPlayerInfo lastCard */
        lastCard?: (proto.ICardInfo|null);

        /** ReconnectPlayerInfo ting */
        ting?: (number|null);
    }

    /** Represents a ReconnectPlayerInfo. */
    class ReconnectPlayerInfo implements IReconnectPlayerInfo {

        /**
         * Constructs a new ReconnectPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReconnectPlayerInfo);

        /** ReconnectPlayerInfo seatNo. */
        public seatNo: number;

        /** ReconnectPlayerInfo cards. */
        public cards: proto.ICardInfo[];

        /** ReconnectPlayerInfo discard. */
        public discard: proto.ICardInfo[];

        /** ReconnectPlayerInfo position. */
        public position: number;

        /** ReconnectPlayerInfo huapai. */
        public huapai: proto.ICardInfo[];

        /** ReconnectPlayerInfo patterns. */
        public patterns: proto.ICardsGroup[];

        /** ReconnectPlayerInfo lastCard. */
        public lastCard?: (proto.ICardInfo|null);

        /** ReconnectPlayerInfo ting. */
        public ting: number;

        /**
         * Creates a new ReconnectPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectPlayerInfo instance
         */
        public static create(properties?: proto.IReconnectPlayerInfo): proto.ReconnectPlayerInfo;

        /**
         * Encodes the specified ReconnectPlayerInfo message. Does not implicitly {@link proto.ReconnectPlayerInfo.verify|verify} messages.
         * @param message ReconnectPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReconnectPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReconnectPlayerInfo message, length delimited. Does not implicitly {@link proto.ReconnectPlayerInfo.verify|verify} messages.
         * @param message ReconnectPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReconnectPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReconnectPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReconnectPlayerInfo;

        /**
         * Decodes a ReconnectPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReconnectPlayerInfo;

        /**
         * Verifies a ReconnectPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongPattern. */
    interface IMahjongPattern {

        /** MahjongPattern type */
        type: number;

        /** MahjongPattern cards */
        cards?: (proto.ICardInfo[]|null);
    }

    /** Represents a MahjongPattern. */
    class MahjongPattern implements IMahjongPattern {

        /**
         * Constructs a new MahjongPattern.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMahjongPattern);

        /** MahjongPattern type. */
        public type: number;

        /** MahjongPattern cards. */
        public cards: proto.ICardInfo[];

        /**
         * Creates a new MahjongPattern instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongPattern instance
         */
        public static create(properties?: proto.IMahjongPattern): proto.MahjongPattern;

        /**
         * Encodes the specified MahjongPattern message. Does not implicitly {@link proto.MahjongPattern.verify|verify} messages.
         * @param message MahjongPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMahjongPattern, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongPattern message, length delimited. Does not implicitly {@link proto.MahjongPattern.verify|verify} messages.
         * @param message MahjongPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMahjongPattern, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongPattern message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.MahjongPattern;

        /**
         * Decodes a MahjongPattern message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.MahjongPattern;

        /**
         * Verifies a MahjongPattern message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Table. */
    interface ITable {

        /** Table tableId */
        tableId: string;

        /** Table roomId */
        roomId: number;

        /** Table roomLevel */
        roomLevel: number;

        /** Table type */
        type?: (number|null);

        /** Table tableName */
        tableName?: (string|null);

        /** Table roundId */
        roundId: string;

        /** Table baseScore */
        baseScore: (number|Long);

        /** Table gamePhase */
        gamePhase: number;

        /** Table chairs */
        chairs?: (proto.IChair[]|null);

        /** Table countdown */
        countdown: proto.ICountdown;
    }

    /** Represents a Table. */
    class Table implements ITable {

        /**
         * Constructs a new Table.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITable);

        /** Table tableId. */
        public tableId: string;

        /** Table roomId. */
        public roomId: number;

        /** Table roomLevel. */
        public roomLevel: number;

        /** Table type. */
        public type: number;

        /** Table tableName. */
        public tableName: string;

        /** Table roundId. */
        public roundId: string;

        /** Table baseScore. */
        public baseScore: (number|Long);

        /** Table gamePhase. */
        public gamePhase: number;

        /** Table chairs. */
        public chairs: proto.IChair[];

        /** Table countdown. */
        public countdown: proto.ICountdown;

        /**
         * Creates a new Table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Table instance
         */
        public static create(properties?: proto.ITable): proto.Table;

        /**
         * Encodes the specified Table message. Does not implicitly {@link proto.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link proto.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Table;

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Table;

        /**
         * Verifies a Table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player seatNo */
        seatNo: number;

        /** Player userId */
        userId: (number|Long);

        /** Player userType */
        userType: number;

        /** Player userName */
        userName: string;

        /** Player nickName */
        nickName?: (string|null);

        /** Player avatar */
        avatar?: (string|null);

        /** Player channel */
        channel?: (string|null);

        /** Player proxy */
        proxy?: (string|null);

        /** Player group */
        group?: (string|null);

        /** Player userIp */
        userIp?: (string|null);

        /** Player handCards */
        handCards?: (number[]|null);

        /** Player surplusCards */
        surplusCards?: (number[]|null);

        /** Player bombCount */
        bombCount?: (number|null);

        /** Player initChips */
        initChips: (number|Long);

        /** Player winChips */
        winChips?: (number|Long|null);

        /** Player endChips */
        endChips?: (number|Long|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPlayer);

        /** Player seatNo. */
        public seatNo: number;

        /** Player userId. */
        public userId: (number|Long);

        /** Player userType. */
        public userType: number;

        /** Player userName. */
        public userName: string;

        /** Player nickName. */
        public nickName: string;

        /** Player avatar. */
        public avatar: string;

        /** Player channel. */
        public channel: string;

        /** Player proxy. */
        public proxy: string;

        /** Player group. */
        public group: string;

        /** Player userIp. */
        public userIp: string;

        /** Player handCards. */
        public handCards: number[];

        /** Player surplusCards. */
        public surplusCards: number[];

        /** Player bombCount. */
        public bombCount: number;

        /** Player initChips. */
        public initChips: (number|Long);

        /** Player winChips. */
        public winChips: (number|Long);

        /** Player endChips. */
        public endChips: (number|Long);

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: proto.IPlayer): proto.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link proto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link proto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Action. */
    interface IAction {

        /** Action type */
        type: number;

        /** Action seatNo */
        seatNo?: (number|null);

        /** Action data */
        data?: (number[]|null);

        /** Action timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents an Action. */
    class Action implements IAction {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAction);

        /** Action type. */
        public type: number;

        /** Action seatNo. */
        public seatNo: number;

        /** Action data. */
        public data: number[];

        /** Action timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: proto.IAction): proto.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link proto.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link proto.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameVCR. */
    interface IGameVCR {

        /** GameVCR roomId */
        roomId: number;

        /** GameVCR roomLevel */
        roomLevel: number;

        /** GameVCR type */
        type?: (number|null);

        /** GameVCR tableId */
        tableId: string;

        /** GameVCR roundId */
        roundId: string;

        /** GameVCR beginTime */
        beginTime: (number|Long);

        /** GameVCR endTime */
        endTime: (number|Long);

        /** GameVCR dealer */
        dealer: number;

        /** GameVCR baseScore */
        baseScore?: (number|Long|null);

        /** GameVCR players */
        players?: (proto.IPlayer[]|null);

        /** GameVCR actions */
        actions?: (proto.IAction[]|null);
    }

    /** Represents a GameVCR. */
    class GameVCR implements IGameVCR {

        /**
         * Constructs a new GameVCR.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGameVCR);

        /** GameVCR roomId. */
        public roomId: number;

        /** GameVCR roomLevel. */
        public roomLevel: number;

        /** GameVCR type. */
        public type: number;

        /** GameVCR tableId. */
        public tableId: string;

        /** GameVCR roundId. */
        public roundId: string;

        /** GameVCR beginTime. */
        public beginTime: (number|Long);

        /** GameVCR endTime. */
        public endTime: (number|Long);

        /** GameVCR dealer. */
        public dealer: number;

        /** GameVCR baseScore. */
        public baseScore: (number|Long);

        /** GameVCR players. */
        public players: proto.IPlayer[];

        /** GameVCR actions. */
        public actions: proto.IAction[];

        /**
         * Creates a new GameVCR instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameVCR instance
         */
        public static create(properties?: proto.IGameVCR): proto.GameVCR;

        /**
         * Encodes the specified GameVCR message. Does not implicitly {@link proto.GameVCR.verify|verify} messages.
         * @param message GameVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGameVCR, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameVCR message, length delimited. Does not implicitly {@link proto.GameVCR.verify|verify} messages.
         * @param message GameVCR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGameVCR, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameVCR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.GameVCR;

        /**
         * Decodes a GameVCR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.GameVCR;

        /**
         * Verifies a GameVCR message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo CardID */
        CardID: number;

        /** CardInfo Sit */
        Sit?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICardInfo);

        /** CardInfo CardID. */
        public CardID: number;

        /** CardInfo Sit. */
        public Sit: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: proto.ICardInfo): proto.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link proto.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link proto.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HandCards. */
    interface IHandCards {

        /** HandCards seat */
        seat: number;

        /** HandCards cards */
        cards?: (proto.ICardInfo[]|null);

        /** HandCards huCard */
        huCard?: (proto.ICardInfo|null);
    }

    /** Represents a HandCards. */
    class HandCards implements IHandCards {

        /**
         * Constructs a new HandCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHandCards);

        /** HandCards seat. */
        public seat: number;

        /** HandCards cards. */
        public cards: proto.ICardInfo[];

        /** HandCards huCard. */
        public huCard?: (proto.ICardInfo|null);

        /**
         * Creates a new HandCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandCards instance
         */
        public static create(properties?: proto.IHandCards): proto.HandCards;

        /**
         * Encodes the specified HandCards message. Does not implicitly {@link proto.HandCards.verify|verify} messages.
         * @param message HandCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHandCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HandCards message, length delimited. Does not implicitly {@link proto.HandCards.verify|verify} messages.
         * @param message HandCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHandCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HandCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.HandCards;

        /**
         * Decodes a HandCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.HandCards;

        /**
         * Verifies a HandCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardsGroup. */
    interface ICardsGroup {

        /** CardsGroup Sit */
        Sit: number;

        /** CardsGroup Type */
        Type: number;

        /** CardsGroup Cards */
        Cards?: (proto.ICardInfo[]|null);

        /** CardsGroup ObtainCard */
        ObtainCard?: (proto.ICardInfo|null);

        /** CardsGroup ObtainCardSit */
        ObtainCardSit?: (number|null);
    }

    /** Represents a CardsGroup. */
    class CardsGroup implements ICardsGroup {

        /**
         * Constructs a new CardsGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICardsGroup);

        /** CardsGroup Sit. */
        public Sit: number;

        /** CardsGroup Type. */
        public Type: number;

        /** CardsGroup Cards. */
        public Cards: proto.ICardInfo[];

        /** CardsGroup ObtainCard. */
        public ObtainCard?: (proto.ICardInfo|null);

        /** CardsGroup ObtainCardSit. */
        public ObtainCardSit: number;

        /**
         * Creates a new CardsGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardsGroup instance
         */
        public static create(properties?: proto.ICardsGroup): proto.CardsGroup;

        /**
         * Encodes the specified CardsGroup message. Does not implicitly {@link proto.CardsGroup.verify|verify} messages.
         * @param message CardsGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICardsGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardsGroup message, length delimited. Does not implicitly {@link proto.CardsGroup.verify|verify} messages.
         * @param message CardsGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICardsGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardsGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.CardsGroup;

        /**
         * Decodes a CardsGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.CardsGroup;

        /**
         * Verifies a CardsGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongFanNumType. */
    interface IMahjongFanNumType {

        /** MahjongFanNumType FanNum */
        FanNum: number;

        /** MahjongFanNumType FanType */
        FanType: number;

        /** MahjongFanNumType Cards */
        Cards?: (proto.ICardInfo[]|null);
    }

    /** Represents a MahjongFanNumType. */
    class MahjongFanNumType implements IMahjongFanNumType {

        /**
         * Constructs a new MahjongFanNumType.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMahjongFanNumType);

        /** MahjongFanNumType FanNum. */
        public FanNum: number;

        /** MahjongFanNumType FanType. */
        public FanType: number;

        /** MahjongFanNumType Cards. */
        public Cards: proto.ICardInfo[];

        /**
         * Creates a new MahjongFanNumType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongFanNumType instance
         */
        public static create(properties?: proto.IMahjongFanNumType): proto.MahjongFanNumType;

        /**
         * Encodes the specified MahjongFanNumType message. Does not implicitly {@link proto.MahjongFanNumType.verify|verify} messages.
         * @param message MahjongFanNumType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMahjongFanNumType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongFanNumType message, length delimited. Does not implicitly {@link proto.MahjongFanNumType.verify|verify} messages.
         * @param message MahjongFanNumType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMahjongFanNumType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.MahjongFanNumType;

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.MahjongFanNumType;

        /**
         * Verifies a MahjongFanNumType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TingCard. */
    interface ITingCard {

        /** TingCard FanType */
        FanType: number;

        /** TingCard CardIndex */
        CardIndex: number;
    }

    /** Represents a TingCard. */
    class TingCard implements ITingCard {

        /**
         * Constructs a new TingCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITingCard);

        /** TingCard FanType. */
        public FanType: number;

        /** TingCard CardIndex. */
        public CardIndex: number;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingCard instance
         */
        public static create(properties?: proto.ITingCard): proto.TingCard;

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link proto.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITingCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link proto.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITingCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.TingCard;

        /**
         * Decodes a TingCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.TingCard;

        /**
         * Verifies a TingCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongCallInfo. */
    interface IMahjongCallInfo {

        /** MahjongCallInfo ObtainCardIndex */
        ObtainCardIndex: number;

        /** MahjongCallInfo CallCards */
        CallCards?: (proto.ITingCard[]|null);
    }

    /** Represents a MahjongCallInfo. */
    class MahjongCallInfo implements IMahjongCallInfo {

        /**
         * Constructs a new MahjongCallInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMahjongCallInfo);

        /** MahjongCallInfo ObtainCardIndex. */
        public ObtainCardIndex: number;

        /** MahjongCallInfo CallCards. */
        public CallCards: proto.ITingCard[];

        /**
         * Creates a new MahjongCallInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongCallInfo instance
         */
        public static create(properties?: proto.IMahjongCallInfo): proto.MahjongCallInfo;

        /**
         * Encodes the specified MahjongCallInfo message. Does not implicitly {@link proto.MahjongCallInfo.verify|verify} messages.
         * @param message MahjongCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMahjongCallInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongCallInfo message, length delimited. Does not implicitly {@link proto.MahjongCallInfo.verify|verify} messages.
         * @param message MahjongCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMahjongCallInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.MahjongCallInfo;

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.MahjongCallInfo;

        /**
         * Verifies a MahjongCallInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerResultInfo. */
    interface IPlayerResultInfo {

        /** PlayerResultInfo username */
        username: string;

        /** PlayerResultInfo seat */
        seat?: (number|null);

        /** PlayerResultInfo fantype */
        fantype?: (number|null);

        /** PlayerResultInfo wintype */
        wintype?: (number|null);

        /** PlayerResultInfo max_fan */
        max_fan?: (number|null);

        /** PlayerResultInfo gameCoin */
        gameCoin?: (number|null);

        /** PlayerResultInfo Coin */
        Coin?: (number|null);

        /** PlayerResultInfo feeCoin */
        feeCoin?: (number|null);

        /** PlayerResultInfo result_list_detail */
        result_list_detail?: (proto.IScoreDescDetail[]|null);

        /** PlayerResultInfo handCards */
        handCards?: (proto.ICardsGroup[]|null);
    }

    /** Represents a PlayerResultInfo. */
    class PlayerResultInfo implements IPlayerResultInfo {

        /**
         * Constructs a new PlayerResultInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPlayerResultInfo);

        /** PlayerResultInfo username. */
        public username: string;

        /** PlayerResultInfo seat. */
        public seat: number;

        /** PlayerResultInfo fantype. */
        public fantype: number;

        /** PlayerResultInfo wintype. */
        public wintype: number;

        /** PlayerResultInfo max_fan. */
        public max_fan: number;

        /** PlayerResultInfo gameCoin. */
        public gameCoin: number;

        /** PlayerResultInfo Coin. */
        public Coin: number;

        /** PlayerResultInfo feeCoin. */
        public feeCoin: number;

        /** PlayerResultInfo result_list_detail. */
        public result_list_detail: proto.IScoreDescDetail[];

        /** PlayerResultInfo handCards. */
        public handCards: proto.ICardsGroup[];

        /**
         * Creates a new PlayerResultInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerResultInfo instance
         */
        public static create(properties?: proto.IPlayerResultInfo): proto.PlayerResultInfo;

        /**
         * Encodes the specified PlayerResultInfo message. Does not implicitly {@link proto.PlayerResultInfo.verify|verify} messages.
         * @param message PlayerResultInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPlayerResultInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerResultInfo message, length delimited. Does not implicitly {@link proto.PlayerResultInfo.verify|verify} messages.
         * @param message PlayerResultInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPlayerResultInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.PlayerResultInfo;

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.PlayerResultInfo;

        /**
         * Verifies a PlayerResultInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ScoreDescDetail. */
    interface IScoreDescDetail {

        /** ScoreDescDetail type */
        type?: (number|null);

        /** ScoreDescDetail fannum */
        fannum?: (number|null);

        /** ScoreDescDetail score */
        score?: (number|null);

        /** ScoreDescDetail obtainsit */
        obtainsit?: (number|null);

        /** ScoreDescDetail selfseat */
        selfseat?: (number|null);

        /** ScoreDescDetail score_change */
        score_change?: (number[]|null);

        /** ScoreDescDetail fan_zhong */
        fan_zhong?: (number[]|null);

        /** ScoreDescDetail fan_num */
        fan_num?: (number[]|null);

        /** ScoreDescDetail huCardID */
        huCardID?: (number|null);
    }

    /** Represents a ScoreDescDetail. */
    class ScoreDescDetail implements IScoreDescDetail {

        /**
         * Constructs a new ScoreDescDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IScoreDescDetail);

        /** ScoreDescDetail type. */
        public type: number;

        /** ScoreDescDetail fannum. */
        public fannum: number;

        /** ScoreDescDetail score. */
        public score: number;

        /** ScoreDescDetail obtainsit. */
        public obtainsit: number;

        /** ScoreDescDetail selfseat. */
        public selfseat: number;

        /** ScoreDescDetail score_change. */
        public score_change: number[];

        /** ScoreDescDetail fan_zhong. */
        public fan_zhong: number[];

        /** ScoreDescDetail fan_num. */
        public fan_num: number[];

        /** ScoreDescDetail huCardID. */
        public huCardID: number;

        /**
         * Creates a new ScoreDescDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreDescDetail instance
         */
        public static create(properties?: proto.IScoreDescDetail): proto.ScoreDescDetail;

        /**
         * Encodes the specified ScoreDescDetail message. Does not implicitly {@link proto.ScoreDescDetail.verify|verify} messages.
         * @param message ScoreDescDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IScoreDescDetail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ScoreDescDetail message, length delimited. Does not implicitly {@link proto.ScoreDescDetail.verify|verify} messages.
         * @param message ScoreDescDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IScoreDescDetail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ScoreDescDetail;

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ScoreDescDetail;

        /**
         * Verifies a ScoreDescDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserName */
        UserName?: (string|null);

        /** PlayerInfo UsershowName */
        UsershowName?: (string|null);

        /** PlayerInfo UserImage */
        UserImage?: (string|null);

        /** PlayerInfo UserSit */
        UserSit?: (number|null);

        /** PlayerInfo Integral */
        Integral?: (number|null);

        /** PlayerInfo Coin */
        Coin?: (number|Long|null);

        /** PlayerInfo NowLevel */
        NowLevel?: (proto.IRank|null);

        /** PlayerInfo HisLevel */
        HisLevel?: (proto.IRank|null);

        /** PlayerInfo Stage */
        Stage?: (number|null);

        /** PlayerInfo Ranking */
        Ranking?: (number|null);

        /** PlayerInfo WinIntegral */
        WinIntegral?: (number|null);

        /** PlayerInfo TotalNum */
        TotalNum?: (number|null);

        /** PlayerInfo ReadyNum */
        ReadyNum?: (number|null);

        /** PlayerInfo HuNum */
        HuNum?: (number|null);

        /** PlayerInfo GunNum */
        GunNum?: (number|null);

        /** PlayerInfo ZimoNum */
        ZimoNum?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo IsMember */
        IsMember?: (boolean|null);

        /** PlayerInfo HistoryMaxLevel */
        HistoryMaxLevel?: (proto.IRank|null);

        /** PlayerInfo Average_Rank */
        Average_Rank?: (number|null);

        /** PlayerInfo Openingrate */
        Openingrate?: (number|null);

        /** PlayerInfo Round2_rank1 */
        Round2_rank1?: (number|null);

        /** PlayerInfo Round2_rank2 */
        Round2_rank2?: (number|null);

        /** PlayerInfo Round2_rank3 */
        Round2_rank3?: (number|null);

        /** PlayerInfo Round2_rank4 */
        Round2_rank4?: (number|null);

        /** PlayerInfo Round4_rank1 */
        Round4_rank1?: (number|null);

        /** PlayerInfo Round4_rank2 */
        Round4_rank2?: (number|null);

        /** PlayerInfo Round4_rank3 */
        Round4_rank3?: (number|null);

        /** PlayerInfo Round4_rank4 */
        Round4_rank4?: (number|null);

        /** PlayerInfo SocietyContributionValue */
        SocietyContributionValue?: (number|null);

        /** PlayerInfo SocietyPracticeType */
        SocietyPracticeType?: (number|null);

        /** PlayerInfo SocietyPracticeFirstCount */
        SocietyPracticeFirstCount?: (number|null);

        /** PlayerInfo SocietyPracticeSecondCount */
        SocietyPracticeSecondCount?: (number|null);

        /** PlayerInfo SocietyPracticeFourCount */
        SocietyPracticeFourCount?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPlayerInfo);

        /** PlayerInfo UserName. */
        public UserName: string;

        /** PlayerInfo UsershowName. */
        public UsershowName: string;

        /** PlayerInfo UserImage. */
        public UserImage: string;

        /** PlayerInfo UserSit. */
        public UserSit: number;

        /** PlayerInfo Integral. */
        public Integral: number;

        /** PlayerInfo Coin. */
        public Coin: (number|Long);

        /** PlayerInfo NowLevel. */
        public NowLevel?: (proto.IRank|null);

        /** PlayerInfo HisLevel. */
        public HisLevel?: (proto.IRank|null);

        /** PlayerInfo Stage. */
        public Stage: number;

        /** PlayerInfo Ranking. */
        public Ranking: number;

        /** PlayerInfo WinIntegral. */
        public WinIntegral: number;

        /** PlayerInfo TotalNum. */
        public TotalNum: number;

        /** PlayerInfo ReadyNum. */
        public ReadyNum: number;

        /** PlayerInfo HuNum. */
        public HuNum: number;

        /** PlayerInfo GunNum. */
        public GunNum: number;

        /** PlayerInfo ZimoNum. */
        public ZimoNum: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo IsMember. */
        public IsMember: boolean;

        /** PlayerInfo HistoryMaxLevel. */
        public HistoryMaxLevel?: (proto.IRank|null);

        /** PlayerInfo Average_Rank. */
        public Average_Rank: number;

        /** PlayerInfo Openingrate. */
        public Openingrate: number;

        /** PlayerInfo Round2_rank1. */
        public Round2_rank1: number;

        /** PlayerInfo Round2_rank2. */
        public Round2_rank2: number;

        /** PlayerInfo Round2_rank3. */
        public Round2_rank3: number;

        /** PlayerInfo Round2_rank4. */
        public Round2_rank4: number;

        /** PlayerInfo Round4_rank1. */
        public Round4_rank1: number;

        /** PlayerInfo Round4_rank2. */
        public Round4_rank2: number;

        /** PlayerInfo Round4_rank3. */
        public Round4_rank3: number;

        /** PlayerInfo Round4_rank4. */
        public Round4_rank4: number;

        /** PlayerInfo SocietyContributionValue. */
        public SocietyContributionValue: number;

        /** PlayerInfo SocietyPracticeType. */
        public SocietyPracticeType: number;

        /** PlayerInfo SocietyPracticeFirstCount. */
        public SocietyPracticeFirstCount: number;

        /** PlayerInfo SocietyPracticeSecondCount. */
        public SocietyPracticeSecondCount: number;

        /** PlayerInfo SocietyPracticeFourCount. */
        public SocietyPracticeFourCount: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: proto.IPlayerInfo): proto.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Rank. */
    interface IRank {

        /** Rank duan */
        duan: number;

        /** Rank xing */
        xing: number;
    }

    /** Represents a Rank. */
    class Rank implements IRank {

        /**
         * Constructs a new Rank.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRank);

        /** Rank duan. */
        public duan: number;

        /** Rank xing. */
        public xing: number;

        /**
         * Creates a new Rank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rank instance
         */
        public static create(properties?: proto.IRank): proto.Rank;

        /**
         * Encodes the specified Rank message. Does not implicitly {@link proto.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link proto.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Rank;

        /**
         * Decodes a Rank message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Rank;

        /**
         * Verifies a Rank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Seat. */
    interface ISeat {

        /** Seat seatNo */
        seatNo: number;

        /** Seat userId */
        userId: (number|Long);

        /** Seat type */
        type?: (number|null);

        /** Seat state */
        state?: (number|null);

        /** Seat userName */
        userName?: (string|null);

        /** Seat channel */
        channel?: (string|null);

        /** Seat proxy */
        proxy?: (string|null);

        /** Seat group */
        group?: (string|null);

        /** Seat nickName */
        nickName?: (string|null);

        /** Seat avatar */
        avatar?: (string|null);

        /** Seat chips */
        chips: (number|Long);

        /** Seat style */
        style?: (number|null);

        /** Seat ability */
        ability?: (number|null);

        /** Seat attributes */
        attributes?: (number[]|null);

        /** Seat money */
        money?: (number|Long|null);

        /** Seat curChips */
        curChips?: (number|Long|null);

        /** Seat kickOut */
        kickOut?: (boolean|null);

        /** Seat serviceMoney */
        serviceMoney?: (number|Long|null);
    }

    /** Represents a Seat. */
    class Seat implements ISeat {

        /**
         * Constructs a new Seat.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISeat);

        /** Seat seatNo. */
        public seatNo: number;

        /** Seat userId. */
        public userId: (number|Long);

        /** Seat type. */
        public type: number;

        /** Seat state. */
        public state: number;

        /** Seat userName. */
        public userName: string;

        /** Seat channel. */
        public channel: string;

        /** Seat proxy. */
        public proxy: string;

        /** Seat group. */
        public group: string;

        /** Seat nickName. */
        public nickName: string;

        /** Seat avatar. */
        public avatar: string;

        /** Seat chips. */
        public chips: (number|Long);

        /** Seat style. */
        public style: number;

        /** Seat ability. */
        public ability: number;

        /** Seat attributes. */
        public attributes: number[];

        /** Seat money. */
        public money: (number|Long);

        /** Seat curChips. */
        public curChips: (number|Long);

        /** Seat kickOut. */
        public kickOut: boolean;

        /** Seat serviceMoney. */
        public serviceMoney: (number|Long);

        /**
         * Creates a new Seat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Seat instance
         */
        public static create(properties?: proto.ISeat): proto.Seat;

        /**
         * Encodes the specified Seat message. Does not implicitly {@link proto.Seat.verify|verify} messages.
         * @param message Seat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Seat message, length delimited. Does not implicitly {@link proto.Seat.verify|verify} messages.
         * @param message Seat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Seat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Seat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Seat;

        /**
         * Decodes a Seat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Seat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Seat;

        /**
         * Verifies a Seat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomStatus. */
    interface IRoomStatus {

        /** RoomStatus id */
        id: number;

        /** RoomStatus playerCount */
        playerCount: number;
    }

    /** Represents a RoomStatus. */
    class RoomStatus implements IRoomStatus {

        /**
         * Constructs a new RoomStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoomStatus);

        /** RoomStatus id. */
        public id: number;

        /** RoomStatus playerCount. */
        public playerCount: number;

        /**
         * Creates a new RoomStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomStatus instance
         */
        public static create(properties?: proto.IRoomStatus): proto.RoomStatus;

        /**
         * Encodes the specified RoomStatus message. Does not implicitly {@link proto.RoomStatus.verify|verify} messages.
         * @param message RoomStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoomStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomStatus message, length delimited. Does not implicitly {@link proto.RoomStatus.verify|verify} messages.
         * @param message RoomStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoomStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.RoomStatus;

        /**
         * Decodes a RoomStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.RoomStatus;

        /**
         * Verifies a RoomStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqLogin. */
    interface IReqLogin {

        /** ReqLogin certType */
        certType?: (number|null);

        /** ReqLogin cert */
        cert?: (string|null);

        /** ReqLogin nickName */
        nickName?: (string|null);

        /** ReqLogin avatar */
        avatar?: (string|null);

        /** ReqLogin channelId */
        channelId?: (number|null);

        /** ReqLogin kvList */
        kvList?: (proto.IKVPair[]|null);
    }

    /** Represents a ReqLogin. */
    class ReqLogin implements IReqLogin {

        /**
         * Constructs a new ReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqLogin);

        /** ReqLogin certType. */
        public certType: number;

        /** ReqLogin cert. */
        public cert: string;

        /** ReqLogin nickName. */
        public nickName: string;

        /** ReqLogin avatar. */
        public avatar: string;

        /** ReqLogin channelId. */
        public channelId: number;

        /** ReqLogin kvList. */
        public kvList: proto.IKVPair[];

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLogin instance
         */
        public static create(properties?: proto.IReqLogin): proto.ReqLogin;

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
         * @param message ReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqLogin;

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqLogin;

        /**
         * Verifies a ReqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckLogin. */
    interface IAckLogin {

        /** AckLogin result */
        result: number;

        /** AckLogin userId */
        userId?: (number|Long|null);

        /** AckLogin userName */
        userName?: (string|null);

        /** AckLogin nickName */
        nickName?: (string|null);

        /** AckLogin avatar */
        avatar?: (string|null);

        /** AckLogin goldCoin */
        goldCoin?: (number|Long|null);

        /** AckLogin diamond */
        diamond?: (number|Long|null);

        /** AckLogin roomId */
        roomId?: (number|null);

        /** AckLogin tableId */
        tableId?: (string|null);

        /** AckLogin properties */
        properties?: (proto.IKVPair[]|null);
    }

    /** Represents an AckLogin. */
    class AckLogin implements IAckLogin {

        /**
         * Constructs a new AckLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckLogin);

        /** AckLogin result. */
        public result: number;

        /** AckLogin userId. */
        public userId: (number|Long);

        /** AckLogin userName. */
        public userName: string;

        /** AckLogin nickName. */
        public nickName: string;

        /** AckLogin avatar. */
        public avatar: string;

        /** AckLogin goldCoin. */
        public goldCoin: (number|Long);

        /** AckLogin diamond. */
        public diamond: (number|Long);

        /** AckLogin roomId. */
        public roomId: number;

        /** AckLogin tableId. */
        public tableId: string;

        /** AckLogin properties. */
        public properties: proto.IKVPair[];

        /**
         * Creates a new AckLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckLogin instance
         */
        public static create(properties?: proto.IAckLogin): proto.AckLogin;

        /**
         * Encodes the specified AckLogin message. Does not implicitly {@link proto.AckLogin.verify|verify} messages.
         * @param message AckLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckLogin message, length delimited. Does not implicitly {@link proto.AckLogin.verify|verify} messages.
         * @param message AckLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckLogin;

        /**
         * Decodes an AckLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckLogin;

        /**
         * Verifies an AckLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqQueryCoin. */
    interface IReqQueryCoin {

        /** ReqQueryCoin userId */
        userId: (number|Long);
    }

    /** Represents a ReqQueryCoin. */
    class ReqQueryCoin implements IReqQueryCoin {

        /**
         * Constructs a new ReqQueryCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqQueryCoin);

        /** ReqQueryCoin userId. */
        public userId: (number|Long);

        /**
         * Creates a new ReqQueryCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqQueryCoin instance
         */
        public static create(properties?: proto.IReqQueryCoin): proto.ReqQueryCoin;

        /**
         * Encodes the specified ReqQueryCoin message. Does not implicitly {@link proto.ReqQueryCoin.verify|verify} messages.
         * @param message ReqQueryCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqQueryCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqQueryCoin message, length delimited. Does not implicitly {@link proto.ReqQueryCoin.verify|verify} messages.
         * @param message ReqQueryCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqQueryCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqQueryCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqQueryCoin;

        /**
         * Decodes a ReqQueryCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqQueryCoin;

        /**
         * Verifies a ReqQueryCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckQueryCoin. */
    interface IAckQueryCoin {

        /** AckQueryCoin result */
        result: number;

        /** AckQueryCoin userId */
        userId: (number|Long);

        /** AckQueryCoin goldCoin */
        goldCoin?: (number|Long|null);
    }

    /** Represents an AckQueryCoin. */
    class AckQueryCoin implements IAckQueryCoin {

        /**
         * Constructs a new AckQueryCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckQueryCoin);

        /** AckQueryCoin result. */
        public result: number;

        /** AckQueryCoin userId. */
        public userId: (number|Long);

        /** AckQueryCoin goldCoin. */
        public goldCoin: (number|Long);

        /**
         * Creates a new AckQueryCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckQueryCoin instance
         */
        public static create(properties?: proto.IAckQueryCoin): proto.AckQueryCoin;

        /**
         * Encodes the specified AckQueryCoin message. Does not implicitly {@link proto.AckQueryCoin.verify|verify} messages.
         * @param message AckQueryCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckQueryCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckQueryCoin message, length delimited. Does not implicitly {@link proto.AckQueryCoin.verify|verify} messages.
         * @param message AckQueryCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckQueryCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckQueryCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckQueryCoin;

        /**
         * Decodes an AckQueryCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckQueryCoin;

        /**
         * Verifies an AckQueryCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqRoomList. */
    interface IReqRoomList {

        /** ReqRoomList userId */
        userId: (number|Long);
    }

    /** Represents a ReqRoomList. */
    class ReqRoomList implements IReqRoomList {

        /**
         * Constructs a new ReqRoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqRoomList);

        /** ReqRoomList userId. */
        public userId: (number|Long);

        /**
         * Creates a new ReqRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRoomList instance
         */
        public static create(properties?: proto.IReqRoomList): proto.ReqRoomList;

        /**
         * Encodes the specified ReqRoomList message. Does not implicitly {@link proto.ReqRoomList.verify|verify} messages.
         * @param message ReqRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqRoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqRoomList message, length delimited. Does not implicitly {@link proto.ReqRoomList.verify|verify} messages.
         * @param message ReqRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqRoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqRoomList;

        /**
         * Decodes a ReqRoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqRoomList;

        /**
         * Verifies a ReqRoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckRoomList. */
    interface IAckRoomList {

        /** AckRoomList userId */
        userId: (number|Long);

        /** AckRoomList roomList */
        roomList?: (proto.IRoom[]|null);

        /** AckRoomList status */
        status?: (proto.IRoomStatus[]|null);
    }

    /** Represents an AckRoomList. */
    class AckRoomList implements IAckRoomList {

        /**
         * Constructs a new AckRoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckRoomList);

        /** AckRoomList userId. */
        public userId: (number|Long);

        /** AckRoomList roomList. */
        public roomList: proto.IRoom[];

        /** AckRoomList status. */
        public status: proto.IRoomStatus[];

        /**
         * Creates a new AckRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckRoomList instance
         */
        public static create(properties?: proto.IAckRoomList): proto.AckRoomList;

        /**
         * Encodes the specified AckRoomList message. Does not implicitly {@link proto.AckRoomList.verify|verify} messages.
         * @param message AckRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckRoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckRoomList message, length delimited. Does not implicitly {@link proto.AckRoomList.verify|verify} messages.
         * @param message AckRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckRoomList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckRoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckRoomList;

        /**
         * Decodes an AckRoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckRoomList;

        /**
         * Verifies an AckRoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqRoomStatus. */
    interface IReqRoomStatus {

        /** ReqRoomStatus userId */
        userId: (number|Long);
    }

    /** Represents a ReqRoomStatus. */
    class ReqRoomStatus implements IReqRoomStatus {

        /**
         * Constructs a new ReqRoomStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqRoomStatus);

        /** ReqRoomStatus userId. */
        public userId: (number|Long);

        /**
         * Creates a new ReqRoomStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqRoomStatus instance
         */
        public static create(properties?: proto.IReqRoomStatus): proto.ReqRoomStatus;

        /**
         * Encodes the specified ReqRoomStatus message. Does not implicitly {@link proto.ReqRoomStatus.verify|verify} messages.
         * @param message ReqRoomStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqRoomStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqRoomStatus message, length delimited. Does not implicitly {@link proto.ReqRoomStatus.verify|verify} messages.
         * @param message ReqRoomStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqRoomStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRoomStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqRoomStatus;

        /**
         * Decodes a ReqRoomStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqRoomStatus;

        /**
         * Verifies a ReqRoomStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckRoomStatus. */
    interface IAckRoomStatus {

        /** AckRoomStatus userId */
        userId: (number|Long);

        /** AckRoomStatus status */
        status?: (proto.IRoomStatus[]|null);
    }

    /** Represents an AckRoomStatus. */
    class AckRoomStatus implements IAckRoomStatus {

        /**
         * Constructs a new AckRoomStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckRoomStatus);

        /** AckRoomStatus userId. */
        public userId: (number|Long);

        /** AckRoomStatus status. */
        public status: proto.IRoomStatus[];

        /**
         * Creates a new AckRoomStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckRoomStatus instance
         */
        public static create(properties?: proto.IAckRoomStatus): proto.AckRoomStatus;

        /**
         * Encodes the specified AckRoomStatus message. Does not implicitly {@link proto.AckRoomStatus.verify|verify} messages.
         * @param message AckRoomStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckRoomStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckRoomStatus message, length delimited. Does not implicitly {@link proto.AckRoomStatus.verify|verify} messages.
         * @param message AckRoomStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckRoomStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckRoomStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckRoomStatus;

        /**
         * Decodes an AckRoomStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckRoomStatus;

        /**
         * Verifies an AckRoomStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAccountAvailable. */
    interface IReqAccountAvailable {

        /** ReqAccountAvailable userId */
        userId: (number|Long);
    }

    /** Represents a ReqAccountAvailable. */
    class ReqAccountAvailable implements IReqAccountAvailable {

        /**
         * Constructs a new ReqAccountAvailable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqAccountAvailable);

        /** ReqAccountAvailable userId. */
        public userId: (number|Long);

        /**
         * Creates a new ReqAccountAvailable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAccountAvailable instance
         */
        public static create(properties?: proto.IReqAccountAvailable): proto.ReqAccountAvailable;

        /**
         * Encodes the specified ReqAccountAvailable message. Does not implicitly {@link proto.ReqAccountAvailable.verify|verify} messages.
         * @param message ReqAccountAvailable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqAccountAvailable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAccountAvailable message, length delimited. Does not implicitly {@link proto.ReqAccountAvailable.verify|verify} messages.
         * @param message ReqAccountAvailable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqAccountAvailable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAccountAvailable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqAccountAvailable;

        /**
         * Decodes a ReqAccountAvailable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqAccountAvailable;

        /**
         * Verifies a ReqAccountAvailable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckAccountAvailable. */
    interface IAckAccountAvailable {

        /** AckAccountAvailable result */
        result: number;

        /** AckAccountAvailable userId */
        userId: (number|Long);

        /** AckAccountAvailable available */
        available?: (number|null);

        /** AckAccountAvailable goldCoin */
        goldCoin?: (number|Long|null);
    }

    /** Represents an AckAccountAvailable. */
    class AckAccountAvailable implements IAckAccountAvailable {

        /**
         * Constructs a new AckAccountAvailable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckAccountAvailable);

        /** AckAccountAvailable result. */
        public result: number;

        /** AckAccountAvailable userId. */
        public userId: (number|Long);

        /** AckAccountAvailable available. */
        public available: number;

        /** AckAccountAvailable goldCoin. */
        public goldCoin: (number|Long);

        /**
         * Creates a new AckAccountAvailable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckAccountAvailable instance
         */
        public static create(properties?: proto.IAckAccountAvailable): proto.AckAccountAvailable;

        /**
         * Encodes the specified AckAccountAvailable message. Does not implicitly {@link proto.AckAccountAvailable.verify|verify} messages.
         * @param message AckAccountAvailable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckAccountAvailable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckAccountAvailable message, length delimited. Does not implicitly {@link proto.AckAccountAvailable.verify|verify} messages.
         * @param message AckAccountAvailable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckAccountAvailable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckAccountAvailable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckAccountAvailable;

        /**
         * Decodes an AckAccountAvailable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckAccountAvailable;

        /**
         * Verifies an AckAccountAvailable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqEnterRoom. */
    interface IReqEnterRoom {

        /** ReqEnterRoom userId */
        userId: (number|Long);

        /** ReqEnterRoom roomId */
        roomId: number;

        /** ReqEnterRoom mapId */
        mapId: (number|Long);

        /** ReqEnterRoom tableId */
        tableId?: (string|null);

        /** ReqEnterRoom goldCoin */
        goldCoin?: (number|Long|null);

        /** ReqEnterRoom type */
        type?: (number|null);
    }

    /** Represents a ReqEnterRoom. */
    class ReqEnterRoom implements IReqEnterRoom {

        /**
         * Constructs a new ReqEnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqEnterRoom);

        /** ReqEnterRoom userId. */
        public userId: (number|Long);

        /** ReqEnterRoom roomId. */
        public roomId: number;

        /** ReqEnterRoom mapId. */
        public mapId: (number|Long);

        /** ReqEnterRoom tableId. */
        public tableId: string;

        /** ReqEnterRoom goldCoin. */
        public goldCoin: (number|Long);

        /** ReqEnterRoom type. */
        public type: number;

        /**
         * Creates a new ReqEnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterRoom instance
         */
        public static create(properties?: proto.IReqEnterRoom): proto.ReqEnterRoom;

        /**
         * Encodes the specified ReqEnterRoom message. Does not implicitly {@link proto.ReqEnterRoom.verify|verify} messages.
         * @param message ReqEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEnterRoom message, length delimited. Does not implicitly {@link proto.ReqEnterRoom.verify|verify} messages.
         * @param message ReqEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqEnterRoom;

        /**
         * Decodes a ReqEnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqEnterRoom;

        /**
         * Verifies a ReqEnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckEnterRoom. */
    interface IAckEnterRoom {

        /** AckEnterRoom result */
        result: number;

        /** AckEnterRoom userId */
        userId: (number|Long);

        /** AckEnterRoom roomId */
        roomId: number;

        /** AckEnterRoom tableId */
        tableId?: (string|null);

        /** AckEnterRoom tableMapId */
        tableMapId?: (number|Long|null);

        /** AckEnterRoom server */
        server?: (proto.IServer|null);

        /** AckEnterRoom type */
        type?: (number|null);

        /** AckEnterRoom goldCoin */
        goldCoin?: (number|Long|null);
    }

    /** Represents an AckEnterRoom. */
    class AckEnterRoom implements IAckEnterRoom {

        /**
         * Constructs a new AckEnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckEnterRoom);

        /** AckEnterRoom result. */
        public result: number;

        /** AckEnterRoom userId. */
        public userId: (number|Long);

        /** AckEnterRoom roomId. */
        public roomId: number;

        /** AckEnterRoom tableId. */
        public tableId: string;

        /** AckEnterRoom tableMapId. */
        public tableMapId: (number|Long);

        /** AckEnterRoom server. */
        public server?: (proto.IServer|null);

        /** AckEnterRoom type. */
        public type: number;

        /** AckEnterRoom goldCoin. */
        public goldCoin: (number|Long);

        /**
         * Creates a new AckEnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckEnterRoom instance
         */
        public static create(properties?: proto.IAckEnterRoom): proto.AckEnterRoom;

        /**
         * Encodes the specified AckEnterRoom message. Does not implicitly {@link proto.AckEnterRoom.verify|verify} messages.
         * @param message AckEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckEnterRoom message, length delimited. Does not implicitly {@link proto.AckEnterRoom.verify|verify} messages.
         * @param message AckEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckEnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckEnterRoom;

        /**
         * Decodes an AckEnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckEnterRoom;

        /**
         * Verifies an AckEnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqLeaveRoom. */
    interface IReqLeaveRoom {

        /** ReqLeaveRoom userId */
        userId: (number|Long);

        /** ReqLeaveRoom roomId */
        roomId: number;

        /** ReqLeaveRoom mapId */
        mapId: (number|Long);

        /** ReqLeaveRoom tableId */
        tableId?: (string|null);
    }

    /** Represents a ReqLeaveRoom. */
    class ReqLeaveRoom implements IReqLeaveRoom {

        /**
         * Constructs a new ReqLeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqLeaveRoom);

        /** ReqLeaveRoom userId. */
        public userId: (number|Long);

        /** ReqLeaveRoom roomId. */
        public roomId: number;

        /** ReqLeaveRoom mapId. */
        public mapId: (number|Long);

        /** ReqLeaveRoom tableId. */
        public tableId: string;

        /**
         * Creates a new ReqLeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLeaveRoom instance
         */
        public static create(properties?: proto.IReqLeaveRoom): proto.ReqLeaveRoom;

        /**
         * Encodes the specified ReqLeaveRoom message. Does not implicitly {@link proto.ReqLeaveRoom.verify|verify} messages.
         * @param message ReqLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqLeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqLeaveRoom message, length delimited. Does not implicitly {@link proto.ReqLeaveRoom.verify|verify} messages.
         * @param message ReqLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqLeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqLeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqLeaveRoom;

        /**
         * Decodes a ReqLeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqLeaveRoom;

        /**
         * Verifies a ReqLeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckLeaveRoom. */
    interface IAckLeaveRoom {

        /** AckLeaveRoom result */
        result: number;

        /** AckLeaveRoom userId */
        userId: (number|Long);

        /** AckLeaveRoom roomId */
        roomId: number;
    }

    /** Represents an AckLeaveRoom. */
    class AckLeaveRoom implements IAckLeaveRoom {

        /**
         * Constructs a new AckLeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckLeaveRoom);

        /** AckLeaveRoom result. */
        public result: number;

        /** AckLeaveRoom userId. */
        public userId: (number|Long);

        /** AckLeaveRoom roomId. */
        public roomId: number;

        /**
         * Creates a new AckLeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckLeaveRoom instance
         */
        public static create(properties?: proto.IAckLeaveRoom): proto.AckLeaveRoom;

        /**
         * Encodes the specified AckLeaveRoom message. Does not implicitly {@link proto.AckLeaveRoom.verify|verify} messages.
         * @param message AckLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckLeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckLeaveRoom message, length delimited. Does not implicitly {@link proto.AckLeaveRoom.verify|verify} messages.
         * @param message AckLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckLeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckLeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckLeaveRoom;

        /**
         * Decodes an AckLeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckLeaveRoom;

        /**
         * Verifies an AckLeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotEnterTable. */
    interface INotEnterTable {

        /** NotEnterTable roomId */
        roomId: number;

        /** NotEnterTable tableId */
        tableId: string;

        /** NotEnterTable tableMapId */
        tableMapId: (number|Long);
    }

    /** Represents a NotEnterTable. */
    class NotEnterTable implements INotEnterTable {

        /**
         * Constructs a new NotEnterTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotEnterTable);

        /** NotEnterTable roomId. */
        public roomId: number;

        /** NotEnterTable tableId. */
        public tableId: string;

        /** NotEnterTable tableMapId. */
        public tableMapId: (number|Long);

        /**
         * Creates a new NotEnterTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotEnterTable instance
         */
        public static create(properties?: proto.INotEnterTable): proto.NotEnterTable;

        /**
         * Encodes the specified NotEnterTable message. Does not implicitly {@link proto.NotEnterTable.verify|verify} messages.
         * @param message NotEnterTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotEnterTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotEnterTable message, length delimited. Does not implicitly {@link proto.NotEnterTable.verify|verify} messages.
         * @param message NotEnterTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotEnterTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotEnterTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotEnterTable;

        /**
         * Decodes a NotEnterTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotEnterTable;

        /**
         * Verifies a NotEnterTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ResultRecord. */
    interface IResultRecord {

        /** ResultRecord seatNo */
        seatNo: number;

        /** ResultRecord nickName */
        nickName: string;

        /** ResultRecord winChips */
        winChips?: (number|Long|null);

        /** ResultRecord surplusCards */
        surplusCards?: (number|null);

        /** ResultRecord bombCount */
        bombCount?: (number|null);

        /** ResultRecord allOff */
        allOff?: (number|null);
    }

    /** Represents a ResultRecord. */
    class ResultRecord implements IResultRecord {

        /**
         * Constructs a new ResultRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResultRecord);

        /** ResultRecord seatNo. */
        public seatNo: number;

        /** ResultRecord nickName. */
        public nickName: string;

        /** ResultRecord winChips. */
        public winChips: (number|Long);

        /** ResultRecord surplusCards. */
        public surplusCards: number;

        /** ResultRecord bombCount. */
        public bombCount: number;

        /** ResultRecord allOff. */
        public allOff: number;

        /**
         * Creates a new ResultRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultRecord instance
         */
        public static create(properties?: proto.IResultRecord): proto.ResultRecord;

        /**
         * Encodes the specified ResultRecord message. Does not implicitly {@link proto.ResultRecord.verify|verify} messages.
         * @param message ResultRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResultRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ResultRecord message, length delimited. Does not implicitly {@link proto.ResultRecord.verify|verify} messages.
         * @param message ResultRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResultRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResultRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ResultRecord;

        /**
         * Decodes a ResultRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ResultRecord;

        /**
         * Verifies a ResultRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPlayingRecord. */
    interface IReqPlayingRecord {

        /** ReqPlayingRecord userId */
        userId: (number|Long);

        /** ReqPlayingRecord roundId */
        roundId: string;

        /** ReqPlayingRecord orderId */
        orderId?: (string|null);

        /** ReqPlayingRecord createTime */
        createTime: (number|Long);
    }

    /** Represents a ReqPlayingRecord. */
    class ReqPlayingRecord implements IReqPlayingRecord {

        /**
         * Constructs a new ReqPlayingRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqPlayingRecord);

        /** ReqPlayingRecord userId. */
        public userId: (number|Long);

        /** ReqPlayingRecord roundId. */
        public roundId: string;

        /** ReqPlayingRecord orderId. */
        public orderId: string;

        /** ReqPlayingRecord createTime. */
        public createTime: (number|Long);

        /**
         * Creates a new ReqPlayingRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPlayingRecord instance
         */
        public static create(properties?: proto.IReqPlayingRecord): proto.ReqPlayingRecord;

        /**
         * Encodes the specified ReqPlayingRecord message. Does not implicitly {@link proto.ReqPlayingRecord.verify|verify} messages.
         * @param message ReqPlayingRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqPlayingRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPlayingRecord message, length delimited. Does not implicitly {@link proto.ReqPlayingRecord.verify|verify} messages.
         * @param message ReqPlayingRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqPlayingRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayingRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqPlayingRecord;

        /**
         * Decodes a ReqPlayingRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqPlayingRecord;

        /**
         * Verifies a ReqPlayingRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayingRecord. */
    interface IAckPlayingRecord {

        /** AckPlayingRecord result */
        result: number;

        /** AckPlayingRecord userId */
        userId: (number|Long);

        /** AckPlayingRecord roundId */
        roundId: string;

        /** AckPlayingRecord baseScore */
        baseScore?: (number|null);

        /** AckPlayingRecord records */
        records?: (proto.IResultRecord[]|null);
    }

    /** Represents an AckPlayingRecord. */
    class AckPlayingRecord implements IAckPlayingRecord {

        /**
         * Constructs a new AckPlayingRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckPlayingRecord);

        /** AckPlayingRecord result. */
        public result: number;

        /** AckPlayingRecord userId. */
        public userId: (number|Long);

        /** AckPlayingRecord roundId. */
        public roundId: string;

        /** AckPlayingRecord baseScore. */
        public baseScore: number;

        /** AckPlayingRecord records. */
        public records: proto.IResultRecord[];

        /**
         * Creates a new AckPlayingRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayingRecord instance
         */
        public static create(properties?: proto.IAckPlayingRecord): proto.AckPlayingRecord;

        /**
         * Encodes the specified AckPlayingRecord message. Does not implicitly {@link proto.AckPlayingRecord.verify|verify} messages.
         * @param message AckPlayingRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckPlayingRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayingRecord message, length delimited. Does not implicitly {@link proto.AckPlayingRecord.verify|verify} messages.
         * @param message AckPlayingRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckPlayingRecord, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayingRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckPlayingRecord;

        /**
         * Decodes an AckPlayingRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckPlayingRecord;

        /**
         * Verifies an AckPlayingRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqEnterTable. */
    interface IReqEnterTable {

        /** ReqEnterTable userId */
        userId: (number|Long);

        /** ReqEnterTable tableId */
        tableId: string;

        /** ReqEnterTable tableMapId */
        tableMapId: (number|Long);

        /** ReqEnterTable goldCoin */
        goldCoin?: (number|Long|null);

        /** ReqEnterTable seatNo */
        seatNo?: (number|null);
    }

    /** Represents a ReqEnterTable. */
    class ReqEnterTable implements IReqEnterTable {

        /**
         * Constructs a new ReqEnterTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqEnterTable);

        /** ReqEnterTable userId. */
        public userId: (number|Long);

        /** ReqEnterTable tableId. */
        public tableId: string;

        /** ReqEnterTable tableMapId. */
        public tableMapId: (number|Long);

        /** ReqEnterTable goldCoin. */
        public goldCoin: (number|Long);

        /** ReqEnterTable seatNo. */
        public seatNo: number;

        /**
         * Creates a new ReqEnterTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterTable instance
         */
        public static create(properties?: proto.IReqEnterTable): proto.ReqEnterTable;

        /**
         * Encodes the specified ReqEnterTable message. Does not implicitly {@link proto.ReqEnterTable.verify|verify} messages.
         * @param message ReqEnterTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqEnterTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEnterTable message, length delimited. Does not implicitly {@link proto.ReqEnterTable.verify|verify} messages.
         * @param message ReqEnterTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqEnterTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqEnterTable;

        /**
         * Decodes a ReqEnterTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqEnterTable;

        /**
         * Verifies a ReqEnterTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckEnterTable. */
    interface IAckEnterTable {

        /** AckEnterTable result */
        result: number;

        /** AckEnterTable userId */
        userId: (number|Long);

        /** AckEnterTable tableId */
        tableId: string;

        /** AckEnterTable seatNo */
        seatNo?: (number|null);

        /** AckEnterTable table */
        table?: (proto.ITable|null);

        /** AckEnterTable stage */
        stage?: (number|null);

        /** AckEnterTable remainingSeconds */
        remainingSeconds?: (number|null);

        /** AckEnterTable info */
        info?: (proto.IReconnectionInfo|null);

        /** AckEnterTable countdown */
        countdown?: (proto.ICountdown|null);

        /** AckEnterTable roundId */
        roundId?: (string|null);
    }

    /** Represents an AckEnterTable. */
    class AckEnterTable implements IAckEnterTable {

        /**
         * Constructs a new AckEnterTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckEnterTable);

        /** AckEnterTable result. */
        public result: number;

        /** AckEnterTable userId. */
        public userId: (number|Long);

        /** AckEnterTable tableId. */
        public tableId: string;

        /** AckEnterTable seatNo. */
        public seatNo: number;

        /** AckEnterTable table. */
        public table?: (proto.ITable|null);

        /** AckEnterTable stage. */
        public stage: number;

        /** AckEnterTable remainingSeconds. */
        public remainingSeconds: number;

        /** AckEnterTable info. */
        public info?: (proto.IReconnectionInfo|null);

        /** AckEnterTable countdown. */
        public countdown?: (proto.ICountdown|null);

        /** AckEnterTable roundId. */
        public roundId: string;

        /**
         * Creates a new AckEnterTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckEnterTable instance
         */
        public static create(properties?: proto.IAckEnterTable): proto.AckEnterTable;

        /**
         * Encodes the specified AckEnterTable message. Does not implicitly {@link proto.AckEnterTable.verify|verify} messages.
         * @param message AckEnterTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckEnterTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckEnterTable message, length delimited. Does not implicitly {@link proto.AckEnterTable.verify|verify} messages.
         * @param message AckEnterTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckEnterTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckEnterTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckEnterTable;

        /**
         * Decodes an AckEnterTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckEnterTable;

        /**
         * Verifies an AckEnterTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReconnectionInfo. */
    interface IReconnectionInfo {

        /** ReconnectionInfo players */
        players?: (proto.IReconnectPlayerInfo[]|null);

        /** ReconnectionInfo currentActionSeat */
        currentActionSeat?: (number|null);

        /** ReconnectionInfo operations */
        operations?: (proto.INotUserOperation|null);

        /** ReconnectionInfo banker */
        banker?: (number|null);

        /** ReconnectionInfo trust */
        trust?: (number|null);
    }

    /** Represents a ReconnectionInfo. */
    class ReconnectionInfo implements IReconnectionInfo {

        /**
         * Constructs a new ReconnectionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReconnectionInfo);

        /** ReconnectionInfo players. */
        public players: proto.IReconnectPlayerInfo[];

        /** ReconnectionInfo currentActionSeat. */
        public currentActionSeat: number;

        /** ReconnectionInfo operations. */
        public operations?: (proto.INotUserOperation|null);

        /** ReconnectionInfo banker. */
        public banker: number;

        /** ReconnectionInfo trust. */
        public trust: number;

        /**
         * Creates a new ReconnectionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnectionInfo instance
         */
        public static create(properties?: proto.IReconnectionInfo): proto.ReconnectionInfo;

        /**
         * Encodes the specified ReconnectionInfo message. Does not implicitly {@link proto.ReconnectionInfo.verify|verify} messages.
         * @param message ReconnectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReconnectionInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReconnectionInfo message, length delimited. Does not implicitly {@link proto.ReconnectionInfo.verify|verify} messages.
         * @param message ReconnectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReconnectionInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReconnectionInfo;

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReconnectionInfo;

        /**
         * Verifies a ReconnectionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqLeaveTable. */
    interface IReqLeaveTable {

        /** ReqLeaveTable userId */
        userId: (number|Long);

        /** ReqLeaveTable tableId */
        tableId: string;

        /** ReqLeaveTable tableMapId */
        tableMapId: (number|Long);

        /** ReqLeaveTable roundId */
        roundId: string;
    }

    /** Represents a ReqLeaveTable. */
    class ReqLeaveTable implements IReqLeaveTable {

        /**
         * Constructs a new ReqLeaveTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqLeaveTable);

        /** ReqLeaveTable userId. */
        public userId: (number|Long);

        /** ReqLeaveTable tableId. */
        public tableId: string;

        /** ReqLeaveTable tableMapId. */
        public tableMapId: (number|Long);

        /** ReqLeaveTable roundId. */
        public roundId: string;

        /**
         * Creates a new ReqLeaveTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqLeaveTable instance
         */
        public static create(properties?: proto.IReqLeaveTable): proto.ReqLeaveTable;

        /**
         * Encodes the specified ReqLeaveTable message. Does not implicitly {@link proto.ReqLeaveTable.verify|verify} messages.
         * @param message ReqLeaveTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqLeaveTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqLeaveTable message, length delimited. Does not implicitly {@link proto.ReqLeaveTable.verify|verify} messages.
         * @param message ReqLeaveTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqLeaveTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqLeaveTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqLeaveTable;

        /**
         * Decodes a ReqLeaveTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqLeaveTable;

        /**
         * Verifies a ReqLeaveTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckLeaveTable. */
    interface IAckLeaveTable {

        /** AckLeaveTable result */
        result: number;

        /** AckLeaveTable userId */
        userId: (number|Long);

        /** AckLeaveTable tableId */
        tableId: string;
    }

    /** Represents an AckLeaveTable. */
    class AckLeaveTable implements IAckLeaveTable {

        /**
         * Constructs a new AckLeaveTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckLeaveTable);

        /** AckLeaveTable result. */
        public result: number;

        /** AckLeaveTable userId. */
        public userId: (number|Long);

        /** AckLeaveTable tableId. */
        public tableId: string;

        /**
         * Creates a new AckLeaveTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckLeaveTable instance
         */
        public static create(properties?: proto.IAckLeaveTable): proto.AckLeaveTable;

        /**
         * Encodes the specified AckLeaveTable message. Does not implicitly {@link proto.AckLeaveTable.verify|verify} messages.
         * @param message AckLeaveTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckLeaveTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckLeaveTable message, length delimited. Does not implicitly {@link proto.AckLeaveTable.verify|verify} messages.
         * @param message AckLeaveTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckLeaveTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckLeaveTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckLeaveTable;

        /**
         * Decodes an AckLeaveTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckLeaveTable;

        /**
         * Verifies an AckLeaveTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqReady. */
    interface IReqReady {

        /** ReqReady tableId */
        tableId: string;

        /** ReqReady tableMapId */
        tableMapId: (number|Long);

        /** ReqReady seatNo */
        seatNo: number;

        /** ReqReady userId */
        userId: (number|Long);

        /** ReqReady status */
        status: number;

        /** ReqReady roundId */
        roundId: string;
    }

    /** Represents a ReqReady. */
    class ReqReady implements IReqReady {

        /**
         * Constructs a new ReqReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqReady);

        /** ReqReady tableId. */
        public tableId: string;

        /** ReqReady tableMapId. */
        public tableMapId: (number|Long);

        /** ReqReady seatNo. */
        public seatNo: number;

        /** ReqReady userId. */
        public userId: (number|Long);

        /** ReqReady status. */
        public status: number;

        /** ReqReady roundId. */
        public roundId: string;

        /**
         * Creates a new ReqReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqReady instance
         */
        public static create(properties?: proto.IReqReady): proto.ReqReady;

        /**
         * Encodes the specified ReqReady message. Does not implicitly {@link proto.ReqReady.verify|verify} messages.
         * @param message ReqReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqReady message, length delimited. Does not implicitly {@link proto.ReqReady.verify|verify} messages.
         * @param message ReqReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqReady;

        /**
         * Decodes a ReqReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqReady;

        /**
         * Verifies a ReqReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckReady. */
    interface IAckReady {

        /** AckReady result */
        result: number;

        /** AckReady seatNo */
        seatNo: number;

        /** AckReady userId */
        userId: (number|Long);

        /** AckReady tableId */
        tableId: string;

        /** AckReady status */
        status: number;
    }

    /** Represents an AckReady. */
    class AckReady implements IAckReady {

        /**
         * Constructs a new AckReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckReady);

        /** AckReady result. */
        public result: number;

        /** AckReady seatNo. */
        public seatNo: number;

        /** AckReady userId. */
        public userId: (number|Long);

        /** AckReady tableId. */
        public tableId: string;

        /** AckReady status. */
        public status: number;

        /**
         * Creates a new AckReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckReady instance
         */
        public static create(properties?: proto.IAckReady): proto.AckReady;

        /**
         * Encodes the specified AckReady message. Does not implicitly {@link proto.AckReady.verify|verify} messages.
         * @param message AckReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckReady message, length delimited. Does not implicitly {@link proto.AckReady.verify|verify} messages.
         * @param message AckReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckReady;

        /**
         * Decodes an AckReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckReady;

        /**
         * Verifies an AckReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotChairStatus. */
    interface INotChairStatus {

        /** NotChairStatus tableId */
        tableId: string;

        /** NotChairStatus type */
        type: number;

        /** NotChairStatus chair */
        chair?: (proto.IChair|null);
    }

    /** Represents a NotChairStatus. */
    class NotChairStatus implements INotChairStatus {

        /**
         * Constructs a new NotChairStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotChairStatus);

        /** NotChairStatus tableId. */
        public tableId: string;

        /** NotChairStatus type. */
        public type: number;

        /** NotChairStatus chair. */
        public chair?: (proto.IChair|null);

        /**
         * Creates a new NotChairStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotChairStatus instance
         */
        public static create(properties?: proto.INotChairStatus): proto.NotChairStatus;

        /**
         * Encodes the specified NotChairStatus message. Does not implicitly {@link proto.NotChairStatus.verify|verify} messages.
         * @param message NotChairStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotChairStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotChairStatus message, length delimited. Does not implicitly {@link proto.NotChairStatus.verify|verify} messages.
         * @param message NotChairStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotChairStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotChairStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotChairStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotChairStatus;

        /**
         * Decodes a NotChairStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotChairStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotChairStatus;

        /**
         * Verifies a NotChairStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotCards. */
    interface INotCards {

        /** NotCards HandCards */
        HandCards: proto.IHandCards;

        /** NotCards banker */
        banker: number;

        /** NotCards leftCardsNum */
        leftCardsNum: number;

        /** NotCards stage */
        stage: number;
    }

    /** Represents a NotCards. */
    class NotCards implements INotCards {

        /**
         * Constructs a new NotCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotCards);

        /** NotCards HandCards. */
        public HandCards: proto.IHandCards;

        /** NotCards banker. */
        public banker: number;

        /** NotCards leftCardsNum. */
        public leftCardsNum: number;

        /** NotCards stage. */
        public stage: number;

        /**
         * Creates a new NotCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotCards instance
         */
        public static create(properties?: proto.INotCards): proto.NotCards;

        /**
         * Encodes the specified NotCards message. Does not implicitly {@link proto.NotCards.verify|verify} messages.
         * @param message NotCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotCards message, length delimited. Does not implicitly {@link proto.NotCards.verify|verify} messages.
         * @param message NotCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotCards;

        /**
         * Decodes a NotCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotCards;

        /**
         * Verifies a NotCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotBuhua. */
    interface INotBuhua {

        /** NotBuhua seatNo */
        seatNo: number;

        /** NotBuhua huapai */
        huapai?: (number[]|null);

        /** NotBuhua leftCardsNum */
        leftCardsNum: number;

        /** NotBuhua bupai */
        bupai?: (number[]|null);
    }

    /** Represents a NotBuhua. */
    class NotBuhua implements INotBuhua {

        /**
         * Constructs a new NotBuhua.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotBuhua);

        /** NotBuhua seatNo. */
        public seatNo: number;

        /** NotBuhua huapai. */
        public huapai: number[];

        /** NotBuhua leftCardsNum. */
        public leftCardsNum: number;

        /** NotBuhua bupai. */
        public bupai: number[];

        /**
         * Creates a new NotBuhua instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotBuhua instance
         */
        public static create(properties?: proto.INotBuhua): proto.NotBuhua;

        /**
         * Encodes the specified NotBuhua message. Does not implicitly {@link proto.NotBuhua.verify|verify} messages.
         * @param message NotBuhua message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotBuhua, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotBuhua message, length delimited. Does not implicitly {@link proto.NotBuhua.verify|verify} messages.
         * @param message NotBuhua message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotBuhua, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotBuhua message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotBuhua
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotBuhua;

        /**
         * Decodes a NotBuhua message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotBuhua
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotBuhua;

        /**
         * Verifies a NotBuhua message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotZaNiao. */
    interface INotZaNiao {

        /** NotZaNiao stage */
        stage: number;

        /** NotZaNiao result */
        result: proto.ICardInfo;
    }

    /** Represents a NotZaNiao. */
    class NotZaNiao implements INotZaNiao {

        /**
         * Constructs a new NotZaNiao.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotZaNiao);

        /** NotZaNiao stage. */
        public stage: number;

        /** NotZaNiao result. */
        public result: proto.ICardInfo;

        /**
         * Creates a new NotZaNiao instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotZaNiao instance
         */
        public static create(properties?: proto.INotZaNiao): proto.NotZaNiao;

        /**
         * Encodes the specified NotZaNiao message. Does not implicitly {@link proto.NotZaNiao.verify|verify} messages.
         * @param message NotZaNiao message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotZaNiao, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotZaNiao message, length delimited. Does not implicitly {@link proto.NotZaNiao.verify|verify} messages.
         * @param message NotZaNiao message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotZaNiao, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotZaNiao message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotZaNiao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotZaNiao;

        /**
         * Decodes a NotZaNiao message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotZaNiao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotZaNiao;

        /**
         * Verifies a NotZaNiao message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotBuhuaEnds. */
    interface INotBuhuaEnds {

        /** NotBuhuaEnds stage */
        stage: number;
    }

    /** Represents a NotBuhuaEnds. */
    class NotBuhuaEnds implements INotBuhuaEnds {

        /**
         * Constructs a new NotBuhuaEnds.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotBuhuaEnds);

        /** NotBuhuaEnds stage. */
        public stage: number;

        /**
         * Creates a new NotBuhuaEnds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotBuhuaEnds instance
         */
        public static create(properties?: proto.INotBuhuaEnds): proto.NotBuhuaEnds;

        /**
         * Encodes the specified NotBuhuaEnds message. Does not implicitly {@link proto.NotBuhuaEnds.verify|verify} messages.
         * @param message NotBuhuaEnds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotBuhuaEnds, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotBuhuaEnds message, length delimited. Does not implicitly {@link proto.NotBuhuaEnds.verify|verify} messages.
         * @param message NotBuhuaEnds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotBuhuaEnds, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotBuhuaEnds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotBuhuaEnds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotBuhuaEnds;

        /**
         * Decodes a NotBuhuaEnds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotBuhuaEnds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotBuhuaEnds;

        /**
         * Verifies a NotBuhuaEnds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OperationType. */
    interface IOperationType {

        /** OperationType CATCH */
        CATCH: number;

        /** OperationType PLAY */
        PLAY: number;

        /** OperationType BUHUA */
        BUHUA: number;

        /** OperationType CHI */
        CHI: number;

        /** OperationType PENG */
        PENG: number;

        /** OperationType GANG */
        GANG: number;

        /** OperationType ANGANG */
        ANGANG: number;

        /** OperationType HU */
        HU: number;

        /** OperationType BUHUAMO */
        BUHUAMO: number;

        /** OperationType KANGMO */
        KANGMO: number;

        /** OperationType NO_OPERATION */
        NO_OPERATION: number;

        /** OperationType HANDCARDS */
        HANDCARDS: number;

        /** OperationType BUGANG */
        BUGANG: number;

        /** OperationType MOPLAY */
        MOPLAY: number;
    }

    /** Represents an OperationType. */
    class OperationType implements IOperationType {

        /**
         * Constructs a new OperationType.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IOperationType);

        /** OperationType CATCH. */
        public CATCH: number;

        /** OperationType PLAY. */
        public PLAY: number;

        /** OperationType BUHUA. */
        public BUHUA: number;

        /** OperationType CHI. */
        public CHI: number;

        /** OperationType PENG. */
        public PENG: number;

        /** OperationType GANG. */
        public GANG: number;

        /** OperationType ANGANG. */
        public ANGANG: number;

        /** OperationType HU. */
        public HU: number;

        /** OperationType BUHUAMO. */
        public BUHUAMO: number;

        /** OperationType KANGMO. */
        public KANGMO: number;

        /** OperationType NO_OPERATION. */
        public NO_OPERATION: number;

        /** OperationType HANDCARDS. */
        public HANDCARDS: number;

        /** OperationType BUGANG. */
        public BUGANG: number;

        /** OperationType MOPLAY. */
        public MOPLAY: number;

        /**
         * Creates a new OperationType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperationType instance
         */
        public static create(properties?: proto.IOperationType): proto.OperationType;

        /**
         * Encodes the specified OperationType message. Does not implicitly {@link proto.OperationType.verify|verify} messages.
         * @param message OperationType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IOperationType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OperationType message, length delimited. Does not implicitly {@link proto.OperationType.verify|verify} messages.
         * @param message OperationType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IOperationType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OperationType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.OperationType;

        /**
         * Decodes an OperationType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.OperationType;

        /**
         * Verifies an OperationType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSendCard. */
    interface IReqSendCard {

        /** ReqSendCard tableId */
        tableId: string;

        /** ReqSendCard tableMapId */
        tableMapId: (number|Long);

        /** ReqSendCard userId */
        userId: (number|Long);

        /** ReqSendCard Card */
        Card: proto.ICardsGroup;

        /** ReqSendCard roundId */
        roundId: string;
    }

    /** Represents a ReqSendCard. */
    class ReqSendCard implements IReqSendCard {

        /**
         * Constructs a new ReqSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqSendCard);

        /** ReqSendCard tableId. */
        public tableId: string;

        /** ReqSendCard tableMapId. */
        public tableMapId: (number|Long);

        /** ReqSendCard userId. */
        public userId: (number|Long);

        /** ReqSendCard Card. */
        public Card: proto.ICardsGroup;

        /** ReqSendCard roundId. */
        public roundId: string;

        /**
         * Creates a new ReqSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSendCard instance
         */
        public static create(properties?: proto.IReqSendCard): proto.ReqSendCard;

        /**
         * Encodes the specified ReqSendCard message. Does not implicitly {@link proto.ReqSendCard.verify|verify} messages.
         * @param message ReqSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSendCard message, length delimited. Does not implicitly {@link proto.ReqSendCard.verify|verify} messages.
         * @param message ReqSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqSendCard;

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqSendCard;

        /**
         * Verifies a ReqSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckSendCard. */
    interface IAckSendCard {

        /** AckSendCard result */
        result: number;

        /** AckSendCard userId */
        userId: (number|Long);

        /** AckSendCard tableId */
        tableId: string;
    }

    /** Represents an AckSendCard. */
    class AckSendCard implements IAckSendCard {

        /**
         * Constructs a new AckSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckSendCard);

        /** AckSendCard result. */
        public result: number;

        /** AckSendCard userId. */
        public userId: (number|Long);

        /** AckSendCard tableId. */
        public tableId: string;

        /**
         * Creates a new AckSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckSendCard instance
         */
        public static create(properties?: proto.IAckSendCard): proto.AckSendCard;

        /**
         * Encodes the specified AckSendCard message. Does not implicitly {@link proto.AckSendCard.verify|verify} messages.
         * @param message AckSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckSendCard message, length delimited. Does not implicitly {@link proto.AckSendCard.verify|verify} messages.
         * @param message AckSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckSendCard;

        /**
         * Decodes an AckSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckSendCard;

        /**
         * Verifies an AckSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotSendCard. */
    interface INotSendCard {

        /** NotSendCard Card */
        Card: proto.ICardsGroup;
    }

    /** Represents a NotSendCard. */
    class NotSendCard implements INotSendCard {

        /**
         * Constructs a new NotSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotSendCard);

        /** NotSendCard Card. */
        public Card: proto.ICardsGroup;

        /**
         * Creates a new NotSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotSendCard instance
         */
        public static create(properties?: proto.INotSendCard): proto.NotSendCard;

        /**
         * Encodes the specified NotSendCard message. Does not implicitly {@link proto.NotSendCard.verify|verify} messages.
         * @param message NotSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotSendCard message, length delimited. Does not implicitly {@link proto.NotSendCard.verify|verify} messages.
         * @param message NotSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotSendCard;

        /**
         * Decodes a NotSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotSendCard;

        /**
         * Verifies a NotSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotUserOperation. */
    interface INotUserOperation {

        /** NotUserOperation operations */
        operations?: (proto.IOperation[]|null);

        /** NotUserOperation callCards */
        callCards?: (proto.IMahjongCallInfo[]|null);
    }

    /** Represents a NotUserOperation. */
    class NotUserOperation implements INotUserOperation {

        /**
         * Constructs a new NotUserOperation.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotUserOperation);

        /** NotUserOperation operations. */
        public operations: proto.IOperation[];

        /** NotUserOperation callCards. */
        public callCards: proto.IMahjongCallInfo[];

        /**
         * Creates a new NotUserOperation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotUserOperation instance
         */
        public static create(properties?: proto.INotUserOperation): proto.NotUserOperation;

        /**
         * Encodes the specified NotUserOperation message. Does not implicitly {@link proto.NotUserOperation.verify|verify} messages.
         * @param message NotUserOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotUserOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotUserOperation message, length delimited. Does not implicitly {@link proto.NotUserOperation.verify|verify} messages.
         * @param message NotUserOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotUserOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotUserOperation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotUserOperation;

        /**
         * Decodes a NotUserOperation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotUserOperation;

        /**
         * Verifies a NotUserOperation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Operation. */
    interface IOperation {

        /** Operation type */
        type: number;

        /** Operation options */
        options?: (proto.ICardsGroup[]|null);
    }

    /** Represents an Operation. */
    class Operation implements IOperation {

        /**
         * Constructs a new Operation.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IOperation);

        /** Operation type. */
        public type: number;

        /** Operation options. */
        public options: proto.ICardsGroup[];

        /**
         * Creates a new Operation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Operation instance
         */
        public static create(properties?: proto.IOperation): proto.Operation;

        /**
         * Encodes the specified Operation message. Does not implicitly {@link proto.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link proto.Operation.verify|verify} messages.
         * @param message Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Operation;

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Operation;

        /**
         * Verifies an Operation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotGameEnd. */
    interface INotGameEnd {

        /** NotGameEnd playerCards */
        playerCards?: (proto.IHandCards[]|null);

        /** NotGameEnd stage */
        stage: number;

        /** NotGameEnd result */
        result?: (number|null);

        /** NotGameEnd winner */
        winner?: (number|null);

        /** NotGameEnd huType */
        huType?: (number|null);
    }

    /** Represents a NotGameEnd. */
    class NotGameEnd implements INotGameEnd {

        /**
         * Constructs a new NotGameEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotGameEnd);

        /** NotGameEnd playerCards. */
        public playerCards: proto.IHandCards[];

        /** NotGameEnd stage. */
        public stage: number;

        /** NotGameEnd result. */
        public result: number;

        /** NotGameEnd winner. */
        public winner: number;

        /** NotGameEnd huType. */
        public huType: number;

        /**
         * Creates a new NotGameEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotGameEnd instance
         */
        public static create(properties?: proto.INotGameEnd): proto.NotGameEnd;

        /**
         * Encodes the specified NotGameEnd message. Does not implicitly {@link proto.NotGameEnd.verify|verify} messages.
         * @param message NotGameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotGameEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotGameEnd message, length delimited. Does not implicitly {@link proto.NotGameEnd.verify|verify} messages.
         * @param message NotGameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotGameEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotGameEnd;

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotGameEnd;

        /**
         * Verifies a NotGameEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotGameResult. */
    interface INotGameResult {

        /** NotGameResult tableId */
        tableId: string;

        /** NotGameResult result */
        result: number;

        /** NotGameResult player */
        player: proto.IPlayerGameResult;

        /** NotGameResult others */
        others?: (proto.IPlayerGameResult[]|null);

        /** NotGameResult fan */
        fan?: (proto.IFan[]|null);
    }

    /** Represents a NotGameResult. */
    class NotGameResult implements INotGameResult {

        /**
         * Constructs a new NotGameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotGameResult);

        /** NotGameResult tableId. */
        public tableId: string;

        /** NotGameResult result. */
        public result: number;

        /** NotGameResult player. */
        public player: proto.IPlayerGameResult;

        /** NotGameResult others. */
        public others: proto.IPlayerGameResult[];

        /** NotGameResult fan. */
        public fan: proto.IFan[];

        /**
         * Creates a new NotGameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotGameResult instance
         */
        public static create(properties?: proto.INotGameResult): proto.NotGameResult;

        /**
         * Encodes the specified NotGameResult message. Does not implicitly {@link proto.NotGameResult.verify|verify} messages.
         * @param message NotGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotGameResult message, length delimited. Does not implicitly {@link proto.NotGameResult.verify|verify} messages.
         * @param message NotGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotGameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotGameResult;

        /**
         * Decodes a NotGameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotGameResult;

        /**
         * Verifies a NotGameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Fan. */
    interface IFan {

        /** Fan fanxing */
        fanxing: number;

        /** Fan taishu */
        taishu: number;
    }

    /** Represents a Fan. */
    class Fan implements IFan {

        /**
         * Constructs a new Fan.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFan);

        /** Fan fanxing. */
        public fanxing: number;

        /** Fan taishu. */
        public taishu: number;

        /**
         * Creates a new Fan instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fan instance
         */
        public static create(properties?: proto.IFan): proto.Fan;

        /**
         * Encodes the specified Fan message. Does not implicitly {@link proto.Fan.verify|verify} messages.
         * @param message Fan message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFan, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Fan message, length delimited. Does not implicitly {@link proto.Fan.verify|verify} messages.
         * @param message Fan message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFan, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Fan message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Fan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.Fan;

        /**
         * Decodes a Fan message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Fan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.Fan;

        /**
         * Verifies a Fan message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerGameResult. */
    interface IPlayerGameResult {

        /** PlayerGameResult seat */
        seat: number;

        /** PlayerGameResult username */
        username: string;

        /** PlayerGameResult isZhuang */
        isZhuang: number;

        /** PlayerGameResult money */
        money: (number|Long);

        /** PlayerGameResult position */
        position: number;

        /** PlayerGameResult isWin */
        isWin?: (number|null);

        /** PlayerGameResult chips */
        chips?: (number|Long|null);
    }

    /** Represents a PlayerGameResult. */
    class PlayerGameResult implements IPlayerGameResult {

        /**
         * Constructs a new PlayerGameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPlayerGameResult);

        /** PlayerGameResult seat. */
        public seat: number;

        /** PlayerGameResult username. */
        public username: string;

        /** PlayerGameResult isZhuang. */
        public isZhuang: number;

        /** PlayerGameResult money. */
        public money: (number|Long);

        /** PlayerGameResult position. */
        public position: number;

        /** PlayerGameResult isWin. */
        public isWin: number;

        /** PlayerGameResult chips. */
        public chips: (number|Long);

        /**
         * Creates a new PlayerGameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerGameResult instance
         */
        public static create(properties?: proto.IPlayerGameResult): proto.PlayerGameResult;

        /**
         * Encodes the specified PlayerGameResult message. Does not implicitly {@link proto.PlayerGameResult.verify|verify} messages.
         * @param message PlayerGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPlayerGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerGameResult message, length delimited. Does not implicitly {@link proto.PlayerGameResult.verify|verify} messages.
         * @param message PlayerGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPlayerGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerGameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.PlayerGameResult;

        /**
         * Decodes a PlayerGameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.PlayerGameResult;

        /**
         * Verifies a PlayerGameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqChat. */
    interface IReqChat {

        /** ReqChat tableId */
        tableId: string;

        /** ReqChat tableMapId */
        tableMapId: (number|Long);

        /** ReqChat roundId */
        roundId: string;

        /** ReqChat seatNo */
        seatNo: number;

        /** ReqChat userId */
        userId: (number|Long);

        /** ReqChat type */
        type: number;

        /** ReqChat content */
        content: string;

        /** ReqChat through */
        through?: (string|null);
    }

    /** Represents a ReqChat. */
    class ReqChat implements IReqChat {

        /**
         * Constructs a new ReqChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqChat);

        /** ReqChat tableId. */
        public tableId: string;

        /** ReqChat tableMapId. */
        public tableMapId: (number|Long);

        /** ReqChat roundId. */
        public roundId: string;

        /** ReqChat seatNo. */
        public seatNo: number;

        /** ReqChat userId. */
        public userId: (number|Long);

        /** ReqChat type. */
        public type: number;

        /** ReqChat content. */
        public content: string;

        /** ReqChat through. */
        public through: string;

        /**
         * Creates a new ReqChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqChat instance
         */
        public static create(properties?: proto.IReqChat): proto.ReqChat;

        /**
         * Encodes the specified ReqChat message. Does not implicitly {@link proto.ReqChat.verify|verify} messages.
         * @param message ReqChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqChat message, length delimited. Does not implicitly {@link proto.ReqChat.verify|verify} messages.
         * @param message ReqChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqChat;

        /**
         * Decodes a ReqChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqChat;

        /**
         * Verifies a ReqChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotChat. */
    interface INotChat {

        /** NotChat tableId */
        tableId: string;

        /** NotChat roundId */
        roundId: string;

        /** NotChat seatNo */
        seatNo: number;

        /** NotChat type */
        type: number;

        /** NotChat content */
        content: string;

        /** NotChat through */
        through?: (string|null);
    }

    /** Represents a NotChat. */
    class NotChat implements INotChat {

        /**
         * Constructs a new NotChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INotChat);

        /** NotChat tableId. */
        public tableId: string;

        /** NotChat roundId. */
        public roundId: string;

        /** NotChat seatNo. */
        public seatNo: number;

        /** NotChat type. */
        public type: number;

        /** NotChat content. */
        public content: string;

        /** NotChat through. */
        public through: string;

        /**
         * Creates a new NotChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotChat instance
         */
        public static create(properties?: proto.INotChat): proto.NotChat;

        /**
         * Encodes the specified NotChat message. Does not implicitly {@link proto.NotChat.verify|verify} messages.
         * @param message NotChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INotChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotChat message, length delimited. Does not implicitly {@link proto.NotChat.verify|verify} messages.
         * @param message NotChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INotChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.NotChat;

        /**
         * Decodes a NotChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.NotChat;

        /**
         * Verifies a NotChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAppointCards. */
    interface IReqAppointCards {

        /** ReqAppointCards tableMapId */
        tableMapId: (number|Long);

        /** ReqAppointCards userId */
        userId: (number|Long);

        /** ReqAppointCards banker */
        banker: number;

        /** ReqAppointCards handCards */
        handCards?: (proto.IHandCards[]|null);
    }

    /** Represents a ReqAppointCards. */
    class ReqAppointCards implements IReqAppointCards {

        /**
         * Constructs a new ReqAppointCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqAppointCards);

        /** ReqAppointCards tableMapId. */
        public tableMapId: (number|Long);

        /** ReqAppointCards userId. */
        public userId: (number|Long);

        /** ReqAppointCards banker. */
        public banker: number;

        /** ReqAppointCards handCards. */
        public handCards: proto.IHandCards[];

        /**
         * Creates a new ReqAppointCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAppointCards instance
         */
        public static create(properties?: proto.IReqAppointCards): proto.ReqAppointCards;

        /**
         * Encodes the specified ReqAppointCards message. Does not implicitly {@link proto.ReqAppointCards.verify|verify} messages.
         * @param message ReqAppointCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqAppointCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAppointCards message, length delimited. Does not implicitly {@link proto.ReqAppointCards.verify|verify} messages.
         * @param message ReqAppointCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqAppointCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAppointCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqAppointCards;

        /**
         * Decodes a ReqAppointCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqAppointCards;

        /**
         * Verifies a ReqAppointCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckAppointCards. */
    interface IAckAppointCards {

        /** AckAppointCards result */
        result: number;

        /** AckAppointCards userId */
        userId: (number|Long);
    }

    /** Represents an AckAppointCards. */
    class AckAppointCards implements IAckAppointCards {

        /**
         * Constructs a new AckAppointCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckAppointCards);

        /** AckAppointCards result. */
        public result: number;

        /** AckAppointCards userId. */
        public userId: (number|Long);

        /**
         * Creates a new AckAppointCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckAppointCards instance
         */
        public static create(properties?: proto.IAckAppointCards): proto.AckAppointCards;

        /**
         * Encodes the specified AckAppointCards message. Does not implicitly {@link proto.AckAppointCards.verify|verify} messages.
         * @param message AckAppointCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckAppointCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckAppointCards message, length delimited. Does not implicitly {@link proto.AckAppointCards.verify|verify} messages.
         * @param message AckAppointCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckAppointCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckAppointCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckAppointCards;

        /**
         * Decodes an AckAppointCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckAppointCards;

        /**
         * Verifies an AckAppointCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqAppointNextCard. */
    interface IReqAppointNextCard {

        /** ReqAppointNextCard tableId */
        tableId: string;

        /** ReqAppointNextCard tableMapId */
        tableMapId: (number|Long);

        /** ReqAppointNextCard userId */
        userId: (number|Long);

        /** ReqAppointNextCard cards */
        cards?: (proto.ICardInfo[]|null);
    }

    /** Represents a ReqAppointNextCard. */
    class ReqAppointNextCard implements IReqAppointNextCard {

        /**
         * Constructs a new ReqAppointNextCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqAppointNextCard);

        /** ReqAppointNextCard tableId. */
        public tableId: string;

        /** ReqAppointNextCard tableMapId. */
        public tableMapId: (number|Long);

        /** ReqAppointNextCard userId. */
        public userId: (number|Long);

        /** ReqAppointNextCard cards. */
        public cards: proto.ICardInfo[];

        /**
         * Creates a new ReqAppointNextCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqAppointNextCard instance
         */
        public static create(properties?: proto.IReqAppointNextCard): proto.ReqAppointNextCard;

        /**
         * Encodes the specified ReqAppointNextCard message. Does not implicitly {@link proto.ReqAppointNextCard.verify|verify} messages.
         * @param message ReqAppointNextCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqAppointNextCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqAppointNextCard message, length delimited. Does not implicitly {@link proto.ReqAppointNextCard.verify|verify} messages.
         * @param message ReqAppointNextCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqAppointNextCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqAppointNextCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqAppointNextCard;

        /**
         * Decodes a ReqAppointNextCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqAppointNextCard;

        /**
         * Verifies a ReqAppointNextCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckAppointNextCard. */
    interface IAckAppointNextCard {

        /** AckAppointNextCard result */
        result: number;

        /** AckAppointNextCard userId */
        userId: (number|Long);
    }

    /** Represents an AckAppointNextCard. */
    class AckAppointNextCard implements IAckAppointNextCard {

        /**
         * Constructs a new AckAppointNextCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckAppointNextCard);

        /** AckAppointNextCard result. */
        public result: number;

        /** AckAppointNextCard userId. */
        public userId: (number|Long);

        /**
         * Creates a new AckAppointNextCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckAppointNextCard instance
         */
        public static create(properties?: proto.IAckAppointNextCard): proto.AckAppointNextCard;

        /**
         * Encodes the specified AckAppointNextCard message. Does not implicitly {@link proto.AckAppointNextCard.verify|verify} messages.
         * @param message AckAppointNextCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckAppointNextCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckAppointNextCard message, length delimited. Does not implicitly {@link proto.AckAppointNextCard.verify|verify} messages.
         * @param message AckAppointNextCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckAppointNextCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckAppointNextCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckAppointNextCard;

        /**
         * Decodes an AckAppointNextCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckAppointNextCard;

        /**
         * Verifies an AckAppointNextCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqTrust. */
    interface IReqTrust {

        /** ReqTrust userId */
        userId: (number|Long);

        /** ReqTrust tableId */
        tableId: string;

        /** ReqTrust tableMapId */
        tableMapId: (number|Long);

        /** ReqTrust type */
        type: (number|Long);
    }

    /** Represents a ReqTrust. */
    class ReqTrust implements IReqTrust {

        /**
         * Constructs a new ReqTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReqTrust);

        /** ReqTrust userId. */
        public userId: (number|Long);

        /** ReqTrust tableId. */
        public tableId: string;

        /** ReqTrust tableMapId. */
        public tableMapId: (number|Long);

        /** ReqTrust type. */
        public type: (number|Long);

        /**
         * Creates a new ReqTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqTrust instance
         */
        public static create(properties?: proto.IReqTrust): proto.ReqTrust;

        /**
         * Encodes the specified ReqTrust message. Does not implicitly {@link proto.ReqTrust.verify|verify} messages.
         * @param message ReqTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReqTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqTrust message, length delimited. Does not implicitly {@link proto.ReqTrust.verify|verify} messages.
         * @param message ReqTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReqTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.ReqTrust;

        /**
         * Decodes a ReqTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.ReqTrust;

        /**
         * Verifies a ReqTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckTrust. */
    interface IAckTrust {

        /** AckTrust result */
        result: number;

        /** AckTrust userId */
        userId: (number|Long);

        /** AckTrust tableId */
        tableId: string;
    }

    /** Represents an AckTrust. */
    class AckTrust implements IAckTrust {

        /**
         * Constructs a new AckTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAckTrust);

        /** AckTrust result. */
        public result: number;

        /** AckTrust userId. */
        public userId: (number|Long);

        /** AckTrust tableId. */
        public tableId: string;

        /**
         * Creates a new AckTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckTrust instance
         */
        public static create(properties?: proto.IAckTrust): proto.AckTrust;

        /**
         * Encodes the specified AckTrust message. Does not implicitly {@link proto.AckTrust.verify|verify} messages.
         * @param message AckTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAckTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckTrust message, length delimited. Does not implicitly {@link proto.AckTrust.verify|verify} messages.
         * @param message AckTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAckTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): proto.AckTrust;

        /**
         * Decodes an AckTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): proto.AckTrust;

        /**
         * Verifies an AckTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace message. */
declare namespace message {

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq time */
        time: (number|Long);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHeartBeatReq);

        /** HeartBeatReq time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: message.IHeartBeatReq): message.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link message.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link message.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeartBeatAck. */
    interface IHeartBeatAck {

        /** HeartBeatAck time */
        time?: (number|Long|null);
    }

    /** Represents a HeartBeatAck. */
    class HeartBeatAck implements IHeartBeatAck {

        /**
         * Constructs a new HeartBeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHeartBeatAck);

        /** HeartBeatAck time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatAck instance
         */
        public static create(properties?: message.IHeartBeatAck): message.HeartBeatAck;

        /**
         * Encodes the specified HeartBeatAck message. Does not implicitly {@link message.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatAck message, length delimited. Does not implicitly {@link message.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.HeartBeatAck;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.HeartBeatAck;

        /**
         * Verifies a HeartBeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a reqLogin. */
    interface IreqLogin {

        /** reqLogin userName */
        userName: string;

        /** reqLogin avatarUrl */
        avatarUrl: string;

        /** reqLogin channelId */
        channelId: string;

        /** reqLogin gameId */
        gameId?: (number|null);

        /** reqLogin ticket */
        ticket: string;
    }

    /** Represents a reqLogin. */
    class reqLogin implements IreqLogin {

        /**
         * Constructs a new reqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IreqLogin);

        /** reqLogin userName. */
        public userName: string;

        /** reqLogin avatarUrl. */
        public avatarUrl: string;

        /** reqLogin channelId. */
        public channelId: string;

        /** reqLogin gameId. */
        public gameId: number;

        /** reqLogin ticket. */
        public ticket: string;

        /**
         * Creates a new reqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reqLogin instance
         */
        public static create(properties?: message.IreqLogin): message.reqLogin;

        /**
         * Encodes the specified reqLogin message. Does not implicitly {@link message.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified reqLogin message, length delimited. Does not implicitly {@link message.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a reqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.reqLogin;

        /**
         * Decodes a reqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.reqLogin;

        /**
         * Verifies a reqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ackLogin. */
    interface IackLogin {

        /** ackLogin result */
        result: number;

        /** ackLogin userName */
        userName?: (string|null);

        /** ackLogin showName */
        showName?: (string|null);

        /** ackLogin userIp */
        userIp?: (string|null);

        /** ackLogin enterCode */
        enterCode?: (string|null);

        /** ackLogin ingame */
        ingame?: (number|null);
    }

    /** Represents an ackLogin. */
    class ackLogin implements IackLogin {

        /**
         * Constructs a new ackLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IackLogin);

        /** ackLogin result. */
        public result: number;

        /** ackLogin userName. */
        public userName: string;

        /** ackLogin showName. */
        public showName: string;

        /** ackLogin userIp. */
        public userIp: string;

        /** ackLogin enterCode. */
        public enterCode: string;

        /** ackLogin ingame. */
        public ingame: number;

        /**
         * Creates a new ackLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ackLogin instance
         */
        public static create(properties?: message.IackLogin): message.ackLogin;

        /**
         * Encodes the specified ackLogin message. Does not implicitly {@link message.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ackLogin message, length delimited. Does not implicitly {@link message.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ackLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.ackLogin;

        /**
         * Decodes an ackLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.ackLogin;

        /**
         * Verifies an ackLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ByUserKickNtc. */
    interface IByUserKickNtc {

        /** ByUserKickNtc result */
        result?: (number|null);
    }

    /** Represents a ByUserKickNtc. */
    class ByUserKickNtc implements IByUserKickNtc {

        /**
         * Constructs a new ByUserKickNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IByUserKickNtc);

        /** ByUserKickNtc result. */
        public result: number;

        /**
         * Creates a new ByUserKickNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ByUserKickNtc instance
         */
        public static create(properties?: message.IByUserKickNtc): message.ByUserKickNtc;

        /**
         * Encodes the specified ByUserKickNtc message. Does not implicitly {@link message.ByUserKickNtc.verify|verify} messages.
         * @param message ByUserKickNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IByUserKickNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ByUserKickNtc message, length delimited. Does not implicitly {@link message.ByUserKickNtc.verify|verify} messages.
         * @param message ByUserKickNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IByUserKickNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.ByUserKickNtc;

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.ByUserKickNtc;

        /**
         * Verifies a ByUserKickNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotifyMsgNtc. */
    interface INotifyMsgNtc {

        /** NotifyMsgNtc type */
        type?: (number|null);

        /** NotifyMsgNtc who */
        who?: (string|null);

        /** NotifyMsgNtc title */
        title?: (string|null);

        /** NotifyMsgNtc content */
        content?: (string|null);

        /** NotifyMsgNtc createTime */
        createTime?: (string|null);

        /** NotifyMsgNtc isLoop */
        isLoop?: (number|null);
    }

    /** Represents a NotifyMsgNtc. */
    class NotifyMsgNtc implements INotifyMsgNtc {

        /**
         * Constructs a new NotifyMsgNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.INotifyMsgNtc);

        /** NotifyMsgNtc type. */
        public type: number;

        /** NotifyMsgNtc who. */
        public who: string;

        /** NotifyMsgNtc title. */
        public title: string;

        /** NotifyMsgNtc content. */
        public content: string;

        /** NotifyMsgNtc createTime. */
        public createTime: string;

        /** NotifyMsgNtc isLoop. */
        public isLoop: number;

        /**
         * Creates a new NotifyMsgNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyMsgNtc instance
         */
        public static create(properties?: message.INotifyMsgNtc): message.NotifyMsgNtc;

        /**
         * Encodes the specified NotifyMsgNtc message. Does not implicitly {@link message.NotifyMsgNtc.verify|verify} messages.
         * @param message NotifyMsgNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.INotifyMsgNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotifyMsgNtc message, length delimited. Does not implicitly {@link message.NotifyMsgNtc.verify|verify} messages.
         * @param message NotifyMsgNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.INotifyMsgNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.NotifyMsgNtc;

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.NotifyMsgNtc;

        /**
         * Verifies a NotifyMsgNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
