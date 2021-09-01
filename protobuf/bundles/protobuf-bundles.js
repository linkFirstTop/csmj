var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.message = (function() {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    var message = {};

    message.VGHeartBeatReq = (function() {

        /**
         * Properties of a VGHeartBeatReq.
         * @memberof message
         * @interface IVGHeartBeatReq
         * @property {number|Long|null} [time] VGHeartBeatReq time
         */

        /**
         * Constructs a new VGHeartBeatReq.
         * @memberof message
         * @classdesc Represents a VGHeartBeatReq.
         * @implements IVGHeartBeatReq
         * @constructor
         * @param {message.IVGHeartBeatReq=} [properties] Properties to set
         */
        function VGHeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGHeartBeatReq time.
         * @member {number|Long} time
         * @memberof message.VGHeartBeatReq
         * @instance
         */
        VGHeartBeatReq.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new VGHeartBeatReq instance using the specified properties.
         * @function create
         * @memberof message.VGHeartBeatReq
         * @static
         * @param {message.IVGHeartBeatReq=} [properties] Properties to set
         * @returns {message.VGHeartBeatReq} VGHeartBeatReq instance
         */
        VGHeartBeatReq.create = function create(properties) {
            return new VGHeartBeatReq(properties);
        };

        /**
         * Encodes the specified VGHeartBeatReq message. Does not implicitly {@link message.VGHeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof message.VGHeartBeatReq
         * @static
         * @param {message.IVGHeartBeatReq} message VGHeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified VGHeartBeatReq message, length delimited. Does not implicitly {@link message.VGHeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.VGHeartBeatReq
         * @static
         * @param {message.IVGHeartBeatReq} message VGHeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof message.VGHeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.VGHeartBeatReq} VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGHeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.VGHeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.VGHeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.VGHeartBeatReq} VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGHeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGHeartBeatReq message.
         * @function verify
         * @memberof message.VGHeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGHeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        return VGHeartBeatReq;
    })();

    message.VGHeartBeatAck = (function() {

        /**
         * Properties of a VGHeartBeatAck.
         * @memberof message
         * @interface IVGHeartBeatAck
         * @property {number|Long|null} [time] VGHeartBeatAck time
         */

        /**
         * Constructs a new VGHeartBeatAck.
         * @memberof message
         * @classdesc Represents a VGHeartBeatAck.
         * @implements IVGHeartBeatAck
         * @constructor
         * @param {message.IVGHeartBeatAck=} [properties] Properties to set
         */
        function VGHeartBeatAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGHeartBeatAck time.
         * @member {number|Long} time
         * @memberof message.VGHeartBeatAck
         * @instance
         */
        VGHeartBeatAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new VGHeartBeatAck instance using the specified properties.
         * @function create
         * @memberof message.VGHeartBeatAck
         * @static
         * @param {message.IVGHeartBeatAck=} [properties] Properties to set
         * @returns {message.VGHeartBeatAck} VGHeartBeatAck instance
         */
        VGHeartBeatAck.create = function create(properties) {
            return new VGHeartBeatAck(properties);
        };

        /**
         * Encodes the specified VGHeartBeatAck message. Does not implicitly {@link message.VGHeartBeatAck.verify|verify} messages.
         * @function encode
         * @memberof message.VGHeartBeatAck
         * @static
         * @param {message.IVGHeartBeatAck} message VGHeartBeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified VGHeartBeatAck message, length delimited. Does not implicitly {@link message.VGHeartBeatAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.VGHeartBeatAck
         * @static
         * @param {message.IVGHeartBeatAck} message VGHeartBeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer.
         * @function decode
         * @memberof message.VGHeartBeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.VGHeartBeatAck} VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGHeartBeatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.VGHeartBeatAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.VGHeartBeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.VGHeartBeatAck} VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGHeartBeatAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGHeartBeatAck message.
         * @function verify
         * @memberof message.VGHeartBeatAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGHeartBeatAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        return VGHeartBeatAck;
    })();

    message.VGLoginReq = (function() {

        /**
         * Properties of a VGLoginReq.
         * @memberof message
         * @interface IVGLoginReq
         * @property {string|null} [ticket] VGLoginReq ticket
         * @property {number|null} [game_type] VGLoginReq game_type
         */

        /**
         * Constructs a new VGLoginReq.
         * @memberof message
         * @classdesc Represents a VGLoginReq.
         * @implements IVGLoginReq
         * @constructor
         * @param {message.IVGLoginReq=} [properties] Properties to set
         */
        function VGLoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGLoginReq ticket.
         * @member {string} ticket
         * @memberof message.VGLoginReq
         * @instance
         */
        VGLoginReq.prototype.ticket = "";

        /**
         * VGLoginReq game_type.
         * @member {number} game_type
         * @memberof message.VGLoginReq
         * @instance
         */
        VGLoginReq.prototype.game_type = 0;

        /**
         * Creates a new VGLoginReq instance using the specified properties.
         * @function create
         * @memberof message.VGLoginReq
         * @static
         * @param {message.IVGLoginReq=} [properties] Properties to set
         * @returns {message.VGLoginReq} VGLoginReq instance
         */
        VGLoginReq.create = function create(properties) {
            return new VGLoginReq(properties);
        };

        /**
         * Encodes the specified VGLoginReq message. Does not implicitly {@link message.VGLoginReq.verify|verify} messages.
         * @function encode
         * @memberof message.VGLoginReq
         * @static
         * @param {message.IVGLoginReq} message VGLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticket);
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.game_type);
            return writer;
        };

        /**
         * Encodes the specified VGLoginReq message, length delimited. Does not implicitly {@link message.VGLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.VGLoginReq
         * @static
         * @param {message.IVGLoginReq} message VGLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof message.VGLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.VGLoginReq} VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.VGLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticket = reader.string();
                    break;
                case 2:
                    message.game_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.VGLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.VGLoginReq} VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGLoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGLoginReq message.
         * @function verify
         * @memberof message.VGLoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGLoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                if (!$util.isInteger(message.game_type))
                    return "game_type: integer expected";
            return null;
        };

        return VGLoginReq;
    })();

    message.VGLoginAck = (function() {

        /**
         * Properties of a VGLoginAck.
         * @memberof message
         * @interface IVGLoginAck
         * @property {number|null} [result] VGLoginAck result
         */

        /**
         * Constructs a new VGLoginAck.
         * @memberof message
         * @classdesc Represents a VGLoginAck.
         * @implements IVGLoginAck
         * @constructor
         * @param {message.IVGLoginAck=} [properties] Properties to set
         */
        function VGLoginAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGLoginAck result.
         * @member {number} result
         * @memberof message.VGLoginAck
         * @instance
         */
        VGLoginAck.prototype.result = 0;

        /**
         * Creates a new VGLoginAck instance using the specified properties.
         * @function create
         * @memberof message.VGLoginAck
         * @static
         * @param {message.IVGLoginAck=} [properties] Properties to set
         * @returns {message.VGLoginAck} VGLoginAck instance
         */
        VGLoginAck.create = function create(properties) {
            return new VGLoginAck(properties);
        };

        /**
         * Encodes the specified VGLoginAck message. Does not implicitly {@link message.VGLoginAck.verify|verify} messages.
         * @function encode
         * @memberof message.VGLoginAck
         * @static
         * @param {message.IVGLoginAck} message VGLoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified VGLoginAck message, length delimited. Does not implicitly {@link message.VGLoginAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.VGLoginAck
         * @static
         * @param {message.IVGLoginAck} message VGLoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof message.VGLoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.VGLoginAck} VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGLoginAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.VGLoginAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.VGLoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.VGLoginAck} VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGLoginAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGLoginAck message.
         * @function verify
         * @memberof message.VGLoginAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGLoginAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        return VGLoginAck;
    })();

    message.NotifyMsgNtc = (function() {

        /**
         * Properties of a NotifyMsgNtc.
         * @memberof message
         * @interface INotifyMsgNtc
         * @property {number|null} [msg_type] NotifyMsgNtc msg_type
         * @property {number|null} [game_type] NotifyMsgNtc game_type
         * @property {string|null} [title] NotifyMsgNtc title
         * @property {string|null} [content] NotifyMsgNtc content
         * @property {string|null} [createTime] NotifyMsgNtc createTime
         */

        /**
         * Constructs a new NotifyMsgNtc.
         * @memberof message
         * @classdesc Represents a NotifyMsgNtc.
         * @implements INotifyMsgNtc
         * @constructor
         * @param {message.INotifyMsgNtc=} [properties] Properties to set
         */
        function NotifyMsgNtc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyMsgNtc msg_type.
         * @member {number} msg_type
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.msg_type = 0;

        /**
         * NotifyMsgNtc game_type.
         * @member {number} game_type
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.game_type = 0;

        /**
         * NotifyMsgNtc title.
         * @member {string} title
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.title = "";

        /**
         * NotifyMsgNtc content.
         * @member {string} content
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.content = "";

        /**
         * NotifyMsgNtc createTime.
         * @member {string} createTime
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.createTime = "";

        /**
         * Creates a new NotifyMsgNtc instance using the specified properties.
         * @function create
         * @memberof message.NotifyMsgNtc
         * @static
         * @param {message.INotifyMsgNtc=} [properties] Properties to set
         * @returns {message.NotifyMsgNtc} NotifyMsgNtc instance
         */
        NotifyMsgNtc.create = function create(properties) {
            return new NotifyMsgNtc(properties);
        };

        /**
         * Encodes the specified NotifyMsgNtc message. Does not implicitly {@link message.NotifyMsgNtc.verify|verify} messages.
         * @function encode
         * @memberof message.NotifyMsgNtc
         * @static
         * @param {message.INotifyMsgNtc} message NotifyMsgNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyMsgNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg_type != null && message.hasOwnProperty("msg_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msg_type);
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.game_type);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createTime);
            return writer;
        };

        /**
         * Encodes the specified NotifyMsgNtc message, length delimited. Does not implicitly {@link message.NotifyMsgNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.NotifyMsgNtc
         * @static
         * @param {message.INotifyMsgNtc} message NotifyMsgNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyMsgNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer.
         * @function decode
         * @memberof message.NotifyMsgNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.NotifyMsgNtc} NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyMsgNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.NotifyMsgNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg_type = reader.int32();
                    break;
                case 2:
                    message.game_type = reader.int32();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                case 5:
                    message.createTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.NotifyMsgNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.NotifyMsgNtc} NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyMsgNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyMsgNtc message.
         * @function verify
         * @memberof message.NotifyMsgNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyMsgNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg_type != null && message.hasOwnProperty("msg_type"))
                if (!$util.isInteger(message.msg_type))
                    return "msg_type: integer expected";
            if (message.game_type != null && message.hasOwnProperty("game_type"))
                if (!$util.isInteger(message.game_type))
                    return "game_type: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isString(message.createTime))
                    return "createTime: string expected";
            return null;
        };

        return NotifyMsgNtc;
    })();

    return message;
})();