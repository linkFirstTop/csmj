var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.Heartbeat = (function() {

        /**
         * Properties of a Heartbeat.
         * @memberof proto
         * @interface IHeartbeat
         * @property {number|Long|null} [times] Heartbeat times
         */

        /**
         * Constructs a new Heartbeat.
         * @memberof proto
         * @classdesc Represents a Heartbeat.
         * @implements IHeartbeat
         * @constructor
         * @param {proto.IHeartbeat=} [properties] Properties to set
         */
        function Heartbeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Heartbeat times.
         * @member {number|Long} times
         * @memberof proto.Heartbeat
         * @instance
         */
        Heartbeat.prototype.times = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @function create
         * @memberof proto.Heartbeat
         * @static
         * @param {proto.IHeartbeat=} [properties] Properties to set
         * @returns {proto.Heartbeat} Heartbeat instance
         */
        Heartbeat.create = function create(properties) {
            return new Heartbeat(properties);
        };

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link proto.Heartbeat.verify|verify} messages.
         * @function encode
         * @memberof proto.Heartbeat
         * @static
         * @param {proto.IHeartbeat} message Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heartbeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.times != null && message.hasOwnProperty("times"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.times);
            return writer;
        };

        /**
         * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link proto.Heartbeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Heartbeat
         * @static
         * @param {proto.IHeartbeat} message Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heartbeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Heartbeat} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heartbeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Heartbeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.times = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Heartbeat} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heartbeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Heartbeat message.
         * @function verify
         * @memberof proto.Heartbeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Heartbeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.times != null && message.hasOwnProperty("times"))
                if (!$util.isInteger(message.times) && !(message.times && $util.isInteger(message.times.low) && $util.isInteger(message.times.high)))
                    return "times: integer|Long expected";
            return null;
        };

        return Heartbeat;
    })();

    proto.NotKick = (function() {

        /**
         * Properties of a NotKick.
         * @memberof proto
         * @interface INotKick
         * @property {number|Long} userId NotKick userId
         * @property {number} code NotKick code
         * @property {string|null} [reason] NotKick reason
         */

        /**
         * Constructs a new NotKick.
         * @memberof proto
         * @classdesc Represents a NotKick.
         * @implements INotKick
         * @constructor
         * @param {proto.INotKick=} [properties] Properties to set
         */
        function NotKick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotKick userId.
         * @member {number|Long} userId
         * @memberof proto.NotKick
         * @instance
         */
        NotKick.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotKick code.
         * @member {number} code
         * @memberof proto.NotKick
         * @instance
         */
        NotKick.prototype.code = 0;

        /**
         * NotKick reason.
         * @member {string} reason
         * @memberof proto.NotKick
         * @instance
         */
        NotKick.prototype.reason = "";

        /**
         * Creates a new NotKick instance using the specified properties.
         * @function create
         * @memberof proto.NotKick
         * @static
         * @param {proto.INotKick=} [properties] Properties to set
         * @returns {proto.NotKick} NotKick instance
         */
        NotKick.create = function create(properties) {
            return new NotKick(properties);
        };

        /**
         * Encodes the specified NotKick message. Does not implicitly {@link proto.NotKick.verify|verify} messages.
         * @function encode
         * @memberof proto.NotKick
         * @static
         * @param {proto.INotKick} message NotKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotKick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified NotKick message, length delimited. Does not implicitly {@link proto.NotKick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotKick
         * @static
         * @param {proto.INotKick} message NotKick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotKick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotKick message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotKick} NotKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotKick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotKick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotKick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotKick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotKick} NotKick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotKick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotKick message.
         * @function verify
         * @memberof proto.NotKick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotKick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        return NotKick;
    })();

    proto.NotCurrencyChange = (function() {

        /**
         * Properties of a NotCurrencyChange.
         * @memberof proto
         * @interface INotCurrencyChange
         * @property {number|Long} userId NotCurrencyChange userId
         * @property {number} currencyType NotCurrencyChange currencyType
         * @property {number|Long} changeValue NotCurrencyChange changeValue
         * @property {number|Long} currentValue NotCurrencyChange currentValue
         */

        /**
         * Constructs a new NotCurrencyChange.
         * @memberof proto
         * @classdesc Represents a NotCurrencyChange.
         * @implements INotCurrencyChange
         * @constructor
         * @param {proto.INotCurrencyChange=} [properties] Properties to set
         */
        function NotCurrencyChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotCurrencyChange userId.
         * @member {number|Long} userId
         * @memberof proto.NotCurrencyChange
         * @instance
         */
        NotCurrencyChange.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotCurrencyChange currencyType.
         * @member {number} currencyType
         * @memberof proto.NotCurrencyChange
         * @instance
         */
        NotCurrencyChange.prototype.currencyType = 0;

        /**
         * NotCurrencyChange changeValue.
         * @member {number|Long} changeValue
         * @memberof proto.NotCurrencyChange
         * @instance
         */
        NotCurrencyChange.prototype.changeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotCurrencyChange currentValue.
         * @member {number|Long} currentValue
         * @memberof proto.NotCurrencyChange
         * @instance
         */
        NotCurrencyChange.prototype.currentValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new NotCurrencyChange instance using the specified properties.
         * @function create
         * @memberof proto.NotCurrencyChange
         * @static
         * @param {proto.INotCurrencyChange=} [properties] Properties to set
         * @returns {proto.NotCurrencyChange} NotCurrencyChange instance
         */
        NotCurrencyChange.create = function create(properties) {
            return new NotCurrencyChange(properties);
        };

        /**
         * Encodes the specified NotCurrencyChange message. Does not implicitly {@link proto.NotCurrencyChange.verify|verify} messages.
         * @function encode
         * @memberof proto.NotCurrencyChange
         * @static
         * @param {proto.INotCurrencyChange} message NotCurrencyChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotCurrencyChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currencyType);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.changeValue);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.currentValue);
            return writer;
        };

        /**
         * Encodes the specified NotCurrencyChange message, length delimited. Does not implicitly {@link proto.NotCurrencyChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotCurrencyChange
         * @static
         * @param {proto.INotCurrencyChange} message NotCurrencyChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotCurrencyChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotCurrencyChange message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotCurrencyChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotCurrencyChange} NotCurrencyChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotCurrencyChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotCurrencyChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.currencyType = reader.int32();
                    break;
                case 3:
                    message.changeValue = reader.int64();
                    break;
                case 4:
                    message.currentValue = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("currencyType"))
                throw $util.ProtocolError("missing required 'currencyType'", { instance: message });
            if (!message.hasOwnProperty("changeValue"))
                throw $util.ProtocolError("missing required 'changeValue'", { instance: message });
            if (!message.hasOwnProperty("currentValue"))
                throw $util.ProtocolError("missing required 'currentValue'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotCurrencyChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotCurrencyChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotCurrencyChange} NotCurrencyChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotCurrencyChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotCurrencyChange message.
         * @function verify
         * @memberof proto.NotCurrencyChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotCurrencyChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.currencyType))
                return "currencyType: integer expected";
            if (!$util.isInteger(message.changeValue) && !(message.changeValue && $util.isInteger(message.changeValue.low) && $util.isInteger(message.changeValue.high)))
                return "changeValue: integer|Long expected";
            if (!$util.isInteger(message.currentValue) && !(message.currentValue && $util.isInteger(message.currentValue.low) && $util.isInteger(message.currentValue.high)))
                return "currentValue: integer|Long expected";
            return null;
        };

        return NotCurrencyChange;
    })();

    proto.Server = (function() {

        /**
         * Properties of a Server.
         * @memberof proto
         * @interface IServer
         * @property {number} type Server type
         * @property {string|null} [ip] Server ip
         * @property {number|null} [port] Server port
         * @property {string|null} [domain] Server domain
         */

        /**
         * Constructs a new Server.
         * @memberof proto
         * @classdesc Represents a Server.
         * @implements IServer
         * @constructor
         * @param {proto.IServer=} [properties] Properties to set
         */
        function Server(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Server type.
         * @member {number} type
         * @memberof proto.Server
         * @instance
         */
        Server.prototype.type = 0;

        /**
         * Server ip.
         * @member {string} ip
         * @memberof proto.Server
         * @instance
         */
        Server.prototype.ip = "";

        /**
         * Server port.
         * @member {number} port
         * @memberof proto.Server
         * @instance
         */
        Server.prototype.port = 0;

        /**
         * Server domain.
         * @member {string} domain
         * @memberof proto.Server
         * @instance
         */
        Server.prototype.domain = "";

        /**
         * Creates a new Server instance using the specified properties.
         * @function create
         * @memberof proto.Server
         * @static
         * @param {proto.IServer=} [properties] Properties to set
         * @returns {proto.Server} Server instance
         */
        Server.create = function create(properties) {
            return new Server(properties);
        };

        /**
         * Encodes the specified Server message. Does not implicitly {@link proto.Server.verify|verify} messages.
         * @function encode
         * @memberof proto.Server
         * @static
         * @param {proto.IServer} message Server message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Server.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
            if (message.domain != null && message.hasOwnProperty("domain"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.domain);
            return writer;
        };

        /**
         * Encodes the specified Server message, length delimited. Does not implicitly {@link proto.Server.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Server
         * @static
         * @param {proto.IServer} message Server message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Server.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Server message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Server
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Server} Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Server.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Server();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.int32();
                    break;
                case 4:
                    message.domain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a Server message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Server
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Server} Server
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Server.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Server message.
         * @function verify
         * @memberof proto.Server
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Server.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            return null;
        };

        return Server;
    })();

    proto.KVPair = (function() {

        /**
         * Properties of a KVPair.
         * @memberof proto
         * @interface IKVPair
         * @property {number|Long|null} [key] KVPair key
         * @property {number|Long|null} [lVal] KVPair lVal
         * @property {string|null} [sVal] KVPair sVal
         */

        /**
         * Constructs a new KVPair.
         * @memberof proto
         * @classdesc Represents a KVPair.
         * @implements IKVPair
         * @constructor
         * @param {proto.IKVPair=} [properties] Properties to set
         */
        function KVPair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KVPair key.
         * @member {number|Long} key
         * @memberof proto.KVPair
         * @instance
         */
        KVPair.prototype.key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KVPair lVal.
         * @member {number|Long} lVal
         * @memberof proto.KVPair
         * @instance
         */
        KVPair.prototype.lVal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * KVPair sVal.
         * @member {string} sVal
         * @memberof proto.KVPair
         * @instance
         */
        KVPair.prototype.sVal = "";

        /**
         * Creates a new KVPair instance using the specified properties.
         * @function create
         * @memberof proto.KVPair
         * @static
         * @param {proto.IKVPair=} [properties] Properties to set
         * @returns {proto.KVPair} KVPair instance
         */
        KVPair.create = function create(properties) {
            return new KVPair(properties);
        };

        /**
         * Encodes the specified KVPair message. Does not implicitly {@link proto.KVPair.verify|verify} messages.
         * @function encode
         * @memberof proto.KVPair
         * @static
         * @param {proto.IKVPair} message KVPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KVPair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.key);
            if (message.lVal != null && message.hasOwnProperty("lVal"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lVal);
            if (message.sVal != null && message.hasOwnProperty("sVal"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sVal);
            return writer;
        };

        /**
         * Encodes the specified KVPair message, length delimited. Does not implicitly {@link proto.KVPair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.KVPair
         * @static
         * @param {proto.IKVPair} message KVPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KVPair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KVPair message from the specified reader or buffer.
         * @function decode
         * @memberof proto.KVPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.KVPair} KVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KVPair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.KVPair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.int64();
                    break;
                case 2:
                    message.lVal = reader.int64();
                    break;
                case 3:
                    message.sVal = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KVPair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.KVPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.KVPair} KVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KVPair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KVPair message.
         * @function verify
         * @memberof proto.KVPair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KVPair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key) && !(message.key && $util.isInteger(message.key.low) && $util.isInteger(message.key.high)))
                    return "key: integer|Long expected";
            if (message.lVal != null && message.hasOwnProperty("lVal"))
                if (!$util.isInteger(message.lVal) && !(message.lVal && $util.isInteger(message.lVal.low) && $util.isInteger(message.lVal.high)))
                    return "lVal: integer|Long expected";
            if (message.sVal != null && message.hasOwnProperty("sVal"))
                if (!$util.isString(message.sVal))
                    return "sVal: string expected";
            return null;
        };

        return KVPair;
    })();

    proto.Countdown = (function() {

        /**
         * Properties of a Countdown.
         * @memberof proto
         * @interface ICountdown
         * @property {number} playCard Countdown playCard
         * @property {number} guanpai Countdown guanpai
         */

        /**
         * Constructs a new Countdown.
         * @memberof proto
         * @classdesc Represents a Countdown.
         * @implements ICountdown
         * @constructor
         * @param {proto.ICountdown=} [properties] Properties to set
         */
        function Countdown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Countdown playCard.
         * @member {number} playCard
         * @memberof proto.Countdown
         * @instance
         */
        Countdown.prototype.playCard = 0;

        /**
         * Countdown guanpai.
         * @member {number} guanpai
         * @memberof proto.Countdown
         * @instance
         */
        Countdown.prototype.guanpai = 0;

        /**
         * Creates a new Countdown instance using the specified properties.
         * @function create
         * @memberof proto.Countdown
         * @static
         * @param {proto.ICountdown=} [properties] Properties to set
         * @returns {proto.Countdown} Countdown instance
         */
        Countdown.create = function create(properties) {
            return new Countdown(properties);
        };

        /**
         * Encodes the specified Countdown message. Does not implicitly {@link proto.Countdown.verify|verify} messages.
         * @function encode
         * @memberof proto.Countdown
         * @static
         * @param {proto.ICountdown} message Countdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Countdown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playCard);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.guanpai);
            return writer;
        };

        /**
         * Encodes the specified Countdown message, length delimited. Does not implicitly {@link proto.Countdown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Countdown
         * @static
         * @param {proto.ICountdown} message Countdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Countdown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Countdown message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Countdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Countdown} Countdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Countdown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Countdown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playCard = reader.int32();
                    break;
                case 2:
                    message.guanpai = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playCard"))
                throw $util.ProtocolError("missing required 'playCard'", { instance: message });
            if (!message.hasOwnProperty("guanpai"))
                throw $util.ProtocolError("missing required 'guanpai'", { instance: message });
            return message;
        };

        /**
         * Decodes a Countdown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Countdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Countdown} Countdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Countdown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Countdown message.
         * @function verify
         * @memberof proto.Countdown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Countdown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playCard))
                return "playCard: integer expected";
            if (!$util.isInteger(message.guanpai))
                return "guanpai: integer expected";
            return null;
        };

        return Countdown;
    })();

    proto.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof proto
         * @interface IRoom
         * @property {number} id Room id
         * @property {number|Long} mapId Room mapId
         * @property {string} name Room name
         * @property {string|null} [icon] Room icon
         * @property {number|null} [type] Room type
         * @property {number|null} [level] Room level
         * @property {number|Long|null} [baseScore] Room baseScore
         * @property {Array.<number|Long>|null} [limit] Room limit
         * @property {string|null} [describes] Room describes
         * @property {Array.<proto.IServer>|null} [servers] Room servers
         * @property {number|Long|null} [taifen] Room taifen
         */

        /**
         * Constructs a new Room.
         * @memberof proto
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {proto.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            this.limit = [];
            this.servers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room id.
         * @member {number} id
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.id = 0;

        /**
         * Room mapId.
         * @member {number|Long} mapId
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.mapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Room name.
         * @member {string} name
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.name = "";

        /**
         * Room icon.
         * @member {string} icon
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.icon = "";

        /**
         * Room type.
         * @member {number} type
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.type = 0;

        /**
         * Room level.
         * @member {number} level
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.level = 0;

        /**
         * Room baseScore.
         * @member {number|Long} baseScore
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.baseScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Room limit.
         * @member {Array.<number|Long>} limit
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.limit = $util.emptyArray;

        /**
         * Room describes.
         * @member {string} describes
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.describes = "";

        /**
         * Room servers.
         * @member {Array.<proto.IServer>} servers
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.servers = $util.emptyArray;

        /**
         * Room taifen.
         * @member {number|Long} taifen
         * @memberof proto.Room
         * @instance
         */
        Room.prototype.taifen = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof proto.Room
         * @static
         * @param {proto.IRoom=} [properties] Properties to set
         * @returns {proto.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link proto.Room.verify|verify} messages.
         * @function encode
         * @memberof proto.Room
         * @static
         * @param {proto.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.mapId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.level);
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.baseScore);
            if (message.limit != null && message.limit.length)
                for (var i = 0; i < message.limit.length; ++i)
                    writer.uint32(/* id 8, wireType 0 =*/64).int64(message.limit[i]);
            if (message.describes != null && message.hasOwnProperty("describes"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.describes);
            if (message.servers != null && message.servers.length)
                for (var i = 0; i < message.servers.length; ++i)
                    $root.proto.Server.encode(message.servers[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.taifen != null && message.hasOwnProperty("taifen"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.taifen);
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Room
         * @static
         * @param {proto.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Room();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.mapId = reader.int64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.icon = reader.string();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.level = reader.int32();
                    break;
                case 7:
                    message.baseScore = reader.int64();
                    break;
                case 8:
                    if (!(message.limit && message.limit.length))
                        message.limit = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.limit.push(reader.int64());
                    } else
                        message.limit.push(reader.int64());
                    break;
                case 9:
                    message.describes = reader.string();
                    break;
                case 10:
                    if (!(message.servers && message.servers.length))
                        message.servers = [];
                    message.servers.push($root.proto.Server.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.taifen = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("mapId"))
                throw $util.ProtocolError("missing required 'mapId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof proto.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.mapId) && !(message.mapId && $util.isInteger(message.mapId.low) && $util.isInteger(message.mapId.high)))
                return "mapId: integer|Long expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                if (!$util.isInteger(message.baseScore) && !(message.baseScore && $util.isInteger(message.baseScore.low) && $util.isInteger(message.baseScore.high)))
                    return "baseScore: integer|Long expected";
            if (message.limit != null && message.hasOwnProperty("limit")) {
                if (!Array.isArray(message.limit))
                    return "limit: array expected";
                for (var i = 0; i < message.limit.length; ++i)
                    if (!$util.isInteger(message.limit[i]) && !(message.limit[i] && $util.isInteger(message.limit[i].low) && $util.isInteger(message.limit[i].high)))
                        return "limit: integer|Long[] expected";
            }
            if (message.describes != null && message.hasOwnProperty("describes"))
                if (!$util.isString(message.describes))
                    return "describes: string expected";
            if (message.servers != null && message.hasOwnProperty("servers")) {
                if (!Array.isArray(message.servers))
                    return "servers: array expected";
                for (var i = 0; i < message.servers.length; ++i) {
                    var error = $root.proto.Server.verify(message.servers[i]);
                    if (error)
                        return "servers." + error;
                }
            }
            if (message.taifen != null && message.hasOwnProperty("taifen"))
                if (!$util.isInteger(message.taifen) && !(message.taifen && $util.isInteger(message.taifen.low) && $util.isInteger(message.taifen.high)))
                    return "taifen: integer|Long expected";
            return null;
        };

        return Room;
    })();

    proto.User = (function() {

        /**
         * Properties of a User.
         * @memberof proto
         * @interface IUser
         * @property {number|Long} userId User userId
         * @property {string} nickName User nickName
         * @property {string|null} [avatar] User avatar
         * @property {number|Long|null} [goldCoin] User goldCoin
         * @property {number|null} [status] User status
         */

        /**
         * Constructs a new User.
         * @memberof proto
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {proto.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number|Long} userId
         * @memberof proto.User
         * @instance
         */
        User.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User nickName.
         * @member {string} nickName
         * @memberof proto.User
         * @instance
         */
        User.prototype.nickName = "";

        /**
         * User avatar.
         * @member {string} avatar
         * @memberof proto.User
         * @instance
         */
        User.prototype.avatar = "";

        /**
         * User goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.User
         * @instance
         */
        User.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User status.
         * @member {number} status
         * @memberof proto.User
         * @instance
         */
        User.prototype.status = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof proto.User
         * @static
         * @param {proto.IUser=} [properties] Properties to set
         * @returns {proto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
         * @function encode
         * @memberof proto.User
         * @static
         * @param {proto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.goldCoin);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.User
         * @static
         * @param {proto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.avatar = reader.string();
                    break;
                case 4:
                    message.goldCoin = reader.int64();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof proto.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        return User;
    })();

    proto.Chair = (function() {

        /**
         * Properties of a Chair.
         * @memberof proto
         * @interface IChair
         * @property {number} seatNo Chair seatNo
         * @property {proto.IUser|null} [user] Chair user
         * @property {number|null} [status] Chair status
         */

        /**
         * Constructs a new Chair.
         * @memberof proto
         * @classdesc Represents a Chair.
         * @implements IChair
         * @constructor
         * @param {proto.IChair=} [properties] Properties to set
         */
        function Chair(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chair seatNo.
         * @member {number} seatNo
         * @memberof proto.Chair
         * @instance
         */
        Chair.prototype.seatNo = 0;

        /**
         * Chair user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.Chair
         * @instance
         */
        Chair.prototype.user = null;

        /**
         * Chair status.
         * @member {number} status
         * @memberof proto.Chair
         * @instance
         */
        Chair.prototype.status = 0;

        /**
         * Creates a new Chair instance using the specified properties.
         * @function create
         * @memberof proto.Chair
         * @static
         * @param {proto.IChair=} [properties] Properties to set
         * @returns {proto.Chair} Chair instance
         */
        Chair.create = function create(properties) {
            return new Chair(properties);
        };

        /**
         * Encodes the specified Chair message. Does not implicitly {@link proto.Chair.verify|verify} messages.
         * @function encode
         * @memberof proto.Chair
         * @static
         * @param {proto.IChair} message Chair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatNo);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Chair message, length delimited. Does not implicitly {@link proto.Chair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Chair
         * @static
         * @param {proto.IChair} message Chair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chair message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Chair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Chair} Chair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chair.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Chair();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatNo = reader.int32();
                    break;
                case 2:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a Chair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Chair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Chair} Chair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chair message.
         * @function verify
         * @memberof proto.Chair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        return Chair;
    })();

    proto.ReconnectPlayerInfo = (function() {

        /**
         * Properties of a ReconnectPlayerInfo.
         * @memberof proto
         * @interface IReconnectPlayerInfo
         * @property {number} seatNo ReconnectPlayerInfo seatNo
         * @property {Array.<proto.ICardInfo>|null} [cards] ReconnectPlayerInfo cards
         * @property {Array.<proto.ICardInfo>|null} [discard] ReconnectPlayerInfo discard
         * @property {number|null} [position] ReconnectPlayerInfo position
         * @property {Array.<proto.ICardInfo>|null} [huapai] ReconnectPlayerInfo huapai
         * @property {Array.<proto.ICardsGroup>|null} [patterns] ReconnectPlayerInfo patterns
         * @property {proto.ICardInfo|null} [lastCard] ReconnectPlayerInfo lastCard
         * @property {number|null} [ting] ReconnectPlayerInfo ting
         */

        /**
         * Constructs a new ReconnectPlayerInfo.
         * @memberof proto
         * @classdesc Represents a ReconnectPlayerInfo.
         * @implements IReconnectPlayerInfo
         * @constructor
         * @param {proto.IReconnectPlayerInfo=} [properties] Properties to set
         */
        function ReconnectPlayerInfo(properties) {
            this.cards = [];
            this.discard = [];
            this.huapai = [];
            this.patterns = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnectPlayerInfo seatNo.
         * @member {number} seatNo
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.seatNo = 0;

        /**
         * ReconnectPlayerInfo cards.
         * @member {Array.<proto.ICardInfo>} cards
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.cards = $util.emptyArray;

        /**
         * ReconnectPlayerInfo discard.
         * @member {Array.<proto.ICardInfo>} discard
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.discard = $util.emptyArray;

        /**
         * ReconnectPlayerInfo position.
         * @member {number} position
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.position = 0;

        /**
         * ReconnectPlayerInfo huapai.
         * @member {Array.<proto.ICardInfo>} huapai
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.huapai = $util.emptyArray;

        /**
         * ReconnectPlayerInfo patterns.
         * @member {Array.<proto.ICardsGroup>} patterns
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.patterns = $util.emptyArray;

        /**
         * ReconnectPlayerInfo lastCard.
         * @member {proto.ICardInfo|null|undefined} lastCard
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.lastCard = null;

        /**
         * ReconnectPlayerInfo ting.
         * @member {number} ting
         * @memberof proto.ReconnectPlayerInfo
         * @instance
         */
        ReconnectPlayerInfo.prototype.ting = 0;

        /**
         * Creates a new ReconnectPlayerInfo instance using the specified properties.
         * @function create
         * @memberof proto.ReconnectPlayerInfo
         * @static
         * @param {proto.IReconnectPlayerInfo=} [properties] Properties to set
         * @returns {proto.ReconnectPlayerInfo} ReconnectPlayerInfo instance
         */
        ReconnectPlayerInfo.create = function create(properties) {
            return new ReconnectPlayerInfo(properties);
        };

        /**
         * Encodes the specified ReconnectPlayerInfo message. Does not implicitly {@link proto.ReconnectPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.ReconnectPlayerInfo
         * @static
         * @param {proto.IReconnectPlayerInfo} message ReconnectPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatNo);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.proto.CardInfo.encode(message.cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.discard != null && message.discard.length)
                for (var i = 0; i < message.discard.length; ++i)
                    $root.proto.CardInfo.encode(message.discard[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.position);
            if (message.huapai != null && message.huapai.length)
                for (var i = 0; i < message.huapai.length; ++i)
                    $root.proto.CardInfo.encode(message.huapai[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.patterns != null && message.patterns.length)
                for (var i = 0; i < message.patterns.length; ++i)
                    $root.proto.CardsGroup.encode(message.patterns[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.lastCard != null && message.hasOwnProperty("lastCard"))
                $root.proto.CardInfo.encode(message.lastCard, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.ting != null && message.hasOwnProperty("ting"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ting);
            return writer;
        };

        /**
         * Encodes the specified ReconnectPlayerInfo message, length delimited. Does not implicitly {@link proto.ReconnectPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReconnectPlayerInfo
         * @static
         * @param {proto.IReconnectPlayerInfo} message ReconnectPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnectPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReconnectPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReconnectPlayerInfo} ReconnectPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReconnectPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatNo = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.discard && message.discard.length))
                        message.discard = [];
                    message.discard.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.position = reader.int32();
                    break;
                case 5:
                    if (!(message.huapai && message.huapai.length))
                        message.huapai = [];
                    message.huapai.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.patterns && message.patterns.length))
                        message.patterns = [];
                    message.patterns.push($root.proto.CardsGroup.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.lastCard = $root.proto.CardInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.ting = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReconnectPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReconnectPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReconnectPlayerInfo} ReconnectPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnectPlayerInfo message.
         * @function verify
         * @memberof proto.ReconnectPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnectPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            if (message.discard != null && message.hasOwnProperty("discard")) {
                if (!Array.isArray(message.discard))
                    return "discard: array expected";
                for (var i = 0; i < message.discard.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.discard[i]);
                    if (error)
                        return "discard." + error;
                }
            }
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.huapai != null && message.hasOwnProperty("huapai")) {
                if (!Array.isArray(message.huapai))
                    return "huapai: array expected";
                for (var i = 0; i < message.huapai.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.huapai[i]);
                    if (error)
                        return "huapai." + error;
                }
            }
            if (message.patterns != null && message.hasOwnProperty("patterns")) {
                if (!Array.isArray(message.patterns))
                    return "patterns: array expected";
                for (var i = 0; i < message.patterns.length; ++i) {
                    var error = $root.proto.CardsGroup.verify(message.patterns[i]);
                    if (error)
                        return "patterns." + error;
                }
            }
            if (message.lastCard != null && message.hasOwnProperty("lastCard")) {
                var error = $root.proto.CardInfo.verify(message.lastCard);
                if (error)
                    return "lastCard." + error;
            }
            if (message.ting != null && message.hasOwnProperty("ting"))
                if (!$util.isInteger(message.ting))
                    return "ting: integer expected";
            return null;
        };

        return ReconnectPlayerInfo;
    })();

    proto.MahjongPattern = (function() {

        /**
         * Properties of a MahjongPattern.
         * @memberof proto
         * @interface IMahjongPattern
         * @property {number} type MahjongPattern type
         * @property {Array.<proto.ICardInfo>|null} [cards] MahjongPattern cards
         */

        /**
         * Constructs a new MahjongPattern.
         * @memberof proto
         * @classdesc Represents a MahjongPattern.
         * @implements IMahjongPattern
         * @constructor
         * @param {proto.IMahjongPattern=} [properties] Properties to set
         */
        function MahjongPattern(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongPattern type.
         * @member {number} type
         * @memberof proto.MahjongPattern
         * @instance
         */
        MahjongPattern.prototype.type = 0;

        /**
         * MahjongPattern cards.
         * @member {Array.<proto.ICardInfo>} cards
         * @memberof proto.MahjongPattern
         * @instance
         */
        MahjongPattern.prototype.cards = $util.emptyArray;

        /**
         * Creates a new MahjongPattern instance using the specified properties.
         * @function create
         * @memberof proto.MahjongPattern
         * @static
         * @param {proto.IMahjongPattern=} [properties] Properties to set
         * @returns {proto.MahjongPattern} MahjongPattern instance
         */
        MahjongPattern.create = function create(properties) {
            return new MahjongPattern(properties);
        };

        /**
         * Encodes the specified MahjongPattern message. Does not implicitly {@link proto.MahjongPattern.verify|verify} messages.
         * @function encode
         * @memberof proto.MahjongPattern
         * @static
         * @param {proto.IMahjongPattern} message MahjongPattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPattern.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.proto.CardInfo.encode(message.cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongPattern message, length delimited. Does not implicitly {@link proto.MahjongPattern.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MahjongPattern
         * @static
         * @param {proto.IMahjongPattern} message MahjongPattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongPattern.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongPattern message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MahjongPattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MahjongPattern} MahjongPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPattern.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MahjongPattern();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a MahjongPattern message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MahjongPattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MahjongPattern} MahjongPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongPattern.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongPattern message.
         * @function verify
         * @memberof proto.MahjongPattern
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongPattern.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            return null;
        };

        return MahjongPattern;
    })();

    proto.Table = (function() {

        /**
         * Properties of a Table.
         * @memberof proto
         * @interface ITable
         * @property {string} tableId Table tableId
         * @property {number} roomId Table roomId
         * @property {number} roomLevel Table roomLevel
         * @property {number|null} [type] Table type
         * @property {string|null} [tableName] Table tableName
         * @property {string} roundId Table roundId
         * @property {number|Long} baseScore Table baseScore
         * @property {number} gamePhase Table gamePhase
         * @property {Array.<proto.IChair>|null} [chairs] Table chairs
         * @property {proto.ICountdown} countdown Table countdown
         */

        /**
         * Constructs a new Table.
         * @memberof proto
         * @classdesc Represents a Table.
         * @implements ITable
         * @constructor
         * @param {proto.ITable=} [properties] Properties to set
         */
        function Table(properties) {
            this.chairs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Table tableId.
         * @member {string} tableId
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.tableId = "";

        /**
         * Table roomId.
         * @member {number} roomId
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.roomId = 0;

        /**
         * Table roomLevel.
         * @member {number} roomLevel
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.roomLevel = 0;

        /**
         * Table type.
         * @member {number} type
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.type = 0;

        /**
         * Table tableName.
         * @member {string} tableName
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.tableName = "";

        /**
         * Table roundId.
         * @member {string} roundId
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.roundId = "";

        /**
         * Table baseScore.
         * @member {number|Long} baseScore
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.baseScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Table gamePhase.
         * @member {number} gamePhase
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.gamePhase = 0;

        /**
         * Table chairs.
         * @member {Array.<proto.IChair>} chairs
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.chairs = $util.emptyArray;

        /**
         * Table countdown.
         * @member {proto.ICountdown} countdown
         * @memberof proto.Table
         * @instance
         */
        Table.prototype.countdown = null;

        /**
         * Creates a new Table instance using the specified properties.
         * @function create
         * @memberof proto.Table
         * @static
         * @param {proto.ITable=} [properties] Properties to set
         * @returns {proto.Table} Table instance
         */
        Table.create = function create(properties) {
            return new Table(properties);
        };

        /**
         * Encodes the specified Table message. Does not implicitly {@link proto.Table.verify|verify} messages.
         * @function encode
         * @memberof proto.Table
         * @static
         * @param {proto.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomLevel);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.tableName != null && message.hasOwnProperty("tableName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tableName);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.roundId);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.baseScore);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.gamePhase);
            if (message.chairs != null && message.chairs.length)
                for (var i = 0; i < message.chairs.length; ++i)
                    $root.proto.Chair.encode(message.chairs[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            $root.proto.Countdown.encode(message.countdown, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link proto.Table.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Table
         * @static
         * @param {proto.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Table();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                case 3:
                    message.roomLevel = reader.int32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.tableName = reader.string();
                    break;
                case 6:
                    message.roundId = reader.string();
                    break;
                case 7:
                    message.baseScore = reader.int64();
                    break;
                case 8:
                    message.gamePhase = reader.int32();
                    break;
                case 9:
                    if (!(message.chairs && message.chairs.length))
                        message.chairs = [];
                    message.chairs.push($root.proto.Chair.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.countdown = $root.proto.Countdown.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("roomLevel"))
                throw $util.ProtocolError("missing required 'roomLevel'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            if (!message.hasOwnProperty("baseScore"))
                throw $util.ProtocolError("missing required 'baseScore'", { instance: message });
            if (!message.hasOwnProperty("gamePhase"))
                throw $util.ProtocolError("missing required 'gamePhase'", { instance: message });
            if (!message.hasOwnProperty("countdown"))
                throw $util.ProtocolError("missing required 'countdown'", { instance: message });
            return message;
        };

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Table message.
         * @function verify
         * @memberof proto.Table
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Table.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isInteger(message.roomLevel))
                return "roomLevel: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.tableName != null && message.hasOwnProperty("tableName"))
                if (!$util.isString(message.tableName))
                    return "tableName: string expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            if (!$util.isInteger(message.baseScore) && !(message.baseScore && $util.isInteger(message.baseScore.low) && $util.isInteger(message.baseScore.high)))
                return "baseScore: integer|Long expected";
            if (!$util.isInteger(message.gamePhase))
                return "gamePhase: integer expected";
            if (message.chairs != null && message.hasOwnProperty("chairs")) {
                if (!Array.isArray(message.chairs))
                    return "chairs: array expected";
                for (var i = 0; i < message.chairs.length; ++i) {
                    var error = $root.proto.Chair.verify(message.chairs[i]);
                    if (error)
                        return "chairs." + error;
                }
            }
            {
                var error = $root.proto.Countdown.verify(message.countdown);
                if (error)
                    return "countdown." + error;
            }
            return null;
        };

        return Table;
    })();

    proto.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof proto
         * @interface IPlayer
         * @property {number} seatNo Player seatNo
         * @property {number|Long} userId Player userId
         * @property {number} userType Player userType
         * @property {string} userName Player userName
         * @property {string|null} [nickName] Player nickName
         * @property {string|null} [avatar] Player avatar
         * @property {string|null} [channel] Player channel
         * @property {string|null} [proxy] Player proxy
         * @property {string|null} [group] Player group
         * @property {string|null} [userIp] Player userIp
         * @property {Array.<number>|null} [handCards] Player handCards
         * @property {Array.<number>|null} [surplusCards] Player surplusCards
         * @property {number|null} [bombCount] Player bombCount
         * @property {number|Long} initChips Player initChips
         * @property {number|Long|null} [winChips] Player winChips
         * @property {number|Long|null} [endChips] Player endChips
         */

        /**
         * Constructs a new Player.
         * @memberof proto
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {proto.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.handCards = [];
            this.surplusCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player seatNo.
         * @member {number} seatNo
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.seatNo = 0;

        /**
         * Player userId.
         * @member {number|Long} userId
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player userType.
         * @member {number} userType
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.userType = 0;

        /**
         * Player userName.
         * @member {string} userName
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.userName = "";

        /**
         * Player nickName.
         * @member {string} nickName
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.nickName = "";

        /**
         * Player avatar.
         * @member {string} avatar
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.avatar = "";

        /**
         * Player channel.
         * @member {string} channel
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.channel = "";

        /**
         * Player proxy.
         * @member {string} proxy
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.proxy = "";

        /**
         * Player group.
         * @member {string} group
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.group = "";

        /**
         * Player userIp.
         * @member {string} userIp
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.userIp = "";

        /**
         * Player handCards.
         * @member {Array.<number>} handCards
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.handCards = $util.emptyArray;

        /**
         * Player surplusCards.
         * @member {Array.<number>} surplusCards
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.surplusCards = $util.emptyArray;

        /**
         * Player bombCount.
         * @member {number} bombCount
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.bombCount = 0;

        /**
         * Player initChips.
         * @member {number|Long} initChips
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.initChips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player winChips.
         * @member {number|Long} winChips
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.winChips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player endChips.
         * @member {number|Long} endChips
         * @memberof proto.Player
         * @instance
         */
        Player.prototype.endChips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof proto.Player
         * @static
         * @param {proto.IPlayer=} [properties] Properties to set
         * @returns {proto.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link proto.Player.verify|verify} messages.
         * @function encode
         * @memberof proto.Player
         * @static
         * @param {proto.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userType);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.userName);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickName);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatar);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.channel);
            if (message.proxy != null && message.hasOwnProperty("proxy"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.proxy);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.group);
            if (message.userIp != null && message.hasOwnProperty("userIp"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userIp);
            if (message.handCards != null && message.handCards.length)
                for (var i = 0; i < message.handCards.length; ++i)
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.handCards[i]);
            if (message.surplusCards != null && message.surplusCards.length)
                for (var i = 0; i < message.surplusCards.length; ++i)
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.surplusCards[i]);
            if (message.bombCount != null && message.hasOwnProperty("bombCount"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.bombCount);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.initChips);
            if (message.winChips != null && message.hasOwnProperty("winChips"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.winChips);
            if (message.endChips != null && message.hasOwnProperty("endChips"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.endChips);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link proto.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Player
         * @static
         * @param {proto.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatNo = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.userType = reader.int32();
                    break;
                case 4:
                    message.userName = reader.string();
                    break;
                case 5:
                    message.nickName = reader.string();
                    break;
                case 6:
                    message.avatar = reader.string();
                    break;
                case 7:
                    message.channel = reader.string();
                    break;
                case 8:
                    message.proxy = reader.string();
                    break;
                case 9:
                    message.group = reader.string();
                    break;
                case 10:
                    message.userIp = reader.string();
                    break;
                case 11:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.handCards.push(reader.int32());
                    } else
                        message.handCards.push(reader.int32());
                    break;
                case 12:
                    if (!(message.surplusCards && message.surplusCards.length))
                        message.surplusCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.surplusCards.push(reader.int32());
                    } else
                        message.surplusCards.push(reader.int32());
                    break;
                case 13:
                    message.bombCount = reader.int32();
                    break;
                case 14:
                    message.initChips = reader.int64();
                    break;
                case 15:
                    message.winChips = reader.int64();
                    break;
                case 16:
                    message.endChips = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("userType"))
                throw $util.ProtocolError("missing required 'userType'", { instance: message });
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("initChips"))
                throw $util.ProtocolError("missing required 'initChips'", { instance: message });
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof proto.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.userType))
                return "userType: integer expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.proxy != null && message.hasOwnProperty("proxy"))
                if (!$util.isString(message.proxy))
                    return "proxy: string expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isString(message.group))
                    return "group: string expected";
            if (message.userIp != null && message.hasOwnProperty("userIp"))
                if (!$util.isString(message.userIp))
                    return "userIp: string expected";
            if (message.handCards != null && message.hasOwnProperty("handCards")) {
                if (!Array.isArray(message.handCards))
                    return "handCards: array expected";
                for (var i = 0; i < message.handCards.length; ++i)
                    if (!$util.isInteger(message.handCards[i]))
                        return "handCards: integer[] expected";
            }
            if (message.surplusCards != null && message.hasOwnProperty("surplusCards")) {
                if (!Array.isArray(message.surplusCards))
                    return "surplusCards: array expected";
                for (var i = 0; i < message.surplusCards.length; ++i)
                    if (!$util.isInteger(message.surplusCards[i]))
                        return "surplusCards: integer[] expected";
            }
            if (message.bombCount != null && message.hasOwnProperty("bombCount"))
                if (!$util.isInteger(message.bombCount))
                    return "bombCount: integer expected";
            if (!$util.isInteger(message.initChips) && !(message.initChips && $util.isInteger(message.initChips.low) && $util.isInteger(message.initChips.high)))
                return "initChips: integer|Long expected";
            if (message.winChips != null && message.hasOwnProperty("winChips"))
                if (!$util.isInteger(message.winChips) && !(message.winChips && $util.isInteger(message.winChips.low) && $util.isInteger(message.winChips.high)))
                    return "winChips: integer|Long expected";
            if (message.endChips != null && message.hasOwnProperty("endChips"))
                if (!$util.isInteger(message.endChips) && !(message.endChips && $util.isInteger(message.endChips.low) && $util.isInteger(message.endChips.high)))
                    return "endChips: integer|Long expected";
            return null;
        };

        return Player;
    })();

    proto.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof proto
         * @interface IAction
         * @property {number} type Action type
         * @property {number|null} [seatNo] Action seatNo
         * @property {Array.<number>|null} [data] Action data
         * @property {number|Long|null} [timestamp] Action timestamp
         */

        /**
         * Constructs a new Action.
         * @memberof proto
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {proto.IAction=} [properties] Properties to set
         */
        function Action(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Action type.
         * @member {number} type
         * @memberof proto.Action
         * @instance
         */
        Action.prototype.type = 0;

        /**
         * Action seatNo.
         * @member {number} seatNo
         * @memberof proto.Action
         * @instance
         */
        Action.prototype.seatNo = 0;

        /**
         * Action data.
         * @member {Array.<number>} data
         * @memberof proto.Action
         * @instance
         */
        Action.prototype.data = $util.emptyArray;

        /**
         * Action timestamp.
         * @member {number|Long} timestamp
         * @memberof proto.Action
         * @instance
         */
        Action.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof proto.Action
         * @static
         * @param {proto.IAction=} [properties] Properties to set
         * @returns {proto.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link proto.Action.verify|verify} messages.
         * @function encode
         * @memberof proto.Action
         * @static
         * @param {proto.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.seatNo != null && message.hasOwnProperty("seatNo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seatNo);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.data[i]);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link proto.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Action
         * @static
         * @param {proto.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Action();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.seatNo = reader.int32();
                    break;
                case 3:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.data.push(reader.int32());
                    } else
                        message.data.push(reader.int32());
                    break;
                case 4:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Action message.
         * @function verify
         * @memberof proto.Action
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Action.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.seatNo != null && message.hasOwnProperty("seatNo"))
                if (!$util.isInteger(message.seatNo))
                    return "seatNo: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i)
                    if (!$util.isInteger(message.data[i]))
                        return "data: integer[] expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        return Action;
    })();

    proto.GameVCR = (function() {

        /**
         * Properties of a GameVCR.
         * @memberof proto
         * @interface IGameVCR
         * @property {number} roomId GameVCR roomId
         * @property {number} roomLevel GameVCR roomLevel
         * @property {number|null} [type] GameVCR type
         * @property {string} tableId GameVCR tableId
         * @property {string} roundId GameVCR roundId
         * @property {number|Long} beginTime GameVCR beginTime
         * @property {number|Long} endTime GameVCR endTime
         * @property {number} dealer GameVCR dealer
         * @property {number|Long|null} [baseScore] GameVCR baseScore
         * @property {Array.<proto.IPlayer>|null} [players] GameVCR players
         * @property {Array.<proto.IAction>|null} [actions] GameVCR actions
         */

        /**
         * Constructs a new GameVCR.
         * @memberof proto
         * @classdesc Represents a GameVCR.
         * @implements IGameVCR
         * @constructor
         * @param {proto.IGameVCR=} [properties] Properties to set
         */
        function GameVCR(properties) {
            this.players = [];
            this.actions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameVCR roomId.
         * @member {number} roomId
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.roomId = 0;

        /**
         * GameVCR roomLevel.
         * @member {number} roomLevel
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.roomLevel = 0;

        /**
         * GameVCR type.
         * @member {number} type
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.type = 0;

        /**
         * GameVCR tableId.
         * @member {string} tableId
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.tableId = "";

        /**
         * GameVCR roundId.
         * @member {string} roundId
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.roundId = "";

        /**
         * GameVCR beginTime.
         * @member {number|Long} beginTime
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.beginTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameVCR endTime.
         * @member {number|Long} endTime
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameVCR dealer.
         * @member {number} dealer
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.dealer = 0;

        /**
         * GameVCR baseScore.
         * @member {number|Long} baseScore
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.baseScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameVCR players.
         * @member {Array.<proto.IPlayer>} players
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.players = $util.emptyArray;

        /**
         * GameVCR actions.
         * @member {Array.<proto.IAction>} actions
         * @memberof proto.GameVCR
         * @instance
         */
        GameVCR.prototype.actions = $util.emptyArray;

        /**
         * Creates a new GameVCR instance using the specified properties.
         * @function create
         * @memberof proto.GameVCR
         * @static
         * @param {proto.IGameVCR=} [properties] Properties to set
         * @returns {proto.GameVCR} GameVCR instance
         */
        GameVCR.create = function create(properties) {
            return new GameVCR(properties);
        };

        /**
         * Encodes the specified GameVCR message. Does not implicitly {@link proto.GameVCR.verify|verify} messages.
         * @function encode
         * @memberof proto.GameVCR
         * @static
         * @param {proto.IGameVCR} message GameVCR message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameVCR.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomLevel);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableId);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.roundId);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.beginTime);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.endTime);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.dealer);
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.baseScore);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.proto.Player.encode(message.players[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.actions != null && message.actions.length)
                for (var i = 0; i < message.actions.length; ++i)
                    $root.proto.Action.encode(message.actions[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameVCR message, length delimited. Does not implicitly {@link proto.GameVCR.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GameVCR
         * @static
         * @param {proto.IGameVCR} message GameVCR message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameVCR.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameVCR message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GameVCR
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GameVCR} GameVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameVCR.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GameVCR();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                case 2:
                    message.roomLevel = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.tableId = reader.string();
                    break;
                case 5:
                    message.roundId = reader.string();
                    break;
                case 6:
                    message.beginTime = reader.int64();
                    break;
                case 7:
                    message.endTime = reader.int64();
                    break;
                case 8:
                    message.dealer = reader.int32();
                    break;
                case 9:
                    message.baseScore = reader.int64();
                    break;
                case 10:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.proto.Player.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.actions && message.actions.length))
                        message.actions = [];
                    message.actions.push($root.proto.Action.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("roomLevel"))
                throw $util.ProtocolError("missing required 'roomLevel'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            if (!message.hasOwnProperty("beginTime"))
                throw $util.ProtocolError("missing required 'beginTime'", { instance: message });
            if (!message.hasOwnProperty("endTime"))
                throw $util.ProtocolError("missing required 'endTime'", { instance: message });
            if (!message.hasOwnProperty("dealer"))
                throw $util.ProtocolError("missing required 'dealer'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameVCR message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GameVCR
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GameVCR} GameVCR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameVCR.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameVCR message.
         * @function verify
         * @memberof proto.GameVCR
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameVCR.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isInteger(message.roomLevel))
                return "roomLevel: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            if (!$util.isInteger(message.beginTime) && !(message.beginTime && $util.isInteger(message.beginTime.low) && $util.isInteger(message.beginTime.high)))
                return "beginTime: integer|Long expected";
            if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                return "endTime: integer|Long expected";
            if (!$util.isInteger(message.dealer))
                return "dealer: integer expected";
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                if (!$util.isInteger(message.baseScore) && !(message.baseScore && $util.isInteger(message.baseScore.low) && $util.isInteger(message.baseScore.high)))
                    return "baseScore: integer|Long expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.proto.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.actions != null && message.hasOwnProperty("actions")) {
                if (!Array.isArray(message.actions))
                    return "actions: array expected";
                for (var i = 0; i < message.actions.length; ++i) {
                    var error = $root.proto.Action.verify(message.actions[i]);
                    if (error)
                        return "actions." + error;
                }
            }
            return null;
        };

        return GameVCR;
    })();

    proto.CardInfo = (function() {

        /**
         * Properties of a CardInfo.
         * @memberof proto
         * @interface ICardInfo
         * @property {number} CardID CardInfo CardID
         * @property {number|null} [Sit] CardInfo Sit
         */

        /**
         * Constructs a new CardInfo.
         * @memberof proto
         * @classdesc Represents a CardInfo.
         * @implements ICardInfo
         * @constructor
         * @param {proto.ICardInfo=} [properties] Properties to set
         */
        function CardInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardInfo CardID.
         * @member {number} CardID
         * @memberof proto.CardInfo
         * @instance
         */
        CardInfo.prototype.CardID = 0;

        /**
         * CardInfo Sit.
         * @member {number} Sit
         * @memberof proto.CardInfo
         * @instance
         */
        CardInfo.prototype.Sit = 0;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @function create
         * @memberof proto.CardInfo
         * @static
         * @param {proto.ICardInfo=} [properties] Properties to set
         * @returns {proto.CardInfo} CardInfo instance
         */
        CardInfo.create = function create(properties) {
            return new CardInfo(properties);
        };

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link proto.CardInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.CardInfo
         * @static
         * @param {proto.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CardID);
            if (message.Sit != null && message.hasOwnProperty("Sit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Sit);
            return writer;
        };

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link proto.CardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CardInfo
         * @static
         * @param {proto.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CardInfo} CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CardID = reader.int32();
                    break;
                case 2:
                    message.Sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("CardID"))
                throw $util.ProtocolError("missing required 'CardID'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CardInfo} CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardInfo message.
         * @function verify
         * @memberof proto.CardInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.CardID))
                return "CardID: integer expected";
            if (message.Sit != null && message.hasOwnProperty("Sit"))
                if (!$util.isInteger(message.Sit))
                    return "Sit: integer expected";
            return null;
        };

        return CardInfo;
    })();

    proto.HandCards = (function() {

        /**
         * Properties of a HandCards.
         * @memberof proto
         * @interface IHandCards
         * @property {number} seat HandCards seat
         * @property {Array.<proto.ICardInfo>|null} [cards] HandCards cards
         * @property {proto.ICardInfo|null} [huCard] HandCards huCard
         */

        /**
         * Constructs a new HandCards.
         * @memberof proto
         * @classdesc Represents a HandCards.
         * @implements IHandCards
         * @constructor
         * @param {proto.IHandCards=} [properties] Properties to set
         */
        function HandCards(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandCards seat.
         * @member {number} seat
         * @memberof proto.HandCards
         * @instance
         */
        HandCards.prototype.seat = 0;

        /**
         * HandCards cards.
         * @member {Array.<proto.ICardInfo>} cards
         * @memberof proto.HandCards
         * @instance
         */
        HandCards.prototype.cards = $util.emptyArray;

        /**
         * HandCards huCard.
         * @member {proto.ICardInfo|null|undefined} huCard
         * @memberof proto.HandCards
         * @instance
         */
        HandCards.prototype.huCard = null;

        /**
         * Creates a new HandCards instance using the specified properties.
         * @function create
         * @memberof proto.HandCards
         * @static
         * @param {proto.IHandCards=} [properties] Properties to set
         * @returns {proto.HandCards} HandCards instance
         */
        HandCards.create = function create(properties) {
            return new HandCards(properties);
        };

        /**
         * Encodes the specified HandCards message. Does not implicitly {@link proto.HandCards.verify|verify} messages.
         * @function encode
         * @memberof proto.HandCards
         * @static
         * @param {proto.IHandCards} message HandCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.proto.CardInfo.encode(message.cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.huCard != null && message.hasOwnProperty("huCard"))
                $root.proto.CardInfo.encode(message.huCard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HandCards message, length delimited. Does not implicitly {@link proto.HandCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HandCards
         * @static
         * @param {proto.IHandCards} message HandCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandCards message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HandCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HandCards} HandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HandCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.huCard = $root.proto.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            return message;
        };

        /**
         * Decodes a HandCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HandCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HandCards} HandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandCards message.
         * @function verify
         * @memberof proto.HandCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            if (message.huCard != null && message.hasOwnProperty("huCard")) {
                var error = $root.proto.CardInfo.verify(message.huCard);
                if (error)
                    return "huCard." + error;
            }
            return null;
        };

        return HandCards;
    })();

    proto.CardsGroup = (function() {

        /**
         * Properties of a CardsGroup.
         * @memberof proto
         * @interface ICardsGroup
         * @property {number} Sit CardsGroup Sit
         * @property {number} Type CardsGroup Type
         * @property {Array.<proto.ICardInfo>|null} [Cards] CardsGroup Cards
         * @property {proto.ICardInfo|null} [ObtainCard] CardsGroup ObtainCard
         * @property {number|null} [ObtainCardSit] CardsGroup ObtainCardSit
         */

        /**
         * Constructs a new CardsGroup.
         * @memberof proto
         * @classdesc Represents a CardsGroup.
         * @implements ICardsGroup
         * @constructor
         * @param {proto.ICardsGroup=} [properties] Properties to set
         */
        function CardsGroup(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardsGroup Sit.
         * @member {number} Sit
         * @memberof proto.CardsGroup
         * @instance
         */
        CardsGroup.prototype.Sit = 0;

        /**
         * CardsGroup Type.
         * @member {number} Type
         * @memberof proto.CardsGroup
         * @instance
         */
        CardsGroup.prototype.Type = 0;

        /**
         * CardsGroup Cards.
         * @member {Array.<proto.ICardInfo>} Cards
         * @memberof proto.CardsGroup
         * @instance
         */
        CardsGroup.prototype.Cards = $util.emptyArray;

        /**
         * CardsGroup ObtainCard.
         * @member {proto.ICardInfo|null|undefined} ObtainCard
         * @memberof proto.CardsGroup
         * @instance
         */
        CardsGroup.prototype.ObtainCard = null;

        /**
         * CardsGroup ObtainCardSit.
         * @member {number} ObtainCardSit
         * @memberof proto.CardsGroup
         * @instance
         */
        CardsGroup.prototype.ObtainCardSit = 0;

        /**
         * Creates a new CardsGroup instance using the specified properties.
         * @function create
         * @memberof proto.CardsGroup
         * @static
         * @param {proto.ICardsGroup=} [properties] Properties to set
         * @returns {proto.CardsGroup} CardsGroup instance
         */
        CardsGroup.create = function create(properties) {
            return new CardsGroup(properties);
        };

        /**
         * Encodes the specified CardsGroup message. Does not implicitly {@link proto.CardsGroup.verify|verify} messages.
         * @function encode
         * @memberof proto.CardsGroup
         * @static
         * @param {proto.ICardsGroup} message CardsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardsGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Type);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.proto.CardInfo.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ObtainCard != null && message.hasOwnProperty("ObtainCard"))
                $root.proto.CardInfo.encode(message.ObtainCard, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.ObtainCardSit != null && message.hasOwnProperty("ObtainCardSit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ObtainCardSit);
            return writer;
        };

        /**
         * Encodes the specified CardsGroup message, length delimited. Does not implicitly {@link proto.CardsGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CardsGroup
         * @static
         * @param {proto.ICardsGroup} message CardsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardsGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardsGroup message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CardsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CardsGroup} CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardsGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CardsGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    message.Type = reader.int32();
                    break;
                case 3:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ObtainCard = $root.proto.CardInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.ObtainCardSit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardsGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CardsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CardsGroup} CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardsGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardsGroup message.
         * @function verify
         * @memberof proto.CardsGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardsGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (message.ObtainCard != null && message.hasOwnProperty("ObtainCard")) {
                var error = $root.proto.CardInfo.verify(message.ObtainCard);
                if (error)
                    return "ObtainCard." + error;
            }
            if (message.ObtainCardSit != null && message.hasOwnProperty("ObtainCardSit"))
                if (!$util.isInteger(message.ObtainCardSit))
                    return "ObtainCardSit: integer expected";
            return null;
        };

        return CardsGroup;
    })();

    proto.MahjongFanNumType = (function() {

        /**
         * Properties of a MahjongFanNumType.
         * @memberof proto
         * @interface IMahjongFanNumType
         * @property {number} FanNum MahjongFanNumType FanNum
         * @property {number} FanType MahjongFanNumType FanType
         * @property {Array.<proto.ICardInfo>|null} [Cards] MahjongFanNumType Cards
         */

        /**
         * Constructs a new MahjongFanNumType.
         * @memberof proto
         * @classdesc Represents a MahjongFanNumType.
         * @implements IMahjongFanNumType
         * @constructor
         * @param {proto.IMahjongFanNumType=} [properties] Properties to set
         */
        function MahjongFanNumType(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongFanNumType FanNum.
         * @member {number} FanNum
         * @memberof proto.MahjongFanNumType
         * @instance
         */
        MahjongFanNumType.prototype.FanNum = 0;

        /**
         * MahjongFanNumType FanType.
         * @member {number} FanType
         * @memberof proto.MahjongFanNumType
         * @instance
         */
        MahjongFanNumType.prototype.FanType = 0;

        /**
         * MahjongFanNumType Cards.
         * @member {Array.<proto.ICardInfo>} Cards
         * @memberof proto.MahjongFanNumType
         * @instance
         */
        MahjongFanNumType.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new MahjongFanNumType instance using the specified properties.
         * @function create
         * @memberof proto.MahjongFanNumType
         * @static
         * @param {proto.IMahjongFanNumType=} [properties] Properties to set
         * @returns {proto.MahjongFanNumType} MahjongFanNumType instance
         */
        MahjongFanNumType.create = function create(properties) {
            return new MahjongFanNumType(properties);
        };

        /**
         * Encodes the specified MahjongFanNumType message. Does not implicitly {@link proto.MahjongFanNumType.verify|verify} messages.
         * @function encode
         * @memberof proto.MahjongFanNumType
         * @static
         * @param {proto.IMahjongFanNumType} message MahjongFanNumType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongFanNumType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FanNum);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FanType);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.proto.CardInfo.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongFanNumType message, length delimited. Does not implicitly {@link proto.MahjongFanNumType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MahjongFanNumType
         * @static
         * @param {proto.IMahjongFanNumType} message MahjongFanNumType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongFanNumType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MahjongFanNumType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MahjongFanNumType} MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongFanNumType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MahjongFanNumType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FanNum = reader.int32();
                    break;
                case 2:
                    message.FanType = reader.int32();
                    break;
                case 3:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FanNum"))
                throw $util.ProtocolError("missing required 'FanNum'", { instance: message });
            if (!message.hasOwnProperty("FanType"))
                throw $util.ProtocolError("missing required 'FanType'", { instance: message });
            return message;
        };

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MahjongFanNumType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MahjongFanNumType} MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongFanNumType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongFanNumType message.
         * @function verify
         * @memberof proto.MahjongFanNumType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongFanNumType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FanNum))
                return "FanNum: integer expected";
            if (!$util.isInteger(message.FanType))
                return "FanType: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        return MahjongFanNumType;
    })();

    proto.TingCard = (function() {

        /**
         * Properties of a TingCard.
         * @memberof proto
         * @interface ITingCard
         * @property {number} FanType TingCard FanType
         * @property {number} CardIndex TingCard CardIndex
         */

        /**
         * Constructs a new TingCard.
         * @memberof proto
         * @classdesc Represents a TingCard.
         * @implements ITingCard
         * @constructor
         * @param {proto.ITingCard=} [properties] Properties to set
         */
        function TingCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TingCard FanType.
         * @member {number} FanType
         * @memberof proto.TingCard
         * @instance
         */
        TingCard.prototype.FanType = 0;

        /**
         * TingCard CardIndex.
         * @member {number} CardIndex
         * @memberof proto.TingCard
         * @instance
         */
        TingCard.prototype.CardIndex = 0;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @function create
         * @memberof proto.TingCard
         * @static
         * @param {proto.ITingCard=} [properties] Properties to set
         * @returns {proto.TingCard} TingCard instance
         */
        TingCard.create = function create(properties) {
            return new TingCard(properties);
        };

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link proto.TingCard.verify|verify} messages.
         * @function encode
         * @memberof proto.TingCard
         * @static
         * @param {proto.ITingCard} message TingCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FanType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardIndex);
            return writer;
        };

        /**
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link proto.TingCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TingCard
         * @static
         * @param {proto.ITingCard} message TingCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TingCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TingCard} TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TingCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FanType = reader.int32();
                    break;
                case 2:
                    message.CardIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FanType"))
                throw $util.ProtocolError("missing required 'FanType'", { instance: message });
            if (!message.hasOwnProperty("CardIndex"))
                throw $util.ProtocolError("missing required 'CardIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a TingCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TingCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TingCard} TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TingCard message.
         * @function verify
         * @memberof proto.TingCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TingCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FanType))
                return "FanType: integer expected";
            if (!$util.isInteger(message.CardIndex))
                return "CardIndex: integer expected";
            return null;
        };

        return TingCard;
    })();

    proto.MahjongCallInfo = (function() {

        /**
         * Properties of a MahjongCallInfo.
         * @memberof proto
         * @interface IMahjongCallInfo
         * @property {number} ObtainCardIndex MahjongCallInfo ObtainCardIndex
         * @property {Array.<proto.ITingCard>|null} [CallCards] MahjongCallInfo CallCards
         */

        /**
         * Constructs a new MahjongCallInfo.
         * @memberof proto
         * @classdesc Represents a MahjongCallInfo.
         * @implements IMahjongCallInfo
         * @constructor
         * @param {proto.IMahjongCallInfo=} [properties] Properties to set
         */
        function MahjongCallInfo(properties) {
            this.CallCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongCallInfo ObtainCardIndex.
         * @member {number} ObtainCardIndex
         * @memberof proto.MahjongCallInfo
         * @instance
         */
        MahjongCallInfo.prototype.ObtainCardIndex = 0;

        /**
         * MahjongCallInfo CallCards.
         * @member {Array.<proto.ITingCard>} CallCards
         * @memberof proto.MahjongCallInfo
         * @instance
         */
        MahjongCallInfo.prototype.CallCards = $util.emptyArray;

        /**
         * Creates a new MahjongCallInfo instance using the specified properties.
         * @function create
         * @memberof proto.MahjongCallInfo
         * @static
         * @param {proto.IMahjongCallInfo=} [properties] Properties to set
         * @returns {proto.MahjongCallInfo} MahjongCallInfo instance
         */
        MahjongCallInfo.create = function create(properties) {
            return new MahjongCallInfo(properties);
        };

        /**
         * Encodes the specified MahjongCallInfo message. Does not implicitly {@link proto.MahjongCallInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.MahjongCallInfo
         * @static
         * @param {proto.IMahjongCallInfo} message MahjongCallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongCallInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ObtainCardIndex);
            if (message.CallCards != null && message.CallCards.length)
                for (var i = 0; i < message.CallCards.length; ++i)
                    $root.proto.TingCard.encode(message.CallCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongCallInfo message, length delimited. Does not implicitly {@link proto.MahjongCallInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MahjongCallInfo
         * @static
         * @param {proto.IMahjongCallInfo} message MahjongCallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongCallInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MahjongCallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MahjongCallInfo} MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongCallInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MahjongCallInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ObtainCardIndex = reader.int32();
                    break;
                case 2:
                    if (!(message.CallCards && message.CallCards.length))
                        message.CallCards = [];
                    message.CallCards.push($root.proto.TingCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ObtainCardIndex"))
                throw $util.ProtocolError("missing required 'ObtainCardIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.MahjongCallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MahjongCallInfo} MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongCallInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongCallInfo message.
         * @function verify
         * @memberof proto.MahjongCallInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongCallInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ObtainCardIndex))
                return "ObtainCardIndex: integer expected";
            if (message.CallCards != null && message.hasOwnProperty("CallCards")) {
                if (!Array.isArray(message.CallCards))
                    return "CallCards: array expected";
                for (var i = 0; i < message.CallCards.length; ++i) {
                    var error = $root.proto.TingCard.verify(message.CallCards[i]);
                    if (error)
                        return "CallCards." + error;
                }
            }
            return null;
        };

        return MahjongCallInfo;
    })();

    proto.PlayerResultInfo = (function() {

        /**
         * Properties of a PlayerResultInfo.
         * @memberof proto
         * @interface IPlayerResultInfo
         * @property {string} username PlayerResultInfo username
         * @property {number|null} [seat] PlayerResultInfo seat
         * @property {number|null} [fantype] PlayerResultInfo fantype
         * @property {number|null} [wintype] PlayerResultInfo wintype
         * @property {number|null} [max_fan] PlayerResultInfo max_fan
         * @property {number|null} [gameCoin] PlayerResultInfo gameCoin
         * @property {number|null} [Coin] PlayerResultInfo Coin
         * @property {number|null} [feeCoin] PlayerResultInfo feeCoin
         * @property {Array.<proto.IScoreDescDetail>|null} [result_list_detail] PlayerResultInfo result_list_detail
         * @property {Array.<proto.ICardsGroup>|null} [handCards] PlayerResultInfo handCards
         */

        /**
         * Constructs a new PlayerResultInfo.
         * @memberof proto
         * @classdesc Represents a PlayerResultInfo.
         * @implements IPlayerResultInfo
         * @constructor
         * @param {proto.IPlayerResultInfo=} [properties] Properties to set
         */
        function PlayerResultInfo(properties) {
            this.result_list_detail = [];
            this.handCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerResultInfo username.
         * @member {string} username
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.username = "";

        /**
         * PlayerResultInfo seat.
         * @member {number} seat
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.seat = 0;

        /**
         * PlayerResultInfo fantype.
         * @member {number} fantype
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.fantype = 0;

        /**
         * PlayerResultInfo wintype.
         * @member {number} wintype
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.wintype = 0;

        /**
         * PlayerResultInfo max_fan.
         * @member {number} max_fan
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.max_fan = 0;

        /**
         * PlayerResultInfo gameCoin.
         * @member {number} gameCoin
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.gameCoin = 0;

        /**
         * PlayerResultInfo Coin.
         * @member {number} Coin
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.Coin = 0;

        /**
         * PlayerResultInfo feeCoin.
         * @member {number} feeCoin
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.feeCoin = 0;

        /**
         * PlayerResultInfo result_list_detail.
         * @member {Array.<proto.IScoreDescDetail>} result_list_detail
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.result_list_detail = $util.emptyArray;

        /**
         * PlayerResultInfo handCards.
         * @member {Array.<proto.ICardsGroup>} handCards
         * @memberof proto.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.handCards = $util.emptyArray;

        /**
         * Creates a new PlayerResultInfo instance using the specified properties.
         * @function create
         * @memberof proto.PlayerResultInfo
         * @static
         * @param {proto.IPlayerResultInfo=} [properties] Properties to set
         * @returns {proto.PlayerResultInfo} PlayerResultInfo instance
         */
        PlayerResultInfo.create = function create(properties) {
            return new PlayerResultInfo(properties);
        };

        /**
         * Encodes the specified PlayerResultInfo message. Does not implicitly {@link proto.PlayerResultInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.PlayerResultInfo
         * @static
         * @param {proto.IPlayerResultInfo} message PlayerResultInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResultInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.seat != null && message.hasOwnProperty("seat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            if (message.fantype != null && message.hasOwnProperty("fantype"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fantype);
            if (message.wintype != null && message.hasOwnProperty("wintype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wintype);
            if (message.max_fan != null && message.hasOwnProperty("max_fan"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.max_fan);
            if (message.gameCoin != null && message.hasOwnProperty("gameCoin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameCoin);
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Coin);
            if (message.feeCoin != null && message.hasOwnProperty("feeCoin"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.feeCoin);
            if (message.result_list_detail != null && message.result_list_detail.length)
                for (var i = 0; i < message.result_list_detail.length; ++i)
                    $root.proto.ScoreDescDetail.encode(message.result_list_detail[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.handCards != null && message.handCards.length)
                for (var i = 0; i < message.handCards.length; ++i)
                    $root.proto.CardsGroup.encode(message.handCards[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerResultInfo message, length delimited. Does not implicitly {@link proto.PlayerResultInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PlayerResultInfo
         * @static
         * @param {proto.IPlayerResultInfo} message PlayerResultInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResultInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PlayerResultInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PlayerResultInfo} PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResultInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PlayerResultInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.seat = reader.int32();
                    break;
                case 3:
                    message.fantype = reader.int32();
                    break;
                case 4:
                    message.wintype = reader.int32();
                    break;
                case 5:
                    message.max_fan = reader.int32();
                    break;
                case 6:
                    message.gameCoin = reader.int32();
                    break;
                case 7:
                    message.Coin = reader.int32();
                    break;
                case 8:
                    message.feeCoin = reader.int32();
                    break;
                case 9:
                    if (!(message.result_list_detail && message.result_list_detail.length))
                        message.result_list_detail = [];
                    message.result_list_detail.push($root.proto.ScoreDescDetail.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    message.handCards.push($root.proto.CardsGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("username"))
                throw $util.ProtocolError("missing required 'username'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PlayerResultInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PlayerResultInfo} PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResultInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerResultInfo message.
         * @function verify
         * @memberof proto.PlayerResultInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerResultInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.fantype != null && message.hasOwnProperty("fantype"))
                if (!$util.isInteger(message.fantype))
                    return "fantype: integer expected";
            if (message.wintype != null && message.hasOwnProperty("wintype"))
                if (!$util.isInteger(message.wintype))
                    return "wintype: integer expected";
            if (message.max_fan != null && message.hasOwnProperty("max_fan"))
                if (!$util.isInteger(message.max_fan))
                    return "max_fan: integer expected";
            if (message.gameCoin != null && message.hasOwnProperty("gameCoin"))
                if (!$util.isInteger(message.gameCoin))
                    return "gameCoin: integer expected";
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (!$util.isInteger(message.Coin))
                    return "Coin: integer expected";
            if (message.feeCoin != null && message.hasOwnProperty("feeCoin"))
                if (!$util.isInteger(message.feeCoin))
                    return "feeCoin: integer expected";
            if (message.result_list_detail != null && message.hasOwnProperty("result_list_detail")) {
                if (!Array.isArray(message.result_list_detail))
                    return "result_list_detail: array expected";
                for (var i = 0; i < message.result_list_detail.length; ++i) {
                    var error = $root.proto.ScoreDescDetail.verify(message.result_list_detail[i]);
                    if (error)
                        return "result_list_detail." + error;
                }
            }
            if (message.handCards != null && message.hasOwnProperty("handCards")) {
                if (!Array.isArray(message.handCards))
                    return "handCards: array expected";
                for (var i = 0; i < message.handCards.length; ++i) {
                    var error = $root.proto.CardsGroup.verify(message.handCards[i]);
                    if (error)
                        return "handCards." + error;
                }
            }
            return null;
        };

        return PlayerResultInfo;
    })();

    proto.ScoreDescDetail = (function() {

        /**
         * Properties of a ScoreDescDetail.
         * @memberof proto
         * @interface IScoreDescDetail
         * @property {number|null} [type] ScoreDescDetail type
         * @property {number|null} [fannum] ScoreDescDetail fannum
         * @property {number|null} [score] ScoreDescDetail score
         * @property {number|null} [obtainsit] ScoreDescDetail obtainsit
         * @property {number|null} [selfseat] ScoreDescDetail selfseat
         * @property {Array.<number>|null} [score_change] ScoreDescDetail score_change
         * @property {Array.<number>|null} [fan_zhong] ScoreDescDetail fan_zhong
         * @property {Array.<number>|null} [fan_num] ScoreDescDetail fan_num
         * @property {number|null} [huCardID] ScoreDescDetail huCardID
         */

        /**
         * Constructs a new ScoreDescDetail.
         * @memberof proto
         * @classdesc Represents a ScoreDescDetail.
         * @implements IScoreDescDetail
         * @constructor
         * @param {proto.IScoreDescDetail=} [properties] Properties to set
         */
        function ScoreDescDetail(properties) {
            this.score_change = [];
            this.fan_zhong = [];
            this.fan_num = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScoreDescDetail type.
         * @member {number} type
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.type = 0;

        /**
         * ScoreDescDetail fannum.
         * @member {number} fannum
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.fannum = 0;

        /**
         * ScoreDescDetail score.
         * @member {number} score
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.score = 0;

        /**
         * ScoreDescDetail obtainsit.
         * @member {number} obtainsit
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.obtainsit = 0;

        /**
         * ScoreDescDetail selfseat.
         * @member {number} selfseat
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.selfseat = 0;

        /**
         * ScoreDescDetail score_change.
         * @member {Array.<number>} score_change
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.score_change = $util.emptyArray;

        /**
         * ScoreDescDetail fan_zhong.
         * @member {Array.<number>} fan_zhong
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.fan_zhong = $util.emptyArray;

        /**
         * ScoreDescDetail fan_num.
         * @member {Array.<number>} fan_num
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.fan_num = $util.emptyArray;

        /**
         * ScoreDescDetail huCardID.
         * @member {number} huCardID
         * @memberof proto.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.huCardID = 0;

        /**
         * Creates a new ScoreDescDetail instance using the specified properties.
         * @function create
         * @memberof proto.ScoreDescDetail
         * @static
         * @param {proto.IScoreDescDetail=} [properties] Properties to set
         * @returns {proto.ScoreDescDetail} ScoreDescDetail instance
         */
        ScoreDescDetail.create = function create(properties) {
            return new ScoreDescDetail(properties);
        };

        /**
         * Encodes the specified ScoreDescDetail message. Does not implicitly {@link proto.ScoreDescDetail.verify|verify} messages.
         * @function encode
         * @memberof proto.ScoreDescDetail
         * @static
         * @param {proto.IScoreDescDetail} message ScoreDescDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreDescDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.fannum != null && message.hasOwnProperty("fannum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fannum);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            if (message.obtainsit != null && message.hasOwnProperty("obtainsit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.obtainsit);
            if (message.selfseat != null && message.hasOwnProperty("selfseat"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.selfseat);
            if (message.score_change != null && message.score_change.length)
                for (var i = 0; i < message.score_change.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score_change[i]);
            if (message.fan_zhong != null && message.fan_zhong.length)
                for (var i = 0; i < message.fan_zhong.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.fan_zhong[i]);
            if (message.fan_num != null && message.fan_num.length)
                for (var i = 0; i < message.fan_num.length; ++i)
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.fan_num[i]);
            if (message.huCardID != null && message.hasOwnProperty("huCardID"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.huCardID);
            return writer;
        };

        /**
         * Encodes the specified ScoreDescDetail message, length delimited. Does not implicitly {@link proto.ScoreDescDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ScoreDescDetail
         * @static
         * @param {proto.IScoreDescDetail} message ScoreDescDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreDescDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ScoreDescDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ScoreDescDetail} ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreDescDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ScoreDescDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.fannum = reader.int32();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                case 4:
                    message.obtainsit = reader.int32();
                    break;
                case 5:
                    message.selfseat = reader.int32();
                    break;
                case 6:
                    if (!(message.score_change && message.score_change.length))
                        message.score_change = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.score_change.push(reader.int32());
                    } else
                        message.score_change.push(reader.int32());
                    break;
                case 7:
                    if (!(message.fan_zhong && message.fan_zhong.length))
                        message.fan_zhong = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.fan_zhong.push(reader.int32());
                    } else
                        message.fan_zhong.push(reader.int32());
                    break;
                case 8:
                    if (!(message.fan_num && message.fan_num.length))
                        message.fan_num = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.fan_num.push(reader.int32());
                    } else
                        message.fan_num.push(reader.int32());
                    break;
                case 9:
                    message.huCardID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ScoreDescDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ScoreDescDetail} ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreDescDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScoreDescDetail message.
         * @function verify
         * @memberof proto.ScoreDescDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScoreDescDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.fannum != null && message.hasOwnProperty("fannum"))
                if (!$util.isInteger(message.fannum))
                    return "fannum: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.obtainsit != null && message.hasOwnProperty("obtainsit"))
                if (!$util.isInteger(message.obtainsit))
                    return "obtainsit: integer expected";
            if (message.selfseat != null && message.hasOwnProperty("selfseat"))
                if (!$util.isInteger(message.selfseat))
                    return "selfseat: integer expected";
            if (message.score_change != null && message.hasOwnProperty("score_change")) {
                if (!Array.isArray(message.score_change))
                    return "score_change: array expected";
                for (var i = 0; i < message.score_change.length; ++i)
                    if (!$util.isInteger(message.score_change[i]))
                        return "score_change: integer[] expected";
            }
            if (message.fan_zhong != null && message.hasOwnProperty("fan_zhong")) {
                if (!Array.isArray(message.fan_zhong))
                    return "fan_zhong: array expected";
                for (var i = 0; i < message.fan_zhong.length; ++i)
                    if (!$util.isInteger(message.fan_zhong[i]))
                        return "fan_zhong: integer[] expected";
            }
            if (message.fan_num != null && message.hasOwnProperty("fan_num")) {
                if (!Array.isArray(message.fan_num))
                    return "fan_num: array expected";
                for (var i = 0; i < message.fan_num.length; ++i)
                    if (!$util.isInteger(message.fan_num[i]))
                        return "fan_num: integer[] expected";
            }
            if (message.huCardID != null && message.hasOwnProperty("huCardID"))
                if (!$util.isInteger(message.huCardID))
                    return "huCardID: integer expected";
            return null;
        };

        return ScoreDescDetail;
    })();

    proto.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof proto
         * @interface IPlayerInfo
         * @property {string|null} [UserName] PlayerInfo UserName
         * @property {string|null} [UsershowName] PlayerInfo UsershowName
         * @property {string|null} [UserImage] PlayerInfo UserImage
         * @property {number|null} [UserSit] PlayerInfo UserSit
         * @property {number|null} [Integral] PlayerInfo Integral
         * @property {number|Long|null} [Coin] PlayerInfo Coin
         * @property {proto.IRank|null} [NowLevel] PlayerInfo NowLevel
         * @property {proto.IRank|null} [HisLevel] PlayerInfo HisLevel
         * @property {number|null} [Stage] PlayerInfo Stage
         * @property {number|null} [Ranking] PlayerInfo Ranking
         * @property {number|null} [WinIntegral] PlayerInfo WinIntegral
         * @property {number|null} [TotalNum] PlayerInfo TotalNum
         * @property {number|null} [ReadyNum] PlayerInfo ReadyNum
         * @property {number|null} [HuNum] PlayerInfo HuNum
         * @property {number|null} [GunNum] PlayerInfo GunNum
         * @property {number|null} [ZimoNum] PlayerInfo ZimoNum
         * @property {number|null} [Sex] PlayerInfo Sex
         * @property {boolean|null} [IsMember] PlayerInfo IsMember
         * @property {proto.IRank|null} [HistoryMaxLevel] PlayerInfo HistoryMaxLevel
         * @property {number|null} [Average_Rank] PlayerInfo Average_Rank
         * @property {number|null} [Openingrate] PlayerInfo Openingrate
         * @property {number|null} [Round2_rank1] PlayerInfo Round2_rank1
         * @property {number|null} [Round2_rank2] PlayerInfo Round2_rank2
         * @property {number|null} [Round2_rank3] PlayerInfo Round2_rank3
         * @property {number|null} [Round2_rank4] PlayerInfo Round2_rank4
         * @property {number|null} [Round4_rank1] PlayerInfo Round4_rank1
         * @property {number|null} [Round4_rank2] PlayerInfo Round4_rank2
         * @property {number|null} [Round4_rank3] PlayerInfo Round4_rank3
         * @property {number|null} [Round4_rank4] PlayerInfo Round4_rank4
         * @property {number|null} [SocietyContributionValue] PlayerInfo SocietyContributionValue
         * @property {number|null} [SocietyPracticeType] PlayerInfo SocietyPracticeType
         * @property {number|null} [SocietyPracticeFirstCount] PlayerInfo SocietyPracticeFirstCount
         * @property {number|null} [SocietyPracticeSecondCount] PlayerInfo SocietyPracticeSecondCount
         * @property {number|null} [SocietyPracticeFourCount] PlayerInfo SocietyPracticeFourCount
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof proto
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {proto.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo UserName.
         * @member {string} UserName
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UserName = "";

        /**
         * PlayerInfo UsershowName.
         * @member {string} UsershowName
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UsershowName = "";

        /**
         * PlayerInfo UserImage.
         * @member {string} UserImage
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UserImage = "";

        /**
         * PlayerInfo UserSit.
         * @member {number} UserSit
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UserSit = 0;

        /**
         * PlayerInfo Integral.
         * @member {number} Integral
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Integral = 0;

        /**
         * PlayerInfo Coin.
         * @member {number|Long} Coin
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo NowLevel.
         * @member {proto.IRank|null|undefined} NowLevel
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.NowLevel = null;

        /**
         * PlayerInfo HisLevel.
         * @member {proto.IRank|null|undefined} HisLevel
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.HisLevel = null;

        /**
         * PlayerInfo Stage.
         * @member {number} Stage
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Stage = 0;

        /**
         * PlayerInfo Ranking.
         * @member {number} Ranking
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Ranking = 0;

        /**
         * PlayerInfo WinIntegral.
         * @member {number} WinIntegral
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.WinIntegral = 0;

        /**
         * PlayerInfo TotalNum.
         * @member {number} TotalNum
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.TotalNum = 0;

        /**
         * PlayerInfo ReadyNum.
         * @member {number} ReadyNum
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ReadyNum = 0;

        /**
         * PlayerInfo HuNum.
         * @member {number} HuNum
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.HuNum = 0;

        /**
         * PlayerInfo GunNum.
         * @member {number} GunNum
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.GunNum = 0;

        /**
         * PlayerInfo ZimoNum.
         * @member {number} ZimoNum
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ZimoNum = 0;

        /**
         * PlayerInfo Sex.
         * @member {number} Sex
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Sex = 0;

        /**
         * PlayerInfo IsMember.
         * @member {boolean} IsMember
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.IsMember = false;

        /**
         * PlayerInfo HistoryMaxLevel.
         * @member {proto.IRank|null|undefined} HistoryMaxLevel
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.HistoryMaxLevel = null;

        /**
         * PlayerInfo Average_Rank.
         * @member {number} Average_Rank
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Average_Rank = 0;

        /**
         * PlayerInfo Openingrate.
         * @member {number} Openingrate
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Openingrate = 0;

        /**
         * PlayerInfo Round2_rank1.
         * @member {number} Round2_rank1
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank1 = 0;

        /**
         * PlayerInfo Round2_rank2.
         * @member {number} Round2_rank2
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank2 = 0;

        /**
         * PlayerInfo Round2_rank3.
         * @member {number} Round2_rank3
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank3 = 0;

        /**
         * PlayerInfo Round2_rank4.
         * @member {number} Round2_rank4
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank4 = 0;

        /**
         * PlayerInfo Round4_rank1.
         * @member {number} Round4_rank1
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank1 = 0;

        /**
         * PlayerInfo Round4_rank2.
         * @member {number} Round4_rank2
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank2 = 0;

        /**
         * PlayerInfo Round4_rank3.
         * @member {number} Round4_rank3
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank3 = 0;

        /**
         * PlayerInfo Round4_rank4.
         * @member {number} Round4_rank4
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank4 = 0;

        /**
         * PlayerInfo SocietyContributionValue.
         * @member {number} SocietyContributionValue
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyContributionValue = 0;

        /**
         * PlayerInfo SocietyPracticeType.
         * @member {number} SocietyPracticeType
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeType = 0;

        /**
         * PlayerInfo SocietyPracticeFirstCount.
         * @member {number} SocietyPracticeFirstCount
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeFirstCount = 0;

        /**
         * PlayerInfo SocietyPracticeSecondCount.
         * @member {number} SocietyPracticeSecondCount
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeSecondCount = 0;

        /**
         * PlayerInfo SocietyPracticeFourCount.
         * @member {number} SocietyPracticeFourCount
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeFourCount = 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo=} [properties] Properties to set
         * @returns {proto.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            if (message.UsershowName != null && message.hasOwnProperty("UsershowName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UsershowName);
            if (message.UserImage != null && message.hasOwnProperty("UserImage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.UserImage);
            if (message.UserSit != null && message.hasOwnProperty("UserSit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.UserSit);
            if (message.Integral != null && message.hasOwnProperty("Integral"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Integral);
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.Coin);
            if (message.NowLevel != null && message.hasOwnProperty("NowLevel"))
                $root.proto.Rank.encode(message.NowLevel, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.HisLevel != null && message.hasOwnProperty("HisLevel"))
                $root.proto.Rank.encode(message.HisLevel, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.Stage != null && message.hasOwnProperty("Stage"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Stage);
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Ranking);
            if (message.WinIntegral != null && message.hasOwnProperty("WinIntegral"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.WinIntegral);
            if (message.TotalNum != null && message.hasOwnProperty("TotalNum"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.TotalNum);
            if (message.ReadyNum != null && message.hasOwnProperty("ReadyNum"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ReadyNum);
            if (message.HuNum != null && message.hasOwnProperty("HuNum"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.HuNum);
            if (message.GunNum != null && message.hasOwnProperty("GunNum"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.GunNum);
            if (message.ZimoNum != null && message.hasOwnProperty("ZimoNum"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.ZimoNum);
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.Sex);
            if (message.IsMember != null && message.hasOwnProperty("IsMember"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.IsMember);
            if (message.HistoryMaxLevel != null && message.hasOwnProperty("HistoryMaxLevel"))
                $root.proto.Rank.encode(message.HistoryMaxLevel, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.Average_Rank != null && message.hasOwnProperty("Average_Rank"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.Average_Rank);
            if (message.Openingrate != null && message.hasOwnProperty("Openingrate"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.Openingrate);
            if (message.Round2_rank1 != null && message.hasOwnProperty("Round2_rank1"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.Round2_rank1);
            if (message.Round2_rank2 != null && message.hasOwnProperty("Round2_rank2"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.Round2_rank2);
            if (message.Round2_rank3 != null && message.hasOwnProperty("Round2_rank3"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.Round2_rank3);
            if (message.Round2_rank4 != null && message.hasOwnProperty("Round2_rank4"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.Round2_rank4);
            if (message.Round4_rank1 != null && message.hasOwnProperty("Round4_rank1"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.Round4_rank1);
            if (message.Round4_rank2 != null && message.hasOwnProperty("Round4_rank2"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.Round4_rank2);
            if (message.Round4_rank3 != null && message.hasOwnProperty("Round4_rank3"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.Round4_rank3);
            if (message.Round4_rank4 != null && message.hasOwnProperty("Round4_rank4"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.Round4_rank4);
            if (message.SocietyContributionValue != null && message.hasOwnProperty("SocietyContributionValue"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.SocietyContributionValue);
            if (message.SocietyPracticeType != null && message.hasOwnProperty("SocietyPracticeType"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.SocietyPracticeType);
            if (message.SocietyPracticeFirstCount != null && message.hasOwnProperty("SocietyPracticeFirstCount"))
                writer.uint32(/* id 32, wireType 0 =*/256).int32(message.SocietyPracticeFirstCount);
            if (message.SocietyPracticeSecondCount != null && message.hasOwnProperty("SocietyPracticeSecondCount"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.SocietyPracticeSecondCount);
            if (message.SocietyPracticeFourCount != null && message.hasOwnProperty("SocietyPracticeFourCount"))
                writer.uint32(/* id 34, wireType 0 =*/272).int32(message.SocietyPracticeFourCount);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserName = reader.string();
                    break;
                case 2:
                    message.UsershowName = reader.string();
                    break;
                case 3:
                    message.UserImage = reader.string();
                    break;
                case 4:
                    message.UserSit = reader.int32();
                    break;
                case 5:
                    message.Integral = reader.int32();
                    break;
                case 6:
                    message.Coin = reader.int64();
                    break;
                case 7:
                    message.NowLevel = $root.proto.Rank.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.HisLevel = $root.proto.Rank.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Stage = reader.int32();
                    break;
                case 10:
                    message.Ranking = reader.int32();
                    break;
                case 11:
                    message.WinIntegral = reader.int32();
                    break;
                case 12:
                    message.TotalNum = reader.int32();
                    break;
                case 13:
                    message.ReadyNum = reader.int32();
                    break;
                case 14:
                    message.HuNum = reader.int32();
                    break;
                case 15:
                    message.GunNum = reader.int32();
                    break;
                case 16:
                    message.ZimoNum = reader.int32();
                    break;
                case 17:
                    message.Sex = reader.int32();
                    break;
                case 18:
                    message.IsMember = reader.bool();
                    break;
                case 19:
                    message.HistoryMaxLevel = $root.proto.Rank.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.Average_Rank = reader.int32();
                    break;
                case 21:
                    message.Openingrate = reader.int32();
                    break;
                case 22:
                    message.Round2_rank1 = reader.int32();
                    break;
                case 23:
                    message.Round2_rank2 = reader.int32();
                    break;
                case 24:
                    message.Round2_rank3 = reader.int32();
                    break;
                case 25:
                    message.Round2_rank4 = reader.int32();
                    break;
                case 26:
                    message.Round4_rank1 = reader.int32();
                    break;
                case 27:
                    message.Round4_rank2 = reader.int32();
                    break;
                case 28:
                    message.Round4_rank3 = reader.int32();
                    break;
                case 29:
                    message.Round4_rank4 = reader.int32();
                    break;
                case 30:
                    message.SocietyContributionValue = reader.int32();
                    break;
                case 31:
                    message.SocietyPracticeType = reader.int32();
                    break;
                case 32:
                    message.SocietyPracticeFirstCount = reader.int32();
                    break;
                case 33:
                    message.SocietyPracticeSecondCount = reader.int32();
                    break;
                case 34:
                    message.SocietyPracticeFourCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof proto.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            if (message.UsershowName != null && message.hasOwnProperty("UsershowName"))
                if (!$util.isString(message.UsershowName))
                    return "UsershowName: string expected";
            if (message.UserImage != null && message.hasOwnProperty("UserImage"))
                if (!$util.isString(message.UserImage))
                    return "UserImage: string expected";
            if (message.UserSit != null && message.hasOwnProperty("UserSit"))
                if (!$util.isInteger(message.UserSit))
                    return "UserSit: integer expected";
            if (message.Integral != null && message.hasOwnProperty("Integral"))
                if (!$util.isInteger(message.Integral))
                    return "Integral: integer expected";
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (!$util.isInteger(message.Coin) && !(message.Coin && $util.isInteger(message.Coin.low) && $util.isInteger(message.Coin.high)))
                    return "Coin: integer|Long expected";
            if (message.NowLevel != null && message.hasOwnProperty("NowLevel")) {
                var error = $root.proto.Rank.verify(message.NowLevel);
                if (error)
                    return "NowLevel." + error;
            }
            if (message.HisLevel != null && message.hasOwnProperty("HisLevel")) {
                var error = $root.proto.Rank.verify(message.HisLevel);
                if (error)
                    return "HisLevel." + error;
            }
            if (message.Stage != null && message.hasOwnProperty("Stage"))
                if (!$util.isInteger(message.Stage))
                    return "Stage: integer expected";
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                if (!$util.isInteger(message.Ranking))
                    return "Ranking: integer expected";
            if (message.WinIntegral != null && message.hasOwnProperty("WinIntegral"))
                if (!$util.isInteger(message.WinIntegral))
                    return "WinIntegral: integer expected";
            if (message.TotalNum != null && message.hasOwnProperty("TotalNum"))
                if (!$util.isInteger(message.TotalNum))
                    return "TotalNum: integer expected";
            if (message.ReadyNum != null && message.hasOwnProperty("ReadyNum"))
                if (!$util.isInteger(message.ReadyNum))
                    return "ReadyNum: integer expected";
            if (message.HuNum != null && message.hasOwnProperty("HuNum"))
                if (!$util.isInteger(message.HuNum))
                    return "HuNum: integer expected";
            if (message.GunNum != null && message.hasOwnProperty("GunNum"))
                if (!$util.isInteger(message.GunNum))
                    return "GunNum: integer expected";
            if (message.ZimoNum != null && message.hasOwnProperty("ZimoNum"))
                if (!$util.isInteger(message.ZimoNum))
                    return "ZimoNum: integer expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.IsMember != null && message.hasOwnProperty("IsMember"))
                if (typeof message.IsMember !== "boolean")
                    return "IsMember: boolean expected";
            if (message.HistoryMaxLevel != null && message.hasOwnProperty("HistoryMaxLevel")) {
                var error = $root.proto.Rank.verify(message.HistoryMaxLevel);
                if (error)
                    return "HistoryMaxLevel." + error;
            }
            if (message.Average_Rank != null && message.hasOwnProperty("Average_Rank"))
                if (!$util.isInteger(message.Average_Rank))
                    return "Average_Rank: integer expected";
            if (message.Openingrate != null && message.hasOwnProperty("Openingrate"))
                if (!$util.isInteger(message.Openingrate))
                    return "Openingrate: integer expected";
            if (message.Round2_rank1 != null && message.hasOwnProperty("Round2_rank1"))
                if (!$util.isInteger(message.Round2_rank1))
                    return "Round2_rank1: integer expected";
            if (message.Round2_rank2 != null && message.hasOwnProperty("Round2_rank2"))
                if (!$util.isInteger(message.Round2_rank2))
                    return "Round2_rank2: integer expected";
            if (message.Round2_rank3 != null && message.hasOwnProperty("Round2_rank3"))
                if (!$util.isInteger(message.Round2_rank3))
                    return "Round2_rank3: integer expected";
            if (message.Round2_rank4 != null && message.hasOwnProperty("Round2_rank4"))
                if (!$util.isInteger(message.Round2_rank4))
                    return "Round2_rank4: integer expected";
            if (message.Round4_rank1 != null && message.hasOwnProperty("Round4_rank1"))
                if (!$util.isInteger(message.Round4_rank1))
                    return "Round4_rank1: integer expected";
            if (message.Round4_rank2 != null && message.hasOwnProperty("Round4_rank2"))
                if (!$util.isInteger(message.Round4_rank2))
                    return "Round4_rank2: integer expected";
            if (message.Round4_rank3 != null && message.hasOwnProperty("Round4_rank3"))
                if (!$util.isInteger(message.Round4_rank3))
                    return "Round4_rank3: integer expected";
            if (message.Round4_rank4 != null && message.hasOwnProperty("Round4_rank4"))
                if (!$util.isInteger(message.Round4_rank4))
                    return "Round4_rank4: integer expected";
            if (message.SocietyContributionValue != null && message.hasOwnProperty("SocietyContributionValue"))
                if (!$util.isInteger(message.SocietyContributionValue))
                    return "SocietyContributionValue: integer expected";
            if (message.SocietyPracticeType != null && message.hasOwnProperty("SocietyPracticeType"))
                if (!$util.isInteger(message.SocietyPracticeType))
                    return "SocietyPracticeType: integer expected";
            if (message.SocietyPracticeFirstCount != null && message.hasOwnProperty("SocietyPracticeFirstCount"))
                if (!$util.isInteger(message.SocietyPracticeFirstCount))
                    return "SocietyPracticeFirstCount: integer expected";
            if (message.SocietyPracticeSecondCount != null && message.hasOwnProperty("SocietyPracticeSecondCount"))
                if (!$util.isInteger(message.SocietyPracticeSecondCount))
                    return "SocietyPracticeSecondCount: integer expected";
            if (message.SocietyPracticeFourCount != null && message.hasOwnProperty("SocietyPracticeFourCount"))
                if (!$util.isInteger(message.SocietyPracticeFourCount))
                    return "SocietyPracticeFourCount: integer expected";
            return null;
        };

        return PlayerInfo;
    })();

    proto.Rank = (function() {

        /**
         * Properties of a Rank.
         * @memberof proto
         * @interface IRank
         * @property {number} duan Rank duan
         * @property {number} xing Rank xing
         */

        /**
         * Constructs a new Rank.
         * @memberof proto
         * @classdesc Represents a Rank.
         * @implements IRank
         * @constructor
         * @param {proto.IRank=} [properties] Properties to set
         */
        function Rank(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rank duan.
         * @member {number} duan
         * @memberof proto.Rank
         * @instance
         */
        Rank.prototype.duan = 0;

        /**
         * Rank xing.
         * @member {number} xing
         * @memberof proto.Rank
         * @instance
         */
        Rank.prototype.xing = 0;

        /**
         * Creates a new Rank instance using the specified properties.
         * @function create
         * @memberof proto.Rank
         * @static
         * @param {proto.IRank=} [properties] Properties to set
         * @returns {proto.Rank} Rank instance
         */
        Rank.create = function create(properties) {
            return new Rank(properties);
        };

        /**
         * Encodes the specified Rank message. Does not implicitly {@link proto.Rank.verify|verify} messages.
         * @function encode
         * @memberof proto.Rank
         * @static
         * @param {proto.IRank} message Rank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.duan);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.xing);
            return writer;
        };

        /**
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link proto.Rank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Rank
         * @static
         * @param {proto.IRank} message Rank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Rank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Rank} Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Rank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.duan = reader.int32();
                    break;
                case 2:
                    message.xing = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("duan"))
                throw $util.ProtocolError("missing required 'duan'", { instance: message });
            if (!message.hasOwnProperty("xing"))
                throw $util.ProtocolError("missing required 'xing'", { instance: message });
            return message;
        };

        /**
         * Decodes a Rank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Rank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Rank} Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rank message.
         * @function verify
         * @memberof proto.Rank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.duan))
                return "duan: integer expected";
            if (!$util.isInteger(message.xing))
                return "xing: integer expected";
            return null;
        };

        return Rank;
    })();

    proto.Seat = (function() {

        /**
         * Properties of a Seat.
         * @memberof proto
         * @interface ISeat
         * @property {number} seatNo Seat seatNo
         * @property {number|Long} userId Seat userId
         * @property {number|null} [type] Seat type
         * @property {number|null} [state] Seat state
         * @property {string|null} [userName] Seat userName
         * @property {string|null} [channel] Seat channel
         * @property {string|null} [proxy] Seat proxy
         * @property {string|null} [group] Seat group
         * @property {string|null} [nickName] Seat nickName
         * @property {string|null} [avatar] Seat avatar
         * @property {number|Long} chips Seat chips
         * @property {number|null} [style] Seat style
         * @property {number|null} [ability] Seat ability
         * @property {Array.<number>|null} [attributes] Seat attributes
         * @property {number|Long|null} [money] Seat money
         * @property {number|Long|null} [curChips] Seat curChips
         * @property {boolean|null} [kickOut] Seat kickOut
         * @property {number|Long|null} [serviceMoney] Seat serviceMoney
         */

        /**
         * Constructs a new Seat.
         * @memberof proto
         * @classdesc Represents a Seat.
         * @implements ISeat
         * @constructor
         * @param {proto.ISeat=} [properties] Properties to set
         */
        function Seat(properties) {
            this.attributes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Seat seatNo.
         * @member {number} seatNo
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.seatNo = 0;

        /**
         * Seat userId.
         * @member {number|Long} userId
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Seat type.
         * @member {number} type
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.type = 0;

        /**
         * Seat state.
         * @member {number} state
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.state = 0;

        /**
         * Seat userName.
         * @member {string} userName
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.userName = "";

        /**
         * Seat channel.
         * @member {string} channel
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.channel = "";

        /**
         * Seat proxy.
         * @member {string} proxy
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.proxy = "";

        /**
         * Seat group.
         * @member {string} group
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.group = "";

        /**
         * Seat nickName.
         * @member {string} nickName
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.nickName = "";

        /**
         * Seat avatar.
         * @member {string} avatar
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.avatar = "";

        /**
         * Seat chips.
         * @member {number|Long} chips
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.chips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Seat style.
         * @member {number} style
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.style = 0;

        /**
         * Seat ability.
         * @member {number} ability
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.ability = 0;

        /**
         * Seat attributes.
         * @member {Array.<number>} attributes
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.attributes = $util.emptyArray;

        /**
         * Seat money.
         * @member {number|Long} money
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Seat curChips.
         * @member {number|Long} curChips
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.curChips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Seat kickOut.
         * @member {boolean} kickOut
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.kickOut = false;

        /**
         * Seat serviceMoney.
         * @member {number|Long} serviceMoney
         * @memberof proto.Seat
         * @instance
         */
        Seat.prototype.serviceMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Seat instance using the specified properties.
         * @function create
         * @memberof proto.Seat
         * @static
         * @param {proto.ISeat=} [properties] Properties to set
         * @returns {proto.Seat} Seat instance
         */
        Seat.create = function create(properties) {
            return new Seat(properties);
        };

        /**
         * Encodes the specified Seat message. Does not implicitly {@link proto.Seat.verify|verify} messages.
         * @function encode
         * @memberof proto.Seat
         * @static
         * @param {proto.ISeat} message Seat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Seat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userName);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.channel);
            if (message.proxy != null && message.hasOwnProperty("proxy"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.proxy);
            if (message.group != null && message.hasOwnProperty("group"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.group);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.nickName);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.avatar);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.chips);
            if (message.style != null && message.hasOwnProperty("style"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.style);
            if (message.ability != null && message.hasOwnProperty("ability"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ability);
            if (message.attributes != null && message.attributes.length)
                for (var i = 0; i < message.attributes.length; ++i)
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.attributes[i]);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.money);
            if (message.curChips != null && message.hasOwnProperty("curChips"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.curChips);
            if (message.kickOut != null && message.hasOwnProperty("kickOut"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.kickOut);
            if (message.serviceMoney != null && message.hasOwnProperty("serviceMoney"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.serviceMoney);
            return writer;
        };

        /**
         * Encodes the specified Seat message, length delimited. Does not implicitly {@link proto.Seat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Seat
         * @static
         * @param {proto.ISeat} message Seat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Seat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Seat message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Seat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Seat} Seat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Seat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Seat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatNo = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.userName = reader.string();
                    break;
                case 6:
                    message.channel = reader.string();
                    break;
                case 7:
                    message.proxy = reader.string();
                    break;
                case 8:
                    message.group = reader.string();
                    break;
                case 9:
                    message.nickName = reader.string();
                    break;
                case 10:
                    message.avatar = reader.string();
                    break;
                case 11:
                    message.chips = reader.int64();
                    break;
                case 12:
                    message.style = reader.int32();
                    break;
                case 13:
                    message.ability = reader.int32();
                    break;
                case 14:
                    if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.attributes.push(reader.int32());
                    } else
                        message.attributes.push(reader.int32());
                    break;
                case 15:
                    message.money = reader.int64();
                    break;
                case 16:
                    message.curChips = reader.int64();
                    break;
                case 17:
                    message.kickOut = reader.bool();
                    break;
                case 18:
                    message.serviceMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("chips"))
                throw $util.ProtocolError("missing required 'chips'", { instance: message });
            return message;
        };

        /**
         * Decodes a Seat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Seat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Seat} Seat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Seat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Seat message.
         * @function verify
         * @memberof proto.Seat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Seat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.proxy != null && message.hasOwnProperty("proxy"))
                if (!$util.isString(message.proxy))
                    return "proxy: string expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isString(message.group))
                    return "group: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (!$util.isInteger(message.chips) && !(message.chips && $util.isInteger(message.chips.low) && $util.isInteger(message.chips.high)))
                return "chips: integer|Long expected";
            if (message.style != null && message.hasOwnProperty("style"))
                if (!$util.isInteger(message.style))
                    return "style: integer expected";
            if (message.ability != null && message.hasOwnProperty("ability"))
                if (!$util.isInteger(message.ability))
                    return "ability: integer expected";
            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                for (var i = 0; i < message.attributes.length; ++i)
                    if (!$util.isInteger(message.attributes[i]))
                        return "attributes: integer[] expected";
            }
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            if (message.curChips != null && message.hasOwnProperty("curChips"))
                if (!$util.isInteger(message.curChips) && !(message.curChips && $util.isInteger(message.curChips.low) && $util.isInteger(message.curChips.high)))
                    return "curChips: integer|Long expected";
            if (message.kickOut != null && message.hasOwnProperty("kickOut"))
                if (typeof message.kickOut !== "boolean")
                    return "kickOut: boolean expected";
            if (message.serviceMoney != null && message.hasOwnProperty("serviceMoney"))
                if (!$util.isInteger(message.serviceMoney) && !(message.serviceMoney && $util.isInteger(message.serviceMoney.low) && $util.isInteger(message.serviceMoney.high)))
                    return "serviceMoney: integer|Long expected";
            return null;
        };

        return Seat;
    })();

    proto.RoomStatus = (function() {

        /**
         * Properties of a RoomStatus.
         * @memberof proto
         * @interface IRoomStatus
         * @property {number} id RoomStatus id
         * @property {number} playerCount RoomStatus playerCount
         */

        /**
         * Constructs a new RoomStatus.
         * @memberof proto
         * @classdesc Represents a RoomStatus.
         * @implements IRoomStatus
         * @constructor
         * @param {proto.IRoomStatus=} [properties] Properties to set
         */
        function RoomStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomStatus id.
         * @member {number} id
         * @memberof proto.RoomStatus
         * @instance
         */
        RoomStatus.prototype.id = 0;

        /**
         * RoomStatus playerCount.
         * @member {number} playerCount
         * @memberof proto.RoomStatus
         * @instance
         */
        RoomStatus.prototype.playerCount = 0;

        /**
         * Creates a new RoomStatus instance using the specified properties.
         * @function create
         * @memberof proto.RoomStatus
         * @static
         * @param {proto.IRoomStatus=} [properties] Properties to set
         * @returns {proto.RoomStatus} RoomStatus instance
         */
        RoomStatus.create = function create(properties) {
            return new RoomStatus(properties);
        };

        /**
         * Encodes the specified RoomStatus message. Does not implicitly {@link proto.RoomStatus.verify|verify} messages.
         * @function encode
         * @memberof proto.RoomStatus
         * @static
         * @param {proto.IRoomStatus} message RoomStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerCount);
            return writer;
        };

        /**
         * Encodes the specified RoomStatus message, length delimited. Does not implicitly {@link proto.RoomStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RoomStatus
         * @static
         * @param {proto.IRoomStatus} message RoomStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomStatus message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RoomStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RoomStatus} RoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RoomStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.playerCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("playerCount"))
                throw $util.ProtocolError("missing required 'playerCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a RoomStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RoomStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RoomStatus} RoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomStatus message.
         * @function verify
         * @memberof proto.RoomStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.playerCount))
                return "playerCount: integer expected";
            return null;
        };

        return RoomStatus;
    })();

    proto.ReqLogin = (function() {

        /**
         * Properties of a ReqLogin.
         * @memberof proto
         * @interface IReqLogin
         * @property {number|null} [certType] ReqLogin certType
         * @property {string|null} [cert] ReqLogin cert
         * @property {string|null} [nickName] ReqLogin nickName
         * @property {string|null} [avatar] ReqLogin avatar
         * @property {number|null} [channelId] ReqLogin channelId
         * @property {Array.<proto.IKVPair>|null} [kvList] ReqLogin kvList
         */

        /**
         * Constructs a new ReqLogin.
         * @memberof proto
         * @classdesc Represents a ReqLogin.
         * @implements IReqLogin
         * @constructor
         * @param {proto.IReqLogin=} [properties] Properties to set
         */
        function ReqLogin(properties) {
            this.kvList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLogin certType.
         * @member {number} certType
         * @memberof proto.ReqLogin
         * @instance
         */
        ReqLogin.prototype.certType = 0;

        /**
         * ReqLogin cert.
         * @member {string} cert
         * @memberof proto.ReqLogin
         * @instance
         */
        ReqLogin.prototype.cert = "";

        /**
         * ReqLogin nickName.
         * @member {string} nickName
         * @memberof proto.ReqLogin
         * @instance
         */
        ReqLogin.prototype.nickName = "";

        /**
         * ReqLogin avatar.
         * @member {string} avatar
         * @memberof proto.ReqLogin
         * @instance
         */
        ReqLogin.prototype.avatar = "";

        /**
         * ReqLogin channelId.
         * @member {number} channelId
         * @memberof proto.ReqLogin
         * @instance
         */
        ReqLogin.prototype.channelId = 0;

        /**
         * ReqLogin kvList.
         * @member {Array.<proto.IKVPair>} kvList
         * @memberof proto.ReqLogin
         * @instance
         */
        ReqLogin.prototype.kvList = $util.emptyArray;

        /**
         * Creates a new ReqLogin instance using the specified properties.
         * @function create
         * @memberof proto.ReqLogin
         * @static
         * @param {proto.IReqLogin=} [properties] Properties to set
         * @returns {proto.ReqLogin} ReqLogin instance
         */
        ReqLogin.create = function create(properties) {
            return new ReqLogin(properties);
        };

        /**
         * Encodes the specified ReqLogin message. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqLogin
         * @static
         * @param {proto.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.certType != null && message.hasOwnProperty("certType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.certType);
            if (message.cert != null && message.hasOwnProperty("cert"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cert);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.channelId);
            if (message.kvList != null && message.kvList.length)
                for (var i = 0; i < message.kvList.length; ++i)
                    $root.proto.KVPair.encode(message.kvList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link proto.ReqLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqLogin
         * @static
         * @param {proto.IReqLogin} message ReqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.certType = reader.int32();
                    break;
                case 2:
                    message.cert = reader.string();
                    break;
                case 3:
                    message.nickName = reader.string();
                    break;
                case 4:
                    message.avatar = reader.string();
                    break;
                case 5:
                    message.channelId = reader.int32();
                    break;
                case 6:
                    if (!(message.kvList && message.kvList.length))
                        message.kvList = [];
                    message.kvList.push($root.proto.KVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqLogin} ReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLogin message.
         * @function verify
         * @memberof proto.ReqLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.certType != null && message.hasOwnProperty("certType"))
                if (!$util.isInteger(message.certType))
                    return "certType: integer expected";
            if (message.cert != null && message.hasOwnProperty("cert"))
                if (!$util.isString(message.cert))
                    return "cert: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isInteger(message.channelId))
                    return "channelId: integer expected";
            if (message.kvList != null && message.hasOwnProperty("kvList")) {
                if (!Array.isArray(message.kvList))
                    return "kvList: array expected";
                for (var i = 0; i < message.kvList.length; ++i) {
                    var error = $root.proto.KVPair.verify(message.kvList[i]);
                    if (error)
                        return "kvList." + error;
                }
            }
            return null;
        };

        return ReqLogin;
    })();

    proto.AckLogin = (function() {

        /**
         * Properties of an AckLogin.
         * @memberof proto
         * @interface IAckLogin
         * @property {number} result AckLogin result
         * @property {number|Long|null} [userId] AckLogin userId
         * @property {string|null} [userName] AckLogin userName
         * @property {string|null} [nickName] AckLogin nickName
         * @property {string|null} [avatar] AckLogin avatar
         * @property {number|Long|null} [goldCoin] AckLogin goldCoin
         * @property {number|Long|null} [diamond] AckLogin diamond
         * @property {number|null} [roomId] AckLogin roomId
         * @property {string|null} [tableId] AckLogin tableId
         * @property {Array.<proto.IKVPair>|null} [properties] AckLogin properties
         */

        /**
         * Constructs a new AckLogin.
         * @memberof proto
         * @classdesc Represents an AckLogin.
         * @implements IAckLogin
         * @constructor
         * @param {proto.IAckLogin=} [properties] Properties to set
         */
        function AckLogin(properties) {
            this.properties = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckLogin result.
         * @member {number} result
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.result = 0;

        /**
         * AckLogin userId.
         * @member {number|Long} userId
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckLogin userName.
         * @member {string} userName
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.userName = "";

        /**
         * AckLogin nickName.
         * @member {string} nickName
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.nickName = "";

        /**
         * AckLogin avatar.
         * @member {string} avatar
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.avatar = "";

        /**
         * AckLogin goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckLogin diamond.
         * @member {number|Long} diamond
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckLogin roomId.
         * @member {number} roomId
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.roomId = 0;

        /**
         * AckLogin tableId.
         * @member {string} tableId
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.tableId = "";

        /**
         * AckLogin properties.
         * @member {Array.<proto.IKVPair>} properties
         * @memberof proto.AckLogin
         * @instance
         */
        AckLogin.prototype.properties = $util.emptyArray;

        /**
         * Creates a new AckLogin instance using the specified properties.
         * @function create
         * @memberof proto.AckLogin
         * @static
         * @param {proto.IAckLogin=} [properties] Properties to set
         * @returns {proto.AckLogin} AckLogin instance
         */
        AckLogin.create = function create(properties) {
            return new AckLogin(properties);
        };

        /**
         * Encodes the specified AckLogin message. Does not implicitly {@link proto.AckLogin.verify|verify} messages.
         * @function encode
         * @memberof proto.AckLogin
         * @static
         * @param {proto.IAckLogin} message AckLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickName);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.goldCoin);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.diamond);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.roomId);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.tableId);
            if (message.properties != null && message.properties.length)
                for (var i = 0; i < message.properties.length; ++i)
                    $root.proto.KVPair.encode(message.properties[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckLogin message, length delimited. Does not implicitly {@link proto.AckLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckLogin
         * @static
         * @param {proto.IAckLogin} message AckLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckLogin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckLogin} AckLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.userName = reader.string();
                    break;
                case 4:
                    message.nickName = reader.string();
                    break;
                case 5:
                    message.avatar = reader.string();
                    break;
                case 6:
                    message.goldCoin = reader.int64();
                    break;
                case 7:
                    message.diamond = reader.int64();
                    break;
                case 8:
                    message.roomId = reader.int32();
                    break;
                case 9:
                    message.tableId = reader.string();
                    break;
                case 10:
                    if (!(message.properties && message.properties.length))
                        message.properties = [];
                    message.properties.push($root.proto.KVPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckLogin} AckLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckLogin message.
         * @function verify
         * @memberof proto.AckLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond) && !(message.diamond && $util.isInteger(message.diamond.low) && $util.isInteger(message.diamond.high)))
                    return "diamond: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                if (!Array.isArray(message.properties))
                    return "properties: array expected";
                for (var i = 0; i < message.properties.length; ++i) {
                    var error = $root.proto.KVPair.verify(message.properties[i]);
                    if (error)
                        return "properties." + error;
                }
            }
            return null;
        };

        return AckLogin;
    })();

    proto.ReqQueryCoin = (function() {

        /**
         * Properties of a ReqQueryCoin.
         * @memberof proto
         * @interface IReqQueryCoin
         * @property {number|Long} userId ReqQueryCoin userId
         */

        /**
         * Constructs a new ReqQueryCoin.
         * @memberof proto
         * @classdesc Represents a ReqQueryCoin.
         * @implements IReqQueryCoin
         * @constructor
         * @param {proto.IReqQueryCoin=} [properties] Properties to set
         */
        function ReqQueryCoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqQueryCoin userId.
         * @member {number|Long} userId
         * @memberof proto.ReqQueryCoin
         * @instance
         */
        ReqQueryCoin.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqQueryCoin instance using the specified properties.
         * @function create
         * @memberof proto.ReqQueryCoin
         * @static
         * @param {proto.IReqQueryCoin=} [properties] Properties to set
         * @returns {proto.ReqQueryCoin} ReqQueryCoin instance
         */
        ReqQueryCoin.create = function create(properties) {
            return new ReqQueryCoin(properties);
        };

        /**
         * Encodes the specified ReqQueryCoin message. Does not implicitly {@link proto.ReqQueryCoin.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqQueryCoin
         * @static
         * @param {proto.IReqQueryCoin} message ReqQueryCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqQueryCoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ReqQueryCoin message, length delimited. Does not implicitly {@link proto.ReqQueryCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqQueryCoin
         * @static
         * @param {proto.IReqQueryCoin} message ReqQueryCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqQueryCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqQueryCoin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqQueryCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqQueryCoin} ReqQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqQueryCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqQueryCoin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqQueryCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqQueryCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqQueryCoin} ReqQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqQueryCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqQueryCoin message.
         * @function verify
         * @memberof proto.ReqQueryCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqQueryCoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            return null;
        };

        return ReqQueryCoin;
    })();

    proto.AckQueryCoin = (function() {

        /**
         * Properties of an AckQueryCoin.
         * @memberof proto
         * @interface IAckQueryCoin
         * @property {number} result AckQueryCoin result
         * @property {number|Long} userId AckQueryCoin userId
         * @property {number|Long|null} [goldCoin] AckQueryCoin goldCoin
         */

        /**
         * Constructs a new AckQueryCoin.
         * @memberof proto
         * @classdesc Represents an AckQueryCoin.
         * @implements IAckQueryCoin
         * @constructor
         * @param {proto.IAckQueryCoin=} [properties] Properties to set
         */
        function AckQueryCoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckQueryCoin result.
         * @member {number} result
         * @memberof proto.AckQueryCoin
         * @instance
         */
        AckQueryCoin.prototype.result = 0;

        /**
         * AckQueryCoin userId.
         * @member {number|Long} userId
         * @memberof proto.AckQueryCoin
         * @instance
         */
        AckQueryCoin.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckQueryCoin goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.AckQueryCoin
         * @instance
         */
        AckQueryCoin.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AckQueryCoin instance using the specified properties.
         * @function create
         * @memberof proto.AckQueryCoin
         * @static
         * @param {proto.IAckQueryCoin=} [properties] Properties to set
         * @returns {proto.AckQueryCoin} AckQueryCoin instance
         */
        AckQueryCoin.create = function create(properties) {
            return new AckQueryCoin(properties);
        };

        /**
         * Encodes the specified AckQueryCoin message. Does not implicitly {@link proto.AckQueryCoin.verify|verify} messages.
         * @function encode
         * @memberof proto.AckQueryCoin
         * @static
         * @param {proto.IAckQueryCoin} message AckQueryCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckQueryCoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.goldCoin);
            return writer;
        };

        /**
         * Encodes the specified AckQueryCoin message, length delimited. Does not implicitly {@link proto.AckQueryCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckQueryCoin
         * @static
         * @param {proto.IAckQueryCoin} message AckQueryCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckQueryCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckQueryCoin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckQueryCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckQueryCoin} AckQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckQueryCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckQueryCoin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.goldCoin = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckQueryCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckQueryCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckQueryCoin} AckQueryCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckQueryCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckQueryCoin message.
         * @function verify
         * @memberof proto.AckQueryCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckQueryCoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            return null;
        };

        return AckQueryCoin;
    })();

    proto.ReqRoomList = (function() {

        /**
         * Properties of a ReqRoomList.
         * @memberof proto
         * @interface IReqRoomList
         * @property {number|Long} userId ReqRoomList userId
         */

        /**
         * Constructs a new ReqRoomList.
         * @memberof proto
         * @classdesc Represents a ReqRoomList.
         * @implements IReqRoomList
         * @constructor
         * @param {proto.IReqRoomList=} [properties] Properties to set
         */
        function ReqRoomList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRoomList userId.
         * @member {number|Long} userId
         * @memberof proto.ReqRoomList
         * @instance
         */
        ReqRoomList.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqRoomList instance using the specified properties.
         * @function create
         * @memberof proto.ReqRoomList
         * @static
         * @param {proto.IReqRoomList=} [properties] Properties to set
         * @returns {proto.ReqRoomList} ReqRoomList instance
         */
        ReqRoomList.create = function create(properties) {
            return new ReqRoomList(properties);
        };

        /**
         * Encodes the specified ReqRoomList message. Does not implicitly {@link proto.ReqRoomList.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqRoomList
         * @static
         * @param {proto.IReqRoomList} message ReqRoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ReqRoomList message, length delimited. Does not implicitly {@link proto.ReqRoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqRoomList
         * @static
         * @param {proto.IReqRoomList} message ReqRoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqRoomList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqRoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqRoomList} ReqRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqRoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqRoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqRoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqRoomList} ReqRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqRoomList message.
         * @function verify
         * @memberof proto.ReqRoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqRoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            return null;
        };

        return ReqRoomList;
    })();

    proto.AckRoomList = (function() {

        /**
         * Properties of an AckRoomList.
         * @memberof proto
         * @interface IAckRoomList
         * @property {number|Long} userId AckRoomList userId
         * @property {Array.<proto.IRoom>|null} [roomList] AckRoomList roomList
         * @property {Array.<proto.IRoomStatus>|null} [status] AckRoomList status
         */

        /**
         * Constructs a new AckRoomList.
         * @memberof proto
         * @classdesc Represents an AckRoomList.
         * @implements IAckRoomList
         * @constructor
         * @param {proto.IAckRoomList=} [properties] Properties to set
         */
        function AckRoomList(properties) {
            this.roomList = [];
            this.status = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckRoomList userId.
         * @member {number|Long} userId
         * @memberof proto.AckRoomList
         * @instance
         */
        AckRoomList.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckRoomList roomList.
         * @member {Array.<proto.IRoom>} roomList
         * @memberof proto.AckRoomList
         * @instance
         */
        AckRoomList.prototype.roomList = $util.emptyArray;

        /**
         * AckRoomList status.
         * @member {Array.<proto.IRoomStatus>} status
         * @memberof proto.AckRoomList
         * @instance
         */
        AckRoomList.prototype.status = $util.emptyArray;

        /**
         * Creates a new AckRoomList instance using the specified properties.
         * @function create
         * @memberof proto.AckRoomList
         * @static
         * @param {proto.IAckRoomList=} [properties] Properties to set
         * @returns {proto.AckRoomList} AckRoomList instance
         */
        AckRoomList.create = function create(properties) {
            return new AckRoomList(properties);
        };

        /**
         * Encodes the specified AckRoomList message. Does not implicitly {@link proto.AckRoomList.verify|verify} messages.
         * @function encode
         * @memberof proto.AckRoomList
         * @static
         * @param {proto.IAckRoomList} message AckRoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckRoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.roomList != null && message.roomList.length)
                for (var i = 0; i < message.roomList.length; ++i)
                    $root.proto.Room.encode(message.roomList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.status != null && message.status.length)
                for (var i = 0; i < message.status.length; ++i)
                    $root.proto.RoomStatus.encode(message.status[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckRoomList message, length delimited. Does not implicitly {@link proto.AckRoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckRoomList
         * @static
         * @param {proto.IAckRoomList} message AckRoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckRoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckRoomList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckRoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckRoomList} AckRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckRoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckRoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    if (!(message.roomList && message.roomList.length))
                        message.roomList = [];
                    message.roomList.push($root.proto.Room.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.status && message.status.length))
                        message.status = [];
                    message.status.push($root.proto.RoomStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckRoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckRoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckRoomList} AckRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckRoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckRoomList message.
         * @function verify
         * @memberof proto.AckRoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckRoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (message.roomList != null && message.hasOwnProperty("roomList")) {
                if (!Array.isArray(message.roomList))
                    return "roomList: array expected";
                for (var i = 0; i < message.roomList.length; ++i) {
                    var error = $root.proto.Room.verify(message.roomList[i]);
                    if (error)
                        return "roomList." + error;
                }
            }
            if (message.status != null && message.hasOwnProperty("status")) {
                if (!Array.isArray(message.status))
                    return "status: array expected";
                for (var i = 0; i < message.status.length; ++i) {
                    var error = $root.proto.RoomStatus.verify(message.status[i]);
                    if (error)
                        return "status." + error;
                }
            }
            return null;
        };

        return AckRoomList;
    })();

    proto.ReqRoomStatus = (function() {

        /**
         * Properties of a ReqRoomStatus.
         * @memberof proto
         * @interface IReqRoomStatus
         * @property {number|Long} userId ReqRoomStatus userId
         */

        /**
         * Constructs a new ReqRoomStatus.
         * @memberof proto
         * @classdesc Represents a ReqRoomStatus.
         * @implements IReqRoomStatus
         * @constructor
         * @param {proto.IReqRoomStatus=} [properties] Properties to set
         */
        function ReqRoomStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqRoomStatus userId.
         * @member {number|Long} userId
         * @memberof proto.ReqRoomStatus
         * @instance
         */
        ReqRoomStatus.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqRoomStatus instance using the specified properties.
         * @function create
         * @memberof proto.ReqRoomStatus
         * @static
         * @param {proto.IReqRoomStatus=} [properties] Properties to set
         * @returns {proto.ReqRoomStatus} ReqRoomStatus instance
         */
        ReqRoomStatus.create = function create(properties) {
            return new ReqRoomStatus(properties);
        };

        /**
         * Encodes the specified ReqRoomStatus message. Does not implicitly {@link proto.ReqRoomStatus.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqRoomStatus
         * @static
         * @param {proto.IReqRoomStatus} message ReqRoomStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRoomStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ReqRoomStatus message, length delimited. Does not implicitly {@link proto.ReqRoomStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqRoomStatus
         * @static
         * @param {proto.IReqRoomStatus} message ReqRoomStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqRoomStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqRoomStatus message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqRoomStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqRoomStatus} ReqRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRoomStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqRoomStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqRoomStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqRoomStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqRoomStatus} ReqRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRoomStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqRoomStatus message.
         * @function verify
         * @memberof proto.ReqRoomStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqRoomStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            return null;
        };

        return ReqRoomStatus;
    })();

    proto.AckRoomStatus = (function() {

        /**
         * Properties of an AckRoomStatus.
         * @memberof proto
         * @interface IAckRoomStatus
         * @property {number|Long} userId AckRoomStatus userId
         * @property {Array.<proto.IRoomStatus>|null} [status] AckRoomStatus status
         */

        /**
         * Constructs a new AckRoomStatus.
         * @memberof proto
         * @classdesc Represents an AckRoomStatus.
         * @implements IAckRoomStatus
         * @constructor
         * @param {proto.IAckRoomStatus=} [properties] Properties to set
         */
        function AckRoomStatus(properties) {
            this.status = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckRoomStatus userId.
         * @member {number|Long} userId
         * @memberof proto.AckRoomStatus
         * @instance
         */
        AckRoomStatus.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckRoomStatus status.
         * @member {Array.<proto.IRoomStatus>} status
         * @memberof proto.AckRoomStatus
         * @instance
         */
        AckRoomStatus.prototype.status = $util.emptyArray;

        /**
         * Creates a new AckRoomStatus instance using the specified properties.
         * @function create
         * @memberof proto.AckRoomStatus
         * @static
         * @param {proto.IAckRoomStatus=} [properties] Properties to set
         * @returns {proto.AckRoomStatus} AckRoomStatus instance
         */
        AckRoomStatus.create = function create(properties) {
            return new AckRoomStatus(properties);
        };

        /**
         * Encodes the specified AckRoomStatus message. Does not implicitly {@link proto.AckRoomStatus.verify|verify} messages.
         * @function encode
         * @memberof proto.AckRoomStatus
         * @static
         * @param {proto.IAckRoomStatus} message AckRoomStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckRoomStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.status != null && message.status.length)
                for (var i = 0; i < message.status.length; ++i)
                    $root.proto.RoomStatus.encode(message.status[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckRoomStatus message, length delimited. Does not implicitly {@link proto.AckRoomStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckRoomStatus
         * @static
         * @param {proto.IAckRoomStatus} message AckRoomStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckRoomStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckRoomStatus message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckRoomStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckRoomStatus} AckRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckRoomStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckRoomStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    if (!(message.status && message.status.length))
                        message.status = [];
                    message.status.push($root.proto.RoomStatus.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckRoomStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckRoomStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckRoomStatus} AckRoomStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckRoomStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckRoomStatus message.
         * @function verify
         * @memberof proto.AckRoomStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckRoomStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status")) {
                if (!Array.isArray(message.status))
                    return "status: array expected";
                for (var i = 0; i < message.status.length; ++i) {
                    var error = $root.proto.RoomStatus.verify(message.status[i]);
                    if (error)
                        return "status." + error;
                }
            }
            return null;
        };

        return AckRoomStatus;
    })();

    proto.ReqAccountAvailable = (function() {

        /**
         * Properties of a ReqAccountAvailable.
         * @memberof proto
         * @interface IReqAccountAvailable
         * @property {number|Long} userId ReqAccountAvailable userId
         */

        /**
         * Constructs a new ReqAccountAvailable.
         * @memberof proto
         * @classdesc Represents a ReqAccountAvailable.
         * @implements IReqAccountAvailable
         * @constructor
         * @param {proto.IReqAccountAvailable=} [properties] Properties to set
         */
        function ReqAccountAvailable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAccountAvailable userId.
         * @member {number|Long} userId
         * @memberof proto.ReqAccountAvailable
         * @instance
         */
        ReqAccountAvailable.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqAccountAvailable instance using the specified properties.
         * @function create
         * @memberof proto.ReqAccountAvailable
         * @static
         * @param {proto.IReqAccountAvailable=} [properties] Properties to set
         * @returns {proto.ReqAccountAvailable} ReqAccountAvailable instance
         */
        ReqAccountAvailable.create = function create(properties) {
            return new ReqAccountAvailable(properties);
        };

        /**
         * Encodes the specified ReqAccountAvailable message. Does not implicitly {@link proto.ReqAccountAvailable.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqAccountAvailable
         * @static
         * @param {proto.IReqAccountAvailable} message ReqAccountAvailable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccountAvailable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified ReqAccountAvailable message, length delimited. Does not implicitly {@link proto.ReqAccountAvailable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqAccountAvailable
         * @static
         * @param {proto.IReqAccountAvailable} message ReqAccountAvailable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAccountAvailable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqAccountAvailable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqAccountAvailable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqAccountAvailable} ReqAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccountAvailable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqAccountAvailable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqAccountAvailable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqAccountAvailable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqAccountAvailable} ReqAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAccountAvailable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqAccountAvailable message.
         * @function verify
         * @memberof proto.ReqAccountAvailable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqAccountAvailable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            return null;
        };

        return ReqAccountAvailable;
    })();

    proto.AckAccountAvailable = (function() {

        /**
         * Properties of an AckAccountAvailable.
         * @memberof proto
         * @interface IAckAccountAvailable
         * @property {number} result AckAccountAvailable result
         * @property {number|Long} userId AckAccountAvailable userId
         * @property {number|null} [available] AckAccountAvailable available
         * @property {number|Long|null} [goldCoin] AckAccountAvailable goldCoin
         */

        /**
         * Constructs a new AckAccountAvailable.
         * @memberof proto
         * @classdesc Represents an AckAccountAvailable.
         * @implements IAckAccountAvailable
         * @constructor
         * @param {proto.IAckAccountAvailable=} [properties] Properties to set
         */
        function AckAccountAvailable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckAccountAvailable result.
         * @member {number} result
         * @memberof proto.AckAccountAvailable
         * @instance
         */
        AckAccountAvailable.prototype.result = 0;

        /**
         * AckAccountAvailable userId.
         * @member {number|Long} userId
         * @memberof proto.AckAccountAvailable
         * @instance
         */
        AckAccountAvailable.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckAccountAvailable available.
         * @member {number} available
         * @memberof proto.AckAccountAvailable
         * @instance
         */
        AckAccountAvailable.prototype.available = 0;

        /**
         * AckAccountAvailable goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.AckAccountAvailable
         * @instance
         */
        AckAccountAvailable.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AckAccountAvailable instance using the specified properties.
         * @function create
         * @memberof proto.AckAccountAvailable
         * @static
         * @param {proto.IAckAccountAvailable=} [properties] Properties to set
         * @returns {proto.AckAccountAvailable} AckAccountAvailable instance
         */
        AckAccountAvailable.create = function create(properties) {
            return new AckAccountAvailable(properties);
        };

        /**
         * Encodes the specified AckAccountAvailable message. Does not implicitly {@link proto.AckAccountAvailable.verify|verify} messages.
         * @function encode
         * @memberof proto.AckAccountAvailable
         * @static
         * @param {proto.IAckAccountAvailable} message AckAccountAvailable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckAccountAvailable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.available != null && message.hasOwnProperty("available"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.available);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.goldCoin);
            return writer;
        };

        /**
         * Encodes the specified AckAccountAvailable message, length delimited. Does not implicitly {@link proto.AckAccountAvailable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckAccountAvailable
         * @static
         * @param {proto.IAckAccountAvailable} message AckAccountAvailable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckAccountAvailable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckAccountAvailable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckAccountAvailable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckAccountAvailable} AckAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckAccountAvailable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckAccountAvailable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.available = reader.int32();
                    break;
                case 4:
                    message.goldCoin = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckAccountAvailable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckAccountAvailable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckAccountAvailable} AckAccountAvailable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckAccountAvailable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckAccountAvailable message.
         * @function verify
         * @memberof proto.AckAccountAvailable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckAccountAvailable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (message.available != null && message.hasOwnProperty("available"))
                if (!$util.isInteger(message.available))
                    return "available: integer expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            return null;
        };

        return AckAccountAvailable;
    })();

    proto.ReqEnterRoom = (function() {

        /**
         * Properties of a ReqEnterRoom.
         * @memberof proto
         * @interface IReqEnterRoom
         * @property {number|Long} userId ReqEnterRoom userId
         * @property {number} roomId ReqEnterRoom roomId
         * @property {number|Long} mapId ReqEnterRoom mapId
         * @property {string|null} [tableId] ReqEnterRoom tableId
         * @property {number|Long|null} [goldCoin] ReqEnterRoom goldCoin
         * @property {number|null} [type] ReqEnterRoom type
         */

        /**
         * Constructs a new ReqEnterRoom.
         * @memberof proto
         * @classdesc Represents a ReqEnterRoom.
         * @implements IReqEnterRoom
         * @constructor
         * @param {proto.IReqEnterRoom=} [properties] Properties to set
         */
        function ReqEnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEnterRoom userId.
         * @member {number|Long} userId
         * @memberof proto.ReqEnterRoom
         * @instance
         */
        ReqEnterRoom.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEnterRoom roomId.
         * @member {number} roomId
         * @memberof proto.ReqEnterRoom
         * @instance
         */
        ReqEnterRoom.prototype.roomId = 0;

        /**
         * ReqEnterRoom mapId.
         * @member {number|Long} mapId
         * @memberof proto.ReqEnterRoom
         * @instance
         */
        ReqEnterRoom.prototype.mapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEnterRoom tableId.
         * @member {string} tableId
         * @memberof proto.ReqEnterRoom
         * @instance
         */
        ReqEnterRoom.prototype.tableId = "";

        /**
         * ReqEnterRoom goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.ReqEnterRoom
         * @instance
         */
        ReqEnterRoom.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEnterRoom type.
         * @member {number} type
         * @memberof proto.ReqEnterRoom
         * @instance
         */
        ReqEnterRoom.prototype.type = 0;

        /**
         * Creates a new ReqEnterRoom instance using the specified properties.
         * @function create
         * @memberof proto.ReqEnterRoom
         * @static
         * @param {proto.IReqEnterRoom=} [properties] Properties to set
         * @returns {proto.ReqEnterRoom} ReqEnterRoom instance
         */
        ReqEnterRoom.create = function create(properties) {
            return new ReqEnterRoom(properties);
        };

        /**
         * Encodes the specified ReqEnterRoom message. Does not implicitly {@link proto.ReqEnterRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqEnterRoom
         * @static
         * @param {proto.IReqEnterRoom} message ReqEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.mapId);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableId);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.goldCoin);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified ReqEnterRoom message, length delimited. Does not implicitly {@link proto.ReqEnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqEnterRoom
         * @static
         * @param {proto.IReqEnterRoom} message ReqEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqEnterRoom} ReqEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqEnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                case 3:
                    message.mapId = reader.int64();
                    break;
                case 4:
                    message.tableId = reader.string();
                    break;
                case 5:
                    message.goldCoin = reader.int64();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("mapId"))
                throw $util.ProtocolError("missing required 'mapId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqEnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqEnterRoom} ReqEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEnterRoom message.
         * @function verify
         * @memberof proto.ReqEnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isInteger(message.mapId) && !(message.mapId && $util.isInteger(message.mapId.low) && $util.isInteger(message.mapId.high)))
                return "mapId: integer|Long expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        return ReqEnterRoom;
    })();

    proto.AckEnterRoom = (function() {

        /**
         * Properties of an AckEnterRoom.
         * @memberof proto
         * @interface IAckEnterRoom
         * @property {number} result AckEnterRoom result
         * @property {number|Long} userId AckEnterRoom userId
         * @property {number} roomId AckEnterRoom roomId
         * @property {string|null} [tableId] AckEnterRoom tableId
         * @property {number|Long|null} [tableMapId] AckEnterRoom tableMapId
         * @property {proto.IServer|null} [server] AckEnterRoom server
         * @property {number|null} [type] AckEnterRoom type
         * @property {number|Long|null} [goldCoin] AckEnterRoom goldCoin
         */

        /**
         * Constructs a new AckEnterRoom.
         * @memberof proto
         * @classdesc Represents an AckEnterRoom.
         * @implements IAckEnterRoom
         * @constructor
         * @param {proto.IAckEnterRoom=} [properties] Properties to set
         */
        function AckEnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckEnterRoom result.
         * @member {number} result
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.result = 0;

        /**
         * AckEnterRoom userId.
         * @member {number|Long} userId
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckEnterRoom roomId.
         * @member {number} roomId
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.roomId = 0;

        /**
         * AckEnterRoom tableId.
         * @member {string} tableId
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.tableId = "";

        /**
         * AckEnterRoom tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckEnterRoom server.
         * @member {proto.IServer|null|undefined} server
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.server = null;

        /**
         * AckEnterRoom type.
         * @member {number} type
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.type = 0;

        /**
         * AckEnterRoom goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.AckEnterRoom
         * @instance
         */
        AckEnterRoom.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AckEnterRoom instance using the specified properties.
         * @function create
         * @memberof proto.AckEnterRoom
         * @static
         * @param {proto.IAckEnterRoom=} [properties] Properties to set
         * @returns {proto.AckEnterRoom} AckEnterRoom instance
         */
        AckEnterRoom.create = function create(properties) {
            return new AckEnterRoom(properties);
        };

        /**
         * Encodes the specified AckEnterRoom message. Does not implicitly {@link proto.AckEnterRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.AckEnterRoom
         * @static
         * @param {proto.IAckEnterRoom} message AckEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableId);
            if (message.tableMapId != null && message.hasOwnProperty("tableMapId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.tableMapId);
            if (message.server != null && message.hasOwnProperty("server"))
                $root.proto.Server.encode(message.server, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.goldCoin);
            return writer;
        };

        /**
         * Encodes the specified AckEnterRoom message, length delimited. Does not implicitly {@link proto.AckEnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckEnterRoom
         * @static
         * @param {proto.IAckEnterRoom} message AckEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckEnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckEnterRoom} AckEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckEnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.roomId = reader.int32();
                    break;
                case 4:
                    message.tableId = reader.string();
                    break;
                case 5:
                    message.tableMapId = reader.int64();
                    break;
                case 6:
                    message.server = $root.proto.Server.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.goldCoin = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckEnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckEnterRoom} AckEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckEnterRoom message.
         * @function verify
         * @memberof proto.AckEnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckEnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.tableMapId != null && message.hasOwnProperty("tableMapId"))
                if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                    return "tableMapId: integer|Long expected";
            if (message.server != null && message.hasOwnProperty("server")) {
                var error = $root.proto.Server.verify(message.server);
                if (error)
                    return "server." + error;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            return null;
        };

        return AckEnterRoom;
    })();

    proto.ReqLeaveRoom = (function() {

        /**
         * Properties of a ReqLeaveRoom.
         * @memberof proto
         * @interface IReqLeaveRoom
         * @property {number|Long} userId ReqLeaveRoom userId
         * @property {number} roomId ReqLeaveRoom roomId
         * @property {number|Long} mapId ReqLeaveRoom mapId
         * @property {string|null} [tableId] ReqLeaveRoom tableId
         */

        /**
         * Constructs a new ReqLeaveRoom.
         * @memberof proto
         * @classdesc Represents a ReqLeaveRoom.
         * @implements IReqLeaveRoom
         * @constructor
         * @param {proto.IReqLeaveRoom=} [properties] Properties to set
         */
        function ReqLeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLeaveRoom userId.
         * @member {number|Long} userId
         * @memberof proto.ReqLeaveRoom
         * @instance
         */
        ReqLeaveRoom.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqLeaveRoom roomId.
         * @member {number} roomId
         * @memberof proto.ReqLeaveRoom
         * @instance
         */
        ReqLeaveRoom.prototype.roomId = 0;

        /**
         * ReqLeaveRoom mapId.
         * @member {number|Long} mapId
         * @memberof proto.ReqLeaveRoom
         * @instance
         */
        ReqLeaveRoom.prototype.mapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqLeaveRoom tableId.
         * @member {string} tableId
         * @memberof proto.ReqLeaveRoom
         * @instance
         */
        ReqLeaveRoom.prototype.tableId = "";

        /**
         * Creates a new ReqLeaveRoom instance using the specified properties.
         * @function create
         * @memberof proto.ReqLeaveRoom
         * @static
         * @param {proto.IReqLeaveRoom=} [properties] Properties to set
         * @returns {proto.ReqLeaveRoom} ReqLeaveRoom instance
         */
        ReqLeaveRoom.create = function create(properties) {
            return new ReqLeaveRoom(properties);
        };

        /**
         * Encodes the specified ReqLeaveRoom message. Does not implicitly {@link proto.ReqLeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqLeaveRoom
         * @static
         * @param {proto.IReqLeaveRoom} message ReqLeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.mapId);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified ReqLeaveRoom message, length delimited. Does not implicitly {@link proto.ReqLeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqLeaveRoom
         * @static
         * @param {proto.IReqLeaveRoom} message ReqLeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqLeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqLeaveRoom} ReqLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqLeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                case 3:
                    message.mapId = reader.int64();
                    break;
                case 4:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("mapId"))
                throw $util.ProtocolError("missing required 'mapId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqLeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqLeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqLeaveRoom} ReqLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLeaveRoom message.
         * @function verify
         * @memberof proto.ReqLeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isInteger(message.mapId) && !(message.mapId && $util.isInteger(message.mapId.low) && $util.isInteger(message.mapId.high)))
                return "mapId: integer|Long expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        return ReqLeaveRoom;
    })();

    proto.AckLeaveRoom = (function() {

        /**
         * Properties of an AckLeaveRoom.
         * @memberof proto
         * @interface IAckLeaveRoom
         * @property {number} result AckLeaveRoom result
         * @property {number|Long} userId AckLeaveRoom userId
         * @property {number} roomId AckLeaveRoom roomId
         */

        /**
         * Constructs a new AckLeaveRoom.
         * @memberof proto
         * @classdesc Represents an AckLeaveRoom.
         * @implements IAckLeaveRoom
         * @constructor
         * @param {proto.IAckLeaveRoom=} [properties] Properties to set
         */
        function AckLeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckLeaveRoom result.
         * @member {number} result
         * @memberof proto.AckLeaveRoom
         * @instance
         */
        AckLeaveRoom.prototype.result = 0;

        /**
         * AckLeaveRoom userId.
         * @member {number|Long} userId
         * @memberof proto.AckLeaveRoom
         * @instance
         */
        AckLeaveRoom.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckLeaveRoom roomId.
         * @member {number} roomId
         * @memberof proto.AckLeaveRoom
         * @instance
         */
        AckLeaveRoom.prototype.roomId = 0;

        /**
         * Creates a new AckLeaveRoom instance using the specified properties.
         * @function create
         * @memberof proto.AckLeaveRoom
         * @static
         * @param {proto.IAckLeaveRoom=} [properties] Properties to set
         * @returns {proto.AckLeaveRoom} AckLeaveRoom instance
         */
        AckLeaveRoom.create = function create(properties) {
            return new AckLeaveRoom(properties);
        };

        /**
         * Encodes the specified AckLeaveRoom message. Does not implicitly {@link proto.AckLeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.AckLeaveRoom
         * @static
         * @param {proto.IAckLeaveRoom} message AckLeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified AckLeaveRoom message, length delimited. Does not implicitly {@link proto.AckLeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckLeaveRoom
         * @static
         * @param {proto.IAckLeaveRoom} message AckLeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckLeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckLeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckLeaveRoom} AckLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckLeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckLeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckLeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckLeaveRoom} AckLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckLeaveRoom message.
         * @function verify
         * @memberof proto.AckLeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckLeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            return null;
        };

        return AckLeaveRoom;
    })();

    proto.NotEnterTable = (function() {

        /**
         * Properties of a NotEnterTable.
         * @memberof proto
         * @interface INotEnterTable
         * @property {number} roomId NotEnterTable roomId
         * @property {string} tableId NotEnterTable tableId
         * @property {number|Long} tableMapId NotEnterTable tableMapId
         */

        /**
         * Constructs a new NotEnterTable.
         * @memberof proto
         * @classdesc Represents a NotEnterTable.
         * @implements INotEnterTable
         * @constructor
         * @param {proto.INotEnterTable=} [properties] Properties to set
         */
        function NotEnterTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotEnterTable roomId.
         * @member {number} roomId
         * @memberof proto.NotEnterTable
         * @instance
         */
        NotEnterTable.prototype.roomId = 0;

        /**
         * NotEnterTable tableId.
         * @member {string} tableId
         * @memberof proto.NotEnterTable
         * @instance
         */
        NotEnterTable.prototype.tableId = "";

        /**
         * NotEnterTable tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.NotEnterTable
         * @instance
         */
        NotEnterTable.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new NotEnterTable instance using the specified properties.
         * @function create
         * @memberof proto.NotEnterTable
         * @static
         * @param {proto.INotEnterTable=} [properties] Properties to set
         * @returns {proto.NotEnterTable} NotEnterTable instance
         */
        NotEnterTable.create = function create(properties) {
            return new NotEnterTable(properties);
        };

        /**
         * Encodes the specified NotEnterTable message. Does not implicitly {@link proto.NotEnterTable.verify|verify} messages.
         * @function encode
         * @memberof proto.NotEnterTable
         * @static
         * @param {proto.INotEnterTable} message NotEnterTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotEnterTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.tableMapId);
            return writer;
        };

        /**
         * Encodes the specified NotEnterTable message, length delimited. Does not implicitly {@link proto.NotEnterTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotEnterTable
         * @static
         * @param {proto.INotEnterTable} message NotEnterTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotEnterTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotEnterTable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotEnterTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotEnterTable} NotEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotEnterTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotEnterTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.tableMapId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roomId"))
                throw $util.ProtocolError("missing required 'roomId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotEnterTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotEnterTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotEnterTable} NotEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotEnterTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotEnterTable message.
         * @function verify
         * @memberof proto.NotEnterTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotEnterTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            return null;
        };

        return NotEnterTable;
    })();

    proto.ResultRecord = (function() {

        /**
         * Properties of a ResultRecord.
         * @memberof proto
         * @interface IResultRecord
         * @property {number} seatNo ResultRecord seatNo
         * @property {string} nickName ResultRecord nickName
         * @property {number|Long|null} [winChips] ResultRecord winChips
         * @property {number|null} [surplusCards] ResultRecord surplusCards
         * @property {number|null} [bombCount] ResultRecord bombCount
         * @property {number|null} [allOff] ResultRecord allOff
         */

        /**
         * Constructs a new ResultRecord.
         * @memberof proto
         * @classdesc Represents a ResultRecord.
         * @implements IResultRecord
         * @constructor
         * @param {proto.IResultRecord=} [properties] Properties to set
         */
        function ResultRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResultRecord seatNo.
         * @member {number} seatNo
         * @memberof proto.ResultRecord
         * @instance
         */
        ResultRecord.prototype.seatNo = 0;

        /**
         * ResultRecord nickName.
         * @member {string} nickName
         * @memberof proto.ResultRecord
         * @instance
         */
        ResultRecord.prototype.nickName = "";

        /**
         * ResultRecord winChips.
         * @member {number|Long} winChips
         * @memberof proto.ResultRecord
         * @instance
         */
        ResultRecord.prototype.winChips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ResultRecord surplusCards.
         * @member {number} surplusCards
         * @memberof proto.ResultRecord
         * @instance
         */
        ResultRecord.prototype.surplusCards = 0;

        /**
         * ResultRecord bombCount.
         * @member {number} bombCount
         * @memberof proto.ResultRecord
         * @instance
         */
        ResultRecord.prototype.bombCount = 0;

        /**
         * ResultRecord allOff.
         * @member {number} allOff
         * @memberof proto.ResultRecord
         * @instance
         */
        ResultRecord.prototype.allOff = 0;

        /**
         * Creates a new ResultRecord instance using the specified properties.
         * @function create
         * @memberof proto.ResultRecord
         * @static
         * @param {proto.IResultRecord=} [properties] Properties to set
         * @returns {proto.ResultRecord} ResultRecord instance
         */
        ResultRecord.create = function create(properties) {
            return new ResultRecord(properties);
        };

        /**
         * Encodes the specified ResultRecord message. Does not implicitly {@link proto.ResultRecord.verify|verify} messages.
         * @function encode
         * @memberof proto.ResultRecord
         * @static
         * @param {proto.IResultRecord} message ResultRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatNo);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.winChips != null && message.hasOwnProperty("winChips"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.winChips);
            if (message.surplusCards != null && message.hasOwnProperty("surplusCards"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.surplusCards);
            if (message.bombCount != null && message.hasOwnProperty("bombCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bombCount);
            if (message.allOff != null && message.hasOwnProperty("allOff"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.allOff);
            return writer;
        };

        /**
         * Encodes the specified ResultRecord message, length delimited. Does not implicitly {@link proto.ResultRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ResultRecord
         * @static
         * @param {proto.IResultRecord} message ResultRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultRecord message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResultRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ResultRecord} ResultRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ResultRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatNo = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.winChips = reader.int64();
                    break;
                case 4:
                    message.surplusCards = reader.int32();
                    break;
                case 5:
                    message.bombCount = reader.int32();
                    break;
                case 6:
                    message.allOff = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            return message;
        };

        /**
         * Decodes a ResultRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ResultRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ResultRecord} ResultRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResultRecord message.
         * @function verify
         * @memberof proto.ResultRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (message.winChips != null && message.hasOwnProperty("winChips"))
                if (!$util.isInteger(message.winChips) && !(message.winChips && $util.isInteger(message.winChips.low) && $util.isInteger(message.winChips.high)))
                    return "winChips: integer|Long expected";
            if (message.surplusCards != null && message.hasOwnProperty("surplusCards"))
                if (!$util.isInteger(message.surplusCards))
                    return "surplusCards: integer expected";
            if (message.bombCount != null && message.hasOwnProperty("bombCount"))
                if (!$util.isInteger(message.bombCount))
                    return "bombCount: integer expected";
            if (message.allOff != null && message.hasOwnProperty("allOff"))
                if (!$util.isInteger(message.allOff))
                    return "allOff: integer expected";
            return null;
        };

        return ResultRecord;
    })();

    proto.ReqPlayingRecord = (function() {

        /**
         * Properties of a ReqPlayingRecord.
         * @memberof proto
         * @interface IReqPlayingRecord
         * @property {number|Long} userId ReqPlayingRecord userId
         * @property {string} roundId ReqPlayingRecord roundId
         * @property {string|null} [orderId] ReqPlayingRecord orderId
         * @property {number|Long} createTime ReqPlayingRecord createTime
         */

        /**
         * Constructs a new ReqPlayingRecord.
         * @memberof proto
         * @classdesc Represents a ReqPlayingRecord.
         * @implements IReqPlayingRecord
         * @constructor
         * @param {proto.IReqPlayingRecord=} [properties] Properties to set
         */
        function ReqPlayingRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqPlayingRecord userId.
         * @member {number|Long} userId
         * @memberof proto.ReqPlayingRecord
         * @instance
         */
        ReqPlayingRecord.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqPlayingRecord roundId.
         * @member {string} roundId
         * @memberof proto.ReqPlayingRecord
         * @instance
         */
        ReqPlayingRecord.prototype.roundId = "";

        /**
         * ReqPlayingRecord orderId.
         * @member {string} orderId
         * @memberof proto.ReqPlayingRecord
         * @instance
         */
        ReqPlayingRecord.prototype.orderId = "";

        /**
         * ReqPlayingRecord createTime.
         * @member {number|Long} createTime
         * @memberof proto.ReqPlayingRecord
         * @instance
         */
        ReqPlayingRecord.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqPlayingRecord instance using the specified properties.
         * @function create
         * @memberof proto.ReqPlayingRecord
         * @static
         * @param {proto.IReqPlayingRecord=} [properties] Properties to set
         * @returns {proto.ReqPlayingRecord} ReqPlayingRecord instance
         */
        ReqPlayingRecord.create = function create(properties) {
            return new ReqPlayingRecord(properties);
        };

        /**
         * Encodes the specified ReqPlayingRecord message. Does not implicitly {@link proto.ReqPlayingRecord.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPlayingRecord
         * @static
         * @param {proto.IReqPlayingRecord} message ReqPlayingRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPlayingRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roundId);
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.orderId);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createTime);
            return writer;
        };

        /**
         * Encodes the specified ReqPlayingRecord message, length delimited. Does not implicitly {@link proto.ReqPlayingRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqPlayingRecord
         * @static
         * @param {proto.IReqPlayingRecord} message ReqPlayingRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPlayingRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqPlayingRecord message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPlayingRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqPlayingRecord} ReqPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayingRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqPlayingRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.roundId = reader.string();
                    break;
                case 3:
                    message.orderId = reader.string();
                    break;
                case 4:
                    message.createTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            if (!message.hasOwnProperty("createTime"))
                throw $util.ProtocolError("missing required 'createTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqPlayingRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqPlayingRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqPlayingRecord} ReqPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayingRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqPlayingRecord message.
         * @function verify
         * @memberof proto.ReqPlayingRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqPlayingRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isString(message.orderId))
                    return "orderId: string expected";
            if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                return "createTime: integer|Long expected";
            return null;
        };

        return ReqPlayingRecord;
    })();

    proto.AckPlayingRecord = (function() {

        /**
         * Properties of an AckPlayingRecord.
         * @memberof proto
         * @interface IAckPlayingRecord
         * @property {number} result AckPlayingRecord result
         * @property {number|Long} userId AckPlayingRecord userId
         * @property {string} roundId AckPlayingRecord roundId
         * @property {number|null} [baseScore] AckPlayingRecord baseScore
         * @property {Array.<proto.IResultRecord>|null} [records] AckPlayingRecord records
         */

        /**
         * Constructs a new AckPlayingRecord.
         * @memberof proto
         * @classdesc Represents an AckPlayingRecord.
         * @implements IAckPlayingRecord
         * @constructor
         * @param {proto.IAckPlayingRecord=} [properties] Properties to set
         */
        function AckPlayingRecord(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPlayingRecord result.
         * @member {number} result
         * @memberof proto.AckPlayingRecord
         * @instance
         */
        AckPlayingRecord.prototype.result = 0;

        /**
         * AckPlayingRecord userId.
         * @member {number|Long} userId
         * @memberof proto.AckPlayingRecord
         * @instance
         */
        AckPlayingRecord.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckPlayingRecord roundId.
         * @member {string} roundId
         * @memberof proto.AckPlayingRecord
         * @instance
         */
        AckPlayingRecord.prototype.roundId = "";

        /**
         * AckPlayingRecord baseScore.
         * @member {number} baseScore
         * @memberof proto.AckPlayingRecord
         * @instance
         */
        AckPlayingRecord.prototype.baseScore = 0;

        /**
         * AckPlayingRecord records.
         * @member {Array.<proto.IResultRecord>} records
         * @memberof proto.AckPlayingRecord
         * @instance
         */
        AckPlayingRecord.prototype.records = $util.emptyArray;

        /**
         * Creates a new AckPlayingRecord instance using the specified properties.
         * @function create
         * @memberof proto.AckPlayingRecord
         * @static
         * @param {proto.IAckPlayingRecord=} [properties] Properties to set
         * @returns {proto.AckPlayingRecord} AckPlayingRecord instance
         */
        AckPlayingRecord.create = function create(properties) {
            return new AckPlayingRecord(properties);
        };

        /**
         * Encodes the specified AckPlayingRecord message. Does not implicitly {@link proto.AckPlayingRecord.verify|verify} messages.
         * @function encode
         * @memberof proto.AckPlayingRecord
         * @static
         * @param {proto.IAckPlayingRecord} message AckPlayingRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayingRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundId);
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.baseScore);
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    $root.proto.ResultRecord.encode(message.records[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckPlayingRecord message, length delimited. Does not implicitly {@link proto.AckPlayingRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckPlayingRecord
         * @static
         * @param {proto.IAckPlayingRecord} message AckPlayingRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayingRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckPlayingRecord message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckPlayingRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckPlayingRecord} AckPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayingRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckPlayingRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.roundId = reader.string();
                    break;
                case 4:
                    message.baseScore = reader.int32();
                    break;
                case 5:
                    if (!(message.records && message.records.length))
                        message.records = [];
                    message.records.push($root.proto.ResultRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckPlayingRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckPlayingRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckPlayingRecord} AckPlayingRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayingRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckPlayingRecord message.
         * @function verify
         * @memberof proto.AckPlayingRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckPlayingRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                if (!$util.isInteger(message.baseScore))
                    return "baseScore: integer expected";
            if (message.records != null && message.hasOwnProperty("records")) {
                if (!Array.isArray(message.records))
                    return "records: array expected";
                for (var i = 0; i < message.records.length; ++i) {
                    var error = $root.proto.ResultRecord.verify(message.records[i]);
                    if (error)
                        return "records." + error;
                }
            }
            return null;
        };

        return AckPlayingRecord;
    })();

    proto.ReqEnterTable = (function() {

        /**
         * Properties of a ReqEnterTable.
         * @memberof proto
         * @interface IReqEnterTable
         * @property {number|Long} userId ReqEnterTable userId
         * @property {string} tableId ReqEnterTable tableId
         * @property {number|Long} tableMapId ReqEnterTable tableMapId
         * @property {number|Long|null} [goldCoin] ReqEnterTable goldCoin
         * @property {number|null} [seatNo] ReqEnterTable seatNo
         */

        /**
         * Constructs a new ReqEnterTable.
         * @memberof proto
         * @classdesc Represents a ReqEnterTable.
         * @implements IReqEnterTable
         * @constructor
         * @param {proto.IReqEnterTable=} [properties] Properties to set
         */
        function ReqEnterTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEnterTable userId.
         * @member {number|Long} userId
         * @memberof proto.ReqEnterTable
         * @instance
         */
        ReqEnterTable.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEnterTable tableId.
         * @member {string} tableId
         * @memberof proto.ReqEnterTable
         * @instance
         */
        ReqEnterTable.prototype.tableId = "";

        /**
         * ReqEnterTable tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqEnterTable
         * @instance
         */
        ReqEnterTable.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEnterTable goldCoin.
         * @member {number|Long} goldCoin
         * @memberof proto.ReqEnterTable
         * @instance
         */
        ReqEnterTable.prototype.goldCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqEnterTable seatNo.
         * @member {number} seatNo
         * @memberof proto.ReqEnterTable
         * @instance
         */
        ReqEnterTable.prototype.seatNo = -1;

        /**
         * Creates a new ReqEnterTable instance using the specified properties.
         * @function create
         * @memberof proto.ReqEnterTable
         * @static
         * @param {proto.IReqEnterTable=} [properties] Properties to set
         * @returns {proto.ReqEnterTable} ReqEnterTable instance
         */
        ReqEnterTable.create = function create(properties) {
            return new ReqEnterTable(properties);
        };

        /**
         * Encodes the specified ReqEnterTable message. Does not implicitly {@link proto.ReqEnterTable.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqEnterTable
         * @static
         * @param {proto.IReqEnterTable} message ReqEnterTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.tableMapId);
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.goldCoin);
            if (message.seatNo != null && message.hasOwnProperty("seatNo"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seatNo);
            return writer;
        };

        /**
         * Encodes the specified ReqEnterTable message, length delimited. Does not implicitly {@link proto.ReqEnterTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqEnterTable
         * @static
         * @param {proto.IReqEnterTable} message ReqEnterTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEnterTable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqEnterTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqEnterTable} ReqEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqEnterTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.tableMapId = reader.int64();
                    break;
                case 4:
                    message.goldCoin = reader.int64();
                    break;
                case 5:
                    message.seatNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqEnterTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqEnterTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqEnterTable} ReqEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEnterTable message.
         * @function verify
         * @memberof proto.ReqEnterTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEnterTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (message.goldCoin != null && message.hasOwnProperty("goldCoin"))
                if (!$util.isInteger(message.goldCoin) && !(message.goldCoin && $util.isInteger(message.goldCoin.low) && $util.isInteger(message.goldCoin.high)))
                    return "goldCoin: integer|Long expected";
            if (message.seatNo != null && message.hasOwnProperty("seatNo"))
                if (!$util.isInteger(message.seatNo))
                    return "seatNo: integer expected";
            return null;
        };

        return ReqEnterTable;
    })();

    proto.AckEnterTable = (function() {

        /**
         * Properties of an AckEnterTable.
         * @memberof proto
         * @interface IAckEnterTable
         * @property {number} result AckEnterTable result
         * @property {number|Long} userId AckEnterTable userId
         * @property {string} tableId AckEnterTable tableId
         * @property {number|null} [seatNo] AckEnterTable seatNo
         * @property {proto.ITable|null} [table] AckEnterTable table
         * @property {number|null} [stage] AckEnterTable stage
         * @property {number|null} [remainingSeconds] AckEnterTable remainingSeconds
         * @property {proto.IReconnectionInfo|null} [info] AckEnterTable info
         * @property {proto.ICountdown|null} [countdown] AckEnterTable countdown
         * @property {string|null} [roundId] AckEnterTable roundId
         */

        /**
         * Constructs a new AckEnterTable.
         * @memberof proto
         * @classdesc Represents an AckEnterTable.
         * @implements IAckEnterTable
         * @constructor
         * @param {proto.IAckEnterTable=} [properties] Properties to set
         */
        function AckEnterTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckEnterTable result.
         * @member {number} result
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.result = 0;

        /**
         * AckEnterTable userId.
         * @member {number|Long} userId
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckEnterTable tableId.
         * @member {string} tableId
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.tableId = "";

        /**
         * AckEnterTable seatNo.
         * @member {number} seatNo
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.seatNo = -1;

        /**
         * AckEnterTable table.
         * @member {proto.ITable|null|undefined} table
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.table = null;

        /**
         * AckEnterTable stage.
         * @member {number} stage
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.stage = 0;

        /**
         * AckEnterTable remainingSeconds.
         * @member {number} remainingSeconds
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.remainingSeconds = 0;

        /**
         * AckEnterTable info.
         * @member {proto.IReconnectionInfo|null|undefined} info
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.info = null;

        /**
         * AckEnterTable countdown.
         * @member {proto.ICountdown|null|undefined} countdown
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.countdown = null;

        /**
         * AckEnterTable roundId.
         * @member {string} roundId
         * @memberof proto.AckEnterTable
         * @instance
         */
        AckEnterTable.prototype.roundId = "";

        /**
         * Creates a new AckEnterTable instance using the specified properties.
         * @function create
         * @memberof proto.AckEnterTable
         * @static
         * @param {proto.IAckEnterTable=} [properties] Properties to set
         * @returns {proto.AckEnterTable} AckEnterTable instance
         */
        AckEnterTable.create = function create(properties) {
            return new AckEnterTable(properties);
        };

        /**
         * Encodes the specified AckEnterTable message. Does not implicitly {@link proto.AckEnterTable.verify|verify} messages.
         * @function encode
         * @memberof proto.AckEnterTable
         * @static
         * @param {proto.IAckEnterTable} message AckEnterTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEnterTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            if (message.seatNo != null && message.hasOwnProperty("seatNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.seatNo);
            if (message.table != null && message.hasOwnProperty("table"))
                $root.proto.Table.encode(message.table, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.stage != null && message.hasOwnProperty("stage"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.stage);
            if (message.remainingSeconds != null && message.hasOwnProperty("remainingSeconds"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.remainingSeconds);
            if (message.info != null && message.hasOwnProperty("info"))
                $root.proto.ReconnectionInfo.encode(message.info, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.countdown != null && message.hasOwnProperty("countdown"))
                $root.proto.Countdown.encode(message.countdown, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.roundId);
            return writer;
        };

        /**
         * Encodes the specified AckEnterTable message, length delimited. Does not implicitly {@link proto.AckEnterTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckEnterTable
         * @static
         * @param {proto.IAckEnterTable} message AckEnterTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEnterTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckEnterTable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckEnterTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckEnterTable} AckEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEnterTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckEnterTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.tableId = reader.string();
                    break;
                case 4:
                    message.seatNo = reader.int32();
                    break;
                case 5:
                    message.table = $root.proto.Table.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.stage = reader.int32();
                    break;
                case 7:
                    message.remainingSeconds = reader.int32();
                    break;
                case 8:
                    message.info = $root.proto.ReconnectionInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.countdown = $root.proto.Countdown.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.roundId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckEnterTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckEnterTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckEnterTable} AckEnterTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEnterTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckEnterTable message.
         * @function verify
         * @memberof proto.AckEnterTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckEnterTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (message.seatNo != null && message.hasOwnProperty("seatNo"))
                if (!$util.isInteger(message.seatNo))
                    return "seatNo: integer expected";
            if (message.table != null && message.hasOwnProperty("table")) {
                var error = $root.proto.Table.verify(message.table);
                if (error)
                    return "table." + error;
            }
            if (message.stage != null && message.hasOwnProperty("stage"))
                if (!$util.isInteger(message.stage))
                    return "stage: integer expected";
            if (message.remainingSeconds != null && message.hasOwnProperty("remainingSeconds"))
                if (!$util.isInteger(message.remainingSeconds))
                    return "remainingSeconds: integer expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.proto.ReconnectionInfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.countdown != null && message.hasOwnProperty("countdown")) {
                var error = $root.proto.Countdown.verify(message.countdown);
                if (error)
                    return "countdown." + error;
            }
            if (message.roundId != null && message.hasOwnProperty("roundId"))
                if (!$util.isString(message.roundId))
                    return "roundId: string expected";
            return null;
        };

        return AckEnterTable;
    })();

    proto.ReconnectionInfo = (function() {

        /**
         * Properties of a ReconnectionInfo.
         * @memberof proto
         * @interface IReconnectionInfo
         * @property {Array.<proto.IReconnectPlayerInfo>|null} [players] ReconnectionInfo players
         * @property {number|null} [currentActionSeat] ReconnectionInfo currentActionSeat
         * @property {proto.INotUserOperation|null} [operations] ReconnectionInfo operations
         * @property {number|null} [banker] ReconnectionInfo banker
         * @property {number|null} [trust] ReconnectionInfo trust
         */

        /**
         * Constructs a new ReconnectionInfo.
         * @memberof proto
         * @classdesc Represents a ReconnectionInfo.
         * @implements IReconnectionInfo
         * @constructor
         * @param {proto.IReconnectionInfo=} [properties] Properties to set
         */
        function ReconnectionInfo(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReconnectionInfo players.
         * @member {Array.<proto.IReconnectPlayerInfo>} players
         * @memberof proto.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.players = $util.emptyArray;

        /**
         * ReconnectionInfo currentActionSeat.
         * @member {number} currentActionSeat
         * @memberof proto.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.currentActionSeat = 0;

        /**
         * ReconnectionInfo operations.
         * @member {proto.INotUserOperation|null|undefined} operations
         * @memberof proto.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.operations = null;

        /**
         * ReconnectionInfo banker.
         * @member {number} banker
         * @memberof proto.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.banker = 0;

        /**
         * ReconnectionInfo trust.
         * @member {number} trust
         * @memberof proto.ReconnectionInfo
         * @instance
         */
        ReconnectionInfo.prototype.trust = 0;

        /**
         * Creates a new ReconnectionInfo instance using the specified properties.
         * @function create
         * @memberof proto.ReconnectionInfo
         * @static
         * @param {proto.IReconnectionInfo=} [properties] Properties to set
         * @returns {proto.ReconnectionInfo} ReconnectionInfo instance
         */
        ReconnectionInfo.create = function create(properties) {
            return new ReconnectionInfo(properties);
        };

        /**
         * Encodes the specified ReconnectionInfo message. Does not implicitly {@link proto.ReconnectionInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.ReconnectionInfo
         * @static
         * @param {proto.IReconnectionInfo} message ReconnectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.proto.ReconnectPlayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.currentActionSeat != null && message.hasOwnProperty("currentActionSeat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currentActionSeat);
            if (message.operations != null && message.hasOwnProperty("operations"))
                $root.proto.NotUserOperation.encode(message.operations, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.banker != null && message.hasOwnProperty("banker"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.banker);
            if (message.trust != null && message.hasOwnProperty("trust"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.trust);
            return writer;
        };

        /**
         * Encodes the specified ReconnectionInfo message, length delimited. Does not implicitly {@link proto.ReconnectionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReconnectionInfo
         * @static
         * @param {proto.IReconnectionInfo} message ReconnectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnectionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReconnectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReconnectionInfo} ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReconnectionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.proto.ReconnectPlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.currentActionSeat = reader.int32();
                    break;
                case 3:
                    message.operations = $root.proto.NotUserOperation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.banker = reader.int32();
                    break;
                case 5:
                    message.trust = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReconnectionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReconnectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReconnectionInfo} ReconnectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnectionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnectionInfo message.
         * @function verify
         * @memberof proto.ReconnectionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnectionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.proto.ReconnectPlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.currentActionSeat != null && message.hasOwnProperty("currentActionSeat"))
                if (!$util.isInteger(message.currentActionSeat))
                    return "currentActionSeat: integer expected";
            if (message.operations != null && message.hasOwnProperty("operations")) {
                var error = $root.proto.NotUserOperation.verify(message.operations);
                if (error)
                    return "operations." + error;
            }
            if (message.banker != null && message.hasOwnProperty("banker"))
                if (!$util.isInteger(message.banker))
                    return "banker: integer expected";
            if (message.trust != null && message.hasOwnProperty("trust"))
                if (!$util.isInteger(message.trust))
                    return "trust: integer expected";
            return null;
        };

        return ReconnectionInfo;
    })();

    proto.ReqLeaveTable = (function() {

        /**
         * Properties of a ReqLeaveTable.
         * @memberof proto
         * @interface IReqLeaveTable
         * @property {number|Long} userId ReqLeaveTable userId
         * @property {string} tableId ReqLeaveTable tableId
         * @property {number|Long} tableMapId ReqLeaveTable tableMapId
         * @property {string} roundId ReqLeaveTable roundId
         */

        /**
         * Constructs a new ReqLeaveTable.
         * @memberof proto
         * @classdesc Represents a ReqLeaveTable.
         * @implements IReqLeaveTable
         * @constructor
         * @param {proto.IReqLeaveTable=} [properties] Properties to set
         */
        function ReqLeaveTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqLeaveTable userId.
         * @member {number|Long} userId
         * @memberof proto.ReqLeaveTable
         * @instance
         */
        ReqLeaveTable.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqLeaveTable tableId.
         * @member {string} tableId
         * @memberof proto.ReqLeaveTable
         * @instance
         */
        ReqLeaveTable.prototype.tableId = "";

        /**
         * ReqLeaveTable tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqLeaveTable
         * @instance
         */
        ReqLeaveTable.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqLeaveTable roundId.
         * @member {string} roundId
         * @memberof proto.ReqLeaveTable
         * @instance
         */
        ReqLeaveTable.prototype.roundId = "";

        /**
         * Creates a new ReqLeaveTable instance using the specified properties.
         * @function create
         * @memberof proto.ReqLeaveTable
         * @static
         * @param {proto.IReqLeaveTable=} [properties] Properties to set
         * @returns {proto.ReqLeaveTable} ReqLeaveTable instance
         */
        ReqLeaveTable.create = function create(properties) {
            return new ReqLeaveTable(properties);
        };

        /**
         * Encodes the specified ReqLeaveTable message. Does not implicitly {@link proto.ReqLeaveTable.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqLeaveTable
         * @static
         * @param {proto.IReqLeaveTable} message ReqLeaveTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.tableMapId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.roundId);
            return writer;
        };

        /**
         * Encodes the specified ReqLeaveTable message, length delimited. Does not implicitly {@link proto.ReqLeaveTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqLeaveTable
         * @static
         * @param {proto.IReqLeaveTable} message ReqLeaveTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqLeaveTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqLeaveTable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqLeaveTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqLeaveTable} ReqLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqLeaveTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.tableMapId = reader.int64();
                    break;
                case 4:
                    message.roundId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqLeaveTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqLeaveTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqLeaveTable} ReqLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqLeaveTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqLeaveTable message.
         * @function verify
         * @memberof proto.ReqLeaveTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqLeaveTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            return null;
        };

        return ReqLeaveTable;
    })();

    proto.AckLeaveTable = (function() {

        /**
         * Properties of an AckLeaveTable.
         * @memberof proto
         * @interface IAckLeaveTable
         * @property {number} result AckLeaveTable result
         * @property {number|Long} userId AckLeaveTable userId
         * @property {string} tableId AckLeaveTable tableId
         */

        /**
         * Constructs a new AckLeaveTable.
         * @memberof proto
         * @classdesc Represents an AckLeaveTable.
         * @implements IAckLeaveTable
         * @constructor
         * @param {proto.IAckLeaveTable=} [properties] Properties to set
         */
        function AckLeaveTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckLeaveTable result.
         * @member {number} result
         * @memberof proto.AckLeaveTable
         * @instance
         */
        AckLeaveTable.prototype.result = 0;

        /**
         * AckLeaveTable userId.
         * @member {number|Long} userId
         * @memberof proto.AckLeaveTable
         * @instance
         */
        AckLeaveTable.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckLeaveTable tableId.
         * @member {string} tableId
         * @memberof proto.AckLeaveTable
         * @instance
         */
        AckLeaveTable.prototype.tableId = "";

        /**
         * Creates a new AckLeaveTable instance using the specified properties.
         * @function create
         * @memberof proto.AckLeaveTable
         * @static
         * @param {proto.IAckLeaveTable=} [properties] Properties to set
         * @returns {proto.AckLeaveTable} AckLeaveTable instance
         */
        AckLeaveTable.create = function create(properties) {
            return new AckLeaveTable(properties);
        };

        /**
         * Encodes the specified AckLeaveTable message. Does not implicitly {@link proto.AckLeaveTable.verify|verify} messages.
         * @function encode
         * @memberof proto.AckLeaveTable
         * @static
         * @param {proto.IAckLeaveTable} message AckLeaveTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLeaveTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified AckLeaveTable message, length delimited. Does not implicitly {@link proto.AckLeaveTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckLeaveTable
         * @static
         * @param {proto.IAckLeaveTable} message AckLeaveTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckLeaveTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckLeaveTable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckLeaveTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckLeaveTable} AckLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLeaveTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckLeaveTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckLeaveTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckLeaveTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckLeaveTable} AckLeaveTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckLeaveTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckLeaveTable message.
         * @function verify
         * @memberof proto.AckLeaveTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckLeaveTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            return null;
        };

        return AckLeaveTable;
    })();

    proto.ReqReady = (function() {

        /**
         * Properties of a ReqReady.
         * @memberof proto
         * @interface IReqReady
         * @property {string} tableId ReqReady tableId
         * @property {number|Long} tableMapId ReqReady tableMapId
         * @property {number} seatNo ReqReady seatNo
         * @property {number|Long} userId ReqReady userId
         * @property {number} status ReqReady status
         * @property {string} roundId ReqReady roundId
         */

        /**
         * Constructs a new ReqReady.
         * @memberof proto
         * @classdesc Represents a ReqReady.
         * @implements IReqReady
         * @constructor
         * @param {proto.IReqReady=} [properties] Properties to set
         */
        function ReqReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqReady tableId.
         * @member {string} tableId
         * @memberof proto.ReqReady
         * @instance
         */
        ReqReady.prototype.tableId = "";

        /**
         * ReqReady tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqReady
         * @instance
         */
        ReqReady.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqReady seatNo.
         * @member {number} seatNo
         * @memberof proto.ReqReady
         * @instance
         */
        ReqReady.prototype.seatNo = 0;

        /**
         * ReqReady userId.
         * @member {number|Long} userId
         * @memberof proto.ReqReady
         * @instance
         */
        ReqReady.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqReady status.
         * @member {number} status
         * @memberof proto.ReqReady
         * @instance
         */
        ReqReady.prototype.status = 0;

        /**
         * ReqReady roundId.
         * @member {string} roundId
         * @memberof proto.ReqReady
         * @instance
         */
        ReqReady.prototype.roundId = "";

        /**
         * Creates a new ReqReady instance using the specified properties.
         * @function create
         * @memberof proto.ReqReady
         * @static
         * @param {proto.IReqReady=} [properties] Properties to set
         * @returns {proto.ReqReady} ReqReady instance
         */
        ReqReady.create = function create(properties) {
            return new ReqReady(properties);
        };

        /**
         * Encodes the specified ReqReady message. Does not implicitly {@link proto.ReqReady.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqReady
         * @static
         * @param {proto.IReqReady} message ReqReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.tableMapId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seatNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.roundId);
            return writer;
        };

        /**
         * Encodes the specified ReqReady message, length delimited. Does not implicitly {@link proto.ReqReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqReady
         * @static
         * @param {proto.IReqReady} message ReqReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqReady message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqReady} ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.tableMapId = reader.int64();
                    break;
                case 3:
                    message.seatNo = reader.int32();
                    break;
                case 4:
                    message.userId = reader.int64();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.roundId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqReady} ReqReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqReady message.
         * @function verify
         * @memberof proto.ReqReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            return null;
        };

        return ReqReady;
    })();

    proto.AckReady = (function() {

        /**
         * Properties of an AckReady.
         * @memberof proto
         * @interface IAckReady
         * @property {number} result AckReady result
         * @property {number} seatNo AckReady seatNo
         * @property {number|Long} userId AckReady userId
         * @property {string} tableId AckReady tableId
         * @property {number} status AckReady status
         */

        /**
         * Constructs a new AckReady.
         * @memberof proto
         * @classdesc Represents an AckReady.
         * @implements IAckReady
         * @constructor
         * @param {proto.IAckReady=} [properties] Properties to set
         */
        function AckReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckReady result.
         * @member {number} result
         * @memberof proto.AckReady
         * @instance
         */
        AckReady.prototype.result = 0;

        /**
         * AckReady seatNo.
         * @member {number} seatNo
         * @memberof proto.AckReady
         * @instance
         */
        AckReady.prototype.seatNo = 0;

        /**
         * AckReady userId.
         * @member {number|Long} userId
         * @memberof proto.AckReady
         * @instance
         */
        AckReady.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckReady tableId.
         * @member {string} tableId
         * @memberof proto.AckReady
         * @instance
         */
        AckReady.prototype.tableId = "";

        /**
         * AckReady status.
         * @member {number} status
         * @memberof proto.AckReady
         * @instance
         */
        AckReady.prototype.status = 0;

        /**
         * Creates a new AckReady instance using the specified properties.
         * @function create
         * @memberof proto.AckReady
         * @static
         * @param {proto.IAckReady=} [properties] Properties to set
         * @returns {proto.AckReady} AckReady instance
         */
        AckReady.create = function create(properties) {
            return new AckReady(properties);
        };

        /**
         * Encodes the specified AckReady message. Does not implicitly {@link proto.AckReady.verify|verify} messages.
         * @function encode
         * @memberof proto.AckReady
         * @static
         * @param {proto.IAckReady} message AckReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seatNo);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableId);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified AckReady message, length delimited. Does not implicitly {@link proto.AckReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckReady
         * @static
         * @param {proto.IAckReady} message AckReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckReady message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckReady} AckReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.seatNo = reader.int32();
                    break;
                case 3:
                    message.userId = reader.int64();
                    break;
                case 4:
                    message.tableId = reader.string();
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("status"))
                throw $util.ProtocolError("missing required 'status'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckReady} AckReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckReady message.
         * @function verify
         * @memberof proto.AckReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.status))
                return "status: integer expected";
            return null;
        };

        return AckReady;
    })();

    proto.NotChairStatus = (function() {

        /**
         * Properties of a NotChairStatus.
         * @memberof proto
         * @interface INotChairStatus
         * @property {string} tableId NotChairStatus tableId
         * @property {number} type NotChairStatus type
         * @property {proto.IChair|null} [chair] NotChairStatus chair
         */

        /**
         * Constructs a new NotChairStatus.
         * @memberof proto
         * @classdesc Represents a NotChairStatus.
         * @implements INotChairStatus
         * @constructor
         * @param {proto.INotChairStatus=} [properties] Properties to set
         */
        function NotChairStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotChairStatus tableId.
         * @member {string} tableId
         * @memberof proto.NotChairStatus
         * @instance
         */
        NotChairStatus.prototype.tableId = "";

        /**
         * NotChairStatus type.
         * @member {number} type
         * @memberof proto.NotChairStatus
         * @instance
         */
        NotChairStatus.prototype.type = 0;

        /**
         * NotChairStatus chair.
         * @member {proto.IChair|null|undefined} chair
         * @memberof proto.NotChairStatus
         * @instance
         */
        NotChairStatus.prototype.chair = null;

        /**
         * Creates a new NotChairStatus instance using the specified properties.
         * @function create
         * @memberof proto.NotChairStatus
         * @static
         * @param {proto.INotChairStatus=} [properties] Properties to set
         * @returns {proto.NotChairStatus} NotChairStatus instance
         */
        NotChairStatus.create = function create(properties) {
            return new NotChairStatus(properties);
        };

        /**
         * Encodes the specified NotChairStatus message. Does not implicitly {@link proto.NotChairStatus.verify|verify} messages.
         * @function encode
         * @memberof proto.NotChairStatus
         * @static
         * @param {proto.INotChairStatus} message NotChairStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotChairStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.chair != null && message.hasOwnProperty("chair"))
                $root.proto.Chair.encode(message.chair, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotChairStatus message, length delimited. Does not implicitly {@link proto.NotChairStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotChairStatus
         * @static
         * @param {proto.INotChairStatus} message NotChairStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotChairStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotChairStatus message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotChairStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotChairStatus} NotChairStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotChairStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotChairStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.chair = $root.proto.Chair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotChairStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotChairStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotChairStatus} NotChairStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotChairStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotChairStatus message.
         * @function verify
         * @memberof proto.NotChairStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotChairStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.chair != null && message.hasOwnProperty("chair")) {
                var error = $root.proto.Chair.verify(message.chair);
                if (error)
                    return "chair." + error;
            }
            return null;
        };

        return NotChairStatus;
    })();

    proto.NotCards = (function() {

        /**
         * Properties of a NotCards.
         * @memberof proto
         * @interface INotCards
         * @property {proto.IHandCards} HandCards NotCards HandCards
         * @property {number} banker NotCards banker
         * @property {number} leftCardsNum NotCards leftCardsNum
         * @property {number} stage NotCards stage
         */

        /**
         * Constructs a new NotCards.
         * @memberof proto
         * @classdesc Represents a NotCards.
         * @implements INotCards
         * @constructor
         * @param {proto.INotCards=} [properties] Properties to set
         */
        function NotCards(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotCards HandCards.
         * @member {proto.IHandCards} HandCards
         * @memberof proto.NotCards
         * @instance
         */
        NotCards.prototype.HandCards = null;

        /**
         * NotCards banker.
         * @member {number} banker
         * @memberof proto.NotCards
         * @instance
         */
        NotCards.prototype.banker = 0;

        /**
         * NotCards leftCardsNum.
         * @member {number} leftCardsNum
         * @memberof proto.NotCards
         * @instance
         */
        NotCards.prototype.leftCardsNum = 0;

        /**
         * NotCards stage.
         * @member {number} stage
         * @memberof proto.NotCards
         * @instance
         */
        NotCards.prototype.stage = 0;

        /**
         * Creates a new NotCards instance using the specified properties.
         * @function create
         * @memberof proto.NotCards
         * @static
         * @param {proto.INotCards=} [properties] Properties to set
         * @returns {proto.NotCards} NotCards instance
         */
        NotCards.create = function create(properties) {
            return new NotCards(properties);
        };

        /**
         * Encodes the specified NotCards message. Does not implicitly {@link proto.NotCards.verify|verify} messages.
         * @function encode
         * @memberof proto.NotCards
         * @static
         * @param {proto.INotCards} message NotCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.proto.HandCards.encode(message.HandCards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.banker);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.leftCardsNum);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.stage);
            return writer;
        };

        /**
         * Encodes the specified NotCards message, length delimited. Does not implicitly {@link proto.NotCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotCards
         * @static
         * @param {proto.INotCards} message NotCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotCards message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotCards} NotCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HandCards = $root.proto.HandCards.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.banker = reader.int32();
                    break;
                case 3:
                    message.leftCardsNum = reader.int32();
                    break;
                case 4:
                    message.stage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("HandCards"))
                throw $util.ProtocolError("missing required 'HandCards'", { instance: message });
            if (!message.hasOwnProperty("banker"))
                throw $util.ProtocolError("missing required 'banker'", { instance: message });
            if (!message.hasOwnProperty("leftCardsNum"))
                throw $util.ProtocolError("missing required 'leftCardsNum'", { instance: message });
            if (!message.hasOwnProperty("stage"))
                throw $util.ProtocolError("missing required 'stage'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotCards} NotCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotCards message.
         * @function verify
         * @memberof proto.NotCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.proto.HandCards.verify(message.HandCards);
                if (error)
                    return "HandCards." + error;
            }
            if (!$util.isInteger(message.banker))
                return "banker: integer expected";
            if (!$util.isInteger(message.leftCardsNum))
                return "leftCardsNum: integer expected";
            if (!$util.isInteger(message.stage))
                return "stage: integer expected";
            return null;
        };

        return NotCards;
    })();

    proto.NotBuhua = (function() {

        /**
         * Properties of a NotBuhua.
         * @memberof proto
         * @interface INotBuhua
         * @property {number} seatNo NotBuhua seatNo
         * @property {Array.<number>|null} [huapai] NotBuhua huapai
         * @property {number} leftCardsNum NotBuhua leftCardsNum
         * @property {Array.<number>|null} [bupai] NotBuhua bupai
         */

        /**
         * Constructs a new NotBuhua.
         * @memberof proto
         * @classdesc Represents a NotBuhua.
         * @implements INotBuhua
         * @constructor
         * @param {proto.INotBuhua=} [properties] Properties to set
         */
        function NotBuhua(properties) {
            this.huapai = [];
            this.bupai = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotBuhua seatNo.
         * @member {number} seatNo
         * @memberof proto.NotBuhua
         * @instance
         */
        NotBuhua.prototype.seatNo = 0;

        /**
         * NotBuhua huapai.
         * @member {Array.<number>} huapai
         * @memberof proto.NotBuhua
         * @instance
         */
        NotBuhua.prototype.huapai = $util.emptyArray;

        /**
         * NotBuhua leftCardsNum.
         * @member {number} leftCardsNum
         * @memberof proto.NotBuhua
         * @instance
         */
        NotBuhua.prototype.leftCardsNum = 0;

        /**
         * NotBuhua bupai.
         * @member {Array.<number>} bupai
         * @memberof proto.NotBuhua
         * @instance
         */
        NotBuhua.prototype.bupai = $util.emptyArray;

        /**
         * Creates a new NotBuhua instance using the specified properties.
         * @function create
         * @memberof proto.NotBuhua
         * @static
         * @param {proto.INotBuhua=} [properties] Properties to set
         * @returns {proto.NotBuhua} NotBuhua instance
         */
        NotBuhua.create = function create(properties) {
            return new NotBuhua(properties);
        };

        /**
         * Encodes the specified NotBuhua message. Does not implicitly {@link proto.NotBuhua.verify|verify} messages.
         * @function encode
         * @memberof proto.NotBuhua
         * @static
         * @param {proto.INotBuhua} message NotBuhua message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotBuhua.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seatNo);
            if (message.huapai != null && message.huapai.length)
                for (var i = 0; i < message.huapai.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.huapai[i]);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.leftCardsNum);
            if (message.bupai != null && message.bupai.length)
                for (var i = 0; i < message.bupai.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.bupai[i]);
            return writer;
        };

        /**
         * Encodes the specified NotBuhua message, length delimited. Does not implicitly {@link proto.NotBuhua.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotBuhua
         * @static
         * @param {proto.INotBuhua} message NotBuhua message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotBuhua.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotBuhua message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotBuhua
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotBuhua} NotBuhua
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotBuhua.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotBuhua();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seatNo = reader.int32();
                    break;
                case 2:
                    if (!(message.huapai && message.huapai.length))
                        message.huapai = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.huapai.push(reader.int32());
                    } else
                        message.huapai.push(reader.int32());
                    break;
                case 3:
                    message.leftCardsNum = reader.int32();
                    break;
                case 4:
                    if (!(message.bupai && message.bupai.length))
                        message.bupai = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.bupai.push(reader.int32());
                    } else
                        message.bupai.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("leftCardsNum"))
                throw $util.ProtocolError("missing required 'leftCardsNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotBuhua message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotBuhua
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotBuhua} NotBuhua
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotBuhua.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotBuhua message.
         * @function verify
         * @memberof proto.NotBuhua
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotBuhua.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (message.huapai != null && message.hasOwnProperty("huapai")) {
                if (!Array.isArray(message.huapai))
                    return "huapai: array expected";
                for (var i = 0; i < message.huapai.length; ++i)
                    if (!$util.isInteger(message.huapai[i]))
                        return "huapai: integer[] expected";
            }
            if (!$util.isInteger(message.leftCardsNum))
                return "leftCardsNum: integer expected";
            if (message.bupai != null && message.hasOwnProperty("bupai")) {
                if (!Array.isArray(message.bupai))
                    return "bupai: array expected";
                for (var i = 0; i < message.bupai.length; ++i)
                    if (!$util.isInteger(message.bupai[i]))
                        return "bupai: integer[] expected";
            }
            return null;
        };

        return NotBuhua;
    })();

    proto.NotZaNiao = (function() {

        /**
         * Properties of a NotZaNiao.
         * @memberof proto
         * @interface INotZaNiao
         * @property {number} stage NotZaNiao stage
         * @property {proto.ICardInfo} result NotZaNiao result
         */

        /**
         * Constructs a new NotZaNiao.
         * @memberof proto
         * @classdesc Represents a NotZaNiao.
         * @implements INotZaNiao
         * @constructor
         * @param {proto.INotZaNiao=} [properties] Properties to set
         */
        function NotZaNiao(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotZaNiao stage.
         * @member {number} stage
         * @memberof proto.NotZaNiao
         * @instance
         */
        NotZaNiao.prototype.stage = 0;

        /**
         * NotZaNiao result.
         * @member {proto.ICardInfo} result
         * @memberof proto.NotZaNiao
         * @instance
         */
        NotZaNiao.prototype.result = null;

        /**
         * Creates a new NotZaNiao instance using the specified properties.
         * @function create
         * @memberof proto.NotZaNiao
         * @static
         * @param {proto.INotZaNiao=} [properties] Properties to set
         * @returns {proto.NotZaNiao} NotZaNiao instance
         */
        NotZaNiao.create = function create(properties) {
            return new NotZaNiao(properties);
        };

        /**
         * Encodes the specified NotZaNiao message. Does not implicitly {@link proto.NotZaNiao.verify|verify} messages.
         * @function encode
         * @memberof proto.NotZaNiao
         * @static
         * @param {proto.INotZaNiao} message NotZaNiao message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotZaNiao.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stage);
            $root.proto.CardInfo.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotZaNiao message, length delimited. Does not implicitly {@link proto.NotZaNiao.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotZaNiao
         * @static
         * @param {proto.INotZaNiao} message NotZaNiao message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotZaNiao.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotZaNiao message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotZaNiao
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotZaNiao} NotZaNiao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotZaNiao.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotZaNiao();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stage = reader.int32();
                    break;
                case 2:
                    message.result = $root.proto.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stage"))
                throw $util.ProtocolError("missing required 'stage'", { instance: message });
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotZaNiao message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotZaNiao
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotZaNiao} NotZaNiao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotZaNiao.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotZaNiao message.
         * @function verify
         * @memberof proto.NotZaNiao
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotZaNiao.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.stage))
                return "stage: integer expected";
            {
                var error = $root.proto.CardInfo.verify(message.result);
                if (error)
                    return "result." + error;
            }
            return null;
        };

        return NotZaNiao;
    })();

    proto.NotBuhuaEnds = (function() {

        /**
         * Properties of a NotBuhuaEnds.
         * @memberof proto
         * @interface INotBuhuaEnds
         * @property {number} stage NotBuhuaEnds stage
         */

        /**
         * Constructs a new NotBuhuaEnds.
         * @memberof proto
         * @classdesc Represents a NotBuhuaEnds.
         * @implements INotBuhuaEnds
         * @constructor
         * @param {proto.INotBuhuaEnds=} [properties] Properties to set
         */
        function NotBuhuaEnds(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotBuhuaEnds stage.
         * @member {number} stage
         * @memberof proto.NotBuhuaEnds
         * @instance
         */
        NotBuhuaEnds.prototype.stage = 0;

        /**
         * Creates a new NotBuhuaEnds instance using the specified properties.
         * @function create
         * @memberof proto.NotBuhuaEnds
         * @static
         * @param {proto.INotBuhuaEnds=} [properties] Properties to set
         * @returns {proto.NotBuhuaEnds} NotBuhuaEnds instance
         */
        NotBuhuaEnds.create = function create(properties) {
            return new NotBuhuaEnds(properties);
        };

        /**
         * Encodes the specified NotBuhuaEnds message. Does not implicitly {@link proto.NotBuhuaEnds.verify|verify} messages.
         * @function encode
         * @memberof proto.NotBuhuaEnds
         * @static
         * @param {proto.INotBuhuaEnds} message NotBuhuaEnds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotBuhuaEnds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stage);
            return writer;
        };

        /**
         * Encodes the specified NotBuhuaEnds message, length delimited. Does not implicitly {@link proto.NotBuhuaEnds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotBuhuaEnds
         * @static
         * @param {proto.INotBuhuaEnds} message NotBuhuaEnds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotBuhuaEnds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotBuhuaEnds message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotBuhuaEnds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotBuhuaEnds} NotBuhuaEnds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotBuhuaEnds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotBuhuaEnds();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stage"))
                throw $util.ProtocolError("missing required 'stage'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotBuhuaEnds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotBuhuaEnds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotBuhuaEnds} NotBuhuaEnds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotBuhuaEnds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotBuhuaEnds message.
         * @function verify
         * @memberof proto.NotBuhuaEnds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotBuhuaEnds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.stage))
                return "stage: integer expected";
            return null;
        };

        return NotBuhuaEnds;
    })();

    proto.OperationType = (function() {

        /**
         * Properties of an OperationType.
         * @memberof proto
         * @interface IOperationType
         * @property {number} CATCH OperationType CATCH
         * @property {number} PLAY OperationType PLAY
         * @property {number} BUHUA OperationType BUHUA
         * @property {number} CHI OperationType CHI
         * @property {number} PENG OperationType PENG
         * @property {number} GANG OperationType GANG
         * @property {number} ANGANG OperationType ANGANG
         * @property {number} HU OperationType HU
         * @property {number} BUHUAMO OperationType BUHUAMO
         * @property {number} KANGMO OperationType KANGMO
         * @property {number} NO_OPERATION OperationType NO_OPERATION
         * @property {number} HANDCARDS OperationType HANDCARDS
         * @property {number} BUGANG OperationType BUGANG
         * @property {number} MOPLAY OperationType MOPLAY
         */

        /**
         * Constructs a new OperationType.
         * @memberof proto
         * @classdesc Represents an OperationType.
         * @implements IOperationType
         * @constructor
         * @param {proto.IOperationType=} [properties] Properties to set
         */
        function OperationType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperationType CATCH.
         * @member {number} CATCH
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.CATCH = 0;

        /**
         * OperationType PLAY.
         * @member {number} PLAY
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.PLAY = 0;

        /**
         * OperationType BUHUA.
         * @member {number} BUHUA
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.BUHUA = 0;

        /**
         * OperationType CHI.
         * @member {number} CHI
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.CHI = 0;

        /**
         * OperationType PENG.
         * @member {number} PENG
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.PENG = 0;

        /**
         * OperationType GANG.
         * @member {number} GANG
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.GANG = 0;

        /**
         * OperationType ANGANG.
         * @member {number} ANGANG
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.ANGANG = 0;

        /**
         * OperationType HU.
         * @member {number} HU
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.HU = 0;

        /**
         * OperationType BUHUAMO.
         * @member {number} BUHUAMO
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.BUHUAMO = 0;

        /**
         * OperationType KANGMO.
         * @member {number} KANGMO
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.KANGMO = 0;

        /**
         * OperationType NO_OPERATION.
         * @member {number} NO_OPERATION
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.NO_OPERATION = 0;

        /**
         * OperationType HANDCARDS.
         * @member {number} HANDCARDS
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.HANDCARDS = 0;

        /**
         * OperationType BUGANG.
         * @member {number} BUGANG
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.BUGANG = 0;

        /**
         * OperationType MOPLAY.
         * @member {number} MOPLAY
         * @memberof proto.OperationType
         * @instance
         */
        OperationType.prototype.MOPLAY = 0;

        /**
         * Creates a new OperationType instance using the specified properties.
         * @function create
         * @memberof proto.OperationType
         * @static
         * @param {proto.IOperationType=} [properties] Properties to set
         * @returns {proto.OperationType} OperationType instance
         */
        OperationType.create = function create(properties) {
            return new OperationType(properties);
        };

        /**
         * Encodes the specified OperationType message. Does not implicitly {@link proto.OperationType.verify|verify} messages.
         * @function encode
         * @memberof proto.OperationType
         * @static
         * @param {proto.IOperationType} message OperationType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CATCH);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PLAY);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BUHUA);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.CHI);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PENG);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.GANG);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ANGANG);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.HU);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.BUHUAMO);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.KANGMO);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.NO_OPERATION);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.HANDCARDS);
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.BUGANG);
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.MOPLAY);
            return writer;
        };

        /**
         * Encodes the specified OperationType message, length delimited. Does not implicitly {@link proto.OperationType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.OperationType
         * @static
         * @param {proto.IOperationType} message OperationType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperationType message from the specified reader or buffer.
         * @function decode
         * @memberof proto.OperationType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.OperationType} OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.OperationType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CATCH = reader.int32();
                    break;
                case 2:
                    message.PLAY = reader.int32();
                    break;
                case 3:
                    message.BUHUA = reader.int32();
                    break;
                case 4:
                    message.CHI = reader.int32();
                    break;
                case 5:
                    message.PENG = reader.int32();
                    break;
                case 6:
                    message.GANG = reader.int32();
                    break;
                case 7:
                    message.ANGANG = reader.int32();
                    break;
                case 8:
                    message.HU = reader.int32();
                    break;
                case 9:
                    message.BUHUAMO = reader.int32();
                    break;
                case 10:
                    message.KANGMO = reader.int32();
                    break;
                case 11:
                    message.NO_OPERATION = reader.int32();
                    break;
                case 12:
                    message.HANDCARDS = reader.int32();
                    break;
                case 13:
                    message.BUGANG = reader.int32();
                    break;
                case 14:
                    message.MOPLAY = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("CATCH"))
                throw $util.ProtocolError("missing required 'CATCH'", { instance: message });
            if (!message.hasOwnProperty("PLAY"))
                throw $util.ProtocolError("missing required 'PLAY'", { instance: message });
            if (!message.hasOwnProperty("BUHUA"))
                throw $util.ProtocolError("missing required 'BUHUA'", { instance: message });
            if (!message.hasOwnProperty("CHI"))
                throw $util.ProtocolError("missing required 'CHI'", { instance: message });
            if (!message.hasOwnProperty("PENG"))
                throw $util.ProtocolError("missing required 'PENG'", { instance: message });
            if (!message.hasOwnProperty("GANG"))
                throw $util.ProtocolError("missing required 'GANG'", { instance: message });
            if (!message.hasOwnProperty("ANGANG"))
                throw $util.ProtocolError("missing required 'ANGANG'", { instance: message });
            if (!message.hasOwnProperty("HU"))
                throw $util.ProtocolError("missing required 'HU'", { instance: message });
            if (!message.hasOwnProperty("BUHUAMO"))
                throw $util.ProtocolError("missing required 'BUHUAMO'", { instance: message });
            if (!message.hasOwnProperty("KANGMO"))
                throw $util.ProtocolError("missing required 'KANGMO'", { instance: message });
            if (!message.hasOwnProperty("NO_OPERATION"))
                throw $util.ProtocolError("missing required 'NO_OPERATION'", { instance: message });
            if (!message.hasOwnProperty("HANDCARDS"))
                throw $util.ProtocolError("missing required 'HANDCARDS'", { instance: message });
            if (!message.hasOwnProperty("BUGANG"))
                throw $util.ProtocolError("missing required 'BUGANG'", { instance: message });
            if (!message.hasOwnProperty("MOPLAY"))
                throw $util.ProtocolError("missing required 'MOPLAY'", { instance: message });
            return message;
        };

        /**
         * Decodes an OperationType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.OperationType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.OperationType} OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperationType message.
         * @function verify
         * @memberof proto.OperationType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperationType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.CATCH))
                return "CATCH: integer expected";
            if (!$util.isInteger(message.PLAY))
                return "PLAY: integer expected";
            if (!$util.isInteger(message.BUHUA))
                return "BUHUA: integer expected";
            if (!$util.isInteger(message.CHI))
                return "CHI: integer expected";
            if (!$util.isInteger(message.PENG))
                return "PENG: integer expected";
            if (!$util.isInteger(message.GANG))
                return "GANG: integer expected";
            if (!$util.isInteger(message.ANGANG))
                return "ANGANG: integer expected";
            if (!$util.isInteger(message.HU))
                return "HU: integer expected";
            if (!$util.isInteger(message.BUHUAMO))
                return "BUHUAMO: integer expected";
            if (!$util.isInteger(message.KANGMO))
                return "KANGMO: integer expected";
            if (!$util.isInteger(message.NO_OPERATION))
                return "NO_OPERATION: integer expected";
            if (!$util.isInteger(message.HANDCARDS))
                return "HANDCARDS: integer expected";
            if (!$util.isInteger(message.BUGANG))
                return "BUGANG: integer expected";
            if (!$util.isInteger(message.MOPLAY))
                return "MOPLAY: integer expected";
            return null;
        };

        return OperationType;
    })();

    proto.ReqSendCard = (function() {

        /**
         * Properties of a ReqSendCard.
         * @memberof proto
         * @interface IReqSendCard
         * @property {string} tableId ReqSendCard tableId
         * @property {number|Long} tableMapId ReqSendCard tableMapId
         * @property {number|Long} userId ReqSendCard userId
         * @property {proto.ICardsGroup} Card ReqSendCard Card
         * @property {string} roundId ReqSendCard roundId
         */

        /**
         * Constructs a new ReqSendCard.
         * @memberof proto
         * @classdesc Represents a ReqSendCard.
         * @implements IReqSendCard
         * @constructor
         * @param {proto.IReqSendCard=} [properties] Properties to set
         */
        function ReqSendCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSendCard tableId.
         * @member {string} tableId
         * @memberof proto.ReqSendCard
         * @instance
         */
        ReqSendCard.prototype.tableId = "";

        /**
         * ReqSendCard tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqSendCard
         * @instance
         */
        ReqSendCard.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqSendCard userId.
         * @member {number|Long} userId
         * @memberof proto.ReqSendCard
         * @instance
         */
        ReqSendCard.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqSendCard Card.
         * @member {proto.ICardsGroup} Card
         * @memberof proto.ReqSendCard
         * @instance
         */
        ReqSendCard.prototype.Card = null;

        /**
         * ReqSendCard roundId.
         * @member {string} roundId
         * @memberof proto.ReqSendCard
         * @instance
         */
        ReqSendCard.prototype.roundId = "";

        /**
         * Creates a new ReqSendCard instance using the specified properties.
         * @function create
         * @memberof proto.ReqSendCard
         * @static
         * @param {proto.IReqSendCard=} [properties] Properties to set
         * @returns {proto.ReqSendCard} ReqSendCard instance
         */
        ReqSendCard.create = function create(properties) {
            return new ReqSendCard(properties);
        };

        /**
         * Encodes the specified ReqSendCard message. Does not implicitly {@link proto.ReqSendCard.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqSendCard
         * @static
         * @param {proto.IReqSendCard} message ReqSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.tableMapId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
            $root.proto.CardsGroup.encode(message.Card, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.roundId);
            return writer;
        };

        /**
         * Encodes the specified ReqSendCard message, length delimited. Does not implicitly {@link proto.ReqSendCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqSendCard
         * @static
         * @param {proto.IReqSendCard} message ReqSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqSendCard} ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqSendCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.tableMapId = reader.int64();
                    break;
                case 3:
                    message.userId = reader.int64();
                    break;
                case 4:
                    message.Card = $root.proto.CardsGroup.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.roundId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("Card"))
                throw $util.ProtocolError("missing required 'Card'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqSendCard} ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqSendCard message.
         * @function verify
         * @memberof proto.ReqSendCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSendCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            {
                var error = $root.proto.CardsGroup.verify(message.Card);
                if (error)
                    return "Card." + error;
            }
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            return null;
        };

        return ReqSendCard;
    })();

    proto.AckSendCard = (function() {

        /**
         * Properties of an AckSendCard.
         * @memberof proto
         * @interface IAckSendCard
         * @property {number} result AckSendCard result
         * @property {number|Long} userId AckSendCard userId
         * @property {string} tableId AckSendCard tableId
         */

        /**
         * Constructs a new AckSendCard.
         * @memberof proto
         * @classdesc Represents an AckSendCard.
         * @implements IAckSendCard
         * @constructor
         * @param {proto.IAckSendCard=} [properties] Properties to set
         */
        function AckSendCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckSendCard result.
         * @member {number} result
         * @memberof proto.AckSendCard
         * @instance
         */
        AckSendCard.prototype.result = 0;

        /**
         * AckSendCard userId.
         * @member {number|Long} userId
         * @memberof proto.AckSendCard
         * @instance
         */
        AckSendCard.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckSendCard tableId.
         * @member {string} tableId
         * @memberof proto.AckSendCard
         * @instance
         */
        AckSendCard.prototype.tableId = "";

        /**
         * Creates a new AckSendCard instance using the specified properties.
         * @function create
         * @memberof proto.AckSendCard
         * @static
         * @param {proto.IAckSendCard=} [properties] Properties to set
         * @returns {proto.AckSendCard} AckSendCard instance
         */
        AckSendCard.create = function create(properties) {
            return new AckSendCard(properties);
        };

        /**
         * Encodes the specified AckSendCard message. Does not implicitly {@link proto.AckSendCard.verify|verify} messages.
         * @function encode
         * @memberof proto.AckSendCard
         * @static
         * @param {proto.IAckSendCard} message AckSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSendCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified AckSendCard message, length delimited. Does not implicitly {@link proto.AckSendCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckSendCard
         * @static
         * @param {proto.IAckSendCard} message AckSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSendCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckSendCard message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckSendCard} AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckSendCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckSendCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckSendCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckSendCard} AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckSendCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckSendCard message.
         * @function verify
         * @memberof proto.AckSendCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckSendCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            return null;
        };

        return AckSendCard;
    })();

    proto.NotSendCard = (function() {

        /**
         * Properties of a NotSendCard.
         * @memberof proto
         * @interface INotSendCard
         * @property {proto.ICardsGroup} Card NotSendCard Card
         */

        /**
         * Constructs a new NotSendCard.
         * @memberof proto
         * @classdesc Represents a NotSendCard.
         * @implements INotSendCard
         * @constructor
         * @param {proto.INotSendCard=} [properties] Properties to set
         */
        function NotSendCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotSendCard Card.
         * @member {proto.ICardsGroup} Card
         * @memberof proto.NotSendCard
         * @instance
         */
        NotSendCard.prototype.Card = null;

        /**
         * Creates a new NotSendCard instance using the specified properties.
         * @function create
         * @memberof proto.NotSendCard
         * @static
         * @param {proto.INotSendCard=} [properties] Properties to set
         * @returns {proto.NotSendCard} NotSendCard instance
         */
        NotSendCard.create = function create(properties) {
            return new NotSendCard(properties);
        };

        /**
         * Encodes the specified NotSendCard message. Does not implicitly {@link proto.NotSendCard.verify|verify} messages.
         * @function encode
         * @memberof proto.NotSendCard
         * @static
         * @param {proto.INotSendCard} message NotSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotSendCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.proto.CardsGroup.encode(message.Card, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotSendCard message, length delimited. Does not implicitly {@link proto.NotSendCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotSendCard
         * @static
         * @param {proto.INotSendCard} message NotSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotSendCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotSendCard message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotSendCard} NotSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotSendCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotSendCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Card = $root.proto.CardsGroup.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Card"))
                throw $util.ProtocolError("missing required 'Card'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotSendCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotSendCard} NotSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotSendCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotSendCard message.
         * @function verify
         * @memberof proto.NotSendCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotSendCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.proto.CardsGroup.verify(message.Card);
                if (error)
                    return "Card." + error;
            }
            return null;
        };

        return NotSendCard;
    })();

    proto.NotUserOperation = (function() {

        /**
         * Properties of a NotUserOperation.
         * @memberof proto
         * @interface INotUserOperation
         * @property {Array.<proto.IOperation>|null} [operations] NotUserOperation operations
         * @property {Array.<proto.IMahjongCallInfo>|null} [callCards] NotUserOperation callCards
         */

        /**
         * Constructs a new NotUserOperation.
         * @memberof proto
         * @classdesc Represents a NotUserOperation.
         * @implements INotUserOperation
         * @constructor
         * @param {proto.INotUserOperation=} [properties] Properties to set
         */
        function NotUserOperation(properties) {
            this.operations = [];
            this.callCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotUserOperation operations.
         * @member {Array.<proto.IOperation>} operations
         * @memberof proto.NotUserOperation
         * @instance
         */
        NotUserOperation.prototype.operations = $util.emptyArray;

        /**
         * NotUserOperation callCards.
         * @member {Array.<proto.IMahjongCallInfo>} callCards
         * @memberof proto.NotUserOperation
         * @instance
         */
        NotUserOperation.prototype.callCards = $util.emptyArray;

        /**
         * Creates a new NotUserOperation instance using the specified properties.
         * @function create
         * @memberof proto.NotUserOperation
         * @static
         * @param {proto.INotUserOperation=} [properties] Properties to set
         * @returns {proto.NotUserOperation} NotUserOperation instance
         */
        NotUserOperation.create = function create(properties) {
            return new NotUserOperation(properties);
        };

        /**
         * Encodes the specified NotUserOperation message. Does not implicitly {@link proto.NotUserOperation.verify|verify} messages.
         * @function encode
         * @memberof proto.NotUserOperation
         * @static
         * @param {proto.INotUserOperation} message NotUserOperation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotUserOperation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operations != null && message.operations.length)
                for (var i = 0; i < message.operations.length; ++i)
                    $root.proto.Operation.encode(message.operations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.callCards != null && message.callCards.length)
                for (var i = 0; i < message.callCards.length; ++i)
                    $root.proto.MahjongCallInfo.encode(message.callCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotUserOperation message, length delimited. Does not implicitly {@link proto.NotUserOperation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotUserOperation
         * @static
         * @param {proto.INotUserOperation} message NotUserOperation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotUserOperation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotUserOperation message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotUserOperation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotUserOperation} NotUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotUserOperation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotUserOperation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.operations && message.operations.length))
                        message.operations = [];
                    message.operations.push($root.proto.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.callCards && message.callCards.length))
                        message.callCards = [];
                    message.callCards.push($root.proto.MahjongCallInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotUserOperation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotUserOperation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotUserOperation} NotUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotUserOperation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotUserOperation message.
         * @function verify
         * @memberof proto.NotUserOperation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotUserOperation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operations != null && message.hasOwnProperty("operations")) {
                if (!Array.isArray(message.operations))
                    return "operations: array expected";
                for (var i = 0; i < message.operations.length; ++i) {
                    var error = $root.proto.Operation.verify(message.operations[i]);
                    if (error)
                        return "operations." + error;
                }
            }
            if (message.callCards != null && message.hasOwnProperty("callCards")) {
                if (!Array.isArray(message.callCards))
                    return "callCards: array expected";
                for (var i = 0; i < message.callCards.length; ++i) {
                    var error = $root.proto.MahjongCallInfo.verify(message.callCards[i]);
                    if (error)
                        return "callCards." + error;
                }
            }
            return null;
        };

        return NotUserOperation;
    })();

    proto.Operation = (function() {

        /**
         * Properties of an Operation.
         * @memberof proto
         * @interface IOperation
         * @property {number} type Operation type
         * @property {Array.<proto.ICardsGroup>|null} [options] Operation options
         */

        /**
         * Constructs a new Operation.
         * @memberof proto
         * @classdesc Represents an Operation.
         * @implements IOperation
         * @constructor
         * @param {proto.IOperation=} [properties] Properties to set
         */
        function Operation(properties) {
            this.options = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Operation type.
         * @member {number} type
         * @memberof proto.Operation
         * @instance
         */
        Operation.prototype.type = 0;

        /**
         * Operation options.
         * @member {Array.<proto.ICardsGroup>} options
         * @memberof proto.Operation
         * @instance
         */
        Operation.prototype.options = $util.emptyArray;

        /**
         * Creates a new Operation instance using the specified properties.
         * @function create
         * @memberof proto.Operation
         * @static
         * @param {proto.IOperation=} [properties] Properties to set
         * @returns {proto.Operation} Operation instance
         */
        Operation.create = function create(properties) {
            return new Operation(properties);
        };

        /**
         * Encodes the specified Operation message. Does not implicitly {@link proto.Operation.verify|verify} messages.
         * @function encode
         * @memberof proto.Operation
         * @static
         * @param {proto.IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.options != null && message.options.length)
                for (var i = 0; i < message.options.length; ++i)
                    $root.proto.CardsGroup.encode(message.options[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link proto.Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Operation
         * @static
         * @param {proto.IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Operation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.options && message.options.length))
                        message.options = [];
                    message.options.push($root.proto.CardsGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operation message.
         * @function verify
         * @memberof proto.Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (var i = 0; i < message.options.length; ++i) {
                    var error = $root.proto.CardsGroup.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            return null;
        };

        return Operation;
    })();

    proto.NotGameEnd = (function() {

        /**
         * Properties of a NotGameEnd.
         * @memberof proto
         * @interface INotGameEnd
         * @property {Array.<proto.IHandCards>|null} [playerCards] NotGameEnd playerCards
         * @property {number} stage NotGameEnd stage
         * @property {number|null} [result] NotGameEnd result
         * @property {number|null} [winner] NotGameEnd winner
         * @property {number|null} [huType] NotGameEnd huType
         */

        /**
         * Constructs a new NotGameEnd.
         * @memberof proto
         * @classdesc Represents a NotGameEnd.
         * @implements INotGameEnd
         * @constructor
         * @param {proto.INotGameEnd=} [properties] Properties to set
         */
        function NotGameEnd(properties) {
            this.playerCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotGameEnd playerCards.
         * @member {Array.<proto.IHandCards>} playerCards
         * @memberof proto.NotGameEnd
         * @instance
         */
        NotGameEnd.prototype.playerCards = $util.emptyArray;

        /**
         * NotGameEnd stage.
         * @member {number} stage
         * @memberof proto.NotGameEnd
         * @instance
         */
        NotGameEnd.prototype.stage = 0;

        /**
         * NotGameEnd result.
         * @member {number} result
         * @memberof proto.NotGameEnd
         * @instance
         */
        NotGameEnd.prototype.result = 0;

        /**
         * NotGameEnd winner.
         * @member {number} winner
         * @memberof proto.NotGameEnd
         * @instance
         */
        NotGameEnd.prototype.winner = 0;

        /**
         * NotGameEnd huType.
         * @member {number} huType
         * @memberof proto.NotGameEnd
         * @instance
         */
        NotGameEnd.prototype.huType = 0;

        /**
         * Creates a new NotGameEnd instance using the specified properties.
         * @function create
         * @memberof proto.NotGameEnd
         * @static
         * @param {proto.INotGameEnd=} [properties] Properties to set
         * @returns {proto.NotGameEnd} NotGameEnd instance
         */
        NotGameEnd.create = function create(properties) {
            return new NotGameEnd(properties);
        };

        /**
         * Encodes the specified NotGameEnd message. Does not implicitly {@link proto.NotGameEnd.verify|verify} messages.
         * @function encode
         * @memberof proto.NotGameEnd
         * @static
         * @param {proto.INotGameEnd} message NotGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerCards != null && message.playerCards.length)
                for (var i = 0; i < message.playerCards.length; ++i)
                    $root.proto.HandCards.encode(message.playerCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stage);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
            if (message.winner != null && message.hasOwnProperty("winner"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.winner);
            if (message.huType != null && message.hasOwnProperty("huType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.huType);
            return writer;
        };

        /**
         * Encodes the specified NotGameEnd message, length delimited. Does not implicitly {@link proto.NotGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotGameEnd
         * @static
         * @param {proto.INotGameEnd} message NotGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotGameEnd} NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotGameEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.playerCards && message.playerCards.length))
                        message.playerCards = [];
                    message.playerCards.push($root.proto.HandCards.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stage = reader.int32();
                    break;
                case 3:
                    message.result = reader.int32();
                    break;
                case 4:
                    message.winner = reader.int32();
                    break;
                case 5:
                    message.huType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stage"))
                throw $util.ProtocolError("missing required 'stage'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotGameEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotGameEnd} NotGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotGameEnd message.
         * @function verify
         * @memberof proto.NotGameEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotGameEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerCards != null && message.hasOwnProperty("playerCards")) {
                if (!Array.isArray(message.playerCards))
                    return "playerCards: array expected";
                for (var i = 0; i < message.playerCards.length; ++i) {
                    var error = $root.proto.HandCards.verify(message.playerCards[i]);
                    if (error)
                        return "playerCards." + error;
                }
            }
            if (!$util.isInteger(message.stage))
                return "stage: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.winner != null && message.hasOwnProperty("winner"))
                if (!$util.isInteger(message.winner))
                    return "winner: integer expected";
            if (message.huType != null && message.hasOwnProperty("huType"))
                if (!$util.isInteger(message.huType))
                    return "huType: integer expected";
            return null;
        };

        return NotGameEnd;
    })();

    proto.NotGameResult = (function() {

        /**
         * Properties of a NotGameResult.
         * @memberof proto
         * @interface INotGameResult
         * @property {string} tableId NotGameResult tableId
         * @property {number} result NotGameResult result
         * @property {proto.IPlayerGameResult} player NotGameResult player
         * @property {Array.<proto.IPlayerGameResult>|null} [others] NotGameResult others
         * @property {Array.<proto.IFan>|null} [fan] NotGameResult fan
         */

        /**
         * Constructs a new NotGameResult.
         * @memberof proto
         * @classdesc Represents a NotGameResult.
         * @implements INotGameResult
         * @constructor
         * @param {proto.INotGameResult=} [properties] Properties to set
         */
        function NotGameResult(properties) {
            this.others = [];
            this.fan = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotGameResult tableId.
         * @member {string} tableId
         * @memberof proto.NotGameResult
         * @instance
         */
        NotGameResult.prototype.tableId = "";

        /**
         * NotGameResult result.
         * @member {number} result
         * @memberof proto.NotGameResult
         * @instance
         */
        NotGameResult.prototype.result = 0;

        /**
         * NotGameResult player.
         * @member {proto.IPlayerGameResult} player
         * @memberof proto.NotGameResult
         * @instance
         */
        NotGameResult.prototype.player = null;

        /**
         * NotGameResult others.
         * @member {Array.<proto.IPlayerGameResult>} others
         * @memberof proto.NotGameResult
         * @instance
         */
        NotGameResult.prototype.others = $util.emptyArray;

        /**
         * NotGameResult fan.
         * @member {Array.<proto.IFan>} fan
         * @memberof proto.NotGameResult
         * @instance
         */
        NotGameResult.prototype.fan = $util.emptyArray;

        /**
         * Creates a new NotGameResult instance using the specified properties.
         * @function create
         * @memberof proto.NotGameResult
         * @static
         * @param {proto.INotGameResult=} [properties] Properties to set
         * @returns {proto.NotGameResult} NotGameResult instance
         */
        NotGameResult.create = function create(properties) {
            return new NotGameResult(properties);
        };

        /**
         * Encodes the specified NotGameResult message. Does not implicitly {@link proto.NotGameResult.verify|verify} messages.
         * @function encode
         * @memberof proto.NotGameResult
         * @static
         * @param {proto.INotGameResult} message NotGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            $root.proto.PlayerGameResult.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.others != null && message.others.length)
                for (var i = 0; i < message.others.length; ++i)
                    $root.proto.PlayerGameResult.encode(message.others[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.fan != null && message.fan.length)
                for (var i = 0; i < message.fan.length; ++i)
                    $root.proto.Fan.encode(message.fan[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotGameResult message, length delimited. Does not implicitly {@link proto.NotGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotGameResult
         * @static
         * @param {proto.INotGameResult} message NotGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotGameResult} NotGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.player = $root.proto.PlayerGameResult.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.others && message.others.length))
                        message.others = [];
                    message.others.push($root.proto.PlayerGameResult.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.fan && message.fan.length))
                        message.fan = [];
                    message.fan.push($root.proto.Fan.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("player"))
                throw $util.ProtocolError("missing required 'player'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotGameResult} NotGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotGameResult message.
         * @function verify
         * @memberof proto.NotGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            {
                var error = $root.proto.PlayerGameResult.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.others != null && message.hasOwnProperty("others")) {
                if (!Array.isArray(message.others))
                    return "others: array expected";
                for (var i = 0; i < message.others.length; ++i) {
                    var error = $root.proto.PlayerGameResult.verify(message.others[i]);
                    if (error)
                        return "others." + error;
                }
            }
            if (message.fan != null && message.hasOwnProperty("fan")) {
                if (!Array.isArray(message.fan))
                    return "fan: array expected";
                for (var i = 0; i < message.fan.length; ++i) {
                    var error = $root.proto.Fan.verify(message.fan[i]);
                    if (error)
                        return "fan." + error;
                }
            }
            return null;
        };

        return NotGameResult;
    })();

    proto.Fan = (function() {

        /**
         * Properties of a Fan.
         * @memberof proto
         * @interface IFan
         * @property {number} fanxing Fan fanxing
         * @property {number} taishu Fan taishu
         */

        /**
         * Constructs a new Fan.
         * @memberof proto
         * @classdesc Represents a Fan.
         * @implements IFan
         * @constructor
         * @param {proto.IFan=} [properties] Properties to set
         */
        function Fan(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Fan fanxing.
         * @member {number} fanxing
         * @memberof proto.Fan
         * @instance
         */
        Fan.prototype.fanxing = 0;

        /**
         * Fan taishu.
         * @member {number} taishu
         * @memberof proto.Fan
         * @instance
         */
        Fan.prototype.taishu = 0;

        /**
         * Creates a new Fan instance using the specified properties.
         * @function create
         * @memberof proto.Fan
         * @static
         * @param {proto.IFan=} [properties] Properties to set
         * @returns {proto.Fan} Fan instance
         */
        Fan.create = function create(properties) {
            return new Fan(properties);
        };

        /**
         * Encodes the specified Fan message. Does not implicitly {@link proto.Fan.verify|verify} messages.
         * @function encode
         * @memberof proto.Fan
         * @static
         * @param {proto.IFan} message Fan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fan.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fanxing);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taishu);
            return writer;
        };

        /**
         * Encodes the specified Fan message, length delimited. Does not implicitly {@link proto.Fan.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Fan
         * @static
         * @param {proto.IFan} message Fan message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fan.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Fan message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Fan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Fan} Fan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fan.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Fan();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fanxing = reader.int32();
                    break;
                case 2:
                    message.taishu = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fanxing"))
                throw $util.ProtocolError("missing required 'fanxing'", { instance: message });
            if (!message.hasOwnProperty("taishu"))
                throw $util.ProtocolError("missing required 'taishu'", { instance: message });
            return message;
        };

        /**
         * Decodes a Fan message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Fan
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Fan} Fan
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fan.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Fan message.
         * @function verify
         * @memberof proto.Fan
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Fan.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fanxing))
                return "fanxing: integer expected";
            if (!$util.isInteger(message.taishu))
                return "taishu: integer expected";
            return null;
        };

        return Fan;
    })();

    proto.PlayerGameResult = (function() {

        /**
         * Properties of a PlayerGameResult.
         * @memberof proto
         * @interface IPlayerGameResult
         * @property {number} seat PlayerGameResult seat
         * @property {string} username PlayerGameResult username
         * @property {number} isZhuang PlayerGameResult isZhuang
         * @property {number|Long} money PlayerGameResult money
         * @property {number} position PlayerGameResult position
         * @property {number|null} [isWin] PlayerGameResult isWin
         * @property {number|Long|null} [chips] PlayerGameResult chips
         */

        /**
         * Constructs a new PlayerGameResult.
         * @memberof proto
         * @classdesc Represents a PlayerGameResult.
         * @implements IPlayerGameResult
         * @constructor
         * @param {proto.IPlayerGameResult=} [properties] Properties to set
         */
        function PlayerGameResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerGameResult seat.
         * @member {number} seat
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.seat = 0;

        /**
         * PlayerGameResult username.
         * @member {string} username
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.username = "";

        /**
         * PlayerGameResult isZhuang.
         * @member {number} isZhuang
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.isZhuang = 0;

        /**
         * PlayerGameResult money.
         * @member {number|Long} money
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerGameResult position.
         * @member {number} position
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.position = 0;

        /**
         * PlayerGameResult isWin.
         * @member {number} isWin
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.isWin = 0;

        /**
         * PlayerGameResult chips.
         * @member {number|Long} chips
         * @memberof proto.PlayerGameResult
         * @instance
         */
        PlayerGameResult.prototype.chips = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlayerGameResult instance using the specified properties.
         * @function create
         * @memberof proto.PlayerGameResult
         * @static
         * @param {proto.IPlayerGameResult=} [properties] Properties to set
         * @returns {proto.PlayerGameResult} PlayerGameResult instance
         */
        PlayerGameResult.create = function create(properties) {
            return new PlayerGameResult(properties);
        };

        /**
         * Encodes the specified PlayerGameResult message. Does not implicitly {@link proto.PlayerGameResult.verify|verify} messages.
         * @function encode
         * @memberof proto.PlayerGameResult
         * @static
         * @param {proto.IPlayerGameResult} message PlayerGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.isZhuang);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.position);
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isWin);
            if (message.chips != null && message.hasOwnProperty("chips"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.chips);
            return writer;
        };

        /**
         * Encodes the specified PlayerGameResult message, length delimited. Does not implicitly {@link proto.PlayerGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PlayerGameResult
         * @static
         * @param {proto.IPlayerGameResult} message PlayerGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PlayerGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PlayerGameResult} PlayerGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PlayerGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.isZhuang = reader.int32();
                    break;
                case 4:
                    message.money = reader.int64();
                    break;
                case 5:
                    message.position = reader.int32();
                    break;
                case 6:
                    message.isWin = reader.int32();
                    break;
                case 7:
                    message.chips = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            if (!message.hasOwnProperty("username"))
                throw $util.ProtocolError("missing required 'username'", { instance: message });
            if (!message.hasOwnProperty("isZhuang"))
                throw $util.ProtocolError("missing required 'isZhuang'", { instance: message });
            if (!message.hasOwnProperty("money"))
                throw $util.ProtocolError("missing required 'money'", { instance: message });
            if (!message.hasOwnProperty("position"))
                throw $util.ProtocolError("missing required 'position'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PlayerGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PlayerGameResult} PlayerGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerGameResult message.
         * @function verify
         * @memberof proto.PlayerGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            if (!$util.isInteger(message.isZhuang))
                return "isZhuang: integer expected";
            if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                return "money: integer|Long expected";
            if (!$util.isInteger(message.position))
                return "position: integer expected";
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                if (!$util.isInteger(message.isWin))
                    return "isWin: integer expected";
            if (message.chips != null && message.hasOwnProperty("chips"))
                if (!$util.isInteger(message.chips) && !(message.chips && $util.isInteger(message.chips.low) && $util.isInteger(message.chips.high)))
                    return "chips: integer|Long expected";
            return null;
        };

        return PlayerGameResult;
    })();

    proto.ReqChat = (function() {

        /**
         * Properties of a ReqChat.
         * @memberof proto
         * @interface IReqChat
         * @property {string} tableId ReqChat tableId
         * @property {number|Long} tableMapId ReqChat tableMapId
         * @property {string} roundId ReqChat roundId
         * @property {number} seatNo ReqChat seatNo
         * @property {number|Long} userId ReqChat userId
         * @property {number} type ReqChat type
         * @property {string} content ReqChat content
         * @property {string|null} [through] ReqChat through
         */

        /**
         * Constructs a new ReqChat.
         * @memberof proto
         * @classdesc Represents a ReqChat.
         * @implements IReqChat
         * @constructor
         * @param {proto.IReqChat=} [properties] Properties to set
         */
        function ReqChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqChat tableId.
         * @member {string} tableId
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.tableId = "";

        /**
         * ReqChat tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqChat roundId.
         * @member {string} roundId
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.roundId = "";

        /**
         * ReqChat seatNo.
         * @member {number} seatNo
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.seatNo = 0;

        /**
         * ReqChat userId.
         * @member {number|Long} userId
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqChat type.
         * @member {number} type
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.type = 0;

        /**
         * ReqChat content.
         * @member {string} content
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.content = "";

        /**
         * ReqChat through.
         * @member {string} through
         * @memberof proto.ReqChat
         * @instance
         */
        ReqChat.prototype.through = "";

        /**
         * Creates a new ReqChat instance using the specified properties.
         * @function create
         * @memberof proto.ReqChat
         * @static
         * @param {proto.IReqChat=} [properties] Properties to set
         * @returns {proto.ReqChat} ReqChat instance
         */
        ReqChat.create = function create(properties) {
            return new ReqChat(properties);
        };

        /**
         * Encodes the specified ReqChat message. Does not implicitly {@link proto.ReqChat.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqChat
         * @static
         * @param {proto.IReqChat} message ReqChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.tableMapId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundId);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.seatNo);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.userId);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
            if (message.through != null && message.hasOwnProperty("through"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.through);
            return writer;
        };

        /**
         * Encodes the specified ReqChat message, length delimited. Does not implicitly {@link proto.ReqChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqChat
         * @static
         * @param {proto.IReqChat} message ReqChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqChat message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqChat} ReqChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.tableMapId = reader.int64();
                    break;
                case 3:
                    message.roundId = reader.string();
                    break;
                case 4:
                    message.seatNo = reader.int32();
                    break;
                case 5:
                    message.userId = reader.int64();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                case 7:
                    message.content = reader.string();
                    break;
                case 8:
                    message.through = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqChat} ReqChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqChat message.
         * @function verify
         * @memberof proto.ReqChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (message.through != null && message.hasOwnProperty("through"))
                if (!$util.isString(message.through))
                    return "through: string expected";
            return null;
        };

        return ReqChat;
    })();

    proto.NotChat = (function() {

        /**
         * Properties of a NotChat.
         * @memberof proto
         * @interface INotChat
         * @property {string} tableId NotChat tableId
         * @property {string} roundId NotChat roundId
         * @property {number} seatNo NotChat seatNo
         * @property {number} type NotChat type
         * @property {string} content NotChat content
         * @property {string|null} [through] NotChat through
         */

        /**
         * Constructs a new NotChat.
         * @memberof proto
         * @classdesc Represents a NotChat.
         * @implements INotChat
         * @constructor
         * @param {proto.INotChat=} [properties] Properties to set
         */
        function NotChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotChat tableId.
         * @member {string} tableId
         * @memberof proto.NotChat
         * @instance
         */
        NotChat.prototype.tableId = "";

        /**
         * NotChat roundId.
         * @member {string} roundId
         * @memberof proto.NotChat
         * @instance
         */
        NotChat.prototype.roundId = "";

        /**
         * NotChat seatNo.
         * @member {number} seatNo
         * @memberof proto.NotChat
         * @instance
         */
        NotChat.prototype.seatNo = 0;

        /**
         * NotChat type.
         * @member {number} type
         * @memberof proto.NotChat
         * @instance
         */
        NotChat.prototype.type = 0;

        /**
         * NotChat content.
         * @member {string} content
         * @memberof proto.NotChat
         * @instance
         */
        NotChat.prototype.content = "";

        /**
         * NotChat through.
         * @member {string} through
         * @memberof proto.NotChat
         * @instance
         */
        NotChat.prototype.through = "";

        /**
         * Creates a new NotChat instance using the specified properties.
         * @function create
         * @memberof proto.NotChat
         * @static
         * @param {proto.INotChat=} [properties] Properties to set
         * @returns {proto.NotChat} NotChat instance
         */
        NotChat.create = function create(properties) {
            return new NotChat(properties);
        };

        /**
         * Encodes the specified NotChat message. Does not implicitly {@link proto.NotChat.verify|verify} messages.
         * @function encode
         * @memberof proto.NotChat
         * @static
         * @param {proto.INotChat} message NotChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roundId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seatNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.through != null && message.hasOwnProperty("through"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.through);
            return writer;
        };

        /**
         * Encodes the specified NotChat message, length delimited. Does not implicitly {@link proto.NotChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NotChat
         * @static
         * @param {proto.INotChat} message NotChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotChat message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NotChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NotChat} NotChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NotChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.roundId = reader.string();
                    break;
                case 3:
                    message.seatNo = reader.int32();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                case 6:
                    message.through = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("roundId"))
                throw $util.ProtocolError("missing required 'roundId'", { instance: message });
            if (!message.hasOwnProperty("seatNo"))
                throw $util.ProtocolError("missing required 'seatNo'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NotChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NotChat} NotChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotChat message.
         * @function verify
         * @memberof proto.NotChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isString(message.roundId))
                return "roundId: string expected";
            if (!$util.isInteger(message.seatNo))
                return "seatNo: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (message.through != null && message.hasOwnProperty("through"))
                if (!$util.isString(message.through))
                    return "through: string expected";
            return null;
        };

        return NotChat;
    })();

    proto.ReqAppointCards = (function() {

        /**
         * Properties of a ReqAppointCards.
         * @memberof proto
         * @interface IReqAppointCards
         * @property {number|Long} tableMapId ReqAppointCards tableMapId
         * @property {number|Long} userId ReqAppointCards userId
         * @property {number} banker ReqAppointCards banker
         * @property {Array.<proto.IHandCards>|null} [handCards] ReqAppointCards handCards
         */

        /**
         * Constructs a new ReqAppointCards.
         * @memberof proto
         * @classdesc Represents a ReqAppointCards.
         * @implements IReqAppointCards
         * @constructor
         * @param {proto.IReqAppointCards=} [properties] Properties to set
         */
        function ReqAppointCards(properties) {
            this.handCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAppointCards tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqAppointCards
         * @instance
         */
        ReqAppointCards.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqAppointCards userId.
         * @member {number|Long} userId
         * @memberof proto.ReqAppointCards
         * @instance
         */
        ReqAppointCards.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqAppointCards banker.
         * @member {number} banker
         * @memberof proto.ReqAppointCards
         * @instance
         */
        ReqAppointCards.prototype.banker = 0;

        /**
         * ReqAppointCards handCards.
         * @member {Array.<proto.IHandCards>} handCards
         * @memberof proto.ReqAppointCards
         * @instance
         */
        ReqAppointCards.prototype.handCards = $util.emptyArray;

        /**
         * Creates a new ReqAppointCards instance using the specified properties.
         * @function create
         * @memberof proto.ReqAppointCards
         * @static
         * @param {proto.IReqAppointCards=} [properties] Properties to set
         * @returns {proto.ReqAppointCards} ReqAppointCards instance
         */
        ReqAppointCards.create = function create(properties) {
            return new ReqAppointCards(properties);
        };

        /**
         * Encodes the specified ReqAppointCards message. Does not implicitly {@link proto.ReqAppointCards.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqAppointCards
         * @static
         * @param {proto.IReqAppointCards} message ReqAppointCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAppointCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.tableMapId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.banker);
            if (message.handCards != null && message.handCards.length)
                for (var i = 0; i < message.handCards.length; ++i)
                    $root.proto.HandCards.encode(message.handCards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqAppointCards message, length delimited. Does not implicitly {@link proto.ReqAppointCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqAppointCards
         * @static
         * @param {proto.IReqAppointCards} message ReqAppointCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAppointCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqAppointCards message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqAppointCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqAppointCards} ReqAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAppointCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqAppointCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableMapId = reader.int64();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.banker = reader.int32();
                    break;
                case 4:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    message.handCards.push($root.proto.HandCards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("banker"))
                throw $util.ProtocolError("missing required 'banker'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqAppointCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqAppointCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqAppointCards} ReqAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAppointCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqAppointCards message.
         * @function verify
         * @memberof proto.ReqAppointCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqAppointCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isInteger(message.banker))
                return "banker: integer expected";
            if (message.handCards != null && message.hasOwnProperty("handCards")) {
                if (!Array.isArray(message.handCards))
                    return "handCards: array expected";
                for (var i = 0; i < message.handCards.length; ++i) {
                    var error = $root.proto.HandCards.verify(message.handCards[i]);
                    if (error)
                        return "handCards." + error;
                }
            }
            return null;
        };

        return ReqAppointCards;
    })();

    proto.AckAppointCards = (function() {

        /**
         * Properties of an AckAppointCards.
         * @memberof proto
         * @interface IAckAppointCards
         * @property {number} result AckAppointCards result
         * @property {number|Long} userId AckAppointCards userId
         */

        /**
         * Constructs a new AckAppointCards.
         * @memberof proto
         * @classdesc Represents an AckAppointCards.
         * @implements IAckAppointCards
         * @constructor
         * @param {proto.IAckAppointCards=} [properties] Properties to set
         */
        function AckAppointCards(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckAppointCards result.
         * @member {number} result
         * @memberof proto.AckAppointCards
         * @instance
         */
        AckAppointCards.prototype.result = 0;

        /**
         * AckAppointCards userId.
         * @member {number|Long} userId
         * @memberof proto.AckAppointCards
         * @instance
         */
        AckAppointCards.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AckAppointCards instance using the specified properties.
         * @function create
         * @memberof proto.AckAppointCards
         * @static
         * @param {proto.IAckAppointCards=} [properties] Properties to set
         * @returns {proto.AckAppointCards} AckAppointCards instance
         */
        AckAppointCards.create = function create(properties) {
            return new AckAppointCards(properties);
        };

        /**
         * Encodes the specified AckAppointCards message. Does not implicitly {@link proto.AckAppointCards.verify|verify} messages.
         * @function encode
         * @memberof proto.AckAppointCards
         * @static
         * @param {proto.IAckAppointCards} message AckAppointCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckAppointCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified AckAppointCards message, length delimited. Does not implicitly {@link proto.AckAppointCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckAppointCards
         * @static
         * @param {proto.IAckAppointCards} message AckAppointCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckAppointCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckAppointCards message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckAppointCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckAppointCards} AckAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckAppointCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckAppointCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckAppointCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckAppointCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckAppointCards} AckAppointCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckAppointCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckAppointCards message.
         * @function verify
         * @memberof proto.AckAppointCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckAppointCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            return null;
        };

        return AckAppointCards;
    })();

    proto.ReqAppointNextCard = (function() {

        /**
         * Properties of a ReqAppointNextCard.
         * @memberof proto
         * @interface IReqAppointNextCard
         * @property {string} tableId ReqAppointNextCard tableId
         * @property {number|Long} tableMapId ReqAppointNextCard tableMapId
         * @property {number|Long} userId ReqAppointNextCard userId
         * @property {Array.<proto.ICardInfo>|null} [cards] ReqAppointNextCard cards
         */

        /**
         * Constructs a new ReqAppointNextCard.
         * @memberof proto
         * @classdesc Represents a ReqAppointNextCard.
         * @implements IReqAppointNextCard
         * @constructor
         * @param {proto.IReqAppointNextCard=} [properties] Properties to set
         */
        function ReqAppointNextCard(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqAppointNextCard tableId.
         * @member {string} tableId
         * @memberof proto.ReqAppointNextCard
         * @instance
         */
        ReqAppointNextCard.prototype.tableId = "";

        /**
         * ReqAppointNextCard tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqAppointNextCard
         * @instance
         */
        ReqAppointNextCard.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqAppointNextCard userId.
         * @member {number|Long} userId
         * @memberof proto.ReqAppointNextCard
         * @instance
         */
        ReqAppointNextCard.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqAppointNextCard cards.
         * @member {Array.<proto.ICardInfo>} cards
         * @memberof proto.ReqAppointNextCard
         * @instance
         */
        ReqAppointNextCard.prototype.cards = $util.emptyArray;

        /**
         * Creates a new ReqAppointNextCard instance using the specified properties.
         * @function create
         * @memberof proto.ReqAppointNextCard
         * @static
         * @param {proto.IReqAppointNextCard=} [properties] Properties to set
         * @returns {proto.ReqAppointNextCard} ReqAppointNextCard instance
         */
        ReqAppointNextCard.create = function create(properties) {
            return new ReqAppointNextCard(properties);
        };

        /**
         * Encodes the specified ReqAppointNextCard message. Does not implicitly {@link proto.ReqAppointNextCard.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqAppointNextCard
         * @static
         * @param {proto.IReqAppointNextCard} message ReqAppointNextCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAppointNextCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.tableMapId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.userId);
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    $root.proto.CardInfo.encode(message.cards[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqAppointNextCard message, length delimited. Does not implicitly {@link proto.ReqAppointNextCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqAppointNextCard
         * @static
         * @param {proto.IReqAppointNextCard} message ReqAppointNextCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqAppointNextCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqAppointNextCard message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqAppointNextCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqAppointNextCard} ReqAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAppointNextCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqAppointNextCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.tableMapId = reader.int64();
                    break;
                case 3:
                    message.userId = reader.int64();
                    break;
                case 4:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    message.cards.push($root.proto.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqAppointNextCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqAppointNextCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqAppointNextCard} ReqAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqAppointNextCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqAppointNextCard message.
         * @function verify
         * @memberof proto.ReqAppointNextCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqAppointNextCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i) {
                    var error = $root.proto.CardInfo.verify(message.cards[i]);
                    if (error)
                        return "cards." + error;
                }
            }
            return null;
        };

        return ReqAppointNextCard;
    })();

    proto.AckAppointNextCard = (function() {

        /**
         * Properties of an AckAppointNextCard.
         * @memberof proto
         * @interface IAckAppointNextCard
         * @property {number} result AckAppointNextCard result
         * @property {number|Long} userId AckAppointNextCard userId
         */

        /**
         * Constructs a new AckAppointNextCard.
         * @memberof proto
         * @classdesc Represents an AckAppointNextCard.
         * @implements IAckAppointNextCard
         * @constructor
         * @param {proto.IAckAppointNextCard=} [properties] Properties to set
         */
        function AckAppointNextCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckAppointNextCard result.
         * @member {number} result
         * @memberof proto.AckAppointNextCard
         * @instance
         */
        AckAppointNextCard.prototype.result = 0;

        /**
         * AckAppointNextCard userId.
         * @member {number|Long} userId
         * @memberof proto.AckAppointNextCard
         * @instance
         */
        AckAppointNextCard.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AckAppointNextCard instance using the specified properties.
         * @function create
         * @memberof proto.AckAppointNextCard
         * @static
         * @param {proto.IAckAppointNextCard=} [properties] Properties to set
         * @returns {proto.AckAppointNextCard} AckAppointNextCard instance
         */
        AckAppointNextCard.create = function create(properties) {
            return new AckAppointNextCard(properties);
        };

        /**
         * Encodes the specified AckAppointNextCard message. Does not implicitly {@link proto.AckAppointNextCard.verify|verify} messages.
         * @function encode
         * @memberof proto.AckAppointNextCard
         * @static
         * @param {proto.IAckAppointNextCard} message AckAppointNextCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckAppointNextCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified AckAppointNextCard message, length delimited. Does not implicitly {@link proto.AckAppointNextCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckAppointNextCard
         * @static
         * @param {proto.IAckAppointNextCard} message AckAppointNextCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckAppointNextCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckAppointNextCard message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckAppointNextCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckAppointNextCard} AckAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckAppointNextCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckAppointNextCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckAppointNextCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckAppointNextCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckAppointNextCard} AckAppointNextCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckAppointNextCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckAppointNextCard message.
         * @function verify
         * @memberof proto.AckAppointNextCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckAppointNextCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            return null;
        };

        return AckAppointNextCard;
    })();

    proto.ReqTrust = (function() {

        /**
         * Properties of a ReqTrust.
         * @memberof proto
         * @interface IReqTrust
         * @property {number|Long} userId ReqTrust userId
         * @property {string} tableId ReqTrust tableId
         * @property {number|Long} tableMapId ReqTrust tableMapId
         * @property {number|Long} type ReqTrust type
         */

        /**
         * Constructs a new ReqTrust.
         * @memberof proto
         * @classdesc Represents a ReqTrust.
         * @implements IReqTrust
         * @constructor
         * @param {proto.IReqTrust=} [properties] Properties to set
         */
        function ReqTrust(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqTrust userId.
         * @member {number|Long} userId
         * @memberof proto.ReqTrust
         * @instance
         */
        ReqTrust.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqTrust tableId.
         * @member {string} tableId
         * @memberof proto.ReqTrust
         * @instance
         */
        ReqTrust.prototype.tableId = "";

        /**
         * ReqTrust tableMapId.
         * @member {number|Long} tableMapId
         * @memberof proto.ReqTrust
         * @instance
         */
        ReqTrust.prototype.tableMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqTrust type.
         * @member {number|Long} type
         * @memberof proto.ReqTrust
         * @instance
         */
        ReqTrust.prototype.type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReqTrust instance using the specified properties.
         * @function create
         * @memberof proto.ReqTrust
         * @static
         * @param {proto.IReqTrust=} [properties] Properties to set
         * @returns {proto.ReqTrust} ReqTrust instance
         */
        ReqTrust.create = function create(properties) {
            return new ReqTrust(properties);
        };

        /**
         * Encodes the specified ReqTrust message. Does not implicitly {@link proto.ReqTrust.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqTrust
         * @static
         * @param {proto.IReqTrust} message ReqTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqTrust.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.tableMapId);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.type);
            return writer;
        };

        /**
         * Encodes the specified ReqTrust message, length delimited. Does not implicitly {@link proto.ReqTrust.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ReqTrust
         * @static
         * @param {proto.IReqTrust} message ReqTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqTrust.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqTrust message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ReqTrust} ReqTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTrust.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ReqTrust();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int64();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.tableMapId = reader.int64();
                    break;
                case 4:
                    message.type = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("tableMapId"))
                throw $util.ProtocolError("missing required 'tableMapId'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqTrust message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ReqTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ReqTrust} ReqTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTrust.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqTrust message.
         * @function verify
         * @memberof proto.ReqTrust
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqTrust.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            if (!$util.isInteger(message.tableMapId) && !(message.tableMapId && $util.isInteger(message.tableMapId.low) && $util.isInteger(message.tableMapId.high)))
                return "tableMapId: integer|Long expected";
            if (!$util.isInteger(message.type) && !(message.type && $util.isInteger(message.type.low) && $util.isInteger(message.type.high)))
                return "type: integer|Long expected";
            return null;
        };

        return ReqTrust;
    })();

    proto.AckTrust = (function() {

        /**
         * Properties of an AckTrust.
         * @memberof proto
         * @interface IAckTrust
         * @property {number} result AckTrust result
         * @property {number|Long} userId AckTrust userId
         * @property {string} tableId AckTrust tableId
         */

        /**
         * Constructs a new AckTrust.
         * @memberof proto
         * @classdesc Represents an AckTrust.
         * @implements IAckTrust
         * @constructor
         * @param {proto.IAckTrust=} [properties] Properties to set
         */
        function AckTrust(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckTrust result.
         * @member {number} result
         * @memberof proto.AckTrust
         * @instance
         */
        AckTrust.prototype.result = 0;

        /**
         * AckTrust userId.
         * @member {number|Long} userId
         * @memberof proto.AckTrust
         * @instance
         */
        AckTrust.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AckTrust tableId.
         * @member {string} tableId
         * @memberof proto.AckTrust
         * @instance
         */
        AckTrust.prototype.tableId = "";

        /**
         * Creates a new AckTrust instance using the specified properties.
         * @function create
         * @memberof proto.AckTrust
         * @static
         * @param {proto.IAckTrust=} [properties] Properties to set
         * @returns {proto.AckTrust} AckTrust instance
         */
        AckTrust.create = function create(properties) {
            return new AckTrust(properties);
        };

        /**
         * Encodes the specified AckTrust message. Does not implicitly {@link proto.AckTrust.verify|verify} messages.
         * @function encode
         * @memberof proto.AckTrust
         * @static
         * @param {proto.IAckTrust} message AckTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckTrust.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified AckTrust message, length delimited. Does not implicitly {@link proto.AckTrust.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AckTrust
         * @static
         * @param {proto.IAckTrust} message AckTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckTrust.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckTrust message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AckTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AckTrust} AckTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckTrust.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AckTrust();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckTrust message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AckTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AckTrust} AckTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckTrust.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckTrust message.
         * @function verify
         * @memberof proto.AckTrust
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckTrust.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                return "userId: integer|Long expected";
            if (!$util.isString(message.tableId))
                return "tableId: string expected";
            return null;
        };

        return AckTrust;
    })();

    return proto;
})();

$root.message = (function() {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    var message = {};

    message.HeartBeatReq = (function() {

        /**
         * Properties of a HeartBeatReq.
         * @memberof message
         * @interface IHeartBeatReq
         * @property {number|Long} time HeartBeatReq time
         */

        /**
         * Constructs a new HeartBeatReq.
         * @memberof message
         * @classdesc Represents a HeartBeatReq.
         * @implements IHeartBeatReq
         * @constructor
         * @param {message.IHeartBeatReq=} [properties] Properties to set
         */
        function HeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatReq time.
         * @member {number|Long} time
         * @memberof message.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @function create
         * @memberof message.HeartBeatReq
         * @static
         * @param {message.IHeartBeatReq=} [properties] Properties to set
         * @returns {message.HeartBeatReq} HeartBeatReq instance
         */
        HeartBeatReq.create = function create(properties) {
            return new HeartBeatReq(properties);
        };

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link message.HeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof message.HeartBeatReq
         * @static
         * @param {message.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link message.HeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.HeartBeatReq
         * @static
         * @param {message.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof message.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.HeartBeatReq();
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
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatReq message.
         * @function verify
         * @memberof message.HeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
            return null;
        };

        return HeartBeatReq;
    })();

    message.HeartBeatAck = (function() {

        /**
         * Properties of a HeartBeatAck.
         * @memberof message
         * @interface IHeartBeatAck
         * @property {number|Long|null} [time] HeartBeatAck time
         */

        /**
         * Constructs a new HeartBeatAck.
         * @memberof message
         * @classdesc Represents a HeartBeatAck.
         * @implements IHeartBeatAck
         * @constructor
         * @param {message.IHeartBeatAck=} [properties] Properties to set
         */
        function HeartBeatAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatAck time.
         * @member {number|Long} time
         * @memberof message.HeartBeatAck
         * @instance
         */
        HeartBeatAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartBeatAck instance using the specified properties.
         * @function create
         * @memberof message.HeartBeatAck
         * @static
         * @param {message.IHeartBeatAck=} [properties] Properties to set
         * @returns {message.HeartBeatAck} HeartBeatAck instance
         */
        HeartBeatAck.create = function create(properties) {
            return new HeartBeatAck(properties);
        };

        /**
         * Encodes the specified HeartBeatAck message. Does not implicitly {@link message.HeartBeatAck.verify|verify} messages.
         * @function encode
         * @memberof message.HeartBeatAck
         * @static
         * @param {message.IHeartBeatAck} message HeartBeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatAck message, length delimited. Does not implicitly {@link message.HeartBeatAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.HeartBeatAck
         * @static
         * @param {message.IHeartBeatAck} message HeartBeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer.
         * @function decode
         * @memberof message.HeartBeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.HeartBeatAck} HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.HeartBeatAck();
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
         * Decodes a HeartBeatAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.HeartBeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.HeartBeatAck} HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatAck message.
         * @function verify
         * @memberof message.HeartBeatAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            return null;
        };

        return HeartBeatAck;
    })();

    message.reqLogin = (function() {

        /**
         * Properties of a reqLogin.
         * @memberof message
         * @interface IreqLogin
         * @property {string} userName reqLogin userName
         * @property {string} avatarUrl reqLogin avatarUrl
         * @property {string} channelId reqLogin channelId
         * @property {number|null} [gameId] reqLogin gameId
         * @property {string} ticket reqLogin ticket
         */

        /**
         * Constructs a new reqLogin.
         * @memberof message
         * @classdesc Represents a reqLogin.
         * @implements IreqLogin
         * @constructor
         * @param {message.IreqLogin=} [properties] Properties to set
         */
        function reqLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * reqLogin userName.
         * @member {string} userName
         * @memberof message.reqLogin
         * @instance
         */
        reqLogin.prototype.userName = "";

        /**
         * reqLogin avatarUrl.
         * @member {string} avatarUrl
         * @memberof message.reqLogin
         * @instance
         */
        reqLogin.prototype.avatarUrl = "";

        /**
         * reqLogin channelId.
         * @member {string} channelId
         * @memberof message.reqLogin
         * @instance
         */
        reqLogin.prototype.channelId = "";

        /**
         * reqLogin gameId.
         * @member {number} gameId
         * @memberof message.reqLogin
         * @instance
         */
        reqLogin.prototype.gameId = 0;

        /**
         * reqLogin ticket.
         * @member {string} ticket
         * @memberof message.reqLogin
         * @instance
         */
        reqLogin.prototype.ticket = "";

        /**
         * Creates a new reqLogin instance using the specified properties.
         * @function create
         * @memberof message.reqLogin
         * @static
         * @param {message.IreqLogin=} [properties] Properties to set
         * @returns {message.reqLogin} reqLogin instance
         */
        reqLogin.create = function create(properties) {
            return new reqLogin(properties);
        };

        /**
         * Encodes the specified reqLogin message. Does not implicitly {@link message.reqLogin.verify|verify} messages.
         * @function encode
         * @memberof message.reqLogin
         * @static
         * @param {message.IreqLogin} message reqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reqLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.channelId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gameId);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.ticket);
            return writer;
        };

        /**
         * Encodes the specified reqLogin message, length delimited. Does not implicitly {@link message.reqLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.reqLogin
         * @static
         * @param {message.IreqLogin} message reqLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reqLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a reqLogin message from the specified reader or buffer.
         * @function decode
         * @memberof message.reqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.reqLogin} reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reqLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.reqLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.avatarUrl = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
                    break;
                case 4:
                    message.gameId = reader.int32();
                    break;
                case 5:
                    message.ticket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("avatarUrl"))
                throw $util.ProtocolError("missing required 'avatarUrl'", { instance: message });
            if (!message.hasOwnProperty("channelId"))
                throw $util.ProtocolError("missing required 'channelId'", { instance: message });
            if (!message.hasOwnProperty("ticket"))
                throw $util.ProtocolError("missing required 'ticket'", { instance: message });
            return message;
        };

        /**
         * Decodes a reqLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.reqLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.reqLogin} reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reqLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a reqLogin message.
         * @function verify
         * @memberof message.reqLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        reqLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (!$util.isString(message.avatarUrl))
                return "avatarUrl: string expected";
            if (!$util.isString(message.channelId))
                return "channelId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (!$util.isString(message.ticket))
                return "ticket: string expected";
            return null;
        };

        return reqLogin;
    })();

    message.ackLogin = (function() {

        /**
         * Properties of an ackLogin.
         * @memberof message
         * @interface IackLogin
         * @property {number} result ackLogin result
         * @property {string|null} [userName] ackLogin userName
         * @property {string|null} [showName] ackLogin showName
         * @property {string|null} [userIp] ackLogin userIp
         * @property {string|null} [enterCode] ackLogin enterCode
         * @property {number|null} [ingame] ackLogin ingame
         */

        /**
         * Constructs a new ackLogin.
         * @memberof message
         * @classdesc Represents an ackLogin.
         * @implements IackLogin
         * @constructor
         * @param {message.IackLogin=} [properties] Properties to set
         */
        function ackLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ackLogin result.
         * @member {number} result
         * @memberof message.ackLogin
         * @instance
         */
        ackLogin.prototype.result = 0;

        /**
         * ackLogin userName.
         * @member {string} userName
         * @memberof message.ackLogin
         * @instance
         */
        ackLogin.prototype.userName = "";

        /**
         * ackLogin showName.
         * @member {string} showName
         * @memberof message.ackLogin
         * @instance
         */
        ackLogin.prototype.showName = "";

        /**
         * ackLogin userIp.
         * @member {string} userIp
         * @memberof message.ackLogin
         * @instance
         */
        ackLogin.prototype.userIp = "";

        /**
         * ackLogin enterCode.
         * @member {string} enterCode
         * @memberof message.ackLogin
         * @instance
         */
        ackLogin.prototype.enterCode = "";

        /**
         * ackLogin ingame.
         * @member {number} ingame
         * @memberof message.ackLogin
         * @instance
         */
        ackLogin.prototype.ingame = 0;

        /**
         * Creates a new ackLogin instance using the specified properties.
         * @function create
         * @memberof message.ackLogin
         * @static
         * @param {message.IackLogin=} [properties] Properties to set
         * @returns {message.ackLogin} ackLogin instance
         */
        ackLogin.create = function create(properties) {
            return new ackLogin(properties);
        };

        /**
         * Encodes the specified ackLogin message. Does not implicitly {@link message.ackLogin.verify|verify} messages.
         * @function encode
         * @memberof message.ackLogin
         * @static
         * @param {message.IackLogin} message ackLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ackLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.showName != null && message.hasOwnProperty("showName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.showName);
            if (message.userIp != null && message.hasOwnProperty("userIp"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userIp);
            if (message.enterCode != null && message.hasOwnProperty("enterCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.enterCode);
            if (message.ingame != null && message.hasOwnProperty("ingame"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ingame);
            return writer;
        };

        /**
         * Encodes the specified ackLogin message, length delimited. Does not implicitly {@link message.ackLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ackLogin
         * @static
         * @param {message.IackLogin} message ackLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ackLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ackLogin message from the specified reader or buffer.
         * @function decode
         * @memberof message.ackLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ackLogin} ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ackLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ackLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.showName = reader.string();
                    break;
                case 4:
                    message.userIp = reader.string();
                    break;
                case 5:
                    message.enterCode = reader.string();
                    break;
                case 6:
                    message.ingame = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            return message;
        };

        /**
         * Decodes an ackLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ackLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ackLogin} ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ackLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ackLogin message.
         * @function verify
         * @memberof message.ackLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ackLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.showName != null && message.hasOwnProperty("showName"))
                if (!$util.isString(message.showName))
                    return "showName: string expected";
            if (message.userIp != null && message.hasOwnProperty("userIp"))
                if (!$util.isString(message.userIp))
                    return "userIp: string expected";
            if (message.enterCode != null && message.hasOwnProperty("enterCode"))
                if (!$util.isString(message.enterCode))
                    return "enterCode: string expected";
            if (message.ingame != null && message.hasOwnProperty("ingame"))
                if (!$util.isInteger(message.ingame))
                    return "ingame: integer expected";
            return null;
        };

        return ackLogin;
    })();

    message.ByUserKickNtc = (function() {

        /**
         * Properties of a ByUserKickNtc.
         * @memberof message
         * @interface IByUserKickNtc
         * @property {number|null} [result] ByUserKickNtc result
         */

        /**
         * Constructs a new ByUserKickNtc.
         * @memberof message
         * @classdesc Represents a ByUserKickNtc.
         * @implements IByUserKickNtc
         * @constructor
         * @param {message.IByUserKickNtc=} [properties] Properties to set
         */
        function ByUserKickNtc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ByUserKickNtc result.
         * @member {number} result
         * @memberof message.ByUserKickNtc
         * @instance
         */
        ByUserKickNtc.prototype.result = 0;

        /**
         * Creates a new ByUserKickNtc instance using the specified properties.
         * @function create
         * @memberof message.ByUserKickNtc
         * @static
         * @param {message.IByUserKickNtc=} [properties] Properties to set
         * @returns {message.ByUserKickNtc} ByUserKickNtc instance
         */
        ByUserKickNtc.create = function create(properties) {
            return new ByUserKickNtc(properties);
        };

        /**
         * Encodes the specified ByUserKickNtc message. Does not implicitly {@link message.ByUserKickNtc.verify|verify} messages.
         * @function encode
         * @memberof message.ByUserKickNtc
         * @static
         * @param {message.IByUserKickNtc} message ByUserKickNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ByUserKickNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified ByUserKickNtc message, length delimited. Does not implicitly {@link message.ByUserKickNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ByUserKickNtc
         * @static
         * @param {message.IByUserKickNtc} message ByUserKickNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ByUserKickNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer.
         * @function decode
         * @memberof message.ByUserKickNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ByUserKickNtc} ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ByUserKickNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ByUserKickNtc();
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
         * Decodes a ByUserKickNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ByUserKickNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ByUserKickNtc} ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ByUserKickNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ByUserKickNtc message.
         * @function verify
         * @memberof message.ByUserKickNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ByUserKickNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            return null;
        };

        return ByUserKickNtc;
    })();

    message.NotifyMsgNtc = (function() {

        /**
         * Properties of a NotifyMsgNtc.
         * @memberof message
         * @interface INotifyMsgNtc
         * @property {number|null} [type] NotifyMsgNtc type
         * @property {string|null} [who] NotifyMsgNtc who
         * @property {string|null} [title] NotifyMsgNtc title
         * @property {string|null} [content] NotifyMsgNtc content
         * @property {string|null} [createTime] NotifyMsgNtc createTime
         * @property {number|null} [isLoop] NotifyMsgNtc isLoop
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
         * NotifyMsgNtc type.
         * @member {number} type
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.type = 0;

        /**
         * NotifyMsgNtc who.
         * @member {string} who
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.who = "";

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
         * NotifyMsgNtc isLoop.
         * @member {number} isLoop
         * @memberof message.NotifyMsgNtc
         * @instance
         */
        NotifyMsgNtc.prototype.isLoop = 0;

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
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.who != null && message.hasOwnProperty("who"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.who);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createTime);
            if (message.isLoop != null && message.hasOwnProperty("isLoop"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isLoop);
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
                    message.type = reader.int32();
                    break;
                case 2:
                    message.who = reader.string();
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
                case 6:
                    message.isLoop = reader.int32();
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
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.who != null && message.hasOwnProperty("who"))
                if (!$util.isString(message.who))
                    return "who: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isString(message.createTime))
                    return "createTime: string expected";
            if (message.isLoop != null && message.hasOwnProperty("isLoop"))
                if (!$util.isInteger(message.isLoop))
                    return "isLoop: integer expected";
            return null;
        };

        return NotifyMsgNtc;
    })();

    return message;
})();