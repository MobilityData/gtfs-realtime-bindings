/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TransitAlertExtension = (function() {

    /**
     * Properties of a TransitAlertExtension.
     * @exports ITransitAlertExtension
     * @interface ITransitAlertExtension
     * @property {number|Long} createdAt TransitAlertExtension createdAt
     * @property {string|null} [sourceName] TransitAlertExtension sourceName
     */

    /**
     * Constructs a new TransitAlertExtension.
     * @exports TransitAlertExtension
     * @classdesc Represents a TransitAlertExtension.
     * @implements ITransitAlertExtension
     * @constructor
     * @param {ITransitAlertExtension=} [properties] Properties to set
     */
    function TransitAlertExtension(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransitAlertExtension createdAt.
     * @member {number|Long} createdAt
     * @memberof TransitAlertExtension
     * @instance
     */
    TransitAlertExtension.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * TransitAlertExtension sourceName.
     * @member {string} sourceName
     * @memberof TransitAlertExtension
     * @instance
     */
    TransitAlertExtension.prototype.sourceName = "";

    /**
     * Creates a new TransitAlertExtension instance using the specified properties.
     * @function create
     * @memberof TransitAlertExtension
     * @static
     * @param {ITransitAlertExtension=} [properties] Properties to set
     * @returns {TransitAlertExtension} TransitAlertExtension instance
     */
    TransitAlertExtension.create = function create(properties) {
        return new TransitAlertExtension(properties);
    };

    /**
     * Encodes the specified TransitAlertExtension message. Does not implicitly {@link TransitAlertExtension.verify|verify} messages.
     * @function encode
     * @memberof TransitAlertExtension
     * @static
     * @param {ITransitAlertExtension} message TransitAlertExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitAlertExtension.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.createdAt);
        if (message.sourceName != null && message.hasOwnProperty("sourceName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceName);
        return writer;
    };

    /**
     * Encodes the specified TransitAlertExtension message, length delimited. Does not implicitly {@link TransitAlertExtension.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransitAlertExtension
     * @static
     * @param {ITransitAlertExtension} message TransitAlertExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitAlertExtension.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransitAlertExtension message from the specified reader or buffer.
     * @function decode
     * @memberof TransitAlertExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransitAlertExtension} TransitAlertExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitAlertExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransitAlertExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.createdAt = reader.uint64();
                break;
            case 2:
                message.sourceName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("createdAt"))
            throw $util.ProtocolError("missing required 'createdAt'", { instance: message });
        return message;
    };

    /**
     * Decodes a TransitAlertExtension message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransitAlertExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransitAlertExtension} TransitAlertExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitAlertExtension.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransitAlertExtension message.
     * @function verify
     * @memberof TransitAlertExtension
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransitAlertExtension.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
            return "createdAt: integer|Long expected";
        if (message.sourceName != null && message.hasOwnProperty("sourceName"))
            if (!$util.isString(message.sourceName))
                return "sourceName: string expected";
        return null;
    };

    /**
     * Creates a TransitAlertExtension message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransitAlertExtension
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransitAlertExtension} TransitAlertExtension
     */
    TransitAlertExtension.fromObject = function fromObject(object) {
        if (object instanceof $root.TransitAlertExtension)
            return object;
        var message = new $root.TransitAlertExtension();
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = true;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber(true);
        if (object.sourceName != null)
            message.sourceName = String(object.sourceName);
        return message;
    };

    /**
     * Creates a plain object from a TransitAlertExtension message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransitAlertExtension
     * @static
     * @param {TransitAlertExtension} message TransitAlertExtension
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransitAlertExtension.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.sourceName = "";
        }
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber(true) : message.createdAt;
        if (message.sourceName != null && message.hasOwnProperty("sourceName"))
            object.sourceName = message.sourceName;
        return object;
    };

    /**
     * Converts this TransitAlertExtension to JSON.
     * @function toJSON
     * @memberof TransitAlertExtension
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransitAlertExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransitAlertExtension;
})();

$root.TransitInformedEntityExtension = (function() {

    /**
     * Properties of a TransitInformedEntityExtension.
     * @exports ITransitInformedEntityExtension
     * @interface ITransitInformedEntityExtension
     * @property {number|null} [feedId] TransitInformedEntityExtension feedId
     * @property {number|null} [globalRouteId] TransitInformedEntityExtension globalRouteId
     * @property {number|null} [stableStopId] TransitInformedEntityExtension stableStopId
     */

    /**
     * Constructs a new TransitInformedEntityExtension.
     * @exports TransitInformedEntityExtension
     * @classdesc Represents a TransitInformedEntityExtension.
     * @implements ITransitInformedEntityExtension
     * @constructor
     * @param {ITransitInformedEntityExtension=} [properties] Properties to set
     */
    function TransitInformedEntityExtension(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransitInformedEntityExtension feedId.
     * @member {number} feedId
     * @memberof TransitInformedEntityExtension
     * @instance
     */
    TransitInformedEntityExtension.prototype.feedId = 0;

    /**
     * TransitInformedEntityExtension globalRouteId.
     * @member {number} globalRouteId
     * @memberof TransitInformedEntityExtension
     * @instance
     */
    TransitInformedEntityExtension.prototype.globalRouteId = 0;

    /**
     * TransitInformedEntityExtension stableStopId.
     * @member {number} stableStopId
     * @memberof TransitInformedEntityExtension
     * @instance
     */
    TransitInformedEntityExtension.prototype.stableStopId = 0;

    /**
     * Creates a new TransitInformedEntityExtension instance using the specified properties.
     * @function create
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {ITransitInformedEntityExtension=} [properties] Properties to set
     * @returns {TransitInformedEntityExtension} TransitInformedEntityExtension instance
     */
    TransitInformedEntityExtension.create = function create(properties) {
        return new TransitInformedEntityExtension(properties);
    };

    /**
     * Encodes the specified TransitInformedEntityExtension message. Does not implicitly {@link TransitInformedEntityExtension.verify|verify} messages.
     * @function encode
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {ITransitInformedEntityExtension} message TransitInformedEntityExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitInformedEntityExtension.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.feedId != null && message.hasOwnProperty("feedId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.feedId);
        if (message.globalRouteId != null && message.hasOwnProperty("globalRouteId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.globalRouteId);
        if (message.stableStopId != null && message.hasOwnProperty("stableStopId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stableStopId);
        return writer;
    };

    /**
     * Encodes the specified TransitInformedEntityExtension message, length delimited. Does not implicitly {@link TransitInformedEntityExtension.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {ITransitInformedEntityExtension} message TransitInformedEntityExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitInformedEntityExtension.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransitInformedEntityExtension message from the specified reader or buffer.
     * @function decode
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransitInformedEntityExtension} TransitInformedEntityExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitInformedEntityExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransitInformedEntityExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.feedId = reader.int32();
                break;
            case 2:
                message.globalRouteId = reader.int32();
                break;
            case 3:
                message.stableStopId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransitInformedEntityExtension message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransitInformedEntityExtension} TransitInformedEntityExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitInformedEntityExtension.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransitInformedEntityExtension message.
     * @function verify
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransitInformedEntityExtension.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.feedId != null && message.hasOwnProperty("feedId"))
            if (!$util.isInteger(message.feedId))
                return "feedId: integer expected";
        if (message.globalRouteId != null && message.hasOwnProperty("globalRouteId"))
            if (!$util.isInteger(message.globalRouteId))
                return "globalRouteId: integer expected";
        if (message.stableStopId != null && message.hasOwnProperty("stableStopId"))
            if (!$util.isInteger(message.stableStopId))
                return "stableStopId: integer expected";
        return null;
    };

    /**
     * Creates a TransitInformedEntityExtension message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransitInformedEntityExtension} TransitInformedEntityExtension
     */
    TransitInformedEntityExtension.fromObject = function fromObject(object) {
        if (object instanceof $root.TransitInformedEntityExtension)
            return object;
        var message = new $root.TransitInformedEntityExtension();
        if (object.feedId != null)
            message.feedId = object.feedId | 0;
        if (object.globalRouteId != null)
            message.globalRouteId = object.globalRouteId | 0;
        if (object.stableStopId != null)
            message.stableStopId = object.stableStopId | 0;
        return message;
    };

    /**
     * Creates a plain object from a TransitInformedEntityExtension message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransitInformedEntityExtension
     * @static
     * @param {TransitInformedEntityExtension} message TransitInformedEntityExtension
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransitInformedEntityExtension.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.feedId = 0;
            object.globalRouteId = 0;
            object.stableStopId = 0;
        }
        if (message.feedId != null && message.hasOwnProperty("feedId"))
            object.feedId = message.feedId;
        if (message.globalRouteId != null && message.hasOwnProperty("globalRouteId"))
            object.globalRouteId = message.globalRouteId;
        if (message.stableStopId != null && message.hasOwnProperty("stableStopId"))
            object.stableStopId = message.stableStopId;
        return object;
    };

    /**
     * Converts this TransitInformedEntityExtension to JSON.
     * @function toJSON
     * @memberof TransitInformedEntityExtension
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransitInformedEntityExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransitInformedEntityExtension;
})();

$root.TransitVehicleDescriptorExtension = (function() {

    /**
     * Properties of a TransitVehicleDescriptorExtension.
     * @exports ITransitVehicleDescriptorExtension
     * @interface ITransitVehicleDescriptorExtension
     * @property {boolean|null} [basedOnCrowdsourcingData] TransitVehicleDescriptorExtension basedOnCrowdsourcingData
     * @property {string|null} [transitVehicleId] TransitVehicleDescriptorExtension transitVehicleId
     */

    /**
     * Constructs a new TransitVehicleDescriptorExtension.
     * @exports TransitVehicleDescriptorExtension
     * @classdesc Represents a TransitVehicleDescriptorExtension.
     * @implements ITransitVehicleDescriptorExtension
     * @constructor
     * @param {ITransitVehicleDescriptorExtension=} [properties] Properties to set
     */
    function TransitVehicleDescriptorExtension(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransitVehicleDescriptorExtension basedOnCrowdsourcingData.
     * @member {boolean} basedOnCrowdsourcingData
     * @memberof TransitVehicleDescriptorExtension
     * @instance
     */
    TransitVehicleDescriptorExtension.prototype.basedOnCrowdsourcingData = false;

    /**
     * TransitVehicleDescriptorExtension transitVehicleId.
     * @member {string} transitVehicleId
     * @memberof TransitVehicleDescriptorExtension
     * @instance
     */
    TransitVehicleDescriptorExtension.prototype.transitVehicleId = "";

    /**
     * Creates a new TransitVehicleDescriptorExtension instance using the specified properties.
     * @function create
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {ITransitVehicleDescriptorExtension=} [properties] Properties to set
     * @returns {TransitVehicleDescriptorExtension} TransitVehicleDescriptorExtension instance
     */
    TransitVehicleDescriptorExtension.create = function create(properties) {
        return new TransitVehicleDescriptorExtension(properties);
    };

    /**
     * Encodes the specified TransitVehicleDescriptorExtension message. Does not implicitly {@link TransitVehicleDescriptorExtension.verify|verify} messages.
     * @function encode
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {ITransitVehicleDescriptorExtension} message TransitVehicleDescriptorExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitVehicleDescriptorExtension.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.basedOnCrowdsourcingData != null && message.hasOwnProperty("basedOnCrowdsourcingData"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.basedOnCrowdsourcingData);
        if (message.transitVehicleId != null && message.hasOwnProperty("transitVehicleId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.transitVehicleId);
        return writer;
    };

    /**
     * Encodes the specified TransitVehicleDescriptorExtension message, length delimited. Does not implicitly {@link TransitVehicleDescriptorExtension.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {ITransitVehicleDescriptorExtension} message TransitVehicleDescriptorExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitVehicleDescriptorExtension.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransitVehicleDescriptorExtension message from the specified reader or buffer.
     * @function decode
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransitVehicleDescriptorExtension} TransitVehicleDescriptorExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitVehicleDescriptorExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransitVehicleDescriptorExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.basedOnCrowdsourcingData = reader.bool();
                break;
            case 2:
                message.transitVehicleId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransitVehicleDescriptorExtension message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransitVehicleDescriptorExtension} TransitVehicleDescriptorExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitVehicleDescriptorExtension.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransitVehicleDescriptorExtension message.
     * @function verify
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransitVehicleDescriptorExtension.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.basedOnCrowdsourcingData != null && message.hasOwnProperty("basedOnCrowdsourcingData"))
            if (typeof message.basedOnCrowdsourcingData !== "boolean")
                return "basedOnCrowdsourcingData: boolean expected";
        if (message.transitVehicleId != null && message.hasOwnProperty("transitVehicleId"))
            if (!$util.isString(message.transitVehicleId))
                return "transitVehicleId: string expected";
        return null;
    };

    /**
     * Creates a TransitVehicleDescriptorExtension message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransitVehicleDescriptorExtension} TransitVehicleDescriptorExtension
     */
    TransitVehicleDescriptorExtension.fromObject = function fromObject(object) {
        if (object instanceof $root.TransitVehicleDescriptorExtension)
            return object;
        var message = new $root.TransitVehicleDescriptorExtension();
        if (object.basedOnCrowdsourcingData != null)
            message.basedOnCrowdsourcingData = Boolean(object.basedOnCrowdsourcingData);
        if (object.transitVehicleId != null)
            message.transitVehicleId = String(object.transitVehicleId);
        return message;
    };

    /**
     * Creates a plain object from a TransitVehicleDescriptorExtension message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransitVehicleDescriptorExtension
     * @static
     * @param {TransitVehicleDescriptorExtension} message TransitVehicleDescriptorExtension
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransitVehicleDescriptorExtension.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.basedOnCrowdsourcingData = false;
            object.transitVehicleId = "";
        }
        if (message.basedOnCrowdsourcingData != null && message.hasOwnProperty("basedOnCrowdsourcingData"))
            object.basedOnCrowdsourcingData = message.basedOnCrowdsourcingData;
        if (message.transitVehicleId != null && message.hasOwnProperty("transitVehicleId"))
            object.transitVehicleId = message.transitVehicleId;
        return object;
    };

    /**
     * Converts this TransitVehicleDescriptorExtension to JSON.
     * @function toJSON
     * @memberof TransitVehicleDescriptorExtension
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransitVehicleDescriptorExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransitVehicleDescriptorExtension;
})();

$root.TransitTripDescriptorExtension = (function() {

    /**
     * Properties of a TransitTripDescriptorExtension.
     * @exports ITransitTripDescriptorExtension
     * @interface ITransitTripDescriptorExtension
     * @property {TransitTripDescriptorExtension.OriginPrediction|null} [originPrediction] TransitTripDescriptorExtension originPrediction
     * @property {number|Long|null} [predictionMadeAt] TransitTripDescriptorExtension predictionMadeAt
     */

    /**
     * Constructs a new TransitTripDescriptorExtension.
     * @exports TransitTripDescriptorExtension
     * @classdesc Represents a TransitTripDescriptorExtension.
     * @implements ITransitTripDescriptorExtension
     * @constructor
     * @param {ITransitTripDescriptorExtension=} [properties] Properties to set
     */
    function TransitTripDescriptorExtension(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransitTripDescriptorExtension originPrediction.
     * @member {TransitTripDescriptorExtension.OriginPrediction} originPrediction
     * @memberof TransitTripDescriptorExtension
     * @instance
     */
    TransitTripDescriptorExtension.prototype.originPrediction = 0;

    /**
     * TransitTripDescriptorExtension predictionMadeAt.
     * @member {number|Long} predictionMadeAt
     * @memberof TransitTripDescriptorExtension
     * @instance
     */
    TransitTripDescriptorExtension.prototype.predictionMadeAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new TransitTripDescriptorExtension instance using the specified properties.
     * @function create
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {ITransitTripDescriptorExtension=} [properties] Properties to set
     * @returns {TransitTripDescriptorExtension} TransitTripDescriptorExtension instance
     */
    TransitTripDescriptorExtension.create = function create(properties) {
        return new TransitTripDescriptorExtension(properties);
    };

    /**
     * Encodes the specified TransitTripDescriptorExtension message. Does not implicitly {@link TransitTripDescriptorExtension.verify|verify} messages.
     * @function encode
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {ITransitTripDescriptorExtension} message TransitTripDescriptorExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitTripDescriptorExtension.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.originPrediction != null && message.hasOwnProperty("originPrediction"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.originPrediction);
        if (message.predictionMadeAt != null && message.hasOwnProperty("predictionMadeAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.predictionMadeAt);
        return writer;
    };

    /**
     * Encodes the specified TransitTripDescriptorExtension message, length delimited. Does not implicitly {@link TransitTripDescriptorExtension.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {ITransitTripDescriptorExtension} message TransitTripDescriptorExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitTripDescriptorExtension.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransitTripDescriptorExtension message from the specified reader or buffer.
     * @function decode
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransitTripDescriptorExtension} TransitTripDescriptorExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitTripDescriptorExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransitTripDescriptorExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.originPrediction = reader.int32();
                break;
            case 2:
                message.predictionMadeAt = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransitTripDescriptorExtension message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransitTripDescriptorExtension} TransitTripDescriptorExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitTripDescriptorExtension.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransitTripDescriptorExtension message.
     * @function verify
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransitTripDescriptorExtension.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.originPrediction != null && message.hasOwnProperty("originPrediction"))
            switch (message.originPrediction) {
            default:
                return "originPrediction: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.predictionMadeAt != null && message.hasOwnProperty("predictionMadeAt"))
            if (!$util.isInteger(message.predictionMadeAt) && !(message.predictionMadeAt && $util.isInteger(message.predictionMadeAt.low) && $util.isInteger(message.predictionMadeAt.high)))
                return "predictionMadeAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a TransitTripDescriptorExtension message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransitTripDescriptorExtension} TransitTripDescriptorExtension
     */
    TransitTripDescriptorExtension.fromObject = function fromObject(object) {
        if (object instanceof $root.TransitTripDescriptorExtension)
            return object;
        var message = new $root.TransitTripDescriptorExtension();
        switch (object.originPrediction) {
        case "AGENCY_ORIGINAL_DATA":
        case 0:
            message.originPrediction = 0;
            break;
        case "TRANSIT_PREDICTION_ENGINE":
        case 1:
            message.originPrediction = 1;
            break;
        }
        if (object.predictionMadeAt != null)
            if ($util.Long)
                (message.predictionMadeAt = $util.Long.fromValue(object.predictionMadeAt)).unsigned = true;
            else if (typeof object.predictionMadeAt === "string")
                message.predictionMadeAt = parseInt(object.predictionMadeAt, 10);
            else if (typeof object.predictionMadeAt === "number")
                message.predictionMadeAt = object.predictionMadeAt;
            else if (typeof object.predictionMadeAt === "object")
                message.predictionMadeAt = new $util.LongBits(object.predictionMadeAt.low >>> 0, object.predictionMadeAt.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a TransitTripDescriptorExtension message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransitTripDescriptorExtension
     * @static
     * @param {TransitTripDescriptorExtension} message TransitTripDescriptorExtension
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransitTripDescriptorExtension.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.originPrediction = options.enums === String ? "AGENCY_ORIGINAL_DATA" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.predictionMadeAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.predictionMadeAt = options.longs === String ? "0" : 0;
        }
        if (message.originPrediction != null && message.hasOwnProperty("originPrediction"))
            object.originPrediction = options.enums === String ? $root.TransitTripDescriptorExtension.OriginPrediction[message.originPrediction] : message.originPrediction;
        if (message.predictionMadeAt != null && message.hasOwnProperty("predictionMadeAt"))
            if (typeof message.predictionMadeAt === "number")
                object.predictionMadeAt = options.longs === String ? String(message.predictionMadeAt) : message.predictionMadeAt;
            else
                object.predictionMadeAt = options.longs === String ? $util.Long.prototype.toString.call(message.predictionMadeAt) : options.longs === Number ? new $util.LongBits(message.predictionMadeAt.low >>> 0, message.predictionMadeAt.high >>> 0).toNumber(true) : message.predictionMadeAt;
        return object;
    };

    /**
     * Converts this TransitTripDescriptorExtension to JSON.
     * @function toJSON
     * @memberof TransitTripDescriptorExtension
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransitTripDescriptorExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * OriginPrediction enum.
     * @name TransitTripDescriptorExtension.OriginPrediction
     * @enum {string}
     * @property {number} AGENCY_ORIGINAL_DATA=0 AGENCY_ORIGINAL_DATA value
     * @property {number} TRANSIT_PREDICTION_ENGINE=1 TRANSIT_PREDICTION_ENGINE value
     */
    TransitTripDescriptorExtension.OriginPrediction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AGENCY_ORIGINAL_DATA"] = 0;
        values[valuesById[1] = "TRANSIT_PREDICTION_ENGINE"] = 1;
        return values;
    })();

    return TransitTripDescriptorExtension;
})();

$root.TransitStopTimeUpdateExtension = (function() {

    /**
     * Properties of a TransitStopTimeUpdateExtension.
     * @exports ITransitStopTimeUpdateExtension
     * @interface ITransitStopTimeUpdateExtension
     * @property {boolean|null} [shouldNotAssumeVehicleIsPast] TransitStopTimeUpdateExtension shouldNotAssumeVehicleIsPast
     * @property {TransitStopTimeUpdateExtension.PredictionAlgorithm|null} [predictionAlgorithm] TransitStopTimeUpdateExtension predictionAlgorithm
     */

    /**
     * Constructs a new TransitStopTimeUpdateExtension.
     * @exports TransitStopTimeUpdateExtension
     * @classdesc Represents a TransitStopTimeUpdateExtension.
     * @implements ITransitStopTimeUpdateExtension
     * @constructor
     * @param {ITransitStopTimeUpdateExtension=} [properties] Properties to set
     */
    function TransitStopTimeUpdateExtension(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransitStopTimeUpdateExtension shouldNotAssumeVehicleIsPast.
     * @member {boolean} shouldNotAssumeVehicleIsPast
     * @memberof TransitStopTimeUpdateExtension
     * @instance
     */
    TransitStopTimeUpdateExtension.prototype.shouldNotAssumeVehicleIsPast = false;

    /**
     * TransitStopTimeUpdateExtension predictionAlgorithm.
     * @member {TransitStopTimeUpdateExtension.PredictionAlgorithm} predictionAlgorithm
     * @memberof TransitStopTimeUpdateExtension
     * @instance
     */
    TransitStopTimeUpdateExtension.prototype.predictionAlgorithm = 0;

    /**
     * Creates a new TransitStopTimeUpdateExtension instance using the specified properties.
     * @function create
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {ITransitStopTimeUpdateExtension=} [properties] Properties to set
     * @returns {TransitStopTimeUpdateExtension} TransitStopTimeUpdateExtension instance
     */
    TransitStopTimeUpdateExtension.create = function create(properties) {
        return new TransitStopTimeUpdateExtension(properties);
    };

    /**
     * Encodes the specified TransitStopTimeUpdateExtension message. Does not implicitly {@link TransitStopTimeUpdateExtension.verify|verify} messages.
     * @function encode
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {ITransitStopTimeUpdateExtension} message TransitStopTimeUpdateExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitStopTimeUpdateExtension.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.shouldNotAssumeVehicleIsPast != null && message.hasOwnProperty("shouldNotAssumeVehicleIsPast"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.shouldNotAssumeVehicleIsPast);
        if (message.predictionAlgorithm != null && message.hasOwnProperty("predictionAlgorithm"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.predictionAlgorithm);
        return writer;
    };

    /**
     * Encodes the specified TransitStopTimeUpdateExtension message, length delimited. Does not implicitly {@link TransitStopTimeUpdateExtension.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {ITransitStopTimeUpdateExtension} message TransitStopTimeUpdateExtension message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransitStopTimeUpdateExtension.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransitStopTimeUpdateExtension message from the specified reader or buffer.
     * @function decode
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransitStopTimeUpdateExtension} TransitStopTimeUpdateExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitStopTimeUpdateExtension.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransitStopTimeUpdateExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.shouldNotAssumeVehicleIsPast = reader.bool();
                break;
            case 2:
                message.predictionAlgorithm = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransitStopTimeUpdateExtension message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransitStopTimeUpdateExtension} TransitStopTimeUpdateExtension
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransitStopTimeUpdateExtension.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransitStopTimeUpdateExtension message.
     * @function verify
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransitStopTimeUpdateExtension.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.shouldNotAssumeVehicleIsPast != null && message.hasOwnProperty("shouldNotAssumeVehicleIsPast"))
            if (typeof message.shouldNotAssumeVehicleIsPast !== "boolean")
                return "shouldNotAssumeVehicleIsPast: boolean expected";
        if (message.predictionAlgorithm != null && message.hasOwnProperty("predictionAlgorithm"))
            switch (message.predictionAlgorithm) {
            default:
                return "predictionAlgorithm: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        return null;
    };

    /**
     * Creates a TransitStopTimeUpdateExtension message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransitStopTimeUpdateExtension} TransitStopTimeUpdateExtension
     */
    TransitStopTimeUpdateExtension.fromObject = function fromObject(object) {
        if (object instanceof $root.TransitStopTimeUpdateExtension)
            return object;
        var message = new $root.TransitStopTimeUpdateExtension();
        if (object.shouldNotAssumeVehicleIsPast != null)
            message.shouldNotAssumeVehicleIsPast = Boolean(object.shouldNotAssumeVehicleIsPast);
        switch (object.predictionAlgorithm) {
        case "ML":
        case 0:
            message.predictionAlgorithm = 0;
            break;
        case "RECENCY":
        case 1:
            message.predictionAlgorithm = 1;
            break;
        case "DETERMINISTIC":
        case 2:
            message.predictionAlgorithm = 2;
            break;
        case "PROPAGATION":
        case 3:
            message.predictionAlgorithm = 3;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a TransitStopTimeUpdateExtension message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransitStopTimeUpdateExtension
     * @static
     * @param {TransitStopTimeUpdateExtension} message TransitStopTimeUpdateExtension
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransitStopTimeUpdateExtension.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.shouldNotAssumeVehicleIsPast = false;
            object.predictionAlgorithm = options.enums === String ? "ML" : 0;
        }
        if (message.shouldNotAssumeVehicleIsPast != null && message.hasOwnProperty("shouldNotAssumeVehicleIsPast"))
            object.shouldNotAssumeVehicleIsPast = message.shouldNotAssumeVehicleIsPast;
        if (message.predictionAlgorithm != null && message.hasOwnProperty("predictionAlgorithm"))
            object.predictionAlgorithm = options.enums === String ? $root.TransitStopTimeUpdateExtension.PredictionAlgorithm[message.predictionAlgorithm] : message.predictionAlgorithm;
        return object;
    };

    /**
     * Converts this TransitStopTimeUpdateExtension to JSON.
     * @function toJSON
     * @memberof TransitStopTimeUpdateExtension
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransitStopTimeUpdateExtension.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * PredictionAlgorithm enum.
     * @name TransitStopTimeUpdateExtension.PredictionAlgorithm
     * @enum {string}
     * @property {number} ML=0 ML value
     * @property {number} RECENCY=1 RECENCY value
     * @property {number} DETERMINISTIC=2 DETERMINISTIC value
     * @property {number} PROPAGATION=3 PROPAGATION value
     */
    TransitStopTimeUpdateExtension.PredictionAlgorithm = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ML"] = 0;
        values[valuesById[1] = "RECENCY"] = 1;
        values[valuesById[2] = "DETERMINISTIC"] = 2;
        values[valuesById[3] = "PROPAGATION"] = 3;
        return values;
    })();

    return TransitStopTimeUpdateExtension;
})();

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
         * @property {transit_realtime.TripUpdate.ITripProperties|null} [tripProperties] TripUpdate tripProperties
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
         * TripUpdate tripProperties.
         * @member {transit_realtime.TripUpdate.ITripProperties|null|undefined} tripProperties
         * @memberof transit_realtime.TripUpdate
         * @instance
         */
        TripUpdate.prototype.tripProperties = null;

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
            if (message.tripProperties != null && message.hasOwnProperty("tripProperties"))
                $root.transit_realtime.TripUpdate.TripProperties.encode(message.tripProperties, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
                case 6:
                    message.tripProperties = $root.transit_realtime.TripUpdate.TripProperties.decode(reader, reader.uint32());
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
            if (message.tripProperties != null && message.hasOwnProperty("tripProperties")) {
                var error = $root.transit_realtime.TripUpdate.TripProperties.verify(message.tripProperties);
                if (error)
                    return "tripProperties." + error;
            }
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
            if (object.tripProperties != null) {
                if (typeof object.tripProperties !== "object")
                    throw TypeError(".transit_realtime.TripUpdate.tripProperties: object expected");
                message.tripProperties = $root.transit_realtime.TripUpdate.TripProperties.fromObject(object.tripProperties);
            }
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
                object.tripProperties = null;
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
            if (message.tripProperties != null && message.hasOwnProperty("tripProperties"))
                object.tripProperties = $root.transit_realtime.TripUpdate.TripProperties.toObject(message.tripProperties, options);
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
             * @property {transit_realtime.VehiclePosition.OccupancyStatus|null} [departureOccupancyStatus] StopTimeUpdate departureOccupancyStatus
             * @property {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship|null} [scheduleRelationship] StopTimeUpdate scheduleRelationship
             * @property {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties|null} [stopTimeProperties] StopTimeUpdate stopTimeProperties
             * @property {ITransitStopTimeUpdateExtension|null} [".transitStopTimeUpdateExtension"] StopTimeUpdate .transitStopTimeUpdateExtension
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
             * StopTimeUpdate departureOccupancyStatus.
             * @member {transit_realtime.VehiclePosition.OccupancyStatus} departureOccupancyStatus
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.departureOccupancyStatus = 0;

            /**
             * StopTimeUpdate scheduleRelationship.
             * @member {transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship} scheduleRelationship
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.scheduleRelationship = 0;

            /**
             * StopTimeUpdate stopTimeProperties.
             * @member {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties|null|undefined} stopTimeProperties
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype.stopTimeProperties = null;

            /**
             * StopTimeUpdate .transitStopTimeUpdateExtension.
             * @member {ITransitStopTimeUpdateExtension|null|undefined} .transitStopTimeUpdateExtension
             * @memberof transit_realtime.TripUpdate.StopTimeUpdate
             * @instance
             */
            StopTimeUpdate.prototype[".transitStopTimeUpdateExtension"] = null;

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
                if (message.stopTimeProperties != null && message.hasOwnProperty("stopTimeProperties"))
                    $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.encode(message.stopTimeProperties, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.departureOccupancyStatus != null && message.hasOwnProperty("departureOccupancyStatus"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.departureOccupancyStatus);
                if (message[".transitStopTimeUpdateExtension"] != null && message.hasOwnProperty(".transitStopTimeUpdateExtension"))
                    $root.TransitStopTimeUpdateExtension.encode(message[".transitStopTimeUpdateExtension"], writer.uint32(/* id 9514, wireType 2 =*/76114).fork()).ldelim();
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
                    case 7:
                        message.departureOccupancyStatus = reader.int32();
                        break;
                    case 5:
                        message.scheduleRelationship = reader.int32();
                        break;
                    case 6:
                        message.stopTimeProperties = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.decode(reader, reader.uint32());
                        break;
                    case 9514:
                        message[".transitStopTimeUpdateExtension"] = $root.TransitStopTimeUpdateExtension.decode(reader, reader.uint32());
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
                if (message.departureOccupancyStatus != null && message.hasOwnProperty("departureOccupancyStatus"))
                    switch (message.departureOccupancyStatus) {
                    default:
                        return "departureOccupancyStatus: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        break;
                    }
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
                if (message.stopTimeProperties != null && message.hasOwnProperty("stopTimeProperties")) {
                    var error = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.verify(message.stopTimeProperties);
                    if (error)
                        return "stopTimeProperties." + error;
                }
                if (message[".transitStopTimeUpdateExtension"] != null && message.hasOwnProperty(".transitStopTimeUpdateExtension")) {
                    var error = $root.TransitStopTimeUpdateExtension.verify(message[".transitStopTimeUpdateExtension"]);
                    if (error)
                        return ".transitStopTimeUpdateExtension." + error;
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
                switch (object.departureOccupancyStatus) {
                case "EMPTY":
                case 0:
                    message.departureOccupancyStatus = 0;
                    break;
                case "MANY_SEATS_AVAILABLE":
                case 1:
                    message.departureOccupancyStatus = 1;
                    break;
                case "FEW_SEATS_AVAILABLE":
                case 2:
                    message.departureOccupancyStatus = 2;
                    break;
                case "STANDING_ROOM_ONLY":
                case 3:
                    message.departureOccupancyStatus = 3;
                    break;
                case "CRUSHED_STANDING_ROOM_ONLY":
                case 4:
                    message.departureOccupancyStatus = 4;
                    break;
                case "FULL":
                case 5:
                    message.departureOccupancyStatus = 5;
                    break;
                case "NOT_ACCEPTING_PASSENGERS":
                case 6:
                    message.departureOccupancyStatus = 6;
                    break;
                case "NO_DATA_AVAILABLE":
                case 7:
                    message.departureOccupancyStatus = 7;
                    break;
                case "NOT_BOARDABLE":
                case 8:
                    message.departureOccupancyStatus = 8;
                    break;
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
                case "UNSCHEDULED":
                case 3:
                    message.scheduleRelationship = 3;
                    break;
                }
                if (object.stopTimeProperties != null) {
                    if (typeof object.stopTimeProperties !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate.stopTimeProperties: object expected");
                    message.stopTimeProperties = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.fromObject(object.stopTimeProperties);
                }
                if (object[".transitStopTimeUpdateExtension"] != null) {
                    if (typeof object[".transitStopTimeUpdateExtension"] !== "object")
                        throw TypeError(".transit_realtime.TripUpdate.StopTimeUpdate..transitStopTimeUpdateExtension: object expected");
                    message[".transitStopTimeUpdateExtension"] = $root.TransitStopTimeUpdateExtension.fromObject(object[".transitStopTimeUpdateExtension"]);
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
                    object.stopTimeProperties = null;
                    object.departureOccupancyStatus = options.enums === String ? "EMPTY" : 0;
                    object[".transitStopTimeUpdateExtension"] = null;
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
                if (message.stopTimeProperties != null && message.hasOwnProperty("stopTimeProperties"))
                    object.stopTimeProperties = $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.toObject(message.stopTimeProperties, options);
                if (message.departureOccupancyStatus != null && message.hasOwnProperty("departureOccupancyStatus"))
                    object.departureOccupancyStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.OccupancyStatus[message.departureOccupancyStatus] : message.departureOccupancyStatus;
                if (message[".transitStopTimeUpdateExtension"] != null && message.hasOwnProperty(".transitStopTimeUpdateExtension"))
                    object[".transitStopTimeUpdateExtension"] = $root.TransitStopTimeUpdateExtension.toObject(message[".transitStopTimeUpdateExtension"], options);
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
             * @property {number} UNSCHEDULED=3 UNSCHEDULED value
             */
            StopTimeUpdate.ScheduleRelationship = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SCHEDULED"] = 0;
                values[valuesById[1] = "SKIPPED"] = 1;
                values[valuesById[2] = "NO_DATA"] = 2;
                values[valuesById[3] = "UNSCHEDULED"] = 3;
                return values;
            })();

            StopTimeUpdate.StopTimeProperties = (function() {

                /**
                 * Properties of a StopTimeProperties.
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @interface IStopTimeProperties
                 * @property {string|null} [assignedStopId] StopTimeProperties assignedStopId
                 */

                /**
                 * Constructs a new StopTimeProperties.
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate
                 * @classdesc Represents a StopTimeProperties.
                 * @implements IStopTimeProperties
                 * @constructor
                 * @param {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties=} [properties] Properties to set
                 */
                function StopTimeProperties(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StopTimeProperties assignedStopId.
                 * @member {string} assignedStopId
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @instance
                 */
                StopTimeProperties.prototype.assignedStopId = "";

                /**
                 * Creates a new StopTimeProperties instance using the specified properties.
                 * @function create
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties=} [properties] Properties to set
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties instance
                 */
                StopTimeProperties.create = function create(properties) {
                    return new StopTimeProperties(properties);
                };

                /**
                 * Encodes the specified StopTimeProperties message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.verify|verify} messages.
                 * @function encode
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties} message StopTimeProperties message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StopTimeProperties.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.assignedStopId != null && message.hasOwnProperty("assignedStopId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.assignedStopId);
                    return writer;
                };

                /**
                 * Encodes the specified StopTimeProperties message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties} message StopTimeProperties message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StopTimeProperties.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StopTimeProperties message from the specified reader or buffer.
                 * @function decode
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StopTimeProperties.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.assignedStopId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StopTimeProperties message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StopTimeProperties.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StopTimeProperties message.
                 * @function verify
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StopTimeProperties.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.assignedStopId != null && message.hasOwnProperty("assignedStopId"))
                        if (!$util.isString(message.assignedStopId))
                            return "assignedStopId: string expected";
                    return null;
                };

                /**
                 * Creates a StopTimeProperties message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} StopTimeProperties
                 */
                StopTimeProperties.fromObject = function fromObject(object) {
                    if (object instanceof $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties)
                        return object;
                    var message = new $root.transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties();
                    if (object.assignedStopId != null)
                        message.assignedStopId = String(object.assignedStopId);
                    return message;
                };

                /**
                 * Creates a plain object from a StopTimeProperties message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @static
                 * @param {transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties} message StopTimeProperties
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StopTimeProperties.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.assignedStopId = "";
                    if (message.assignedStopId != null && message.hasOwnProperty("assignedStopId"))
                        object.assignedStopId = message.assignedStopId;
                    return object;
                };

                /**
                 * Converts this StopTimeProperties to JSON.
                 * @function toJSON
                 * @memberof transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StopTimeProperties.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StopTimeProperties;
            })();

            return StopTimeUpdate;
        })();

        TripUpdate.TripProperties = (function() {

            /**
             * Properties of a TripProperties.
             * @memberof transit_realtime.TripUpdate
             * @interface ITripProperties
             * @property {string|null} [tripId] TripProperties tripId
             * @property {string|null} [startDate] TripProperties startDate
             * @property {string|null} [startTime] TripProperties startTime
             */

            /**
             * Constructs a new TripProperties.
             * @memberof transit_realtime.TripUpdate
             * @classdesc Represents a TripProperties.
             * @implements ITripProperties
             * @constructor
             * @param {transit_realtime.TripUpdate.ITripProperties=} [properties] Properties to set
             */
            function TripProperties(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TripProperties tripId.
             * @member {string} tripId
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @instance
             */
            TripProperties.prototype.tripId = "";

            /**
             * TripProperties startDate.
             * @member {string} startDate
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @instance
             */
            TripProperties.prototype.startDate = "";

            /**
             * TripProperties startTime.
             * @member {string} startTime
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @instance
             */
            TripProperties.prototype.startTime = "";

            /**
             * Creates a new TripProperties instance using the specified properties.
             * @function create
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {transit_realtime.TripUpdate.ITripProperties=} [properties] Properties to set
             * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties instance
             */
            TripProperties.create = function create(properties) {
                return new TripProperties(properties);
            };

            /**
             * Encodes the specified TripProperties message. Does not implicitly {@link transit_realtime.TripUpdate.TripProperties.verify|verify} messages.
             * @function encode
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {transit_realtime.TripUpdate.ITripProperties} message TripProperties message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TripProperties.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tripId != null && message.hasOwnProperty("tripId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.tripId);
                if (message.startDate != null && message.hasOwnProperty("startDate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.startDate);
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.startTime);
                return writer;
            };

            /**
             * Encodes the specified TripProperties message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.TripProperties.verify|verify} messages.
             * @function encodeDelimited
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {transit_realtime.TripUpdate.ITripProperties} message TripProperties message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TripProperties.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TripProperties message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripProperties.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.TripUpdate.TripProperties();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.tripId = reader.string();
                        break;
                    case 2:
                        message.startDate = reader.string();
                        break;
                    case 3:
                        message.startTime = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TripProperties message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TripProperties.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TripProperties message.
             * @function verify
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TripProperties.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tripId != null && message.hasOwnProperty("tripId"))
                    if (!$util.isString(message.tripId))
                        return "tripId: string expected";
                if (message.startDate != null && message.hasOwnProperty("startDate"))
                    if (!$util.isString(message.startDate))
                        return "startDate: string expected";
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    if (!$util.isString(message.startTime))
                        return "startTime: string expected";
                return null;
            };

            /**
             * Creates a TripProperties message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.TripUpdate.TripProperties} TripProperties
             */
            TripProperties.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.TripUpdate.TripProperties)
                    return object;
                var message = new $root.transit_realtime.TripUpdate.TripProperties();
                if (object.tripId != null)
                    message.tripId = String(object.tripId);
                if (object.startDate != null)
                    message.startDate = String(object.startDate);
                if (object.startTime != null)
                    message.startTime = String(object.startTime);
                return message;
            };

            /**
             * Creates a plain object from a TripProperties message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @static
             * @param {transit_realtime.TripUpdate.TripProperties} message TripProperties
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TripProperties.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.tripId = "";
                    object.startDate = "";
                    object.startTime = "";
                }
                if (message.tripId != null && message.hasOwnProperty("tripId"))
                    object.tripId = message.tripId;
                if (message.startDate != null && message.hasOwnProperty("startDate"))
                    object.startDate = message.startDate;
                if (message.startTime != null && message.hasOwnProperty("startTime"))
                    object.startTime = message.startTime;
                return object;
            };

            /**
             * Converts this TripProperties to JSON.
             * @function toJSON
             * @memberof transit_realtime.TripUpdate.TripProperties
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TripProperties.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TripProperties;
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
         * @property {number|null} [occupancyPercentage] VehiclePosition occupancyPercentage
         * @property {Array.<transit_realtime.VehiclePosition.ICarriageDetails>|null} [multiCarriageDetails] VehiclePosition multiCarriageDetails
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
            this.multiCarriageDetails = [];
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
         * VehiclePosition occupancyPercentage.
         * @member {number} occupancyPercentage
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.occupancyPercentage = 0;

        /**
         * VehiclePosition multiCarriageDetails.
         * @member {Array.<transit_realtime.VehiclePosition.ICarriageDetails>} multiCarriageDetails
         * @memberof transit_realtime.VehiclePosition
         * @instance
         */
        VehiclePosition.prototype.multiCarriageDetails = $util.emptyArray;

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
            if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.occupancyPercentage);
            if (message.multiCarriageDetails != null && message.multiCarriageDetails.length)
                for (var i = 0; i < message.multiCarriageDetails.length; ++i)
                    $root.transit_realtime.VehiclePosition.CarriageDetails.encode(message.multiCarriageDetails[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
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
                case 10:
                    message.occupancyPercentage = reader.uint32();
                    break;
                case 11:
                    if (!(message.multiCarriageDetails && message.multiCarriageDetails.length))
                        message.multiCarriageDetails = [];
                    message.multiCarriageDetails.push($root.transit_realtime.VehiclePosition.CarriageDetails.decode(reader, reader.uint32()));
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
                case 7:
                case 8:
                    break;
                }
            if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                if (!$util.isInteger(message.occupancyPercentage))
                    return "occupancyPercentage: integer expected";
            if (message.multiCarriageDetails != null && message.hasOwnProperty("multiCarriageDetails")) {
                if (!Array.isArray(message.multiCarriageDetails))
                    return "multiCarriageDetails: array expected";
                for (var i = 0; i < message.multiCarriageDetails.length; ++i) {
                    var error = $root.transit_realtime.VehiclePosition.CarriageDetails.verify(message.multiCarriageDetails[i]);
                    if (error)
                        return "multiCarriageDetails." + error;
                }
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
            case "NO_DATA_AVAILABLE":
            case 7:
                message.occupancyStatus = 7;
                break;
            case "NOT_BOARDABLE":
            case 8:
                message.occupancyStatus = 8;
                break;
            }
            if (object.occupancyPercentage != null)
                message.occupancyPercentage = object.occupancyPercentage >>> 0;
            if (object.multiCarriageDetails) {
                if (!Array.isArray(object.multiCarriageDetails))
                    throw TypeError(".transit_realtime.VehiclePosition.multiCarriageDetails: array expected");
                message.multiCarriageDetails = [];
                for (var i = 0; i < object.multiCarriageDetails.length; ++i) {
                    if (typeof object.multiCarriageDetails[i] !== "object")
                        throw TypeError(".transit_realtime.VehiclePosition.multiCarriageDetails: object expected");
                    message.multiCarriageDetails[i] = $root.transit_realtime.VehiclePosition.CarriageDetails.fromObject(object.multiCarriageDetails[i]);
                }
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
            if (options.arrays || options.defaults)
                object.multiCarriageDetails = [];
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
                object.occupancyPercentage = 0;
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
            if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                object.occupancyPercentage = message.occupancyPercentage;
            if (message.multiCarriageDetails && message.multiCarriageDetails.length) {
                object.multiCarriageDetails = [];
                for (var j = 0; j < message.multiCarriageDetails.length; ++j)
                    object.multiCarriageDetails[j] = $root.transit_realtime.VehiclePosition.CarriageDetails.toObject(message.multiCarriageDetails[j], options);
            }
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
         * @property {number} NO_DATA_AVAILABLE=7 NO_DATA_AVAILABLE value
         * @property {number} NOT_BOARDABLE=8 NOT_BOARDABLE value
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
            values[valuesById[7] = "NO_DATA_AVAILABLE"] = 7;
            values[valuesById[8] = "NOT_BOARDABLE"] = 8;
            return values;
        })();

        VehiclePosition.CarriageDetails = (function() {

            /**
             * Properties of a CarriageDetails.
             * @memberof transit_realtime.VehiclePosition
             * @interface ICarriageDetails
             * @property {string|null} [id] CarriageDetails id
             * @property {string|null} [label] CarriageDetails label
             * @property {transit_realtime.VehiclePosition.OccupancyStatus|null} [occupancyStatus] CarriageDetails occupancyStatus
             * @property {number|null} [occupancyPercentage] CarriageDetails occupancyPercentage
             * @property {number|null} [carriageSequence] CarriageDetails carriageSequence
             */

            /**
             * Constructs a new CarriageDetails.
             * @memberof transit_realtime.VehiclePosition
             * @classdesc Represents a CarriageDetails.
             * @implements ICarriageDetails
             * @constructor
             * @param {transit_realtime.VehiclePosition.ICarriageDetails=} [properties] Properties to set
             */
            function CarriageDetails(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CarriageDetails id.
             * @member {string} id
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @instance
             */
            CarriageDetails.prototype.id = "";

            /**
             * CarriageDetails label.
             * @member {string} label
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @instance
             */
            CarriageDetails.prototype.label = "";

            /**
             * CarriageDetails occupancyStatus.
             * @member {transit_realtime.VehiclePosition.OccupancyStatus} occupancyStatus
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @instance
             */
            CarriageDetails.prototype.occupancyStatus = 7;

            /**
             * CarriageDetails occupancyPercentage.
             * @member {number} occupancyPercentage
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @instance
             */
            CarriageDetails.prototype.occupancyPercentage = -1;

            /**
             * CarriageDetails carriageSequence.
             * @member {number} carriageSequence
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @instance
             */
            CarriageDetails.prototype.carriageSequence = 0;

            /**
             * Creates a new CarriageDetails instance using the specified properties.
             * @function create
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {transit_realtime.VehiclePosition.ICarriageDetails=} [properties] Properties to set
             * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails instance
             */
            CarriageDetails.create = function create(properties) {
                return new CarriageDetails(properties);
            };

            /**
             * Encodes the specified CarriageDetails message. Does not implicitly {@link transit_realtime.VehiclePosition.CarriageDetails.verify|verify} messages.
             * @function encode
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {transit_realtime.VehiclePosition.ICarriageDetails} message CarriageDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CarriageDetails.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.label != null && message.hasOwnProperty("label"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
                if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.occupancyStatus);
                if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.occupancyPercentage);
                if (message.carriageSequence != null && message.hasOwnProperty("carriageSequence"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.carriageSequence);
                return writer;
            };

            /**
             * Encodes the specified CarriageDetails message, length delimited. Does not implicitly {@link transit_realtime.VehiclePosition.CarriageDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {transit_realtime.VehiclePosition.ICarriageDetails} message CarriageDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CarriageDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CarriageDetails message from the specified reader or buffer.
             * @function decode
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CarriageDetails.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.transit_realtime.VehiclePosition.CarriageDetails();
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
                        message.occupancyStatus = reader.int32();
                        break;
                    case 4:
                        message.occupancyPercentage = reader.int32();
                        break;
                    case 5:
                        message.carriageSequence = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CarriageDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CarriageDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CarriageDetails message.
             * @function verify
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CarriageDetails.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    if (!$util.isString(message.label))
                        return "label: string expected";
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
                    case 7:
                    case 8:
                        break;
                    }
                if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                    if (!$util.isInteger(message.occupancyPercentage))
                        return "occupancyPercentage: integer expected";
                if (message.carriageSequence != null && message.hasOwnProperty("carriageSequence"))
                    if (!$util.isInteger(message.carriageSequence))
                        return "carriageSequence: integer expected";
                return null;
            };

            /**
             * Creates a CarriageDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {transit_realtime.VehiclePosition.CarriageDetails} CarriageDetails
             */
            CarriageDetails.fromObject = function fromObject(object) {
                if (object instanceof $root.transit_realtime.VehiclePosition.CarriageDetails)
                    return object;
                var message = new $root.transit_realtime.VehiclePosition.CarriageDetails();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.label != null)
                    message.label = String(object.label);
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
                case "NO_DATA_AVAILABLE":
                case 7:
                    message.occupancyStatus = 7;
                    break;
                case "NOT_BOARDABLE":
                case 8:
                    message.occupancyStatus = 8;
                    break;
                }
                if (object.occupancyPercentage != null)
                    message.occupancyPercentage = object.occupancyPercentage | 0;
                if (object.carriageSequence != null)
                    message.carriageSequence = object.carriageSequence >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CarriageDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @static
             * @param {transit_realtime.VehiclePosition.CarriageDetails} message CarriageDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CarriageDetails.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.label = "";
                    object.occupancyStatus = options.enums === String ? "NO_DATA_AVAILABLE" : 7;
                    object.occupancyPercentage = -1;
                    object.carriageSequence = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.occupancyStatus != null && message.hasOwnProperty("occupancyStatus"))
                    object.occupancyStatus = options.enums === String ? $root.transit_realtime.VehiclePosition.OccupancyStatus[message.occupancyStatus] : message.occupancyStatus;
                if (message.occupancyPercentage != null && message.hasOwnProperty("occupancyPercentage"))
                    object.occupancyPercentage = message.occupancyPercentage;
                if (message.carriageSequence != null && message.hasOwnProperty("carriageSequence"))
                    object.carriageSequence = message.carriageSequence;
                return object;
            };

            /**
             * Converts this CarriageDetails to JSON.
             * @function toJSON
             * @memberof transit_realtime.VehiclePosition.CarriageDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CarriageDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CarriageDetails;
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
         * @property {transit_realtime.ITranslatedString|null} [ttsHeaderText] Alert ttsHeaderText
         * @property {transit_realtime.ITranslatedString|null} [ttsDescriptionText] Alert ttsDescriptionText
         * @property {transit_realtime.Alert.SeverityLevel|null} [severityLevel] Alert severityLevel
         * @property {ITransitAlertExtension|null} [".transitAlertExtension"] Alert .transitAlertExtension
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
         * Alert ttsHeaderText.
         * @member {transit_realtime.ITranslatedString|null|undefined} ttsHeaderText
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.ttsHeaderText = null;

        /**
         * Alert ttsDescriptionText.
         * @member {transit_realtime.ITranslatedString|null|undefined} ttsDescriptionText
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.ttsDescriptionText = null;

        /**
         * Alert severityLevel.
         * @member {transit_realtime.Alert.SeverityLevel} severityLevel
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype.severityLevel = 1;

        /**
         * Alert .transitAlertExtension.
         * @member {ITransitAlertExtension|null|undefined} .transitAlertExtension
         * @memberof transit_realtime.Alert
         * @instance
         */
        Alert.prototype[".transitAlertExtension"] = null;

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
            if (message.ttsHeaderText != null && message.hasOwnProperty("ttsHeaderText"))
                $root.transit_realtime.TranslatedString.encode(message.ttsHeaderText, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.ttsDescriptionText != null && message.hasOwnProperty("ttsDescriptionText"))
                $root.transit_realtime.TranslatedString.encode(message.ttsDescriptionText, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.severityLevel != null && message.hasOwnProperty("severityLevel"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.severityLevel);
            if (message[".transitAlertExtension"] != null && message.hasOwnProperty(".transitAlertExtension"))
                $root.TransitAlertExtension.encode(message[".transitAlertExtension"], writer.uint32(/* id 9514, wireType 2 =*/76114).fork()).ldelim();
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
                case 12:
                    message.ttsHeaderText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.ttsDescriptionText = $root.transit_realtime.TranslatedString.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.severityLevel = reader.int32();
                    break;
                case 9514:
                    message[".transitAlertExtension"] = $root.TransitAlertExtension.decode(reader, reader.uint32());
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
                case 10:
                case 11:
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
            if (message.ttsHeaderText != null && message.hasOwnProperty("ttsHeaderText")) {
                var error = $root.transit_realtime.TranslatedString.verify(message.ttsHeaderText);
                if (error)
                    return "ttsHeaderText." + error;
            }
            if (message.ttsDescriptionText != null && message.hasOwnProperty("ttsDescriptionText")) {
                var error = $root.transit_realtime.TranslatedString.verify(message.ttsDescriptionText);
                if (error)
                    return "ttsDescriptionText." + error;
            }
            if (message.severityLevel != null && message.hasOwnProperty("severityLevel"))
                switch (message.severityLevel) {
                default:
                    return "severityLevel: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message[".transitAlertExtension"] != null && message.hasOwnProperty(".transitAlertExtension")) {
                var error = $root.TransitAlertExtension.verify(message[".transitAlertExtension"]);
                if (error)
                    return ".transitAlertExtension." + error;
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
            case "NO_EFFECT":
            case 10:
                message.effect = 10;
                break;
            case "ACCESSIBILITY_ISSUE":
            case 11:
                message.effect = 11;
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
            if (object.ttsHeaderText != null) {
                if (typeof object.ttsHeaderText !== "object")
                    throw TypeError(".transit_realtime.Alert.ttsHeaderText: object expected");
                message.ttsHeaderText = $root.transit_realtime.TranslatedString.fromObject(object.ttsHeaderText);
            }
            if (object.ttsDescriptionText != null) {
                if (typeof object.ttsDescriptionText !== "object")
                    throw TypeError(".transit_realtime.Alert.ttsDescriptionText: object expected");
                message.ttsDescriptionText = $root.transit_realtime.TranslatedString.fromObject(object.ttsDescriptionText);
            }
            switch (object.severityLevel) {
            case "UNKNOWN_SEVERITY":
            case 1:
                message.severityLevel = 1;
                break;
            case "INFO":
            case 2:
                message.severityLevel = 2;
                break;
            case "WARNING":
            case 3:
                message.severityLevel = 3;
                break;
            case "SEVERE":
            case 4:
                message.severityLevel = 4;
                break;
            }
            if (object[".transitAlertExtension"] != null) {
                if (typeof object[".transitAlertExtension"] !== "object")
                    throw TypeError(".transit_realtime.Alert..transitAlertExtension: object expected");
                message[".transitAlertExtension"] = $root.TransitAlertExtension.fromObject(object[".transitAlertExtension"]);
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
                object.ttsHeaderText = null;
                object.ttsDescriptionText = null;
                object.severityLevel = options.enums === String ? "UNKNOWN_SEVERITY" : 1;
                object[".transitAlertExtension"] = null;
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
            if (message.ttsHeaderText != null && message.hasOwnProperty("ttsHeaderText"))
                object.ttsHeaderText = $root.transit_realtime.TranslatedString.toObject(message.ttsHeaderText, options);
            if (message.ttsDescriptionText != null && message.hasOwnProperty("ttsDescriptionText"))
                object.ttsDescriptionText = $root.transit_realtime.TranslatedString.toObject(message.ttsDescriptionText, options);
            if (message.severityLevel != null && message.hasOwnProperty("severityLevel"))
                object.severityLevel = options.enums === String ? $root.transit_realtime.Alert.SeverityLevel[message.severityLevel] : message.severityLevel;
            if (message[".transitAlertExtension"] != null && message.hasOwnProperty(".transitAlertExtension"))
                object[".transitAlertExtension"] = $root.TransitAlertExtension.toObject(message[".transitAlertExtension"], options);
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
         * @property {number} NO_EFFECT=10 NO_EFFECT value
         * @property {number} ACCESSIBILITY_ISSUE=11 ACCESSIBILITY_ISSUE value
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
            values[valuesById[10] = "NO_EFFECT"] = 10;
            values[valuesById[11] = "ACCESSIBILITY_ISSUE"] = 11;
            return values;
        })();

        /**
         * SeverityLevel enum.
         * @name transit_realtime.Alert.SeverityLevel
         * @enum {string}
         * @property {number} UNKNOWN_SEVERITY=1 UNKNOWN_SEVERITY value
         * @property {number} INFO=2 INFO value
         * @property {number} WARNING=3 WARNING value
         * @property {number} SEVERE=4 SEVERE value
         */
        Alert.SeverityLevel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "UNKNOWN_SEVERITY"] = 1;
            values[valuesById[2] = "INFO"] = 2;
            values[valuesById[3] = "WARNING"] = 3;
            values[valuesById[4] = "SEVERE"] = 4;
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
         * @property {ITransitTripDescriptorExtension|null} [".transitTripDescriptorExtension"] TripDescriptor .transitTripDescriptorExtension
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
         * TripDescriptor .transitTripDescriptorExtension.
         * @member {ITransitTripDescriptorExtension|null|undefined} .transitTripDescriptorExtension
         * @memberof transit_realtime.TripDescriptor
         * @instance
         */
        TripDescriptor.prototype[".transitTripDescriptorExtension"] = null;

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
            if (message[".transitTripDescriptorExtension"] != null && message.hasOwnProperty(".transitTripDescriptorExtension"))
                $root.TransitTripDescriptorExtension.encode(message[".transitTripDescriptorExtension"], writer.uint32(/* id 9514, wireType 2 =*/76114).fork()).ldelim();
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
                case 9514:
                    message[".transitTripDescriptorExtension"] = $root.TransitTripDescriptorExtension.decode(reader, reader.uint32());
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
                case 5:
                case 6:
                    break;
                }
            if (message[".transitTripDescriptorExtension"] != null && message.hasOwnProperty(".transitTripDescriptorExtension")) {
                var error = $root.TransitTripDescriptorExtension.verify(message[".transitTripDescriptorExtension"]);
                if (error)
                    return ".transitTripDescriptorExtension." + error;
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
            case "REPLACEMENT":
            case 5:
                message.scheduleRelationship = 5;
                break;
            case "DUPLICATED":
            case 6:
                message.scheduleRelationship = 6;
                break;
            }
            if (object[".transitTripDescriptorExtension"] != null) {
                if (typeof object[".transitTripDescriptorExtension"] !== "object")
                    throw TypeError(".transit_realtime.TripDescriptor..transitTripDescriptorExtension: object expected");
                message[".transitTripDescriptorExtension"] = $root.TransitTripDescriptorExtension.fromObject(object[".transitTripDescriptorExtension"]);
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
                object[".transitTripDescriptorExtension"] = null;
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
            if (message[".transitTripDescriptorExtension"] != null && message.hasOwnProperty(".transitTripDescriptorExtension"))
                object[".transitTripDescriptorExtension"] = $root.TransitTripDescriptorExtension.toObject(message[".transitTripDescriptorExtension"], options);
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
         * @property {number} REPLACEMENT=5 REPLACEMENT value
         * @property {number} DUPLICATED=6 DUPLICATED value
         */
        TripDescriptor.ScheduleRelationship = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SCHEDULED"] = 0;
            values[valuesById[1] = "ADDED"] = 1;
            values[valuesById[2] = "UNSCHEDULED"] = 2;
            values[valuesById[3] = "CANCELED"] = 3;
            values[valuesById[5] = "REPLACEMENT"] = 5;
            values[valuesById[6] = "DUPLICATED"] = 6;
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
         * @property {ITransitVehicleDescriptorExtension|null} [".transitVehicleDescriptorExtension"] VehicleDescriptor .transitVehicleDescriptorExtension
         * @property {ITfnswVehicleDescriptor|null} [".tfnswVehicleDescriptor"] VehicleDescriptor .tfnswVehicleDescriptor
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
         * VehicleDescriptor .transitVehicleDescriptorExtension.
         * @member {ITransitVehicleDescriptorExtension|null|undefined} .transitVehicleDescriptorExtension
         * @memberof transit_realtime.VehicleDescriptor
         * @instance
         */
        VehicleDescriptor.prototype[".transitVehicleDescriptorExtension"] = null;

        /**
         * VehicleDescriptor .tfnswVehicleDescriptor.
         * @member {ITfnswVehicleDescriptor|null|undefined} .tfnswVehicleDescriptor
         * @memberof transit_realtime.VehicleDescriptor
         * @instance
         */
        VehicleDescriptor.prototype[".tfnswVehicleDescriptor"] = null;

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
            if (message[".tfnswVehicleDescriptor"] != null && message.hasOwnProperty(".tfnswVehicleDescriptor"))
                $root.TfnswVehicleDescriptor.encode(message[".tfnswVehicleDescriptor"], writer.uint32(/* id 1999, wireType 2 =*/15994).fork()).ldelim();
            if (message[".transitVehicleDescriptorExtension"] != null && message.hasOwnProperty(".transitVehicleDescriptorExtension"))
                $root.TransitVehicleDescriptorExtension.encode(message[".transitVehicleDescriptorExtension"], writer.uint32(/* id 9514, wireType 2 =*/76114).fork()).ldelim();
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
                case 9514:
                    message[".transitVehicleDescriptorExtension"] = $root.TransitVehicleDescriptorExtension.decode(reader, reader.uint32());
                    break;
                case 1999:
                    message[".tfnswVehicleDescriptor"] = $root.TfnswVehicleDescriptor.decode(reader, reader.uint32());
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
            if (message[".transitVehicleDescriptorExtension"] != null && message.hasOwnProperty(".transitVehicleDescriptorExtension")) {
                var error = $root.TransitVehicleDescriptorExtension.verify(message[".transitVehicleDescriptorExtension"]);
                if (error)
                    return ".transitVehicleDescriptorExtension." + error;
            }
            if (message[".tfnswVehicleDescriptor"] != null && message.hasOwnProperty(".tfnswVehicleDescriptor")) {
                var error = $root.TfnswVehicleDescriptor.verify(message[".tfnswVehicleDescriptor"]);
                if (error)
                    return ".tfnswVehicleDescriptor." + error;
            }
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
            if (object[".transitVehicleDescriptorExtension"] != null) {
                if (typeof object[".transitVehicleDescriptorExtension"] !== "object")
                    throw TypeError(".transit_realtime.VehicleDescriptor..transitVehicleDescriptorExtension: object expected");
                message[".transitVehicleDescriptorExtension"] = $root.TransitVehicleDescriptorExtension.fromObject(object[".transitVehicleDescriptorExtension"]);
            }
            if (object[".tfnswVehicleDescriptor"] != null) {
                if (typeof object[".tfnswVehicleDescriptor"] !== "object")
                    throw TypeError(".transit_realtime.VehicleDescriptor..tfnswVehicleDescriptor: object expected");
                message[".tfnswVehicleDescriptor"] = $root.TfnswVehicleDescriptor.fromObject(object[".tfnswVehicleDescriptor"]);
            }
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
                object[".tfnswVehicleDescriptor"] = null;
                object[".transitVehicleDescriptorExtension"] = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.licensePlate != null && message.hasOwnProperty("licensePlate"))
                object.licensePlate = message.licensePlate;
            if (message[".tfnswVehicleDescriptor"] != null && message.hasOwnProperty(".tfnswVehicleDescriptor"))
                object[".tfnswVehicleDescriptor"] = $root.TfnswVehicleDescriptor.toObject(message[".tfnswVehicleDescriptor"], options);
            if (message[".transitVehicleDescriptorExtension"] != null && message.hasOwnProperty(".transitVehicleDescriptorExtension"))
                object[".transitVehicleDescriptorExtension"] = $root.TransitVehicleDescriptorExtension.toObject(message[".transitVehicleDescriptorExtension"], options);
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
         * @property {number|null} [directionId] EntitySelector directionId
         * @property {ITransitInformedEntityExtension|null} [".transitEntitySelectorExtension"] EntitySelector .transitEntitySelectorExtension
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
         * EntitySelector directionId.
         * @member {number} directionId
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype.directionId = 0;

        /**
         * EntitySelector .transitEntitySelectorExtension.
         * @member {ITransitInformedEntityExtension|null|undefined} .transitEntitySelectorExtension
         * @memberof transit_realtime.EntitySelector
         * @instance
         */
        EntitySelector.prototype[".transitEntitySelectorExtension"] = null;

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
            if (message.directionId != null && message.hasOwnProperty("directionId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.directionId);
            if (message[".transitEntitySelectorExtension"] != null && message.hasOwnProperty(".transitEntitySelectorExtension"))
                $root.TransitInformedEntityExtension.encode(message[".transitEntitySelectorExtension"], writer.uint32(/* id 9514, wireType 2 =*/76114).fork()).ldelim();
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
                case 6:
                    message.directionId = reader.uint32();
                    break;
                case 9514:
                    message[".transitEntitySelectorExtension"] = $root.TransitInformedEntityExtension.decode(reader, reader.uint32());
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
            if (message.directionId != null && message.hasOwnProperty("directionId"))
                if (!$util.isInteger(message.directionId))
                    return "directionId: integer expected";
            if (message[".transitEntitySelectorExtension"] != null && message.hasOwnProperty(".transitEntitySelectorExtension")) {
                var error = $root.TransitInformedEntityExtension.verify(message[".transitEntitySelectorExtension"]);
                if (error)
                    return ".transitEntitySelectorExtension." + error;
            }
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
            if (object.directionId != null)
                message.directionId = object.directionId >>> 0;
            if (object[".transitEntitySelectorExtension"] != null) {
                if (typeof object[".transitEntitySelectorExtension"] !== "object")
                    throw TypeError(".transit_realtime.EntitySelector..transitEntitySelectorExtension: object expected");
                message[".transitEntitySelectorExtension"] = $root.TransitInformedEntityExtension.fromObject(object[".transitEntitySelectorExtension"]);
            }
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
                object.directionId = 0;
                object[".transitEntitySelectorExtension"] = null;
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
            if (message.directionId != null && message.hasOwnProperty("directionId"))
                object.directionId = message.directionId;
            if (message[".transitEntitySelectorExtension"] != null && message.hasOwnProperty(".transitEntitySelectorExtension"))
                object[".transitEntitySelectorExtension"] = $root.TransitInformedEntityExtension.toObject(message[".transitEntitySelectorExtension"], options);
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

$root.TfnswVehicleDescriptor = (function() {

    /**
     * Properties of a TfnswVehicleDescriptor.
     * @exports ITfnswVehicleDescriptor
     * @interface ITfnswVehicleDescriptor
     * @property {boolean|null} [airConditioned] TfnswVehicleDescriptor airConditioned
     * @property {number|null} [wheelchairAccessible] TfnswVehicleDescriptor wheelchairAccessible
     */

    /**
     * Constructs a new TfnswVehicleDescriptor.
     * @exports TfnswVehicleDescriptor
     * @classdesc Represents a TfnswVehicleDescriptor.
     * @implements ITfnswVehicleDescriptor
     * @constructor
     * @param {ITfnswVehicleDescriptor=} [properties] Properties to set
     */
    function TfnswVehicleDescriptor(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TfnswVehicleDescriptor airConditioned.
     * @member {boolean} airConditioned
     * @memberof TfnswVehicleDescriptor
     * @instance
     */
    TfnswVehicleDescriptor.prototype.airConditioned = true;

    /**
     * TfnswVehicleDescriptor wheelchairAccessible.
     * @member {number} wheelchairAccessible
     * @memberof TfnswVehicleDescriptor
     * @instance
     */
    TfnswVehicleDescriptor.prototype.wheelchairAccessible = 0;

    /**
     * Creates a new TfnswVehicleDescriptor instance using the specified properties.
     * @function create
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {ITfnswVehicleDescriptor=} [properties] Properties to set
     * @returns {TfnswVehicleDescriptor} TfnswVehicleDescriptor instance
     */
    TfnswVehicleDescriptor.create = function create(properties) {
        return new TfnswVehicleDescriptor(properties);
    };

    /**
     * Encodes the specified TfnswVehicleDescriptor message. Does not implicitly {@link TfnswVehicleDescriptor.verify|verify} messages.
     * @function encode
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {ITfnswVehicleDescriptor} message TfnswVehicleDescriptor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TfnswVehicleDescriptor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.airConditioned != null && message.hasOwnProperty("airConditioned"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.airConditioned);
        if (message.wheelchairAccessible != null && message.hasOwnProperty("wheelchairAccessible"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wheelchairAccessible);
        return writer;
    };

    /**
     * Encodes the specified TfnswVehicleDescriptor message, length delimited. Does not implicitly {@link TfnswVehicleDescriptor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {ITfnswVehicleDescriptor} message TfnswVehicleDescriptor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TfnswVehicleDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TfnswVehicleDescriptor message from the specified reader or buffer.
     * @function decode
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TfnswVehicleDescriptor} TfnswVehicleDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TfnswVehicleDescriptor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TfnswVehicleDescriptor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.airConditioned = reader.bool();
                break;
            case 2:
                message.wheelchairAccessible = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TfnswVehicleDescriptor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TfnswVehicleDescriptor} TfnswVehicleDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TfnswVehicleDescriptor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TfnswVehicleDescriptor message.
     * @function verify
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TfnswVehicleDescriptor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.airConditioned != null && message.hasOwnProperty("airConditioned"))
            if (typeof message.airConditioned !== "boolean")
                return "airConditioned: boolean expected";
        if (message.wheelchairAccessible != null && message.hasOwnProperty("wheelchairAccessible"))
            if (!$util.isInteger(message.wheelchairAccessible))
                return "wheelchairAccessible: integer expected";
        return null;
    };

    /**
     * Creates a TfnswVehicleDescriptor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TfnswVehicleDescriptor} TfnswVehicleDescriptor
     */
    TfnswVehicleDescriptor.fromObject = function fromObject(object) {
        if (object instanceof $root.TfnswVehicleDescriptor)
            return object;
        var message = new $root.TfnswVehicleDescriptor();
        if (object.airConditioned != null)
            message.airConditioned = Boolean(object.airConditioned);
        if (object.wheelchairAccessible != null)
            message.wheelchairAccessible = object.wheelchairAccessible | 0;
        return message;
    };

    /**
     * Creates a plain object from a TfnswVehicleDescriptor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TfnswVehicleDescriptor
     * @static
     * @param {TfnswVehicleDescriptor} message TfnswVehicleDescriptor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TfnswVehicleDescriptor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.airConditioned = true;
            object.wheelchairAccessible = 0;
        }
        if (message.airConditioned != null && message.hasOwnProperty("airConditioned"))
            object.airConditioned = message.airConditioned;
        if (message.wheelchairAccessible != null && message.hasOwnProperty("wheelchairAccessible"))
            object.wheelchairAccessible = message.wheelchairAccessible;
        return object;
    };

    /**
     * Converts this TfnswVehicleDescriptor to JSON.
     * @function toJSON
     * @memberof TfnswVehicleDescriptor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TfnswVehicleDescriptor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TfnswVehicleDescriptor;
})();

module.exports = $root;
