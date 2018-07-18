/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.transit_realtime = (function() {

    /**
     * Namespace transit_realtime.
     * @exports transit_realtime
     * @namespace
     */
    var transit_realtime = {};

    transit_realtime.FeedMessage = (function() {

        /**
         * Properties of a FeedMessage.
         * @memberof transit_realtime
         * @interface IFeedMessage
         * @property {transit_realtime.IFeedHeader} header FeedMessage header
         * @property {Array.<transit_realtime.IFeedEntity>|null} [entity] FeedMessage entity
         */

        /**
         * Constructs a new FeedMessage.
         * @memberof transit_realtime
         * @classdesc Represents a FeedMessage.
         * @implements IFeedMessage
         * @constructor
         * @param {transit_realtime.IFeedMessage=} [properties] Properties to set
         */
        function FeedMessage(properties) {
            this.entity = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeedMessage header.
         * @member {transit_realtime.IFeedHeader} header
         * @memberof transit_realtime.FeedMessage
         * @instance
         */
        FeedMessage.prototype.header = null;

        /**
         * FeedMessage entity.
         * @member {Array.<transit_realtime.IFeedEntity>} entity
         * @memberof transit_realtime.FeedMessage
         * @instance
         */
        FeedMessage.prototype.entity = $util.emptyArray;

        /**
         * Creates a new FeedMessage instance using the specified properties.
         * @function create
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {transit_realtime.IFeedMessage=} [properties] Properties to set
         * @returns {transit_realtime.FeedMessage} FeedMessage instance
         */
        FeedMessage.create = function create(properties) {
            return new FeedMessage(properties);
        };

        /**
         * Encodes the specified FeedMessage message. Does not implicitly {@link transit_realtime.FeedMessage.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {transit_realtime.IFeedMessage} message FeedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeedMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.transit_realtime.FeedHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.entity != null && message.entity.length)
                for (var i = 0; i < message.entity.length; ++i)
                    $root.transit_realtime.FeedEntity.encode(message.entity[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeedMessage message, length delimited. Does not implicitly {@link transit_realtime.FeedMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {transit_realtime.IFeedMessage} message FeedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeedMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeedMessage message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.FeedMessage} FeedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeedMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.FeedMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.transit_realtime.FeedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.entity && message.entity.length))
                        message.entity = [];
                    message.entity.push($root.transit_realtime.FeedEntity.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("header"))
                throw $util.ProtocolError("missing required 'header'", { instance: message });
            return message;
        };

        /**
         * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.FeedMessage} FeedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeedMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeedMessage message.
         * @function verify
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeedMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.transit_realtime.FeedHeader.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.entity != null && message.hasOwnProperty("entity")) {
                if (!Array.isArray(message.entity))
                    return "entity: array expected";
                for (var i = 0; i < message.entity.length; ++i) {
                    var error = $root.transit_realtime.FeedEntity.verify(message.entity[i]);
                    if (error)
                        return "entity." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.FeedMessage} FeedMessage
         */
        FeedMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.FeedMessage)
                return object;
            var message = new $root.transit_realtime.FeedMessage();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".transit_realtime.FeedMessage.header: object expected");
                message.header = $root.transit_realtime.FeedHeader.fromObject(object.header);
            }
            if (object.entity) {
                if (!Array.isArray(object.entity))
                    throw TypeError(".transit_realtime.FeedMessage.entity: array expected");
                message.entity = [];
                for (var i = 0; i < object.entity.length; ++i) {
                    if (typeof object.entity[i] !== "object")
                        throw TypeError(".transit_realtime.FeedMessage.entity: object expected");
                    message.entity[i] = $root.transit_realtime.FeedEntity.fromObject(object.entity[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.FeedMessage
         * @static
         * @param {transit_realtime.FeedMessage} message FeedMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeedMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.entity = [];
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.transit_realtime.FeedHeader.toObject(message.header, options);
            if (message.entity && message.entity.length) {
                object.entity = [];
                for (var j = 0; j < message.entity.length; ++j)
                    object.entity[j] = $root.transit_realtime.FeedEntity.toObject(message.entity[j], options);
            }
            return object;
        };

        /**
         * Converts this FeedMessage to JSON.
         * @function toJSON
         * @memberof transit_realtime.FeedMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeedMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FeedMessage;
    })();

    transit_realtime.FeedHeader = (function() {

        /**
         * Properties of a FeedHeader.
         * @memberof transit_realtime
         * @interface IFeedHeader
         * @property {string} gtfsRealtimeVersion FeedHeader gtfsRealtimeVersion
         * @property {transit_realtime.FeedHeader.Incrementality|null} [incrementality] FeedHeader incrementality
         * @property {number|Long|null} [timestamp] FeedHeader timestamp
         */

        /**
         * Constructs a new FeedHeader.
         * @memberof transit_realtime
         * @classdesc Represents a FeedHeader.
         * @implements IFeedHeader
         * @constructor
         * @param {transit_realtime.IFeedHeader=} [properties] Properties to set
         */
        function FeedHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeedHeader gtfsRealtimeVersion.
         * @member {string} gtfsRealtimeVersion
         * @memberof transit_realtime.FeedHeader
         * @instance
         */
        FeedHeader.prototype.gtfsRealtimeVersion = "";

        /**
         * FeedHeader incrementality.
         * @member {transit_realtime.FeedHeader.Incrementality} incrementality
         * @memberof transit_realtime.FeedHeader
         * @instance
         */
        FeedHeader.prototype.incrementality = 0;

        /**
         * FeedHeader timestamp.
         * @member {number|Long} timestamp
         * @memberof transit_realtime.FeedHeader
         * @instance
         */
        FeedHeader.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new FeedHeader instance using the specified properties.
         * @function create
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {transit_realtime.IFeedHeader=} [properties] Properties to set
         * @returns {transit_realtime.FeedHeader} FeedHeader instance
         */
        FeedHeader.create = function create(properties) {
            return new FeedHeader(properties);
        };

        /**
         * Encodes the specified FeedHeader message. Does not implicitly {@link transit_realtime.FeedHeader.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {transit_realtime.IFeedHeader} message FeedHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeedHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.gtfsRealtimeVersion);
            if (message.incrementality != null && message.hasOwnProperty("incrementality"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.incrementality);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified FeedHeader message, length delimited. Does not implicitly {@link transit_realtime.FeedHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {transit_realtime.IFeedHeader} message FeedHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeedHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeedHeader message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.FeedHeader} FeedHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeedHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.FeedHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gtfsRealtimeVersion = reader.string();
                    break;
                case 2:
                    message.incrementality = reader.int32();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gtfsRealtimeVersion"))
                throw $util.ProtocolError("missing required 'gtfsRealtimeVersion'", { instance: message });
            return message;
        };

        /**
         * Decodes a FeedHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.FeedHeader} FeedHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeedHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeedHeader message.
         * @function verify
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeedHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.gtfsRealtimeVersion))
                return "gtfsRealtimeVersion: string expected";
            if (message.incrementality != null && message.hasOwnProperty("incrementality"))
                switch (message.incrementality) {
                default:
                    return "incrementality: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a FeedHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.FeedHeader} FeedHeader
         */
        FeedHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.FeedHeader)
                return object;
            var message = new $root.transit_realtime.FeedHeader();
            if (object.gtfsRealtimeVersion != null)
                message.gtfsRealtimeVersion = String(object.gtfsRealtimeVersion);
            switch (object.incrementality) {
            case "FULL_DATASET":
            case 0:
                message.incrementality = 0;
                break;
            case "DIFFERENTIAL":
            case 1:
                message.incrementality = 1;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a FeedHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.FeedHeader
         * @static
         * @param {transit_realtime.FeedHeader} message FeedHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeedHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gtfsRealtimeVersion = "";
                object.incrementality = options.enums === String ? "FULL_DATASET" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.gtfsRealtimeVersion != null && message.hasOwnProperty("gtfsRealtimeVersion"))
                object.gtfsRealtimeVersion = message.gtfsRealtimeVersion;
            if (message.incrementality != null && message.hasOwnProperty("incrementality"))
                object.incrementality = options.enums === String ? $root.transit_realtime.FeedHeader.Incrementality[message.incrementality] : message.incrementality;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };

        /**
         * Converts this FeedHeader to JSON.
         * @function toJSON
         * @memberof transit_realtime.FeedHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeedHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Incrementality enum.
         * @name transit_realtime.FeedHeader.Incrementality
         * @enum {string}
         * @property {number} FULL_DATASET=0 FULL_DATASET value
         * @property {number} DIFFERENTIAL=1 DIFFERENTIAL value
         */
        FeedHeader.Incrementality = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FULL_DATASET"] = 0;
            values[valuesById[1] = "DIFFERENTIAL"] = 1;
            return values;
        })();

        return FeedHeader;
    })();

    transit_realtime.FeedEntity = (function() {

        /**
         * Properties of a FeedEntity.
         * @memberof transit_realtime
         * @interface IFeedEntity
         * @property {string} id FeedEntity id
         * @property {boolean|null} [isDeleted] FeedEntity isDeleted
         * @property {transit_realtime.ITripUpdate|null} [tripUpdate] FeedEntity tripUpdate
         * @property {transit_realtime.IVehiclePosition|null} [vehicle] FeedEntity vehicle
         * @property {transit_realtime.IAlert|null} [alert] FeedEntity alert
         */

        /**
         * Constructs a new FeedEntity.
         * @memberof transit_realtime
         * @classdesc Represents a FeedEntity.
         * @implements IFeedEntity
         * @constructor
         * @param {transit_realtime.IFeedEntity=} [properties] Properties to set
         */
        function FeedEntity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeedEntity id.
         * @member {string} id
         * @memberof transit_realtime.FeedEntity
         * @instance
         */
        FeedEntity.prototype.id = "";

        /**
         * FeedEntity isDeleted.
         * @member {boolean} isDeleted
         * @memberof transit_realtime.FeedEntity
         * @instance
         */
        FeedEntity.prototype.isDeleted = false;

        /**
         * FeedEntity tripUpdate.
         * @member {transit_realtime.ITripUpdate|null|undefined} tripUpdate
         * @memberof transit_realtime.FeedEntity
         * @instance
         */
        FeedEntity.prototype.tripUpdate = null;

        /**
         * FeedEntity vehicle.
         * @member {transit_realtime.IVehiclePosition|null|undefined} vehicle
         * @memberof transit_realtime.FeedEntity
         * @instance
         */
        FeedEntity.prototype.vehicle = null;

        /**
         * FeedEntity alert.
         * @member {transit_realtime.IAlert|null|undefined} alert
         * @memberof transit_realtime.FeedEntity
         * @instance
         */
        FeedEntity.prototype.alert = null;

        /**
         * Creates a new FeedEntity instance using the specified properties.
         * @function create
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {transit_realtime.IFeedEntity=} [properties] Properties to set
         * @returns {transit_realtime.FeedEntity} FeedEntity instance
         */
        FeedEntity.create = function create(properties) {
            return new FeedEntity(properties);
        };

        /**
         * Encodes the specified FeedEntity message. Does not implicitly {@link transit_realtime.FeedEntity.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {transit_realtime.IFeedEntity} message FeedEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeedEntity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isDeleted);
            if (message.tripUpdate != null && message.hasOwnProperty("tripUpdate"))
                $root.transit_realtime.TripUpdate.encode(message.tripUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                $root.transit_realtime.VehiclePosition.encode(message.vehicle, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.alert != null && message.hasOwnProperty("alert"))
                $root.transit_realtime.Alert.encode(message.alert, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeedEntity message, length delimited. Does not implicitly {@link transit_realtime.FeedEntity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {transit_realtime.IFeedEntity} message FeedEntity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeedEntity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeedEntity message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.FeedEntity} FeedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeedEntity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.FeedEntity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.isDeleted = reader.bool();
                    break;
                case 3:
                    message.tripUpdate = $root.transit_realtime.TripUpdate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.vehicle = $root.transit_realtime.VehiclePosition.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.alert = $root.transit_realtime.Alert.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a FeedEntity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.FeedEntity} FeedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeedEntity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeedEntity message.
         * @function verify
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeedEntity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                if (typeof message.isDeleted !== "boolean")
                    return "isDeleted: boolean expected";
            if (message.tripUpdate != null && message.hasOwnProperty("tripUpdate")) {
                var error = $root.transit_realtime.TripUpdate.verify(message.tripUpdate);
                if (error)
                    return "tripUpdate." + error;
            }
            if (message.vehicle != null && message.hasOwnProperty("vehicle")) {
                var error = $root.transit_realtime.VehiclePosition.verify(message.vehicle);
                if (error)
                    return "vehicle." + error;
            }
            if (message.alert != null && message.hasOwnProperty("alert")) {
                var error = $root.transit_realtime.Alert.verify(message.alert);
                if (error)
                    return "alert." + error;
            }
            return null;
        };

        /**
         * Creates a FeedEntity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.FeedEntity} FeedEntity
         */
        FeedEntity.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.FeedEntity)
                return object;
            var message = new $root.transit_realtime.FeedEntity();
            if (object.id != null)
                message.id = String(object.id);
            if (object.isDeleted != null)
                message.isDeleted = Boolean(object.isDeleted);
            if (object.tripUpdate != null) {
                if (typeof object.tripUpdate !== "object")
                    throw TypeError(".transit_realtime.FeedEntity.tripUpdate: object expected");
                message.tripUpdate = $root.transit_realtime.TripUpdate.fromObject(object.tripUpdate);
            }
            if (object.vehicle != null) {
                if (typeof object.vehicle !== "object")
                    throw TypeError(".transit_realtime.FeedEntity.vehicle: object expected");
                message.vehicle = $root.transit_realtime.VehiclePosition.fromObject(object.vehicle);
            }
            if (object.alert != null) {
                if (typeof object.alert !== "object")
                    throw TypeError(".transit_realtime.FeedEntity.alert: object expected");
                message.alert = $root.transit_realtime.Alert.fromObject(object.alert);
            }
            return message;
        };

        /**
         * Creates a plain object from a FeedEntity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.FeedEntity
         * @static
         * @param {transit_realtime.FeedEntity} message FeedEntity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeedEntity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.isDeleted = false;
                object.tripUpdate = null;
                object.vehicle = null;
                object.alert = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                object.isDeleted = message.isDeleted;
            if (message.tripUpdate != null && message.hasOwnProperty("tripUpdate"))
                object.tripUpdate = $root.transit_realtime.TripUpdate.toObject(message.tripUpdate, options);
            if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                object.vehicle = $root.transit_realtime.VehiclePosition.toObject(message.vehicle, options);
            if (message.alert != null && message.hasOwnProperty("alert"))
                object.alert = $root.transit_realtime.Alert.toObject(message.alert, options);
            return object;
        };

        /**
         * Converts this FeedEntity to JSON.
         * @function toJSON
         * @memberof transit_realtime.FeedEntity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeedEntity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FeedEntity;
    })();

    transit_realtime.TripUpdate = (function() {

        /**
         * Properties of a TripUpdate.
         * @memberof transit_realtime
         * @interface ITripUpdate
         * @property {transit_realtime.ITripDescriptor} trip TripUpdate trip
         * @property {transit_realtime.IVehicleDescriptor|null} [vehicle] TripUpdate vehicle
         * @property {Array.<transit_realtime.TripUpdate.IStopTimeUpdate>|null} [stopTimeUpdate] TripUpdate stopTimeUpdate
         * @property {number|Long|null} [timestamp] TripUpdate timestamp
         * @property {number|null} [delay] TripUpdate delay
         */

        /**
         * Constructs a new TripUpdate.
         * @memberof transit_realtime
         * @classdesc Represents a TripUpdate.
         * @implements ITripUpdate
         * @constructor
         * @param {transit_realtime.ITripUpdate=} [properties] Properties to set
         */
        function TripUpdate(properties) {
            this.stopTimeUpdate = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TripUpdate trip.
         * @member {transit_realtime.ITripDescriptor} trip
         * @memberof transit_realtime.TripUpdate
         * @instance
         */
        TripUpdate.prototype.trip = null;

        /**
         * TripUpdate vehicle.
         * @member {transit_realtime.IVehicleDescriptor|null|undefined} vehicle
         * @memberof transit_realtime.TripUpdate
         * @instance
         */
        TripUpdate.prototype.vehicle = null;

        /**
         * TripUpdate stopTimeUpdate.
         * @member {Array.<transit_realtime.TripUpdate.IStopTimeUpdate>} stopTimeUpdate
         * @memberof transit_realtime.TripUpdate
         * @instance
         */
        TripUpdate.prototype.stopTimeUpdate = $util.emptyArray;

        /**
         * TripUpdate timestamp.
         * @member {number|Long} timestamp
         * @memberof transit_realtime.TripUpdate
         * @instance
         */
        TripUpdate.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TripUpdate delay.
         * @member {number} delay
         * @memberof transit_realtime.TripUpdate
         * @instance
         */
        TripUpdate.prototype.delay = 0;

        /**
         * Creates a new TripUpdate instance using the specified properties.
         * @function create
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {transit_realtime.ITripUpdate=} [properties] Properties to set
         * @returns {transit_realtime.TripUpdate} TripUpdate instance
         */
        TripUpdate.create = function create(properties) {
            return new TripUpdate(properties);
        };

        /**
         * Encodes the specified TripUpdate message. Does not implicitly {@link transit_realtime.TripUpdate.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {transit_realtime.ITripUpdate} message TripUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.transit_realtime.TripDescriptor.encode(message.trip, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.stopTimeUpdate != null && message.stopTimeUpdate.length)
                for (var i = 0; i < message.stopTimeUpdate.length; ++i)
                    $root.transit_realtime.TripUpdate.StopTimeUpdate.encode(message.stopTimeUpdate[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                $root.transit_realtime.VehicleDescriptor.encode(message.vehicle, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
            if (message.delay != null && message.hasOwnProperty("delay"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.delay);
            return writer;
        };

        /**
         * Encodes the specified TripUpdate message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {transit_realtime.ITripUpdate} message TripUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TripUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.TripUpdate} TripUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.trip = $root.transit_realtime.TripDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vehicle = $root.transit_realtime.VehicleDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.stopTimeUpdate && message.stopTimeUpdate.length))
                        message.stopTimeUpdate = [];
                    message.stopTimeUpdate.push($root.transit_realtime.TripUpdate.StopTimeUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.timestamp = reader.uint64();
                    break;
                case 5:
                    message.delay = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("trip"))
                throw $util.ProtocolError("missing required 'trip'", { instance: message });
            return message;
        };

        /**
         * Decodes a TripUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.TripUpdate} TripUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TripUpdate message.
         * @function verify
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TripUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.transit_realtime.TripDescriptor.verify(message.trip);
                if (error)
                    return "trip." + error;
            }
            if (message.vehicle != null && message.hasOwnProperty("vehicle")) {
                var error = $root.transit_realtime.VehicleDescriptor.verify(message.vehicle);
                if (error)
                    return "vehicle." + error;
            }
            if (message.stopTimeUpdate != null && message.hasOwnProperty("stopTimeUpdate")) {
                if (!Array.isArray(message.stopTimeUpdate))
                    return "stopTimeUpdate: array expected";
                for (var i = 0; i < message.stopTimeUpdate.length; ++i) {
                    var error = $root.transit_realtime.TripUpdate.StopTimeUpdate.verify(message.stopTimeUpdate[i]);
                    if (error)
                        return "stopTimeUpdate." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.delay != null && message.hasOwnProperty("delay"))
                if (!$util.isInteger(message.delay))
                    return "delay: integer expected";
            return null;
        };

        /**
         * Creates a TripUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.TripUpdate} TripUpdate
         */
        TripUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.TripUpdate)
                return object;
            var message = new $root.transit_realtime.TripUpdate();
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".transit_realtime.TripUpdate.trip: object expected");
                message.trip = $root.transit_realtime.TripDescriptor.fromObject(object.trip);
            }
            if (object.vehicle != null) {
                if (typeof object.vehicle !== "object")
                    throw TypeError(".transit_realtime.TripUpdate.vehicle: object expected");
                message.vehicle = $root.transit_realtime.VehicleDescriptor.fromObject(object.vehicle);
            }
            if (object.stopTimeUpdate) {
                if (!Array.isArray(object.stopTimeUpdate))
                    throw TypeError(".transit_realtime.TripUpdate.stopTimeUpdate: array expected");
                message.stopTimeUpdate = [];
                for (var i = 0; i < object.stopTimeUpdate.length; ++i) {
                    if (typeof object.stopTimeUpdate[i] !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.stopTimeUpdate: object expected");
                    message.stopTimeUpdate[i] = $root.transit_realtime.TripUpdate.StopTimeUpdate.fromObject(object.stopTimeUpdate[i]);
                }
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.delay != null)
                message.delay = object.delay | 0;
            return message;
        };

        /**
         * Creates a plain object from a TripUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.TripUpdate
         * @static
         * @param {transit_realtime.TripUpdate} message TripUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TripUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.stopTimeUpdate = [];
            if (options.defaults) {
                object.trip = null;
                object.vehicle = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.delay = 0;
            }
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.transit_realtime.TripDescriptor.toObject(message.trip, options);
            if (message.stopTimeUpdate && message.stopTimeUpdate.length) {
                object.stopTimeUpdate = [];
                for (var j = 0; j < message.stopTimeUpdate.length; ++j)
                    object.stopTimeUpdate[j] = $root.transit_realtime.TripUpdate.StopTimeUpdate.toObject(message.stopTimeUpdate[j], options);
            }
            if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                object.vehicle = $root.transit_realtime.VehicleDescriptor.toObject(message.vehicle, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.delay != null && message.hasOwnProperty("delay"))
                object.delay = message.delay;
            return object;
        };

        /**
         * Converts this TripUpdate to JSON.
         * @function toJSON
         * @memberof transit_realtime.TripUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TripUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TripUpdate.StopTimeEvent = (function() {

            /**
             * Properties of a StopTimeEvent.
             * @memberof transit_realtime.TripUpdate
             * @interface IStopTimeEvent
             * @property {number|null} [delay] StopTimeEvent delay
             * @property {number|Long|null} [time] StopTimeEvent time
             * @property {number|null} [uncertainty] StopTimeEvent uncertainty
             */

            /**
             * Constructs a new StopTimeEvent.
             * @memberof transit_realtime.TripUpdate
             * @classdesc Represents a StopTimeEvent.
             * @implements IStopTimeEvent
             * @constructor
             * @param {transit_realtime.TripUpdate.IStopTimeEvent=} [properties] Properties to set
             */
            function StopTimeEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StopTimeEvent delay.
             * @member {number} delay
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @instance
             */
            StopTimeEvent.prototype.delay = 0;

            /**
             * StopTimeEvent time.
             * @member {number|Long} time
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @instance
             */
            StopTimeEvent.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * StopTimeEvent uncertainty.
             * @member {number} uncertainty
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @instance
             */
            StopTimeEvent.prototype.uncertainty = 0;

            /**
             * Creates a new StopTimeEvent instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {transit_realtime.TripUpdate.IStopTimeEvent=} [properties] Properties to set
             * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent instance
             */
            StopTimeEvent.create = function create(properties) {
                return new StopTimeEvent(properties);
            };

            /**
             * Encodes the specified StopTimeEvent message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeEvent.verify|verify} messages.
             * @function encode
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {transit_realtime.TripUpdate.IStopTimeEvent} message StopTimeEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopTimeEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.delay != null && message.hasOwnProperty("delay"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.delay);
                if (message.time != null && message.hasOwnProperty("time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
                if (message.uncertainty != null && message.hasOwnProperty("uncertainty"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uncertainty);
                return writer;
            };

            /**
             * Encodes the specified StopTimeEvent message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {transit_realtime.TripUpdate.IStopTimeEvent} message StopTimeEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopTimeEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StopTimeEvent message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopTimeEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.StopTimeEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.delay = reader.int32();
                        break;
                    case 2:
                        message.time = reader.int64();
                        break;
                    case 3:
                        message.uncertainty = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StopTimeEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopTimeEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StopTimeEvent message.
             * @function verify
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StopTimeEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.delay != null && message.hasOwnProperty("delay"))
                    if (!$util.isInteger(message.delay))
                        return "delay: integer expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.uncertainty != null && message.hasOwnProperty("uncertainty"))
                    if (!$util.isInteger(message.uncertainty))
                        return "uncertainty: integer expected";
                return null;
            };

            /**
             * Creates a StopTimeEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TripUpdate.StopTimeEvent} StopTimeEvent
             */
            StopTimeEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TripUpdate.StopTimeEvent)
                    return object;
                var message = new $root.transit_realtime.TripUpdate.StopTimeEvent();
                if (object.delay != null)
                    message.delay = object.delay | 0;
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
                if (object.uncertainty != null)
                    message.uncertainty = object.uncertainty | 0;
                return message;
            };

            /**
             * Creates a plain object from a StopTimeEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @static
             * @param {transit_realtime.TripUpdate.StopTimeEvent} message StopTimeEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StopTimeEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.delay = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.uncertainty = 0;
                }
                if (message.delay != null && message.hasOwnProperty("delay"))
                    object.delay = message.delay;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
                if (message.uncertainty != null && message.hasOwnProperty("uncertainty"))
                    object.uncertainty = message.uncertainty;
                return object;
            };

            /**
             * Converts this StopTimeEvent to JSON.
             * @function toJSON
             * @memberof transit_realtime.TripUpdate.StopTimeEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StopTimeEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StopTimeEvent;
        })();

        TripUpdate.StopTimeUpdate = (function() {

            /**
             * Properties of a StopTimeUpdate.
             * @memberof transit_realtime.TripUpdate
             * @interface IStopTimeUpdate
             * @property {number|null} [stopSequence] StopTimeUpdate stopSequence
             * @property {string|null} [stopId] StopTimeUpdate stopId
             * @property {transit_realtime.TripUpdate.IStopTimeEvent|null} [arrival] StopTimeUpdate arrival
             * @property {transit_realtime.TripUpdate.IStopTimeEvent|null} [departure] StopTimeUpdate departure
             * @property {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship|null} [scheduleRelationship] StopTimeUpdate scheduleRelationship
             */

            /**
             * Constructs a new StopTimeUpdate.
             * @memberof transit_realtime.TripUpdate
             * @classdesc Represents a StopTimeUpdate.
             * @implements IStopTimeUpdate
             * @constructor
             * @param {transit_realtime.TripUpdate.IStopTimeUpdate=} [properties] Properties to set
             */
            function StopTimeUpdate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StopTimeUpdate stopSequence.
             * @member {number} stopSequence
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.stopSequence = 0;

            /**
             * StopTimeUpdate stopId.
             * @member {string} stopId
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.stopId = "";

            /**
             * StopTimeUpdate arrival.
             * @member {transit_realtime.TripUpdate.IStopTimeEvent|null|undefined} arrival
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.arrival = null;

            /**
             * StopTimeUpdate departure.
             * @member {transit_realtime.TripUpdate.IStopTimeEvent|null|undefined} departure
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.departure = null;

            /**
             * StopTimeUpdate scheduleRelationship.
             * @member {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship} scheduleRelationship
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.scheduleRelationship = 0;

            /**
             * Creates a new StopTimeUpdate instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {transit_realtime.TripUpdate.IStopTimeUpdate=} [properties] Properties to set
             * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate instance
             */
            StopTimeUpdate.create = function create(properties) {
                return new StopTimeUpdate(properties);
            };

            /**
             * Encodes the specified StopTimeUpdate message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.verify|verify} messages.
             * @function encode
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {transit_realtime.TripUpdate.IStopTimeUpdate} message StopTimeUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopTimeUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.stopSequence);
                if (message.arrival != null && message.hasOwnProperty("arrival"))
                    $root.transit_realtime.TripUpdate.StopTimeEvent.encode(message.arrival, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.departure != null && message.hasOwnProperty("departure"))
                    $root.transit_realtime.TripUpdate.StopTimeEvent.encode(message.departure, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.stopId);
                if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.scheduleRelationship);
                return writer;
            };

            /**
             * Encodes the specified StopTimeUpdate message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {transit_realtime.TripUpdate.IStopTimeUpdate} message StopTimeUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StopTimeUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StopTimeUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopTimeUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.StopTimeUpdate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.stopSequence = reader.uint32();
                        break;
                    case 4:
                        message.stopId = reader.string();
                        break;
                    case 2:
                        message.arrival = $root.transit_realtime.TripUpdate.StopTimeEvent.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.departure = $root.transit_realtime.TripUpdate.StopTimeEvent.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.scheduleRelationship = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StopTimeUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StopTimeUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StopTimeUpdate message.
             * @function verify
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StopTimeUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                    if (!$util.isInteger(message.stopSequence))
                        return "stopSequence: integer expected";
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    if (!$util.isString(message.stopId))
                        return "stopId: string expected";
                if (message.arrival != null && message.hasOwnProperty("arrival")) {
                    var error = $root.transit_realtime.TripUpdate.StopTimeEvent.verify(message.arrival);
                    if (error)
                        return "arrival." + error;
                }
                if (message.departure != null && message.hasOwnProperty("departure")) {
                    var error = $root.transit_realtime.TripUpdate.StopTimeEvent.verify(message.departure);
                    if (error)
                        return "departure." + error;
                }
                if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                    switch (message.scheduleRelationship) {
                    default:
                        return "scheduleRelationship: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a StopTimeUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TripUpdate.StopTimeUpdate} StopTimeUpdate
             */
            StopTimeUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TripUpdate.StopTimeUpdate)
                    return object;
                var message = new $root.transit_realtime.TripUpdate.StopTimeUpdate();
                if (object.stopSequence != null)
                    message.stopSequence = object.stopSequence >>> 0;
                if (object.stopId != null)
                    message.stopId = String(object.stopId);
                if (object.arrival != null) {
                    if (typeof object.arrival !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate.arrival: object expected");
                    message.arrival = $root.transit_realtime.TripUpdate.StopTimeEvent.fromObject(object.arrival);
                }
                if (object.departure != null) {
                    if (typeof object.departure !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate.departure: object expected");
                    message.departure = $root.transit_realtime.TripUpdate.StopTimeEvent.fromObject(object.departure);
                }
                switch (object.scheduleRelationship) {
                case "SCHEDULED":
                case 0:
                    message.scheduleRelationship = 0;
                    break;
                case "SKIPPED":
                case 1:
                    message.scheduleRelationship = 1;
                    break;
                case "NO_DATA":
                case 2:
                    message.scheduleRelationship = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a StopTimeUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @static
             * @param {transit_realtime.TripUpdate.StopTimeUpdate} message StopTimeUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StopTimeUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stopSequence = 0;
                    object.arrival = null;
                    object.departure = null;
                    object.stopId = "";
                    object.scheduleRelationship = options.enums === String ? "SCHEDULED" : 0;
                }
                if (message.stopSequence != null && message.hasOwnProperty("stopSequence"))
                    object.stopSequence = message.stopSequence;
                if (message.arrival != null && message.hasOwnProperty("arrival"))
                    object.arrival = $root.transit_realtime.TripUpdate.StopTimeEvent.toObject(message.arrival, options);
                if (message.departure != null && message.hasOwnProperty("departure"))
                    object.departure = $root.transit_realtime.TripUpdate.StopTimeEvent.toObject(message.departure, options);
                if (message.stopId != null && message.hasOwnProperty("stopId"))
                    object.stopId = message.stopId;
                if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                    object.scheduleRelationship = options.enums === String ? $root.transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship[message.scheduleRelationship] : message.scheduleRelationship;
                return object;
            };

            /**
             * Converts this StopTimeUpdate to JSON.
             * @function toJSON
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StopTimeUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * ScheduleRelationship enum.
             * @name transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship
             * @enum {string}
             * @property {number} SCHEDULED=0 SCHEDULED value
             * @property {number} SKIPPED=1 SKIPPED value
             * @property {number} NO_DATA=2 NO_DATA value
             */
            StopTimeUpdate.ScheduleRelationship = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SCHEDULED"] = 0;
                values[valuesById[1] = "SKIPPED"] = 1;
                values[valuesById[2] = "NO_DATA"] = 2;
                return values;
            })();

            return StopTimeUpdate;
        })();

        return TripUpdate;
    })();

    transit_realtime.VehiclePosition = (function() {

        /**
         * Properties of a VehiclePosition.
         * @memberof transit_realtime
         * @interface IVehiclePosition
         * @property {transit_realtime.ITripDescriptor|null} [trip] VehiclePosition trip
         * @property {transit_realtime.IVehicleDescriptor|null} [vehicle] VehiclePosition vehicle
         * @property {transit_realtime.IPosition|null} [position] VehiclePosition position
         * @property {number|null} [currentStopSequence] VehiclePosition currentStopSequence
         * @property {string|null} [stopId] VehiclePosition stopId
         * @property {transit_realtime.VehiclePosition.VehicleStopStatus|null} [currentStatus] VehiclePosition currentStatus
         * @property {number|Long|null} [timestamp] VehiclePosition timestamp
         * @property {transit_realtime.VehiclePosition.CongestionLevel|null} [congestionLevel] VehiclePosition congestionLevel
         * @property {transit_realtime.VehiclePosition.OccupancyStatus|null} [occupancyStatus] VehiclePosition occupancyStatus
         */

        /**
         * Constructs a new VehiclePosition.
         * @memberof transit_realtime
         * @classdesc Represents a VehiclePosition.
         * @implements IVehiclePosition
         * @constructor
         * @param {transit_realtime.IVehiclePosition=} [properties] Properties to set
         */
        function VehiclePosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VehiclePosition trip.
         * @member {transit_realtime.ITripDescriptor|null|undefined} trip
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.trip = null;

        /**
         * VehiclePosition vehicle.
         * @member {transit_realtime.IVehicleDescriptor|null|undefined} vehicle
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.vehicle = null;

        /**
         * VehiclePosition position.
         * @member {transit_realtime.IPosition|null|undefined} position
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.position = null;

        /**
         * VehiclePosition currentStopSequence.
         * @member {number} currentStopSequence
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.currentStopSequence = 0;

        /**
         * VehiclePosition stopId.
         * @member {string} stopId
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.stopId = "";

        /**
         * VehiclePosition currentStatus.
         * @member {transit_realtime.VehiclePosition.VehicleStopStatus} currentStatus
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.currentStatus = 2;

        /**
         * VehiclePosition timestamp.
         * @member {number|Long} timestamp
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * VehiclePosition congestionLevel.
         * @member {transit_realtime.VehiclePosition.CongestionLevel} congestionLevel
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.congestionLevel = 0;

        /**
         * VehiclePosition occupancyStatus.
         * @member {transit_realtime.VehiclePosition.OccupancyStatus} occupancyStatus
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.occupancyStatus = 0;

        /**
         * Creates a new VehiclePosition instance using the specified properties.
         * @function create
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {transit_realtime.IVehiclePosition=} [properties] Properties to set
         * @returns {transit_realtime.VehiclePosition} VehiclePosition instance
         */
        VehiclePosition.create = function create(properties) {
            return new VehiclePosition(properties);
        };

        /**
         * Encodes the specified VehiclePosition message. Does not implicitly {@link transit_realtime.VehiclePosition.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {transit_realtime.IVehiclePosition} message VehiclePosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehiclePosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trip != null && message.hasOwnProperty("trip"))
                $root.transit_realtime.TripDescriptor.encode(message.trip, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.position != null && message.hasOwnProperty("position"))
                $root.transit_realtime.Position.encode(message.position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.currentStopSequence != null && message.hasOwnProperty("currentStopSequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.currentStopSequence);
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.currentStatus);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.timestamp);
            if (message.congestionLevel != null && message.hasOwnProperty("congestionLevel"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.congestionLevel);
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.stopId);
            if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                $root.transit_realtime.VehicleDescriptor.encode(message.vehicle, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.occupancyStatus);
            return writer;
        };

        /**
         * Encodes the specified VehiclePosition message, length delimited. Does not implicitly {@link transit_realtime.VehiclePosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {transit_realtime.IVehiclePosition} message VehiclePosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehiclePosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VehiclePosition message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.VehiclePosition} VehiclePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehiclePosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.VehiclePosition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.trip = $root.transit_realtime.TripDescriptor.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.vehicle = $root.transit_realtime.VehicleDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.position = $root.transit_realtime.Position.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.currentStopSequence = reader.uint32();
                    break;
                case 7:
                    message.stopId = reader.string();
                    break;
                case 4:
                    message.currentStatus = reader.int32();
                    break;
                case 5:
                    message.timestamp = reader.uint64();
                    break;
                case 6:
                    message.congestionLevel = reader.int32();
                    break;
                case 9:
                    message.occupancyStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VehiclePosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.VehiclePosition} VehiclePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehiclePosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VehiclePosition message.
         * @function verify
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VehiclePosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trip != null && message.hasOwnProperty("trip")) {
                var error = $root.transit_realtime.TripDescriptor.verify(message.trip);
                if (error)
                    return "trip." + error;
            }
            if (message.vehicle != null && message.hasOwnProperty("vehicle")) {
                var error = $root.transit_realtime.VehicleDescriptor.verify(message.vehicle);
                if (error)
                    return "vehicle." + error;
            }
            if (message.position != null && message.hasOwnProperty("position")) {
                var error = $root.transit_realtime.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.currentStopSequence != null && message.hasOwnProperty("currentStopSequence"))
                if (!$util.isInteger(message.currentStopSequence))
                    return "currentStopSequence: integer expected";
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                if (!$util.isString(message.stopId))
                    return "stopId: string expected";
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                switch (message.currentStatus) {
                default:
                    return "currentStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.congestionLevel != null && message.hasOwnProperty("congestionLevel"))
                switch (message.congestionLevel) {
                default:
                    return "congestionLevel: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                switch (message.occupancyStatus) {
                default:
                    return "occupancyStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };

        /**
         * Creates a VehiclePosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.VehiclePosition} VehiclePosition
         */
        VehiclePosition.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.VehiclePosition)
                return object;
            var message = new $root.transit_realtime.VehiclePosition();
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".transit_realtime.VehiclePosition.trip: object expected");
                message.trip = $root.transit_realtime.TripDescriptor.fromObject(object.trip);
            }
            if (object.vehicle != null) {
                if (typeof object.vehicle !== "object")
                    throw TypeError(".transit_realtime.VehiclePosition.vehicle: object expected");
                message.vehicle = $root.transit_realtime.VehicleDescriptor.fromObject(object.vehicle);
            }
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".transit_realtime.VehiclePosition.position: object expected");
                message.position = $root.transit_realtime.Position.fromObject(object.position);
            }
            if (object.currentStopSequence != null)
                message.currentStopSequence = object.currentStopSequence >>> 0;
            if (object.stopId != null)
                message.stopId = String(object.stopId);
            switch (object.currentStatus) {
            case "INCOMING_AT":
            case 0:
                message.currentStatus = 0;
                break;
            case "STOPPED_AT":
            case 1:
                message.currentStatus = 1;
                break;
            case "IN_TRANSIT_TO":
            case 2:
                message.currentStatus = 2;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            switch (object.congestionLevel) {
            case "UNKNOWN_CONGESTION_LEVEL":
            case 0:
                message.congestionLevel = 0;
                break;
            case "RUNNING_SMOOTHLY":
            case 1:
                message.congestionLevel = 1;
                break;
            case "STOP_AND_GO":
            case 2:
                message.congestionLevel = 2;
                break;
            case "CONGESTION":
            case 3:
                message.congestionLevel = 3;
                break;
            case "SEVERE_CONGESTION":
            case 4:
                message.congestionLevel = 4;
                break;
            }
            switch (object.occupancyStatus) {
            case "EMPTY":
            case 0:
                message.occupancyStatus = 0;
                break;
            case "MANY_SEATS_AVAILABLE":
            case 1:
                message.occupancyStatus = 1;
                break;
            case "FEW_SEATS_AVAILABLE":
            case 2:
                message.occupancyStatus = 2;
                break;
            case "STANDING_ROOM_ONLY":
            case 3:
                message.occupancyStatus = 3;
                break;
            case "CRUSHED_STANDING_ROOM_ONLY":
            case 4:
                message.occupancyStatus = 4;
                break;
            case "FULL":
            case 5:
                message.occupancyStatus = 5;
                break;
            case "NOT_ACCEPTING_PASSENGERS":
            case 6:
                message.occupancyStatus = 6;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a VehiclePosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.VehiclePosition
         * @static
         * @param {transit_realtime.VehiclePosition} message VehiclePosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VehiclePosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.trip = null;
                object.position = null;
                object.currentStopSequence = 0;
                object.currentStatus = options.enums === String ? "IN_TRANSIT_TO" : 2;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.congestionLevel = options.enums === String ? "UNKNOWN_CONGESTION_LEVEL" : 0;
                object.stopId = "";
                object.vehicle = null;
                object.occupancyStatus = options.enums === String ? "EMPTY" : 0;
            }
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.transit_realtime.TripDescriptor.toObject(message.trip, options);
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.transit_realtime.Position.toObject(message.position, options);
            if (message.currentStopSequence != null && message.hasOwnProperty("currentStopSequence"))
                object.currentStopSequence = message.currentStopSequence;
            if (message.currentStatus != null && message.hasOwnProperty("currentStatus"))
                object.currentStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.VehicleStopStatus[message.currentStatus] : message.currentStatus;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.congestionLevel != null && message.hasOwnProperty("congestionLevel"))
                object.congestionLevel = options.enums === String ? $root.transit_realtime.VehiclePosition.CongestionLevel[message.congestionLevel] : message.congestionLevel;
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                object.stopId = message.stopId;
            if (message.vehicle != null && message.hasOwnProperty("vehicle"))
                object.vehicle = $root.transit_realtime.VehicleDescriptor.toObject(message.vehicle, options);
            if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                object.occupancyStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.OccupancyStatus[message.occupancyStatus] : message.occupancyStatus;
            return object;
        };

        /**
         * Converts this VehiclePosition to JSON.
         * @function toJSON
         * @memberof transit_realtime.VehiclePosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VehiclePosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * VehicleStopStatus enum.
         * @name transit_realtime.VehiclePosition.VehicleStopStatus
         * @enum {string}
         * @property {number} INCOMING_AT=0 INCOMING_AT value
         * @property {number} STOPPED_AT=1 STOPPED_AT value
         * @property {number} IN_TRANSIT_TO=2 IN_TRANSIT_TO value
         */
        VehiclePosition.VehicleStopStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INCOMING_AT"] = 0;
            values[valuesById[1] = "STOPPED_AT"] = 1;
            values[valuesById[2] = "IN_TRANSIT_TO"] = 2;
            return values;
        })();

        /**
         * CongestionLevel enum.
         * @name transit_realtime.VehiclePosition.CongestionLevel
         * @enum {string}
         * @property {number} UNKNOWN_CONGESTION_LEVEL=0 UNKNOWN_CONGESTION_LEVEL value
         * @property {number} RUNNING_SMOOTHLY=1 RUNNING_SMOOTHLY value
         * @property {number} STOP_AND_GO=2 STOP_AND_GO value
         * @property {number} CONGESTION=3 CONGESTION value
         * @property {number} SEVERE_CONGESTION=4 SEVERE_CONGESTION value
         */
        VehiclePosition.CongestionLevel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_CONGESTION_LEVEL"] = 0;
            values[valuesById[1] = "RUNNING_SMOOTHLY"] = 1;
            values[valuesById[2] = "STOP_AND_GO"] = 2;
            values[valuesById[3] = "CONGESTION"] = 3;
            values[valuesById[4] = "SEVERE_CONGESTION"] = 4;
            return values;
        })();

        /**
         * OccupancyStatus enum.
         * @name transit_realtime.VehiclePosition.OccupancyStatus
         * @enum {string}
         * @property {number} EMPTY=0 EMPTY value
         * @property {number} MANY_SEATS_AVAILABLE=1 MANY_SEATS_AVAILABLE value
         * @property {number} FEW_SEATS_AVAILABLE=2 FEW_SEATS_AVAILABLE value
         * @property {number} STANDING_ROOM_ONLY=3 STANDING_ROOM_ONLY value
         * @property {number} CRUSHED_STANDING_ROOM_ONLY=4 CRUSHED_STANDING_ROOM_ONLY value
         * @property {number} FULL=5 FULL value
         * @property {number} NOT_ACCEPTING_PASSENGERS=6 NOT_ACCEPTING_PASSENGERS value
         */
        VehiclePosition.OccupancyStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EMPTY"] = 0;
            values[valuesById[1] = "MANY_SEATS_AVAILABLE"] = 1;
            values[valuesById[2] = "FEW_SEATS_AVAILABLE"] = 2;
            values[valuesById[3] = "STANDING_ROOM_ONLY"] = 3;
            values[valuesById[4] = "CRUSHED_STANDING_ROOM_ONLY"] = 4;
            values[valuesById[5] = "FULL"] = 5;
            values[valuesById[6] = "NOT_ACCEPTING_PASSENGERS"] = 6;
            return values;
        })();

        return VehiclePosition;
    })();

    transit_realtime.Alert = (function() {

        /**
         * Properties of an Alert.
         * @memberof transit_realtime
         * @interface IAlert
         * @property {Array.<transit_realtime.ITimeRange>|null} [activePeriod] Alert activePeriod
         * @property {Array.<transit_realtime.IEntitySelector>|null} [informedEntity] Alert informedEntity
         * @property {transit_realtime.Alert.Cause|null} [cause] Alert cause
         * @property {transit_realtime.Alert.Effect|null} [effect] Alert effect
         * @property {transit_realtime.ITranslatedString|null} [url] Alert url
         * @property {transit_realtime.ITranslatedString|null} [headerText] Alert headerText
         * @property {transit_realtime.ITranslatedString|null} [descriptionText] Alert descriptionText
         */

        /**
         * Constructs a new Alert.
         * @memberof transit_realtime
         * @classdesc Represents an Alert.
         * @implements IAlert
         * @constructor
         * @param {transit_realtime.IAlert=} [properties] Properties to set
         */
        function Alert(properties) {
            this.activePeriod = [];
            this.informedEntity = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Alert activePeriod.
         * @member {Array.<transit_realtime.ITimeRange>} activePeriod
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.activePeriod = $util.emptyArray;

        /**
         * Alert informedEntity.
         * @member {Array.<transit_realtime.IEntitySelector>} informedEntity
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.informedEntity = $util.emptyArray;

        /**
         * Alert cause.
         * @member {transit_realtime.Alert.Cause} cause
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.cause = 1;

        /**
         * Alert effect.
         * @member {transit_realtime.Alert.Effect} effect
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.effect = 8;

        /**
         * Alert url.
         * @member {transit_realtime.ITranslatedString|null|undefined} url
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.url = null;

        /**
         * Alert headerText.
         * @member {transit_realtime.ITranslatedString|null|undefined} headerText
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.headerText = null;

        /**
         * Alert descriptionText.
         * @member {transit_realtime.ITranslatedString|null|undefined} descriptionText
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.descriptionText = null;

        /**
         * Creates a new Alert instance using the specified properties.
         * @function create
         * @memberof transit_realtime.Alert
         * @static
         * @param {transit_realtime.IAlert=} [properties] Properties to set
         * @returns {transit_realtime.Alert} Alert instance
         */
        Alert.create = function create(properties) {
            return new Alert(properties);
        };

        /**
         * Encodes the specified Alert message. Does not implicitly {@link transit_realtime.Alert.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.Alert
         * @static
         * @param {transit_realtime.IAlert} message Alert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Alert.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.activePeriod != null && message.activePeriod.length)
                for (var i = 0; i < message.activePeriod.length; ++i)
                    $root.transit_realtime.TimeRange.encode(message.activePeriod[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.informedEntity != null && message.informedEntity.length)
                for (var i = 0; i < message.informedEntity.length; ++i)
                    $root.transit_realtime.EntitySelector.encode(message.informedEntity[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.cause != null && message.hasOwnProperty("cause"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cause);
            if (message.effect != null && message.hasOwnProperty("effect"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.effect);
            if (message.url != null && message.hasOwnProperty("url"))
                $root.transit_realtime.TranslatedString.encode(message.url, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.headerText != null && message.hasOwnProperty("headerText"))
                $root.transit_realtime.TranslatedString.encode(message.headerText, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                $root.transit_realtime.TranslatedString.encode(message.descriptionText, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Alert message, length delimited. Does not implicitly {@link transit_realtime.Alert.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.Alert
         * @static
         * @param {transit_realtime.IAlert} message Alert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Alert.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Alert message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.Alert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.Alert} Alert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Alert.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.Alert();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.activePeriod && message.activePeriod.length))
                        message.activePeriod = [];
                    message.activePeriod.push($root.transit_realtime.TimeRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.informedEntity && message.informedEntity.length))
                        message.informedEntity = [];
                    message.informedEntity.push($root.transit_realtime.EntitySelector.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.cause = reader.int32();
                    break;
                case 7:
                    message.effect = reader.int32();
                    break;
                case 8:
                    message.url = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.headerText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.descriptionText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Alert message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.Alert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.Alert} Alert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Alert.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Alert message.
         * @function verify
         * @memberof transit_realtime.Alert
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Alert.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.activePeriod != null && message.hasOwnProperty("activePeriod")) {
                if (!Array.isArray(message.activePeriod))
                    return "activePeriod: array expected";
                for (var i = 0; i < message.activePeriod.length; ++i) {
                    var error = $root.transit_realtime.TimeRange.verify(message.activePeriod[i]);
                    if (error)
                        return "activePeriod." + error;
                }
            }
            if (message.informedEntity != null && message.hasOwnProperty("informedEntity")) {
                if (!Array.isArray(message.informedEntity))
                    return "informedEntity: array expected";
                for (var i = 0; i < message.informedEntity.length; ++i) {
                    var error = $root.transit_realtime.EntitySelector.verify(message.informedEntity[i]);
                    if (error)
                        return "informedEntity." + error;
                }
            }
            if (message.cause != null && message.hasOwnProperty("cause"))
                switch (message.cause) {
                default:
                    return "cause: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
            if (message.effect != null && message.hasOwnProperty("effect"))
                switch (message.effect) {
                default:
                    return "effect: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.url != null && message.hasOwnProperty("url")) {
                var error = $root.transit_realtime.TranslatedString.verify(message.url);
                if (error)
                    return "url." + error;
            }
            if (message.headerText != null && message.hasOwnProperty("headerText")) {
                var error = $root.transit_realtime.TranslatedString.verify(message.headerText);
                if (error)
                    return "headerText." + error;
            }
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText")) {
                var error = $root.transit_realtime.TranslatedString.verify(message.descriptionText);
                if (error)
                    return "descriptionText." + error;
            }
            return null;
        };

        /**
         * Creates an Alert message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.Alert
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.Alert} Alert
         */
        Alert.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.Alert)
                return object;
            var message = new $root.transit_realtime.Alert();
            if (object.activePeriod) {
                if (!Array.isArray(object.activePeriod))
                    throw TypeError(".transit_realtime.Alert.activePeriod: array expected");
                message.activePeriod = [];
                for (var i = 0; i < object.activePeriod.length; ++i) {
                    if (typeof object.activePeriod[i] !== "object")
                        throw TypeError(".transit_realtime.Alert.activePeriod: object expected");
                    message.activePeriod[i] = $root.transit_realtime.TimeRange.fromObject(object.activePeriod[i]);
                }
            }
            if (object.informedEntity) {
                if (!Array.isArray(object.informedEntity))
                    throw TypeError(".transit_realtime.Alert.informedEntity: array expected");
                message.informedEntity = [];
                for (var i = 0; i < object.informedEntity.length; ++i) {
                    if (typeof object.informedEntity[i] !== "object")
                        throw TypeError(".transit_realtime.Alert.informedEntity: object expected");
                    message.informedEntity[i] = $root.transit_realtime.EntitySelector.fromObject(object.informedEntity[i]);
                }
            }
            switch (object.cause) {
            case "UNKNOWN_CAUSE":
            case 1:
                message.cause = 1;
                break;
            case "OTHER_CAUSE":
            case 2:
                message.cause = 2;
                break;
            case "TECHNICAL_PROBLEM":
            case 3:
                message.cause = 3;
                break;
            case "STRIKE":
            case 4:
                message.cause = 4;
                break;
            case "DEMONSTRATION":
            case 5:
                message.cause = 5;
                break;
            case "ACCIDENT":
            case 6:
                message.cause = 6;
                break;
            case "HOLIDAY":
            case 7:
                message.cause = 7;
                break;
            case "WEATHER":
            case 8:
                message.cause = 8;
                break;
            case "MAINTENANCE":
            case 9:
                message.cause = 9;
                break;
            case "CONSTRUCTION":
            case 10:
                message.cause = 10;
                break;
            case "POLICE_ACTIVITY":
            case 11:
                message.cause = 11;
                break;
            case "MEDICAL_EMERGENCY":
            case 12:
                message.cause = 12;
                break;
            }
            switch (object.effect) {
            case "NO_SERVICE":
            case 1:
                message.effect = 1;
                break;
            case "REDUCED_SERVICE":
            case 2:
                message.effect = 2;
                break;
            case "SIGNIFICANT_DELAYS":
            case 3:
                message.effect = 3;
                break;
            case "DETOUR":
            case 4:
                message.effect = 4;
                break;
            case "ADDITIONAL_SERVICE":
            case 5:
                message.effect = 5;
                break;
            case "MODIFIED_SERVICE":
            case 6:
                message.effect = 6;
                break;
            case "OTHER_EFFECT":
            case 7:
                message.effect = 7;
                break;
            case "UNKNOWN_EFFECT":
            case 8:
                message.effect = 8;
                break;
            case "STOP_MOVED":
            case 9:
                message.effect = 9;
                break;
            }
            if (object.url != null) {
                if (typeof object.url !== "object")
                    throw TypeError(".transit_realtime.Alert.url: object expected");
                message.url = $root.transit_realtime.TranslatedString.fromObject(object.url);
            }
            if (object.headerText != null) {
                if (typeof object.headerText !== "object")
                    throw TypeError(".transit_realtime.Alert.headerText: object expected");
                message.headerText = $root.transit_realtime.TranslatedString.fromObject(object.headerText);
            }
            if (object.descriptionText != null) {
                if (typeof object.descriptionText !== "object")
                    throw TypeError(".transit_realtime.Alert.descriptionText: object expected");
                message.descriptionText = $root.transit_realtime.TranslatedString.fromObject(object.descriptionText);
            }
            return message;
        };

        /**
         * Creates a plain object from an Alert message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.Alert
         * @static
         * @param {transit_realtime.Alert} message Alert
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Alert.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.activePeriod = [];
                object.informedEntity = [];
            }
            if (options.defaults) {
                object.cause = options.enums === String ? "UNKNOWN_CAUSE" : 1;
                object.effect = options.enums === String ? "UNKNOWN_EFFECT" : 8;
                object.url = null;
                object.headerText = null;
                object.descriptionText = null;
            }
            if (message.activePeriod && message.activePeriod.length) {
                object.activePeriod = [];
                for (var j = 0; j < message.activePeriod.length; ++j)
                    object.activePeriod[j] = $root.transit_realtime.TimeRange.toObject(message.activePeriod[j], options);
            }
            if (message.informedEntity && message.informedEntity.length) {
                object.informedEntity = [];
                for (var j = 0; j < message.informedEntity.length; ++j)
                    object.informedEntity[j] = $root.transit_realtime.EntitySelector.toObject(message.informedEntity[j], options);
            }
            if (message.cause != null && message.hasOwnProperty("cause"))
                object.cause = options.enums === String ? $root.transit_realtime.Alert.Cause[message.cause] : message.cause;
            if (message.effect != null && message.hasOwnProperty("effect"))
                object.effect = options.enums === String ? $root.transit_realtime.Alert.Effect[message.effect] : message.effect;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = $root.transit_realtime.TranslatedString.toObject(message.url, options);
            if (message.headerText != null && message.hasOwnProperty("headerText"))
                object.headerText = $root.transit_realtime.TranslatedString.toObject(message.headerText, options);
            if (message.descriptionText != null && message.hasOwnProperty("descriptionText"))
                object.descriptionText = $root.transit_realtime.TranslatedString.toObject(message.descriptionText, options);
            return object;
        };

        /**
         * Converts this Alert to JSON.
         * @function toJSON
         * @memberof transit_realtime.Alert
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Alert.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Cause enum.
         * @name transit_realtime.Alert.Cause
         * @enum {string}
         * @property {number} UNKNOWN_CAUSE=1 UNKNOWN_CAUSE value
         * @property {number} OTHER_CAUSE=2 OTHER_CAUSE value
         * @property {number} TECHNICAL_PROBLEM=3 TECHNICAL_PROBLEM value
         * @property {number} STRIKE=4 STRIKE value
         * @property {number} DEMONSTRATION=5 DEMONSTRATION value
         * @property {number} ACCIDENT=6 ACCIDENT value
         * @property {number} HOLIDAY=7 HOLIDAY value
         * @property {number} WEATHER=8 WEATHER value
         * @property {number} MAINTENANCE=9 MAINTENANCE value
         * @property {number} CONSTRUCTION=10 CONSTRUCTION value
         * @property {number} POLICE_ACTIVITY=11 POLICE_ACTIVITY value
         * @property {number} MEDICAL_EMERGENCY=12 MEDICAL_EMERGENCY value
         */
        Alert.Cause = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "UNKNOWN_CAUSE"] = 1;
            values[valuesById[2] = "OTHER_CAUSE"] = 2;
            values[valuesById[3] = "TECHNICAL_PROBLEM"] = 3;
            values[valuesById[4] = "STRIKE"] = 4;
            values[valuesById[5] = "DEMONSTRATION"] = 5;
            values[valuesById[6] = "ACCIDENT"] = 6;
            values[valuesById[7] = "HOLIDAY"] = 7;
            values[valuesById[8] = "WEATHER"] = 8;
            values[valuesById[9] = "MAINTENANCE"] = 9;
            values[valuesById[10] = "CONSTRUCTION"] = 10;
            values[valuesById[11] = "POLICE_ACTIVITY"] = 11;
            values[valuesById[12] = "MEDICAL_EMERGENCY"] = 12;
            return values;
        })();

        /**
         * Effect enum.
         * @name transit_realtime.Alert.Effect
         * @enum {string}
         * @property {number} NO_SERVICE=1 NO_SERVICE value
         * @property {number} REDUCED_SERVICE=2 REDUCED_SERVICE value
         * @property {number} SIGNIFICANT_DELAYS=3 SIGNIFICANT_DELAYS value
         * @property {number} DETOUR=4 DETOUR value
         * @property {number} ADDITIONAL_SERVICE=5 ADDITIONAL_SERVICE value
         * @property {number} MODIFIED_SERVICE=6 MODIFIED_SERVICE value
         * @property {number} OTHER_EFFECT=7 OTHER_EFFECT value
         * @property {number} UNKNOWN_EFFECT=8 UNKNOWN_EFFECT value
         * @property {number} STOP_MOVED=9 STOP_MOVED value
         */
        Alert.Effect = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "NO_SERVICE"] = 1;
            values[valuesById[2] = "REDUCED_SERVICE"] = 2;
            values[valuesById[3] = "SIGNIFICANT_DELAYS"] = 3;
            values[valuesById[4] = "DETOUR"] = 4;
            values[valuesById[5] = "ADDITIONAL_SERVICE"] = 5;
            values[valuesById[6] = "MODIFIED_SERVICE"] = 6;
            values[valuesById[7] = "OTHER_EFFECT"] = 7;
            values[valuesById[8] = "UNKNOWN_EFFECT"] = 8;
            values[valuesById[9] = "STOP_MOVED"] = 9;
            return values;
        })();

        return Alert;
    })();

    transit_realtime.TimeRange = (function() {

        /**
         * Properties of a TimeRange.
         * @memberof transit_realtime
         * @interface ITimeRange
         * @property {number|Long|null} [start] TimeRange start
         * @property {number|Long|null} [end] TimeRange end
         */

        /**
         * Constructs a new TimeRange.
         * @memberof transit_realtime
         * @classdesc Represents a TimeRange.
         * @implements ITimeRange
         * @constructor
         * @param {transit_realtime.ITimeRange=} [properties] Properties to set
         */
        function TimeRange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeRange start.
         * @member {number|Long} start
         * @memberof transit_realtime.TimeRange
         * @instance
         */
        TimeRange.prototype.start = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TimeRange end.
         * @member {number|Long} end
         * @memberof transit_realtime.TimeRange
         * @instance
         */
        TimeRange.prototype.end = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TimeRange instance using the specified properties.
         * @function create
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {transit_realtime.ITimeRange=} [properties] Properties to set
         * @returns {transit_realtime.TimeRange} TimeRange instance
         */
        TimeRange.create = function create(properties) {
            return new TimeRange(properties);
        };

        /**
         * Encodes the specified TimeRange message. Does not implicitly {@link transit_realtime.TimeRange.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {transit_realtime.ITimeRange} message TimeRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeRange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && message.hasOwnProperty("start"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.start);
            if (message.end != null && message.hasOwnProperty("end"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.end);
            return writer;
        };

        /**
         * Encodes the specified TimeRange message, length delimited. Does not implicitly {@link transit_realtime.TimeRange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {transit_realtime.ITimeRange} message TimeRange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeRange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeRange message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.TimeRange} TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeRange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TimeRange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.start = reader.uint64();
                    break;
                case 2:
                    message.end = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimeRange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.TimeRange} TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeRange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeRange message.
         * @function verify
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeRange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start) && !(message.start && $util.isInteger(message.start.low) && $util.isInteger(message.start.high)))
                    return "start: integer|Long expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                    return "end: integer|Long expected";
            return null;
        };

        /**
         * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.TimeRange} TimeRange
         */
        TimeRange.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.TimeRange)
                return object;
            var message = new $root.transit_realtime.TimeRange();
            if (object.start != null)
                if ($util.Long)
                    (message.start = $util.Long.fromValue(object.start)).unsigned = true;
                else if (typeof object.start === "string")
                    message.start = parseInt(object.start, 10);
                else if (typeof object.start === "number")
                    message.start = object.start;
                else if (typeof object.start === "object")
                    message.start = new $util.LongBits(object.start.low >>> 0, object.start.high >>> 0).toNumber(true);
            if (object.end != null)
                if ($util.Long)
                    (message.end = $util.Long.fromValue(object.end)).unsigned = true;
                else if (typeof object.end === "string")
                    message.end = parseInt(object.end, 10);
                else if (typeof object.end === "number")
                    message.end = object.end;
                else if (typeof object.end === "object")
                    message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.TimeRange
         * @static
         * @param {transit_realtime.TimeRange} message TimeRange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeRange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.start = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.end = options.longs === String ? "0" : 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                if (typeof message.start === "number")
                    object.start = options.longs === String ? String(message.start) : message.start;
                else
                    object.start = options.longs === String ? $util.Long.prototype.toString.call(message.start) : options.longs === Number ? new $util.LongBits(message.start.low >>> 0, message.start.high >>> 0).toNumber(true) : message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                if (typeof message.end === "number")
                    object.end = options.longs === String ? String(message.end) : message.end;
                else
                    object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber(true) : message.end;
            return object;
        };

        /**
         * Converts this TimeRange to JSON.
         * @function toJSON
         * @memberof transit_realtime.TimeRange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeRange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeRange;
    })();

    transit_realtime.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof transit_realtime
         * @interface IPosition
         * @property {number} latitude Position latitude
         * @property {number} longitude Position longitude
         * @property {number|null} [bearing] Position bearing
         * @property {number|null} [odometer] Position odometer
         * @property {number|null} [speed] Position speed
         */

        /**
         * Constructs a new Position.
         * @memberof transit_realtime
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {transit_realtime.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position latitude.
         * @member {number} latitude
         * @memberof transit_realtime.Position
         * @instance
         */
        Position.prototype.latitude = 0;

        /**
         * Position longitude.
         * @member {number} longitude
         * @memberof transit_realtime.Position
         * @instance
         */
        Position.prototype.longitude = 0;

        /**
         * Position bearing.
         * @member {number} bearing
         * @memberof transit_realtime.Position
         * @instance
         */
        Position.prototype.bearing = 0;

        /**
         * Position odometer.
         * @member {number} odometer
         * @memberof transit_realtime.Position
         * @instance
         */
        Position.prototype.odometer = 0;

        /**
         * Position speed.
         * @member {number} speed
         * @memberof transit_realtime.Position
         * @instance
         */
        Position.prototype.speed = 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof transit_realtime.Position
         * @static
         * @param {transit_realtime.IPosition=} [properties] Properties to set
         * @returns {transit_realtime.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link transit_realtime.Position.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.Position
         * @static
         * @param {transit_realtime.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
            if (message.bearing != null && message.hasOwnProperty("bearing"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.bearing);
            if (message.odometer != null && message.hasOwnProperty("odometer"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.odometer);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.speed);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link transit_realtime.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.Position
         * @static
         * @param {transit_realtime.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.Position();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.latitude = reader.float();
                    break;
                case 2:
                    message.longitude = reader.float();
                    break;
                case 3:
                    message.bearing = reader.float();
                    break;
                case 4:
                    message.odometer = reader.double();
                    break;
                case 5:
                    message.speed = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("latitude"))
                throw $util.ProtocolError("missing required 'latitude'", { instance: message });
            if (!message.hasOwnProperty("longitude"))
                throw $util.ProtocolError("missing required 'longitude'", { instance: message });
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof transit_realtime.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.latitude !== "number")
                return "latitude: number expected";
            if (typeof message.longitude !== "number")
                return "longitude: number expected";
            if (message.bearing != null && message.hasOwnProperty("bearing"))
                if (typeof message.bearing !== "number")
                    return "bearing: number expected";
            if (message.odometer != null && message.hasOwnProperty("odometer"))
                if (typeof message.odometer !== "number")
                    return "odometer: number expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (typeof message.speed !== "number")
                    return "speed: number expected";
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.Position)
                return object;
            var message = new $root.transit_realtime.Position();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.bearing != null)
                message.bearing = Number(object.bearing);
            if (object.odometer != null)
                message.odometer = Number(object.odometer);
            if (object.speed != null)
                message.speed = Number(object.speed);
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.Position
         * @static
         * @param {transit_realtime.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
                object.bearing = 0;
                object.odometer = 0;
                object.speed = 0;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.bearing != null && message.hasOwnProperty("bearing"))
                object.bearing = options.json && !isFinite(message.bearing) ? String(message.bearing) : message.bearing;
            if (message.odometer != null && message.hasOwnProperty("odometer"))
                object.odometer = options.json && !isFinite(message.odometer) ? String(message.odometer) : message.odometer;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof transit_realtime.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Position;
    })();

    transit_realtime.TripDescriptor = (function() {

        /**
         * Properties of a TripDescriptor.
         * @memberof transit_realtime
         * @interface ITripDescriptor
         * @property {string|null} [tripId] TripDescriptor tripId
         * @property {string|null} [routeId] TripDescriptor routeId
         * @property {number|null} [directionId] TripDescriptor directionId
         * @property {string|null} [startTime] TripDescriptor startTime
         * @property {string|null} [startDate] TripDescriptor startDate
         * @property {transit_realtime.TripDescriptor.ScheduleRelationship|null} [scheduleRelationship] TripDescriptor scheduleRelationship
         */

        /**
         * Constructs a new TripDescriptor.
         * @memberof transit_realtime
         * @classdesc Represents a TripDescriptor.
         * @implements ITripDescriptor
         * @constructor
         * @param {transit_realtime.ITripDescriptor=} [properties] Properties to set
         */
        function TripDescriptor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TripDescriptor tripId.
         * @member {string} tripId
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype.tripId = "";

        /**
         * TripDescriptor routeId.
         * @member {string} routeId
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype.routeId = "";

        /**
         * TripDescriptor directionId.
         * @member {number} directionId
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype.directionId = 0;

        /**
         * TripDescriptor startTime.
         * @member {string} startTime
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype.startTime = "";

        /**
         * TripDescriptor startDate.
         * @member {string} startDate
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype.startDate = "";

        /**
         * TripDescriptor scheduleRelationship.
         * @member {transit_realtime.TripDescriptor.ScheduleRelationship} scheduleRelationship
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype.scheduleRelationship = 0;

        /**
         * Creates a new TripDescriptor instance using the specified properties.
         * @function create
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {transit_realtime.ITripDescriptor=} [properties] Properties to set
         * @returns {transit_realtime.TripDescriptor} TripDescriptor instance
         */
        TripDescriptor.create = function create(properties) {
            return new TripDescriptor(properties);
        };

        /**
         * Encodes the specified TripDescriptor message. Does not implicitly {@link transit_realtime.TripDescriptor.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {transit_realtime.ITripDescriptor} message TripDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripDescriptor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tripId);
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.startTime);
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.startDate);
            if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.scheduleRelationship);
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.routeId);
            if (message.directionId != null && message.hasOwnProperty("directionId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.directionId);
            return writer;
        };

        /**
         * Encodes the specified TripDescriptor message, length delimited. Does not implicitly {@link transit_realtime.TripDescriptor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {transit_realtime.ITripDescriptor} message TripDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TripDescriptor message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.TripDescriptor} TripDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripDescriptor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripDescriptor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tripId = reader.string();
                    break;
                case 5:
                    message.routeId = reader.string();
                    break;
                case 6:
                    message.directionId = reader.uint32();
                    break;
                case 2:
                    message.startTime = reader.string();
                    break;
                case 3:
                    message.startDate = reader.string();
                    break;
                case 4:
                    message.scheduleRelationship = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TripDescriptor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.TripDescriptor} TripDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripDescriptor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TripDescriptor message.
         * @function verify
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TripDescriptor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                if (!$util.isString(message.tripId))
                    return "tripId: string expected";
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                if (!$util.isString(message.routeId))
                    return "routeId: string expected";
            if (message.directionId != null && message.hasOwnProperty("directionId"))
                if (!$util.isInteger(message.directionId))
                    return "directionId: integer expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isString(message.startTime))
                    return "startTime: string expected";
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                if (!$util.isString(message.startDate))
                    return "startDate: string expected";
            if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                switch (message.scheduleRelationship) {
                default:
                    return "scheduleRelationship: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a TripDescriptor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.TripDescriptor} TripDescriptor
         */
        TripDescriptor.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.TripDescriptor)
                return object;
            var message = new $root.transit_realtime.TripDescriptor();
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.directionId != null)
                message.directionId = object.directionId >>> 0;
            if (object.startTime != null)
                message.startTime = String(object.startTime);
            if (object.startDate != null)
                message.startDate = String(object.startDate);
            switch (object.scheduleRelationship) {
            case "SCHEDULED":
            case 0:
                message.scheduleRelationship = 0;
                break;
            case "ADDED":
            case 1:
                message.scheduleRelationship = 1;
                break;
            case "UNSCHEDULED":
            case 2:
                message.scheduleRelationship = 2;
                break;
            case "CANCELED":
            case 3:
                message.scheduleRelationship = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a TripDescriptor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.TripDescriptor
         * @static
         * @param {transit_realtime.TripDescriptor} message TripDescriptor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TripDescriptor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tripId = "";
                object.startTime = "";
                object.startDate = "";
                object.scheduleRelationship = options.enums === String ? "SCHEDULED" : 0;
                object.routeId = "";
                object.directionId = 0;
            }
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                object.startTime = message.startTime;
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = message.startDate;
            if (message.scheduleRelationship != null && message.hasOwnProperty("scheduleRelationship"))
                object.scheduleRelationship = options.enums === String ? $root.transit_realtime.TripDescriptor.ScheduleRelationship[message.scheduleRelationship] : message.scheduleRelationship;
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.directionId != null && message.hasOwnProperty("directionId"))
                object.directionId = message.directionId;
            return object;
        };

        /**
         * Converts this TripDescriptor to JSON.
         * @function toJSON
         * @memberof transit_realtime.TripDescriptor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TripDescriptor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ScheduleRelationship enum.
         * @name transit_realtime.TripDescriptor.ScheduleRelationship
         * @enum {string}
         * @property {number} SCHEDULED=0 SCHEDULED value
         * @property {number} ADDED=1 ADDED value
         * @property {number} UNSCHEDULED=2 UNSCHEDULED value
         * @property {number} CANCELED=3 CANCELED value
         */
        TripDescriptor.ScheduleRelationship = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SCHEDULED"] = 0;
            values[valuesById[1] = "ADDED"] = 1;
            values[valuesById[2] = "UNSCHEDULED"] = 2;
            values[valuesById[3] = "CANCELED"] = 3;
            return values;
        })();

        return TripDescriptor;
    })();

    transit_realtime.VehicleDescriptor = (function() {

        /**
         * Properties of a VehicleDescriptor.
         * @memberof transit_realtime
         * @interface IVehicleDescriptor
         * @property {string|null} [id] VehicleDescriptor id
         * @property {string|null} [label] VehicleDescriptor label
         * @property {string|null} [licensePlate] VehicleDescriptor licensePlate
         */

        /**
         * Constructs a new VehicleDescriptor.
         * @memberof transit_realtime
         * @classdesc Represents a VehicleDescriptor.
         * @implements IVehicleDescriptor
         * @constructor
         * @param {transit_realtime.IVehicleDescriptor=} [properties] Properties to set
         */
        function VehicleDescriptor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VehicleDescriptor id.
         * @member {string} id
         * @memberof transit_realtime.VehicleDescriptor
         * @instance
         */
        VehicleDescriptor.prototype.id = "";

        /**
         * VehicleDescriptor label.
         * @member {string} label
         * @memberof transit_realtime.VehicleDescriptor
         * @instance
         */
        VehicleDescriptor.prototype.label = "";

        /**
         * VehicleDescriptor licensePlate.
         * @member {string} licensePlate
         * @memberof transit_realtime.VehicleDescriptor
         * @instance
         */
        VehicleDescriptor.prototype.licensePlate = "";

        /**
         * Creates a new VehicleDescriptor instance using the specified properties.
         * @function create
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {transit_realtime.IVehicleDescriptor=} [properties] Properties to set
         * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor instance
         */
        VehicleDescriptor.create = function create(properties) {
            return new VehicleDescriptor(properties);
        };

        /**
         * Encodes the specified VehicleDescriptor message. Does not implicitly {@link transit_realtime.VehicleDescriptor.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {transit_realtime.IVehicleDescriptor} message VehicleDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehicleDescriptor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.label != null && message.hasOwnProperty("label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.licensePlate != null && message.hasOwnProperty("licensePlate"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.licensePlate);
            return writer;
        };

        /**
         * Encodes the specified VehicleDescriptor message, length delimited. Does not implicitly {@link transit_realtime.VehicleDescriptor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {transit_realtime.IVehicleDescriptor} message VehicleDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VehicleDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VehicleDescriptor message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehicleDescriptor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.VehicleDescriptor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                case 3:
                    message.licensePlate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VehicleDescriptor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VehicleDescriptor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VehicleDescriptor message.
         * @function verify
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VehicleDescriptor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.licensePlate != null && message.hasOwnProperty("licensePlate"))
                if (!$util.isString(message.licensePlate))
                    return "licensePlate: string expected";
            return null;
        };

        /**
         * Creates a VehicleDescriptor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.VehicleDescriptor} VehicleDescriptor
         */
        VehicleDescriptor.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.VehicleDescriptor)
                return object;
            var message = new $root.transit_realtime.VehicleDescriptor();
            if (object.id != null)
                message.id = String(object.id);
            if (object.label != null)
                message.label = String(object.label);
            if (object.licensePlate != null)
                message.licensePlate = String(object.licensePlate);
            return message;
        };

        /**
         * Creates a plain object from a VehicleDescriptor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.VehicleDescriptor
         * @static
         * @param {transit_realtime.VehicleDescriptor} message VehicleDescriptor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VehicleDescriptor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.label = "";
                object.licensePlate = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.licensePlate != null && message.hasOwnProperty("licensePlate"))
                object.licensePlate = message.licensePlate;
            return object;
        };

        /**
         * Converts this VehicleDescriptor to JSON.
         * @function toJSON
         * @memberof transit_realtime.VehicleDescriptor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VehicleDescriptor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VehicleDescriptor;
    })();

    transit_realtime.EntitySelector = (function() {

        /**
         * Properties of an EntitySelector.
         * @memberof transit_realtime
         * @interface IEntitySelector
         * @property {string|null} [agencyId] EntitySelector agencyId
         * @property {string|null} [routeId] EntitySelector routeId
         * @property {number|null} [routeType] EntitySelector routeType
         * @property {transit_realtime.ITripDescriptor|null} [trip] EntitySelector trip
         * @property {string|null} [stopId] EntitySelector stopId
         */

        /**
         * Constructs a new EntitySelector.
         * @memberof transit_realtime
         * @classdesc Represents an EntitySelector.
         * @implements IEntitySelector
         * @constructor
         * @param {transit_realtime.IEntitySelector=} [properties] Properties to set
         */
        function EntitySelector(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntitySelector agencyId.
         * @member {string} agencyId
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype.agencyId = "";

        /**
         * EntitySelector routeId.
         * @member {string} routeId
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype.routeId = "";

        /**
         * EntitySelector routeType.
         * @member {number} routeType
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype.routeType = 0;

        /**
         * EntitySelector trip.
         * @member {transit_realtime.ITripDescriptor|null|undefined} trip
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype.trip = null;

        /**
         * EntitySelector stopId.
         * @member {string} stopId
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype.stopId = "";

        /**
         * Creates a new EntitySelector instance using the specified properties.
         * @function create
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {transit_realtime.IEntitySelector=} [properties] Properties to set
         * @returns {transit_realtime.EntitySelector} EntitySelector instance
         */
        EntitySelector.create = function create(properties) {
            return new EntitySelector(properties);
        };

        /**
         * Encodes the specified EntitySelector message. Does not implicitly {@link transit_realtime.EntitySelector.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {transit_realtime.IEntitySelector} message EntitySelector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntitySelector.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agencyId != null && message.hasOwnProperty("agencyId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.agencyId);
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.routeId);
            if (message.routeType != null && message.hasOwnProperty("routeType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.routeType);
            if (message.trip != null && message.hasOwnProperty("trip"))
                $root.transit_realtime.TripDescriptor.encode(message.trip, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.stopId);
            return writer;
        };

        /**
         * Encodes the specified EntitySelector message, length delimited. Does not implicitly {@link transit_realtime.EntitySelector.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {transit_realtime.IEntitySelector} message EntitySelector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntitySelector.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntitySelector message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.EntitySelector} EntitySelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntitySelector.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.EntitySelector();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.agencyId = reader.string();
                    break;
                case 2:
                    message.routeId = reader.string();
                    break;
                case 3:
                    message.routeType = reader.int32();
                    break;
                case 4:
                    message.trip = $root.transit_realtime.TripDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stopId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntitySelector message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.EntitySelector} EntitySelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntitySelector.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntitySelector message.
         * @function verify
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntitySelector.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agencyId != null && message.hasOwnProperty("agencyId"))
                if (!$util.isString(message.agencyId))
                    return "agencyId: string expected";
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                if (!$util.isString(message.routeId))
                    return "routeId: string expected";
            if (message.routeType != null && message.hasOwnProperty("routeType"))
                if (!$util.isInteger(message.routeType))
                    return "routeType: integer expected";
            if (message.trip != null && message.hasOwnProperty("trip")) {
                var error = $root.transit_realtime.TripDescriptor.verify(message.trip);
                if (error)
                    return "trip." + error;
            }
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                if (!$util.isString(message.stopId))
                    return "stopId: string expected";
            return null;
        };

        /**
         * Creates an EntitySelector message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.EntitySelector} EntitySelector
         */
        EntitySelector.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.EntitySelector)
                return object;
            var message = new $root.transit_realtime.EntitySelector();
            if (object.agencyId != null)
                message.agencyId = String(object.agencyId);
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.routeType != null)
                message.routeType = object.routeType | 0;
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".transit_realtime.EntitySelector.trip: object expected");
                message.trip = $root.transit_realtime.TripDescriptor.fromObject(object.trip);
            }
            if (object.stopId != null)
                message.stopId = String(object.stopId);
            return message;
        };

        /**
         * Creates a plain object from an EntitySelector message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.EntitySelector
         * @static
         * @param {transit_realtime.EntitySelector} message EntitySelector
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntitySelector.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.agencyId = "";
                object.routeId = "";
                object.routeType = 0;
                object.trip = null;
                object.stopId = "";
            }
            if (message.agencyId != null && message.hasOwnProperty("agencyId"))
                object.agencyId = message.agencyId;
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.routeType != null && message.hasOwnProperty("routeType"))
                object.routeType = message.routeType;
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.transit_realtime.TripDescriptor.toObject(message.trip, options);
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                object.stopId = message.stopId;
            return object;
        };

        /**
         * Converts this EntitySelector to JSON.
         * @function toJSON
         * @memberof transit_realtime.EntitySelector
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntitySelector.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EntitySelector;
    })();

    transit_realtime.TranslatedString = (function() {

        /**
         * Properties of a TranslatedString.
         * @memberof transit_realtime
         * @interface ITranslatedString
         * @property {Array.<transit_realtime.TranslatedString.ITranslation>|null} [translation] TranslatedString translation
         */

        /**
         * Constructs a new TranslatedString.
         * @memberof transit_realtime
         * @classdesc Represents a TranslatedString.
         * @implements ITranslatedString
         * @constructor
         * @param {transit_realtime.ITranslatedString=} [properties] Properties to set
         */
        function TranslatedString(properties) {
            this.translation = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TranslatedString translation.
         * @member {Array.<transit_realtime.TranslatedString.ITranslation>} translation
         * @memberof transit_realtime.TranslatedString
         * @instance
         */
        TranslatedString.prototype.translation = $util.emptyArray;

        /**
         * Creates a new TranslatedString instance using the specified properties.
         * @function create
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {transit_realtime.ITranslatedString=} [properties] Properties to set
         * @returns {transit_realtime.TranslatedString} TranslatedString instance
         */
        TranslatedString.create = function create(properties) {
            return new TranslatedString(properties);
        };

        /**
         * Encodes the specified TranslatedString message. Does not implicitly {@link transit_realtime.TranslatedString.verify|verify} messages.
         * @function encode
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {transit_realtime.ITranslatedString} message TranslatedString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TranslatedString.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.translation != null && message.translation.length)
                for (var i = 0; i < message.translation.length; ++i)
                    $root.transit_realtime.TranslatedString.Translation.encode(message.translation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TranslatedString message, length delimited. Does not implicitly {@link transit_realtime.TranslatedString.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {transit_realtime.ITranslatedString} message TranslatedString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TranslatedString.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TranslatedString message from the specified reader or buffer.
         * @function decode
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transit_realtime.TranslatedString} TranslatedString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TranslatedString.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TranslatedString();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.translation && message.translation.length))
                        message.translation = [];
                    message.translation.push($root.transit_realtime.TranslatedString.Translation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TranslatedString message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transit_realtime.TranslatedString} TranslatedString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TranslatedString.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TranslatedString message.
         * @function verify
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TranslatedString.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.translation != null && message.hasOwnProperty("translation")) {
                if (!Array.isArray(message.translation))
                    return "translation: array expected";
                for (var i = 0; i < message.translation.length; ++i) {
                    var error = $root.transit_realtime.TranslatedString.Translation.verify(message.translation[i]);
                    if (error)
                        return "translation." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TranslatedString message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transit_realtime.TranslatedString} TranslatedString
         */
        TranslatedString.fromObject = function fromObject(object) {
            if (object instanceof $root.transit_realtime.TranslatedString)
                return object;
            var message = new $root.transit_realtime.TranslatedString();
            if (object.translation) {
                if (!Array.isArray(object.translation))
                    throw TypeError(".transit_realtime.TranslatedString.translation: array expected");
                message.translation = [];
                for (var i = 0; i < object.translation.length; ++i) {
                    if (typeof object.translation[i] !== "object")
                        throw TypeError(".transit_realtime.TranslatedString.translation: object expected");
                    message.translation[i] = $root.transit_realtime.TranslatedString.Translation.fromObject(object.translation[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TranslatedString message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transit_realtime.TranslatedString
         * @static
         * @param {transit_realtime.TranslatedString} message TranslatedString
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TranslatedString.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.translation = [];
            if (message.translation && message.translation.length) {
                object.translation = [];
                for (var j = 0; j < message.translation.length; ++j)
                    object.translation[j] = $root.transit_realtime.TranslatedString.Translation.toObject(message.translation[j], options);
            }
            return object;
        };

        /**
         * Converts this TranslatedString to JSON.
         * @function toJSON
         * @memberof transit_realtime.TranslatedString
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TranslatedString.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        TranslatedString.Translation = (function() {

            /**
             * Properties of a Translation.
             * @memberof transit_realtime.TranslatedString
             * @interface ITranslation
             * @property {string} text Translation text
             * @property {string|null} [language] Translation language
             */

            /**
             * Constructs a new Translation.
             * @memberof transit_realtime.TranslatedString
             * @classdesc Represents a Translation.
             * @implements ITranslation
             * @constructor
             * @param {transit_realtime.TranslatedString.ITranslation=} [properties] Properties to set
             */
            function Translation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Translation text.
             * @member {string} text
             * @memberof transit_realtime.TranslatedString.Translation
             * @instance
             */
            Translation.prototype.text = "";

            /**
             * Translation language.
             * @member {string} language
             * @memberof transit_realtime.TranslatedString.Translation
             * @instance
             */
            Translation.prototype.language = "";

            /**
             * Creates a new Translation instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {transit_realtime.TranslatedString.ITranslation=} [properties] Properties to set
             * @returns {transit_realtime.TranslatedString.Translation} Translation instance
             */
            Translation.create = function create(properties) {
                return new Translation(properties);
            };

            /**
             * Encodes the specified Translation message. Does not implicitly {@link transit_realtime.TranslatedString.Translation.verify|verify} messages.
             * @function encode
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {transit_realtime.TranslatedString.ITranslation} message Translation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Translation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.language != null && message.hasOwnProperty("language"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.language);
                return writer;
            };

            /**
             * Encodes the specified Translation message, length delimited. Does not implicitly {@link transit_realtime.TranslatedString.Translation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {transit_realtime.TranslatedString.ITranslation} message Translation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Translation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Translation message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TranslatedString.Translation} Translation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Translation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TranslatedString.Translation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.text = reader.string();
                        break;
                    case 2:
                        message.language = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("text"))
                    throw $util.ProtocolError("missing required 'text'", { instance: message });
                return message;
            };

            /**
             * Decodes a Translation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TranslatedString.Translation} Translation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Translation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Translation message.
             * @function verify
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Translation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.text))
                    return "text: string expected";
                if (message.language != null && message.hasOwnProperty("language"))
                    if (!$util.isString(message.language))
                        return "language: string expected";
                return null;
            };

            /**
             * Creates a Translation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TranslatedString.Translation} Translation
             */
            Translation.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TranslatedString.Translation)
                    return object;
                var message = new $root.transit_realtime.TranslatedString.Translation();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.language != null)
                    message.language = String(object.language);
                return message;
            };

            /**
             * Creates a plain object from a Translation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TranslatedString.Translation
             * @static
             * @param {transit_realtime.TranslatedString.Translation} message Translation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Translation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.text = "";
                    object.language = "";
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = message.language;
                return object;
            };

            /**
             * Converts this Translation to JSON.
             * @function toJSON
             * @memberof transit_realtime.TranslatedString.Translation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Translation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Translation;
        })();

        return TranslatedString;
    })();

    return transit_realtime;
})();

module.exports = $root;
