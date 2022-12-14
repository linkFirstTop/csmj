var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.game = (function() {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    var game = {};

    game.ReqEnterGame = (function() {

        /**
         * Properties of a ReqEnterGame.
         * @memberof game
         * @interface IReqEnterGame
         * @property {string} GameID ReqEnterGame GameID
         * @property {string|null} [UserName] ReqEnterGame UserName
         * @property {string|null} [ticket] ReqEnterGame ticket
         */

        /**
         * Constructs a new ReqEnterGame.
         * @memberof game
         * @classdesc Represents a ReqEnterGame.
         * @implements IReqEnterGame
         * @constructor
         * @param {game.IReqEnterGame=} [properties] Properties to set
         */
        function ReqEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEnterGame GameID.
         * @member {string} GameID
         * @memberof game.ReqEnterGame
         * @instance
         */
        ReqEnterGame.prototype.GameID = "";

        /**
         * ReqEnterGame UserName.
         * @member {string} UserName
         * @memberof game.ReqEnterGame
         * @instance
         */
        ReqEnterGame.prototype.UserName = "";

        /**
         * ReqEnterGame ticket.
         * @member {string} ticket
         * @memberof game.ReqEnterGame
         * @instance
         */
        ReqEnterGame.prototype.ticket = "";

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @function create
         * @memberof game.ReqEnterGame
         * @static
         * @param {game.IReqEnterGame=} [properties] Properties to set
         * @returns {game.ReqEnterGame} ReqEnterGame instance
         */
        ReqEnterGame.create = function create(properties) {
            return new ReqEnterGame(properties);
        };

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link game.ReqEnterGame.verify|verify} messages.
         * @function encode
         * @memberof game.ReqEnterGame
         * @static
         * @param {game.IReqEnterGame} message ReqEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.GameID);
            if (message.UserName != null && Object.hasOwnProperty.call(message, "UserName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserName);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ticket);
            return writer;
        };

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link game.ReqEnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqEnterGame
         * @static
         * @param {game.IReqEnterGame} message ReqEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqEnterGame} ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.string();
                    break;
                case 2:
                    message.UserName = reader.string();
                    break;
                case 3:
                    message.ticket = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqEnterGame} ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEnterGame message.
         * @function verify
         * @memberof game.ReqEnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.GameID))
                return "GameID: string expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            return null;
        };

        return ReqEnterGame;
    })();

    game.AckEnterGame = (function() {

        /**
         * Properties of an AckEnterGame.
         * @memberof game
         * @interface IAckEnterGame
         * @property {boolean} Result AckEnterGame Result
         * @property {string} GameID AckEnterGame GameID
         * @property {number} ErrorID AckEnterGame ErrorID
         * @property {string|null} [game_guid] AckEnterGame game_guid
         */

        /**
         * Constructs a new AckEnterGame.
         * @memberof game
         * @classdesc Represents an AckEnterGame.
         * @implements IAckEnterGame
         * @constructor
         * @param {game.IAckEnterGame=} [properties] Properties to set
         */
        function AckEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckEnterGame Result.
         * @member {boolean} Result
         * @memberof game.AckEnterGame
         * @instance
         */
        AckEnterGame.prototype.Result = false;

        /**
         * AckEnterGame GameID.
         * @member {string} GameID
         * @memberof game.AckEnterGame
         * @instance
         */
        AckEnterGame.prototype.GameID = "";

        /**
         * AckEnterGame ErrorID.
         * @member {number} ErrorID
         * @memberof game.AckEnterGame
         * @instance
         */
        AckEnterGame.prototype.ErrorID = 0;

        /**
         * AckEnterGame game_guid.
         * @member {string} game_guid
         * @memberof game.AckEnterGame
         * @instance
         */
        AckEnterGame.prototype.game_guid = "";

        /**
         * Creates a new AckEnterGame instance using the specified properties.
         * @function create
         * @memberof game.AckEnterGame
         * @static
         * @param {game.IAckEnterGame=} [properties] Properties to set
         * @returns {game.AckEnterGame} AckEnterGame instance
         */
        AckEnterGame.create = function create(properties) {
            return new AckEnterGame(properties);
        };

        /**
         * Encodes the specified AckEnterGame message. Does not implicitly {@link game.AckEnterGame.verify|verify} messages.
         * @function encode
         * @memberof game.AckEnterGame
         * @static
         * @param {game.IAckEnterGame} message AckEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Result);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ErrorID);
            if (message.game_guid != null && Object.hasOwnProperty.call(message, "game_guid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.game_guid);
            return writer;
        };

        /**
         * Encodes the specified AckEnterGame message, length delimited. Does not implicitly {@link game.AckEnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckEnterGame
         * @static
         * @param {game.IAckEnterGame} message AckEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckEnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckEnterGame} AckEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Result = reader.bool();
                    break;
                case 2:
                    message.GameID = reader.string();
                    break;
                case 3:
                    message.ErrorID = reader.int32();
                    break;
                case 4:
                    message.game_guid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance: message });
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("ErrorID"))
                throw $util.ProtocolError("missing required 'ErrorID'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckEnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckEnterGame} AckEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckEnterGame message.
         * @function verify
         * @memberof game.AckEnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.Result !== "boolean")
                return "Result: boolean expected";
            if (!$util.isString(message.GameID))
                return "GameID: string expected";
            if (!$util.isInteger(message.ErrorID))
                return "ErrorID: integer expected";
            if (message.game_guid != null && message.hasOwnProperty("game_guid"))
                if (!$util.isString(message.game_guid))
                    return "game_guid: string expected";
            return null;
        };

        return AckEnterGame;
    })();

    game.ErrorID = (function() {

        /**
         * Properties of an ErrorID.
         * @memberof game
         * @interface IErrorID
         * @property {number} PLATER_NOT_ENOUGH ErrorID PLATER_NOT_ENOUGH
         * @property {number} GAMEID_IS_ERROR ErrorID GAMEID_IS_ERROR
         */

        /**
         * Constructs a new ErrorID.
         * @memberof game
         * @classdesc Represents an ErrorID.
         * @implements IErrorID
         * @constructor
         * @param {game.IErrorID=} [properties] Properties to set
         */
        function ErrorID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorID PLATER_NOT_ENOUGH.
         * @member {number} PLATER_NOT_ENOUGH
         * @memberof game.ErrorID
         * @instance
         */
        ErrorID.prototype.PLATER_NOT_ENOUGH = 0;

        /**
         * ErrorID GAMEID_IS_ERROR.
         * @member {number} GAMEID_IS_ERROR
         * @memberof game.ErrorID
         * @instance
         */
        ErrorID.prototype.GAMEID_IS_ERROR = 0;

        /**
         * Creates a new ErrorID instance using the specified properties.
         * @function create
         * @memberof game.ErrorID
         * @static
         * @param {game.IErrorID=} [properties] Properties to set
         * @returns {game.ErrorID} ErrorID instance
         */
        ErrorID.create = function create(properties) {
            return new ErrorID(properties);
        };

        /**
         * Encodes the specified ErrorID message. Does not implicitly {@link game.ErrorID.verify|verify} messages.
         * @function encode
         * @memberof game.ErrorID
         * @static
         * @param {game.IErrorID} message ErrorID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PLATER_NOT_ENOUGH);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GAMEID_IS_ERROR);
            return writer;
        };

        /**
         * Encodes the specified ErrorID message, length delimited. Does not implicitly {@link game.ErrorID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ErrorID
         * @static
         * @param {game.IErrorID} message ErrorID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorID message from the specified reader or buffer.
         * @function decode
         * @memberof game.ErrorID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ErrorID} ErrorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ErrorID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PLATER_NOT_ENOUGH = reader.int32();
                    break;
                case 2:
                    message.GAMEID_IS_ERROR = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("PLATER_NOT_ENOUGH"))
                throw $util.ProtocolError("missing required 'PLATER_NOT_ENOUGH'", { instance: message });
            if (!message.hasOwnProperty("GAMEID_IS_ERROR"))
                throw $util.ProtocolError("missing required 'GAMEID_IS_ERROR'", { instance: message });
            return message;
        };

        /**
         * Decodes an ErrorID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ErrorID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ErrorID} ErrorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorID message.
         * @function verify
         * @memberof game.ErrorID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.PLATER_NOT_ENOUGH))
                return "PLATER_NOT_ENOUGH: integer expected";
            if (!$util.isInteger(message.GAMEID_IS_ERROR))
                return "GAMEID_IS_ERROR: integer expected";
            return null;
        };

        return ErrorID;
    })();

    game.ReqReadyGame = (function() {

        /**
         * Properties of a ReqReadyGame.
         * @memberof game
         * @interface IReqReadyGame
         * @property {string} GameID ReqReadyGame GameID
         * @property {string|null} [UserName] ReqReadyGame UserName
         */

        /**
         * Constructs a new ReqReadyGame.
         * @memberof game
         * @classdesc Represents a ReqReadyGame.
         * @implements IReqReadyGame
         * @constructor
         * @param {game.IReqReadyGame=} [properties] Properties to set
         */
        function ReqReadyGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqReadyGame GameID.
         * @member {string} GameID
         * @memberof game.ReqReadyGame
         * @instance
         */
        ReqReadyGame.prototype.GameID = "";

        /**
         * ReqReadyGame UserName.
         * @member {string} UserName
         * @memberof game.ReqReadyGame
         * @instance
         */
        ReqReadyGame.prototype.UserName = "";

        /**
         * Creates a new ReqReadyGame instance using the specified properties.
         * @function create
         * @memberof game.ReqReadyGame
         * @static
         * @param {game.IReqReadyGame=} [properties] Properties to set
         * @returns {game.ReqReadyGame} ReqReadyGame instance
         */
        ReqReadyGame.create = function create(properties) {
            return new ReqReadyGame(properties);
        };

        /**
         * Encodes the specified ReqReadyGame message. Does not implicitly {@link game.ReqReadyGame.verify|verify} messages.
         * @function encode
         * @memberof game.ReqReadyGame
         * @static
         * @param {game.IReqReadyGame} message ReqReadyGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReadyGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.GameID);
            if (message.UserName != null && Object.hasOwnProperty.call(message, "UserName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserName);
            return writer;
        };

        /**
         * Encodes the specified ReqReadyGame message, length delimited. Does not implicitly {@link game.ReqReadyGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqReadyGame
         * @static
         * @param {game.IReqReadyGame} message ReqReadyGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReadyGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqReadyGame message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqReadyGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqReadyGame} ReqReadyGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReadyGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqReadyGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.string();
                    break;
                case 2:
                    message.UserName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqReadyGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqReadyGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqReadyGame} ReqReadyGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReadyGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqReadyGame message.
         * @function verify
         * @memberof game.ReqReadyGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqReadyGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.GameID))
                return "GameID: string expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            return null;
        };

        return ReqReadyGame;
    })();

    game.AckGameOver = (function() {

        /**
         * Properties of an AckGameOver.
         * @memberof game
         * @interface IAckGameOver
         * @property {number} ErrorID AckGameOver ErrorID
         */

        /**
         * Constructs a new AckGameOver.
         * @memberof game
         * @classdesc Represents an AckGameOver.
         * @implements IAckGameOver
         * @constructor
         * @param {game.IAckGameOver=} [properties] Properties to set
         */
        function AckGameOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameOver ErrorID.
         * @member {number} ErrorID
         * @memberof game.AckGameOver
         * @instance
         */
        AckGameOver.prototype.ErrorID = 0;

        /**
         * Creates a new AckGameOver instance using the specified properties.
         * @function create
         * @memberof game.AckGameOver
         * @static
         * @param {game.IAckGameOver=} [properties] Properties to set
         * @returns {game.AckGameOver} AckGameOver instance
         */
        AckGameOver.create = function create(properties) {
            return new AckGameOver(properties);
        };

        /**
         * Encodes the specified AckGameOver message. Does not implicitly {@link game.AckGameOver.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameOver
         * @static
         * @param {game.IAckGameOver} message AckGameOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrorID);
            return writer;
        };

        /**
         * Encodes the specified AckGameOver message, length delimited. Does not implicitly {@link game.AckGameOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameOver
         * @static
         * @param {game.IAckGameOver} message AckGameOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameOver message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameOver} AckGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrorID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ErrorID"))
                throw $util.ProtocolError("missing required 'ErrorID'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckGameOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameOver} AckGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameOver message.
         * @function verify
         * @memberof game.AckGameOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ErrorID))
                return "ErrorID: integer expected";
            return null;
        };

        return AckGameOver;
    })();

    game.AckPlayerList = (function() {

        /**
         * Properties of an AckPlayerList.
         * @memberof game
         * @interface IAckPlayerList
         * @property {Array.<game.IPlayerInfo>|null} [PlayerList] AckPlayerList PlayerList
         */

        /**
         * Constructs a new AckPlayerList.
         * @memberof game
         * @classdesc Represents an AckPlayerList.
         * @implements IAckPlayerList
         * @constructor
         * @param {game.IAckPlayerList=} [properties] Properties to set
         */
        function AckPlayerList(properties) {
            this.PlayerList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPlayerList PlayerList.
         * @member {Array.<game.IPlayerInfo>} PlayerList
         * @memberof game.AckPlayerList
         * @instance
         */
        AckPlayerList.prototype.PlayerList = $util.emptyArray;

        /**
         * Creates a new AckPlayerList instance using the specified properties.
         * @function create
         * @memberof game.AckPlayerList
         * @static
         * @param {game.IAckPlayerList=} [properties] Properties to set
         * @returns {game.AckPlayerList} AckPlayerList instance
         */
        AckPlayerList.create = function create(properties) {
            return new AckPlayerList(properties);
        };

        /**
         * Encodes the specified AckPlayerList message. Does not implicitly {@link game.AckPlayerList.verify|verify} messages.
         * @function encode
         * @memberof game.AckPlayerList
         * @static
         * @param {game.IAckPlayerList} message AckPlayerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerList != null && message.PlayerList.length)
                for (var i = 0; i < message.PlayerList.length; ++i)
                    $root.game.PlayerInfo.encode(message.PlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckPlayerList message, length delimited. Does not implicitly {@link game.AckPlayerList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckPlayerList
         * @static
         * @param {game.IAckPlayerList} message AckPlayerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckPlayerList message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckPlayerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckPlayerList} AckPlayerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckPlayerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.PlayerList && message.PlayerList.length))
                        message.PlayerList = [];
                    message.PlayerList.push($root.game.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AckPlayerList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckPlayerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckPlayerList} AckPlayerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckPlayerList message.
         * @function verify
         * @memberof game.AckPlayerList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckPlayerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PlayerList != null && message.hasOwnProperty("PlayerList")) {
                if (!Array.isArray(message.PlayerList))
                    return "PlayerList: array expected";
                for (var i = 0; i < message.PlayerList.length; ++i) {
                    var error = $root.game.PlayerInfo.verify(message.PlayerList[i]);
                    if (error)
                        return "PlayerList." + error;
                }
            }
            return null;
        };

        return AckPlayerList;
    })();

    game.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof game
         * @interface IPlayerInfo
         * @property {string|null} [UserName] PlayerInfo UserName
         * @property {string|null} [UsershowName] PlayerInfo UsershowName
         * @property {string|null} [UserImage] PlayerInfo UserImage
         * @property {number|null} [UserSit] PlayerInfo UserSit
         * @property {number|null} [Integral] PlayerInfo Integral
         * @property {number|Long|null} [Coin] PlayerInfo Coin
         * @property {game.IRank|null} [NowLevel] PlayerInfo NowLevel
         * @property {game.IRank|null} [HisLevel] PlayerInfo HisLevel
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
         * @property {game.IRank|null} [HistoryMaxLevel] PlayerInfo HistoryMaxLevel
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
         * @memberof game
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {game.IPlayerInfo=} [properties] Properties to set
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
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UserName = "";

        /**
         * PlayerInfo UsershowName.
         * @member {string} UsershowName
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UsershowName = "";

        /**
         * PlayerInfo UserImage.
         * @member {string} UserImage
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UserImage = "";

        /**
         * PlayerInfo UserSit.
         * @member {number} UserSit
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.UserSit = 0;

        /**
         * PlayerInfo Integral.
         * @member {number} Integral
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Integral = 0;

        /**
         * PlayerInfo Coin.
         * @member {number|Long} Coin
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo NowLevel.
         * @member {game.IRank|null|undefined} NowLevel
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.NowLevel = null;

        /**
         * PlayerInfo HisLevel.
         * @member {game.IRank|null|undefined} HisLevel
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.HisLevel = null;

        /**
         * PlayerInfo Stage.
         * @member {number} Stage
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Stage = 0;

        /**
         * PlayerInfo Ranking.
         * @member {number} Ranking
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Ranking = 0;

        /**
         * PlayerInfo WinIntegral.
         * @member {number} WinIntegral
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.WinIntegral = 0;

        /**
         * PlayerInfo TotalNum.
         * @member {number} TotalNum
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.TotalNum = 0;

        /**
         * PlayerInfo ReadyNum.
         * @member {number} ReadyNum
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ReadyNum = 0;

        /**
         * PlayerInfo HuNum.
         * @member {number} HuNum
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.HuNum = 0;

        /**
         * PlayerInfo GunNum.
         * @member {number} GunNum
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.GunNum = 0;

        /**
         * PlayerInfo ZimoNum.
         * @member {number} ZimoNum
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ZimoNum = 0;

        /**
         * PlayerInfo Sex.
         * @member {number} Sex
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Sex = 0;

        /**
         * PlayerInfo IsMember.
         * @member {boolean} IsMember
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.IsMember = false;

        /**
         * PlayerInfo HistoryMaxLevel.
         * @member {game.IRank|null|undefined} HistoryMaxLevel
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.HistoryMaxLevel = null;

        /**
         * PlayerInfo Average_Rank.
         * @member {number} Average_Rank
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Average_Rank = 0;

        /**
         * PlayerInfo Openingrate.
         * @member {number} Openingrate
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Openingrate = 0;

        /**
         * PlayerInfo Round2_rank1.
         * @member {number} Round2_rank1
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank1 = 0;

        /**
         * PlayerInfo Round2_rank2.
         * @member {number} Round2_rank2
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank2 = 0;

        /**
         * PlayerInfo Round2_rank3.
         * @member {number} Round2_rank3
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank3 = 0;

        /**
         * PlayerInfo Round2_rank4.
         * @member {number} Round2_rank4
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round2_rank4 = 0;

        /**
         * PlayerInfo Round4_rank1.
         * @member {number} Round4_rank1
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank1 = 0;

        /**
         * PlayerInfo Round4_rank2.
         * @member {number} Round4_rank2
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank2 = 0;

        /**
         * PlayerInfo Round4_rank3.
         * @member {number} Round4_rank3
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank3 = 0;

        /**
         * PlayerInfo Round4_rank4.
         * @member {number} Round4_rank4
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.Round4_rank4 = 0;

        /**
         * PlayerInfo SocietyContributionValue.
         * @member {number} SocietyContributionValue
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyContributionValue = 0;

        /**
         * PlayerInfo SocietyPracticeType.
         * @member {number} SocietyPracticeType
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeType = 0;

        /**
         * PlayerInfo SocietyPracticeFirstCount.
         * @member {number} SocietyPracticeFirstCount
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeFirstCount = 0;

        /**
         * PlayerInfo SocietyPracticeSecondCount.
         * @member {number} SocietyPracticeSecondCount
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeSecondCount = 0;

        /**
         * PlayerInfo SocietyPracticeFourCount.
         * @member {number} SocietyPracticeFourCount
         * @memberof game.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.SocietyPracticeFourCount = 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof game.PlayerInfo
         * @static
         * @param {game.IPlayerInfo=} [properties] Properties to set
         * @returns {game.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerInfo
         * @static
         * @param {game.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserName != null && Object.hasOwnProperty.call(message, "UserName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            if (message.UsershowName != null && Object.hasOwnProperty.call(message, "UsershowName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UsershowName);
            if (message.UserImage != null && Object.hasOwnProperty.call(message, "UserImage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.UserImage);
            if (message.UserSit != null && Object.hasOwnProperty.call(message, "UserSit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.UserSit);
            if (message.Integral != null && Object.hasOwnProperty.call(message, "Integral"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Integral);
            if (message.Coin != null && Object.hasOwnProperty.call(message, "Coin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.Coin);
            if (message.NowLevel != null && Object.hasOwnProperty.call(message, "NowLevel"))
                $root.game.Rank.encode(message.NowLevel, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.HisLevel != null && Object.hasOwnProperty.call(message, "HisLevel"))
                $root.game.Rank.encode(message.HisLevel, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.Stage != null && Object.hasOwnProperty.call(message, "Stage"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Stage);
            if (message.Ranking != null && Object.hasOwnProperty.call(message, "Ranking"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Ranking);
            if (message.WinIntegral != null && Object.hasOwnProperty.call(message, "WinIntegral"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.WinIntegral);
            if (message.TotalNum != null && Object.hasOwnProperty.call(message, "TotalNum"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.TotalNum);
            if (message.ReadyNum != null && Object.hasOwnProperty.call(message, "ReadyNum"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ReadyNum);
            if (message.HuNum != null && Object.hasOwnProperty.call(message, "HuNum"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.HuNum);
            if (message.GunNum != null && Object.hasOwnProperty.call(message, "GunNum"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.GunNum);
            if (message.ZimoNum != null && Object.hasOwnProperty.call(message, "ZimoNum"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.ZimoNum);
            if (message.Sex != null && Object.hasOwnProperty.call(message, "Sex"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.Sex);
            if (message.IsMember != null && Object.hasOwnProperty.call(message, "IsMember"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.IsMember);
            if (message.HistoryMaxLevel != null && Object.hasOwnProperty.call(message, "HistoryMaxLevel"))
                $root.game.Rank.encode(message.HistoryMaxLevel, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.Average_Rank != null && Object.hasOwnProperty.call(message, "Average_Rank"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.Average_Rank);
            if (message.Openingrate != null && Object.hasOwnProperty.call(message, "Openingrate"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.Openingrate);
            if (message.Round2_rank1 != null && Object.hasOwnProperty.call(message, "Round2_rank1"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.Round2_rank1);
            if (message.Round2_rank2 != null && Object.hasOwnProperty.call(message, "Round2_rank2"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.Round2_rank2);
            if (message.Round2_rank3 != null && Object.hasOwnProperty.call(message, "Round2_rank3"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.Round2_rank3);
            if (message.Round2_rank4 != null && Object.hasOwnProperty.call(message, "Round2_rank4"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.Round2_rank4);
            if (message.Round4_rank1 != null && Object.hasOwnProperty.call(message, "Round4_rank1"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.Round4_rank1);
            if (message.Round4_rank2 != null && Object.hasOwnProperty.call(message, "Round4_rank2"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.Round4_rank2);
            if (message.Round4_rank3 != null && Object.hasOwnProperty.call(message, "Round4_rank3"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.Round4_rank3);
            if (message.Round4_rank4 != null && Object.hasOwnProperty.call(message, "Round4_rank4"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.Round4_rank4);
            if (message.SocietyContributionValue != null && Object.hasOwnProperty.call(message, "SocietyContributionValue"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.SocietyContributionValue);
            if (message.SocietyPracticeType != null && Object.hasOwnProperty.call(message, "SocietyPracticeType"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.SocietyPracticeType);
            if (message.SocietyPracticeFirstCount != null && Object.hasOwnProperty.call(message, "SocietyPracticeFirstCount"))
                writer.uint32(/* id 32, wireType 0 =*/256).int32(message.SocietyPracticeFirstCount);
            if (message.SocietyPracticeSecondCount != null && Object.hasOwnProperty.call(message, "SocietyPracticeSecondCount"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.SocietyPracticeSecondCount);
            if (message.SocietyPracticeFourCount != null && Object.hasOwnProperty.call(message, "SocietyPracticeFourCount"))
                writer.uint32(/* id 34, wireType 0 =*/272).int32(message.SocietyPracticeFourCount);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerInfo
         * @static
         * @param {game.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerInfo();
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
                    message.NowLevel = $root.game.Rank.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.HisLevel = $root.game.Rank.decode(reader, reader.uint32());
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
                    message.HistoryMaxLevel = $root.game.Rank.decode(reader, reader.uint32());
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
         * @memberof game.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerInfo} PlayerInfo
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
         * @memberof game.PlayerInfo
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
                var error = $root.game.Rank.verify(message.NowLevel);
                if (error)
                    return "NowLevel." + error;
            }
            if (message.HisLevel != null && message.hasOwnProperty("HisLevel")) {
                var error = $root.game.Rank.verify(message.HisLevel);
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
                var error = $root.game.Rank.verify(message.HistoryMaxLevel);
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

    game.Rank = (function() {

        /**
         * Properties of a Rank.
         * @memberof game
         * @interface IRank
         * @property {number} duan Rank duan
         * @property {number} xing Rank xing
         */

        /**
         * Constructs a new Rank.
         * @memberof game
         * @classdesc Represents a Rank.
         * @implements IRank
         * @constructor
         * @param {game.IRank=} [properties] Properties to set
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
         * @memberof game.Rank
         * @instance
         */
        Rank.prototype.duan = 0;

        /**
         * Rank xing.
         * @member {number} xing
         * @memberof game.Rank
         * @instance
         */
        Rank.prototype.xing = 0;

        /**
         * Creates a new Rank instance using the specified properties.
         * @function create
         * @memberof game.Rank
         * @static
         * @param {game.IRank=} [properties] Properties to set
         * @returns {game.Rank} Rank instance
         */
        Rank.create = function create(properties) {
            return new Rank(properties);
        };

        /**
         * Encodes the specified Rank message. Does not implicitly {@link game.Rank.verify|verify} messages.
         * @function encode
         * @memberof game.Rank
         * @static
         * @param {game.IRank} message Rank message or plain object to encode
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
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link game.Rank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.Rank
         * @static
         * @param {game.IRank} message Rank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @function decode
         * @memberof game.Rank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.Rank} Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.Rank();
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
         * @memberof game.Rank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.Rank} Rank
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
         * @memberof game.Rank
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

    game.AckGameRule = (function() {

        /**
         * Properties of an AckGameRule.
         * @memberof game
         * @interface IAckGameRule
         * @property {number} FirstSit AckGameRule FirstSit
         * @property {number} GameType AckGameRule GameType
         * @property {number} Is_Next_ChiPengGangTime AckGameRule Is_Next_ChiPengGangTime
         * @property {number} Not_Next_ChiPengGangTime AckGameRule Not_Next_ChiPengGangTime
         * @property {number} HuTime AckGameRule HuTime
         * @property {number} PlayTime AckGameRule PlayTime
         * @property {number} DelayTime AckGameRule DelayTime
         * @property {number} DelayRestrictions AckGameRule DelayRestrictions
         * @property {number} Bureau AckGameRule Bureau
         * @property {number} Ring AckGameRule Ring
         * @property {number} PAIR AckGameRule PAIR
         * @property {number} TrustRestrictions AckGameRule TrustRestrictions
         * @property {number} FirstSendTime AckGameRule FirstSendTime
         * @property {number} ChiPengGangSurplusTime AckGameRule ChiPengGangSurplusTime
         * @property {number} ArrangementCardsOverTime AckGameRule ArrangementCardsOverTime
         * @property {number} GoOnGaneTime AckGameRule GoOnGaneTime
         * @property {number|null} [HuanSanzhang] AckGameRule HuanSanzhang
         * @property {number|null} [dingque] AckGameRule dingque
         */

        /**
         * Constructs a new AckGameRule.
         * @memberof game
         * @classdesc Represents an AckGameRule.
         * @implements IAckGameRule
         * @constructor
         * @param {game.IAckGameRule=} [properties] Properties to set
         */
        function AckGameRule(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameRule FirstSit.
         * @member {number} FirstSit
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.FirstSit = 0;

        /**
         * AckGameRule GameType.
         * @member {number} GameType
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.GameType = 0;

        /**
         * AckGameRule Is_Next_ChiPengGangTime.
         * @member {number} Is_Next_ChiPengGangTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.Is_Next_ChiPengGangTime = 0;

        /**
         * AckGameRule Not_Next_ChiPengGangTime.
         * @member {number} Not_Next_ChiPengGangTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.Not_Next_ChiPengGangTime = 0;

        /**
         * AckGameRule HuTime.
         * @member {number} HuTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.HuTime = 0;

        /**
         * AckGameRule PlayTime.
         * @member {number} PlayTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.PlayTime = 0;

        /**
         * AckGameRule DelayTime.
         * @member {number} DelayTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.DelayTime = 0;

        /**
         * AckGameRule DelayRestrictions.
         * @member {number} DelayRestrictions
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.DelayRestrictions = 0;

        /**
         * AckGameRule Bureau.
         * @member {number} Bureau
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.Bureau = 0;

        /**
         * AckGameRule Ring.
         * @member {number} Ring
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.Ring = 0;

        /**
         * AckGameRule PAIR.
         * @member {number} PAIR
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.PAIR = 0;

        /**
         * AckGameRule TrustRestrictions.
         * @member {number} TrustRestrictions
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.TrustRestrictions = 0;

        /**
         * AckGameRule FirstSendTime.
         * @member {number} FirstSendTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.FirstSendTime = 0;

        /**
         * AckGameRule ChiPengGangSurplusTime.
         * @member {number} ChiPengGangSurplusTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.ChiPengGangSurplusTime = 0;

        /**
         * AckGameRule ArrangementCardsOverTime.
         * @member {number} ArrangementCardsOverTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.ArrangementCardsOverTime = 0;

        /**
         * AckGameRule GoOnGaneTime.
         * @member {number} GoOnGaneTime
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.GoOnGaneTime = 0;

        /**
         * AckGameRule HuanSanzhang.
         * @member {number} HuanSanzhang
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.HuanSanzhang = 0;

        /**
         * AckGameRule dingque.
         * @member {number} dingque
         * @memberof game.AckGameRule
         * @instance
         */
        AckGameRule.prototype.dingque = 0;

        /**
         * Creates a new AckGameRule instance using the specified properties.
         * @function create
         * @memberof game.AckGameRule
         * @static
         * @param {game.IAckGameRule=} [properties] Properties to set
         * @returns {game.AckGameRule} AckGameRule instance
         */
        AckGameRule.create = function create(properties) {
            return new AckGameRule(properties);
        };

        /**
         * Encodes the specified AckGameRule message. Does not implicitly {@link game.AckGameRule.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameRule
         * @static
         * @param {game.IAckGameRule} message AckGameRule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameRule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FirstSit);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameType);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Is_Next_ChiPengGangTime);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Not_Next_ChiPengGangTime);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.HuTime);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PlayTime);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.DelayTime);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.DelayRestrictions);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Bureau);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Ring);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.PAIR);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.TrustRestrictions);
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.FirstSendTime);
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.ChiPengGangSurplusTime);
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.ArrangementCardsOverTime);
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.GoOnGaneTime);
            if (message.HuanSanzhang != null && Object.hasOwnProperty.call(message, "HuanSanzhang"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.HuanSanzhang);
            if (message.dingque != null && Object.hasOwnProperty.call(message, "dingque"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.dingque);
            return writer;
        };

        /**
         * Encodes the specified AckGameRule message, length delimited. Does not implicitly {@link game.AckGameRule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameRule
         * @static
         * @param {game.IAckGameRule} message AckGameRule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameRule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameRule message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameRule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameRule} AckGameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameRule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameRule();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FirstSit = reader.int32();
                    break;
                case 2:
                    message.GameType = reader.int32();
                    break;
                case 3:
                    message.Is_Next_ChiPengGangTime = reader.int32();
                    break;
                case 4:
                    message.Not_Next_ChiPengGangTime = reader.int32();
                    break;
                case 5:
                    message.HuTime = reader.int32();
                    break;
                case 6:
                    message.PlayTime = reader.int32();
                    break;
                case 7:
                    message.DelayTime = reader.int32();
                    break;
                case 8:
                    message.DelayRestrictions = reader.int32();
                    break;
                case 9:
                    message.Bureau = reader.int32();
                    break;
                case 10:
                    message.Ring = reader.int32();
                    break;
                case 11:
                    message.PAIR = reader.int32();
                    break;
                case 12:
                    message.TrustRestrictions = reader.int32();
                    break;
                case 13:
                    message.FirstSendTime = reader.int32();
                    break;
                case 14:
                    message.ChiPengGangSurplusTime = reader.int32();
                    break;
                case 15:
                    message.ArrangementCardsOverTime = reader.int32();
                    break;
                case 16:
                    message.GoOnGaneTime = reader.int32();
                    break;
                case 17:
                    message.HuanSanzhang = reader.int32();
                    break;
                case 18:
                    message.dingque = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FirstSit"))
                throw $util.ProtocolError("missing required 'FirstSit'", { instance: message });
            if (!message.hasOwnProperty("GameType"))
                throw $util.ProtocolError("missing required 'GameType'", { instance: message });
            if (!message.hasOwnProperty("Is_Next_ChiPengGangTime"))
                throw $util.ProtocolError("missing required 'Is_Next_ChiPengGangTime'", { instance: message });
            if (!message.hasOwnProperty("Not_Next_ChiPengGangTime"))
                throw $util.ProtocolError("missing required 'Not_Next_ChiPengGangTime'", { instance: message });
            if (!message.hasOwnProperty("HuTime"))
                throw $util.ProtocolError("missing required 'HuTime'", { instance: message });
            if (!message.hasOwnProperty("PlayTime"))
                throw $util.ProtocolError("missing required 'PlayTime'", { instance: message });
            if (!message.hasOwnProperty("DelayTime"))
                throw $util.ProtocolError("missing required 'DelayTime'", { instance: message });
            if (!message.hasOwnProperty("DelayRestrictions"))
                throw $util.ProtocolError("missing required 'DelayRestrictions'", { instance: message });
            if (!message.hasOwnProperty("Bureau"))
                throw $util.ProtocolError("missing required 'Bureau'", { instance: message });
            if (!message.hasOwnProperty("Ring"))
                throw $util.ProtocolError("missing required 'Ring'", { instance: message });
            if (!message.hasOwnProperty("PAIR"))
                throw $util.ProtocolError("missing required 'PAIR'", { instance: message });
            if (!message.hasOwnProperty("TrustRestrictions"))
                throw $util.ProtocolError("missing required 'TrustRestrictions'", { instance: message });
            if (!message.hasOwnProperty("FirstSendTime"))
                throw $util.ProtocolError("missing required 'FirstSendTime'", { instance: message });
            if (!message.hasOwnProperty("ChiPengGangSurplusTime"))
                throw $util.ProtocolError("missing required 'ChiPengGangSurplusTime'", { instance: message });
            if (!message.hasOwnProperty("ArrangementCardsOverTime"))
                throw $util.ProtocolError("missing required 'ArrangementCardsOverTime'", { instance: message });
            if (!message.hasOwnProperty("GoOnGaneTime"))
                throw $util.ProtocolError("missing required 'GoOnGaneTime'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckGameRule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameRule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameRule} AckGameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameRule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameRule message.
         * @function verify
         * @memberof game.AckGameRule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameRule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FirstSit))
                return "FirstSit: integer expected";
            if (!$util.isInteger(message.GameType))
                return "GameType: integer expected";
            if (!$util.isInteger(message.Is_Next_ChiPengGangTime))
                return "Is_Next_ChiPengGangTime: integer expected";
            if (!$util.isInteger(message.Not_Next_ChiPengGangTime))
                return "Not_Next_ChiPengGangTime: integer expected";
            if (!$util.isInteger(message.HuTime))
                return "HuTime: integer expected";
            if (!$util.isInteger(message.PlayTime))
                return "PlayTime: integer expected";
            if (!$util.isInteger(message.DelayTime))
                return "DelayTime: integer expected";
            if (!$util.isInteger(message.DelayRestrictions))
                return "DelayRestrictions: integer expected";
            if (!$util.isInteger(message.Bureau))
                return "Bureau: integer expected";
            if (!$util.isInteger(message.Ring))
                return "Ring: integer expected";
            if (!$util.isInteger(message.PAIR))
                return "PAIR: integer expected";
            if (!$util.isInteger(message.TrustRestrictions))
                return "TrustRestrictions: integer expected";
            if (!$util.isInteger(message.FirstSendTime))
                return "FirstSendTime: integer expected";
            if (!$util.isInteger(message.ChiPengGangSurplusTime))
                return "ChiPengGangSurplusTime: integer expected";
            if (!$util.isInteger(message.ArrangementCardsOverTime))
                return "ArrangementCardsOverTime: integer expected";
            if (!$util.isInteger(message.GoOnGaneTime))
                return "GoOnGaneTime: integer expected";
            if (message.HuanSanzhang != null && message.hasOwnProperty("HuanSanzhang"))
                if (!$util.isInteger(message.HuanSanzhang))
                    return "HuanSanzhang: integer expected";
            if (message.dingque != null && message.hasOwnProperty("dingque"))
                if (!$util.isInteger(message.dingque))
                    return "dingque: integer expected";
            return null;
        };

        return AckGameRule;
    })();

    game.AckDiceAndCards = (function() {

        /**
         * Properties of an AckDiceAndCards.
         * @memberof game
         * @interface IAckDiceAndCards
         * @property {number} FirstSit AckDiceAndCards FirstSit
         * @property {number} SecondSit AckDiceAndCards SecondSit
         * @property {string} FirstDice AckDiceAndCards FirstDice
         * @property {string} SecondDice AckDiceAndCards SecondDice
         * @property {number} FirstCardsIndexes AckDiceAndCards FirstCardsIndexes
         * @property {Array.<game.ICardInfo>|null} [HandCards] AckDiceAndCards HandCards
         * @property {Array.<game.ICardInfo>|null} [huan_san_zhang] AckDiceAndCards huan_san_zhang
         */

        /**
         * Constructs a new AckDiceAndCards.
         * @memberof game
         * @classdesc Represents an AckDiceAndCards.
         * @implements IAckDiceAndCards
         * @constructor
         * @param {game.IAckDiceAndCards=} [properties] Properties to set
         */
        function AckDiceAndCards(properties) {
            this.HandCards = [];
            this.huan_san_zhang = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckDiceAndCards FirstSit.
         * @member {number} FirstSit
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.FirstSit = 0;

        /**
         * AckDiceAndCards SecondSit.
         * @member {number} SecondSit
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.SecondSit = 0;

        /**
         * AckDiceAndCards FirstDice.
         * @member {string} FirstDice
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.FirstDice = "";

        /**
         * AckDiceAndCards SecondDice.
         * @member {string} SecondDice
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.SecondDice = "";

        /**
         * AckDiceAndCards FirstCardsIndexes.
         * @member {number} FirstCardsIndexes
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.FirstCardsIndexes = 0;

        /**
         * AckDiceAndCards HandCards.
         * @member {Array.<game.ICardInfo>} HandCards
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.HandCards = $util.emptyArray;

        /**
         * AckDiceAndCards huan_san_zhang.
         * @member {Array.<game.ICardInfo>} huan_san_zhang
         * @memberof game.AckDiceAndCards
         * @instance
         */
        AckDiceAndCards.prototype.huan_san_zhang = $util.emptyArray;

        /**
         * Creates a new AckDiceAndCards instance using the specified properties.
         * @function create
         * @memberof game.AckDiceAndCards
         * @static
         * @param {game.IAckDiceAndCards=} [properties] Properties to set
         * @returns {game.AckDiceAndCards} AckDiceAndCards instance
         */
        AckDiceAndCards.create = function create(properties) {
            return new AckDiceAndCards(properties);
        };

        /**
         * Encodes the specified AckDiceAndCards message. Does not implicitly {@link game.AckDiceAndCards.verify|verify} messages.
         * @function encode
         * @memberof game.AckDiceAndCards
         * @static
         * @param {game.IAckDiceAndCards} message AckDiceAndCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckDiceAndCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FirstSit);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SecondSit);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.FirstDice);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.SecondDice);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.FirstCardsIndexes);
            if (message.HandCards != null && message.HandCards.length)
                for (var i = 0; i < message.HandCards.length; ++i)
                    $root.game.CardInfo.encode(message.HandCards[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.huan_san_zhang != null && message.huan_san_zhang.length)
                for (var i = 0; i < message.huan_san_zhang.length; ++i)
                    $root.game.CardInfo.encode(message.huan_san_zhang[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckDiceAndCards message, length delimited. Does not implicitly {@link game.AckDiceAndCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckDiceAndCards
         * @static
         * @param {game.IAckDiceAndCards} message AckDiceAndCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckDiceAndCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckDiceAndCards message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckDiceAndCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckDiceAndCards} AckDiceAndCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckDiceAndCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckDiceAndCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FirstSit = reader.int32();
                    break;
                case 2:
                    message.SecondSit = reader.int32();
                    break;
                case 3:
                    message.FirstDice = reader.string();
                    break;
                case 4:
                    message.SecondDice = reader.string();
                    break;
                case 5:
                    message.FirstCardsIndexes = reader.int32();
                    break;
                case 6:
                    if (!(message.HandCards && message.HandCards.length))
                        message.HandCards = [];
                    message.HandCards.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.huan_san_zhang && message.huan_san_zhang.length))
                        message.huan_san_zhang = [];
                    message.huan_san_zhang.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FirstSit"))
                throw $util.ProtocolError("missing required 'FirstSit'", { instance: message });
            if (!message.hasOwnProperty("SecondSit"))
                throw $util.ProtocolError("missing required 'SecondSit'", { instance: message });
            if (!message.hasOwnProperty("FirstDice"))
                throw $util.ProtocolError("missing required 'FirstDice'", { instance: message });
            if (!message.hasOwnProperty("SecondDice"))
                throw $util.ProtocolError("missing required 'SecondDice'", { instance: message });
            if (!message.hasOwnProperty("FirstCardsIndexes"))
                throw $util.ProtocolError("missing required 'FirstCardsIndexes'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckDiceAndCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckDiceAndCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckDiceAndCards} AckDiceAndCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckDiceAndCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckDiceAndCards message.
         * @function verify
         * @memberof game.AckDiceAndCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckDiceAndCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FirstSit))
                return "FirstSit: integer expected";
            if (!$util.isInteger(message.SecondSit))
                return "SecondSit: integer expected";
            if (!$util.isString(message.FirstDice))
                return "FirstDice: string expected";
            if (!$util.isString(message.SecondDice))
                return "SecondDice: string expected";
            if (!$util.isInteger(message.FirstCardsIndexes))
                return "FirstCardsIndexes: integer expected";
            if (message.HandCards != null && message.hasOwnProperty("HandCards")) {
                if (!Array.isArray(message.HandCards))
                    return "HandCards: array expected";
                for (var i = 0; i < message.HandCards.length; ++i) {
                    var error = $root.game.CardInfo.verify(message.HandCards[i]);
                    if (error)
                        return "HandCards." + error;
                }
            }
            if (message.huan_san_zhang != null && message.hasOwnProperty("huan_san_zhang")) {
                if (!Array.isArray(message.huan_san_zhang))
                    return "huan_san_zhang: array expected";
                for (var i = 0; i < message.huan_san_zhang.length; ++i) {
                    var error = $root.game.CardInfo.verify(message.huan_san_zhang[i]);
                    if (error)
                        return "huan_san_zhang." + error;
                }
            }
            return null;
        };

        return AckDiceAndCards;
    })();

    game.CardInfo = (function() {

        /**
         * Properties of a CardInfo.
         * @memberof game
         * @interface ICardInfo
         * @property {number} CardID CardInfo CardID
         * @property {number|null} [Sit] CardInfo Sit
         */

        /**
         * Constructs a new CardInfo.
         * @memberof game
         * @classdesc Represents a CardInfo.
         * @implements ICardInfo
         * @constructor
         * @param {game.ICardInfo=} [properties] Properties to set
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
         * @memberof game.CardInfo
         * @instance
         */
        CardInfo.prototype.CardID = 0;

        /**
         * CardInfo Sit.
         * @member {number} Sit
         * @memberof game.CardInfo
         * @instance
         */
        CardInfo.prototype.Sit = 0;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @function create
         * @memberof game.CardInfo
         * @static
         * @param {game.ICardInfo=} [properties] Properties to set
         * @returns {game.CardInfo} CardInfo instance
         */
        CardInfo.create = function create(properties) {
            return new CardInfo(properties);
        };

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link game.CardInfo.verify|verify} messages.
         * @function encode
         * @memberof game.CardInfo
         * @static
         * @param {game.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CardID);
            if (message.Sit != null && Object.hasOwnProperty.call(message, "Sit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Sit);
            return writer;
        };

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link game.CardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CardInfo
         * @static
         * @param {game.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CardInfo} CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CardInfo();
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
         * @memberof game.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CardInfo} CardInfo
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
         * @memberof game.CardInfo
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

    game.ReqHandCardsOver = (function() {

        /**
         * Properties of a ReqHandCardsOver.
         * @memberof game
         * @interface IReqHandCardsOver
         * @property {number} Sit ReqHandCardsOver Sit
         */

        /**
         * Constructs a new ReqHandCardsOver.
         * @memberof game
         * @classdesc Represents a ReqHandCardsOver.
         * @implements IReqHandCardsOver
         * @constructor
         * @param {game.IReqHandCardsOver=} [properties] Properties to set
         */
        function ReqHandCardsOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqHandCardsOver Sit.
         * @member {number} Sit
         * @memberof game.ReqHandCardsOver
         * @instance
         */
        ReqHandCardsOver.prototype.Sit = 0;

        /**
         * Creates a new ReqHandCardsOver instance using the specified properties.
         * @function create
         * @memberof game.ReqHandCardsOver
         * @static
         * @param {game.IReqHandCardsOver=} [properties] Properties to set
         * @returns {game.ReqHandCardsOver} ReqHandCardsOver instance
         */
        ReqHandCardsOver.create = function create(properties) {
            return new ReqHandCardsOver(properties);
        };

        /**
         * Encodes the specified ReqHandCardsOver message. Does not implicitly {@link game.ReqHandCardsOver.verify|verify} messages.
         * @function encode
         * @memberof game.ReqHandCardsOver
         * @static
         * @param {game.IReqHandCardsOver} message ReqHandCardsOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHandCardsOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            return writer;
        };

        /**
         * Encodes the specified ReqHandCardsOver message, length delimited. Does not implicitly {@link game.ReqHandCardsOver.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqHandCardsOver
         * @static
         * @param {game.IReqHandCardsOver} message ReqHandCardsOver message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHandCardsOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqHandCardsOver message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqHandCardsOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqHandCardsOver} ReqHandCardsOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHandCardsOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqHandCardsOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqHandCardsOver message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqHandCardsOver
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqHandCardsOver} ReqHandCardsOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHandCardsOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqHandCardsOver message.
         * @function verify
         * @memberof game.ReqHandCardsOver
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqHandCardsOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            return null;
        };

        return ReqHandCardsOver;
    })();

    game.AckGameStage = (function() {

        /**
         * Properties of an AckGameStage.
         * @memberof game
         * @interface IAckGameStage
         * @property {number} Stage AckGameStage Stage
         * @property {string|null} [gameguid] AckGameStage gameguid
         */

        /**
         * Constructs a new AckGameStage.
         * @memberof game
         * @classdesc Represents an AckGameStage.
         * @implements IAckGameStage
         * @constructor
         * @param {game.IAckGameStage=} [properties] Properties to set
         */
        function AckGameStage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameStage Stage.
         * @member {number} Stage
         * @memberof game.AckGameStage
         * @instance
         */
        AckGameStage.prototype.Stage = 0;

        /**
         * AckGameStage gameguid.
         * @member {string} gameguid
         * @memberof game.AckGameStage
         * @instance
         */
        AckGameStage.prototype.gameguid = "";

        /**
         * Creates a new AckGameStage instance using the specified properties.
         * @function create
         * @memberof game.AckGameStage
         * @static
         * @param {game.IAckGameStage=} [properties] Properties to set
         * @returns {game.AckGameStage} AckGameStage instance
         */
        AckGameStage.create = function create(properties) {
            return new AckGameStage(properties);
        };

        /**
         * Encodes the specified AckGameStage message. Does not implicitly {@link game.AckGameStage.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameStage
         * @static
         * @param {game.IAckGameStage} message AckGameStage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameStage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Stage);
            if (message.gameguid != null && Object.hasOwnProperty.call(message, "gameguid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameguid);
            return writer;
        };

        /**
         * Encodes the specified AckGameStage message, length delimited. Does not implicitly {@link game.AckGameStage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameStage
         * @static
         * @param {game.IAckGameStage} message AckGameStage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameStage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameStage message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameStage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameStage} AckGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameStage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameStage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Stage = reader.int32();
                    break;
                case 2:
                    message.gameguid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Stage"))
                throw $util.ProtocolError("missing required 'Stage'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckGameStage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameStage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameStage} AckGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameStage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameStage message.
         * @function verify
         * @memberof game.AckGameStage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameStage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Stage))
                return "Stage: integer expected";
            if (message.gameguid != null && message.hasOwnProperty("gameguid"))
                if (!$util.isString(message.gameguid))
                    return "gameguid: string expected";
            return null;
        };

        return AckGameStage;
    })();

    game.StageID = (function() {

        /**
         * Properties of a StageID.
         * @memberof game
         * @interface IStageID
         * @property {number} STARGAME StageID STARGAME
         * @property {number} BUHUA StageID BUHUA
         * @property {number} PLAYING StageID PLAYING
         * @property {number} GAMEOVER StageID GAMEOVER
         */

        /**
         * Constructs a new StageID.
         * @memberof game
         * @classdesc Represents a StageID.
         * @implements IStageID
         * @constructor
         * @param {game.IStageID=} [properties] Properties to set
         */
        function StageID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StageID STARGAME.
         * @member {number} STARGAME
         * @memberof game.StageID
         * @instance
         */
        StageID.prototype.STARGAME = 0;

        /**
         * StageID BUHUA.
         * @member {number} BUHUA
         * @memberof game.StageID
         * @instance
         */
        StageID.prototype.BUHUA = 0;

        /**
         * StageID PLAYING.
         * @member {number} PLAYING
         * @memberof game.StageID
         * @instance
         */
        StageID.prototype.PLAYING = 0;

        /**
         * StageID GAMEOVER.
         * @member {number} GAMEOVER
         * @memberof game.StageID
         * @instance
         */
        StageID.prototype.GAMEOVER = 0;

        /**
         * Creates a new StageID instance using the specified properties.
         * @function create
         * @memberof game.StageID
         * @static
         * @param {game.IStageID=} [properties] Properties to set
         * @returns {game.StageID} StageID instance
         */
        StageID.create = function create(properties) {
            return new StageID(properties);
        };

        /**
         * Encodes the specified StageID message. Does not implicitly {@link game.StageID.verify|verify} messages.
         * @function encode
         * @memberof game.StageID
         * @static
         * @param {game.IStageID} message StageID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StageID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.STARGAME);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BUHUA);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PLAYING);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.GAMEOVER);
            return writer;
        };

        /**
         * Encodes the specified StageID message, length delimited. Does not implicitly {@link game.StageID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.StageID
         * @static
         * @param {game.IStageID} message StageID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StageID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StageID message from the specified reader or buffer.
         * @function decode
         * @memberof game.StageID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.StageID} StageID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StageID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.StageID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.STARGAME = reader.int32();
                    break;
                case 2:
                    message.BUHUA = reader.int32();
                    break;
                case 3:
                    message.PLAYING = reader.int32();
                    break;
                case 4:
                    message.GAMEOVER = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("STARGAME"))
                throw $util.ProtocolError("missing required 'STARGAME'", { instance: message });
            if (!message.hasOwnProperty("BUHUA"))
                throw $util.ProtocolError("missing required 'BUHUA'", { instance: message });
            if (!message.hasOwnProperty("PLAYING"))
                throw $util.ProtocolError("missing required 'PLAYING'", { instance: message });
            if (!message.hasOwnProperty("GAMEOVER"))
                throw $util.ProtocolError("missing required 'GAMEOVER'", { instance: message });
            return message;
        };

        /**
         * Decodes a StageID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.StageID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.StageID} StageID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StageID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StageID message.
         * @function verify
         * @memberof game.StageID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StageID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.STARGAME))
                return "STARGAME: integer expected";
            if (!$util.isInteger(message.BUHUA))
                return "BUHUA: integer expected";
            if (!$util.isInteger(message.PLAYING))
                return "PLAYING: integer expected";
            if (!$util.isInteger(message.GAMEOVER))
                return "GAMEOVER: integer expected";
            return null;
        };

        return StageID;
    })();

    game.ReqSendCard = (function() {

        /**
         * Properties of a ReqSendCard.
         * @memberof game
         * @interface IReqSendCard
         * @property {game.ICardsGroup} Card ReqSendCard Card
         */

        /**
         * Constructs a new ReqSendCard.
         * @memberof game
         * @classdesc Represents a ReqSendCard.
         * @implements IReqSendCard
         * @constructor
         * @param {game.IReqSendCard=} [properties] Properties to set
         */
        function ReqSendCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSendCard Card.
         * @member {game.ICardsGroup} Card
         * @memberof game.ReqSendCard
         * @instance
         */
        ReqSendCard.prototype.Card = null;

        /**
         * Creates a new ReqSendCard instance using the specified properties.
         * @function create
         * @memberof game.ReqSendCard
         * @static
         * @param {game.IReqSendCard=} [properties] Properties to set
         * @returns {game.ReqSendCard} ReqSendCard instance
         */
        ReqSendCard.create = function create(properties) {
            return new ReqSendCard(properties);
        };

        /**
         * Encodes the specified ReqSendCard message. Does not implicitly {@link game.ReqSendCard.verify|verify} messages.
         * @function encode
         * @memberof game.ReqSendCard
         * @static
         * @param {game.IReqSendCard} message ReqSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.game.CardsGroup.encode(message.Card, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqSendCard message, length delimited. Does not implicitly {@link game.ReqSendCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqSendCard
         * @static
         * @param {game.IReqSendCard} message ReqSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqSendCard} ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqSendCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Card = $root.game.CardsGroup.decode(reader, reader.uint32());
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
         * Decodes a ReqSendCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqSendCard} ReqSendCard
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
         * @memberof game.ReqSendCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSendCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.game.CardsGroup.verify(message.Card);
                if (error)
                    return "Card." + error;
            }
            return null;
        };

        return ReqSendCard;
    })();

    game.OperationType = (function() {

        /**
         * Properties of an OperationType.
         * @memberof game
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
         * @memberof game
         * @classdesc Represents an OperationType.
         * @implements IOperationType
         * @constructor
         * @param {game.IOperationType=} [properties] Properties to set
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
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.CATCH = 0;

        /**
         * OperationType PLAY.
         * @member {number} PLAY
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.PLAY = 0;

        /**
         * OperationType BUHUA.
         * @member {number} BUHUA
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.BUHUA = 0;

        /**
         * OperationType CHI.
         * @member {number} CHI
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.CHI = 0;

        /**
         * OperationType PENG.
         * @member {number} PENG
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.PENG = 0;

        /**
         * OperationType GANG.
         * @member {number} GANG
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.GANG = 0;

        /**
         * OperationType ANGANG.
         * @member {number} ANGANG
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.ANGANG = 0;

        /**
         * OperationType HU.
         * @member {number} HU
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.HU = 0;

        /**
         * OperationType BUHUAMO.
         * @member {number} BUHUAMO
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.BUHUAMO = 0;

        /**
         * OperationType KANGMO.
         * @member {number} KANGMO
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.KANGMO = 0;

        /**
         * OperationType NO_OPERATION.
         * @member {number} NO_OPERATION
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.NO_OPERATION = 0;

        /**
         * OperationType HANDCARDS.
         * @member {number} HANDCARDS
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.HANDCARDS = 0;

        /**
         * OperationType BUGANG.
         * @member {number} BUGANG
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.BUGANG = 0;

        /**
         * OperationType MOPLAY.
         * @member {number} MOPLAY
         * @memberof game.OperationType
         * @instance
         */
        OperationType.prototype.MOPLAY = 0;

        /**
         * Creates a new OperationType instance using the specified properties.
         * @function create
         * @memberof game.OperationType
         * @static
         * @param {game.IOperationType=} [properties] Properties to set
         * @returns {game.OperationType} OperationType instance
         */
        OperationType.create = function create(properties) {
            return new OperationType(properties);
        };

        /**
         * Encodes the specified OperationType message. Does not implicitly {@link game.OperationType.verify|verify} messages.
         * @function encode
         * @memberof game.OperationType
         * @static
         * @param {game.IOperationType} message OperationType message or plain object to encode
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
         * Encodes the specified OperationType message, length delimited. Does not implicitly {@link game.OperationType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OperationType
         * @static
         * @param {game.IOperationType} message OperationType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperationType message from the specified reader or buffer.
         * @function decode
         * @memberof game.OperationType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OperationType} OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OperationType();
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
         * @memberof game.OperationType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OperationType} OperationType
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
         * @memberof game.OperationType
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

    game.AckSendCard = (function() {

        /**
         * Properties of an AckSendCard.
         * @memberof game
         * @interface IAckSendCard
         * @property {game.ICardsGroup} Card AckSendCard Card
         * @property {Array.<number>|null} [gangCoin] AckSendCard gangCoin
         */

        /**
         * Constructs a new AckSendCard.
         * @memberof game
         * @classdesc Represents an AckSendCard.
         * @implements IAckSendCard
         * @constructor
         * @param {game.IAckSendCard=} [properties] Properties to set
         */
        function AckSendCard(properties) {
            this.gangCoin = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckSendCard Card.
         * @member {game.ICardsGroup} Card
         * @memberof game.AckSendCard
         * @instance
         */
        AckSendCard.prototype.Card = null;

        /**
         * AckSendCard gangCoin.
         * @member {Array.<number>} gangCoin
         * @memberof game.AckSendCard
         * @instance
         */
        AckSendCard.prototype.gangCoin = $util.emptyArray;

        /**
         * Creates a new AckSendCard instance using the specified properties.
         * @function create
         * @memberof game.AckSendCard
         * @static
         * @param {game.IAckSendCard=} [properties] Properties to set
         * @returns {game.AckSendCard} AckSendCard instance
         */
        AckSendCard.create = function create(properties) {
            return new AckSendCard(properties);
        };

        /**
         * Encodes the specified AckSendCard message. Does not implicitly {@link game.AckSendCard.verify|verify} messages.
         * @function encode
         * @memberof game.AckSendCard
         * @static
         * @param {game.IAckSendCard} message AckSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSendCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.game.CardsGroup.encode(message.Card, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gangCoin != null && message.gangCoin.length)
                for (var i = 0; i < message.gangCoin.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gangCoin[i]);
            return writer;
        };

        /**
         * Encodes the specified AckSendCard message, length delimited. Does not implicitly {@link game.AckSendCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckSendCard
         * @static
         * @param {game.IAckSendCard} message AckSendCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckSendCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckSendCard message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckSendCard} AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckSendCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckSendCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Card = $root.game.CardsGroup.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.gangCoin && message.gangCoin.length))
                        message.gangCoin = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.gangCoin.push(reader.int32());
                    } else
                        message.gangCoin.push(reader.int32());
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
         * Decodes an AckSendCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckSendCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckSendCard} AckSendCard
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
         * @memberof game.AckSendCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckSendCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.game.CardsGroup.verify(message.Card);
                if (error)
                    return "Card." + error;
            }
            if (message.gangCoin != null && message.hasOwnProperty("gangCoin")) {
                if (!Array.isArray(message.gangCoin))
                    return "gangCoin: array expected";
                for (var i = 0; i < message.gangCoin.length; ++i)
                    if (!$util.isInteger(message.gangCoin[i]))
                        return "gangCoin: integer[] expected";
            }
            return null;
        };

        return AckSendCard;
    })();

    game.AckUserOperation = (function() {

        /**
         * Properties of an AckUserOperation.
         * @memberof game
         * @interface IAckUserOperation
         * @property {number} Sit AckUserOperation Sit
         * @property {boolean} Chi AckUserOperation Chi
         * @property {Array.<game.ICardsGroup>|null} [ChiCards] AckUserOperation ChiCards
         * @property {boolean} Peng AckUserOperation Peng
         * @property {Array.<game.ICardsGroup>|null} [PengCards] AckUserOperation PengCards
         * @property {boolean} Gang AckUserOperation Gang
         * @property {Array.<game.ICardsGroup>|null} [GangCards] AckUserOperation GangCards
         * @property {boolean} Hu AckUserOperation Hu
         * @property {Array.<game.ICardsGroup>|null} [HuCards] AckUserOperation HuCards
         * @property {boolean} Call AckUserOperation Call
         * @property {Array.<game.IMahjongCallInfo>|null} [CallCards] AckUserOperation CallCards
         */

        /**
         * Constructs a new AckUserOperation.
         * @memberof game
         * @classdesc Represents an AckUserOperation.
         * @implements IAckUserOperation
         * @constructor
         * @param {game.IAckUserOperation=} [properties] Properties to set
         */
        function AckUserOperation(properties) {
            this.ChiCards = [];
            this.PengCards = [];
            this.GangCards = [];
            this.HuCards = [];
            this.CallCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckUserOperation Sit.
         * @member {number} Sit
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.Sit = 0;

        /**
         * AckUserOperation Chi.
         * @member {boolean} Chi
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.Chi = false;

        /**
         * AckUserOperation ChiCards.
         * @member {Array.<game.ICardsGroup>} ChiCards
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.ChiCards = $util.emptyArray;

        /**
         * AckUserOperation Peng.
         * @member {boolean} Peng
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.Peng = false;

        /**
         * AckUserOperation PengCards.
         * @member {Array.<game.ICardsGroup>} PengCards
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.PengCards = $util.emptyArray;

        /**
         * AckUserOperation Gang.
         * @member {boolean} Gang
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.Gang = false;

        /**
         * AckUserOperation GangCards.
         * @member {Array.<game.ICardsGroup>} GangCards
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.GangCards = $util.emptyArray;

        /**
         * AckUserOperation Hu.
         * @member {boolean} Hu
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.Hu = false;

        /**
         * AckUserOperation HuCards.
         * @member {Array.<game.ICardsGroup>} HuCards
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.HuCards = $util.emptyArray;

        /**
         * AckUserOperation Call.
         * @member {boolean} Call
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.Call = false;

        /**
         * AckUserOperation CallCards.
         * @member {Array.<game.IMahjongCallInfo>} CallCards
         * @memberof game.AckUserOperation
         * @instance
         */
        AckUserOperation.prototype.CallCards = $util.emptyArray;

        /**
         * Creates a new AckUserOperation instance using the specified properties.
         * @function create
         * @memberof game.AckUserOperation
         * @static
         * @param {game.IAckUserOperation=} [properties] Properties to set
         * @returns {game.AckUserOperation} AckUserOperation instance
         */
        AckUserOperation.create = function create(properties) {
            return new AckUserOperation(properties);
        };

        /**
         * Encodes the specified AckUserOperation message. Does not implicitly {@link game.AckUserOperation.verify|verify} messages.
         * @function encode
         * @memberof game.AckUserOperation
         * @static
         * @param {game.IAckUserOperation} message AckUserOperation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckUserOperation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.Chi);
            if (message.ChiCards != null && message.ChiCards.length)
                for (var i = 0; i < message.ChiCards.length; ++i)
                    $root.game.CardsGroup.encode(message.ChiCards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Peng);
            if (message.PengCards != null && message.PengCards.length)
                for (var i = 0; i < message.PengCards.length; ++i)
                    $root.game.CardsGroup.encode(message.PengCards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.Gang);
            if (message.GangCards != null && message.GangCards.length)
                for (var i = 0; i < message.GangCards.length; ++i)
                    $root.game.CardsGroup.encode(message.GangCards[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.Hu);
            if (message.HuCards != null && message.HuCards.length)
                for (var i = 0; i < message.HuCards.length; ++i)
                    $root.game.CardsGroup.encode(message.HuCards[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.Call);
            if (message.CallCards != null && message.CallCards.length)
                for (var i = 0; i < message.CallCards.length; ++i)
                    $root.game.MahjongCallInfo.encode(message.CallCards[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckUserOperation message, length delimited. Does not implicitly {@link game.AckUserOperation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckUserOperation
         * @static
         * @param {game.IAckUserOperation} message AckUserOperation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckUserOperation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckUserOperation message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckUserOperation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckUserOperation} AckUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckUserOperation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckUserOperation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    message.Chi = reader.bool();
                    break;
                case 3:
                    if (!(message.ChiCards && message.ChiCards.length))
                        message.ChiCards = [];
                    message.ChiCards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Peng = reader.bool();
                    break;
                case 5:
                    if (!(message.PengCards && message.PengCards.length))
                        message.PengCards = [];
                    message.PengCards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Gang = reader.bool();
                    break;
                case 7:
                    if (!(message.GangCards && message.GangCards.length))
                        message.GangCards = [];
                    message.GangCards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.Hu = reader.bool();
                    break;
                case 9:
                    if (!(message.HuCards && message.HuCards.length))
                        message.HuCards = [];
                    message.HuCards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.Call = reader.bool();
                    break;
                case 11:
                    if (!(message.CallCards && message.CallCards.length))
                        message.CallCards = [];
                    message.CallCards.push($root.game.MahjongCallInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            if (!message.hasOwnProperty("Chi"))
                throw $util.ProtocolError("missing required 'Chi'", { instance: message });
            if (!message.hasOwnProperty("Peng"))
                throw $util.ProtocolError("missing required 'Peng'", { instance: message });
            if (!message.hasOwnProperty("Gang"))
                throw $util.ProtocolError("missing required 'Gang'", { instance: message });
            if (!message.hasOwnProperty("Hu"))
                throw $util.ProtocolError("missing required 'Hu'", { instance: message });
            if (!message.hasOwnProperty("Call"))
                throw $util.ProtocolError("missing required 'Call'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckUserOperation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckUserOperation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckUserOperation} AckUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckUserOperation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckUserOperation message.
         * @function verify
         * @memberof game.AckUserOperation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckUserOperation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (typeof message.Chi !== "boolean")
                return "Chi: boolean expected";
            if (message.ChiCards != null && message.hasOwnProperty("ChiCards")) {
                if (!Array.isArray(message.ChiCards))
                    return "ChiCards: array expected";
                for (var i = 0; i < message.ChiCards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.ChiCards[i]);
                    if (error)
                        return "ChiCards." + error;
                }
            }
            if (typeof message.Peng !== "boolean")
                return "Peng: boolean expected";
            if (message.PengCards != null && message.hasOwnProperty("PengCards")) {
                if (!Array.isArray(message.PengCards))
                    return "PengCards: array expected";
                for (var i = 0; i < message.PengCards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.PengCards[i]);
                    if (error)
                        return "PengCards." + error;
                }
            }
            if (typeof message.Gang !== "boolean")
                return "Gang: boolean expected";
            if (message.GangCards != null && message.hasOwnProperty("GangCards")) {
                if (!Array.isArray(message.GangCards))
                    return "GangCards: array expected";
                for (var i = 0; i < message.GangCards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.GangCards[i]);
                    if (error)
                        return "GangCards." + error;
                }
            }
            if (typeof message.Hu !== "boolean")
                return "Hu: boolean expected";
            if (message.HuCards != null && message.hasOwnProperty("HuCards")) {
                if (!Array.isArray(message.HuCards))
                    return "HuCards: array expected";
                for (var i = 0; i < message.HuCards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.HuCards[i]);
                    if (error)
                        return "HuCards." + error;
                }
            }
            if (typeof message.Call !== "boolean")
                return "Call: boolean expected";
            if (message.CallCards != null && message.hasOwnProperty("CallCards")) {
                if (!Array.isArray(message.CallCards))
                    return "CallCards: array expected";
                for (var i = 0; i < message.CallCards.length; ++i) {
                    var error = $root.game.MahjongCallInfo.verify(message.CallCards[i]);
                    if (error)
                        return "CallCards." + error;
                }
            }
            return null;
        };

        return AckUserOperation;
    })();

    game.CardsGroup = (function() {

        /**
         * Properties of a CardsGroup.
         * @memberof game
         * @interface ICardsGroup
         * @property {number} Sit CardsGroup Sit
         * @property {number} Type CardsGroup Type
         * @property {Array.<game.ICardInfo>|null} [Cards] CardsGroup Cards
         * @property {game.ICardInfo|null} [ObtainCard] CardsGroup ObtainCard
         * @property {number|null} [ObtainCardSit] CardsGroup ObtainCardSit
         */

        /**
         * Constructs a new CardsGroup.
         * @memberof game
         * @classdesc Represents a CardsGroup.
         * @implements ICardsGroup
         * @constructor
         * @param {game.ICardsGroup=} [properties] Properties to set
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
         * @memberof game.CardsGroup
         * @instance
         */
        CardsGroup.prototype.Sit = 0;

        /**
         * CardsGroup Type.
         * @member {number} Type
         * @memberof game.CardsGroup
         * @instance
         */
        CardsGroup.prototype.Type = 0;

        /**
         * CardsGroup Cards.
         * @member {Array.<game.ICardInfo>} Cards
         * @memberof game.CardsGroup
         * @instance
         */
        CardsGroup.prototype.Cards = $util.emptyArray;

        /**
         * CardsGroup ObtainCard.
         * @member {game.ICardInfo|null|undefined} ObtainCard
         * @memberof game.CardsGroup
         * @instance
         */
        CardsGroup.prototype.ObtainCard = null;

        /**
         * CardsGroup ObtainCardSit.
         * @member {number} ObtainCardSit
         * @memberof game.CardsGroup
         * @instance
         */
        CardsGroup.prototype.ObtainCardSit = 0;

        /**
         * Creates a new CardsGroup instance using the specified properties.
         * @function create
         * @memberof game.CardsGroup
         * @static
         * @param {game.ICardsGroup=} [properties] Properties to set
         * @returns {game.CardsGroup} CardsGroup instance
         */
        CardsGroup.create = function create(properties) {
            return new CardsGroup(properties);
        };

        /**
         * Encodes the specified CardsGroup message. Does not implicitly {@link game.CardsGroup.verify|verify} messages.
         * @function encode
         * @memberof game.CardsGroup
         * @static
         * @param {game.ICardsGroup} message CardsGroup message or plain object to encode
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
                    $root.game.CardInfo.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ObtainCard != null && Object.hasOwnProperty.call(message, "ObtainCard"))
                $root.game.CardInfo.encode(message.ObtainCard, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.ObtainCardSit != null && Object.hasOwnProperty.call(message, "ObtainCardSit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ObtainCardSit);
            return writer;
        };

        /**
         * Encodes the specified CardsGroup message, length delimited. Does not implicitly {@link game.CardsGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CardsGroup
         * @static
         * @param {game.ICardsGroup} message CardsGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardsGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardsGroup message from the specified reader or buffer.
         * @function decode
         * @memberof game.CardsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CardsGroup} CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardsGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CardsGroup();
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
                    message.Cards.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ObtainCard = $root.game.CardInfo.decode(reader, reader.uint32());
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
         * @memberof game.CardsGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CardsGroup} CardsGroup
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
         * @memberof game.CardsGroup
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
                    var error = $root.game.CardInfo.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (message.ObtainCard != null && message.hasOwnProperty("ObtainCard")) {
                var error = $root.game.CardInfo.verify(message.ObtainCard);
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

    game.MahjongFanNumType = (function() {

        /**
         * Properties of a MahjongFanNumType.
         * @memberof game
         * @interface IMahjongFanNumType
         * @property {number} FanNum MahjongFanNumType FanNum
         * @property {number} FanType MahjongFanNumType FanType
         * @property {Array.<game.ICardInfo>|null} [Cards] MahjongFanNumType Cards
         */

        /**
         * Constructs a new MahjongFanNumType.
         * @memberof game
         * @classdesc Represents a MahjongFanNumType.
         * @implements IMahjongFanNumType
         * @constructor
         * @param {game.IMahjongFanNumType=} [properties] Properties to set
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
         * @memberof game.MahjongFanNumType
         * @instance
         */
        MahjongFanNumType.prototype.FanNum = 0;

        /**
         * MahjongFanNumType FanType.
         * @member {number} FanType
         * @memberof game.MahjongFanNumType
         * @instance
         */
        MahjongFanNumType.prototype.FanType = 0;

        /**
         * MahjongFanNumType Cards.
         * @member {Array.<game.ICardInfo>} Cards
         * @memberof game.MahjongFanNumType
         * @instance
         */
        MahjongFanNumType.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new MahjongFanNumType instance using the specified properties.
         * @function create
         * @memberof game.MahjongFanNumType
         * @static
         * @param {game.IMahjongFanNumType=} [properties] Properties to set
         * @returns {game.MahjongFanNumType} MahjongFanNumType instance
         */
        MahjongFanNumType.create = function create(properties) {
            return new MahjongFanNumType(properties);
        };

        /**
         * Encodes the specified MahjongFanNumType message. Does not implicitly {@link game.MahjongFanNumType.verify|verify} messages.
         * @function encode
         * @memberof game.MahjongFanNumType
         * @static
         * @param {game.IMahjongFanNumType} message MahjongFanNumType message or plain object to encode
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
                    $root.game.CardInfo.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongFanNumType message, length delimited. Does not implicitly {@link game.MahjongFanNumType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MahjongFanNumType
         * @static
         * @param {game.IMahjongFanNumType} message MahjongFanNumType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongFanNumType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer.
         * @function decode
         * @memberof game.MahjongFanNumType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MahjongFanNumType} MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongFanNumType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MahjongFanNumType();
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
                    message.Cards.push($root.game.CardInfo.decode(reader, reader.uint32()));
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
         * @memberof game.MahjongFanNumType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MahjongFanNumType} MahjongFanNumType
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
         * @memberof game.MahjongFanNumType
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
                    var error = $root.game.CardInfo.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        return MahjongFanNumType;
    })();

    game.MahjongFanName = (function() {

        /**
         * Properties of a MahjongFanName.
         * @memberof game
         * @interface IMahjongFanName
         * @property {number} SSSBG MahjongFanName SSSBG
         */

        /**
         * Constructs a new MahjongFanName.
         * @memberof game
         * @classdesc Represents a MahjongFanName.
         * @implements IMahjongFanName
         * @constructor
         * @param {game.IMahjongFanName=} [properties] Properties to set
         */
        function MahjongFanName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MahjongFanName SSSBG.
         * @member {number} SSSBG
         * @memberof game.MahjongFanName
         * @instance
         */
        MahjongFanName.prototype.SSSBG = 0;

        /**
         * Creates a new MahjongFanName instance using the specified properties.
         * @function create
         * @memberof game.MahjongFanName
         * @static
         * @param {game.IMahjongFanName=} [properties] Properties to set
         * @returns {game.MahjongFanName} MahjongFanName instance
         */
        MahjongFanName.create = function create(properties) {
            return new MahjongFanName(properties);
        };

        /**
         * Encodes the specified MahjongFanName message. Does not implicitly {@link game.MahjongFanName.verify|verify} messages.
         * @function encode
         * @memberof game.MahjongFanName
         * @static
         * @param {game.IMahjongFanName} message MahjongFanName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongFanName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SSSBG);
            return writer;
        };

        /**
         * Encodes the specified MahjongFanName message, length delimited. Does not implicitly {@link game.MahjongFanName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MahjongFanName
         * @static
         * @param {game.IMahjongFanName} message MahjongFanName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongFanName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongFanName message from the specified reader or buffer.
         * @function decode
         * @memberof game.MahjongFanName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MahjongFanName} MahjongFanName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongFanName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MahjongFanName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SSSBG = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SSSBG"))
                throw $util.ProtocolError("missing required 'SSSBG'", { instance: message });
            return message;
        };

        /**
         * Decodes a MahjongFanName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.MahjongFanName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MahjongFanName} MahjongFanName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongFanName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MahjongFanName message.
         * @function verify
         * @memberof game.MahjongFanName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MahjongFanName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SSSBG))
                return "SSSBG: integer expected";
            return null;
        };

        return MahjongFanName;
    })();

    game.ReqPlayerTrust = (function() {

        /**
         * Properties of a ReqPlayerTrust.
         * @memberof game
         * @interface IReqPlayerTrust
         * @property {number} sit ReqPlayerTrust sit
         */

        /**
         * Constructs a new ReqPlayerTrust.
         * @memberof game
         * @classdesc Represents a ReqPlayerTrust.
         * @implements IReqPlayerTrust
         * @constructor
         * @param {game.IReqPlayerTrust=} [properties] Properties to set
         */
        function ReqPlayerTrust(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqPlayerTrust sit.
         * @member {number} sit
         * @memberof game.ReqPlayerTrust
         * @instance
         */
        ReqPlayerTrust.prototype.sit = 0;

        /**
         * Creates a new ReqPlayerTrust instance using the specified properties.
         * @function create
         * @memberof game.ReqPlayerTrust
         * @static
         * @param {game.IReqPlayerTrust=} [properties] Properties to set
         * @returns {game.ReqPlayerTrust} ReqPlayerTrust instance
         */
        ReqPlayerTrust.create = function create(properties) {
            return new ReqPlayerTrust(properties);
        };

        /**
         * Encodes the specified ReqPlayerTrust message. Does not implicitly {@link game.ReqPlayerTrust.verify|verify} messages.
         * @function encode
         * @memberof game.ReqPlayerTrust
         * @static
         * @param {game.IReqPlayerTrust} message ReqPlayerTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPlayerTrust.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sit);
            return writer;
        };

        /**
         * Encodes the specified ReqPlayerTrust message, length delimited. Does not implicitly {@link game.ReqPlayerTrust.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqPlayerTrust
         * @static
         * @param {game.IReqPlayerTrust} message ReqPlayerTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPlayerTrust.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqPlayerTrust message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqPlayerTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqPlayerTrust} ReqPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerTrust.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqPlayerTrust();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sit"))
                throw $util.ProtocolError("missing required 'sit'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqPlayerTrust message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqPlayerTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqPlayerTrust} ReqPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerTrust.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqPlayerTrust message.
         * @function verify
         * @memberof game.ReqPlayerTrust
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqPlayerTrust.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.sit))
                return "sit: integer expected";
            return null;
        };

        return ReqPlayerTrust;
    })();

    game.AckPlayerTrust = (function() {

        /**
         * Properties of an AckPlayerTrust.
         * @memberof game
         * @interface IAckPlayerTrust
         * @property {number} TrustNum AckPlayerTrust TrustNum
         * @property {number} TrustSit AckPlayerTrust TrustSit
         */

        /**
         * Constructs a new AckPlayerTrust.
         * @memberof game
         * @classdesc Represents an AckPlayerTrust.
         * @implements IAckPlayerTrust
         * @constructor
         * @param {game.IAckPlayerTrust=} [properties] Properties to set
         */
        function AckPlayerTrust(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPlayerTrust TrustNum.
         * @member {number} TrustNum
         * @memberof game.AckPlayerTrust
         * @instance
         */
        AckPlayerTrust.prototype.TrustNum = 0;

        /**
         * AckPlayerTrust TrustSit.
         * @member {number} TrustSit
         * @memberof game.AckPlayerTrust
         * @instance
         */
        AckPlayerTrust.prototype.TrustSit = 0;

        /**
         * Creates a new AckPlayerTrust instance using the specified properties.
         * @function create
         * @memberof game.AckPlayerTrust
         * @static
         * @param {game.IAckPlayerTrust=} [properties] Properties to set
         * @returns {game.AckPlayerTrust} AckPlayerTrust instance
         */
        AckPlayerTrust.create = function create(properties) {
            return new AckPlayerTrust(properties);
        };

        /**
         * Encodes the specified AckPlayerTrust message. Does not implicitly {@link game.AckPlayerTrust.verify|verify} messages.
         * @function encode
         * @memberof game.AckPlayerTrust
         * @static
         * @param {game.IAckPlayerTrust} message AckPlayerTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerTrust.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TrustNum);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TrustSit);
            return writer;
        };

        /**
         * Encodes the specified AckPlayerTrust message, length delimited. Does not implicitly {@link game.AckPlayerTrust.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckPlayerTrust
         * @static
         * @param {game.IAckPlayerTrust} message AckPlayerTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerTrust.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckPlayerTrust message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckPlayerTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckPlayerTrust} AckPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerTrust.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckPlayerTrust();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TrustNum = reader.int32();
                    break;
                case 2:
                    message.TrustSit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TrustNum"))
                throw $util.ProtocolError("missing required 'TrustNum'", { instance: message });
            if (!message.hasOwnProperty("TrustSit"))
                throw $util.ProtocolError("missing required 'TrustSit'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckPlayerTrust message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckPlayerTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckPlayerTrust} AckPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerTrust.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckPlayerTrust message.
         * @function verify
         * @memberof game.AckPlayerTrust
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckPlayerTrust.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TrustNum))
                return "TrustNum: integer expected";
            if (!$util.isInteger(message.TrustSit))
                return "TrustSit: integer expected";
            return null;
        };

        return AckPlayerTrust;
    })();

    game.ReqPlayerRelieveTrust = (function() {

        /**
         * Properties of a ReqPlayerRelieveTrust.
         * @memberof game
         * @interface IReqPlayerRelieveTrust
         * @property {number} Sit ReqPlayerRelieveTrust Sit
         */

        /**
         * Constructs a new ReqPlayerRelieveTrust.
         * @memberof game
         * @classdesc Represents a ReqPlayerRelieveTrust.
         * @implements IReqPlayerRelieveTrust
         * @constructor
         * @param {game.IReqPlayerRelieveTrust=} [properties] Properties to set
         */
        function ReqPlayerRelieveTrust(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqPlayerRelieveTrust Sit.
         * @member {number} Sit
         * @memberof game.ReqPlayerRelieveTrust
         * @instance
         */
        ReqPlayerRelieveTrust.prototype.Sit = 0;

        /**
         * Creates a new ReqPlayerRelieveTrust instance using the specified properties.
         * @function create
         * @memberof game.ReqPlayerRelieveTrust
         * @static
         * @param {game.IReqPlayerRelieveTrust=} [properties] Properties to set
         * @returns {game.ReqPlayerRelieveTrust} ReqPlayerRelieveTrust instance
         */
        ReqPlayerRelieveTrust.create = function create(properties) {
            return new ReqPlayerRelieveTrust(properties);
        };

        /**
         * Encodes the specified ReqPlayerRelieveTrust message. Does not implicitly {@link game.ReqPlayerRelieveTrust.verify|verify} messages.
         * @function encode
         * @memberof game.ReqPlayerRelieveTrust
         * @static
         * @param {game.IReqPlayerRelieveTrust} message ReqPlayerRelieveTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPlayerRelieveTrust.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            return writer;
        };

        /**
         * Encodes the specified ReqPlayerRelieveTrust message, length delimited. Does not implicitly {@link game.ReqPlayerRelieveTrust.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqPlayerRelieveTrust
         * @static
         * @param {game.IReqPlayerRelieveTrust} message ReqPlayerRelieveTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqPlayerRelieveTrust.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqPlayerRelieveTrust message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqPlayerRelieveTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqPlayerRelieveTrust} ReqPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerRelieveTrust.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqPlayerRelieveTrust();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqPlayerRelieveTrust message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqPlayerRelieveTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqPlayerRelieveTrust} ReqPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerRelieveTrust.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqPlayerRelieveTrust message.
         * @function verify
         * @memberof game.ReqPlayerRelieveTrust
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqPlayerRelieveTrust.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            return null;
        };

        return ReqPlayerRelieveTrust;
    })();

    game.AckPlayerRelieveTrust = (function() {

        /**
         * Properties of an AckPlayerRelieveTrust.
         * @memberof game
         * @interface IAckPlayerRelieveTrust
         * @property {number} Sit AckPlayerRelieveTrust Sit
         * @property {number} RelieveTrustSit AckPlayerRelieveTrust RelieveTrustSit
         */

        /**
         * Constructs a new AckPlayerRelieveTrust.
         * @memberof game
         * @classdesc Represents an AckPlayerRelieveTrust.
         * @implements IAckPlayerRelieveTrust
         * @constructor
         * @param {game.IAckPlayerRelieveTrust=} [properties] Properties to set
         */
        function AckPlayerRelieveTrust(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckPlayerRelieveTrust Sit.
         * @member {number} Sit
         * @memberof game.AckPlayerRelieveTrust
         * @instance
         */
        AckPlayerRelieveTrust.prototype.Sit = 0;

        /**
         * AckPlayerRelieveTrust RelieveTrustSit.
         * @member {number} RelieveTrustSit
         * @memberof game.AckPlayerRelieveTrust
         * @instance
         */
        AckPlayerRelieveTrust.prototype.RelieveTrustSit = 0;

        /**
         * Creates a new AckPlayerRelieveTrust instance using the specified properties.
         * @function create
         * @memberof game.AckPlayerRelieveTrust
         * @static
         * @param {game.IAckPlayerRelieveTrust=} [properties] Properties to set
         * @returns {game.AckPlayerRelieveTrust} AckPlayerRelieveTrust instance
         */
        AckPlayerRelieveTrust.create = function create(properties) {
            return new AckPlayerRelieveTrust(properties);
        };

        /**
         * Encodes the specified AckPlayerRelieveTrust message. Does not implicitly {@link game.AckPlayerRelieveTrust.verify|verify} messages.
         * @function encode
         * @memberof game.AckPlayerRelieveTrust
         * @static
         * @param {game.IAckPlayerRelieveTrust} message AckPlayerRelieveTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerRelieveTrust.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RelieveTrustSit);
            return writer;
        };

        /**
         * Encodes the specified AckPlayerRelieveTrust message, length delimited. Does not implicitly {@link game.AckPlayerRelieveTrust.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckPlayerRelieveTrust
         * @static
         * @param {game.IAckPlayerRelieveTrust} message AckPlayerRelieveTrust message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckPlayerRelieveTrust.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckPlayerRelieveTrust message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckPlayerRelieveTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckPlayerRelieveTrust} AckPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerRelieveTrust.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckPlayerRelieveTrust();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    message.RelieveTrustSit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            if (!message.hasOwnProperty("RelieveTrustSit"))
                throw $util.ProtocolError("missing required 'RelieveTrustSit'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckPlayerRelieveTrust message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckPlayerRelieveTrust
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckPlayerRelieveTrust} AckPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckPlayerRelieveTrust.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckPlayerRelieveTrust message.
         * @function verify
         * @memberof game.AckPlayerRelieveTrust
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckPlayerRelieveTrust.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (!$util.isInteger(message.RelieveTrustSit))
                return "RelieveTrustSit: integer expected";
            return null;
        };

        return AckPlayerRelieveTrust;
    })();

    game.ReqGameDelay = (function() {

        /**
         * Properties of a ReqGameDelay.
         * @memberof game
         * @interface IReqGameDelay
         * @property {number} Sit ReqGameDelay Sit
         */

        /**
         * Constructs a new ReqGameDelay.
         * @memberof game
         * @classdesc Represents a ReqGameDelay.
         * @implements IReqGameDelay
         * @constructor
         * @param {game.IReqGameDelay=} [properties] Properties to set
         */
        function ReqGameDelay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqGameDelay Sit.
         * @member {number} Sit
         * @memberof game.ReqGameDelay
         * @instance
         */
        ReqGameDelay.prototype.Sit = 0;

        /**
         * Creates a new ReqGameDelay instance using the specified properties.
         * @function create
         * @memberof game.ReqGameDelay
         * @static
         * @param {game.IReqGameDelay=} [properties] Properties to set
         * @returns {game.ReqGameDelay} ReqGameDelay instance
         */
        ReqGameDelay.create = function create(properties) {
            return new ReqGameDelay(properties);
        };

        /**
         * Encodes the specified ReqGameDelay message. Does not implicitly {@link game.ReqGameDelay.verify|verify} messages.
         * @function encode
         * @memberof game.ReqGameDelay
         * @static
         * @param {game.IReqGameDelay} message ReqGameDelay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameDelay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            return writer;
        };

        /**
         * Encodes the specified ReqGameDelay message, length delimited. Does not implicitly {@link game.ReqGameDelay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqGameDelay
         * @static
         * @param {game.IReqGameDelay} message ReqGameDelay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqGameDelay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqGameDelay message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqGameDelay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqGameDelay} ReqGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameDelay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqGameDelay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqGameDelay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqGameDelay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqGameDelay} ReqGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGameDelay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqGameDelay message.
         * @function verify
         * @memberof game.ReqGameDelay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqGameDelay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            return null;
        };

        return ReqGameDelay;
    })();

    game.AckGameDelay = (function() {

        /**
         * Properties of an AckGameDelay.
         * @memberof game
         * @interface IAckGameDelay
         * @property {boolean} Success AckGameDelay Success
         * @property {number} Sit AckGameDelay Sit
         */

        /**
         * Constructs a new AckGameDelay.
         * @memberof game
         * @classdesc Represents an AckGameDelay.
         * @implements IAckGameDelay
         * @constructor
         * @param {game.IAckGameDelay=} [properties] Properties to set
         */
        function AckGameDelay(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameDelay Success.
         * @member {boolean} Success
         * @memberof game.AckGameDelay
         * @instance
         */
        AckGameDelay.prototype.Success = false;

        /**
         * AckGameDelay Sit.
         * @member {number} Sit
         * @memberof game.AckGameDelay
         * @instance
         */
        AckGameDelay.prototype.Sit = 0;

        /**
         * Creates a new AckGameDelay instance using the specified properties.
         * @function create
         * @memberof game.AckGameDelay
         * @static
         * @param {game.IAckGameDelay=} [properties] Properties to set
         * @returns {game.AckGameDelay} AckGameDelay instance
         */
        AckGameDelay.create = function create(properties) {
            return new AckGameDelay(properties);
        };

        /**
         * Encodes the specified AckGameDelay message. Does not implicitly {@link game.AckGameDelay.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameDelay
         * @static
         * @param {game.IAckGameDelay} message AckGameDelay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameDelay.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Success);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Sit);
            return writer;
        };

        /**
         * Encodes the specified AckGameDelay message, length delimited. Does not implicitly {@link game.AckGameDelay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameDelay
         * @static
         * @param {game.IAckGameDelay} message AckGameDelay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameDelay.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameDelay message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameDelay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameDelay} AckGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameDelay.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameDelay();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Success = reader.bool();
                    break;
                case 2:
                    message.Sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Success"))
                throw $util.ProtocolError("missing required 'Success'", { instance: message });
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckGameDelay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameDelay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameDelay} AckGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameDelay.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameDelay message.
         * @function verify
         * @memberof game.AckGameDelay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameDelay.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.Success !== "boolean")
                return "Success: boolean expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            return null;
        };

        return AckGameDelay;
    })();

    game.AckGameContinued = (function() {

        /**
         * Properties of an AckGameContinued.
         * @memberof game
         * @interface IAckGameContinued
         * @property {string} FirstDice AckGameContinued FirstDice
         * @property {string} SecondDice AckGameContinued SecondDice
         * @property {number} BeginCardindex AckGameContinued BeginCardindex
         * @property {number} EndCardindex AckGameContinued EndCardindex
         * @property {Array.<game.ICardPondInfo>|null} [CardPond] AckGameContinued CardPond
         * @property {Array.<game.IPlayerHandCards>|null} [HandCards] AckGameContinued HandCards
         * @property {game.ICardsGroup|null} [CurrentCard] AckGameContinued CurrentCard
         * @property {number} CurrentSit AckGameContinued CurrentSit
         * @property {number} TrustNum AckGameContinued TrustNum
         * @property {number} DelayTimes AckGameContinued DelayTimes
         * @property {number} Stage AckGameContinued Stage
         * @property {boolean|null} [IsMoPai] AckGameContinued IsMoPai
         * @property {game.ICardInfo|null} [Card] AckGameContinued Card
         * @property {Array.<game.IGameHistoryData>|null} [HistoryData] AckGameContinued HistoryData
         * @property {Array.<number>|null} [CuoHuSeat] AckGameContinued CuoHuSeat
         * @property {Array.<number>|null} [PlayerState] AckGameContinued PlayerState
         * @property {Array.<number>|null} [dingque_color] AckGameContinued dingque_color
         * @property {number|null} [huan_san_zhang] AckGameContinued huan_san_zhang
         * @property {Array.<number>|null} [hupai0] AckGameContinued hupai0
         * @property {Array.<number>|null} [hupai1] AckGameContinued hupai1
         * @property {Array.<number>|null} [hupai2] AckGameContinued hupai2
         * @property {Array.<number>|null} [hupai3] AckGameContinued hupai3
         * @property {string|null} [game_guid] AckGameContinued game_guid
         * @property {Array.<game.IHuSeq>|null} [hu_player] AckGameContinued hu_player
         * @property {Array.<game.IMahjongCallInfo>|null} [CallCards] AckGameContinued CallCards
         */

        /**
         * Constructs a new AckGameContinued.
         * @memberof game
         * @classdesc Represents an AckGameContinued.
         * @implements IAckGameContinued
         * @constructor
         * @param {game.IAckGameContinued=} [properties] Properties to set
         */
        function AckGameContinued(properties) {
            this.CardPond = [];
            this.HandCards = [];
            this.HistoryData = [];
            this.CuoHuSeat = [];
            this.PlayerState = [];
            this.dingque_color = [];
            this.hupai0 = [];
            this.hupai1 = [];
            this.hupai2 = [];
            this.hupai3 = [];
            this.hu_player = [];
            this.CallCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameContinued FirstDice.
         * @member {string} FirstDice
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.FirstDice = "";

        /**
         * AckGameContinued SecondDice.
         * @member {string} SecondDice
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.SecondDice = "";

        /**
         * AckGameContinued BeginCardindex.
         * @member {number} BeginCardindex
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.BeginCardindex = 0;

        /**
         * AckGameContinued EndCardindex.
         * @member {number} EndCardindex
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.EndCardindex = 0;

        /**
         * AckGameContinued CardPond.
         * @member {Array.<game.ICardPondInfo>} CardPond
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.CardPond = $util.emptyArray;

        /**
         * AckGameContinued HandCards.
         * @member {Array.<game.IPlayerHandCards>} HandCards
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.HandCards = $util.emptyArray;

        /**
         * AckGameContinued CurrentCard.
         * @member {game.ICardsGroup|null|undefined} CurrentCard
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.CurrentCard = null;

        /**
         * AckGameContinued CurrentSit.
         * @member {number} CurrentSit
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.CurrentSit = 0;

        /**
         * AckGameContinued TrustNum.
         * @member {number} TrustNum
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.TrustNum = 0;

        /**
         * AckGameContinued DelayTimes.
         * @member {number} DelayTimes
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.DelayTimes = 0;

        /**
         * AckGameContinued Stage.
         * @member {number} Stage
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.Stage = 0;

        /**
         * AckGameContinued IsMoPai.
         * @member {boolean} IsMoPai
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.IsMoPai = false;

        /**
         * AckGameContinued Card.
         * @member {game.ICardInfo|null|undefined} Card
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.Card = null;

        /**
         * AckGameContinued HistoryData.
         * @member {Array.<game.IGameHistoryData>} HistoryData
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.HistoryData = $util.emptyArray;

        /**
         * AckGameContinued CuoHuSeat.
         * @member {Array.<number>} CuoHuSeat
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.CuoHuSeat = $util.emptyArray;

        /**
         * AckGameContinued PlayerState.
         * @member {Array.<number>} PlayerState
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.PlayerState = $util.emptyArray;

        /**
         * AckGameContinued dingque_color.
         * @member {Array.<number>} dingque_color
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.dingque_color = $util.emptyArray;

        /**
         * AckGameContinued huan_san_zhang.
         * @member {number} huan_san_zhang
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.huan_san_zhang = 0;

        /**
         * AckGameContinued hupai0.
         * @member {Array.<number>} hupai0
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.hupai0 = $util.emptyArray;

        /**
         * AckGameContinued hupai1.
         * @member {Array.<number>} hupai1
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.hupai1 = $util.emptyArray;

        /**
         * AckGameContinued hupai2.
         * @member {Array.<number>} hupai2
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.hupai2 = $util.emptyArray;

        /**
         * AckGameContinued hupai3.
         * @member {Array.<number>} hupai3
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.hupai3 = $util.emptyArray;

        /**
         * AckGameContinued game_guid.
         * @member {string} game_guid
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.game_guid = "";

        /**
         * AckGameContinued hu_player.
         * @member {Array.<game.IHuSeq>} hu_player
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.hu_player = $util.emptyArray;

        /**
         * AckGameContinued CallCards.
         * @member {Array.<game.IMahjongCallInfo>} CallCards
         * @memberof game.AckGameContinued
         * @instance
         */
        AckGameContinued.prototype.CallCards = $util.emptyArray;

        /**
         * Creates a new AckGameContinued instance using the specified properties.
         * @function create
         * @memberof game.AckGameContinued
         * @static
         * @param {game.IAckGameContinued=} [properties] Properties to set
         * @returns {game.AckGameContinued} AckGameContinued instance
         */
        AckGameContinued.create = function create(properties) {
            return new AckGameContinued(properties);
        };

        /**
         * Encodes the specified AckGameContinued message. Does not implicitly {@link game.AckGameContinued.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameContinued
         * @static
         * @param {game.IAckGameContinued} message AckGameContinued message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameContinued.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.FirstDice);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.SecondDice);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BeginCardindex);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.EndCardindex);
            if (message.CardPond != null && message.CardPond.length)
                for (var i = 0; i < message.CardPond.length; ++i)
                    $root.game.CardPondInfo.encode(message.CardPond[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.HandCards != null && message.HandCards.length)
                for (var i = 0; i < message.HandCards.length; ++i)
                    $root.game.PlayerHandCards.encode(message.HandCards[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.CurrentCard != null && Object.hasOwnProperty.call(message, "CurrentCard"))
                $root.game.CardsGroup.encode(message.CurrentCard, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.CurrentSit);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.TrustNum);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.DelayTimes);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.Stage);
            if (message.IsMoPai != null && Object.hasOwnProperty.call(message, "IsMoPai"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.IsMoPai);
            if (message.Card != null && Object.hasOwnProperty.call(message, "Card"))
                $root.game.CardInfo.encode(message.Card, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.HistoryData != null && message.HistoryData.length)
                for (var i = 0; i < message.HistoryData.length; ++i)
                    $root.game.GameHistoryData.encode(message.HistoryData[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.CuoHuSeat != null && message.CuoHuSeat.length)
                for (var i = 0; i < message.CuoHuSeat.length; ++i)
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.CuoHuSeat[i]);
            if (message.PlayerState != null && message.PlayerState.length)
                for (var i = 0; i < message.PlayerState.length; ++i)
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.PlayerState[i]);
            if (message.dingque_color != null && message.dingque_color.length)
                for (var i = 0; i < message.dingque_color.length; ++i)
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.dingque_color[i]);
            if (message.huan_san_zhang != null && Object.hasOwnProperty.call(message, "huan_san_zhang"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.huan_san_zhang);
            if (message.hupai0 != null && message.hupai0.length)
                for (var i = 0; i < message.hupai0.length; ++i)
                    writer.uint32(/* id 19, wireType 0 =*/152).int32(message.hupai0[i]);
            if (message.hupai1 != null && message.hupai1.length)
                for (var i = 0; i < message.hupai1.length; ++i)
                    writer.uint32(/* id 20, wireType 0 =*/160).int32(message.hupai1[i]);
            if (message.hupai2 != null && message.hupai2.length)
                for (var i = 0; i < message.hupai2.length; ++i)
                    writer.uint32(/* id 21, wireType 0 =*/168).int32(message.hupai2[i]);
            if (message.hupai3 != null && message.hupai3.length)
                for (var i = 0; i < message.hupai3.length; ++i)
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.hupai3[i]);
            if (message.game_guid != null && Object.hasOwnProperty.call(message, "game_guid"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.game_guid);
            if (message.hu_player != null && message.hu_player.length)
                for (var i = 0; i < message.hu_player.length; ++i)
                    $root.game.HuSeq.encode(message.hu_player[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.CallCards != null && message.CallCards.length)
                for (var i = 0; i < message.CallCards.length; ++i)
                    $root.game.MahjongCallInfo.encode(message.CallCards[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckGameContinued message, length delimited. Does not implicitly {@link game.AckGameContinued.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameContinued
         * @static
         * @param {game.IAckGameContinued} message AckGameContinued message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameContinued.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameContinued message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameContinued
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameContinued} AckGameContinued
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameContinued.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameContinued();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FirstDice = reader.string();
                    break;
                case 2:
                    message.SecondDice = reader.string();
                    break;
                case 3:
                    message.BeginCardindex = reader.int32();
                    break;
                case 4:
                    message.EndCardindex = reader.int32();
                    break;
                case 5:
                    if (!(message.CardPond && message.CardPond.length))
                        message.CardPond = [];
                    message.CardPond.push($root.game.CardPondInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.HandCards && message.HandCards.length))
                        message.HandCards = [];
                    message.HandCards.push($root.game.PlayerHandCards.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.CurrentCard = $root.game.CardsGroup.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.CurrentSit = reader.int32();
                    break;
                case 9:
                    message.TrustNum = reader.int32();
                    break;
                case 10:
                    message.DelayTimes = reader.int32();
                    break;
                case 11:
                    message.Stage = reader.int32();
                    break;
                case 12:
                    message.IsMoPai = reader.bool();
                    break;
                case 13:
                    message.Card = $root.game.CardInfo.decode(reader, reader.uint32());
                    break;
                case 14:
                    if (!(message.HistoryData && message.HistoryData.length))
                        message.HistoryData = [];
                    message.HistoryData.push($root.game.GameHistoryData.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.CuoHuSeat && message.CuoHuSeat.length))
                        message.CuoHuSeat = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.CuoHuSeat.push(reader.int32());
                    } else
                        message.CuoHuSeat.push(reader.int32());
                    break;
                case 16:
                    if (!(message.PlayerState && message.PlayerState.length))
                        message.PlayerState = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.PlayerState.push(reader.int32());
                    } else
                        message.PlayerState.push(reader.int32());
                    break;
                case 17:
                    if (!(message.dingque_color && message.dingque_color.length))
                        message.dingque_color = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dingque_color.push(reader.int32());
                    } else
                        message.dingque_color.push(reader.int32());
                    break;
                case 18:
                    message.huan_san_zhang = reader.int32();
                    break;
                case 19:
                    if (!(message.hupai0 && message.hupai0.length))
                        message.hupai0 = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.hupai0.push(reader.int32());
                    } else
                        message.hupai0.push(reader.int32());
                    break;
                case 20:
                    if (!(message.hupai1 && message.hupai1.length))
                        message.hupai1 = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.hupai1.push(reader.int32());
                    } else
                        message.hupai1.push(reader.int32());
                    break;
                case 21:
                    if (!(message.hupai2 && message.hupai2.length))
                        message.hupai2 = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.hupai2.push(reader.int32());
                    } else
                        message.hupai2.push(reader.int32());
                    break;
                case 22:
                    if (!(message.hupai3 && message.hupai3.length))
                        message.hupai3 = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.hupai3.push(reader.int32());
                    } else
                        message.hupai3.push(reader.int32());
                    break;
                case 23:
                    message.game_guid = reader.string();
                    break;
                case 24:
                    if (!(message.hu_player && message.hu_player.length))
                        message.hu_player = [];
                    message.hu_player.push($root.game.HuSeq.decode(reader, reader.uint32()));
                    break;
                case 25:
                    if (!(message.CallCards && message.CallCards.length))
                        message.CallCards = [];
                    message.CallCards.push($root.game.MahjongCallInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FirstDice"))
                throw $util.ProtocolError("missing required 'FirstDice'", { instance: message });
            if (!message.hasOwnProperty("SecondDice"))
                throw $util.ProtocolError("missing required 'SecondDice'", { instance: message });
            if (!message.hasOwnProperty("BeginCardindex"))
                throw $util.ProtocolError("missing required 'BeginCardindex'", { instance: message });
            if (!message.hasOwnProperty("EndCardindex"))
                throw $util.ProtocolError("missing required 'EndCardindex'", { instance: message });
            if (!message.hasOwnProperty("CurrentSit"))
                throw $util.ProtocolError("missing required 'CurrentSit'", { instance: message });
            if (!message.hasOwnProperty("TrustNum"))
                throw $util.ProtocolError("missing required 'TrustNum'", { instance: message });
            if (!message.hasOwnProperty("DelayTimes"))
                throw $util.ProtocolError("missing required 'DelayTimes'", { instance: message });
            if (!message.hasOwnProperty("Stage"))
                throw $util.ProtocolError("missing required 'Stage'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckGameContinued message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameContinued
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameContinued} AckGameContinued
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameContinued.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameContinued message.
         * @function verify
         * @memberof game.AckGameContinued
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameContinued.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.FirstDice))
                return "FirstDice: string expected";
            if (!$util.isString(message.SecondDice))
                return "SecondDice: string expected";
            if (!$util.isInteger(message.BeginCardindex))
                return "BeginCardindex: integer expected";
            if (!$util.isInteger(message.EndCardindex))
                return "EndCardindex: integer expected";
            if (message.CardPond != null && message.hasOwnProperty("CardPond")) {
                if (!Array.isArray(message.CardPond))
                    return "CardPond: array expected";
                for (var i = 0; i < message.CardPond.length; ++i) {
                    var error = $root.game.CardPondInfo.verify(message.CardPond[i]);
                    if (error)
                        return "CardPond." + error;
                }
            }
            if (message.HandCards != null && message.hasOwnProperty("HandCards")) {
                if (!Array.isArray(message.HandCards))
                    return "HandCards: array expected";
                for (var i = 0; i < message.HandCards.length; ++i) {
                    var error = $root.game.PlayerHandCards.verify(message.HandCards[i]);
                    if (error)
                        return "HandCards." + error;
                }
            }
            if (message.CurrentCard != null && message.hasOwnProperty("CurrentCard")) {
                var error = $root.game.CardsGroup.verify(message.CurrentCard);
                if (error)
                    return "CurrentCard." + error;
            }
            if (!$util.isInteger(message.CurrentSit))
                return "CurrentSit: integer expected";
            if (!$util.isInteger(message.TrustNum))
                return "TrustNum: integer expected";
            if (!$util.isInteger(message.DelayTimes))
                return "DelayTimes: integer expected";
            if (!$util.isInteger(message.Stage))
                return "Stage: integer expected";
            if (message.IsMoPai != null && message.hasOwnProperty("IsMoPai"))
                if (typeof message.IsMoPai !== "boolean")
                    return "IsMoPai: boolean expected";
            if (message.Card != null && message.hasOwnProperty("Card")) {
                var error = $root.game.CardInfo.verify(message.Card);
                if (error)
                    return "Card." + error;
            }
            if (message.HistoryData != null && message.hasOwnProperty("HistoryData")) {
                if (!Array.isArray(message.HistoryData))
                    return "HistoryData: array expected";
                for (var i = 0; i < message.HistoryData.length; ++i) {
                    var error = $root.game.GameHistoryData.verify(message.HistoryData[i]);
                    if (error)
                        return "HistoryData." + error;
                }
            }
            if (message.CuoHuSeat != null && message.hasOwnProperty("CuoHuSeat")) {
                if (!Array.isArray(message.CuoHuSeat))
                    return "CuoHuSeat: array expected";
                for (var i = 0; i < message.CuoHuSeat.length; ++i)
                    if (!$util.isInteger(message.CuoHuSeat[i]))
                        return "CuoHuSeat: integer[] expected";
            }
            if (message.PlayerState != null && message.hasOwnProperty("PlayerState")) {
                if (!Array.isArray(message.PlayerState))
                    return "PlayerState: array expected";
                for (var i = 0; i < message.PlayerState.length; ++i)
                    if (!$util.isInteger(message.PlayerState[i]))
                        return "PlayerState: integer[] expected";
            }
            if (message.dingque_color != null && message.hasOwnProperty("dingque_color")) {
                if (!Array.isArray(message.dingque_color))
                    return "dingque_color: array expected";
                for (var i = 0; i < message.dingque_color.length; ++i)
                    if (!$util.isInteger(message.dingque_color[i]))
                        return "dingque_color: integer[] expected";
            }
            if (message.huan_san_zhang != null && message.hasOwnProperty("huan_san_zhang"))
                if (!$util.isInteger(message.huan_san_zhang))
                    return "huan_san_zhang: integer expected";
            if (message.hupai0 != null && message.hasOwnProperty("hupai0")) {
                if (!Array.isArray(message.hupai0))
                    return "hupai0: array expected";
                for (var i = 0; i < message.hupai0.length; ++i)
                    if (!$util.isInteger(message.hupai0[i]))
                        return "hupai0: integer[] expected";
            }
            if (message.hupai1 != null && message.hasOwnProperty("hupai1")) {
                if (!Array.isArray(message.hupai1))
                    return "hupai1: array expected";
                for (var i = 0; i < message.hupai1.length; ++i)
                    if (!$util.isInteger(message.hupai1[i]))
                        return "hupai1: integer[] expected";
            }
            if (message.hupai2 != null && message.hasOwnProperty("hupai2")) {
                if (!Array.isArray(message.hupai2))
                    return "hupai2: array expected";
                for (var i = 0; i < message.hupai2.length; ++i)
                    if (!$util.isInteger(message.hupai2[i]))
                        return "hupai2: integer[] expected";
            }
            if (message.hupai3 != null && message.hasOwnProperty("hupai3")) {
                if (!Array.isArray(message.hupai3))
                    return "hupai3: array expected";
                for (var i = 0; i < message.hupai3.length; ++i)
                    if (!$util.isInteger(message.hupai3[i]))
                        return "hupai3: integer[] expected";
            }
            if (message.game_guid != null && message.hasOwnProperty("game_guid"))
                if (!$util.isString(message.game_guid))
                    return "game_guid: string expected";
            if (message.hu_player != null && message.hasOwnProperty("hu_player")) {
                if (!Array.isArray(message.hu_player))
                    return "hu_player: array expected";
                for (var i = 0; i < message.hu_player.length; ++i) {
                    var error = $root.game.HuSeq.verify(message.hu_player[i]);
                    if (error)
                        return "hu_player." + error;
                }
            }
            if (message.CallCards != null && message.hasOwnProperty("CallCards")) {
                if (!Array.isArray(message.CallCards))
                    return "CallCards: array expected";
                for (var i = 0; i < message.CallCards.length; ++i) {
                    var error = $root.game.MahjongCallInfo.verify(message.CallCards[i]);
                    if (error)
                        return "CallCards." + error;
                }
            }
            return null;
        };

        return AckGameContinued;
    })();

    game.HuSeq = (function() {

        /**
         * Properties of a HuSeq.
         * @memberof game
         * @interface IHuSeq
         * @property {number|null} [self_sit] HuSeq self_sit
         * @property {number|null} [pao_sit] HuSeq pao_sit
         */

        /**
         * Constructs a new HuSeq.
         * @memberof game
         * @classdesc Represents a HuSeq.
         * @implements IHuSeq
         * @constructor
         * @param {game.IHuSeq=} [properties] Properties to set
         */
        function HuSeq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HuSeq self_sit.
         * @member {number} self_sit
         * @memberof game.HuSeq
         * @instance
         */
        HuSeq.prototype.self_sit = 0;

        /**
         * HuSeq pao_sit.
         * @member {number} pao_sit
         * @memberof game.HuSeq
         * @instance
         */
        HuSeq.prototype.pao_sit = 0;

        /**
         * Creates a new HuSeq instance using the specified properties.
         * @function create
         * @memberof game.HuSeq
         * @static
         * @param {game.IHuSeq=} [properties] Properties to set
         * @returns {game.HuSeq} HuSeq instance
         */
        HuSeq.create = function create(properties) {
            return new HuSeq(properties);
        };

        /**
         * Encodes the specified HuSeq message. Does not implicitly {@link game.HuSeq.verify|verify} messages.
         * @function encode
         * @memberof game.HuSeq
         * @static
         * @param {game.IHuSeq} message HuSeq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuSeq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.self_sit != null && Object.hasOwnProperty.call(message, "self_sit"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.self_sit);
            if (message.pao_sit != null && Object.hasOwnProperty.call(message, "pao_sit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pao_sit);
            return writer;
        };

        /**
         * Encodes the specified HuSeq message, length delimited. Does not implicitly {@link game.HuSeq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HuSeq
         * @static
         * @param {game.IHuSeq} message HuSeq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuSeq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HuSeq message from the specified reader or buffer.
         * @function decode
         * @memberof game.HuSeq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HuSeq} HuSeq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuSeq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HuSeq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.self_sit = reader.int32();
                    break;
                case 2:
                    message.pao_sit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HuSeq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HuSeq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HuSeq} HuSeq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuSeq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HuSeq message.
         * @function verify
         * @memberof game.HuSeq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HuSeq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.self_sit != null && message.hasOwnProperty("self_sit"))
                if (!$util.isInteger(message.self_sit))
                    return "self_sit: integer expected";
            if (message.pao_sit != null && message.hasOwnProperty("pao_sit"))
                if (!$util.isInteger(message.pao_sit))
                    return "pao_sit: integer expected";
            return null;
        };

        return HuSeq;
    })();

    game.GameHistoryData = (function() {

        /**
         * Properties of a GameHistoryData.
         * @memberof game
         * @interface IGameHistoryData
         * @property {game.IGameResultCards} Cards GameHistoryData Cards
         * @property {Array.<game.IGameResultIntegralCoin>|null} [ResultData] GameHistoryData ResultData
         * @property {Array.<number>|null} [CuoHuSeat] GameHistoryData CuoHuSeat
         */

        /**
         * Constructs a new GameHistoryData.
         * @memberof game
         * @classdesc Represents a GameHistoryData.
         * @implements IGameHistoryData
         * @constructor
         * @param {game.IGameHistoryData=} [properties] Properties to set
         */
        function GameHistoryData(properties) {
            this.ResultData = [];
            this.CuoHuSeat = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameHistoryData Cards.
         * @member {game.IGameResultCards} Cards
         * @memberof game.GameHistoryData
         * @instance
         */
        GameHistoryData.prototype.Cards = null;

        /**
         * GameHistoryData ResultData.
         * @member {Array.<game.IGameResultIntegralCoin>} ResultData
         * @memberof game.GameHistoryData
         * @instance
         */
        GameHistoryData.prototype.ResultData = $util.emptyArray;

        /**
         * GameHistoryData CuoHuSeat.
         * @member {Array.<number>} CuoHuSeat
         * @memberof game.GameHistoryData
         * @instance
         */
        GameHistoryData.prototype.CuoHuSeat = $util.emptyArray;

        /**
         * Creates a new GameHistoryData instance using the specified properties.
         * @function create
         * @memberof game.GameHistoryData
         * @static
         * @param {game.IGameHistoryData=} [properties] Properties to set
         * @returns {game.GameHistoryData} GameHistoryData instance
         */
        GameHistoryData.create = function create(properties) {
            return new GameHistoryData(properties);
        };

        /**
         * Encodes the specified GameHistoryData message. Does not implicitly {@link game.GameHistoryData.verify|verify} messages.
         * @function encode
         * @memberof game.GameHistoryData
         * @static
         * @param {game.IGameHistoryData} message GameHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameHistoryData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.game.GameResultCards.encode(message.Cards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ResultData != null && message.ResultData.length)
                for (var i = 0; i < message.ResultData.length; ++i)
                    $root.game.GameResultIntegralCoin.encode(message.ResultData[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.CuoHuSeat != null && message.CuoHuSeat.length)
                for (var i = 0; i < message.CuoHuSeat.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CuoHuSeat[i]);
            return writer;
        };

        /**
         * Encodes the specified GameHistoryData message, length delimited. Does not implicitly {@link game.GameHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameHistoryData
         * @static
         * @param {game.IGameHistoryData} message GameHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameHistoryData} GameHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameHistoryData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Cards = $root.game.GameResultCards.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.ResultData && message.ResultData.length))
                        message.ResultData = [];
                    message.ResultData.push($root.game.GameResultIntegralCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.CuoHuSeat && message.CuoHuSeat.length))
                        message.CuoHuSeat = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.CuoHuSeat.push(reader.int32());
                    } else
                        message.CuoHuSeat.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Cards"))
                throw $util.ProtocolError("missing required 'Cards'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameHistoryData} GameHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameHistoryData message.
         * @function verify
         * @memberof game.GameHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameHistoryData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.game.GameResultCards.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            if (message.ResultData != null && message.hasOwnProperty("ResultData")) {
                if (!Array.isArray(message.ResultData))
                    return "ResultData: array expected";
                for (var i = 0; i < message.ResultData.length; ++i) {
                    var error = $root.game.GameResultIntegralCoin.verify(message.ResultData[i]);
                    if (error)
                        return "ResultData." + error;
                }
            }
            if (message.CuoHuSeat != null && message.hasOwnProperty("CuoHuSeat")) {
                if (!Array.isArray(message.CuoHuSeat))
                    return "CuoHuSeat: array expected";
                for (var i = 0; i < message.CuoHuSeat.length; ++i)
                    if (!$util.isInteger(message.CuoHuSeat[i]))
                        return "CuoHuSeat: integer[] expected";
            }
            return null;
        };

        return GameHistoryData;
    })();

    game.GameResultIntegralCoin = (function() {

        /**
         * Properties of a GameResultIntegralCoin.
         * @memberof game
         * @interface IGameResultIntegralCoin
         * @property {string} UserName GameResultIntegralCoin UserName
         * @property {number} Integral GameResultIntegralCoin Integral
         * @property {number} Coin GameResultIntegralCoin Coin
         * @property {string|null} [UserShowName] GameResultIntegralCoin UserShowName
         */

        /**
         * Constructs a new GameResultIntegralCoin.
         * @memberof game
         * @classdesc Represents a GameResultIntegralCoin.
         * @implements IGameResultIntegralCoin
         * @constructor
         * @param {game.IGameResultIntegralCoin=} [properties] Properties to set
         */
        function GameResultIntegralCoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResultIntegralCoin UserName.
         * @member {string} UserName
         * @memberof game.GameResultIntegralCoin
         * @instance
         */
        GameResultIntegralCoin.prototype.UserName = "";

        /**
         * GameResultIntegralCoin Integral.
         * @member {number} Integral
         * @memberof game.GameResultIntegralCoin
         * @instance
         */
        GameResultIntegralCoin.prototype.Integral = 0;

        /**
         * GameResultIntegralCoin Coin.
         * @member {number} Coin
         * @memberof game.GameResultIntegralCoin
         * @instance
         */
        GameResultIntegralCoin.prototype.Coin = 0;

        /**
         * GameResultIntegralCoin UserShowName.
         * @member {string} UserShowName
         * @memberof game.GameResultIntegralCoin
         * @instance
         */
        GameResultIntegralCoin.prototype.UserShowName = "";

        /**
         * Creates a new GameResultIntegralCoin instance using the specified properties.
         * @function create
         * @memberof game.GameResultIntegralCoin
         * @static
         * @param {game.IGameResultIntegralCoin=} [properties] Properties to set
         * @returns {game.GameResultIntegralCoin} GameResultIntegralCoin instance
         */
        GameResultIntegralCoin.create = function create(properties) {
            return new GameResultIntegralCoin(properties);
        };

        /**
         * Encodes the specified GameResultIntegralCoin message. Does not implicitly {@link game.GameResultIntegralCoin.verify|verify} messages.
         * @function encode
         * @memberof game.GameResultIntegralCoin
         * @static
         * @param {game.IGameResultIntegralCoin} message GameResultIntegralCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultIntegralCoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Integral);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Coin);
            if (message.UserShowName != null && Object.hasOwnProperty.call(message, "UserShowName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.UserShowName);
            return writer;
        };

        /**
         * Encodes the specified GameResultIntegralCoin message, length delimited. Does not implicitly {@link game.GameResultIntegralCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameResultIntegralCoin
         * @static
         * @param {game.IGameResultIntegralCoin} message GameResultIntegralCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultIntegralCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResultIntegralCoin message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameResultIntegralCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameResultIntegralCoin} GameResultIntegralCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultIntegralCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameResultIntegralCoin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserName = reader.string();
                    break;
                case 2:
                    message.Integral = reader.int32();
                    break;
                case 3:
                    message.Coin = reader.int32();
                    break;
                case 4:
                    message.UserShowName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserName"))
                throw $util.ProtocolError("missing required 'UserName'", { instance: message });
            if (!message.hasOwnProperty("Integral"))
                throw $util.ProtocolError("missing required 'Integral'", { instance: message });
            if (!message.hasOwnProperty("Coin"))
                throw $util.ProtocolError("missing required 'Coin'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameResultIntegralCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameResultIntegralCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameResultIntegralCoin} GameResultIntegralCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultIntegralCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResultIntegralCoin message.
         * @function verify
         * @memberof game.GameResultIntegralCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResultIntegralCoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.UserName))
                return "UserName: string expected";
            if (!$util.isInteger(message.Integral))
                return "Integral: integer expected";
            if (!$util.isInteger(message.Coin))
                return "Coin: integer expected";
            if (message.UserShowName != null && message.hasOwnProperty("UserShowName"))
                if (!$util.isString(message.UserShowName))
                    return "UserShowName: string expected";
            return null;
        };

        return GameResultIntegralCoin;
    })();

    game.GameResultCards = (function() {

        /**
         * Properties of a GameResultCards.
         * @memberof game
         * @interface IGameResultCards
         * @property {number} Sit GameResultCards Sit
         * @property {Array.<game.ICardsGroup>|null} [Cards] GameResultCards Cards
         * @property {Array.<game.IMahjongFanNumType>|null} [Type] GameResultCards Type
         * @property {game.ICardInfo|null} [ObtainCard] GameResultCards ObtainCard
         * @property {number|null} [ObtainCardSit] GameResultCards ObtainCardSit
         */

        /**
         * Constructs a new GameResultCards.
         * @memberof game
         * @classdesc Represents a GameResultCards.
         * @implements IGameResultCards
         * @constructor
         * @param {game.IGameResultCards=} [properties] Properties to set
         */
        function GameResultCards(properties) {
            this.Cards = [];
            this.Type = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResultCards Sit.
         * @member {number} Sit
         * @memberof game.GameResultCards
         * @instance
         */
        GameResultCards.prototype.Sit = 0;

        /**
         * GameResultCards Cards.
         * @member {Array.<game.ICardsGroup>} Cards
         * @memberof game.GameResultCards
         * @instance
         */
        GameResultCards.prototype.Cards = $util.emptyArray;

        /**
         * GameResultCards Type.
         * @member {Array.<game.IMahjongFanNumType>} Type
         * @memberof game.GameResultCards
         * @instance
         */
        GameResultCards.prototype.Type = $util.emptyArray;

        /**
         * GameResultCards ObtainCard.
         * @member {game.ICardInfo|null|undefined} ObtainCard
         * @memberof game.GameResultCards
         * @instance
         */
        GameResultCards.prototype.ObtainCard = null;

        /**
         * GameResultCards ObtainCardSit.
         * @member {number} ObtainCardSit
         * @memberof game.GameResultCards
         * @instance
         */
        GameResultCards.prototype.ObtainCardSit = 0;

        /**
         * Creates a new GameResultCards instance using the specified properties.
         * @function create
         * @memberof game.GameResultCards
         * @static
         * @param {game.IGameResultCards=} [properties] Properties to set
         * @returns {game.GameResultCards} GameResultCards instance
         */
        GameResultCards.create = function create(properties) {
            return new GameResultCards(properties);
        };

        /**
         * Encodes the specified GameResultCards message. Does not implicitly {@link game.GameResultCards.verify|verify} messages.
         * @function encode
         * @memberof game.GameResultCards
         * @static
         * @param {game.IGameResultCards} message GameResultCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.game.CardsGroup.encode(message.Cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Type != null && message.Type.length)
                for (var i = 0; i < message.Type.length; ++i)
                    $root.game.MahjongFanNumType.encode(message.Type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ObtainCard != null && Object.hasOwnProperty.call(message, "ObtainCard"))
                $root.game.CardInfo.encode(message.ObtainCard, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.ObtainCardSit != null && Object.hasOwnProperty.call(message, "ObtainCardSit"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ObtainCardSit);
            return writer;
        };

        /**
         * Encodes the specified GameResultCards message, length delimited. Does not implicitly {@link game.GameResultCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameResultCards
         * @static
         * @param {game.IGameResultCards} message GameResultCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResultCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResultCards message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameResultCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameResultCards} GameResultCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameResultCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.Type && message.Type.length))
                        message.Type = [];
                    message.Type.push($root.game.MahjongFanNumType.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ObtainCard = $root.game.CardInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ObtainCardSit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameResultCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameResultCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameResultCards} GameResultCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResultCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResultCards message.
         * @function verify
         * @memberof game.GameResultCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResultCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (message.Type != null && message.hasOwnProperty("Type")) {
                if (!Array.isArray(message.Type))
                    return "Type: array expected";
                for (var i = 0; i < message.Type.length; ++i) {
                    var error = $root.game.MahjongFanNumType.verify(message.Type[i]);
                    if (error)
                        return "Type." + error;
                }
            }
            if (message.ObtainCard != null && message.hasOwnProperty("ObtainCard")) {
                var error = $root.game.CardInfo.verify(message.ObtainCard);
                if (error)
                    return "ObtainCard." + error;
            }
            if (message.ObtainCardSit != null && message.hasOwnProperty("ObtainCardSit"))
                if (!$util.isInteger(message.ObtainCardSit))
                    return "ObtainCardSit: integer expected";
            return null;
        };

        return GameResultCards;
    })();

    game.PlayerHandCards = (function() {

        /**
         * Properties of a PlayerHandCards.
         * @memberof game
         * @interface IPlayerHandCards
         * @property {Array.<game.ICardsGroup>|null} [Cards] PlayerHandCards Cards
         */

        /**
         * Constructs a new PlayerHandCards.
         * @memberof game
         * @classdesc Represents a PlayerHandCards.
         * @implements IPlayerHandCards
         * @constructor
         * @param {game.IPlayerHandCards=} [properties] Properties to set
         */
        function PlayerHandCards(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerHandCards Cards.
         * @member {Array.<game.ICardsGroup>} Cards
         * @memberof game.PlayerHandCards
         * @instance
         */
        PlayerHandCards.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new PlayerHandCards instance using the specified properties.
         * @function create
         * @memberof game.PlayerHandCards
         * @static
         * @param {game.IPlayerHandCards=} [properties] Properties to set
         * @returns {game.PlayerHandCards} PlayerHandCards instance
         */
        PlayerHandCards.create = function create(properties) {
            return new PlayerHandCards(properties);
        };

        /**
         * Encodes the specified PlayerHandCards message. Does not implicitly {@link game.PlayerHandCards.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerHandCards
         * @static
         * @param {game.IPlayerHandCards} message PlayerHandCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerHandCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.game.CardsGroup.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerHandCards message, length delimited. Does not implicitly {@link game.PlayerHandCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerHandCards
         * @static
         * @param {game.IPlayerHandCards} message PlayerHandCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerHandCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerHandCards message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerHandCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerHandCards} PlayerHandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerHandCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerHandCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerHandCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.PlayerHandCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerHandCards} PlayerHandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerHandCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerHandCards message.
         * @function verify
         * @memberof game.PlayerHandCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerHandCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        return PlayerHandCards;
    })();

    game.CardPondInfo = (function() {

        /**
         * Properties of a CardPondInfo.
         * @memberof game
         * @interface ICardPondInfo
         * @property {Array.<game.ICardInfo>|null} [Cards] CardPondInfo Cards
         */

        /**
         * Constructs a new CardPondInfo.
         * @memberof game
         * @classdesc Represents a CardPondInfo.
         * @implements ICardPondInfo
         * @constructor
         * @param {game.ICardPondInfo=} [properties] Properties to set
         */
        function CardPondInfo(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardPondInfo Cards.
         * @member {Array.<game.ICardInfo>} Cards
         * @memberof game.CardPondInfo
         * @instance
         */
        CardPondInfo.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new CardPondInfo instance using the specified properties.
         * @function create
         * @memberof game.CardPondInfo
         * @static
         * @param {game.ICardPondInfo=} [properties] Properties to set
         * @returns {game.CardPondInfo} CardPondInfo instance
         */
        CardPondInfo.create = function create(properties) {
            return new CardPondInfo(properties);
        };

        /**
         * Encodes the specified CardPondInfo message. Does not implicitly {@link game.CardPondInfo.verify|verify} messages.
         * @function encode
         * @memberof game.CardPondInfo
         * @static
         * @param {game.ICardPondInfo} message CardPondInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardPondInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.game.CardInfo.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CardPondInfo message, length delimited. Does not implicitly {@link game.CardPondInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.CardPondInfo
         * @static
         * @param {game.ICardPondInfo} message CardPondInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardPondInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardPondInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.CardPondInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.CardPondInfo} CardPondInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardPondInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.CardPondInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardPondInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.CardPondInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.CardPondInfo} CardPondInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardPondInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardPondInfo message.
         * @function verify
         * @memberof game.CardPondInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardPondInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.game.CardInfo.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        return CardPondInfo;
    })();

    game.DuxLiveTick = (function() {

        /**
         * Properties of a DuxLiveTick.
         * @memberof game
         * @interface IDuxLiveTick
         * @property {number|Long} time DuxLiveTick time
         */

        /**
         * Constructs a new DuxLiveTick.
         * @memberof game
         * @classdesc Represents a DuxLiveTick.
         * @implements IDuxLiveTick
         * @constructor
         * @param {game.IDuxLiveTick=} [properties] Properties to set
         */
        function DuxLiveTick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DuxLiveTick time.
         * @member {number|Long} time
         * @memberof game.DuxLiveTick
         * @instance
         */
        DuxLiveTick.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DuxLiveTick instance using the specified properties.
         * @function create
         * @memberof game.DuxLiveTick
         * @static
         * @param {game.IDuxLiveTick=} [properties] Properties to set
         * @returns {game.DuxLiveTick} DuxLiveTick instance
         */
        DuxLiveTick.create = function create(properties) {
            return new DuxLiveTick(properties);
        };

        /**
         * Encodes the specified DuxLiveTick message. Does not implicitly {@link game.DuxLiveTick.verify|verify} messages.
         * @function encode
         * @memberof game.DuxLiveTick
         * @static
         * @param {game.IDuxLiveTick} message DuxLiveTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DuxLiveTick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified DuxLiveTick message, length delimited. Does not implicitly {@link game.DuxLiveTick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DuxLiveTick
         * @static
         * @param {game.IDuxLiveTick} message DuxLiveTick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DuxLiveTick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DuxLiveTick message from the specified reader or buffer.
         * @function decode
         * @memberof game.DuxLiveTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DuxLiveTick} DuxLiveTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DuxLiveTick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.DuxLiveTick();
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
         * Decodes a DuxLiveTick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DuxLiveTick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DuxLiveTick} DuxLiveTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DuxLiveTick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DuxLiveTick message.
         * @function verify
         * @memberof game.DuxLiveTick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DuxLiveTick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
            return null;
        };

        return DuxLiveTick;
    })();

    game.ReqMahJongSetOpenDoorTile = (function() {

        /**
         * Properties of a ReqMahJongSetOpenDoorTile.
         * @memberof game
         * @interface IReqMahJongSetOpenDoorTile
         * @property {number} Sit ReqMahJongSetOpenDoorTile Sit
         * @property {Array.<number>|null} [CardsColor] ReqMahJongSetOpenDoorTile CardsColor
         * @property {Array.<number>|null} [CardsValue] ReqMahJongSetOpenDoorTile CardsValue
         */

        /**
         * Constructs a new ReqMahJongSetOpenDoorTile.
         * @memberof game
         * @classdesc Represents a ReqMahJongSetOpenDoorTile.
         * @implements IReqMahJongSetOpenDoorTile
         * @constructor
         * @param {game.IReqMahJongSetOpenDoorTile=} [properties] Properties to set
         */
        function ReqMahJongSetOpenDoorTile(properties) {
            this.CardsColor = [];
            this.CardsValue = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMahJongSetOpenDoorTile Sit.
         * @member {number} Sit
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @instance
         */
        ReqMahJongSetOpenDoorTile.prototype.Sit = 0;

        /**
         * ReqMahJongSetOpenDoorTile CardsColor.
         * @member {Array.<number>} CardsColor
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @instance
         */
        ReqMahJongSetOpenDoorTile.prototype.CardsColor = $util.emptyArray;

        /**
         * ReqMahJongSetOpenDoorTile CardsValue.
         * @member {Array.<number>} CardsValue
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @instance
         */
        ReqMahJongSetOpenDoorTile.prototype.CardsValue = $util.emptyArray;

        /**
         * Creates a new ReqMahJongSetOpenDoorTile instance using the specified properties.
         * @function create
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @static
         * @param {game.IReqMahJongSetOpenDoorTile=} [properties] Properties to set
         * @returns {game.ReqMahJongSetOpenDoorTile} ReqMahJongSetOpenDoorTile instance
         */
        ReqMahJongSetOpenDoorTile.create = function create(properties) {
            return new ReqMahJongSetOpenDoorTile(properties);
        };

        /**
         * Encodes the specified ReqMahJongSetOpenDoorTile message. Does not implicitly {@link game.ReqMahJongSetOpenDoorTile.verify|verify} messages.
         * @function encode
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @static
         * @param {game.IReqMahJongSetOpenDoorTile} message ReqMahJongSetOpenDoorTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMahJongSetOpenDoorTile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            if (message.CardsColor != null && message.CardsColor.length)
                for (var i = 0; i < message.CardsColor.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardsColor[i]);
            if (message.CardsValue != null && message.CardsValue.length)
                for (var i = 0; i < message.CardsValue.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CardsValue[i]);
            return writer;
        };

        /**
         * Encodes the specified ReqMahJongSetOpenDoorTile message, length delimited. Does not implicitly {@link game.ReqMahJongSetOpenDoorTile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @static
         * @param {game.IReqMahJongSetOpenDoorTile} message ReqMahJongSetOpenDoorTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMahJongSetOpenDoorTile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqMahJongSetOpenDoorTile message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqMahJongSetOpenDoorTile} ReqMahJongSetOpenDoorTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMahJongSetOpenDoorTile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqMahJongSetOpenDoorTile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    if (!(message.CardsColor && message.CardsColor.length))
                        message.CardsColor = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.CardsColor.push(reader.int32());
                    } else
                        message.CardsColor.push(reader.int32());
                    break;
                case 3:
                    if (!(message.CardsValue && message.CardsValue.length))
                        message.CardsValue = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.CardsValue.push(reader.int32());
                    } else
                        message.CardsValue.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqMahJongSetOpenDoorTile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqMahJongSetOpenDoorTile} ReqMahJongSetOpenDoorTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMahJongSetOpenDoorTile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqMahJongSetOpenDoorTile message.
         * @function verify
         * @memberof game.ReqMahJongSetOpenDoorTile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqMahJongSetOpenDoorTile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (message.CardsColor != null && message.hasOwnProperty("CardsColor")) {
                if (!Array.isArray(message.CardsColor))
                    return "CardsColor: array expected";
                for (var i = 0; i < message.CardsColor.length; ++i)
                    if (!$util.isInteger(message.CardsColor[i]))
                        return "CardsColor: integer[] expected";
            }
            if (message.CardsValue != null && message.hasOwnProperty("CardsValue")) {
                if (!Array.isArray(message.CardsValue))
                    return "CardsValue: array expected";
                for (var i = 0; i < message.CardsValue.length; ++i)
                    if (!$util.isInteger(message.CardsValue[i]))
                        return "CardsValue: integer[] expected";
            }
            return null;
        };

        return ReqMahJongSetOpenDoorTile;
    })();

    game.ReqMahJongSetWallTile = (function() {

        /**
         * Properties of a ReqMahJongSetWallTile.
         * @memberof game
         * @interface IReqMahJongSetWallTile
         * @property {number} Sit ReqMahJongSetWallTile Sit
         * @property {number} CardColor ReqMahJongSetWallTile CardColor
         * @property {number} CardValue ReqMahJongSetWallTile CardValue
         */

        /**
         * Constructs a new ReqMahJongSetWallTile.
         * @memberof game
         * @classdesc Represents a ReqMahJongSetWallTile.
         * @implements IReqMahJongSetWallTile
         * @constructor
         * @param {game.IReqMahJongSetWallTile=} [properties] Properties to set
         */
        function ReqMahJongSetWallTile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqMahJongSetWallTile Sit.
         * @member {number} Sit
         * @memberof game.ReqMahJongSetWallTile
         * @instance
         */
        ReqMahJongSetWallTile.prototype.Sit = 0;

        /**
         * ReqMahJongSetWallTile CardColor.
         * @member {number} CardColor
         * @memberof game.ReqMahJongSetWallTile
         * @instance
         */
        ReqMahJongSetWallTile.prototype.CardColor = 0;

        /**
         * ReqMahJongSetWallTile CardValue.
         * @member {number} CardValue
         * @memberof game.ReqMahJongSetWallTile
         * @instance
         */
        ReqMahJongSetWallTile.prototype.CardValue = 0;

        /**
         * Creates a new ReqMahJongSetWallTile instance using the specified properties.
         * @function create
         * @memberof game.ReqMahJongSetWallTile
         * @static
         * @param {game.IReqMahJongSetWallTile=} [properties] Properties to set
         * @returns {game.ReqMahJongSetWallTile} ReqMahJongSetWallTile instance
         */
        ReqMahJongSetWallTile.create = function create(properties) {
            return new ReqMahJongSetWallTile(properties);
        };

        /**
         * Encodes the specified ReqMahJongSetWallTile message. Does not implicitly {@link game.ReqMahJongSetWallTile.verify|verify} messages.
         * @function encode
         * @memberof game.ReqMahJongSetWallTile
         * @static
         * @param {game.IReqMahJongSetWallTile} message ReqMahJongSetWallTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMahJongSetWallTile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardColor);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CardValue);
            return writer;
        };

        /**
         * Encodes the specified ReqMahJongSetWallTile message, length delimited. Does not implicitly {@link game.ReqMahJongSetWallTile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqMahJongSetWallTile
         * @static
         * @param {game.IReqMahJongSetWallTile} message ReqMahJongSetWallTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqMahJongSetWallTile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqMahJongSetWallTile message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqMahJongSetWallTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqMahJongSetWallTile} ReqMahJongSetWallTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMahJongSetWallTile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqMahJongSetWallTile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    message.CardColor = reader.int32();
                    break;
                case 3:
                    message.CardValue = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            if (!message.hasOwnProperty("CardColor"))
                throw $util.ProtocolError("missing required 'CardColor'", { instance: message });
            if (!message.hasOwnProperty("CardValue"))
                throw $util.ProtocolError("missing required 'CardValue'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqMahJongSetWallTile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqMahJongSetWallTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqMahJongSetWallTile} ReqMahJongSetWallTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqMahJongSetWallTile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqMahJongSetWallTile message.
         * @function verify
         * @memberof game.ReqMahJongSetWallTile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqMahJongSetWallTile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (!$util.isInteger(message.CardColor))
                return "CardColor: integer expected";
            if (!$util.isInteger(message.CardValue))
                return "CardValue: integer expected";
            return null;
        };

        return ReqMahJongSetWallTile;
    })();

    game.AckWrongHu = (function() {

        /**
         * Properties of an AckWrongHu.
         * @memberof game
         * @interface IAckWrongHu
         * @property {number} Sit AckWrongHu Sit
         * @property {Array.<game.ICardsGroup>|null} [Cards] AckWrongHu Cards
         */

        /**
         * Constructs a new AckWrongHu.
         * @memberof game
         * @classdesc Represents an AckWrongHu.
         * @implements IAckWrongHu
         * @constructor
         * @param {game.IAckWrongHu=} [properties] Properties to set
         */
        function AckWrongHu(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckWrongHu Sit.
         * @member {number} Sit
         * @memberof game.AckWrongHu
         * @instance
         */
        AckWrongHu.prototype.Sit = 0;

        /**
         * AckWrongHu Cards.
         * @member {Array.<game.ICardsGroup>} Cards
         * @memberof game.AckWrongHu
         * @instance
         */
        AckWrongHu.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new AckWrongHu instance using the specified properties.
         * @function create
         * @memberof game.AckWrongHu
         * @static
         * @param {game.IAckWrongHu=} [properties] Properties to set
         * @returns {game.AckWrongHu} AckWrongHu instance
         */
        AckWrongHu.create = function create(properties) {
            return new AckWrongHu(properties);
        };

        /**
         * Encodes the specified AckWrongHu message. Does not implicitly {@link game.AckWrongHu.verify|verify} messages.
         * @function encode
         * @memberof game.AckWrongHu
         * @static
         * @param {game.IAckWrongHu} message AckWrongHu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckWrongHu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sit);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.game.CardsGroup.encode(message.Cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckWrongHu message, length delimited. Does not implicitly {@link game.AckWrongHu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckWrongHu
         * @static
         * @param {game.IAckWrongHu} message AckWrongHu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckWrongHu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckWrongHu message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckWrongHu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckWrongHu} AckWrongHu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckWrongHu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckWrongHu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sit = reader.int32();
                    break;
                case 2:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Sit"))
                throw $util.ProtocolError("missing required 'Sit'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckWrongHu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckWrongHu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckWrongHu} AckWrongHu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckWrongHu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckWrongHu message.
         * @function verify
         * @memberof game.AckWrongHu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckWrongHu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Sit))
                return "Sit: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        return AckWrongHu;
    })();

    game.RankResult = (function() {

        /**
         * Properties of a RankResult.
         * @memberof game
         * @interface IRankResult
         * @property {number} tableId RankResult tableId
         * @property {Array.<game.IRankResultPlayer>|null} [playerResult] RankResult playerResult
         * @property {number} Type RankResult Type
         * @property {number} starttime RankResult starttime
         * @property {number} endtime RankResult endtime
         * @property {string} paipuUrl RankResult paipuUrl
         * @property {number|null} [societyID] RankResult societyID
         * @property {number|Long|null} [roomID] RankResult roomID
         * @property {Uint8Array|null} [entercodeID] RankResult entercodeID
         */

        /**
         * Constructs a new RankResult.
         * @memberof game
         * @classdesc Represents a RankResult.
         * @implements IRankResult
         * @constructor
         * @param {game.IRankResult=} [properties] Properties to set
         */
        function RankResult(properties) {
            this.playerResult = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankResult tableId.
         * @member {number} tableId
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.tableId = 0;

        /**
         * RankResult playerResult.
         * @member {Array.<game.IRankResultPlayer>} playerResult
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.playerResult = $util.emptyArray;

        /**
         * RankResult Type.
         * @member {number} Type
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.Type = 0;

        /**
         * RankResult starttime.
         * @member {number} starttime
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.starttime = 0;

        /**
         * RankResult endtime.
         * @member {number} endtime
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.endtime = 0;

        /**
         * RankResult paipuUrl.
         * @member {string} paipuUrl
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.paipuUrl = "";

        /**
         * RankResult societyID.
         * @member {number} societyID
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.societyID = 0;

        /**
         * RankResult roomID.
         * @member {number|Long} roomID
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.roomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankResult entercodeID.
         * @member {Uint8Array} entercodeID
         * @memberof game.RankResult
         * @instance
         */
        RankResult.prototype.entercodeID = $util.newBuffer([]);

        /**
         * Creates a new RankResult instance using the specified properties.
         * @function create
         * @memberof game.RankResult
         * @static
         * @param {game.IRankResult=} [properties] Properties to set
         * @returns {game.RankResult} RankResult instance
         */
        RankResult.create = function create(properties) {
            return new RankResult(properties);
        };

        /**
         * Encodes the specified RankResult message. Does not implicitly {@link game.RankResult.verify|verify} messages.
         * @function encode
         * @memberof game.RankResult
         * @static
         * @param {game.IRankResult} message RankResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
            if (message.playerResult != null && message.playerResult.length)
                for (var i = 0; i < message.playerResult.length; ++i)
                    $root.game.RankResultPlayer.encode(message.playerResult[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.starttime);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.endtime);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.paipuUrl);
            if (message.societyID != null && Object.hasOwnProperty.call(message, "societyID"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.societyID);
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.roomID);
            if (message.entercodeID != null && Object.hasOwnProperty.call(message, "entercodeID"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.entercodeID);
            return writer;
        };

        /**
         * Encodes the specified RankResult message, length delimited. Does not implicitly {@link game.RankResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RankResult
         * @static
         * @param {game.IRankResult} message RankResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.RankResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RankResult} RankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RankResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.int32();
                    break;
                case 2:
                    if (!(message.playerResult && message.playerResult.length))
                        message.playerResult = [];
                    message.playerResult.push($root.game.RankResultPlayer.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.Type = reader.int32();
                    break;
                case 4:
                    message.starttime = reader.int32();
                    break;
                case 5:
                    message.endtime = reader.int32();
                    break;
                case 6:
                    message.paipuUrl = reader.string();
                    break;
                case 7:
                    message.societyID = reader.int32();
                    break;
                case 8:
                    message.roomID = reader.int64();
                    break;
                case 9:
                    message.entercodeID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tableId"))
                throw $util.ProtocolError("missing required 'tableId'", { instance: message });
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            if (!message.hasOwnProperty("starttime"))
                throw $util.ProtocolError("missing required 'starttime'", { instance: message });
            if (!message.hasOwnProperty("endtime"))
                throw $util.ProtocolError("missing required 'endtime'", { instance: message });
            if (!message.hasOwnProperty("paipuUrl"))
                throw $util.ProtocolError("missing required 'paipuUrl'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RankResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RankResult} RankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankResult message.
         * @function verify
         * @memberof game.RankResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.tableId))
                return "tableId: integer expected";
            if (message.playerResult != null && message.hasOwnProperty("playerResult")) {
                if (!Array.isArray(message.playerResult))
                    return "playerResult: array expected";
                for (var i = 0; i < message.playerResult.length; ++i) {
                    var error = $root.game.RankResultPlayer.verify(message.playerResult[i]);
                    if (error)
                        return "playerResult." + error;
                }
            }
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isInteger(message.starttime))
                return "starttime: integer expected";
            if (!$util.isInteger(message.endtime))
                return "endtime: integer expected";
            if (!$util.isString(message.paipuUrl))
                return "paipuUrl: string expected";
            if (message.societyID != null && message.hasOwnProperty("societyID"))
                if (!$util.isInteger(message.societyID))
                    return "societyID: integer expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID) && !(message.roomID && $util.isInteger(message.roomID.low) && $util.isInteger(message.roomID.high)))
                    return "roomID: integer|Long expected";
            if (message.entercodeID != null && message.hasOwnProperty("entercodeID"))
                if (!(message.entercodeID && typeof message.entercodeID.length === "number" || $util.isString(message.entercodeID)))
                    return "entercodeID: buffer expected";
            return null;
        };

        return RankResult;
    })();

    game.RankResultPlayer = (function() {

        /**
         * Properties of a RankResultPlayer.
         * @memberof game
         * @interface IRankResultPlayer
         * @property {string} userName RankResultPlayer userName
         * @property {string} showName RankResultPlayer showName
         * @property {number} gameCoin RankResultPlayer gameCoin
         * @property {number|null} [huPai] RankResultPlayer huPai
         * @property {number|null} [dianPao] RankResultPlayer dianPao
         * @property {number|null} [ziMo] RankResultPlayer ziMo
         */

        /**
         * Constructs a new RankResultPlayer.
         * @memberof game
         * @classdesc Represents a RankResultPlayer.
         * @implements IRankResultPlayer
         * @constructor
         * @param {game.IRankResultPlayer=} [properties] Properties to set
         */
        function RankResultPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankResultPlayer userName.
         * @member {string} userName
         * @memberof game.RankResultPlayer
         * @instance
         */
        RankResultPlayer.prototype.userName = "";

        /**
         * RankResultPlayer showName.
         * @member {string} showName
         * @memberof game.RankResultPlayer
         * @instance
         */
        RankResultPlayer.prototype.showName = "";

        /**
         * RankResultPlayer gameCoin.
         * @member {number} gameCoin
         * @memberof game.RankResultPlayer
         * @instance
         */
        RankResultPlayer.prototype.gameCoin = 0;

        /**
         * RankResultPlayer huPai.
         * @member {number} huPai
         * @memberof game.RankResultPlayer
         * @instance
         */
        RankResultPlayer.prototype.huPai = 0;

        /**
         * RankResultPlayer dianPao.
         * @member {number} dianPao
         * @memberof game.RankResultPlayer
         * @instance
         */
        RankResultPlayer.prototype.dianPao = 0;

        /**
         * RankResultPlayer ziMo.
         * @member {number} ziMo
         * @memberof game.RankResultPlayer
         * @instance
         */
        RankResultPlayer.prototype.ziMo = 0;

        /**
         * Creates a new RankResultPlayer instance using the specified properties.
         * @function create
         * @memberof game.RankResultPlayer
         * @static
         * @param {game.IRankResultPlayer=} [properties] Properties to set
         * @returns {game.RankResultPlayer} RankResultPlayer instance
         */
        RankResultPlayer.create = function create(properties) {
            return new RankResultPlayer(properties);
        };

        /**
         * Encodes the specified RankResultPlayer message. Does not implicitly {@link game.RankResultPlayer.verify|verify} messages.
         * @function encode
         * @memberof game.RankResultPlayer
         * @static
         * @param {game.IRankResultPlayer} message RankResultPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankResultPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.showName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameCoin);
            if (message.huPai != null && Object.hasOwnProperty.call(message, "huPai"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.huPai);
            if (message.dianPao != null && Object.hasOwnProperty.call(message, "dianPao"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dianPao);
            if (message.ziMo != null && Object.hasOwnProperty.call(message, "ziMo"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ziMo);
            return writer;
        };

        /**
         * Encodes the specified RankResultPlayer message, length delimited. Does not implicitly {@link game.RankResultPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.RankResultPlayer
         * @static
         * @param {game.IRankResultPlayer} message RankResultPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankResultPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankResultPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof game.RankResultPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.RankResultPlayer} RankResultPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankResultPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.RankResultPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.showName = reader.string();
                    break;
                case 3:
                    message.gameCoin = reader.int32();
                    break;
                case 4:
                    message.huPai = reader.int32();
                    break;
                case 5:
                    message.dianPao = reader.int32();
                    break;
                case 6:
                    message.ziMo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("showName"))
                throw $util.ProtocolError("missing required 'showName'", { instance: message });
            if (!message.hasOwnProperty("gameCoin"))
                throw $util.ProtocolError("missing required 'gameCoin'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankResultPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.RankResultPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.RankResultPlayer} RankResultPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankResultPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankResultPlayer message.
         * @function verify
         * @memberof game.RankResultPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankResultPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (!$util.isString(message.showName))
                return "showName: string expected";
            if (!$util.isInteger(message.gameCoin))
                return "gameCoin: integer expected";
            if (message.huPai != null && message.hasOwnProperty("huPai"))
                if (!$util.isInteger(message.huPai))
                    return "huPai: integer expected";
            if (message.dianPao != null && message.hasOwnProperty("dianPao"))
                if (!$util.isInteger(message.dianPao))
                    return "dianPao: integer expected";
            if (message.ziMo != null && message.hasOwnProperty("ziMo"))
                if (!$util.isInteger(message.ziMo))
                    return "ziMo: integer expected";
            return null;
        };

        return RankResultPlayer;
    })();

    game.DeleteTable = (function() {

        /**
         * Properties of a DeleteTable.
         * @memberof game
         * @interface IDeleteTable
         * @property {string} RoleName DeleteTable RoleName
         * @property {string} showName DeleteTable showName
         * @property {string} NickName DeleteTable NickName
         * @property {number|Long} RoomID DeleteTable RoomID
         * @property {number} seat DeleteTable seat
         * @property {number|Long|null} [time] DeleteTable time
         * @property {number|null} [Operation] DeleteTable Operation
         */

        /**
         * Constructs a new DeleteTable.
         * @memberof game
         * @classdesc Represents a DeleteTable.
         * @implements IDeleteTable
         * @constructor
         * @param {game.IDeleteTable=} [properties] Properties to set
         */
        function DeleteTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteTable RoleName.
         * @member {string} RoleName
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.RoleName = "";

        /**
         * DeleteTable showName.
         * @member {string} showName
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.showName = "";

        /**
         * DeleteTable NickName.
         * @member {string} NickName
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.NickName = "";

        /**
         * DeleteTable RoomID.
         * @member {number|Long} RoomID
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeleteTable seat.
         * @member {number} seat
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.seat = 0;

        /**
         * DeleteTable time.
         * @member {number|Long} time
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeleteTable Operation.
         * @member {number} Operation
         * @memberof game.DeleteTable
         * @instance
         */
        DeleteTable.prototype.Operation = 0;

        /**
         * Creates a new DeleteTable instance using the specified properties.
         * @function create
         * @memberof game.DeleteTable
         * @static
         * @param {game.IDeleteTable=} [properties] Properties to set
         * @returns {game.DeleteTable} DeleteTable instance
         */
        DeleteTable.create = function create(properties) {
            return new DeleteTable(properties);
        };

        /**
         * Encodes the specified DeleteTable message. Does not implicitly {@link game.DeleteTable.verify|verify} messages.
         * @function encode
         * @memberof game.DeleteTable
         * @static
         * @param {game.IDeleteTable} message DeleteTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoleName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.showName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.RoomID);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seat);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.time);
            if (message.Operation != null && Object.hasOwnProperty.call(message, "Operation"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Operation);
            return writer;
        };

        /**
         * Encodes the specified DeleteTable message, length delimited. Does not implicitly {@link game.DeleteTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DeleteTable
         * @static
         * @param {game.IDeleteTable} message DeleteTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteTable message from the specified reader or buffer.
         * @function decode
         * @memberof game.DeleteTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DeleteTable} DeleteTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.DeleteTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoleName = reader.string();
                    break;
                case 2:
                    message.showName = reader.string();
                    break;
                case 3:
                    message.NickName = reader.string();
                    break;
                case 4:
                    message.RoomID = reader.int64();
                    break;
                case 5:
                    message.seat = reader.int32();
                    break;
                case 6:
                    message.time = reader.int64();
                    break;
                case 7:
                    message.Operation = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RoleName"))
                throw $util.ProtocolError("missing required 'RoleName'", { instance: message });
            if (!message.hasOwnProperty("showName"))
                throw $util.ProtocolError("missing required 'showName'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("RoomID"))
                throw $util.ProtocolError("missing required 'RoomID'", { instance: message });
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            return message;
        };

        /**
         * Decodes a DeleteTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DeleteTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DeleteTable} DeleteTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteTable message.
         * @function verify
         * @memberof game.DeleteTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.RoleName))
                return "RoleName: string expected";
            if (!$util.isString(message.showName))
                return "showName: string expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.RoomID) && !(message.RoomID && $util.isInteger(message.RoomID.low) && $util.isInteger(message.RoomID.high)))
                return "RoomID: integer|Long expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.Operation != null && message.hasOwnProperty("Operation"))
                if (!$util.isInteger(message.Operation))
                    return "Operation: integer expected";
            return null;
        };

        return DeleteTable;
    })();

    game.DeleteVote = (function() {

        /**
         * Properties of a DeleteVote.
         * @memberof game
         * @interface IDeleteVote
         * @property {string} RoleName DeleteVote RoleName
         * @property {string} showName DeleteVote showName
         * @property {string} NickName DeleteVote NickName
         * @property {number|Long} RoomID DeleteVote RoomID
         * @property {number} seat DeleteVote seat
         * @property {boolean} isAgree DeleteVote isAgree
         */

        /**
         * Constructs a new DeleteVote.
         * @memberof game
         * @classdesc Represents a DeleteVote.
         * @implements IDeleteVote
         * @constructor
         * @param {game.IDeleteVote=} [properties] Properties to set
         */
        function DeleteVote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteVote RoleName.
         * @member {string} RoleName
         * @memberof game.DeleteVote
         * @instance
         */
        DeleteVote.prototype.RoleName = "";

        /**
         * DeleteVote showName.
         * @member {string} showName
         * @memberof game.DeleteVote
         * @instance
         */
        DeleteVote.prototype.showName = "";

        /**
         * DeleteVote NickName.
         * @member {string} NickName
         * @memberof game.DeleteVote
         * @instance
         */
        DeleteVote.prototype.NickName = "";

        /**
         * DeleteVote RoomID.
         * @member {number|Long} RoomID
         * @memberof game.DeleteVote
         * @instance
         */
        DeleteVote.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeleteVote seat.
         * @member {number} seat
         * @memberof game.DeleteVote
         * @instance
         */
        DeleteVote.prototype.seat = 0;

        /**
         * DeleteVote isAgree.
         * @member {boolean} isAgree
         * @memberof game.DeleteVote
         * @instance
         */
        DeleteVote.prototype.isAgree = false;

        /**
         * Creates a new DeleteVote instance using the specified properties.
         * @function create
         * @memberof game.DeleteVote
         * @static
         * @param {game.IDeleteVote=} [properties] Properties to set
         * @returns {game.DeleteVote} DeleteVote instance
         */
        DeleteVote.create = function create(properties) {
            return new DeleteVote(properties);
        };

        /**
         * Encodes the specified DeleteVote message. Does not implicitly {@link game.DeleteVote.verify|verify} messages.
         * @function encode
         * @memberof game.DeleteVote
         * @static
         * @param {game.IDeleteVote} message DeleteVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteVote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoleName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.showName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.RoomID);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seat);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isAgree);
            return writer;
        };

        /**
         * Encodes the specified DeleteVote message, length delimited. Does not implicitly {@link game.DeleteVote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.DeleteVote
         * @static
         * @param {game.IDeleteVote} message DeleteVote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteVote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteVote message from the specified reader or buffer.
         * @function decode
         * @memberof game.DeleteVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.DeleteVote} DeleteVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteVote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.DeleteVote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoleName = reader.string();
                    break;
                case 2:
                    message.showName = reader.string();
                    break;
                case 3:
                    message.NickName = reader.string();
                    break;
                case 4:
                    message.RoomID = reader.int64();
                    break;
                case 5:
                    message.seat = reader.int32();
                    break;
                case 6:
                    message.isAgree = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RoleName"))
                throw $util.ProtocolError("missing required 'RoleName'", { instance: message });
            if (!message.hasOwnProperty("showName"))
                throw $util.ProtocolError("missing required 'showName'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("RoomID"))
                throw $util.ProtocolError("missing required 'RoomID'", { instance: message });
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            if (!message.hasOwnProperty("isAgree"))
                throw $util.ProtocolError("missing required 'isAgree'", { instance: message });
            return message;
        };

        /**
         * Decodes a DeleteVote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.DeleteVote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.DeleteVote} DeleteVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteVote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteVote message.
         * @function verify
         * @memberof game.DeleteVote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteVote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.RoleName))
                return "RoleName: string expected";
            if (!$util.isString(message.showName))
                return "showName: string expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.RoomID) && !(message.RoomID && $util.isInteger(message.RoomID.low) && $util.isInteger(message.RoomID.high)))
                return "RoomID: integer|Long expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            if (typeof message.isAgree !== "boolean")
                return "isAgree: boolean expected";
            return null;
        };

        return DeleteVote;
    })();

    game.OGNtcMessage = (function() {

        /**
         * Properties of a OGNtcMessage.
         * @memberof game
         * @interface IOGNtcMessage
         * @property {number} result OGNtcMessage result
         * @property {string} msg OGNtcMessage msg
         */

        /**
         * Constructs a new OGNtcMessage.
         * @memberof game
         * @classdesc Represents a OGNtcMessage.
         * @implements IOGNtcMessage
         * @constructor
         * @param {game.IOGNtcMessage=} [properties] Properties to set
         */
        function OGNtcMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OGNtcMessage result.
         * @member {number} result
         * @memberof game.OGNtcMessage
         * @instance
         */
        OGNtcMessage.prototype.result = 0;

        /**
         * OGNtcMessage msg.
         * @member {string} msg
         * @memberof game.OGNtcMessage
         * @instance
         */
        OGNtcMessage.prototype.msg = "";

        /**
         * Creates a new OGNtcMessage instance using the specified properties.
         * @function create
         * @memberof game.OGNtcMessage
         * @static
         * @param {game.IOGNtcMessage=} [properties] Properties to set
         * @returns {game.OGNtcMessage} OGNtcMessage instance
         */
        OGNtcMessage.create = function create(properties) {
            return new OGNtcMessage(properties);
        };

        /**
         * Encodes the specified OGNtcMessage message. Does not implicitly {@link game.OGNtcMessage.verify|verify} messages.
         * @function encode
         * @memberof game.OGNtcMessage
         * @static
         * @param {game.IOGNtcMessage} message OGNtcMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OGNtcMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified OGNtcMessage message, length delimited. Does not implicitly {@link game.OGNtcMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OGNtcMessage
         * @static
         * @param {game.IOGNtcMessage} message OGNtcMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OGNtcMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a OGNtcMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.OGNtcMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OGNtcMessage} OGNtcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OGNtcMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OGNtcMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("result"))
                throw $util.ProtocolError("missing required 'result'", { instance: message });
            if (!message.hasOwnProperty("msg"))
                throw $util.ProtocolError("missing required 'msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a OGNtcMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OGNtcMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OGNtcMessage} OGNtcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OGNtcMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a OGNtcMessage message.
         * @function verify
         * @memberof game.OGNtcMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OGNtcMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (!$util.isString(message.msg))
                return "msg: string expected";
            return null;
        };

        return OGNtcMessage;
    })();

    game.OGNtcGameChatMessage = (function() {

        /**
         * Properties of a OGNtcGameChatMessage.
         * @memberof game
         * @interface IOGNtcGameChatMessage
         * @property {number} sit OGNtcGameChatMessage sit
         * @property {number} type OGNtcGameChatMessage type
         * @property {string|null} [msg] OGNtcGameChatMessage msg
         */

        /**
         * Constructs a new OGNtcGameChatMessage.
         * @memberof game
         * @classdesc Represents a OGNtcGameChatMessage.
         * @implements IOGNtcGameChatMessage
         * @constructor
         * @param {game.IOGNtcGameChatMessage=} [properties] Properties to set
         */
        function OGNtcGameChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OGNtcGameChatMessage sit.
         * @member {number} sit
         * @memberof game.OGNtcGameChatMessage
         * @instance
         */
        OGNtcGameChatMessage.prototype.sit = 0;

        /**
         * OGNtcGameChatMessage type.
         * @member {number} type
         * @memberof game.OGNtcGameChatMessage
         * @instance
         */
        OGNtcGameChatMessage.prototype.type = 0;

        /**
         * OGNtcGameChatMessage msg.
         * @member {string} msg
         * @memberof game.OGNtcGameChatMessage
         * @instance
         */
        OGNtcGameChatMessage.prototype.msg = "";

        /**
         * Creates a new OGNtcGameChatMessage instance using the specified properties.
         * @function create
         * @memberof game.OGNtcGameChatMessage
         * @static
         * @param {game.IOGNtcGameChatMessage=} [properties] Properties to set
         * @returns {game.OGNtcGameChatMessage} OGNtcGameChatMessage instance
         */
        OGNtcGameChatMessage.create = function create(properties) {
            return new OGNtcGameChatMessage(properties);
        };

        /**
         * Encodes the specified OGNtcGameChatMessage message. Does not implicitly {@link game.OGNtcGameChatMessage.verify|verify} messages.
         * @function encode
         * @memberof game.OGNtcGameChatMessage
         * @static
         * @param {game.IOGNtcGameChatMessage} message OGNtcGameChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OGNtcGameChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sit);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified OGNtcGameChatMessage message, length delimited. Does not implicitly {@link game.OGNtcGameChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.OGNtcGameChatMessage
         * @static
         * @param {game.IOGNtcGameChatMessage} message OGNtcGameChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OGNtcGameChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a OGNtcGameChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof game.OGNtcGameChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.OGNtcGameChatMessage} OGNtcGameChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OGNtcGameChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.OGNtcGameChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sit = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("sit"))
                throw $util.ProtocolError("missing required 'sit'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a OGNtcGameChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.OGNtcGameChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.OGNtcGameChatMessage} OGNtcGameChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OGNtcGameChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a OGNtcGameChatMessage message.
         * @function verify
         * @memberof game.OGNtcGameChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OGNtcGameChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.sit))
                return "sit: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        return OGNtcGameChatMessage;
    })();

    game.ReqHuanSanZhang = (function() {

        /**
         * Properties of a ReqHuanSanZhang.
         * @memberof game
         * @interface IReqHuanSanZhang
         * @property {Array.<game.ICardInfo>|null} [huan_san_zhang] ReqHuanSanZhang huan_san_zhang
         * @property {number} seat ReqHuanSanZhang seat
         */

        /**
         * Constructs a new ReqHuanSanZhang.
         * @memberof game
         * @classdesc Represents a ReqHuanSanZhang.
         * @implements IReqHuanSanZhang
         * @constructor
         * @param {game.IReqHuanSanZhang=} [properties] Properties to set
         */
        function ReqHuanSanZhang(properties) {
            this.huan_san_zhang = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqHuanSanZhang huan_san_zhang.
         * @member {Array.<game.ICardInfo>} huan_san_zhang
         * @memberof game.ReqHuanSanZhang
         * @instance
         */
        ReqHuanSanZhang.prototype.huan_san_zhang = $util.emptyArray;

        /**
         * ReqHuanSanZhang seat.
         * @member {number} seat
         * @memberof game.ReqHuanSanZhang
         * @instance
         */
        ReqHuanSanZhang.prototype.seat = 0;

        /**
         * Creates a new ReqHuanSanZhang instance using the specified properties.
         * @function create
         * @memberof game.ReqHuanSanZhang
         * @static
         * @param {game.IReqHuanSanZhang=} [properties] Properties to set
         * @returns {game.ReqHuanSanZhang} ReqHuanSanZhang instance
         */
        ReqHuanSanZhang.create = function create(properties) {
            return new ReqHuanSanZhang(properties);
        };

        /**
         * Encodes the specified ReqHuanSanZhang message. Does not implicitly {@link game.ReqHuanSanZhang.verify|verify} messages.
         * @function encode
         * @memberof game.ReqHuanSanZhang
         * @static
         * @param {game.IReqHuanSanZhang} message ReqHuanSanZhang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHuanSanZhang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.huan_san_zhang != null && message.huan_san_zhang.length)
                for (var i = 0; i < message.huan_san_zhang.length; ++i)
                    $root.game.CardInfo.encode(message.huan_san_zhang[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            return writer;
        };

        /**
         * Encodes the specified ReqHuanSanZhang message, length delimited. Does not implicitly {@link game.ReqHuanSanZhang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqHuanSanZhang
         * @static
         * @param {game.IReqHuanSanZhang} message ReqHuanSanZhang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHuanSanZhang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqHuanSanZhang message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqHuanSanZhang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqHuanSanZhang} ReqHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHuanSanZhang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqHuanSanZhang();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.huan_san_zhang && message.huan_san_zhang.length))
                        message.huan_san_zhang = [];
                    message.huan_san_zhang.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.seat = reader.int32();
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
         * Decodes a ReqHuanSanZhang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqHuanSanZhang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqHuanSanZhang} ReqHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHuanSanZhang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqHuanSanZhang message.
         * @function verify
         * @memberof game.ReqHuanSanZhang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqHuanSanZhang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.huan_san_zhang != null && message.hasOwnProperty("huan_san_zhang")) {
                if (!Array.isArray(message.huan_san_zhang))
                    return "huan_san_zhang: array expected";
                for (var i = 0; i < message.huan_san_zhang.length; ++i) {
                    var error = $root.game.CardInfo.verify(message.huan_san_zhang[i]);
                    if (error)
                        return "huan_san_zhang." + error;
                }
            }
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            return null;
        };

        return ReqHuanSanZhang;
    })();

    game.AckHuanSanZhang = (function() {

        /**
         * Properties of an AckHuanSanZhang.
         * @memberof game
         * @interface IAckHuanSanZhang
         * @property {Array.<game.ICardInfo>|null} [huan_san_zhang] AckHuanSanZhang huan_san_zhang
         * @property {number} order AckHuanSanZhang order
         * @property {Array.<game.ICardInfo>|null} [req_huan] AckHuanSanZhang req_huan
         */

        /**
         * Constructs a new AckHuanSanZhang.
         * @memberof game
         * @classdesc Represents an AckHuanSanZhang.
         * @implements IAckHuanSanZhang
         * @constructor
         * @param {game.IAckHuanSanZhang=} [properties] Properties to set
         */
        function AckHuanSanZhang(properties) {
            this.huan_san_zhang = [];
            this.req_huan = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckHuanSanZhang huan_san_zhang.
         * @member {Array.<game.ICardInfo>} huan_san_zhang
         * @memberof game.AckHuanSanZhang
         * @instance
         */
        AckHuanSanZhang.prototype.huan_san_zhang = $util.emptyArray;

        /**
         * AckHuanSanZhang order.
         * @member {number} order
         * @memberof game.AckHuanSanZhang
         * @instance
         */
        AckHuanSanZhang.prototype.order = 0;

        /**
         * AckHuanSanZhang req_huan.
         * @member {Array.<game.ICardInfo>} req_huan
         * @memberof game.AckHuanSanZhang
         * @instance
         */
        AckHuanSanZhang.prototype.req_huan = $util.emptyArray;

        /**
         * Creates a new AckHuanSanZhang instance using the specified properties.
         * @function create
         * @memberof game.AckHuanSanZhang
         * @static
         * @param {game.IAckHuanSanZhang=} [properties] Properties to set
         * @returns {game.AckHuanSanZhang} AckHuanSanZhang instance
         */
        AckHuanSanZhang.create = function create(properties) {
            return new AckHuanSanZhang(properties);
        };

        /**
         * Encodes the specified AckHuanSanZhang message. Does not implicitly {@link game.AckHuanSanZhang.verify|verify} messages.
         * @function encode
         * @memberof game.AckHuanSanZhang
         * @static
         * @param {game.IAckHuanSanZhang} message AckHuanSanZhang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckHuanSanZhang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.huan_san_zhang != null && message.huan_san_zhang.length)
                for (var i = 0; i < message.huan_san_zhang.length; ++i)
                    $root.game.CardInfo.encode(message.huan_san_zhang[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.order);
            if (message.req_huan != null && message.req_huan.length)
                for (var i = 0; i < message.req_huan.length; ++i)
                    $root.game.CardInfo.encode(message.req_huan[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckHuanSanZhang message, length delimited. Does not implicitly {@link game.AckHuanSanZhang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckHuanSanZhang
         * @static
         * @param {game.IAckHuanSanZhang} message AckHuanSanZhang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckHuanSanZhang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckHuanSanZhang message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckHuanSanZhang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckHuanSanZhang} AckHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckHuanSanZhang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckHuanSanZhang();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.huan_san_zhang && message.huan_san_zhang.length))
                        message.huan_san_zhang = [];
                    message.huan_san_zhang.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.order = reader.int32();
                    break;
                case 3:
                    if (!(message.req_huan && message.req_huan.length))
                        message.req_huan = [];
                    message.req_huan.push($root.game.CardInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("order"))
                throw $util.ProtocolError("missing required 'order'", { instance: message });
            return message;
        };

        /**
         * Decodes an AckHuanSanZhang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckHuanSanZhang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckHuanSanZhang} AckHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckHuanSanZhang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckHuanSanZhang message.
         * @function verify
         * @memberof game.AckHuanSanZhang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckHuanSanZhang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.huan_san_zhang != null && message.hasOwnProperty("huan_san_zhang")) {
                if (!Array.isArray(message.huan_san_zhang))
                    return "huan_san_zhang: array expected";
                for (var i = 0; i < message.huan_san_zhang.length; ++i) {
                    var error = $root.game.CardInfo.verify(message.huan_san_zhang[i]);
                    if (error)
                        return "huan_san_zhang." + error;
                }
            }
            if (!$util.isInteger(message.order))
                return "order: integer expected";
            if (message.req_huan != null && message.hasOwnProperty("req_huan")) {
                if (!Array.isArray(message.req_huan))
                    return "req_huan: array expected";
                for (var i = 0; i < message.req_huan.length; ++i) {
                    var error = $root.game.CardInfo.verify(message.req_huan[i]);
                    if (error)
                        return "req_huan." + error;
                }
            }
            return null;
        };

        return AckHuanSanZhang;
    })();

    game.ReqHuanSanZhangEnd = (function() {

        /**
         * Properties of a ReqHuanSanZhangEnd.
         * @memberof game
         * @interface IReqHuanSanZhangEnd
         * @property {string} username ReqHuanSanZhangEnd username
         */

        /**
         * Constructs a new ReqHuanSanZhangEnd.
         * @memberof game
         * @classdesc Represents a ReqHuanSanZhangEnd.
         * @implements IReqHuanSanZhangEnd
         * @constructor
         * @param {game.IReqHuanSanZhangEnd=} [properties] Properties to set
         */
        function ReqHuanSanZhangEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqHuanSanZhangEnd username.
         * @member {string} username
         * @memberof game.ReqHuanSanZhangEnd
         * @instance
         */
        ReqHuanSanZhangEnd.prototype.username = "";

        /**
         * Creates a new ReqHuanSanZhangEnd instance using the specified properties.
         * @function create
         * @memberof game.ReqHuanSanZhangEnd
         * @static
         * @param {game.IReqHuanSanZhangEnd=} [properties] Properties to set
         * @returns {game.ReqHuanSanZhangEnd} ReqHuanSanZhangEnd instance
         */
        ReqHuanSanZhangEnd.create = function create(properties) {
            return new ReqHuanSanZhangEnd(properties);
        };

        /**
         * Encodes the specified ReqHuanSanZhangEnd message. Does not implicitly {@link game.ReqHuanSanZhangEnd.verify|verify} messages.
         * @function encode
         * @memberof game.ReqHuanSanZhangEnd
         * @static
         * @param {game.IReqHuanSanZhangEnd} message ReqHuanSanZhangEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHuanSanZhangEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified ReqHuanSanZhangEnd message, length delimited. Does not implicitly {@link game.ReqHuanSanZhangEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqHuanSanZhangEnd
         * @static
         * @param {game.IReqHuanSanZhangEnd} message ReqHuanSanZhangEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqHuanSanZhangEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqHuanSanZhangEnd message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqHuanSanZhangEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqHuanSanZhangEnd} ReqHuanSanZhangEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHuanSanZhangEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqHuanSanZhangEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
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
         * Decodes a ReqHuanSanZhangEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqHuanSanZhangEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqHuanSanZhangEnd} ReqHuanSanZhangEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqHuanSanZhangEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqHuanSanZhangEnd message.
         * @function verify
         * @memberof game.ReqHuanSanZhangEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqHuanSanZhangEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            return null;
        };

        return ReqHuanSanZhangEnd;
    })();

    game.ReqDingQue = (function() {

        /**
         * Properties of a ReqDingQue.
         * @memberof game
         * @interface IReqDingQue
         * @property {number} dingque ReqDingQue dingque
         * @property {number} seat ReqDingQue seat
         */

        /**
         * Constructs a new ReqDingQue.
         * @memberof game
         * @classdesc Represents a ReqDingQue.
         * @implements IReqDingQue
         * @constructor
         * @param {game.IReqDingQue=} [properties] Properties to set
         */
        function ReqDingQue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqDingQue dingque.
         * @member {number} dingque
         * @memberof game.ReqDingQue
         * @instance
         */
        ReqDingQue.prototype.dingque = 0;

        /**
         * ReqDingQue seat.
         * @member {number} seat
         * @memberof game.ReqDingQue
         * @instance
         */
        ReqDingQue.prototype.seat = 0;

        /**
         * Creates a new ReqDingQue instance using the specified properties.
         * @function create
         * @memberof game.ReqDingQue
         * @static
         * @param {game.IReqDingQue=} [properties] Properties to set
         * @returns {game.ReqDingQue} ReqDingQue instance
         */
        ReqDingQue.create = function create(properties) {
            return new ReqDingQue(properties);
        };

        /**
         * Encodes the specified ReqDingQue message. Does not implicitly {@link game.ReqDingQue.verify|verify} messages.
         * @function encode
         * @memberof game.ReqDingQue
         * @static
         * @param {game.IReqDingQue} message ReqDingQue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDingQue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dingque);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            return writer;
        };

        /**
         * Encodes the specified ReqDingQue message, length delimited. Does not implicitly {@link game.ReqDingQue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ReqDingQue
         * @static
         * @param {game.IReqDingQue} message ReqDingQue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqDingQue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqDingQue message from the specified reader or buffer.
         * @function decode
         * @memberof game.ReqDingQue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ReqDingQue} ReqDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDingQue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ReqDingQue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dingque = reader.int32();
                    break;
                case 2:
                    message.seat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("dingque"))
                throw $util.ProtocolError("missing required 'dingque'", { instance: message });
            if (!message.hasOwnProperty("seat"))
                throw $util.ProtocolError("missing required 'seat'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReqDingQue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.ReqDingQue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ReqDingQue} ReqDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqDingQue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqDingQue message.
         * @function verify
         * @memberof game.ReqDingQue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqDingQue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.dingque))
                return "dingque: integer expected";
            if (!$util.isInteger(message.seat))
                return "seat: integer expected";
            return null;
        };

        return ReqDingQue;
    })();

    game.AckDingQue = (function() {

        /**
         * Properties of an AckDingQue.
         * @memberof game
         * @interface IAckDingQue
         * @property {Array.<number>|null} [dingque] AckDingQue dingque
         */

        /**
         * Constructs a new AckDingQue.
         * @memberof game
         * @classdesc Represents an AckDingQue.
         * @implements IAckDingQue
         * @constructor
         * @param {game.IAckDingQue=} [properties] Properties to set
         */
        function AckDingQue(properties) {
            this.dingque = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckDingQue dingque.
         * @member {Array.<number>} dingque
         * @memberof game.AckDingQue
         * @instance
         */
        AckDingQue.prototype.dingque = $util.emptyArray;

        /**
         * Creates a new AckDingQue instance using the specified properties.
         * @function create
         * @memberof game.AckDingQue
         * @static
         * @param {game.IAckDingQue=} [properties] Properties to set
         * @returns {game.AckDingQue} AckDingQue instance
         */
        AckDingQue.create = function create(properties) {
            return new AckDingQue(properties);
        };

        /**
         * Encodes the specified AckDingQue message. Does not implicitly {@link game.AckDingQue.verify|verify} messages.
         * @function encode
         * @memberof game.AckDingQue
         * @static
         * @param {game.IAckDingQue} message AckDingQue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckDingQue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dingque != null && message.dingque.length)
                for (var i = 0; i < message.dingque.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dingque[i]);
            return writer;
        };

        /**
         * Encodes the specified AckDingQue message, length delimited. Does not implicitly {@link game.AckDingQue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckDingQue
         * @static
         * @param {game.IAckDingQue} message AckDingQue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckDingQue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckDingQue message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckDingQue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckDingQue} AckDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckDingQue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckDingQue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.dingque && message.dingque.length))
                        message.dingque = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dingque.push(reader.int32());
                    } else
                        message.dingque.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AckDingQue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckDingQue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckDingQue} AckDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckDingQue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckDingQue message.
         * @function verify
         * @memberof game.AckDingQue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckDingQue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dingque != null && message.hasOwnProperty("dingque")) {
                if (!Array.isArray(message.dingque))
                    return "dingque: array expected";
                for (var i = 0; i < message.dingque.length; ++i)
                    if (!$util.isInteger(message.dingque[i]))
                        return "dingque: integer[] expected";
            }
            return null;
        };

        return AckDingQue;
    })();

    game.AckGameStatus = (function() {

        /**
         * Properties of an AckGameStatus.
         * @memberof game
         * @interface IAckGameStatus
         * @property {Array.<number>|null} [nstatus] AckGameStatus nstatus
         */

        /**
         * Constructs a new AckGameStatus.
         * @memberof game
         * @classdesc Represents an AckGameStatus.
         * @implements IAckGameStatus
         * @constructor
         * @param {game.IAckGameStatus=} [properties] Properties to set
         */
        function AckGameStatus(properties) {
            this.nstatus = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameStatus nstatus.
         * @member {Array.<number>} nstatus
         * @memberof game.AckGameStatus
         * @instance
         */
        AckGameStatus.prototype.nstatus = $util.emptyArray;

        /**
         * Creates a new AckGameStatus instance using the specified properties.
         * @function create
         * @memberof game.AckGameStatus
         * @static
         * @param {game.IAckGameStatus=} [properties] Properties to set
         * @returns {game.AckGameStatus} AckGameStatus instance
         */
        AckGameStatus.create = function create(properties) {
            return new AckGameStatus(properties);
        };

        /**
         * Encodes the specified AckGameStatus message. Does not implicitly {@link game.AckGameStatus.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameStatus
         * @static
         * @param {game.IAckGameStatus} message AckGameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nstatus != null && message.nstatus.length)
                for (var i = 0; i < message.nstatus.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nstatus[i]);
            return writer;
        };

        /**
         * Encodes the specified AckGameStatus message, length delimited. Does not implicitly {@link game.AckGameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameStatus
         * @static
         * @param {game.IAckGameStatus} message AckGameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameStatus} AckGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.nstatus && message.nstatus.length))
                        message.nstatus = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.nstatus.push(reader.int32());
                    } else
                        message.nstatus.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AckGameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameStatus} AckGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameStatus message.
         * @function verify
         * @memberof game.AckGameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nstatus != null && message.hasOwnProperty("nstatus")) {
                if (!Array.isArray(message.nstatus))
                    return "nstatus: array expected";
                for (var i = 0; i < message.nstatus.length; ++i)
                    if (!$util.isInteger(message.nstatus[i]))
                        return "nstatus: integer[] expected";
            }
            return null;
        };

        return AckGameStatus;
    })();

    game.TingCard = (function() {

        /**
         * Properties of a TingCard.
         * @memberof game
         * @interface ITingCard
         * @property {number} FanType TingCard FanType
         * @property {number} CardIndex TingCard CardIndex
         */

        /**
         * Constructs a new TingCard.
         * @memberof game
         * @classdesc Represents a TingCard.
         * @implements ITingCard
         * @constructor
         * @param {game.ITingCard=} [properties] Properties to set
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
         * @memberof game.TingCard
         * @instance
         */
        TingCard.prototype.FanType = 0;

        /**
         * TingCard CardIndex.
         * @member {number} CardIndex
         * @memberof game.TingCard
         * @instance
         */
        TingCard.prototype.CardIndex = 0;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @function create
         * @memberof game.TingCard
         * @static
         * @param {game.ITingCard=} [properties] Properties to set
         * @returns {game.TingCard} TingCard instance
         */
        TingCard.create = function create(properties) {
            return new TingCard(properties);
        };

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link game.TingCard.verify|verify} messages.
         * @function encode
         * @memberof game.TingCard
         * @static
         * @param {game.ITingCard} message TingCard message or plain object to encode
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
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link game.TingCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.TingCard
         * @static
         * @param {game.ITingCard} message TingCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TingCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @function decode
         * @memberof game.TingCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.TingCard} TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TingCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.TingCard();
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
         * @memberof game.TingCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.TingCard} TingCard
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
         * @memberof game.TingCard
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

    game.MahjongCallInfo = (function() {

        /**
         * Properties of a MahjongCallInfo.
         * @memberof game
         * @interface IMahjongCallInfo
         * @property {number} ObtainCardIndex MahjongCallInfo ObtainCardIndex
         * @property {Array.<game.ITingCard>|null} [CallCards] MahjongCallInfo CallCards
         */

        /**
         * Constructs a new MahjongCallInfo.
         * @memberof game
         * @classdesc Represents a MahjongCallInfo.
         * @implements IMahjongCallInfo
         * @constructor
         * @param {game.IMahjongCallInfo=} [properties] Properties to set
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
         * @memberof game.MahjongCallInfo
         * @instance
         */
        MahjongCallInfo.prototype.ObtainCardIndex = 0;

        /**
         * MahjongCallInfo CallCards.
         * @member {Array.<game.ITingCard>} CallCards
         * @memberof game.MahjongCallInfo
         * @instance
         */
        MahjongCallInfo.prototype.CallCards = $util.emptyArray;

        /**
         * Creates a new MahjongCallInfo instance using the specified properties.
         * @function create
         * @memberof game.MahjongCallInfo
         * @static
         * @param {game.IMahjongCallInfo=} [properties] Properties to set
         * @returns {game.MahjongCallInfo} MahjongCallInfo instance
         */
        MahjongCallInfo.create = function create(properties) {
            return new MahjongCallInfo(properties);
        };

        /**
         * Encodes the specified MahjongCallInfo message. Does not implicitly {@link game.MahjongCallInfo.verify|verify} messages.
         * @function encode
         * @memberof game.MahjongCallInfo
         * @static
         * @param {game.IMahjongCallInfo} message MahjongCallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongCallInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ObtainCardIndex);
            if (message.CallCards != null && message.CallCards.length)
                for (var i = 0; i < message.CallCards.length; ++i)
                    $root.game.TingCard.encode(message.CallCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MahjongCallInfo message, length delimited. Does not implicitly {@link game.MahjongCallInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.MahjongCallInfo
         * @static
         * @param {game.IMahjongCallInfo} message MahjongCallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MahjongCallInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.MahjongCallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.MahjongCallInfo} MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MahjongCallInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.MahjongCallInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ObtainCardIndex = reader.int32();
                    break;
                case 2:
                    if (!(message.CallCards && message.CallCards.length))
                        message.CallCards = [];
                    message.CallCards.push($root.game.TingCard.decode(reader, reader.uint32()));
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
         * @memberof game.MahjongCallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.MahjongCallInfo} MahjongCallInfo
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
         * @memberof game.MahjongCallInfo
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
                    var error = $root.game.TingCard.verify(message.CallCards[i]);
                    if (error)
                        return "CallCards." + error;
                }
            }
            return null;
        };

        return MahjongCallInfo;
    })();

    game.AckGameResult = (function() {

        /**
         * Properties of an AckGameResult.
         * @memberof game
         * @interface IAckGameResult
         * @property {string|null} [tableGuid] AckGameResult tableGuid
         * @property {number|null} [IsOver] AckGameResult IsOver
         * @property {Array.<game.IPlayerResultInfo>|null} [playerInfo] AckGameResult playerInfo
         */

        /**
         * Constructs a new AckGameResult.
         * @memberof game
         * @classdesc Represents an AckGameResult.
         * @implements IAckGameResult
         * @constructor
         * @param {game.IAckGameResult=} [properties] Properties to set
         */
        function AckGameResult(properties) {
            this.playerInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckGameResult tableGuid.
         * @member {string} tableGuid
         * @memberof game.AckGameResult
         * @instance
         */
        AckGameResult.prototype.tableGuid = "";

        /**
         * AckGameResult IsOver.
         * @member {number} IsOver
         * @memberof game.AckGameResult
         * @instance
         */
        AckGameResult.prototype.IsOver = 0;

        /**
         * AckGameResult playerInfo.
         * @member {Array.<game.IPlayerResultInfo>} playerInfo
         * @memberof game.AckGameResult
         * @instance
         */
        AckGameResult.prototype.playerInfo = $util.emptyArray;

        /**
         * Creates a new AckGameResult instance using the specified properties.
         * @function create
         * @memberof game.AckGameResult
         * @static
         * @param {game.IAckGameResult=} [properties] Properties to set
         * @returns {game.AckGameResult} AckGameResult instance
         */
        AckGameResult.create = function create(properties) {
            return new AckGameResult(properties);
        };

        /**
         * Encodes the specified AckGameResult message. Does not implicitly {@link game.AckGameResult.verify|verify} messages.
         * @function encode
         * @memberof game.AckGameResult
         * @static
         * @param {game.IAckGameResult} message AckGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableGuid != null && Object.hasOwnProperty.call(message, "tableGuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableGuid);
            if (message.IsOver != null && Object.hasOwnProperty.call(message, "IsOver"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.IsOver);
            if (message.playerInfo != null && message.playerInfo.length)
                for (var i = 0; i < message.playerInfo.length; ++i)
                    $root.game.PlayerResultInfo.encode(message.playerInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AckGameResult message, length delimited. Does not implicitly {@link game.AckGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.AckGameResult
         * @static
         * @param {game.IAckGameResult} message AckGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof game.AckGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.AckGameResult} AckGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.AckGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableGuid = reader.string();
                    break;
                case 2:
                    message.IsOver = reader.int32();
                    break;
                case 3:
                    if (!(message.playerInfo && message.playerInfo.length))
                        message.playerInfo = [];
                    message.playerInfo.push($root.game.PlayerResultInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AckGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.AckGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.AckGameResult} AckGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckGameResult message.
         * @function verify
         * @memberof game.AckGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableGuid != null && message.hasOwnProperty("tableGuid"))
                if (!$util.isString(message.tableGuid))
                    return "tableGuid: string expected";
            if (message.IsOver != null && message.hasOwnProperty("IsOver"))
                if (!$util.isInteger(message.IsOver))
                    return "IsOver: integer expected";
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                if (!Array.isArray(message.playerInfo))
                    return "playerInfo: array expected";
                for (var i = 0; i < message.playerInfo.length; ++i) {
                    var error = $root.game.PlayerResultInfo.verify(message.playerInfo[i]);
                    if (error)
                        return "playerInfo." + error;
                }
            }
            return null;
        };

        return AckGameResult;
    })();

    game.PlayerResultInfo = (function() {

        /**
         * Properties of a PlayerResultInfo.
         * @memberof game
         * @interface IPlayerResultInfo
         * @property {string} username PlayerResultInfo username
         * @property {number|null} [seat] PlayerResultInfo seat
         * @property {number|null} [fantype] PlayerResultInfo fantype
         * @property {number|null} [wintype] PlayerResultInfo wintype
         * @property {number|null} [max_fan] PlayerResultInfo max_fan
         * @property {number|null} [gameCoin] PlayerResultInfo gameCoin
         * @property {number|null} [Coin] PlayerResultInfo Coin
         * @property {number|null} [feeCoin] PlayerResultInfo feeCoin
         * @property {Array.<game.IScoreDescDetail>|null} [result_list_detail] PlayerResultInfo result_list_detail
         * @property {Array.<game.ICardsGroup>|null} [handCards] PlayerResultInfo handCards
         */

        /**
         * Constructs a new PlayerResultInfo.
         * @memberof game
         * @classdesc Represents a PlayerResultInfo.
         * @implements IPlayerResultInfo
         * @constructor
         * @param {game.IPlayerResultInfo=} [properties] Properties to set
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
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.username = "";

        /**
         * PlayerResultInfo seat.
         * @member {number} seat
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.seat = 0;

        /**
         * PlayerResultInfo fantype.
         * @member {number} fantype
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.fantype = 0;

        /**
         * PlayerResultInfo wintype.
         * @member {number} wintype
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.wintype = 0;

        /**
         * PlayerResultInfo max_fan.
         * @member {number} max_fan
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.max_fan = 0;

        /**
         * PlayerResultInfo gameCoin.
         * @member {number} gameCoin
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.gameCoin = 0;

        /**
         * PlayerResultInfo Coin.
         * @member {number} Coin
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.Coin = 0;

        /**
         * PlayerResultInfo feeCoin.
         * @member {number} feeCoin
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.feeCoin = 0;

        /**
         * PlayerResultInfo result_list_detail.
         * @member {Array.<game.IScoreDescDetail>} result_list_detail
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.result_list_detail = $util.emptyArray;

        /**
         * PlayerResultInfo handCards.
         * @member {Array.<game.ICardsGroup>} handCards
         * @memberof game.PlayerResultInfo
         * @instance
         */
        PlayerResultInfo.prototype.handCards = $util.emptyArray;

        /**
         * Creates a new PlayerResultInfo instance using the specified properties.
         * @function create
         * @memberof game.PlayerResultInfo
         * @static
         * @param {game.IPlayerResultInfo=} [properties] Properties to set
         * @returns {game.PlayerResultInfo} PlayerResultInfo instance
         */
        PlayerResultInfo.create = function create(properties) {
            return new PlayerResultInfo(properties);
        };

        /**
         * Encodes the specified PlayerResultInfo message. Does not implicitly {@link game.PlayerResultInfo.verify|verify} messages.
         * @function encode
         * @memberof game.PlayerResultInfo
         * @static
         * @param {game.IPlayerResultInfo} message PlayerResultInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResultInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            if (message.fantype != null && Object.hasOwnProperty.call(message, "fantype"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fantype);
            if (message.wintype != null && Object.hasOwnProperty.call(message, "wintype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wintype);
            if (message.max_fan != null && Object.hasOwnProperty.call(message, "max_fan"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.max_fan);
            if (message.gameCoin != null && Object.hasOwnProperty.call(message, "gameCoin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameCoin);
            if (message.Coin != null && Object.hasOwnProperty.call(message, "Coin"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Coin);
            if (message.feeCoin != null && Object.hasOwnProperty.call(message, "feeCoin"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.feeCoin);
            if (message.result_list_detail != null && message.result_list_detail.length)
                for (var i = 0; i < message.result_list_detail.length; ++i)
                    $root.game.ScoreDescDetail.encode(message.result_list_detail[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.handCards != null && message.handCards.length)
                for (var i = 0; i < message.handCards.length; ++i)
                    $root.game.CardsGroup.encode(message.handCards[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerResultInfo message, length delimited. Does not implicitly {@link game.PlayerResultInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.PlayerResultInfo
         * @static
         * @param {game.IPlayerResultInfo} message PlayerResultInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResultInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer.
         * @function decode
         * @memberof game.PlayerResultInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.PlayerResultInfo} PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResultInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.PlayerResultInfo();
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
                    message.result_list_detail.push($root.game.ScoreDescDetail.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    message.handCards.push($root.game.CardsGroup.decode(reader, reader.uint32()));
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
         * @memberof game.PlayerResultInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.PlayerResultInfo} PlayerResultInfo
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
         * @memberof game.PlayerResultInfo
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
                    var error = $root.game.ScoreDescDetail.verify(message.result_list_detail[i]);
                    if (error)
                        return "result_list_detail." + error;
                }
            }
            if (message.handCards != null && message.hasOwnProperty("handCards")) {
                if (!Array.isArray(message.handCards))
                    return "handCards: array expected";
                for (var i = 0; i < message.handCards.length; ++i) {
                    var error = $root.game.CardsGroup.verify(message.handCards[i]);
                    if (error)
                        return "handCards." + error;
                }
            }
            return null;
        };

        return PlayerResultInfo;
    })();

    game.ScoreDescDetail = (function() {

        /**
         * Properties of a ScoreDescDetail.
         * @memberof game
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
         * @memberof game
         * @classdesc Represents a ScoreDescDetail.
         * @implements IScoreDescDetail
         * @constructor
         * @param {game.IScoreDescDetail=} [properties] Properties to set
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
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.type = 0;

        /**
         * ScoreDescDetail fannum.
         * @member {number} fannum
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.fannum = 0;

        /**
         * ScoreDescDetail score.
         * @member {number} score
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.score = 0;

        /**
         * ScoreDescDetail obtainsit.
         * @member {number} obtainsit
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.obtainsit = 0;

        /**
         * ScoreDescDetail selfseat.
         * @member {number} selfseat
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.selfseat = 0;

        /**
         * ScoreDescDetail score_change.
         * @member {Array.<number>} score_change
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.score_change = $util.emptyArray;

        /**
         * ScoreDescDetail fan_zhong.
         * @member {Array.<number>} fan_zhong
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.fan_zhong = $util.emptyArray;

        /**
         * ScoreDescDetail fan_num.
         * @member {Array.<number>} fan_num
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.fan_num = $util.emptyArray;

        /**
         * ScoreDescDetail huCardID.
         * @member {number} huCardID
         * @memberof game.ScoreDescDetail
         * @instance
         */
        ScoreDescDetail.prototype.huCardID = 0;

        /**
         * Creates a new ScoreDescDetail instance using the specified properties.
         * @function create
         * @memberof game.ScoreDescDetail
         * @static
         * @param {game.IScoreDescDetail=} [properties] Properties to set
         * @returns {game.ScoreDescDetail} ScoreDescDetail instance
         */
        ScoreDescDetail.create = function create(properties) {
            return new ScoreDescDetail(properties);
        };

        /**
         * Encodes the specified ScoreDescDetail message. Does not implicitly {@link game.ScoreDescDetail.verify|verify} messages.
         * @function encode
         * @memberof game.ScoreDescDetail
         * @static
         * @param {game.IScoreDescDetail} message ScoreDescDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreDescDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.fannum != null && Object.hasOwnProperty.call(message, "fannum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fannum);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            if (message.obtainsit != null && Object.hasOwnProperty.call(message, "obtainsit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.obtainsit);
            if (message.selfseat != null && Object.hasOwnProperty.call(message, "selfseat"))
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
            if (message.huCardID != null && Object.hasOwnProperty.call(message, "huCardID"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.huCardID);
            return writer;
        };

        /**
         * Encodes the specified ScoreDescDetail message, length delimited. Does not implicitly {@link game.ScoreDescDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.ScoreDescDetail
         * @static
         * @param {game.IScoreDescDetail} message ScoreDescDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScoreDescDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer.
         * @function decode
         * @memberof game.ScoreDescDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.ScoreDescDetail} ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScoreDescDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.ScoreDescDetail();
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
         * @memberof game.ScoreDescDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.ScoreDescDetail} ScoreDescDetail
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
         * @memberof game.ScoreDescDetail
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

    game.HuResultAck = (function() {

        /**
         * Properties of a HuResultAck.
         * @memberof game
         * @interface IHuResultAck
         * @property {Array.<game.IHuData>|null} [hulist] HuResultAck hulist
         */

        /**
         * Constructs a new HuResultAck.
         * @memberof game
         * @classdesc Represents a HuResultAck.
         * @implements IHuResultAck
         * @constructor
         * @param {game.IHuResultAck=} [properties] Properties to set
         */
        function HuResultAck(properties) {
            this.hulist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HuResultAck hulist.
         * @member {Array.<game.IHuData>} hulist
         * @memberof game.HuResultAck
         * @instance
         */
        HuResultAck.prototype.hulist = $util.emptyArray;

        /**
         * Creates a new HuResultAck instance using the specified properties.
         * @function create
         * @memberof game.HuResultAck
         * @static
         * @param {game.IHuResultAck=} [properties] Properties to set
         * @returns {game.HuResultAck} HuResultAck instance
         */
        HuResultAck.create = function create(properties) {
            return new HuResultAck(properties);
        };

        /**
         * Encodes the specified HuResultAck message. Does not implicitly {@link game.HuResultAck.verify|verify} messages.
         * @function encode
         * @memberof game.HuResultAck
         * @static
         * @param {game.IHuResultAck} message HuResultAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuResultAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hulist != null && message.hulist.length)
                for (var i = 0; i < message.hulist.length; ++i)
                    $root.game.HuData.encode(message.hulist[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HuResultAck message, length delimited. Does not implicitly {@link game.HuResultAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HuResultAck
         * @static
         * @param {game.IHuResultAck} message HuResultAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuResultAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HuResultAck message from the specified reader or buffer.
         * @function decode
         * @memberof game.HuResultAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HuResultAck} HuResultAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuResultAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HuResultAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.hulist && message.hulist.length))
                        message.hulist = [];
                    message.hulist.push($root.game.HuData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HuResultAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HuResultAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HuResultAck} HuResultAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuResultAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HuResultAck message.
         * @function verify
         * @memberof game.HuResultAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HuResultAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hulist != null && message.hasOwnProperty("hulist")) {
                if (!Array.isArray(message.hulist))
                    return "hulist: array expected";
                for (var i = 0; i < message.hulist.length; ++i) {
                    var error = $root.game.HuData.verify(message.hulist[i]);
                    if (error)
                        return "hulist." + error;
                }
            }
            return null;
        };

        return HuResultAck;
    })();

    game.HuData = (function() {

        /**
         * Properties of a HuData.
         * @memberof game
         * @interface IHuData
         * @property {string} username HuData username
         * @property {number|null} [seat] HuData seat
         * @property {game.IScoreDescDetail|null} [huInfo] HuData huInfo
         */

        /**
         * Constructs a new HuData.
         * @memberof game
         * @classdesc Represents a HuData.
         * @implements IHuData
         * @constructor
         * @param {game.IHuData=} [properties] Properties to set
         */
        function HuData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HuData username.
         * @member {string} username
         * @memberof game.HuData
         * @instance
         */
        HuData.prototype.username = "";

        /**
         * HuData seat.
         * @member {number} seat
         * @memberof game.HuData
         * @instance
         */
        HuData.prototype.seat = 0;

        /**
         * HuData huInfo.
         * @member {game.IScoreDescDetail|null|undefined} huInfo
         * @memberof game.HuData
         * @instance
         */
        HuData.prototype.huInfo = null;

        /**
         * Creates a new HuData instance using the specified properties.
         * @function create
         * @memberof game.HuData
         * @static
         * @param {game.IHuData=} [properties] Properties to set
         * @returns {game.HuData} HuData instance
         */
        HuData.create = function create(properties) {
            return new HuData(properties);
        };

        /**
         * Encodes the specified HuData message. Does not implicitly {@link game.HuData.verify|verify} messages.
         * @function encode
         * @memberof game.HuData
         * @static
         * @param {game.IHuData} message HuData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
            if (message.huInfo != null && Object.hasOwnProperty.call(message, "huInfo"))
                $root.game.ScoreDescDetail.encode(message.huInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HuData message, length delimited. Does not implicitly {@link game.HuData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.HuData
         * @static
         * @param {game.IHuData} message HuData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HuData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HuData message from the specified reader or buffer.
         * @function decode
         * @memberof game.HuData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.HuData} HuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.HuData();
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
                    message.huInfo = $root.game.ScoreDescDetail.decode(reader, reader.uint32());
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
         * Decodes a HuData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.HuData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.HuData} HuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HuData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HuData message.
         * @function verify
         * @memberof game.HuData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HuData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.username))
                return "username: string expected";
            if (message.seat != null && message.hasOwnProperty("seat"))
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            if (message.huInfo != null && message.hasOwnProperty("huInfo")) {
                var error = $root.game.ScoreDescDetail.verify(message.huInfo);
                if (error)
                    return "huInfo." + error;
            }
            return null;
        };

        return HuData;
    })();

    return game;
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
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
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
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
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
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.showName != null && Object.hasOwnProperty.call(message, "showName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.showName);
            if (message.userIp != null && Object.hasOwnProperty.call(message, "userIp"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userIp);
            if (message.enterCode != null && Object.hasOwnProperty.call(message, "enterCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.enterCode);
            if (message.ingame != null && Object.hasOwnProperty.call(message, "ingame"))
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
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
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
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.who != null && Object.hasOwnProperty.call(message, "who"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.who);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createTime);
            if (message.isLoop != null && Object.hasOwnProperty.call(message, "isLoop"))
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

$root.room = (function() {

    /**
     * Namespace room.
     * @exports room
     * @namespace
     */
    var room = {};

    room.VGHeartBeatReq = (function() {

        /**
         * Properties of a VGHeartBeatReq.
         * @memberof room
         * @interface IVGHeartBeatReq
         * @property {number|Long|null} [time] VGHeartBeatReq time
         */

        /**
         * Constructs a new VGHeartBeatReq.
         * @memberof room
         * @classdesc Represents a VGHeartBeatReq.
         * @implements IVGHeartBeatReq
         * @constructor
         * @param {room.IVGHeartBeatReq=} [properties] Properties to set
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
         * @memberof room.VGHeartBeatReq
         * @instance
         */
        VGHeartBeatReq.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new VGHeartBeatReq instance using the specified properties.
         * @function create
         * @memberof room.VGHeartBeatReq
         * @static
         * @param {room.IVGHeartBeatReq=} [properties] Properties to set
         * @returns {room.VGHeartBeatReq} VGHeartBeatReq instance
         */
        VGHeartBeatReq.create = function create(properties) {
            return new VGHeartBeatReq(properties);
        };

        /**
         * Encodes the specified VGHeartBeatReq message. Does not implicitly {@link room.VGHeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGHeartBeatReq
         * @static
         * @param {room.IVGHeartBeatReq} message VGHeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified VGHeartBeatReq message, length delimited. Does not implicitly {@link room.VGHeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGHeartBeatReq
         * @static
         * @param {room.IVGHeartBeatReq} message VGHeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGHeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGHeartBeatReq} VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGHeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGHeartBeatReq();
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
         * @memberof room.VGHeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGHeartBeatReq} VGHeartBeatReq
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
         * @memberof room.VGHeartBeatReq
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

    room.VGHeartBeatAck = (function() {

        /**
         * Properties of a VGHeartBeatAck.
         * @memberof room
         * @interface IVGHeartBeatAck
         * @property {number|Long|null} [time] VGHeartBeatAck time
         */

        /**
         * Constructs a new VGHeartBeatAck.
         * @memberof room
         * @classdesc Represents a VGHeartBeatAck.
         * @implements IVGHeartBeatAck
         * @constructor
         * @param {room.IVGHeartBeatAck=} [properties] Properties to set
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
         * @memberof room.VGHeartBeatAck
         * @instance
         */
        VGHeartBeatAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new VGHeartBeatAck instance using the specified properties.
         * @function create
         * @memberof room.VGHeartBeatAck
         * @static
         * @param {room.IVGHeartBeatAck=} [properties] Properties to set
         * @returns {room.VGHeartBeatAck} VGHeartBeatAck instance
         */
        VGHeartBeatAck.create = function create(properties) {
            return new VGHeartBeatAck(properties);
        };

        /**
         * Encodes the specified VGHeartBeatAck message. Does not implicitly {@link room.VGHeartBeatAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGHeartBeatAck
         * @static
         * @param {room.IVGHeartBeatAck} message VGHeartBeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified VGHeartBeatAck message, length delimited. Does not implicitly {@link room.VGHeartBeatAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGHeartBeatAck
         * @static
         * @param {room.IVGHeartBeatAck} message VGHeartBeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGHeartBeatAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGHeartBeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGHeartBeatAck} VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGHeartBeatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGHeartBeatAck();
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
         * @memberof room.VGHeartBeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGHeartBeatAck} VGHeartBeatAck
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
         * @memberof room.VGHeartBeatAck
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

    room.VGLoginReq = (function() {

        /**
         * Properties of a VGLoginReq.
         * @memberof room
         * @interface IVGLoginReq
         * @property {string|null} [ticket] VGLoginReq ticket
         */

        /**
         * Constructs a new VGLoginReq.
         * @memberof room
         * @classdesc Represents a VGLoginReq.
         * @implements IVGLoginReq
         * @constructor
         * @param {room.IVGLoginReq=} [properties] Properties to set
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
         * @memberof room.VGLoginReq
         * @instance
         */
        VGLoginReq.prototype.ticket = "";

        /**
         * Creates a new VGLoginReq instance using the specified properties.
         * @function create
         * @memberof room.VGLoginReq
         * @static
         * @param {room.IVGLoginReq=} [properties] Properties to set
         * @returns {room.VGLoginReq} VGLoginReq instance
         */
        VGLoginReq.create = function create(properties) {
            return new VGLoginReq(properties);
        };

        /**
         * Encodes the specified VGLoginReq message. Does not implicitly {@link room.VGLoginReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGLoginReq
         * @static
         * @param {room.IVGLoginReq} message VGLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ticket);
            return writer;
        };

        /**
         * Encodes the specified VGLoginReq message, length delimited. Does not implicitly {@link room.VGLoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGLoginReq
         * @static
         * @param {room.IVGLoginReq} message VGLoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGLoginReq} VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGLoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGLoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 6:
                    message.ticket = reader.string();
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
         * @memberof room.VGLoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGLoginReq} VGLoginReq
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
         * @memberof room.VGLoginReq
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
            return null;
        };

        return VGLoginReq;
    })();

    room.VGLoginAck = (function() {

        /**
         * Properties of a VGLoginAck.
         * @memberof room
         * @interface IVGLoginAck
         * @property {number|null} [result] VGLoginAck result
         * @property {room.IVGUserInfo|null} [userInfo] VGLoginAck userInfo
         */

        /**
         * Constructs a new VGLoginAck.
         * @memberof room
         * @classdesc Represents a VGLoginAck.
         * @implements IVGLoginAck
         * @constructor
         * @param {room.IVGLoginAck=} [properties] Properties to set
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
         * @memberof room.VGLoginAck
         * @instance
         */
        VGLoginAck.prototype.result = 0;

        /**
         * VGLoginAck userInfo.
         * @member {room.IVGUserInfo|null|undefined} userInfo
         * @memberof room.VGLoginAck
         * @instance
         */
        VGLoginAck.prototype.userInfo = null;

        /**
         * Creates a new VGLoginAck instance using the specified properties.
         * @function create
         * @memberof room.VGLoginAck
         * @static
         * @param {room.IVGLoginAck=} [properties] Properties to set
         * @returns {room.VGLoginAck} VGLoginAck instance
         */
        VGLoginAck.create = function create(properties) {
            return new VGLoginAck(properties);
        };

        /**
         * Encodes the specified VGLoginAck message. Does not implicitly {@link room.VGLoginAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGLoginAck
         * @static
         * @param {room.IVGLoginAck} message VGLoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.room.VGUserInfo.encode(message.userInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGLoginAck message, length delimited. Does not implicitly {@link room.VGLoginAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGLoginAck
         * @static
         * @param {room.IVGLoginAck} message VGLoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGLoginAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGLoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGLoginAck} VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGLoginAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGLoginAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.userInfo = $root.room.VGUserInfo.decode(reader, reader.uint32());
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
         * @memberof room.VGLoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGLoginAck} VGLoginAck
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
         * @memberof room.VGLoginAck
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
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.room.VGUserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        return VGLoginAck;
    })();

    room.VGRoomListReq = (function() {

        /**
         * Properties of a VGRoomListReq.
         * @memberof room
         * @interface IVGRoomListReq
         * @property {string|null} [userName] VGRoomListReq userName
         */

        /**
         * Constructs a new VGRoomListReq.
         * @memberof room
         * @classdesc Represents a VGRoomListReq.
         * @implements IVGRoomListReq
         * @constructor
         * @param {room.IVGRoomListReq=} [properties] Properties to set
         */
        function VGRoomListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGRoomListReq userName.
         * @member {string} userName
         * @memberof room.VGRoomListReq
         * @instance
         */
        VGRoomListReq.prototype.userName = "";

        /**
         * Creates a new VGRoomListReq instance using the specified properties.
         * @function create
         * @memberof room.VGRoomListReq
         * @static
         * @param {room.IVGRoomListReq=} [properties] Properties to set
         * @returns {room.VGRoomListReq} VGRoomListReq instance
         */
        VGRoomListReq.create = function create(properties) {
            return new VGRoomListReq(properties);
        };

        /**
         * Encodes the specified VGRoomListReq message. Does not implicitly {@link room.VGRoomListReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGRoomListReq
         * @static
         * @param {room.IVGRoomListReq} message VGRoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGRoomListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            return writer;
        };

        /**
         * Encodes the specified VGRoomListReq message, length delimited. Does not implicitly {@link room.VGRoomListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGRoomListReq
         * @static
         * @param {room.IVGRoomListReq} message VGRoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGRoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGRoomListReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGRoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGRoomListReq} VGRoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGRoomListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGRoomListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGRoomListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGRoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGRoomListReq} VGRoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGRoomListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGRoomListReq message.
         * @function verify
         * @memberof room.VGRoomListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGRoomListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            return null;
        };

        return VGRoomListReq;
    })();

    room.VGRoomListAck = (function() {

        /**
         * Properties of a VGRoomListAck.
         * @memberof room
         * @interface IVGRoomListAck
         * @property {number|null} [result] VGRoomListAck result
         * @property {string|null} [userName] VGRoomListAck userName
         * @property {Array.<room.IRoomItem>|null} [roomInfo] VGRoomListAck roomInfo
         */

        /**
         * Constructs a new VGRoomListAck.
         * @memberof room
         * @classdesc Represents a VGRoomListAck.
         * @implements IVGRoomListAck
         * @constructor
         * @param {room.IVGRoomListAck=} [properties] Properties to set
         */
        function VGRoomListAck(properties) {
            this.roomInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGRoomListAck result.
         * @member {number} result
         * @memberof room.VGRoomListAck
         * @instance
         */
        VGRoomListAck.prototype.result = 0;

        /**
         * VGRoomListAck userName.
         * @member {string} userName
         * @memberof room.VGRoomListAck
         * @instance
         */
        VGRoomListAck.prototype.userName = "";

        /**
         * VGRoomListAck roomInfo.
         * @member {Array.<room.IRoomItem>} roomInfo
         * @memberof room.VGRoomListAck
         * @instance
         */
        VGRoomListAck.prototype.roomInfo = $util.emptyArray;

        /**
         * Creates a new VGRoomListAck instance using the specified properties.
         * @function create
         * @memberof room.VGRoomListAck
         * @static
         * @param {room.IVGRoomListAck=} [properties] Properties to set
         * @returns {room.VGRoomListAck} VGRoomListAck instance
         */
        VGRoomListAck.create = function create(properties) {
            return new VGRoomListAck(properties);
        };

        /**
         * Encodes the specified VGRoomListAck message. Does not implicitly {@link room.VGRoomListAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGRoomListAck
         * @static
         * @param {room.IVGRoomListAck} message VGRoomListAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGRoomListAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.roomInfo != null && message.roomInfo.length)
                for (var i = 0; i < message.roomInfo.length; ++i)
                    $root.room.RoomItem.encode(message.roomInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGRoomListAck message, length delimited. Does not implicitly {@link room.VGRoomListAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGRoomListAck
         * @static
         * @param {room.IVGRoomListAck} message VGRoomListAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGRoomListAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGRoomListAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGRoomListAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGRoomListAck} VGRoomListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGRoomListAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGRoomListAck();
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
                    if (!(message.roomInfo && message.roomInfo.length))
                        message.roomInfo = [];
                    message.roomInfo.push($root.room.RoomItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGRoomListAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGRoomListAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGRoomListAck} VGRoomListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGRoomListAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGRoomListAck message.
         * @function verify
         * @memberof room.VGRoomListAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGRoomListAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                if (!Array.isArray(message.roomInfo))
                    return "roomInfo: array expected";
                for (var i = 0; i < message.roomInfo.length; ++i) {
                    var error = $root.room.RoomItem.verify(message.roomInfo[i]);
                    if (error)
                        return "roomInfo." + error;
                }
            }
            return null;
        };

        return VGRoomListAck;
    })();

    room.VGSitDownReq = (function() {

        /**
         * Properties of a VGSitDownReq.
         * @memberof room
         * @interface IVGSitDownReq
         * @property {string|null} [userName] VGSitDownReq userName
         * @property {room.IVGUserPos|null} [userPos] VGSitDownReq userPos
         */

        /**
         * Constructs a new VGSitDownReq.
         * @memberof room
         * @classdesc Represents a VGSitDownReq.
         * @implements IVGSitDownReq
         * @constructor
         * @param {room.IVGSitDownReq=} [properties] Properties to set
         */
        function VGSitDownReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGSitDownReq userName.
         * @member {string} userName
         * @memberof room.VGSitDownReq
         * @instance
         */
        VGSitDownReq.prototype.userName = "";

        /**
         * VGSitDownReq userPos.
         * @member {room.IVGUserPos|null|undefined} userPos
         * @memberof room.VGSitDownReq
         * @instance
         */
        VGSitDownReq.prototype.userPos = null;

        /**
         * Creates a new VGSitDownReq instance using the specified properties.
         * @function create
         * @memberof room.VGSitDownReq
         * @static
         * @param {room.IVGSitDownReq=} [properties] Properties to set
         * @returns {room.VGSitDownReq} VGSitDownReq instance
         */
        VGSitDownReq.create = function create(properties) {
            return new VGSitDownReq(properties);
        };

        /**
         * Encodes the specified VGSitDownReq message. Does not implicitly {@link room.VGSitDownReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGSitDownReq
         * @static
         * @param {room.IVGSitDownReq} message VGSitDownReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitDownReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.userPos != null && Object.hasOwnProperty.call(message, "userPos"))
                $root.room.VGUserPos.encode(message.userPos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGSitDownReq message, length delimited. Does not implicitly {@link room.VGSitDownReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGSitDownReq
         * @static
         * @param {room.IVGSitDownReq} message VGSitDownReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitDownReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGSitDownReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGSitDownReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGSitDownReq} VGSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitDownReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGSitDownReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.userPos = $root.room.VGUserPos.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGSitDownReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGSitDownReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGSitDownReq} VGSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitDownReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGSitDownReq message.
         * @function verify
         * @memberof room.VGSitDownReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGSitDownReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userPos != null && message.hasOwnProperty("userPos")) {
                var error = $root.room.VGUserPos.verify(message.userPos);
                if (error)
                    return "userPos." + error;
            }
            return null;
        };

        return VGSitDownReq;
    })();

    room.VGSitDownAck = (function() {

        /**
         * Properties of a VGSitDownAck.
         * @memberof room
         * @interface IVGSitDownAck
         * @property {number|null} [result] VGSitDownAck result
         * @property {room.IVGUserInfo|null} [userInfo] VGSitDownAck userInfo
         */

        /**
         * Constructs a new VGSitDownAck.
         * @memberof room
         * @classdesc Represents a VGSitDownAck.
         * @implements IVGSitDownAck
         * @constructor
         * @param {room.IVGSitDownAck=} [properties] Properties to set
         */
        function VGSitDownAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGSitDownAck result.
         * @member {number} result
         * @memberof room.VGSitDownAck
         * @instance
         */
        VGSitDownAck.prototype.result = 0;

        /**
         * VGSitDownAck userInfo.
         * @member {room.IVGUserInfo|null|undefined} userInfo
         * @memberof room.VGSitDownAck
         * @instance
         */
        VGSitDownAck.prototype.userInfo = null;

        /**
         * Creates a new VGSitDownAck instance using the specified properties.
         * @function create
         * @memberof room.VGSitDownAck
         * @static
         * @param {room.IVGSitDownAck=} [properties] Properties to set
         * @returns {room.VGSitDownAck} VGSitDownAck instance
         */
        VGSitDownAck.create = function create(properties) {
            return new VGSitDownAck(properties);
        };

        /**
         * Encodes the specified VGSitDownAck message. Does not implicitly {@link room.VGSitDownAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGSitDownAck
         * @static
         * @param {room.IVGSitDownAck} message VGSitDownAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitDownAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.room.VGUserInfo.encode(message.userInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGSitDownAck message, length delimited. Does not implicitly {@link room.VGSitDownAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGSitDownAck
         * @static
         * @param {room.IVGSitDownAck} message VGSitDownAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitDownAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGSitDownAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGSitDownAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGSitDownAck} VGSitDownAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitDownAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGSitDownAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    message.userInfo = $root.room.VGUserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGSitDownAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGSitDownAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGSitDownAck} VGSitDownAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitDownAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGSitDownAck message.
         * @function verify
         * @memberof room.VGSitDownAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGSitDownAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.room.VGUserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        return VGSitDownAck;
    })();

    room.VGSitUpReq = (function() {

        /**
         * Properties of a VGSitUpReq.
         * @memberof room
         * @interface IVGSitUpReq
         * @property {string|null} [userName] VGSitUpReq userName
         * @property {room.IVGUserPos|null} [userPos] VGSitUpReq userPos
         */

        /**
         * Constructs a new VGSitUpReq.
         * @memberof room
         * @classdesc Represents a VGSitUpReq.
         * @implements IVGSitUpReq
         * @constructor
         * @param {room.IVGSitUpReq=} [properties] Properties to set
         */
        function VGSitUpReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGSitUpReq userName.
         * @member {string} userName
         * @memberof room.VGSitUpReq
         * @instance
         */
        VGSitUpReq.prototype.userName = "";

        /**
         * VGSitUpReq userPos.
         * @member {room.IVGUserPos|null|undefined} userPos
         * @memberof room.VGSitUpReq
         * @instance
         */
        VGSitUpReq.prototype.userPos = null;

        /**
         * Creates a new VGSitUpReq instance using the specified properties.
         * @function create
         * @memberof room.VGSitUpReq
         * @static
         * @param {room.IVGSitUpReq=} [properties] Properties to set
         * @returns {room.VGSitUpReq} VGSitUpReq instance
         */
        VGSitUpReq.create = function create(properties) {
            return new VGSitUpReq(properties);
        };

        /**
         * Encodes the specified VGSitUpReq message. Does not implicitly {@link room.VGSitUpReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGSitUpReq
         * @static
         * @param {room.IVGSitUpReq} message VGSitUpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitUpReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.userPos != null && Object.hasOwnProperty.call(message, "userPos"))
                $root.room.VGUserPos.encode(message.userPos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGSitUpReq message, length delimited. Does not implicitly {@link room.VGSitUpReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGSitUpReq
         * @static
         * @param {room.IVGSitUpReq} message VGSitUpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitUpReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGSitUpReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGSitUpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGSitUpReq} VGSitUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitUpReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGSitUpReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.userPos = $root.room.VGUserPos.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGSitUpReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGSitUpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGSitUpReq} VGSitUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitUpReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGSitUpReq message.
         * @function verify
         * @memberof room.VGSitUpReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGSitUpReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userPos != null && message.hasOwnProperty("userPos")) {
                var error = $root.room.VGUserPos.verify(message.userPos);
                if (error)
                    return "userPos." + error;
            }
            return null;
        };

        return VGSitUpReq;
    })();

    room.VGSitUpAck = (function() {

        /**
         * Properties of a VGSitUpAck.
         * @memberof room
         * @interface IVGSitUpAck
         * @property {number|null} [result] VGSitUpAck result
         * @property {string|null} [userName] VGSitUpAck userName
         * @property {room.IVGUserPos|null} [userPos] VGSitUpAck userPos
         * @property {number|null} [userStatus] VGSitUpAck userStatus
         * @property {number|null} [reason] VGSitUpAck reason
         */

        /**
         * Constructs a new VGSitUpAck.
         * @memberof room
         * @classdesc Represents a VGSitUpAck.
         * @implements IVGSitUpAck
         * @constructor
         * @param {room.IVGSitUpAck=} [properties] Properties to set
         */
        function VGSitUpAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGSitUpAck result.
         * @member {number} result
         * @memberof room.VGSitUpAck
         * @instance
         */
        VGSitUpAck.prototype.result = 0;

        /**
         * VGSitUpAck userName.
         * @member {string} userName
         * @memberof room.VGSitUpAck
         * @instance
         */
        VGSitUpAck.prototype.userName = "";

        /**
         * VGSitUpAck userPos.
         * @member {room.IVGUserPos|null|undefined} userPos
         * @memberof room.VGSitUpAck
         * @instance
         */
        VGSitUpAck.prototype.userPos = null;

        /**
         * VGSitUpAck userStatus.
         * @member {number} userStatus
         * @memberof room.VGSitUpAck
         * @instance
         */
        VGSitUpAck.prototype.userStatus = 0;

        /**
         * VGSitUpAck reason.
         * @member {number} reason
         * @memberof room.VGSitUpAck
         * @instance
         */
        VGSitUpAck.prototype.reason = 0;

        /**
         * Creates a new VGSitUpAck instance using the specified properties.
         * @function create
         * @memberof room.VGSitUpAck
         * @static
         * @param {room.IVGSitUpAck=} [properties] Properties to set
         * @returns {room.VGSitUpAck} VGSitUpAck instance
         */
        VGSitUpAck.create = function create(properties) {
            return new VGSitUpAck(properties);
        };

        /**
         * Encodes the specified VGSitUpAck message. Does not implicitly {@link room.VGSitUpAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGSitUpAck
         * @static
         * @param {room.IVGSitUpAck} message VGSitUpAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitUpAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.result);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.userPos != null && Object.hasOwnProperty.call(message, "userPos"))
                $root.room.VGUserPos.encode(message.userPos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.userStatus != null && Object.hasOwnProperty.call(message, "userStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.userStatus);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.reason);
            return writer;
        };

        /**
         * Encodes the specified VGSitUpAck message, length delimited. Does not implicitly {@link room.VGSitUpAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGSitUpAck
         * @static
         * @param {room.IVGSitUpAck} message VGSitUpAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSitUpAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGSitUpAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGSitUpAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGSitUpAck} VGSitUpAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitUpAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGSitUpAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.uint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.userPos = $root.room.VGUserPos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.userStatus = reader.uint32();
                    break;
                case 5:
                    message.reason = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGSitUpAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGSitUpAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGSitUpAck} VGSitUpAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSitUpAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGSitUpAck message.
         * @function verify
         * @memberof room.VGSitUpAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGSitUpAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userPos != null && message.hasOwnProperty("userPos")) {
                var error = $root.room.VGUserPos.verify(message.userPos);
                if (error)
                    return "userPos." + error;
            }
            if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                if (!$util.isInteger(message.userStatus))
                    return "userStatus: integer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason))
                    return "reason: integer expected";
            return null;
        };

        return VGSitUpAck;
    })();

    room.ReqResetUserState = (function() {

        /**
         * Properties of a ReqResetUserState.
         * @memberof room
         * @interface IReqResetUserState
         * @property {string|null} [userName] ReqResetUserState userName
         */

        /**
         * Constructs a new ReqResetUserState.
         * @memberof room
         * @classdesc Represents a ReqResetUserState.
         * @implements IReqResetUserState
         * @constructor
         * @param {room.IReqResetUserState=} [properties] Properties to set
         */
        function ReqResetUserState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqResetUserState userName.
         * @member {string} userName
         * @memberof room.ReqResetUserState
         * @instance
         */
        ReqResetUserState.prototype.userName = "";

        /**
         * Creates a new ReqResetUserState instance using the specified properties.
         * @function create
         * @memberof room.ReqResetUserState
         * @static
         * @param {room.IReqResetUserState=} [properties] Properties to set
         * @returns {room.ReqResetUserState} ReqResetUserState instance
         */
        ReqResetUserState.create = function create(properties) {
            return new ReqResetUserState(properties);
        };

        /**
         * Encodes the specified ReqResetUserState message. Does not implicitly {@link room.ReqResetUserState.verify|verify} messages.
         * @function encode
         * @memberof room.ReqResetUserState
         * @static
         * @param {room.IReqResetUserState} message ReqResetUserState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqResetUserState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            return writer;
        };

        /**
         * Encodes the specified ReqResetUserState message, length delimited. Does not implicitly {@link room.ReqResetUserState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.ReqResetUserState
         * @static
         * @param {room.IReqResetUserState} message ReqResetUserState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqResetUserState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqResetUserState message from the specified reader or buffer.
         * @function decode
         * @memberof room.ReqResetUserState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.ReqResetUserState} ReqResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqResetUserState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.ReqResetUserState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqResetUserState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.ReqResetUserState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.ReqResetUserState} ReqResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqResetUserState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqResetUserState message.
         * @function verify
         * @memberof room.ReqResetUserState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqResetUserState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            return null;
        };

        return ReqResetUserState;
    })();

    room.AckResetUserState = (function() {

        /**
         * Properties of an AckResetUserState.
         * @memberof room
         * @interface IAckResetUserState
         * @property {number} result AckResetUserState result
         * @property {string|null} [userName] AckResetUserState userName
         * @property {number|null} [state] AckResetUserState state
         */

        /**
         * Constructs a new AckResetUserState.
         * @memberof room
         * @classdesc Represents an AckResetUserState.
         * @implements IAckResetUserState
         * @constructor
         * @param {room.IAckResetUserState=} [properties] Properties to set
         */
        function AckResetUserState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckResetUserState result.
         * @member {number} result
         * @memberof room.AckResetUserState
         * @instance
         */
        AckResetUserState.prototype.result = 0;

        /**
         * AckResetUserState userName.
         * @member {string} userName
         * @memberof room.AckResetUserState
         * @instance
         */
        AckResetUserState.prototype.userName = "";

        /**
         * AckResetUserState state.
         * @member {number} state
         * @memberof room.AckResetUserState
         * @instance
         */
        AckResetUserState.prototype.state = 0;

        /**
         * Creates a new AckResetUserState instance using the specified properties.
         * @function create
         * @memberof room.AckResetUserState
         * @static
         * @param {room.IAckResetUserState=} [properties] Properties to set
         * @returns {room.AckResetUserState} AckResetUserState instance
         */
        AckResetUserState.create = function create(properties) {
            return new AckResetUserState(properties);
        };

        /**
         * Encodes the specified AckResetUserState message. Does not implicitly {@link room.AckResetUserState.verify|verify} messages.
         * @function encode
         * @memberof room.AckResetUserState
         * @static
         * @param {room.IAckResetUserState} message AckResetUserState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckResetUserState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified AckResetUserState message, length delimited. Does not implicitly {@link room.AckResetUserState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.AckResetUserState
         * @static
         * @param {room.IAckResetUserState} message AckResetUserState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckResetUserState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckResetUserState message from the specified reader or buffer.
         * @function decode
         * @memberof room.AckResetUserState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.AckResetUserState} AckResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckResetUserState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.AckResetUserState();
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
                    message.state = reader.int32();
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
         * Decodes an AckResetUserState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.AckResetUserState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.AckResetUserState} AckResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckResetUserState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckResetUserState message.
         * @function verify
         * @memberof room.AckResetUserState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckResetUserState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.result))
                return "result: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        return AckResetUserState;
    })();

    room.MJ_TingTileInfo = (function() {

        /**
         * Properties of a MJ_TingTileInfo.
         * @memberof room
         * @interface IMJ_TingTileInfo
         * @property {number|null} [callTile] MJ_TingTileInfo callTile
         * @property {number|null} [callTileCount] MJ_TingTileInfo callTileCount
         * @property {number|null} [fans] MJ_TingTileInfo fans
         */

        /**
         * Constructs a new MJ_TingTileInfo.
         * @memberof room
         * @classdesc Represents a MJ_TingTileInfo.
         * @implements IMJ_TingTileInfo
         * @constructor
         * @param {room.IMJ_TingTileInfo=} [properties] Properties to set
         */
        function MJ_TingTileInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MJ_TingTileInfo callTile.
         * @member {number} callTile
         * @memberof room.MJ_TingTileInfo
         * @instance
         */
        MJ_TingTileInfo.prototype.callTile = 0;

        /**
         * MJ_TingTileInfo callTileCount.
         * @member {number} callTileCount
         * @memberof room.MJ_TingTileInfo
         * @instance
         */
        MJ_TingTileInfo.prototype.callTileCount = 0;

        /**
         * MJ_TingTileInfo fans.
         * @member {number} fans
         * @memberof room.MJ_TingTileInfo
         * @instance
         */
        MJ_TingTileInfo.prototype.fans = 0;

        /**
         * Creates a new MJ_TingTileInfo instance using the specified properties.
         * @function create
         * @memberof room.MJ_TingTileInfo
         * @static
         * @param {room.IMJ_TingTileInfo=} [properties] Properties to set
         * @returns {room.MJ_TingTileInfo} MJ_TingTileInfo instance
         */
        MJ_TingTileInfo.create = function create(properties) {
            return new MJ_TingTileInfo(properties);
        };

        /**
         * Encodes the specified MJ_TingTileInfo message. Does not implicitly {@link room.MJ_TingTileInfo.verify|verify} messages.
         * @function encode
         * @memberof room.MJ_TingTileInfo
         * @static
         * @param {room.IMJ_TingTileInfo} message MJ_TingTileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_TingTileInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callTile != null && Object.hasOwnProperty.call(message, "callTile"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.callTile);
            if (message.callTileCount != null && Object.hasOwnProperty.call(message, "callTileCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.callTileCount);
            if (message.fans != null && Object.hasOwnProperty.call(message, "fans"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fans);
            return writer;
        };

        /**
         * Encodes the specified MJ_TingTileInfo message, length delimited. Does not implicitly {@link room.MJ_TingTileInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MJ_TingTileInfo
         * @static
         * @param {room.IMJ_TingTileInfo} message MJ_TingTileInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_TingTileInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MJ_TingTileInfo message from the specified reader or buffer.
         * @function decode
         * @memberof room.MJ_TingTileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MJ_TingTileInfo} MJ_TingTileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_TingTileInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MJ_TingTileInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callTile = reader.int32();
                    break;
                case 2:
                    message.callTileCount = reader.int32();
                    break;
                case 3:
                    message.fans = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MJ_TingTileInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MJ_TingTileInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MJ_TingTileInfo} MJ_TingTileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_TingTileInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MJ_TingTileInfo message.
         * @function verify
         * @memberof room.MJ_TingTileInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MJ_TingTileInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callTile != null && message.hasOwnProperty("callTile"))
                if (!$util.isInteger(message.callTile))
                    return "callTile: integer expected";
            if (message.callTileCount != null && message.hasOwnProperty("callTileCount"))
                if (!$util.isInteger(message.callTileCount))
                    return "callTileCount: integer expected";
            if (message.fans != null && message.hasOwnProperty("fans"))
                if (!$util.isInteger(message.fans))
                    return "fans: integer expected";
            return null;
        };

        return MJ_TingTileInfo;
    })();

    room.MJ_Operation = (function() {

        /**
         * Properties of a MJ_Operation.
         * @memberof room
         * @interface IMJ_Operation
         * @property {number|null} [operationType] MJ_Operation operationType
         * @property {Array.<number>|null} [Tiles] MJ_Operation Tiles
         * @property {number|null} [ObtainTile] MJ_Operation ObtainTile
         * @property {number|null} [ObtainSeat] MJ_Operation ObtainSeat
         * @property {Array.<room.IMJ_TingTileInfo>|null} [tingTileInfo] MJ_Operation tingTileInfo
         * @property {number|null} [maxFan] MJ_Operation maxFan
         * @property {Array.<room.IMJ_FanInfo>|null} [fans] MJ_Operation fans
         * @property {number|null} [operationID] MJ_Operation operationID
         */

        /**
         * Constructs a new MJ_Operation.
         * @memberof room
         * @classdesc Represents a MJ_Operation.
         * @implements IMJ_Operation
         * @constructor
         * @param {room.IMJ_Operation=} [properties] Properties to set
         */
        function MJ_Operation(properties) {
            this.Tiles = [];
            this.tingTileInfo = [];
            this.fans = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MJ_Operation operationType.
         * @member {number} operationType
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.operationType = 0;

        /**
         * MJ_Operation Tiles.
         * @member {Array.<number>} Tiles
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.Tiles = $util.emptyArray;

        /**
         * MJ_Operation ObtainTile.
         * @member {number} ObtainTile
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.ObtainTile = 0;

        /**
         * MJ_Operation ObtainSeat.
         * @member {number} ObtainSeat
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.ObtainSeat = 0;

        /**
         * MJ_Operation tingTileInfo.
         * @member {Array.<room.IMJ_TingTileInfo>} tingTileInfo
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.tingTileInfo = $util.emptyArray;

        /**
         * MJ_Operation maxFan.
         * @member {number} maxFan
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.maxFan = 0;

        /**
         * MJ_Operation fans.
         * @member {Array.<room.IMJ_FanInfo>} fans
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.fans = $util.emptyArray;

        /**
         * MJ_Operation operationID.
         * @member {number} operationID
         * @memberof room.MJ_Operation
         * @instance
         */
        MJ_Operation.prototype.operationID = 0;

        /**
         * Creates a new MJ_Operation instance using the specified properties.
         * @function create
         * @memberof room.MJ_Operation
         * @static
         * @param {room.IMJ_Operation=} [properties] Properties to set
         * @returns {room.MJ_Operation} MJ_Operation instance
         */
        MJ_Operation.create = function create(properties) {
            return new MJ_Operation(properties);
        };

        /**
         * Encodes the specified MJ_Operation message. Does not implicitly {@link room.MJ_Operation.verify|verify} messages.
         * @function encode
         * @memberof room.MJ_Operation
         * @static
         * @param {room.IMJ_Operation} message MJ_Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operationType != null && Object.hasOwnProperty.call(message, "operationType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operationType);
            if (message.Tiles != null && message.Tiles.length)
                for (var i = 0; i < message.Tiles.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Tiles[i]);
            if (message.ObtainTile != null && Object.hasOwnProperty.call(message, "ObtainTile"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ObtainTile);
            if (message.ObtainSeat != null && Object.hasOwnProperty.call(message, "ObtainSeat"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ObtainSeat);
            if (message.tingTileInfo != null && message.tingTileInfo.length)
                for (var i = 0; i < message.tingTileInfo.length; ++i)
                    $root.room.MJ_TingTileInfo.encode(message.tingTileInfo[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.maxFan != null && Object.hasOwnProperty.call(message, "maxFan"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxFan);
            if (message.fans != null && message.fans.length)
                for (var i = 0; i < message.fans.length; ++i)
                    $root.room.MJ_FanInfo.encode(message.fans[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.operationID != null && Object.hasOwnProperty.call(message, "operationID"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.operationID);
            return writer;
        };

        /**
         * Encodes the specified MJ_Operation message, length delimited. Does not implicitly {@link room.MJ_Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MJ_Operation
         * @static
         * @param {room.IMJ_Operation} message MJ_Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MJ_Operation message from the specified reader or buffer.
         * @function decode
         * @memberof room.MJ_Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MJ_Operation} MJ_Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MJ_Operation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operationType = reader.int32();
                    break;
                case 2:
                    if (!(message.Tiles && message.Tiles.length))
                        message.Tiles = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Tiles.push(reader.int32());
                    } else
                        message.Tiles.push(reader.int32());
                    break;
                case 3:
                    message.ObtainTile = reader.int32();
                    break;
                case 4:
                    message.ObtainSeat = reader.int32();
                    break;
                case 5:
                    if (!(message.tingTileInfo && message.tingTileInfo.length))
                        message.tingTileInfo = [];
                    message.tingTileInfo.push($root.room.MJ_TingTileInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.maxFan = reader.int32();
                    break;
                case 7:
                    if (!(message.fans && message.fans.length))
                        message.fans = [];
                    message.fans.push($root.room.MJ_FanInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.operationID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MJ_Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MJ_Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MJ_Operation} MJ_Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MJ_Operation message.
         * @function verify
         * @memberof room.MJ_Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MJ_Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operationType != null && message.hasOwnProperty("operationType"))
                if (!$util.isInteger(message.operationType))
                    return "operationType: integer expected";
            if (message.Tiles != null && message.hasOwnProperty("Tiles")) {
                if (!Array.isArray(message.Tiles))
                    return "Tiles: array expected";
                for (var i = 0; i < message.Tiles.length; ++i)
                    if (!$util.isInteger(message.Tiles[i]))
                        return "Tiles: integer[] expected";
            }
            if (message.ObtainTile != null && message.hasOwnProperty("ObtainTile"))
                if (!$util.isInteger(message.ObtainTile))
                    return "ObtainTile: integer expected";
            if (message.ObtainSeat != null && message.hasOwnProperty("ObtainSeat"))
                if (!$util.isInteger(message.ObtainSeat))
                    return "ObtainSeat: integer expected";
            if (message.tingTileInfo != null && message.hasOwnProperty("tingTileInfo")) {
                if (!Array.isArray(message.tingTileInfo))
                    return "tingTileInfo: array expected";
                for (var i = 0; i < message.tingTileInfo.length; ++i) {
                    var error = $root.room.MJ_TingTileInfo.verify(message.tingTileInfo[i]);
                    if (error)
                        return "tingTileInfo." + error;
                }
            }
            if (message.maxFan != null && message.hasOwnProperty("maxFan"))
                if (!$util.isInteger(message.maxFan))
                    return "maxFan: integer expected";
            if (message.fans != null && message.hasOwnProperty("fans")) {
                if (!Array.isArray(message.fans))
                    return "fans: array expected";
                for (var i = 0; i < message.fans.length; ++i) {
                    var error = $root.room.MJ_FanInfo.verify(message.fans[i]);
                    if (error)
                        return "fans." + error;
                }
            }
            if (message.operationID != null && message.hasOwnProperty("operationID"))
                if (!$util.isInteger(message.operationID))
                    return "operationID: integer expected";
            return null;
        };

        return MJ_Operation;
    })();

    room.MJ_TileSet = (function() {

        /**
         * Properties of a MJ_TileSet.
         * @memberof room
         * @interface IMJ_TileSet
         * @property {number} Type MJ_TileSet Type
         * @property {Array.<number>|null} [Tiles] MJ_TileSet Tiles
         * @property {number|null} [ObtainTile] MJ_TileSet ObtainTile
         * @property {number|null} [ObtainSeat] MJ_TileSet ObtainSeat
         */

        /**
         * Constructs a new MJ_TileSet.
         * @memberof room
         * @classdesc Represents a MJ_TileSet.
         * @implements IMJ_TileSet
         * @constructor
         * @param {room.IMJ_TileSet=} [properties] Properties to set
         */
        function MJ_TileSet(properties) {
            this.Tiles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MJ_TileSet Type.
         * @member {number} Type
         * @memberof room.MJ_TileSet
         * @instance
         */
        MJ_TileSet.prototype.Type = 0;

        /**
         * MJ_TileSet Tiles.
         * @member {Array.<number>} Tiles
         * @memberof room.MJ_TileSet
         * @instance
         */
        MJ_TileSet.prototype.Tiles = $util.emptyArray;

        /**
         * MJ_TileSet ObtainTile.
         * @member {number} ObtainTile
         * @memberof room.MJ_TileSet
         * @instance
         */
        MJ_TileSet.prototype.ObtainTile = 0;

        /**
         * MJ_TileSet ObtainSeat.
         * @member {number} ObtainSeat
         * @memberof room.MJ_TileSet
         * @instance
         */
        MJ_TileSet.prototype.ObtainSeat = 0;

        /**
         * Creates a new MJ_TileSet instance using the specified properties.
         * @function create
         * @memberof room.MJ_TileSet
         * @static
         * @param {room.IMJ_TileSet=} [properties] Properties to set
         * @returns {room.MJ_TileSet} MJ_TileSet instance
         */
        MJ_TileSet.create = function create(properties) {
            return new MJ_TileSet(properties);
        };

        /**
         * Encodes the specified MJ_TileSet message. Does not implicitly {@link room.MJ_TileSet.verify|verify} messages.
         * @function encode
         * @memberof room.MJ_TileSet
         * @static
         * @param {room.IMJ_TileSet} message MJ_TileSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_TileSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Type);
            if (message.Tiles != null && message.Tiles.length)
                for (var i = 0; i < message.Tiles.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Tiles[i]);
            if (message.ObtainTile != null && Object.hasOwnProperty.call(message, "ObtainTile"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ObtainTile);
            if (message.ObtainSeat != null && Object.hasOwnProperty.call(message, "ObtainSeat"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ObtainSeat);
            return writer;
        };

        /**
         * Encodes the specified MJ_TileSet message, length delimited. Does not implicitly {@link room.MJ_TileSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MJ_TileSet
         * @static
         * @param {room.IMJ_TileSet} message MJ_TileSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_TileSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MJ_TileSet message from the specified reader or buffer.
         * @function decode
         * @memberof room.MJ_TileSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MJ_TileSet} MJ_TileSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_TileSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MJ_TileSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.Type = reader.int32();
                    break;
                case 3:
                    if (!(message.Tiles && message.Tiles.length))
                        message.Tiles = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Tiles.push(reader.int32());
                    } else
                        message.Tiles.push(reader.int32());
                    break;
                case 4:
                    message.ObtainTile = reader.int32();
                    break;
                case 5:
                    message.ObtainSeat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            return message;
        };

        /**
         * Decodes a MJ_TileSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MJ_TileSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MJ_TileSet} MJ_TileSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_TileSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MJ_TileSet message.
         * @function verify
         * @memberof room.MJ_TileSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MJ_TileSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (message.Tiles != null && message.hasOwnProperty("Tiles")) {
                if (!Array.isArray(message.Tiles))
                    return "Tiles: array expected";
                for (var i = 0; i < message.Tiles.length; ++i)
                    if (!$util.isInteger(message.Tiles[i]))
                        return "Tiles: integer[] expected";
            }
            if (message.ObtainTile != null && message.hasOwnProperty("ObtainTile"))
                if (!$util.isInteger(message.ObtainTile))
                    return "ObtainTile: integer expected";
            if (message.ObtainSeat != null && message.hasOwnProperty("ObtainSeat"))
                if (!$util.isInteger(message.ObtainSeat))
                    return "ObtainSeat: integer expected";
            return null;
        };

        return MJ_TileSet;
    })();

    room.MJ_FanInfo = (function() {

        /**
         * Properties of a MJ_FanInfo.
         * @memberof room
         * @interface IMJ_FanInfo
         * @property {number|null} [type] MJ_FanInfo type
         * @property {number|null} [value] MJ_FanInfo value
         */

        /**
         * Constructs a new MJ_FanInfo.
         * @memberof room
         * @classdesc Represents a MJ_FanInfo.
         * @implements IMJ_FanInfo
         * @constructor
         * @param {room.IMJ_FanInfo=} [properties] Properties to set
         */
        function MJ_FanInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MJ_FanInfo type.
         * @member {number} type
         * @memberof room.MJ_FanInfo
         * @instance
         */
        MJ_FanInfo.prototype.type = 0;

        /**
         * MJ_FanInfo value.
         * @member {number} value
         * @memberof room.MJ_FanInfo
         * @instance
         */
        MJ_FanInfo.prototype.value = 0;

        /**
         * Creates a new MJ_FanInfo instance using the specified properties.
         * @function create
         * @memberof room.MJ_FanInfo
         * @static
         * @param {room.IMJ_FanInfo=} [properties] Properties to set
         * @returns {room.MJ_FanInfo} MJ_FanInfo instance
         */
        MJ_FanInfo.create = function create(properties) {
            return new MJ_FanInfo(properties);
        };

        /**
         * Encodes the specified MJ_FanInfo message. Does not implicitly {@link room.MJ_FanInfo.verify|verify} messages.
         * @function encode
         * @memberof room.MJ_FanInfo
         * @static
         * @param {room.IMJ_FanInfo} message MJ_FanInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_FanInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified MJ_FanInfo message, length delimited. Does not implicitly {@link room.MJ_FanInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MJ_FanInfo
         * @static
         * @param {room.IMJ_FanInfo} message MJ_FanInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_FanInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MJ_FanInfo message from the specified reader or buffer.
         * @function decode
         * @memberof room.MJ_FanInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MJ_FanInfo} MJ_FanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_FanInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MJ_FanInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MJ_FanInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MJ_FanInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MJ_FanInfo} MJ_FanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_FanInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MJ_FanInfo message.
         * @function verify
         * @memberof room.MJ_FanInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MJ_FanInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        return MJ_FanInfo;
    })();

    room.MJ_SettlementInfo = (function() {

        /**
         * Properties of a MJ_SettlementInfo.
         * @memberof room
         * @interface IMJ_SettlementInfo
         * @property {number|null} [type] MJ_SettlementInfo type
         * @property {Array.<number>|null} [coinList] MJ_SettlementInfo coinList
         */

        /**
         * Constructs a new MJ_SettlementInfo.
         * @memberof room
         * @classdesc Represents a MJ_SettlementInfo.
         * @implements IMJ_SettlementInfo
         * @constructor
         * @param {room.IMJ_SettlementInfo=} [properties] Properties to set
         */
        function MJ_SettlementInfo(properties) {
            this.coinList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MJ_SettlementInfo type.
         * @member {number} type
         * @memberof room.MJ_SettlementInfo
         * @instance
         */
        MJ_SettlementInfo.prototype.type = 0;

        /**
         * MJ_SettlementInfo coinList.
         * @member {Array.<number>} coinList
         * @memberof room.MJ_SettlementInfo
         * @instance
         */
        MJ_SettlementInfo.prototype.coinList = $util.emptyArray;

        /**
         * Creates a new MJ_SettlementInfo instance using the specified properties.
         * @function create
         * @memberof room.MJ_SettlementInfo
         * @static
         * @param {room.IMJ_SettlementInfo=} [properties] Properties to set
         * @returns {room.MJ_SettlementInfo} MJ_SettlementInfo instance
         */
        MJ_SettlementInfo.create = function create(properties) {
            return new MJ_SettlementInfo(properties);
        };

        /**
         * Encodes the specified MJ_SettlementInfo message. Does not implicitly {@link room.MJ_SettlementInfo.verify|verify} messages.
         * @function encode
         * @memberof room.MJ_SettlementInfo
         * @static
         * @param {room.IMJ_SettlementInfo} message MJ_SettlementInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_SettlementInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.coinList != null && message.coinList.length)
                for (var i = 0; i < message.coinList.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coinList[i]);
            return writer;
        };

        /**
         * Encodes the specified MJ_SettlementInfo message, length delimited. Does not implicitly {@link room.MJ_SettlementInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MJ_SettlementInfo
         * @static
         * @param {room.IMJ_SettlementInfo} message MJ_SettlementInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MJ_SettlementInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MJ_SettlementInfo message from the specified reader or buffer.
         * @function decode
         * @memberof room.MJ_SettlementInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MJ_SettlementInfo} MJ_SettlementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_SettlementInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MJ_SettlementInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.coinList && message.coinList.length))
                        message.coinList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.coinList.push(reader.int32());
                    } else
                        message.coinList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MJ_SettlementInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MJ_SettlementInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MJ_SettlementInfo} MJ_SettlementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MJ_SettlementInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MJ_SettlementInfo message.
         * @function verify
         * @memberof room.MJ_SettlementInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MJ_SettlementInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.coinList != null && message.hasOwnProperty("coinList")) {
                if (!Array.isArray(message.coinList))
                    return "coinList: array expected";
                for (var i = 0; i < message.coinList.length; ++i)
                    if (!$util.isInteger(message.coinList[i]))
                        return "coinList: integer[] expected";
            }
            return null;
        };

        return MJ_SettlementInfo;
    })();

    /**
     * MJ_PLAYERROLE enum.
     * @name room.MJ_PLAYERROLE
     * @enum {number}
     * @property {number} MJ_PR_BANKER=0 MJ_PR_BANKER value
     * @property {number} MJ_PR_PLAYER=1 MJ_PR_PLAYER value
     */
    room.MJ_PLAYERROLE = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MJ_PR_BANKER"] = 0;
        values[valuesById[1] = "MJ_PR_PLAYER"] = 1;
        return values;
    })();

    /**
     * MJ_GAMESTATUS enum.
     * @name room.MJ_GAMESTATUS
     * @enum {number}
     * @property {number} MJ_GS_DF=0 MJ_GS_DF value
     * @property {number} MJ_GS_ANIM_KJ=1 MJ_GS_ANIM_KJ value
     * @property {number} MJ_GS_DP=2 MJ_GS_DP value
     * @property {number} MJ_GS_KJ=3 MJ_GS_KJ value
     * @property {number} MJ_GS_FP=4 MJ_GS_FP value
     * @property {number} MJ_GS_XP=5 MJ_GS_XP value
     * @property {number} MJ_GS_JS=6 MJ_GS_JS value
     */
    room.MJ_GAMESTATUS = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MJ_GS_DF"] = 0;
        values[valuesById[1] = "MJ_GS_ANIM_KJ"] = 1;
        values[valuesById[2] = "MJ_GS_DP"] = 2;
        values[valuesById[3] = "MJ_GS_KJ"] = 3;
        values[valuesById[4] = "MJ_GS_FP"] = 4;
        values[valuesById[5] = "MJ_GS_XP"] = 5;
        values[valuesById[6] = "MJ_GS_JS"] = 6;
        return values;
    })();

    /**
     * USERSTATUS enum.
     * @name room.USERSTATUS
     * @enum {number}
     * @property {number} US_DEFAULT=0 US_DEFAULT value
     * @property {number} US_SITUP=1 US_SITUP value
     * @property {number} US_SITDOWN=2 US_SITDOWN value
     * @property {number} US_GAMEING=3 US_GAMEING value
     */
    room.USERSTATUS = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "US_DEFAULT"] = 0;
        values[valuesById[1] = "US_SITUP"] = 1;
        values[valuesById[2] = "US_SITDOWN"] = 2;
        values[valuesById[3] = "US_GAMEING"] = 3;
        return values;
    })();

    room.RoomItem = (function() {

        /**
         * Properties of a RoomItem.
         * @memberof room
         * @interface IRoomItem
         * @property {number|null} [roomID] RoomItem roomID
         * @property {string|null} [name] RoomItem name
         * @property {number|null} [entry_min] RoomItem entry_min
         * @property {number|null} [entry_max] RoomItem entry_max
         * @property {number|null} [basic_bet] RoomItem basic_bet
         * @property {number|null} [kickout_min] RoomItem kickout_min
         * @property {number|null} [kickout_max] RoomItem kickout_max
         * @property {number|null} [service_fee] RoomItem service_fee
         * @property {number|null} [max_fan] RoomItem max_fan
         * @property {number|null} [state] RoomItem state
         */

        /**
         * Constructs a new RoomItem.
         * @memberof room
         * @classdesc Represents a RoomItem.
         * @implements IRoomItem
         * @constructor
         * @param {room.IRoomItem=} [properties] Properties to set
         */
        function RoomItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomItem roomID.
         * @member {number} roomID
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.roomID = 0;

        /**
         * RoomItem name.
         * @member {string} name
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.name = "";

        /**
         * RoomItem entry_min.
         * @member {number} entry_min
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.entry_min = 0;

        /**
         * RoomItem entry_max.
         * @member {number} entry_max
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.entry_max = 0;

        /**
         * RoomItem basic_bet.
         * @member {number} basic_bet
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.basic_bet = 0;

        /**
         * RoomItem kickout_min.
         * @member {number} kickout_min
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.kickout_min = 0;

        /**
         * RoomItem kickout_max.
         * @member {number} kickout_max
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.kickout_max = 0;

        /**
         * RoomItem service_fee.
         * @member {number} service_fee
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.service_fee = 0;

        /**
         * RoomItem max_fan.
         * @member {number} max_fan
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.max_fan = 0;

        /**
         * RoomItem state.
         * @member {number} state
         * @memberof room.RoomItem
         * @instance
         */
        RoomItem.prototype.state = 0;

        /**
         * Creates a new RoomItem instance using the specified properties.
         * @function create
         * @memberof room.RoomItem
         * @static
         * @param {room.IRoomItem=} [properties] Properties to set
         * @returns {room.RoomItem} RoomItem instance
         */
        RoomItem.create = function create(properties) {
            return new RoomItem(properties);
        };

        /**
         * Encodes the specified RoomItem message. Does not implicitly {@link room.RoomItem.verify|verify} messages.
         * @function encode
         * @memberof room.RoomItem
         * @static
         * @param {room.IRoomItem} message RoomItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.roomID);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.entry_min != null && Object.hasOwnProperty.call(message, "entry_min"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.entry_min);
            if (message.entry_max != null && Object.hasOwnProperty.call(message, "entry_max"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.entry_max);
            if (message.basic_bet != null && Object.hasOwnProperty.call(message, "basic_bet"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.basic_bet);
            if (message.kickout_min != null && Object.hasOwnProperty.call(message, "kickout_min"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.kickout_min);
            if (message.kickout_max != null && Object.hasOwnProperty.call(message, "kickout_max"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.kickout_max);
            if (message.service_fee != null && Object.hasOwnProperty.call(message, "service_fee"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.service_fee);
            if (message.max_fan != null && Object.hasOwnProperty.call(message, "max_fan"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.max_fan);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified RoomItem message, length delimited. Does not implicitly {@link room.RoomItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.RoomItem
         * @static
         * @param {room.IRoomItem} message RoomItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomItem message from the specified reader or buffer.
         * @function decode
         * @memberof room.RoomItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.RoomItem} RoomItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.RoomItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 4:
                    message.entry_min = reader.int32();
                    break;
                case 5:
                    message.entry_max = reader.int32();
                    break;
                case 6:
                    message.basic_bet = reader.int32();
                    break;
                case 7:
                    message.kickout_min = reader.int32();
                    break;
                case 8:
                    message.kickout_max = reader.int32();
                    break;
                case 9:
                    message.service_fee = reader.int32();
                    break;
                case 10:
                    message.max_fan = reader.int32();
                    break;
                case 11:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.RoomItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.RoomItem} RoomItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomItem message.
         * @function verify
         * @memberof room.RoomItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.entry_min != null && message.hasOwnProperty("entry_min"))
                if (!$util.isInteger(message.entry_min))
                    return "entry_min: integer expected";
            if (message.entry_max != null && message.hasOwnProperty("entry_max"))
                if (!$util.isInteger(message.entry_max))
                    return "entry_max: integer expected";
            if (message.basic_bet != null && message.hasOwnProperty("basic_bet"))
                if (!$util.isInteger(message.basic_bet))
                    return "basic_bet: integer expected";
            if (message.kickout_min != null && message.hasOwnProperty("kickout_min"))
                if (!$util.isInteger(message.kickout_min))
                    return "kickout_min: integer expected";
            if (message.kickout_max != null && message.hasOwnProperty("kickout_max"))
                if (!$util.isInteger(message.kickout_max))
                    return "kickout_max: integer expected";
            if (message.service_fee != null && message.hasOwnProperty("service_fee"))
                if (!$util.isInteger(message.service_fee))
                    return "service_fee: integer expected";
            if (message.max_fan != null && message.hasOwnProperty("max_fan"))
                if (!$util.isInteger(message.max_fan))
                    return "max_fan: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        return RoomItem;
    })();

    room.VGUserInfo = (function() {

        /**
         * Properties of a VGUserInfo.
         * @memberof room
         * @interface IVGUserInfo
         * @property {string|null} [userName] VGUserInfo userName
         * @property {string|null} [showName] VGUserInfo showName
         * @property {room.IVGUserPos|null} [userPos] VGUserInfo userPos
         * @property {room.USERSTATUS|null} [status] VGUserInfo status
         * @property {number|Long|null} [gameCoin] VGUserInfo gameCoin
         * @property {number|null} [isManaged] VGUserInfo isManaged
         * @property {room.MJ_PLAYERROLE|null} [role] VGUserInfo role
         * @property {room.IMJ_FanInfo|null} [startFan] VGUserInfo startFan
         * @property {Array.<room.IMJ_TileSet>|null} [tileSets] VGUserInfo tileSets
         * @property {number|null} [isTing] VGUserInfo isTing
         * @property {Array.<room.IMJ_TingTileInfo>|null} [tingTileInfo] VGUserInfo tingTileInfo
         * @property {Array.<room.IMJ_FanInfo>|null} [fan] VGUserInfo fan
         * @property {number|Long|null} [resultCoin] VGUserInfo resultCoin
         * @property {number|null} [feeCoin] VGUserInfo feeCoin
         * @property {number|null} [niaoMulti] VGUserInfo niaoMulti
         */

        /**
         * Constructs a new VGUserInfo.
         * @memberof room
         * @classdesc Represents a VGUserInfo.
         * @implements IVGUserInfo
         * @constructor
         * @param {room.IVGUserInfo=} [properties] Properties to set
         */
        function VGUserInfo(properties) {
            this.tileSets = [];
            this.tingTileInfo = [];
            this.fan = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserInfo userName.
         * @member {string} userName
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.userName = "";

        /**
         * VGUserInfo showName.
         * @member {string} showName
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.showName = "";

        /**
         * VGUserInfo userPos.
         * @member {room.IVGUserPos|null|undefined} userPos
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.userPos = null;

        /**
         * VGUserInfo status.
         * @member {room.USERSTATUS} status
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.status = 0;

        /**
         * VGUserInfo gameCoin.
         * @member {number|Long} gameCoin
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.gameCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VGUserInfo isManaged.
         * @member {number} isManaged
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.isManaged = 0;

        /**
         * VGUserInfo role.
         * @member {room.MJ_PLAYERROLE} role
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.role = 0;

        /**
         * VGUserInfo startFan.
         * @member {room.IMJ_FanInfo|null|undefined} startFan
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.startFan = null;

        /**
         * VGUserInfo tileSets.
         * @member {Array.<room.IMJ_TileSet>} tileSets
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.tileSets = $util.emptyArray;

        /**
         * VGUserInfo isTing.
         * @member {number} isTing
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.isTing = 0;

        /**
         * VGUserInfo tingTileInfo.
         * @member {Array.<room.IMJ_TingTileInfo>} tingTileInfo
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.tingTileInfo = $util.emptyArray;

        /**
         * VGUserInfo fan.
         * @member {Array.<room.IMJ_FanInfo>} fan
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.fan = $util.emptyArray;

        /**
         * VGUserInfo resultCoin.
         * @member {number|Long} resultCoin
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.resultCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VGUserInfo feeCoin.
         * @member {number} feeCoin
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.feeCoin = 0;

        /**
         * VGUserInfo niaoMulti.
         * @member {number} niaoMulti
         * @memberof room.VGUserInfo
         * @instance
         */
        VGUserInfo.prototype.niaoMulti = 0;

        /**
         * Creates a new VGUserInfo instance using the specified properties.
         * @function create
         * @memberof room.VGUserInfo
         * @static
         * @param {room.IVGUserInfo=} [properties] Properties to set
         * @returns {room.VGUserInfo} VGUserInfo instance
         */
        VGUserInfo.create = function create(properties) {
            return new VGUserInfo(properties);
        };

        /**
         * Encodes the specified VGUserInfo message. Does not implicitly {@link room.VGUserInfo.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserInfo
         * @static
         * @param {room.IVGUserInfo} message VGUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.showName != null && Object.hasOwnProperty.call(message, "showName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.showName);
            if (message.userPos != null && Object.hasOwnProperty.call(message, "userPos"))
                $root.room.VGUserPos.encode(message.userPos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.gameCoin != null && Object.hasOwnProperty.call(message, "gameCoin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.gameCoin);
            if (message.isManaged != null && Object.hasOwnProperty.call(message, "isManaged"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isManaged);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.role);
            if (message.startFan != null && Object.hasOwnProperty.call(message, "startFan"))
                $root.room.MJ_FanInfo.encode(message.startFan, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.tileSets != null && message.tileSets.length)
                for (var i = 0; i < message.tileSets.length; ++i)
                    $root.room.MJ_TileSet.encode(message.tileSets[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.isTing != null && Object.hasOwnProperty.call(message, "isTing"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.isTing);
            if (message.tingTileInfo != null && message.tingTileInfo.length)
                for (var i = 0; i < message.tingTileInfo.length; ++i)
                    $root.room.MJ_TingTileInfo.encode(message.tingTileInfo[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.fan != null && message.fan.length)
                for (var i = 0; i < message.fan.length; ++i)
                    $root.room.MJ_FanInfo.encode(message.fan[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.resultCoin != null && Object.hasOwnProperty.call(message, "resultCoin"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.resultCoin);
            if (message.feeCoin != null && Object.hasOwnProperty.call(message, "feeCoin"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.feeCoin);
            if (message.niaoMulti != null && Object.hasOwnProperty.call(message, "niaoMulti"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.niaoMulti);
            return writer;
        };

        /**
         * Encodes the specified VGUserInfo message, length delimited. Does not implicitly {@link room.VGUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserInfo
         * @static
         * @param {room.IVGUserInfo} message VGUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserInfo} VGUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.showName = reader.string();
                    break;
                case 3:
                    message.userPos = $root.room.VGUserPos.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.gameCoin = reader.int64();
                    break;
                case 6:
                    message.isManaged = reader.int32();
                    break;
                case 7:
                    message.role = reader.int32();
                    break;
                case 8:
                    message.startFan = $root.room.MJ_FanInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.tileSets && message.tileSets.length))
                        message.tileSets = [];
                    message.tileSets.push($root.room.MJ_TileSet.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.isTing = reader.int32();
                    break;
                case 11:
                    if (!(message.tingTileInfo && message.tingTileInfo.length))
                        message.tingTileInfo = [];
                    message.tingTileInfo.push($root.room.MJ_TingTileInfo.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.fan && message.fan.length))
                        message.fan = [];
                    message.fan.push($root.room.MJ_FanInfo.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.resultCoin = reader.int64();
                    break;
                case 14:
                    message.feeCoin = reader.int32();
                    break;
                case 15:
                    message.niaoMulti = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserInfo} VGUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserInfo message.
         * @function verify
         * @memberof room.VGUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.showName != null && message.hasOwnProperty("showName"))
                if (!$util.isString(message.showName))
                    return "showName: string expected";
            if (message.userPos != null && message.hasOwnProperty("userPos")) {
                var error = $root.room.VGUserPos.verify(message.userPos);
                if (error)
                    return "userPos." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.gameCoin != null && message.hasOwnProperty("gameCoin"))
                if (!$util.isInteger(message.gameCoin) && !(message.gameCoin && $util.isInteger(message.gameCoin.low) && $util.isInteger(message.gameCoin.high)))
                    return "gameCoin: integer|Long expected";
            if (message.isManaged != null && message.hasOwnProperty("isManaged"))
                if (!$util.isInteger(message.isManaged))
                    return "isManaged: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.startFan != null && message.hasOwnProperty("startFan")) {
                var error = $root.room.MJ_FanInfo.verify(message.startFan);
                if (error)
                    return "startFan." + error;
            }
            if (message.tileSets != null && message.hasOwnProperty("tileSets")) {
                if (!Array.isArray(message.tileSets))
                    return "tileSets: array expected";
                for (var i = 0; i < message.tileSets.length; ++i) {
                    var error = $root.room.MJ_TileSet.verify(message.tileSets[i]);
                    if (error)
                        return "tileSets." + error;
                }
            }
            if (message.isTing != null && message.hasOwnProperty("isTing"))
                if (!$util.isInteger(message.isTing))
                    return "isTing: integer expected";
            if (message.tingTileInfo != null && message.hasOwnProperty("tingTileInfo")) {
                if (!Array.isArray(message.tingTileInfo))
                    return "tingTileInfo: array expected";
                for (var i = 0; i < message.tingTileInfo.length; ++i) {
                    var error = $root.room.MJ_TingTileInfo.verify(message.tingTileInfo[i]);
                    if (error)
                        return "tingTileInfo." + error;
                }
            }
            if (message.fan != null && message.hasOwnProperty("fan")) {
                if (!Array.isArray(message.fan))
                    return "fan: array expected";
                for (var i = 0; i < message.fan.length; ++i) {
                    var error = $root.room.MJ_FanInfo.verify(message.fan[i]);
                    if (error)
                        return "fan." + error;
                }
            }
            if (message.resultCoin != null && message.hasOwnProperty("resultCoin"))
                if (!$util.isInteger(message.resultCoin) && !(message.resultCoin && $util.isInteger(message.resultCoin.low) && $util.isInteger(message.resultCoin.high)))
                    return "resultCoin: integer|Long expected";
            if (message.feeCoin != null && message.hasOwnProperty("feeCoin"))
                if (!$util.isInteger(message.feeCoin))
                    return "feeCoin: integer expected";
            if (message.niaoMulti != null && message.hasOwnProperty("niaoMulti"))
                if (!$util.isInteger(message.niaoMulti))
                    return "niaoMulti: integer expected";
            return null;
        };

        return VGUserInfo;
    })();

    room.VGUserPos = (function() {

        /**
         * Properties of a VGUserPos.
         * @memberof room
         * @interface IVGUserPos
         * @property {number|null} [roomID] VGUserPos roomID
         * @property {string|null} [tableID] VGUserPos tableID
         * @property {number|null} [seatID] VGUserPos seatID
         */

        /**
         * Constructs a new VGUserPos.
         * @memberof room
         * @classdesc Represents a VGUserPos.
         * @implements IVGUserPos
         * @constructor
         * @param {room.IVGUserPos=} [properties] Properties to set
         */
        function VGUserPos(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserPos roomID.
         * @member {number} roomID
         * @memberof room.VGUserPos
         * @instance
         */
        VGUserPos.prototype.roomID = 0;

        /**
         * VGUserPos tableID.
         * @member {string} tableID
         * @memberof room.VGUserPos
         * @instance
         */
        VGUserPos.prototype.tableID = "";

        /**
         * VGUserPos seatID.
         * @member {number} seatID
         * @memberof room.VGUserPos
         * @instance
         */
        VGUserPos.prototype.seatID = 0;

        /**
         * Creates a new VGUserPos instance using the specified properties.
         * @function create
         * @memberof room.VGUserPos
         * @static
         * @param {room.IVGUserPos=} [properties] Properties to set
         * @returns {room.VGUserPos} VGUserPos instance
         */
        VGUserPos.create = function create(properties) {
            return new VGUserPos(properties);
        };

        /**
         * Encodes the specified VGUserPos message. Does not implicitly {@link room.VGUserPos.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserPos
         * @static
         * @param {room.IVGUserPos} message VGUserPos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserPos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomID);
            if (message.tableID != null && Object.hasOwnProperty.call(message, "tableID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableID);
            if (message.seatID != null && Object.hasOwnProperty.call(message, "seatID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seatID);
            return writer;
        };

        /**
         * Encodes the specified VGUserPos message, length delimited. Does not implicitly {@link room.VGUserPos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserPos
         * @static
         * @param {room.IVGUserPos} message VGUserPos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserPos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserPos message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserPos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserPos} VGUserPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserPos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserPos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.int32();
                    break;
                case 2:
                    message.tableID = reader.string();
                    break;
                case 3:
                    message.seatID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserPos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserPos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserPos} VGUserPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserPos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserPos message.
         * @function verify
         * @memberof room.VGUserPos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserPos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.tableID != null && message.hasOwnProperty("tableID"))
                if (!$util.isString(message.tableID))
                    return "tableID: string expected";
            if (message.seatID != null && message.hasOwnProperty("seatID"))
                if (!$util.isInteger(message.seatID))
                    return "seatID: integer expected";
            return null;
        };

        return VGUserPos;
    })();

    room.VGGameStatusNtc = (function() {

        /**
         * Properties of a VGGameStatusNtc.
         * @memberof room
         * @interface IVGGameStatusNtc
         * @property {room.MJ_GAMESTATUS|null} [status] VGGameStatusNtc status
         * @property {number|null} [second] VGGameStatusNtc second
         * @property {number|null} [roomID] VGGameStatusNtc roomID
         * @property {string|null} [tableID] VGGameStatusNtc tableID
         */

        /**
         * Constructs a new VGGameStatusNtc.
         * @memberof room
         * @classdesc Represents a VGGameStatusNtc.
         * @implements IVGGameStatusNtc
         * @constructor
         * @param {room.IVGGameStatusNtc=} [properties] Properties to set
         */
        function VGGameStatusNtc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGGameStatusNtc status.
         * @member {room.MJ_GAMESTATUS} status
         * @memberof room.VGGameStatusNtc
         * @instance
         */
        VGGameStatusNtc.prototype.status = 0;

        /**
         * VGGameStatusNtc second.
         * @member {number} second
         * @memberof room.VGGameStatusNtc
         * @instance
         */
        VGGameStatusNtc.prototype.second = 0;

        /**
         * VGGameStatusNtc roomID.
         * @member {number} roomID
         * @memberof room.VGGameStatusNtc
         * @instance
         */
        VGGameStatusNtc.prototype.roomID = 0;

        /**
         * VGGameStatusNtc tableID.
         * @member {string} tableID
         * @memberof room.VGGameStatusNtc
         * @instance
         */
        VGGameStatusNtc.prototype.tableID = "";

        /**
         * Creates a new VGGameStatusNtc instance using the specified properties.
         * @function create
         * @memberof room.VGGameStatusNtc
         * @static
         * @param {room.IVGGameStatusNtc=} [properties] Properties to set
         * @returns {room.VGGameStatusNtc} VGGameStatusNtc instance
         */
        VGGameStatusNtc.create = function create(properties) {
            return new VGGameStatusNtc(properties);
        };

        /**
         * Encodes the specified VGGameStatusNtc message. Does not implicitly {@link room.VGGameStatusNtc.verify|verify} messages.
         * @function encode
         * @memberof room.VGGameStatusNtc
         * @static
         * @param {room.IVGGameStatusNtc} message VGGameStatusNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameStatusNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.second != null && Object.hasOwnProperty.call(message, "second"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.second);
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomID);
            if (message.tableID != null && Object.hasOwnProperty.call(message, "tableID"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableID);
            return writer;
        };

        /**
         * Encodes the specified VGGameStatusNtc message, length delimited. Does not implicitly {@link room.VGGameStatusNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGGameStatusNtc
         * @static
         * @param {room.IVGGameStatusNtc} message VGGameStatusNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameStatusNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGGameStatusNtc message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGGameStatusNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGGameStatusNtc} VGGameStatusNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameStatusNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGGameStatusNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.second = reader.int32();
                    break;
                case 3:
                    message.roomID = reader.int32();
                    break;
                case 4:
                    message.tableID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGGameStatusNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGGameStatusNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGGameStatusNtc} VGGameStatusNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameStatusNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGGameStatusNtc message.
         * @function verify
         * @memberof room.VGGameStatusNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGGameStatusNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.second != null && message.hasOwnProperty("second"))
                if (!$util.isInteger(message.second))
                    return "second: integer expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.tableID != null && message.hasOwnProperty("tableID"))
                if (!$util.isString(message.tableID))
                    return "tableID: string expected";
            return null;
        };

        return VGGameStatusNtc;
    })();

    room.VGSyncGameDataNtc = (function() {

        /**
         * Properties of a VGSyncGameDataNtc.
         * @memberof room
         * @interface IVGSyncGameDataNtc
         * @property {number|null} [roomID] VGSyncGameDataNtc roomID
         * @property {string|null} [tableID] VGSyncGameDataNtc tableID
         * @property {room.MJ_GAMESTATUS|null} [status] VGSyncGameDataNtc status
         * @property {number|null} [second] VGSyncGameDataNtc second
         * @property {Array.<room.IVGUserInfo>|null} [userInfos] VGSyncGameDataNtc userInfos
         * @property {string|null} [roundGuid] VGSyncGameDataNtc roundGuid
         * @property {number|null} [remainCount] VGSyncGameDataNtc remainCount
         * @property {Array.<room.IMJ_SettlementInfo>|null} [settlementInfos] VGSyncGameDataNtc settlementInfos
         */

        /**
         * Constructs a new VGSyncGameDataNtc.
         * @memberof room
         * @classdesc Represents a VGSyncGameDataNtc.
         * @implements IVGSyncGameDataNtc
         * @constructor
         * @param {room.IVGSyncGameDataNtc=} [properties] Properties to set
         */
        function VGSyncGameDataNtc(properties) {
            this.userInfos = [];
            this.settlementInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGSyncGameDataNtc roomID.
         * @member {number} roomID
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.roomID = 0;

        /**
         * VGSyncGameDataNtc tableID.
         * @member {string} tableID
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.tableID = "";

        /**
         * VGSyncGameDataNtc status.
         * @member {room.MJ_GAMESTATUS} status
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.status = 0;

        /**
         * VGSyncGameDataNtc second.
         * @member {number} second
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.second = 0;

        /**
         * VGSyncGameDataNtc userInfos.
         * @member {Array.<room.IVGUserInfo>} userInfos
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.userInfos = $util.emptyArray;

        /**
         * VGSyncGameDataNtc roundGuid.
         * @member {string} roundGuid
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.roundGuid = "";

        /**
         * VGSyncGameDataNtc remainCount.
         * @member {number} remainCount
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.remainCount = 0;

        /**
         * VGSyncGameDataNtc settlementInfos.
         * @member {Array.<room.IMJ_SettlementInfo>} settlementInfos
         * @memberof room.VGSyncGameDataNtc
         * @instance
         */
        VGSyncGameDataNtc.prototype.settlementInfos = $util.emptyArray;

        /**
         * Creates a new VGSyncGameDataNtc instance using the specified properties.
         * @function create
         * @memberof room.VGSyncGameDataNtc
         * @static
         * @param {room.IVGSyncGameDataNtc=} [properties] Properties to set
         * @returns {room.VGSyncGameDataNtc} VGSyncGameDataNtc instance
         */
        VGSyncGameDataNtc.create = function create(properties) {
            return new VGSyncGameDataNtc(properties);
        };

        /**
         * Encodes the specified VGSyncGameDataNtc message. Does not implicitly {@link room.VGSyncGameDataNtc.verify|verify} messages.
         * @function encode
         * @memberof room.VGSyncGameDataNtc
         * @static
         * @param {room.IVGSyncGameDataNtc} message VGSyncGameDataNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSyncGameDataNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomID);
            if (message.tableID != null && Object.hasOwnProperty.call(message, "tableID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableID);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.second != null && Object.hasOwnProperty.call(message, "second"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.second);
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.room.VGUserInfo.encode(message.userInfos[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.roundGuid != null && Object.hasOwnProperty.call(message, "roundGuid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roundGuid);
            if (message.remainCount != null && Object.hasOwnProperty.call(message, "remainCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.remainCount);
            if (message.settlementInfos != null && message.settlementInfos.length)
                for (var i = 0; i < message.settlementInfos.length; ++i)
                    $root.room.MJ_SettlementInfo.encode(message.settlementInfos[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGSyncGameDataNtc message, length delimited. Does not implicitly {@link room.VGSyncGameDataNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGSyncGameDataNtc
         * @static
         * @param {room.IVGSyncGameDataNtc} message VGSyncGameDataNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGSyncGameDataNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGSyncGameDataNtc message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGSyncGameDataNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGSyncGameDataNtc} VGSyncGameDataNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSyncGameDataNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGSyncGameDataNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.int32();
                    break;
                case 2:
                    message.tableID = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.second = reader.int32();
                    break;
                case 5:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.room.VGUserInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.roundGuid = reader.string();
                    break;
                case 7:
                    message.remainCount = reader.int32();
                    break;
                case 8:
                    if (!(message.settlementInfos && message.settlementInfos.length))
                        message.settlementInfos = [];
                    message.settlementInfos.push($root.room.MJ_SettlementInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGSyncGameDataNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGSyncGameDataNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGSyncGameDataNtc} VGSyncGameDataNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGSyncGameDataNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGSyncGameDataNtc message.
         * @function verify
         * @memberof room.VGSyncGameDataNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGSyncGameDataNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.tableID != null && message.hasOwnProperty("tableID"))
                if (!$util.isString(message.tableID))
                    return "tableID: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.second != null && message.hasOwnProperty("second"))
                if (!$util.isInteger(message.second))
                    return "second: integer expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.room.VGUserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            if (message.roundGuid != null && message.hasOwnProperty("roundGuid"))
                if (!$util.isString(message.roundGuid))
                    return "roundGuid: string expected";
            if (message.remainCount != null && message.hasOwnProperty("remainCount"))
                if (!$util.isInteger(message.remainCount))
                    return "remainCount: integer expected";
            if (message.settlementInfos != null && message.hasOwnProperty("settlementInfos")) {
                if (!Array.isArray(message.settlementInfos))
                    return "settlementInfos: array expected";
                for (var i = 0; i < message.settlementInfos.length; ++i) {
                    var error = $root.room.MJ_SettlementInfo.verify(message.settlementInfos[i]);
                    if (error)
                        return "settlementInfos." + error;
                }
            }
            return null;
        };

        return VGSyncGameDataNtc;
    })();

    room.VGGameStartNtc = (function() {

        /**
         * Properties of a VGGameStartNtc.
         * @memberof room
         * @interface IVGGameStartNtc
         * @property {string|null} [roundGuid] VGGameStartNtc roundGuid
         * @property {Array.<room.IVGUserInfo>|null} [userInfos] VGGameStartNtc userInfos
         * @property {Array.<number>|null} [dicePoint] VGGameStartNtc dicePoint
         */

        /**
         * Constructs a new VGGameStartNtc.
         * @memberof room
         * @classdesc Represents a VGGameStartNtc.
         * @implements IVGGameStartNtc
         * @constructor
         * @param {room.IVGGameStartNtc=} [properties] Properties to set
         */
        function VGGameStartNtc(properties) {
            this.userInfos = [];
            this.dicePoint = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGGameStartNtc roundGuid.
         * @member {string} roundGuid
         * @memberof room.VGGameStartNtc
         * @instance
         */
        VGGameStartNtc.prototype.roundGuid = "";

        /**
         * VGGameStartNtc userInfos.
         * @member {Array.<room.IVGUserInfo>} userInfos
         * @memberof room.VGGameStartNtc
         * @instance
         */
        VGGameStartNtc.prototype.userInfos = $util.emptyArray;

        /**
         * VGGameStartNtc dicePoint.
         * @member {Array.<number>} dicePoint
         * @memberof room.VGGameStartNtc
         * @instance
         */
        VGGameStartNtc.prototype.dicePoint = $util.emptyArray;

        /**
         * Creates a new VGGameStartNtc instance using the specified properties.
         * @function create
         * @memberof room.VGGameStartNtc
         * @static
         * @param {room.IVGGameStartNtc=} [properties] Properties to set
         * @returns {room.VGGameStartNtc} VGGameStartNtc instance
         */
        VGGameStartNtc.create = function create(properties) {
            return new VGGameStartNtc(properties);
        };

        /**
         * Encodes the specified VGGameStartNtc message. Does not implicitly {@link room.VGGameStartNtc.verify|verify} messages.
         * @function encode
         * @memberof room.VGGameStartNtc
         * @static
         * @param {room.IVGGameStartNtc} message VGGameStartNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameStartNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundGuid != null && Object.hasOwnProperty.call(message, "roundGuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundGuid);
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.room.VGUserInfo.encode(message.userInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.dicePoint != null && message.dicePoint.length)
                for (var i = 0; i < message.dicePoint.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dicePoint[i]);
            return writer;
        };

        /**
         * Encodes the specified VGGameStartNtc message, length delimited. Does not implicitly {@link room.VGGameStartNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGGameStartNtc
         * @static
         * @param {room.IVGGameStartNtc} message VGGameStartNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameStartNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGGameStartNtc message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGGameStartNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGGameStartNtc} VGGameStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameStartNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGGameStartNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roundGuid = reader.string();
                    break;
                case 2:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.room.VGUserInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.dicePoint && message.dicePoint.length))
                        message.dicePoint = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.dicePoint.push(reader.int32());
                    } else
                        message.dicePoint.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGGameStartNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGGameStartNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGGameStartNtc} VGGameStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameStartNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGGameStartNtc message.
         * @function verify
         * @memberof room.VGGameStartNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGGameStartNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roundGuid != null && message.hasOwnProperty("roundGuid"))
                if (!$util.isString(message.roundGuid))
                    return "roundGuid: string expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.room.VGUserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            if (message.dicePoint != null && message.hasOwnProperty("dicePoint")) {
                if (!Array.isArray(message.dicePoint))
                    return "dicePoint: array expected";
                for (var i = 0; i < message.dicePoint.length; ++i)
                    if (!$util.isInteger(message.dicePoint[i]))
                        return "dicePoint: integer[] expected";
            }
            return null;
        };

        return VGGameStartNtc;
    })();

    room.VGGameSendCardNtc = (function() {

        /**
         * Properties of a VGGameSendCardNtc.
         * @memberof room
         * @interface IVGGameSendCardNtc
         * @property {string|null} [roundGuid] VGGameSendCardNtc roundGuid
         * @property {Array.<room.IVGUserInfo>|null} [userInfos] VGGameSendCardNtc userInfos
         * @property {number|null} [remainCount] VGGameSendCardNtc remainCount
         */

        /**
         * Constructs a new VGGameSendCardNtc.
         * @memberof room
         * @classdesc Represents a VGGameSendCardNtc.
         * @implements IVGGameSendCardNtc
         * @constructor
         * @param {room.IVGGameSendCardNtc=} [properties] Properties to set
         */
        function VGGameSendCardNtc(properties) {
            this.userInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGGameSendCardNtc roundGuid.
         * @member {string} roundGuid
         * @memberof room.VGGameSendCardNtc
         * @instance
         */
        VGGameSendCardNtc.prototype.roundGuid = "";

        /**
         * VGGameSendCardNtc userInfos.
         * @member {Array.<room.IVGUserInfo>} userInfos
         * @memberof room.VGGameSendCardNtc
         * @instance
         */
        VGGameSendCardNtc.prototype.userInfos = $util.emptyArray;

        /**
         * VGGameSendCardNtc remainCount.
         * @member {number} remainCount
         * @memberof room.VGGameSendCardNtc
         * @instance
         */
        VGGameSendCardNtc.prototype.remainCount = 0;

        /**
         * Creates a new VGGameSendCardNtc instance using the specified properties.
         * @function create
         * @memberof room.VGGameSendCardNtc
         * @static
         * @param {room.IVGGameSendCardNtc=} [properties] Properties to set
         * @returns {room.VGGameSendCardNtc} VGGameSendCardNtc instance
         */
        VGGameSendCardNtc.create = function create(properties) {
            return new VGGameSendCardNtc(properties);
        };

        /**
         * Encodes the specified VGGameSendCardNtc message. Does not implicitly {@link room.VGGameSendCardNtc.verify|verify} messages.
         * @function encode
         * @memberof room.VGGameSendCardNtc
         * @static
         * @param {room.IVGGameSendCardNtc} message VGGameSendCardNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameSendCardNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundGuid != null && Object.hasOwnProperty.call(message, "roundGuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundGuid);
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.room.VGUserInfo.encode(message.userInfos[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.remainCount != null && Object.hasOwnProperty.call(message, "remainCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.remainCount);
            return writer;
        };

        /**
         * Encodes the specified VGGameSendCardNtc message, length delimited. Does not implicitly {@link room.VGGameSendCardNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGGameSendCardNtc
         * @static
         * @param {room.IVGGameSendCardNtc} message VGGameSendCardNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameSendCardNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGGameSendCardNtc message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGGameSendCardNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGGameSendCardNtc} VGGameSendCardNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameSendCardNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGGameSendCardNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roundGuid = reader.string();
                    break;
                case 4:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.room.VGUserInfo.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.remainCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGGameSendCardNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGGameSendCardNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGGameSendCardNtc} VGGameSendCardNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameSendCardNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGGameSendCardNtc message.
         * @function verify
         * @memberof room.VGGameSendCardNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGGameSendCardNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roundGuid != null && message.hasOwnProperty("roundGuid"))
                if (!$util.isString(message.roundGuid))
                    return "roundGuid: string expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.room.VGUserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            if (message.remainCount != null && message.hasOwnProperty("remainCount"))
                if (!$util.isInteger(message.remainCount))
                    return "remainCount: integer expected";
            return null;
        };

        return VGGameSendCardNtc;
    })();

    room.VGGameOperationNtc = (function() {

        /**
         * Properties of a VGGameOperationNtc.
         * @memberof room
         * @interface IVGGameOperationNtc
         * @property {string|null} [roundGuid] VGGameOperationNtc roundGuid
         * @property {number|null} [seatid] VGGameOperationNtc seatid
         * @property {Array.<room.IMJ_Operation>|null} [operation] VGGameOperationNtc operation
         * @property {number|null} [second] VGGameOperationNtc second
         */

        /**
         * Constructs a new VGGameOperationNtc.
         * @memberof room
         * @classdesc Represents a VGGameOperationNtc.
         * @implements IVGGameOperationNtc
         * @constructor
         * @param {room.IVGGameOperationNtc=} [properties] Properties to set
         */
        function VGGameOperationNtc(properties) {
            this.operation = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGGameOperationNtc roundGuid.
         * @member {string} roundGuid
         * @memberof room.VGGameOperationNtc
         * @instance
         */
        VGGameOperationNtc.prototype.roundGuid = "";

        /**
         * VGGameOperationNtc seatid.
         * @member {number} seatid
         * @memberof room.VGGameOperationNtc
         * @instance
         */
        VGGameOperationNtc.prototype.seatid = 0;

        /**
         * VGGameOperationNtc operation.
         * @member {Array.<room.IMJ_Operation>} operation
         * @memberof room.VGGameOperationNtc
         * @instance
         */
        VGGameOperationNtc.prototype.operation = $util.emptyArray;

        /**
         * VGGameOperationNtc second.
         * @member {number} second
         * @memberof room.VGGameOperationNtc
         * @instance
         */
        VGGameOperationNtc.prototype.second = 0;

        /**
         * Creates a new VGGameOperationNtc instance using the specified properties.
         * @function create
         * @memberof room.VGGameOperationNtc
         * @static
         * @param {room.IVGGameOperationNtc=} [properties] Properties to set
         * @returns {room.VGGameOperationNtc} VGGameOperationNtc instance
         */
        VGGameOperationNtc.create = function create(properties) {
            return new VGGameOperationNtc(properties);
        };

        /**
         * Encodes the specified VGGameOperationNtc message. Does not implicitly {@link room.VGGameOperationNtc.verify|verify} messages.
         * @function encode
         * @memberof room.VGGameOperationNtc
         * @static
         * @param {room.IVGGameOperationNtc} message VGGameOperationNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameOperationNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roundGuid != null && Object.hasOwnProperty.call(message, "roundGuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roundGuid);
            if (message.seatid != null && Object.hasOwnProperty.call(message, "seatid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seatid);
            if (message.operation != null && message.operation.length)
                for (var i = 0; i < message.operation.length; ++i)
                    $root.room.MJ_Operation.encode(message.operation[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.second != null && Object.hasOwnProperty.call(message, "second"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.second);
            return writer;
        };

        /**
         * Encodes the specified VGGameOperationNtc message, length delimited. Does not implicitly {@link room.VGGameOperationNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGGameOperationNtc
         * @static
         * @param {room.IVGGameOperationNtc} message VGGameOperationNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameOperationNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGGameOperationNtc message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGGameOperationNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGGameOperationNtc} VGGameOperationNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameOperationNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGGameOperationNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roundGuid = reader.string();
                    break;
                case 2:
                    message.seatid = reader.int32();
                    break;
                case 3:
                    if (!(message.operation && message.operation.length))
                        message.operation = [];
                    message.operation.push($root.room.MJ_Operation.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.second = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGGameOperationNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGGameOperationNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGGameOperationNtc} VGGameOperationNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameOperationNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGGameOperationNtc message.
         * @function verify
         * @memberof room.VGGameOperationNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGGameOperationNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roundGuid != null && message.hasOwnProperty("roundGuid"))
                if (!$util.isString(message.roundGuid))
                    return "roundGuid: string expected";
            if (message.seatid != null && message.hasOwnProperty("seatid"))
                if (!$util.isInteger(message.seatid))
                    return "seatid: integer expected";
            if (message.operation != null && message.hasOwnProperty("operation")) {
                if (!Array.isArray(message.operation))
                    return "operation: array expected";
                for (var i = 0; i < message.operation.length; ++i) {
                    var error = $root.room.MJ_Operation.verify(message.operation[i]);
                    if (error)
                        return "operation." + error;
                }
            }
            if (message.second != null && message.hasOwnProperty("second"))
                if (!$util.isInteger(message.second))
                    return "second: integer expected";
            return null;
        };

        return VGGameOperationNtc;
    })();

    room.VGGameResultNtc = (function() {

        /**
         * Properties of a VGGameResultNtc.
         * @memberof room
         * @interface IVGGameResultNtc
         * @property {number|null} [roomID] VGGameResultNtc roomID
         * @property {string|null} [tableID] VGGameResultNtc tableID
         * @property {string|null} [roundGuid] VGGameResultNtc roundGuid
         * @property {Array.<room.IVGUserInfo>|null} [userInfos] VGGameResultNtc userInfos
         * @property {Array.<room.IMJ_SettlementInfo>|null} [settlementInfos] VGGameResultNtc settlementInfos
         * @property {Array.<number>|null} [birdTiles] VGGameResultNtc birdTiles
         */

        /**
         * Constructs a new VGGameResultNtc.
         * @memberof room
         * @classdesc Represents a VGGameResultNtc.
         * @implements IVGGameResultNtc
         * @constructor
         * @param {room.IVGGameResultNtc=} [properties] Properties to set
         */
        function VGGameResultNtc(properties) {
            this.userInfos = [];
            this.settlementInfos = [];
            this.birdTiles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGGameResultNtc roomID.
         * @member {number} roomID
         * @memberof room.VGGameResultNtc
         * @instance
         */
        VGGameResultNtc.prototype.roomID = 0;

        /**
         * VGGameResultNtc tableID.
         * @member {string} tableID
         * @memberof room.VGGameResultNtc
         * @instance
         */
        VGGameResultNtc.prototype.tableID = "";

        /**
         * VGGameResultNtc roundGuid.
         * @member {string} roundGuid
         * @memberof room.VGGameResultNtc
         * @instance
         */
        VGGameResultNtc.prototype.roundGuid = "";

        /**
         * VGGameResultNtc userInfos.
         * @member {Array.<room.IVGUserInfo>} userInfos
         * @memberof room.VGGameResultNtc
         * @instance
         */
        VGGameResultNtc.prototype.userInfos = $util.emptyArray;

        /**
         * VGGameResultNtc settlementInfos.
         * @member {Array.<room.IMJ_SettlementInfo>} settlementInfos
         * @memberof room.VGGameResultNtc
         * @instance
         */
        VGGameResultNtc.prototype.settlementInfos = $util.emptyArray;

        /**
         * VGGameResultNtc birdTiles.
         * @member {Array.<number>} birdTiles
         * @memberof room.VGGameResultNtc
         * @instance
         */
        VGGameResultNtc.prototype.birdTiles = $util.emptyArray;

        /**
         * Creates a new VGGameResultNtc instance using the specified properties.
         * @function create
         * @memberof room.VGGameResultNtc
         * @static
         * @param {room.IVGGameResultNtc=} [properties] Properties to set
         * @returns {room.VGGameResultNtc} VGGameResultNtc instance
         */
        VGGameResultNtc.create = function create(properties) {
            return new VGGameResultNtc(properties);
        };

        /**
         * Encodes the specified VGGameResultNtc message. Does not implicitly {@link room.VGGameResultNtc.verify|verify} messages.
         * @function encode
         * @memberof room.VGGameResultNtc
         * @static
         * @param {room.IVGGameResultNtc} message VGGameResultNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameResultNtc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomID);
            if (message.tableID != null && Object.hasOwnProperty.call(message, "tableID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableID);
            if (message.roundGuid != null && Object.hasOwnProperty.call(message, "roundGuid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roundGuid);
            if (message.userInfos != null && message.userInfos.length)
                for (var i = 0; i < message.userInfos.length; ++i)
                    $root.room.VGUserInfo.encode(message.userInfos[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.settlementInfos != null && message.settlementInfos.length)
                for (var i = 0; i < message.settlementInfos.length; ++i)
                    $root.room.MJ_SettlementInfo.encode(message.settlementInfos[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.birdTiles != null && message.birdTiles.length)
                for (var i = 0; i < message.birdTiles.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.birdTiles[i]);
            return writer;
        };

        /**
         * Encodes the specified VGGameResultNtc message, length delimited. Does not implicitly {@link room.VGGameResultNtc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGGameResultNtc
         * @static
         * @param {room.IVGGameResultNtc} message VGGameResultNtc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGGameResultNtc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGGameResultNtc message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGGameResultNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGGameResultNtc} VGGameResultNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameResultNtc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGGameResultNtc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.int32();
                    break;
                case 2:
                    message.tableID = reader.string();
                    break;
                case 3:
                    message.roundGuid = reader.string();
                    break;
                case 4:
                    if (!(message.userInfos && message.userInfos.length))
                        message.userInfos = [];
                    message.userInfos.push($root.room.VGUserInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.settlementInfos && message.settlementInfos.length))
                        message.settlementInfos = [];
                    message.settlementInfos.push($root.room.MJ_SettlementInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.birdTiles && message.birdTiles.length))
                        message.birdTiles = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.birdTiles.push(reader.int32());
                    } else
                        message.birdTiles.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGGameResultNtc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGGameResultNtc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGGameResultNtc} VGGameResultNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGGameResultNtc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGGameResultNtc message.
         * @function verify
         * @memberof room.VGGameResultNtc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGGameResultNtc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.tableID != null && message.hasOwnProperty("tableID"))
                if (!$util.isString(message.tableID))
                    return "tableID: string expected";
            if (message.roundGuid != null && message.hasOwnProperty("roundGuid"))
                if (!$util.isString(message.roundGuid))
                    return "roundGuid: string expected";
            if (message.userInfos != null && message.hasOwnProperty("userInfos")) {
                if (!Array.isArray(message.userInfos))
                    return "userInfos: array expected";
                for (var i = 0; i < message.userInfos.length; ++i) {
                    var error = $root.room.VGUserInfo.verify(message.userInfos[i]);
                    if (error)
                        return "userInfos." + error;
                }
            }
            if (message.settlementInfos != null && message.hasOwnProperty("settlementInfos")) {
                if (!Array.isArray(message.settlementInfos))
                    return "settlementInfos: array expected";
                for (var i = 0; i < message.settlementInfos.length; ++i) {
                    var error = $root.room.MJ_SettlementInfo.verify(message.settlementInfos[i]);
                    if (error)
                        return "settlementInfos." + error;
                }
            }
            if (message.birdTiles != null && message.hasOwnProperty("birdTiles")) {
                if (!Array.isArray(message.birdTiles))
                    return "birdTiles: array expected";
                for (var i = 0; i < message.birdTiles.length; ++i)
                    if (!$util.isInteger(message.birdTiles[i]))
                        return "birdTiles: integer[] expected";
            }
            return null;
        };

        return VGGameResultNtc;
    })();

    room.VGUserOperationReq = (function() {

        /**
         * Properties of a VGUserOperationReq.
         * @memberof room
         * @interface IVGUserOperationReq
         * @property {room.IMJ_Operation|null} [operation] VGUserOperationReq operation
         */

        /**
         * Constructs a new VGUserOperationReq.
         * @memberof room
         * @classdesc Represents a VGUserOperationReq.
         * @implements IVGUserOperationReq
         * @constructor
         * @param {room.IVGUserOperationReq=} [properties] Properties to set
         */
        function VGUserOperationReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserOperationReq operation.
         * @member {room.IMJ_Operation|null|undefined} operation
         * @memberof room.VGUserOperationReq
         * @instance
         */
        VGUserOperationReq.prototype.operation = null;

        /**
         * Creates a new VGUserOperationReq instance using the specified properties.
         * @function create
         * @memberof room.VGUserOperationReq
         * @static
         * @param {room.IVGUserOperationReq=} [properties] Properties to set
         * @returns {room.VGUserOperationReq} VGUserOperationReq instance
         */
        VGUserOperationReq.create = function create(properties) {
            return new VGUserOperationReq(properties);
        };

        /**
         * Encodes the specified VGUserOperationReq message. Does not implicitly {@link room.VGUserOperationReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserOperationReq
         * @static
         * @param {room.IVGUserOperationReq} message VGUserOperationReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserOperationReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                $root.room.MJ_Operation.encode(message.operation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGUserOperationReq message, length delimited. Does not implicitly {@link room.VGUserOperationReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserOperationReq
         * @static
         * @param {room.IVGUserOperationReq} message VGUserOperationReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserOperationReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserOperationReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserOperationReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserOperationReq} VGUserOperationReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserOperationReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserOperationReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.operation = $root.room.MJ_Operation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserOperationReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserOperationReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserOperationReq} VGUserOperationReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserOperationReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserOperationReq message.
         * @function verify
         * @memberof room.VGUserOperationReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserOperationReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operation != null && message.hasOwnProperty("operation")) {
                var error = $root.room.MJ_Operation.verify(message.operation);
                if (error)
                    return "operation." + error;
            }
            return null;
        };

        return VGUserOperationReq;
    })();

    room.VGUserOperationAck = (function() {

        /**
         * Properties of a VGUserOperationAck.
         * @memberof room
         * @interface IVGUserOperationAck
         * @property {number|null} [result] VGUserOperationAck result
         * @property {number|null} [seatID] VGUserOperationAck seatID
         * @property {room.IMJ_Operation|null} [operation] VGUserOperationAck operation
         * @property {number|null} [remainCount] VGUserOperationAck remainCount
         * @property {room.IVGUserInfo|null} [userInfo] VGUserOperationAck userInfo
         */

        /**
         * Constructs a new VGUserOperationAck.
         * @memberof room
         * @classdesc Represents a VGUserOperationAck.
         * @implements IVGUserOperationAck
         * @constructor
         * @param {room.IVGUserOperationAck=} [properties] Properties to set
         */
        function VGUserOperationAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserOperationAck result.
         * @member {number} result
         * @memberof room.VGUserOperationAck
         * @instance
         */
        VGUserOperationAck.prototype.result = 0;

        /**
         * VGUserOperationAck seatID.
         * @member {number} seatID
         * @memberof room.VGUserOperationAck
         * @instance
         */
        VGUserOperationAck.prototype.seatID = 0;

        /**
         * VGUserOperationAck operation.
         * @member {room.IMJ_Operation|null|undefined} operation
         * @memberof room.VGUserOperationAck
         * @instance
         */
        VGUserOperationAck.prototype.operation = null;

        /**
         * VGUserOperationAck remainCount.
         * @member {number} remainCount
         * @memberof room.VGUserOperationAck
         * @instance
         */
        VGUserOperationAck.prototype.remainCount = 0;

        /**
         * VGUserOperationAck userInfo.
         * @member {room.IVGUserInfo|null|undefined} userInfo
         * @memberof room.VGUserOperationAck
         * @instance
         */
        VGUserOperationAck.prototype.userInfo = null;

        /**
         * Creates a new VGUserOperationAck instance using the specified properties.
         * @function create
         * @memberof room.VGUserOperationAck
         * @static
         * @param {room.IVGUserOperationAck=} [properties] Properties to set
         * @returns {room.VGUserOperationAck} VGUserOperationAck instance
         */
        VGUserOperationAck.create = function create(properties) {
            return new VGUserOperationAck(properties);
        };

        /**
         * Encodes the specified VGUserOperationAck message. Does not implicitly {@link room.VGUserOperationAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserOperationAck
         * @static
         * @param {room.IVGUserOperationAck} message VGUserOperationAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserOperationAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.seatID != null && Object.hasOwnProperty.call(message, "seatID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seatID);
            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                $root.room.MJ_Operation.encode(message.operation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.remainCount != null && Object.hasOwnProperty.call(message, "remainCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.remainCount);
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.room.VGUserInfo.encode(message.userInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VGUserOperationAck message, length delimited. Does not implicitly {@link room.VGUserOperationAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserOperationAck
         * @static
         * @param {room.IVGUserOperationAck} message VGUserOperationAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserOperationAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserOperationAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserOperationAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserOperationAck} VGUserOperationAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserOperationAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserOperationAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.seatID = reader.int32();
                    break;
                case 3:
                    message.operation = $root.room.MJ_Operation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.remainCount = reader.int32();
                    break;
                case 5:
                    message.userInfo = $root.room.VGUserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserOperationAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserOperationAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserOperationAck} VGUserOperationAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserOperationAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserOperationAck message.
         * @function verify
         * @memberof room.VGUserOperationAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserOperationAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.seatID != null && message.hasOwnProperty("seatID"))
                if (!$util.isInteger(message.seatID))
                    return "seatID: integer expected";
            if (message.operation != null && message.hasOwnProperty("operation")) {
                var error = $root.room.MJ_Operation.verify(message.operation);
                if (error)
                    return "operation." + error;
            }
            if (message.remainCount != null && message.hasOwnProperty("remainCount"))
                if (!$util.isInteger(message.remainCount))
                    return "remainCount: integer expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.room.VGUserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        return VGUserOperationAck;
    })();

    room.VGUserManagedReq = (function() {

        /**
         * Properties of a VGUserManagedReq.
         * @memberof room
         * @interface IVGUserManagedReq
         * @property {number|null} [isManaged] VGUserManagedReq isManaged
         */

        /**
         * Constructs a new VGUserManagedReq.
         * @memberof room
         * @classdesc Represents a VGUserManagedReq.
         * @implements IVGUserManagedReq
         * @constructor
         * @param {room.IVGUserManagedReq=} [properties] Properties to set
         */
        function VGUserManagedReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserManagedReq isManaged.
         * @member {number} isManaged
         * @memberof room.VGUserManagedReq
         * @instance
         */
        VGUserManagedReq.prototype.isManaged = 0;

        /**
         * Creates a new VGUserManagedReq instance using the specified properties.
         * @function create
         * @memberof room.VGUserManagedReq
         * @static
         * @param {room.IVGUserManagedReq=} [properties] Properties to set
         * @returns {room.VGUserManagedReq} VGUserManagedReq instance
         */
        VGUserManagedReq.create = function create(properties) {
            return new VGUserManagedReq(properties);
        };

        /**
         * Encodes the specified VGUserManagedReq message. Does not implicitly {@link room.VGUserManagedReq.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserManagedReq
         * @static
         * @param {room.IVGUserManagedReq} message VGUserManagedReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserManagedReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isManaged != null && Object.hasOwnProperty.call(message, "isManaged"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isManaged);
            return writer;
        };

        /**
         * Encodes the specified VGUserManagedReq message, length delimited. Does not implicitly {@link room.VGUserManagedReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserManagedReq
         * @static
         * @param {room.IVGUserManagedReq} message VGUserManagedReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserManagedReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserManagedReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserManagedReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserManagedReq} VGUserManagedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserManagedReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserManagedReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isManaged = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserManagedReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserManagedReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserManagedReq} VGUserManagedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserManagedReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserManagedReq message.
         * @function verify
         * @memberof room.VGUserManagedReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserManagedReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isManaged != null && message.hasOwnProperty("isManaged"))
                if (!$util.isInteger(message.isManaged))
                    return "isManaged: integer expected";
            return null;
        };

        return VGUserManagedReq;
    })();

    room.VGUserManagedAck = (function() {

        /**
         * Properties of a VGUserManagedAck.
         * @memberof room
         * @interface IVGUserManagedAck
         * @property {number|null} [result] VGUserManagedAck result
         * @property {number|null} [isManaged] VGUserManagedAck isManaged
         */

        /**
         * Constructs a new VGUserManagedAck.
         * @memberof room
         * @classdesc Represents a VGUserManagedAck.
         * @implements IVGUserManagedAck
         * @constructor
         * @param {room.IVGUserManagedAck=} [properties] Properties to set
         */
        function VGUserManagedAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserManagedAck result.
         * @member {number} result
         * @memberof room.VGUserManagedAck
         * @instance
         */
        VGUserManagedAck.prototype.result = 0;

        /**
         * VGUserManagedAck isManaged.
         * @member {number} isManaged
         * @memberof room.VGUserManagedAck
         * @instance
         */
        VGUserManagedAck.prototype.isManaged = 0;

        /**
         * Creates a new VGUserManagedAck instance using the specified properties.
         * @function create
         * @memberof room.VGUserManagedAck
         * @static
         * @param {room.IVGUserManagedAck=} [properties] Properties to set
         * @returns {room.VGUserManagedAck} VGUserManagedAck instance
         */
        VGUserManagedAck.create = function create(properties) {
            return new VGUserManagedAck(properties);
        };

        /**
         * Encodes the specified VGUserManagedAck message. Does not implicitly {@link room.VGUserManagedAck.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserManagedAck
         * @static
         * @param {room.IVGUserManagedAck} message VGUserManagedAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserManagedAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.isManaged != null && Object.hasOwnProperty.call(message, "isManaged"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isManaged);
            return writer;
        };

        /**
         * Encodes the specified VGUserManagedAck message, length delimited. Does not implicitly {@link room.VGUserManagedAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserManagedAck
         * @static
         * @param {room.IVGUserManagedAck} message VGUserManagedAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserManagedAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserManagedAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserManagedAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserManagedAck} VGUserManagedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserManagedAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserManagedAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.isManaged = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserManagedAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserManagedAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserManagedAck} VGUserManagedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserManagedAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserManagedAck message.
         * @function verify
         * @memberof room.VGUserManagedAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserManagedAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.isManaged != null && message.hasOwnProperty("isManaged"))
                if (!$util.isInteger(message.isManaged))
                    return "isManaged: integer expected";
            return null;
        };

        return VGUserManagedAck;
    })();

    room.VGUserChatMsg = (function() {

        /**
         * Properties of a VGUserChatMsg.
         * @memberof room
         * @interface IVGUserChatMsg
         * @property {number|null} [roomID] VGUserChatMsg roomID
         * @property {string|null} [tableID] VGUserChatMsg tableID
         * @property {number|null} [seatID] VGUserChatMsg seatID
         * @property {string|null} [userName] VGUserChatMsg userName
         * @property {string|null} [msg] VGUserChatMsg msg
         */

        /**
         * Constructs a new VGUserChatMsg.
         * @memberof room
         * @classdesc Represents a VGUserChatMsg.
         * @implements IVGUserChatMsg
         * @constructor
         * @param {room.IVGUserChatMsg=} [properties] Properties to set
         */
        function VGUserChatMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VGUserChatMsg roomID.
         * @member {number} roomID
         * @memberof room.VGUserChatMsg
         * @instance
         */
        VGUserChatMsg.prototype.roomID = 0;

        /**
         * VGUserChatMsg tableID.
         * @member {string} tableID
         * @memberof room.VGUserChatMsg
         * @instance
         */
        VGUserChatMsg.prototype.tableID = "";

        /**
         * VGUserChatMsg seatID.
         * @member {number} seatID
         * @memberof room.VGUserChatMsg
         * @instance
         */
        VGUserChatMsg.prototype.seatID = 0;

        /**
         * VGUserChatMsg userName.
         * @member {string} userName
         * @memberof room.VGUserChatMsg
         * @instance
         */
        VGUserChatMsg.prototype.userName = "";

        /**
         * VGUserChatMsg msg.
         * @member {string} msg
         * @memberof room.VGUserChatMsg
         * @instance
         */
        VGUserChatMsg.prototype.msg = "";

        /**
         * Creates a new VGUserChatMsg instance using the specified properties.
         * @function create
         * @memberof room.VGUserChatMsg
         * @static
         * @param {room.IVGUserChatMsg=} [properties] Properties to set
         * @returns {room.VGUserChatMsg} VGUserChatMsg instance
         */
        VGUserChatMsg.create = function create(properties) {
            return new VGUserChatMsg(properties);
        };

        /**
         * Encodes the specified VGUserChatMsg message. Does not implicitly {@link room.VGUserChatMsg.verify|verify} messages.
         * @function encode
         * @memberof room.VGUserChatMsg
         * @static
         * @param {room.IVGUserChatMsg} message VGUserChatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserChatMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomID);
            if (message.tableID != null && Object.hasOwnProperty.call(message, "tableID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableID);
            if (message.seatID != null && Object.hasOwnProperty.call(message, "seatID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seatID);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userName);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified VGUserChatMsg message, length delimited. Does not implicitly {@link room.VGUserChatMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.VGUserChatMsg
         * @static
         * @param {room.IVGUserChatMsg} message VGUserChatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VGUserChatMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VGUserChatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof room.VGUserChatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.VGUserChatMsg} VGUserChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserChatMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.VGUserChatMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.int32();
                    break;
                case 2:
                    message.tableID = reader.string();
                    break;
                case 3:
                    message.seatID = reader.int32();
                    break;
                case 4:
                    message.userName = reader.string();
                    break;
                case 5:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VGUserChatMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.VGUserChatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.VGUserChatMsg} VGUserChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VGUserChatMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VGUserChatMsg message.
         * @function verify
         * @memberof room.VGUserChatMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VGUserChatMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.tableID != null && message.hasOwnProperty("tableID"))
                if (!$util.isString(message.tableID))
                    return "tableID: string expected";
            if (message.seatID != null && message.hasOwnProperty("seatID"))
                if (!$util.isInteger(message.seatID))
                    return "seatID: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        return VGUserChatMsg;
    })();

    room.MagicTilesReq = (function() {

        /**
         * Properties of a MagicTilesReq.
         * @memberof room
         * @interface IMagicTilesReq
         * @property {number|null} [tile] MagicTilesReq tile
         */

        /**
         * Constructs a new MagicTilesReq.
         * @memberof room
         * @classdesc Represents a MagicTilesReq.
         * @implements IMagicTilesReq
         * @constructor
         * @param {room.IMagicTilesReq=} [properties] Properties to set
         */
        function MagicTilesReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MagicTilesReq tile.
         * @member {number} tile
         * @memberof room.MagicTilesReq
         * @instance
         */
        MagicTilesReq.prototype.tile = 0;

        /**
         * Creates a new MagicTilesReq instance using the specified properties.
         * @function create
         * @memberof room.MagicTilesReq
         * @static
         * @param {room.IMagicTilesReq=} [properties] Properties to set
         * @returns {room.MagicTilesReq} MagicTilesReq instance
         */
        MagicTilesReq.create = function create(properties) {
            return new MagicTilesReq(properties);
        };

        /**
         * Encodes the specified MagicTilesReq message. Does not implicitly {@link room.MagicTilesReq.verify|verify} messages.
         * @function encode
         * @memberof room.MagicTilesReq
         * @static
         * @param {room.IMagicTilesReq} message MagicTilesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MagicTilesReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tile != null && Object.hasOwnProperty.call(message, "tile"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tile);
            return writer;
        };

        /**
         * Encodes the specified MagicTilesReq message, length delimited. Does not implicitly {@link room.MagicTilesReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MagicTilesReq
         * @static
         * @param {room.IMagicTilesReq} message MagicTilesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MagicTilesReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MagicTilesReq message from the specified reader or buffer.
         * @function decode
         * @memberof room.MagicTilesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MagicTilesReq} MagicTilesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MagicTilesReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MagicTilesReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tile = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MagicTilesReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MagicTilesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MagicTilesReq} MagicTilesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MagicTilesReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MagicTilesReq message.
         * @function verify
         * @memberof room.MagicTilesReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MagicTilesReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tile != null && message.hasOwnProperty("tile"))
                if (!$util.isInteger(message.tile))
                    return "tile: integer expected";
            return null;
        };

        return MagicTilesReq;
    })();

    room.MagicTilesAck = (function() {

        /**
         * Properties of a MagicTilesAck.
         * @memberof room
         * @interface IMagicTilesAck
         * @property {Array.<number>|null} [tiles] MagicTilesAck tiles
         */

        /**
         * Constructs a new MagicTilesAck.
         * @memberof room
         * @classdesc Represents a MagicTilesAck.
         * @implements IMagicTilesAck
         * @constructor
         * @param {room.IMagicTilesAck=} [properties] Properties to set
         */
        function MagicTilesAck(properties) {
            this.tiles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MagicTilesAck tiles.
         * @member {Array.<number>} tiles
         * @memberof room.MagicTilesAck
         * @instance
         */
        MagicTilesAck.prototype.tiles = $util.emptyArray;

        /**
         * Creates a new MagicTilesAck instance using the specified properties.
         * @function create
         * @memberof room.MagicTilesAck
         * @static
         * @param {room.IMagicTilesAck=} [properties] Properties to set
         * @returns {room.MagicTilesAck} MagicTilesAck instance
         */
        MagicTilesAck.create = function create(properties) {
            return new MagicTilesAck(properties);
        };

        /**
         * Encodes the specified MagicTilesAck message. Does not implicitly {@link room.MagicTilesAck.verify|verify} messages.
         * @function encode
         * @memberof room.MagicTilesAck
         * @static
         * @param {room.IMagicTilesAck} message MagicTilesAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MagicTilesAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tiles != null && message.tiles.length)
                for (var i = 0; i < message.tiles.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tiles[i]);
            return writer;
        };

        /**
         * Encodes the specified MagicTilesAck message, length delimited. Does not implicitly {@link room.MagicTilesAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.MagicTilesAck
         * @static
         * @param {room.IMagicTilesAck} message MagicTilesAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MagicTilesAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MagicTilesAck message from the specified reader or buffer.
         * @function decode
         * @memberof room.MagicTilesAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.MagicTilesAck} MagicTilesAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MagicTilesAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.MagicTilesAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tiles && message.tiles.length))
                        message.tiles = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.tiles.push(reader.int32());
                    } else
                        message.tiles.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MagicTilesAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.MagicTilesAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.MagicTilesAck} MagicTilesAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MagicTilesAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MagicTilesAck message.
         * @function verify
         * @memberof room.MagicTilesAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MagicTilesAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tiles != null && message.hasOwnProperty("tiles")) {
                if (!Array.isArray(message.tiles))
                    return "tiles: array expected";
                for (var i = 0; i < message.tiles.length; ++i)
                    if (!$util.isInteger(message.tiles[i]))
                        return "tiles: integer[] expected";
            }
            return null;
        };

        return MagicTilesAck;
    })();

    return room;
})();