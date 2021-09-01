type Long = protobuf.Long;

/** Namespace message. */
declare namespace message {

    /** Properties of a VGHeartBeatReq. */
    interface IVGHeartBeatReq {

        /** VGHeartBeatReq time */
        time?: (number|Long|null);
    }

    /** Represents a VGHeartBeatReq. */
    class VGHeartBeatReq implements IVGHeartBeatReq {

        /**
         * Constructs a new VGHeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IVGHeartBeatReq);

        /** VGHeartBeatReq time. */
        public time: (number|Long);

        /**
         * Creates a new VGHeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGHeartBeatReq instance
         */
        public static create(properties?: message.IVGHeartBeatReq): message.VGHeartBeatReq;

        /**
         * Encodes the specified VGHeartBeatReq message. Does not implicitly {@link message.VGHeartBeatReq.verify|verify} messages.
         * @param message VGHeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IVGHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGHeartBeatReq message, length delimited. Does not implicitly {@link message.VGHeartBeatReq.verify|verify} messages.
         * @param message VGHeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IVGHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.VGHeartBeatReq;

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.VGHeartBeatReq;

        /**
         * Verifies a VGHeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGHeartBeatAck. */
    interface IVGHeartBeatAck {

        /** VGHeartBeatAck time */
        time?: (number|Long|null);
    }

    /** Represents a VGHeartBeatAck. */
    class VGHeartBeatAck implements IVGHeartBeatAck {

        /**
         * Constructs a new VGHeartBeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IVGHeartBeatAck);

        /** VGHeartBeatAck time. */
        public time: (number|Long);

        /**
         * Creates a new VGHeartBeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGHeartBeatAck instance
         */
        public static create(properties?: message.IVGHeartBeatAck): message.VGHeartBeatAck;

        /**
         * Encodes the specified VGHeartBeatAck message. Does not implicitly {@link message.VGHeartBeatAck.verify|verify} messages.
         * @param message VGHeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IVGHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGHeartBeatAck message, length delimited. Does not implicitly {@link message.VGHeartBeatAck.verify|verify} messages.
         * @param message VGHeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IVGHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.VGHeartBeatAck;

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.VGHeartBeatAck;

        /**
         * Verifies a VGHeartBeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGLoginReq. */
    interface IVGLoginReq {

        /** VGLoginReq ticket */
        ticket?: (string|null);

        /** VGLoginReq game_type */
        game_type?: (number|null);
    }

    /** Represents a VGLoginReq. */
    class VGLoginReq implements IVGLoginReq {

        /**
         * Constructs a new VGLoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IVGLoginReq);

        /** VGLoginReq ticket. */
        public ticket: string;

        /** VGLoginReq game_type. */
        public game_type: number;

        /**
         * Creates a new VGLoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGLoginReq instance
         */
        public static create(properties?: message.IVGLoginReq): message.VGLoginReq;

        /**
         * Encodes the specified VGLoginReq message. Does not implicitly {@link message.VGLoginReq.verify|verify} messages.
         * @param message VGLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IVGLoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGLoginReq message, length delimited. Does not implicitly {@link message.VGLoginReq.verify|verify} messages.
         * @param message VGLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IVGLoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.VGLoginReq;

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.VGLoginReq;

        /**
         * Verifies a VGLoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGLoginAck. */
    interface IVGLoginAck {

        /** VGLoginAck result */
        result?: (number|null);
    }

    /** Represents a VGLoginAck. */
    class VGLoginAck implements IVGLoginAck {

        /**
         * Constructs a new VGLoginAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IVGLoginAck);

        /** VGLoginAck result. */
        public result: number;

        /**
         * Creates a new VGLoginAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGLoginAck instance
         */
        public static create(properties?: message.IVGLoginAck): message.VGLoginAck;

        /**
         * Encodes the specified VGLoginAck message. Does not implicitly {@link message.VGLoginAck.verify|verify} messages.
         * @param message VGLoginAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IVGLoginAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGLoginAck message, length delimited. Does not implicitly {@link message.VGLoginAck.verify|verify} messages.
         * @param message VGLoginAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IVGLoginAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.VGLoginAck;

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.VGLoginAck;

        /**
         * Verifies a VGLoginAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotifyMsgNtc. */
    interface INotifyMsgNtc {

        /** NotifyMsgNtc msg_type */
        msg_type?: (number|null);

        /** NotifyMsgNtc game_type */
        game_type?: (number|null);

        /** NotifyMsgNtc title */
        title?: (string|null);

        /** NotifyMsgNtc content */
        content?: (string|null);

        /** NotifyMsgNtc createTime */
        createTime?: (string|null);
    }

    /** Represents a NotifyMsgNtc. */
    class NotifyMsgNtc implements INotifyMsgNtc {

        /**
         * Constructs a new NotifyMsgNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.INotifyMsgNtc);

        /** NotifyMsgNtc msg_type. */
        public msg_type: number;

        /** NotifyMsgNtc game_type. */
        public game_type: number;

        /** NotifyMsgNtc title. */
        public title: string;

        /** NotifyMsgNtc content. */
        public content: string;

        /** NotifyMsgNtc createTime. */
        public createTime: string;

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
