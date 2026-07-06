import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace transit_realtime. */
export namespace transit_realtime {

    /** Properties of a FeedMessage. */
    interface IFeedMessage {

        /** FeedMessage header */
        header: transit_realtime.IFeedHeader;

        /** FeedMessage entity */
        entity?: (transit_realtime.IFeedEntity[]|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a FeedMessage. */
    class FeedMessage implements IFeedMessage {

        /**
         * Constructs a new FeedMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IFeedMessage);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** FeedMessage header. */
        public header: transit_realtime.IFeedHeader;

        /** FeedMessage entity. */
        public entity: transit_realtime.IFeedEntity[];

        /**
         * Creates a new FeedMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeedMessage instance
         */
        public static create(properties?: transit_realtime.IFeedMessage): transit_realtime.FeedMessage;

        /**
         * Encodes the specified FeedMessage message. Does not implicitly {@link transit_realtime.FeedMessage.verify|verify} messages.
         * @param message FeedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IFeedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeedMessage message, length delimited. Does not implicitly {@link transit_realtime.FeedMessage.verify|verify} messages.
         * @param message FeedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IFeedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeedMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.FeedMessage;

        /**
         * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.FeedMessage;

        /**
         * Verifies a FeedMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeedMessage
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.FeedMessage;

        /**
         * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
         * @param message FeedMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.FeedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeedMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FeedMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a FeedHeader. */
    interface IFeedHeader {

        /** FeedHeader gtfsRealtimeVersion */
        gtfsRealtimeVersion: string;

        /** FeedHeader incrementality */
        incrementality?: (transit_realtime.FeedHeader.Incrementality|null);

        /** FeedHeader timestamp */
        timestamp?: (number|Long|null);

        /** FeedHeader feedVersion */
        feedVersion?: (string|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a FeedHeader. */
    class FeedHeader implements IFeedHeader {

        /**
         * Constructs a new FeedHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IFeedHeader);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** FeedHeader gtfsRealtimeVersion. */
        public gtfsRealtimeVersion: string;

        /** FeedHeader incrementality. */
        public incrementality: transit_realtime.FeedHeader.Incrementality;

        /** FeedHeader timestamp. */
        public timestamp: (number|Long);

        /** FeedHeader feedVersion. */
        public feedVersion: string;

        /**
         * Creates a new FeedHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeedHeader instance
         */
        public static create(properties?: transit_realtime.IFeedHeader): transit_realtime.FeedHeader;

        /**
         * Encodes the specified FeedHeader message. Does not implicitly {@link transit_realtime.FeedHeader.verify|verify} messages.
         * @param message FeedHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IFeedHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeedHeader message, length delimited. Does not implicitly {@link transit_realtime.FeedHeader.verify|verify} messages.
         * @param message FeedHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IFeedHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeedHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeedHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.FeedHeader;

        /**
         * Decodes a FeedHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeedHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.FeedHeader;

        /**
         * Verifies a FeedHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeedHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeedHeader
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.FeedHeader;

        /**
         * Creates a plain object from a FeedHeader message. Also converts values to other types if specified.
         * @param message FeedHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.FeedHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeedHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FeedHeader
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace FeedHeader {

        /** Incrementality enum. */
        enum Incrementality {
            FULL_DATASET = 0,
            DIFFERENTIAL = 1
        }
    }

    /** Properties of a FeedEntity. */
    interface IFeedEntity {

        /** FeedEntity id */
        id: string;

        /** FeedEntity isDeleted */
        isDeleted?: (boolean|null);

        /** FeedEntity tripUpdate */
        tripUpdate?: (transit_realtime.ITripUpdate|null);

        /** FeedEntity vehicle */
        vehicle?: (transit_realtime.IVehiclePosition|null);

        /** FeedEntity alert */
        alert?: (transit_realtime.IAlert|null);

        /** FeedEntity shape */
        shape?: (transit_realtime.IShape|null);

        /** FeedEntity stop */
        stop?: (transit_realtime.IStop|null);

        /** FeedEntity tripModifications */
        tripModifications?: (transit_realtime.ITripModifications|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a FeedEntity. */
    class FeedEntity implements IFeedEntity {

        /**
         * Constructs a new FeedEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IFeedEntity);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** FeedEntity id. */
        public id: string;

        /** FeedEntity isDeleted. */
        public isDeleted: boolean;

        /** FeedEntity tripUpdate. */
        public tripUpdate?: (transit_realtime.ITripUpdate|null);

        /** FeedEntity vehicle. */
        public vehicle?: (transit_realtime.IVehiclePosition|null);

        /** FeedEntity alert. */
        public alert?: (transit_realtime.IAlert|null);

        /** FeedEntity shape. */
        public shape?: (transit_realtime.IShape|null);

        /** FeedEntity stop. */
        public stop?: (transit_realtime.IStop|null);

        /** FeedEntity tripModifications. */
        public tripModifications?: (transit_realtime.ITripModifications|null);

        /**
         * Creates a new FeedEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeedEntity instance
         */
        public static create(properties?: transit_realtime.IFeedEntity): transit_realtime.FeedEntity;

        /**
         * Encodes the specified FeedEntity message. Does not implicitly {@link transit_realtime.FeedEntity.verify|verify} messages.
         * @param message FeedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IFeedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeedEntity message, length delimited. Does not implicitly {@link transit_realtime.FeedEntity.verify|verify} messages.
         * @param message FeedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IFeedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeedEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.FeedEntity;

        /**
         * Decodes a FeedEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.FeedEntity;

        /**
         * Verifies a FeedEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeedEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeedEntity
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.FeedEntity;

        /**
         * Creates a plain object from a FeedEntity message. Also converts values to other types if specified.
         * @param message FeedEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.FeedEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeedEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FeedEntity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a TripUpdate. */
    interface ITripUpdate {

        /** TripUpdate trip */
        trip: transit_realtime.ITripDescriptor;

        /** TripUpdate vehicle */
        vehicle?: (transit_realtime.IVehicleDescriptor|null);

        /** TripUpdate stopTimeUpdate */
        stopTimeUpdate?: (transit_realtime.TripUpdate.IStopTimeUpdate[]|null);

        /** TripUpdate timestamp */
        timestamp?: (number|Long|null);

        /** TripUpdate delay */
        delay?: (number|null);

        /** TripUpdate tripProperties */
        tripProperties?: (transit_realtime.TripUpdate.ITripProperties|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a TripUpdate. */
    class TripUpdate implements ITripUpdate {

        /**
         * Constructs a new TripUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.ITripUpdate);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** TripUpdate trip. */
        public trip: transit_realtime.ITripDescriptor;

        /** TripUpdate vehicle. */
        public vehicle?: (transit_realtime.IVehicleDescriptor|null);

        /** TripUpdate stopTimeUpdate. */
        public stopTimeUpdate: transit_realtime.TripUpdate.IStopTimeUpdate[];

        /** TripUpdate timestamp. */
        public timestamp: (number|Long);

        /** TripUpdate delay. */
        public delay: number;

        /** TripUpdate tripProperties. */
        public tripProperties?: (transit_realtime.TripUpdate.ITripProperties|null);

        /**
         * Creates a new TripUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TripUpdate instance
         */
        public static create(properties?: transit_realtime.ITripUpdate): transit_realtime.TripUpdate;

        /**
         * Encodes the specified TripUpdate message. Does not implicitly {@link transit_realtime.TripUpdate.verify|verify} messages.
         * @param message TripUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.ITripUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TripUpdate message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.verify|verify} messages.
         * @param message TripUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.ITripUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TripUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TripUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripUpdate;

        /**
         * Decodes a TripUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TripUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripUpdate;

        /**
         * Verifies a TripUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TripUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TripUpdate
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.TripUpdate;

        /**
         * Creates a plain object from a TripUpdate message. Also converts values to other types if specified.
         * @param message TripUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.TripUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TripUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TripUpdate
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace TripUpdate {

        /** Properties of a StopTimeEvent. */
        interface IStopTimeEvent {

            /** StopTimeEvent delay */
            delay?: (number|null);

            /** StopTimeEvent time */
            time?: (number|Long|null);

            /** StopTimeEvent uncertainty */
            uncertainty?: (number|null);

            /** StopTimeEvent scheduledTime */
            scheduledTime?: (number|Long|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a StopTimeEvent. */
        class StopTimeEvent implements IStopTimeEvent {

            /**
             * Constructs a new StopTimeEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TripUpdate.IStopTimeEvent);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** StopTimeEvent delay. */
            public delay: number;

            /** StopTimeEvent time. */
            public time: (number|Long);

            /** StopTimeEvent uncertainty. */
            public uncertainty: number;

            /** StopTimeEvent scheduledTime. */
            public scheduledTime: (number|Long);

            /**
             * Creates a new StopTimeEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopTimeEvent instance
             */
            public static create(properties?: transit_realtime.TripUpdate.IStopTimeEvent): transit_realtime.TripUpdate.StopTimeEvent;

            /**
             * Encodes the specified StopTimeEvent message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeEvent.verify|verify} messages.
             * @param message StopTimeEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TripUpdate.IStopTimeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopTimeEvent message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeEvent.verify|verify} messages.
             * @param message StopTimeEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TripUpdate.IStopTimeEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopTimeEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopTimeEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripUpdate.StopTimeEvent;

            /**
             * Decodes a StopTimeEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopTimeEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripUpdate.StopTimeEvent;

            /**
             * Verifies a StopTimeEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopTimeEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopTimeEvent
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TripUpdate.StopTimeEvent;

            /**
             * Creates a plain object from a StopTimeEvent message. Also converts values to other types if specified.
             * @param message StopTimeEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TripUpdate.StopTimeEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopTimeEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StopTimeEvent
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }

        /** Properties of a StopTimeUpdate. */
        interface IStopTimeUpdate {

            /** StopTimeUpdate stopSequence */
            stopSequence?: (number|null);

            /** StopTimeUpdate stopId */
            stopId?: (string|null);

            /** StopTimeUpdate arrival */
            arrival?: (transit_realtime.TripUpdate.IStopTimeEvent|null);

            /** StopTimeUpdate departure */
            departure?: (transit_realtime.TripUpdate.IStopTimeEvent|null);

            /** StopTimeUpdate departureOccupancyStatus */
            departureOccupancyStatus?: (transit_realtime.VehiclePosition.OccupancyStatus|null);

            /** StopTimeUpdate scheduleRelationship */
            scheduleRelationship?: (transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship|null);

            /** StopTimeUpdate stopTimeProperties */
            stopTimeProperties?: (transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a StopTimeUpdate. */
        class StopTimeUpdate implements IStopTimeUpdate {

            /**
             * Constructs a new StopTimeUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TripUpdate.IStopTimeUpdate);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** StopTimeUpdate stopSequence. */
            public stopSequence: number;

            /** StopTimeUpdate stopId. */
            public stopId: string;

            /** StopTimeUpdate arrival. */
            public arrival?: (transit_realtime.TripUpdate.IStopTimeEvent|null);

            /** StopTimeUpdate departure. */
            public departure?: (transit_realtime.TripUpdate.IStopTimeEvent|null);

            /** StopTimeUpdate departureOccupancyStatus. */
            public departureOccupancyStatus: transit_realtime.VehiclePosition.OccupancyStatus;

            /** StopTimeUpdate scheduleRelationship. */
            public scheduleRelationship: transit_realtime.TripUpdate.StopTimeUpdate.ScheduleRelationship;

            /** StopTimeUpdate stopTimeProperties. */
            public stopTimeProperties?: (transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties|null);

            /**
             * Creates a new StopTimeUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopTimeUpdate instance
             */
            public static create(properties?: transit_realtime.TripUpdate.IStopTimeUpdate): transit_realtime.TripUpdate.StopTimeUpdate;

            /**
             * Encodes the specified StopTimeUpdate message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.verify|verify} messages.
             * @param message StopTimeUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TripUpdate.IStopTimeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopTimeUpdate message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.verify|verify} messages.
             * @param message StopTimeUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TripUpdate.IStopTimeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopTimeUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopTimeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripUpdate.StopTimeUpdate;

            /**
             * Decodes a StopTimeUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopTimeUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripUpdate.StopTimeUpdate;

            /**
             * Verifies a StopTimeUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopTimeUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopTimeUpdate
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TripUpdate.StopTimeUpdate;

            /**
             * Creates a plain object from a StopTimeUpdate message. Also converts values to other types if specified.
             * @param message StopTimeUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TripUpdate.StopTimeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopTimeUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for StopTimeUpdate
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }

        namespace StopTimeUpdate {

            /** ScheduleRelationship enum. */
            enum ScheduleRelationship {
                SCHEDULED = 0,
                SKIPPED = 1,
                NO_DATA = 2,
                UNSCHEDULED = 3
            }

            /** Properties of a StopTimeProperties. */
            interface IStopTimeProperties {

                /** StopTimeProperties assignedStopId */
                assignedStopId?: (string|null);

                /** StopTimeProperties stopHeadsign */
                stopHeadsign?: (string|null);

                /** StopTimeProperties pickupType */
                pickupType?: (transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType|null);

                /** StopTimeProperties dropOffType */
                dropOffType?: (transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Represents a StopTimeProperties. */
            class StopTimeProperties implements IStopTimeProperties {

                /**
                 * Constructs a new StopTimeProperties.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties);

                /** Unknown fields preserved while decoding */
                public $unknowns?: Uint8Array[];

                /** StopTimeProperties assignedStopId. */
                public assignedStopId: string;

                /** StopTimeProperties stopHeadsign. */
                public stopHeadsign: string;

                /** StopTimeProperties pickupType. */
                public pickupType: transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType;

                /** StopTimeProperties dropOffType. */
                public dropOffType: transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType;

                /**
                 * Creates a new StopTimeProperties instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StopTimeProperties instance
                 */
                public static create(properties?: transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties): transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties;

                /**
                 * Encodes the specified StopTimeProperties message. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.verify|verify} messages.
                 * @param message StopTimeProperties message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StopTimeProperties message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties.verify|verify} messages.
                 * @param message StopTimeProperties message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: transit_realtime.TripUpdate.StopTimeUpdate.IStopTimeProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StopTimeProperties message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StopTimeProperties
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties;

                /**
                 * Decodes a StopTimeProperties message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StopTimeProperties
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties;

                /**
                 * Verifies a StopTimeProperties message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StopTimeProperties message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StopTimeProperties
                 */
                public static fromObject(object: { [k: string]: any }): transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties;

                /**
                 * Creates a plain object from a StopTimeProperties message. Also converts values to other types if specified.
                 * @param message StopTimeProperties
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: transit_realtime.TripUpdate.StopTimeUpdate.StopTimeProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StopTimeProperties to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the type url for StopTimeProperties
                 * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns The type url
                 */
                public static getTypeUrl(prefix?: string): string;
            }

            namespace StopTimeProperties {

                /** DropOffPickupType enum. */
                enum DropOffPickupType {
                    REGULAR = 0,
                    NONE = 1,
                    PHONE_AGENCY = 2,
                    COORDINATE_WITH_DRIVER = 3
                }
            }
        }

        /** Properties of a TripProperties. */
        interface ITripProperties {

            /** TripProperties tripId */
            tripId?: (string|null);

            /** TripProperties startDate */
            startDate?: (string|null);

            /** TripProperties startTime */
            startTime?: (string|null);

            /** TripProperties shapeId */
            shapeId?: (string|null);

            /** TripProperties tripHeadsign */
            tripHeadsign?: (string|null);

            /** TripProperties tripShortName */
            tripShortName?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a TripProperties. */
        class TripProperties implements ITripProperties {

            /**
             * Constructs a new TripProperties.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TripUpdate.ITripProperties);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** TripProperties tripId. */
            public tripId: string;

            /** TripProperties startDate. */
            public startDate: string;

            /** TripProperties startTime. */
            public startTime: string;

            /** TripProperties shapeId. */
            public shapeId: string;

            /** TripProperties tripHeadsign. */
            public tripHeadsign: string;

            /** TripProperties tripShortName. */
            public tripShortName: string;

            /**
             * Creates a new TripProperties instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TripProperties instance
             */
            public static create(properties?: transit_realtime.TripUpdate.ITripProperties): transit_realtime.TripUpdate.TripProperties;

            /**
             * Encodes the specified TripProperties message. Does not implicitly {@link transit_realtime.TripUpdate.TripProperties.verify|verify} messages.
             * @param message TripProperties message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TripUpdate.ITripProperties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TripProperties message, length delimited. Does not implicitly {@link transit_realtime.TripUpdate.TripProperties.verify|verify} messages.
             * @param message TripProperties message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TripUpdate.ITripProperties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TripProperties message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TripProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripUpdate.TripProperties;

            /**
             * Decodes a TripProperties message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TripProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripUpdate.TripProperties;

            /**
             * Verifies a TripProperties message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TripProperties message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TripProperties
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TripUpdate.TripProperties;

            /**
             * Creates a plain object from a TripProperties message. Also converts values to other types if specified.
             * @param message TripProperties
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TripUpdate.TripProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TripProperties to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for TripProperties
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }
    }

    /** Properties of a VehiclePosition. */
    interface IVehiclePosition {

        /** VehiclePosition trip */
        trip?: (transit_realtime.ITripDescriptor|null);

        /** VehiclePosition vehicle */
        vehicle?: (transit_realtime.IVehicleDescriptor|null);

        /** VehiclePosition position */
        position?: (transit_realtime.IPosition|null);

        /** VehiclePosition currentStopSequence */
        currentStopSequence?: (number|null);

        /** VehiclePosition stopId */
        stopId?: (string|null);

        /** VehiclePosition currentStatus */
        currentStatus?: (transit_realtime.VehiclePosition.VehicleStopStatus|null);

        /** VehiclePosition timestamp */
        timestamp?: (number|Long|null);

        /** VehiclePosition congestionLevel */
        congestionLevel?: (transit_realtime.VehiclePosition.CongestionLevel|null);

        /** VehiclePosition occupancyStatus */
        occupancyStatus?: (transit_realtime.VehiclePosition.OccupancyStatus|null);

        /** VehiclePosition occupancyPercentage */
        occupancyPercentage?: (number|null);

        /** VehiclePosition multiCarriageDetails */
        multiCarriageDetails?: (transit_realtime.VehiclePosition.ICarriageDetails[]|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a VehiclePosition. */
    class VehiclePosition implements IVehiclePosition {

        /**
         * Constructs a new VehiclePosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IVehiclePosition);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** VehiclePosition trip. */
        public trip?: (transit_realtime.ITripDescriptor|null);

        /** VehiclePosition vehicle. */
        public vehicle?: (transit_realtime.IVehicleDescriptor|null);

        /** VehiclePosition position. */
        public position?: (transit_realtime.IPosition|null);

        /** VehiclePosition currentStopSequence. */
        public currentStopSequence: number;

        /** VehiclePosition stopId. */
        public stopId: string;

        /** VehiclePosition currentStatus. */
        public currentStatus: transit_realtime.VehiclePosition.VehicleStopStatus;

        /** VehiclePosition timestamp. */
        public timestamp: (number|Long);

        /** VehiclePosition congestionLevel. */
        public congestionLevel: transit_realtime.VehiclePosition.CongestionLevel;

        /** VehiclePosition occupancyStatus. */
        public occupancyStatus: transit_realtime.VehiclePosition.OccupancyStatus;

        /** VehiclePosition occupancyPercentage. */
        public occupancyPercentage: number;

        /** VehiclePosition multiCarriageDetails. */
        public multiCarriageDetails: transit_realtime.VehiclePosition.ICarriageDetails[];

        /**
         * Creates a new VehiclePosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VehiclePosition instance
         */
        public static create(properties?: transit_realtime.IVehiclePosition): transit_realtime.VehiclePosition;

        /**
         * Encodes the specified VehiclePosition message. Does not implicitly {@link transit_realtime.VehiclePosition.verify|verify} messages.
         * @param message VehiclePosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IVehiclePosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VehiclePosition message, length delimited. Does not implicitly {@link transit_realtime.VehiclePosition.verify|verify} messages.
         * @param message VehiclePosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IVehiclePosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehiclePosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VehiclePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.VehiclePosition;

        /**
         * Decodes a VehiclePosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VehiclePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.VehiclePosition;

        /**
         * Verifies a VehiclePosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VehiclePosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VehiclePosition
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.VehiclePosition;

        /**
         * Creates a plain object from a VehiclePosition message. Also converts values to other types if specified.
         * @param message VehiclePosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.VehiclePosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VehiclePosition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VehiclePosition
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace VehiclePosition {

        /** VehicleStopStatus enum. */
        enum VehicleStopStatus {
            INCOMING_AT = 0,
            STOPPED_AT = 1,
            IN_TRANSIT_TO = 2
        }

        /** CongestionLevel enum. */
        enum CongestionLevel {
            UNKNOWN_CONGESTION_LEVEL = 0,
            RUNNING_SMOOTHLY = 1,
            STOP_AND_GO = 2,
            CONGESTION = 3,
            SEVERE_CONGESTION = 4
        }

        /** OccupancyStatus enum. */
        enum OccupancyStatus {
            EMPTY = 0,
            MANY_SEATS_AVAILABLE = 1,
            FEW_SEATS_AVAILABLE = 2,
            STANDING_ROOM_ONLY = 3,
            CRUSHED_STANDING_ROOM_ONLY = 4,
            FULL = 5,
            NOT_ACCEPTING_PASSENGERS = 6,
            NO_DATA_AVAILABLE = 7,
            NOT_BOARDABLE = 8
        }

        /** Properties of a CarriageDetails. */
        interface ICarriageDetails {

            /** CarriageDetails id */
            id?: (string|null);

            /** CarriageDetails label */
            label?: (string|null);

            /** CarriageDetails occupancyStatus */
            occupancyStatus?: (transit_realtime.VehiclePosition.OccupancyStatus|null);

            /** CarriageDetails occupancyPercentage */
            occupancyPercentage?: (number|null);

            /** CarriageDetails carriageSequence */
            carriageSequence?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a CarriageDetails. */
        class CarriageDetails implements ICarriageDetails {

            /**
             * Constructs a new CarriageDetails.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.VehiclePosition.ICarriageDetails);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** CarriageDetails id. */
            public id: string;

            /** CarriageDetails label. */
            public label: string;

            /** CarriageDetails occupancyStatus. */
            public occupancyStatus: transit_realtime.VehiclePosition.OccupancyStatus;

            /** CarriageDetails occupancyPercentage. */
            public occupancyPercentage: number;

            /** CarriageDetails carriageSequence. */
            public carriageSequence: number;

            /**
             * Creates a new CarriageDetails instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarriageDetails instance
             */
            public static create(properties?: transit_realtime.VehiclePosition.ICarriageDetails): transit_realtime.VehiclePosition.CarriageDetails;

            /**
             * Encodes the specified CarriageDetails message. Does not implicitly {@link transit_realtime.VehiclePosition.CarriageDetails.verify|verify} messages.
             * @param message CarriageDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.VehiclePosition.ICarriageDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarriageDetails message, length delimited. Does not implicitly {@link transit_realtime.VehiclePosition.CarriageDetails.verify|verify} messages.
             * @param message CarriageDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.VehiclePosition.ICarriageDetails, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarriageDetails message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarriageDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.VehiclePosition.CarriageDetails;

            /**
             * Decodes a CarriageDetails message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarriageDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.VehiclePosition.CarriageDetails;

            /**
             * Verifies a CarriageDetails message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarriageDetails message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarriageDetails
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.VehiclePosition.CarriageDetails;

            /**
             * Creates a plain object from a CarriageDetails message. Also converts values to other types if specified.
             * @param message CarriageDetails
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.VehiclePosition.CarriageDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarriageDetails to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for CarriageDetails
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }
    }

    /** Properties of an Alert. */
    interface IAlert {

        /** Alert activePeriod */
        activePeriod?: (transit_realtime.ITimeRange[]|null);

        /** Alert communicationPeriod */
        communicationPeriod?: (transit_realtime.ITimeRange[]|null);

        /** Alert impactPeriod */
        impactPeriod?: (transit_realtime.ITimeRange[]|null);

        /** Alert informedEntity */
        informedEntity?: (transit_realtime.IEntitySelector[]|null);

        /** Alert cause */
        cause?: (transit_realtime.Alert.Cause|null);

        /** Alert effect */
        effect?: (transit_realtime.Alert.Effect|null);

        /** Alert url */
        url?: (transit_realtime.ITranslatedString|null);

        /** Alert headerText */
        headerText?: (transit_realtime.ITranslatedString|null);

        /** Alert descriptionText */
        descriptionText?: (transit_realtime.ITranslatedString|null);

        /** Alert ttsHeaderText */
        ttsHeaderText?: (transit_realtime.ITranslatedString|null);

        /** Alert ttsDescriptionText */
        ttsDescriptionText?: (transit_realtime.ITranslatedString|null);

        /** Alert severityLevel */
        severityLevel?: (transit_realtime.Alert.SeverityLevel|null);

        /** Alert image */
        image?: (transit_realtime.ITranslatedImage|null);

        /** Alert imageAlternativeText */
        imageAlternativeText?: (transit_realtime.ITranslatedString|null);

        /** Alert causeDetail */
        causeDetail?: (transit_realtime.ITranslatedString|null);

        /** Alert effectDetail */
        effectDetail?: (transit_realtime.ITranslatedString|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents an Alert. */
    class Alert implements IAlert {

        /**
         * Constructs a new Alert.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IAlert);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** Alert activePeriod. */
        public activePeriod: transit_realtime.ITimeRange[];

        /** Alert communicationPeriod. */
        public communicationPeriod: transit_realtime.ITimeRange[];

        /** Alert impactPeriod. */
        public impactPeriod: transit_realtime.ITimeRange[];

        /** Alert informedEntity. */
        public informedEntity: transit_realtime.IEntitySelector[];

        /** Alert cause. */
        public cause: transit_realtime.Alert.Cause;

        /** Alert effect. */
        public effect: transit_realtime.Alert.Effect;

        /** Alert url. */
        public url?: (transit_realtime.ITranslatedString|null);

        /** Alert headerText. */
        public headerText?: (transit_realtime.ITranslatedString|null);

        /** Alert descriptionText. */
        public descriptionText?: (transit_realtime.ITranslatedString|null);

        /** Alert ttsHeaderText. */
        public ttsHeaderText?: (transit_realtime.ITranslatedString|null);

        /** Alert ttsDescriptionText. */
        public ttsDescriptionText?: (transit_realtime.ITranslatedString|null);

        /** Alert severityLevel. */
        public severityLevel: transit_realtime.Alert.SeverityLevel;

        /** Alert image. */
        public image?: (transit_realtime.ITranslatedImage|null);

        /** Alert imageAlternativeText. */
        public imageAlternativeText?: (transit_realtime.ITranslatedString|null);

        /** Alert causeDetail. */
        public causeDetail?: (transit_realtime.ITranslatedString|null);

        /** Alert effectDetail. */
        public effectDetail?: (transit_realtime.ITranslatedString|null);

        /**
         * Creates a new Alert instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Alert instance
         */
        public static create(properties?: transit_realtime.IAlert): transit_realtime.Alert;

        /**
         * Encodes the specified Alert message. Does not implicitly {@link transit_realtime.Alert.verify|verify} messages.
         * @param message Alert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IAlert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Alert message, length delimited. Does not implicitly {@link transit_realtime.Alert.verify|verify} messages.
         * @param message Alert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IAlert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Alert message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Alert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.Alert;

        /**
         * Decodes an Alert message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Alert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.Alert;

        /**
         * Verifies an Alert message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Alert message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Alert
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.Alert;

        /**
         * Creates a plain object from an Alert message. Also converts values to other types if specified.
         * @param message Alert
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.Alert, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Alert to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Alert
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace Alert {

        /** Cause enum. */
        enum Cause {
            UNKNOWN_CAUSE = 1,
            OTHER_CAUSE = 2,
            TECHNICAL_PROBLEM = 3,
            STRIKE = 4,
            DEMONSTRATION = 5,
            ACCIDENT = 6,
            HOLIDAY = 7,
            WEATHER = 8,
            MAINTENANCE = 9,
            CONSTRUCTION = 10,
            POLICE_ACTIVITY = 11,
            MEDICAL_EMERGENCY = 12,
            SPECIAL_EVENT = 13
        }

        /** Effect enum. */
        enum Effect {
            NO_SERVICE = 1,
            REDUCED_SERVICE = 2,
            SIGNIFICANT_DELAYS = 3,
            DETOUR = 4,
            ADDITIONAL_SERVICE = 5,
            MODIFIED_SERVICE = 6,
            OTHER_EFFECT = 7,
            UNKNOWN_EFFECT = 8,
            STOP_MOVED = 9,
            NO_EFFECT = 10,
            ACCESSIBILITY_ISSUE = 11
        }

        /** SeverityLevel enum. */
        enum SeverityLevel {
            UNKNOWN_SEVERITY = 1,
            INFO = 2,
            WARNING = 3,
            SEVERE = 4
        }
    }

    /** Properties of a TimeRange. */
    interface ITimeRange {

        /** TimeRange start */
        start?: (number|Long|null);

        /** TimeRange end */
        end?: (number|Long|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a TimeRange. */
    class TimeRange implements ITimeRange {

        /**
         * Constructs a new TimeRange.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.ITimeRange);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** TimeRange start. */
        public start: (number|Long);

        /** TimeRange end. */
        public end: (number|Long);

        /**
         * Creates a new TimeRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeRange instance
         */
        public static create(properties?: transit_realtime.ITimeRange): transit_realtime.TimeRange;

        /**
         * Encodes the specified TimeRange message. Does not implicitly {@link transit_realtime.TimeRange.verify|verify} messages.
         * @param message TimeRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.ITimeRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeRange message, length delimited. Does not implicitly {@link transit_realtime.TimeRange.verify|verify} messages.
         * @param message TimeRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.ITimeRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TimeRange;

        /**
         * Decodes a TimeRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TimeRange;

        /**
         * Verifies a TimeRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeRange
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.TimeRange;

        /**
         * Creates a plain object from a TimeRange message. Also converts values to other types if specified.
         * @param message TimeRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.TimeRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TimeRange
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position latitude */
        latitude: number;

        /** Position longitude */
        longitude: number;

        /** Position bearing */
        bearing?: (number|null);

        /** Position odometer */
        odometer?: (number|null);

        /** Position speed */
        speed?: (number|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IPosition);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** Position latitude. */
        public latitude: number;

        /** Position longitude. */
        public longitude: number;

        /** Position bearing. */
        public bearing: number;

        /** Position odometer. */
        public odometer: number;

        /** Position speed. */
        public speed: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: transit_realtime.IPosition): transit_realtime.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link transit_realtime.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link transit_realtime.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Position
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a TripDescriptor. */
    interface ITripDescriptor {

        /** TripDescriptor tripId */
        tripId?: (string|null);

        /** TripDescriptor routeId */
        routeId?: (string|null);

        /** TripDescriptor directionId */
        directionId?: (number|null);

        /** TripDescriptor startTime */
        startTime?: (string|null);

        /** TripDescriptor startDate */
        startDate?: (string|null);

        /** TripDescriptor scheduleRelationship */
        scheduleRelationship?: (transit_realtime.TripDescriptor.ScheduleRelationship|null);

        /** TripDescriptor modifiedTrip */
        modifiedTrip?: (transit_realtime.TripDescriptor.IModifiedTripSelector|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a TripDescriptor. */
    class TripDescriptor implements ITripDescriptor {

        /**
         * Constructs a new TripDescriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.ITripDescriptor);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** TripDescriptor tripId. */
        public tripId: string;

        /** TripDescriptor routeId. */
        public routeId: string;

        /** TripDescriptor directionId. */
        public directionId: number;

        /** TripDescriptor startTime. */
        public startTime: string;

        /** TripDescriptor startDate. */
        public startDate: string;

        /** TripDescriptor scheduleRelationship. */
        public scheduleRelationship: transit_realtime.TripDescriptor.ScheduleRelationship;

        /** TripDescriptor modifiedTrip. */
        public modifiedTrip?: (transit_realtime.TripDescriptor.IModifiedTripSelector|null);

        /**
         * Creates a new TripDescriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TripDescriptor instance
         */
        public static create(properties?: transit_realtime.ITripDescriptor): transit_realtime.TripDescriptor;

        /**
         * Encodes the specified TripDescriptor message. Does not implicitly {@link transit_realtime.TripDescriptor.verify|verify} messages.
         * @param message TripDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.ITripDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TripDescriptor message, length delimited. Does not implicitly {@link transit_realtime.TripDescriptor.verify|verify} messages.
         * @param message TripDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.ITripDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TripDescriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TripDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripDescriptor;

        /**
         * Decodes a TripDescriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TripDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripDescriptor;

        /**
         * Verifies a TripDescriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TripDescriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TripDescriptor
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.TripDescriptor;

        /**
         * Creates a plain object from a TripDescriptor message. Also converts values to other types if specified.
         * @param message TripDescriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.TripDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TripDescriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TripDescriptor
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace TripDescriptor {

        /** ScheduleRelationship enum. */
        enum ScheduleRelationship {
            SCHEDULED = 0,
            ADDED = 1,
            UNSCHEDULED = 2,
            CANCELED = 3,
            REPLACEMENT = 5,
            DUPLICATED = 6,
            DELETED = 7,
            NEW = 8
        }

        /** Properties of a ModifiedTripSelector. */
        interface IModifiedTripSelector {

            /** ModifiedTripSelector modificationsId */
            modificationsId?: (string|null);

            /** ModifiedTripSelector affectedTripId */
            affectedTripId?: (string|null);

            /** ModifiedTripSelector startTime */
            startTime?: (string|null);

            /** ModifiedTripSelector startDate */
            startDate?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a ModifiedTripSelector. */
        class ModifiedTripSelector implements IModifiedTripSelector {

            /**
             * Constructs a new ModifiedTripSelector.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TripDescriptor.IModifiedTripSelector);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** ModifiedTripSelector modificationsId. */
            public modificationsId: string;

            /** ModifiedTripSelector affectedTripId. */
            public affectedTripId: string;

            /** ModifiedTripSelector startTime. */
            public startTime: string;

            /** ModifiedTripSelector startDate. */
            public startDate: string;

            /**
             * Creates a new ModifiedTripSelector instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModifiedTripSelector instance
             */
            public static create(properties?: transit_realtime.TripDescriptor.IModifiedTripSelector): transit_realtime.TripDescriptor.ModifiedTripSelector;

            /**
             * Encodes the specified ModifiedTripSelector message. Does not implicitly {@link transit_realtime.TripDescriptor.ModifiedTripSelector.verify|verify} messages.
             * @param message ModifiedTripSelector message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TripDescriptor.IModifiedTripSelector, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModifiedTripSelector message, length delimited. Does not implicitly {@link transit_realtime.TripDescriptor.ModifiedTripSelector.verify|verify} messages.
             * @param message ModifiedTripSelector message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TripDescriptor.IModifiedTripSelector, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModifiedTripSelector message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModifiedTripSelector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripDescriptor.ModifiedTripSelector;

            /**
             * Decodes a ModifiedTripSelector message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModifiedTripSelector
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripDescriptor.ModifiedTripSelector;

            /**
             * Verifies a ModifiedTripSelector message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModifiedTripSelector message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModifiedTripSelector
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TripDescriptor.ModifiedTripSelector;

            /**
             * Creates a plain object from a ModifiedTripSelector message. Also converts values to other types if specified.
             * @param message ModifiedTripSelector
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TripDescriptor.ModifiedTripSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModifiedTripSelector to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ModifiedTripSelector
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }
    }

    /** Properties of a VehicleDescriptor. */
    interface IVehicleDescriptor {

        /** VehicleDescriptor id */
        id?: (string|null);

        /** VehicleDescriptor label */
        label?: (string|null);

        /** VehicleDescriptor licensePlate */
        licensePlate?: (string|null);

        /** VehicleDescriptor wheelchairAccessible */
        wheelchairAccessible?: (transit_realtime.VehicleDescriptor.WheelchairAccessible|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a VehicleDescriptor. */
    class VehicleDescriptor implements IVehicleDescriptor {

        /**
         * Constructs a new VehicleDescriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IVehicleDescriptor);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** VehicleDescriptor id. */
        public id: string;

        /** VehicleDescriptor label. */
        public label: string;

        /** VehicleDescriptor licensePlate. */
        public licensePlate: string;

        /** VehicleDescriptor wheelchairAccessible. */
        public wheelchairAccessible: transit_realtime.VehicleDescriptor.WheelchairAccessible;

        /**
         * Creates a new VehicleDescriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VehicleDescriptor instance
         */
        public static create(properties?: transit_realtime.IVehicleDescriptor): transit_realtime.VehicleDescriptor;

        /**
         * Encodes the specified VehicleDescriptor message. Does not implicitly {@link transit_realtime.VehicleDescriptor.verify|verify} messages.
         * @param message VehicleDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IVehicleDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VehicleDescriptor message, length delimited. Does not implicitly {@link transit_realtime.VehicleDescriptor.verify|verify} messages.
         * @param message VehicleDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IVehicleDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VehicleDescriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VehicleDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.VehicleDescriptor;

        /**
         * Decodes a VehicleDescriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VehicleDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.VehicleDescriptor;

        /**
         * Verifies a VehicleDescriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VehicleDescriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VehicleDescriptor
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.VehicleDescriptor;

        /**
         * Creates a plain object from a VehicleDescriptor message. Also converts values to other types if specified.
         * @param message VehicleDescriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.VehicleDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VehicleDescriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VehicleDescriptor
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace VehicleDescriptor {

        /** WheelchairAccessible enum. */
        enum WheelchairAccessible {
            NO_VALUE = 0,
            UNKNOWN = 1,
            WHEELCHAIR_ACCESSIBLE = 2,
            WHEELCHAIR_INACCESSIBLE = 3
        }
    }

    /** Properties of an EntitySelector. */
    interface IEntitySelector {

        /** EntitySelector agencyId */
        agencyId?: (string|null);

        /** EntitySelector routeId */
        routeId?: (string|null);

        /** EntitySelector routeType */
        routeType?: (number|null);

        /** EntitySelector trip */
        trip?: (transit_realtime.ITripDescriptor|null);

        /** EntitySelector stopId */
        stopId?: (string|null);

        /** EntitySelector directionId */
        directionId?: (number|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents an EntitySelector. */
    class EntitySelector implements IEntitySelector {

        /**
         * Constructs a new EntitySelector.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IEntitySelector);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** EntitySelector agencyId. */
        public agencyId: string;

        /** EntitySelector routeId. */
        public routeId: string;

        /** EntitySelector routeType. */
        public routeType: number;

        /** EntitySelector trip. */
        public trip?: (transit_realtime.ITripDescriptor|null);

        /** EntitySelector stopId. */
        public stopId: string;

        /** EntitySelector directionId. */
        public directionId: number;

        /**
         * Creates a new EntitySelector instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntitySelector instance
         */
        public static create(properties?: transit_realtime.IEntitySelector): transit_realtime.EntitySelector;

        /**
         * Encodes the specified EntitySelector message. Does not implicitly {@link transit_realtime.EntitySelector.verify|verify} messages.
         * @param message EntitySelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IEntitySelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntitySelector message, length delimited. Does not implicitly {@link transit_realtime.EntitySelector.verify|verify} messages.
         * @param message EntitySelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IEntitySelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntitySelector message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntitySelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.EntitySelector;

        /**
         * Decodes an EntitySelector message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntitySelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.EntitySelector;

        /**
         * Verifies an EntitySelector message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntitySelector message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntitySelector
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.EntitySelector;

        /**
         * Creates a plain object from an EntitySelector message. Also converts values to other types if specified.
         * @param message EntitySelector
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.EntitySelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntitySelector to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EntitySelector
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a TranslatedString. */
    interface ITranslatedString {

        /** TranslatedString translation */
        translation?: (transit_realtime.TranslatedString.ITranslation[]|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a TranslatedString. */
    class TranslatedString implements ITranslatedString {

        /**
         * Constructs a new TranslatedString.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.ITranslatedString);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** TranslatedString translation. */
        public translation: transit_realtime.TranslatedString.ITranslation[];

        /**
         * Creates a new TranslatedString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TranslatedString instance
         */
        public static create(properties?: transit_realtime.ITranslatedString): transit_realtime.TranslatedString;

        /**
         * Encodes the specified TranslatedString message. Does not implicitly {@link transit_realtime.TranslatedString.verify|verify} messages.
         * @param message TranslatedString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.ITranslatedString, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TranslatedString message, length delimited. Does not implicitly {@link transit_realtime.TranslatedString.verify|verify} messages.
         * @param message TranslatedString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.ITranslatedString, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TranslatedString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TranslatedString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TranslatedString;

        /**
         * Decodes a TranslatedString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TranslatedString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TranslatedString;

        /**
         * Verifies a TranslatedString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TranslatedString message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TranslatedString
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.TranslatedString;

        /**
         * Creates a plain object from a TranslatedString message. Also converts values to other types if specified.
         * @param message TranslatedString
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.TranslatedString, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TranslatedString to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TranslatedString
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace TranslatedString {

        /** Properties of a Translation. */
        interface ITranslation {

            /** Translation text */
            text: string;

            /** Translation language */
            language?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a Translation. */
        class Translation implements ITranslation {

            /**
             * Constructs a new Translation.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TranslatedString.ITranslation);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** Translation text. */
            public text: string;

            /** Translation language. */
            public language: string;

            /**
             * Creates a new Translation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Translation instance
             */
            public static create(properties?: transit_realtime.TranslatedString.ITranslation): transit_realtime.TranslatedString.Translation;

            /**
             * Encodes the specified Translation message. Does not implicitly {@link transit_realtime.TranslatedString.Translation.verify|verify} messages.
             * @param message Translation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TranslatedString.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Translation message, length delimited. Does not implicitly {@link transit_realtime.TranslatedString.Translation.verify|verify} messages.
             * @param message Translation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TranslatedString.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Translation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Translation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TranslatedString.Translation;

            /**
             * Decodes a Translation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Translation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TranslatedString.Translation;

            /**
             * Verifies a Translation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Translation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Translation
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TranslatedString.Translation;

            /**
             * Creates a plain object from a Translation message. Also converts values to other types if specified.
             * @param message Translation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TranslatedString.Translation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Translation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Translation
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }
    }

    /** Properties of a TranslatedImage. */
    interface ITranslatedImage {

        /** TranslatedImage localizedImage */
        localizedImage?: (transit_realtime.TranslatedImage.ILocalizedImage[]|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a TranslatedImage. */
    class TranslatedImage implements ITranslatedImage {

        /**
         * Constructs a new TranslatedImage.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.ITranslatedImage);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** TranslatedImage localizedImage. */
        public localizedImage: transit_realtime.TranslatedImage.ILocalizedImage[];

        /**
         * Creates a new TranslatedImage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TranslatedImage instance
         */
        public static create(properties?: transit_realtime.ITranslatedImage): transit_realtime.TranslatedImage;

        /**
         * Encodes the specified TranslatedImage message. Does not implicitly {@link transit_realtime.TranslatedImage.verify|verify} messages.
         * @param message TranslatedImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.ITranslatedImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TranslatedImage message, length delimited. Does not implicitly {@link transit_realtime.TranslatedImage.verify|verify} messages.
         * @param message TranslatedImage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.ITranslatedImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TranslatedImage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TranslatedImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TranslatedImage;

        /**
         * Decodes a TranslatedImage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TranslatedImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TranslatedImage;

        /**
         * Verifies a TranslatedImage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TranslatedImage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TranslatedImage
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.TranslatedImage;

        /**
         * Creates a plain object from a TranslatedImage message. Also converts values to other types if specified.
         * @param message TranslatedImage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.TranslatedImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TranslatedImage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TranslatedImage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace TranslatedImage {

        /** Properties of a LocalizedImage. */
        interface ILocalizedImage {

            /** LocalizedImage url */
            url: string;

            /** LocalizedImage mediaType */
            mediaType: string;

            /** LocalizedImage language */
            language?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a LocalizedImage. */
        class LocalizedImage implements ILocalizedImage {

            /**
             * Constructs a new LocalizedImage.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TranslatedImage.ILocalizedImage);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** LocalizedImage url. */
            public url: string;

            /** LocalizedImage mediaType. */
            public mediaType: string;

            /** LocalizedImage language. */
            public language: string;

            /**
             * Creates a new LocalizedImage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocalizedImage instance
             */
            public static create(properties?: transit_realtime.TranslatedImage.ILocalizedImage): transit_realtime.TranslatedImage.LocalizedImage;

            /**
             * Encodes the specified LocalizedImage message. Does not implicitly {@link transit_realtime.TranslatedImage.LocalizedImage.verify|verify} messages.
             * @param message LocalizedImage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TranslatedImage.ILocalizedImage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocalizedImage message, length delimited. Does not implicitly {@link transit_realtime.TranslatedImage.LocalizedImage.verify|verify} messages.
             * @param message LocalizedImage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TranslatedImage.ILocalizedImage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocalizedImage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LocalizedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TranslatedImage.LocalizedImage;

            /**
             * Decodes a LocalizedImage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LocalizedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TranslatedImage.LocalizedImage;

            /**
             * Verifies a LocalizedImage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocalizedImage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocalizedImage
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TranslatedImage.LocalizedImage;

            /**
             * Creates a plain object from a LocalizedImage message. Also converts values to other types if specified.
             * @param message LocalizedImage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TranslatedImage.LocalizedImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocalizedImage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for LocalizedImage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }
    }

    /** Properties of a Shape. */
    interface IShape {

        /** Shape shapeId */
        shapeId?: (string|null);

        /** Shape encodedPolyline */
        encodedPolyline?: (string|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a Shape. */
    class Shape implements IShape {

        /**
         * Constructs a new Shape.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IShape);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** Shape shapeId. */
        public shapeId: string;

        /** Shape encodedPolyline. */
        public encodedPolyline: string;

        /**
         * Creates a new Shape instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Shape instance
         */
        public static create(properties?: transit_realtime.IShape): transit_realtime.Shape;

        /**
         * Encodes the specified Shape message. Does not implicitly {@link transit_realtime.Shape.verify|verify} messages.
         * @param message Shape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Shape message, length delimited. Does not implicitly {@link transit_realtime.Shape.verify|verify} messages.
         * @param message Shape message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IShape, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Shape message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Shape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.Shape;

        /**
         * Decodes a Shape message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Shape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.Shape;

        /**
         * Verifies a Shape message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Shape message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Shape
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.Shape;

        /**
         * Creates a plain object from a Shape message. Also converts values to other types if specified.
         * @param message Shape
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.Shape, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Shape to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Shape
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a Stop. */
    interface IStop {

        /** Stop stopId */
        stopId?: (string|null);

        /** Stop stopCode */
        stopCode?: (transit_realtime.ITranslatedString|null);

        /** Stop stopName */
        stopName?: (transit_realtime.ITranslatedString|null);

        /** Stop ttsStopName */
        ttsStopName?: (transit_realtime.ITranslatedString|null);

        /** Stop stopDesc */
        stopDesc?: (transit_realtime.ITranslatedString|null);

        /** Stop stopLat */
        stopLat?: (number|null);

        /** Stop stopLon */
        stopLon?: (number|null);

        /** Stop zoneId */
        zoneId?: (string|null);

        /** Stop stopUrl */
        stopUrl?: (transit_realtime.ITranslatedString|null);

        /** Stop parentStation */
        parentStation?: (string|null);

        /** Stop stopTimezone */
        stopTimezone?: (string|null);

        /** Stop wheelchairBoarding */
        wheelchairBoarding?: (transit_realtime.Stop.WheelchairBoarding|null);

        /** Stop levelId */
        levelId?: (string|null);

        /** Stop platformCode */
        platformCode?: (transit_realtime.ITranslatedString|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a Stop. */
    class Stop implements IStop {

        /**
         * Constructs a new Stop.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IStop);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** Stop stopId. */
        public stopId: string;

        /** Stop stopCode. */
        public stopCode?: (transit_realtime.ITranslatedString|null);

        /** Stop stopName. */
        public stopName?: (transit_realtime.ITranslatedString|null);

        /** Stop ttsStopName. */
        public ttsStopName?: (transit_realtime.ITranslatedString|null);

        /** Stop stopDesc. */
        public stopDesc?: (transit_realtime.ITranslatedString|null);

        /** Stop stopLat. */
        public stopLat: number;

        /** Stop stopLon. */
        public stopLon: number;

        /** Stop zoneId. */
        public zoneId: string;

        /** Stop stopUrl. */
        public stopUrl?: (transit_realtime.ITranslatedString|null);

        /** Stop parentStation. */
        public parentStation: string;

        /** Stop stopTimezone. */
        public stopTimezone: string;

        /** Stop wheelchairBoarding. */
        public wheelchairBoarding: transit_realtime.Stop.WheelchairBoarding;

        /** Stop levelId. */
        public levelId: string;

        /** Stop platformCode. */
        public platformCode?: (transit_realtime.ITranslatedString|null);

        /**
         * Creates a new Stop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Stop instance
         */
        public static create(properties?: transit_realtime.IStop): transit_realtime.Stop;

        /**
         * Encodes the specified Stop message. Does not implicitly {@link transit_realtime.Stop.verify|verify} messages.
         * @param message Stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Stop message, length delimited. Does not implicitly {@link transit_realtime.Stop.verify|verify} messages.
         * @param message Stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Stop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.Stop;

        /**
         * Decodes a Stop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.Stop;

        /**
         * Verifies a Stop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Stop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Stop
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.Stop;

        /**
         * Creates a plain object from a Stop message. Also converts values to other types if specified.
         * @param message Stop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.Stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Stop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Stop
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace Stop {

        /** WheelchairBoarding enum. */
        enum WheelchairBoarding {
            UNKNOWN = 0,
            AVAILABLE = 1,
            NOT_AVAILABLE = 2
        }
    }

    /** Properties of a TripModifications. */
    interface ITripModifications {

        /** TripModifications selectedTrips */
        selectedTrips?: (transit_realtime.TripModifications.ISelectedTrips[]|null);

        /** TripModifications startTimes */
        startTimes?: (string[]|null);

        /** TripModifications serviceDates */
        serviceDates?: (string[]|null);

        /** TripModifications modifications */
        modifications?: (transit_realtime.TripModifications.IModification[]|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a TripModifications. */
    class TripModifications implements ITripModifications {

        /**
         * Constructs a new TripModifications.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.ITripModifications);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** TripModifications selectedTrips. */
        public selectedTrips: transit_realtime.TripModifications.ISelectedTrips[];

        /** TripModifications startTimes. */
        public startTimes: string[];

        /** TripModifications serviceDates. */
        public serviceDates: string[];

        /** TripModifications modifications. */
        public modifications: transit_realtime.TripModifications.IModification[];

        /**
         * Creates a new TripModifications instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TripModifications instance
         */
        public static create(properties?: transit_realtime.ITripModifications): transit_realtime.TripModifications;

        /**
         * Encodes the specified TripModifications message. Does not implicitly {@link transit_realtime.TripModifications.verify|verify} messages.
         * @param message TripModifications message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.ITripModifications, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TripModifications message, length delimited. Does not implicitly {@link transit_realtime.TripModifications.verify|verify} messages.
         * @param message TripModifications message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.ITripModifications, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TripModifications message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TripModifications
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripModifications;

        /**
         * Decodes a TripModifications message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TripModifications
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripModifications;

        /**
         * Verifies a TripModifications message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TripModifications message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TripModifications
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.TripModifications;

        /**
         * Creates a plain object from a TripModifications message. Also converts values to other types if specified.
         * @param message TripModifications
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.TripModifications, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TripModifications to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for TripModifications
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    namespace TripModifications {

        /** Properties of a Modification. */
        interface IModification {

            /** Modification startStopSelector */
            startStopSelector?: (transit_realtime.IStopSelector|null);

            /** Modification endStopSelector */
            endStopSelector?: (transit_realtime.IStopSelector|null);

            /** Modification propagatedModificationDelay */
            propagatedModificationDelay?: (number|null);

            /** Modification replacementStops */
            replacementStops?: (transit_realtime.IReplacementStop[]|null);

            /** Modification serviceAlertId */
            serviceAlertId?: (string|null);

            /** Modification lastModifiedTime */
            lastModifiedTime?: (number|Long|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a Modification. */
        class Modification implements IModification {

            /**
             * Constructs a new Modification.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TripModifications.IModification);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** Modification startStopSelector. */
            public startStopSelector?: (transit_realtime.IStopSelector|null);

            /** Modification endStopSelector. */
            public endStopSelector?: (transit_realtime.IStopSelector|null);

            /** Modification propagatedModificationDelay. */
            public propagatedModificationDelay: number;

            /** Modification replacementStops. */
            public replacementStops: transit_realtime.IReplacementStop[];

            /** Modification serviceAlertId. */
            public serviceAlertId: string;

            /** Modification lastModifiedTime. */
            public lastModifiedTime: (number|Long);

            /**
             * Creates a new Modification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Modification instance
             */
            public static create(properties?: transit_realtime.TripModifications.IModification): transit_realtime.TripModifications.Modification;

            /**
             * Encodes the specified Modification message. Does not implicitly {@link transit_realtime.TripModifications.Modification.verify|verify} messages.
             * @param message Modification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TripModifications.IModification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Modification message, length delimited. Does not implicitly {@link transit_realtime.TripModifications.Modification.verify|verify} messages.
             * @param message Modification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TripModifications.IModification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Modification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Modification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripModifications.Modification;

            /**
             * Decodes a Modification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Modification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripModifications.Modification;

            /**
             * Verifies a Modification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Modification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Modification
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TripModifications.Modification;

            /**
             * Creates a plain object from a Modification message. Also converts values to other types if specified.
             * @param message Modification
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TripModifications.Modification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Modification to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Modification
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }

        /** Properties of a SelectedTrips. */
        interface ISelectedTrips {

            /** SelectedTrips tripIds */
            tripIds?: (string[]|null);

            /** SelectedTrips shapeId */
            shapeId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Represents a SelectedTrips. */
        class SelectedTrips implements ISelectedTrips {

            /**
             * Constructs a new SelectedTrips.
             * @param [properties] Properties to set
             */
            constructor(properties?: transit_realtime.TripModifications.ISelectedTrips);

            /** Unknown fields preserved while decoding */
            public $unknowns?: Uint8Array[];

            /** SelectedTrips tripIds. */
            public tripIds: string[];

            /** SelectedTrips shapeId. */
            public shapeId: string;

            /**
             * Creates a new SelectedTrips instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectedTrips instance
             */
            public static create(properties?: transit_realtime.TripModifications.ISelectedTrips): transit_realtime.TripModifications.SelectedTrips;

            /**
             * Encodes the specified SelectedTrips message. Does not implicitly {@link transit_realtime.TripModifications.SelectedTrips.verify|verify} messages.
             * @param message SelectedTrips message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: transit_realtime.TripModifications.ISelectedTrips, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectedTrips message, length delimited. Does not implicitly {@link transit_realtime.TripModifications.SelectedTrips.verify|verify} messages.
             * @param message SelectedTrips message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: transit_realtime.TripModifications.ISelectedTrips, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectedTrips message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectedTrips
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.TripModifications.SelectedTrips;

            /**
             * Decodes a SelectedTrips message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectedTrips
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.TripModifications.SelectedTrips;

            /**
             * Verifies a SelectedTrips message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectedTrips message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectedTrips
             */
            public static fromObject(object: { [k: string]: any }): transit_realtime.TripModifications.SelectedTrips;

            /**
             * Creates a plain object from a SelectedTrips message. Also converts values to other types if specified.
             * @param message SelectedTrips
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: transit_realtime.TripModifications.SelectedTrips, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectedTrips to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SelectedTrips
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            public static getTypeUrl(prefix?: string): string;
        }
    }

    /** Properties of a StopSelector. */
    interface IStopSelector {

        /** StopSelector stopSequence */
        stopSequence?: (number|null);

        /** StopSelector stopId */
        stopId?: (string|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a StopSelector. */
    class StopSelector implements IStopSelector {

        /**
         * Constructs a new StopSelector.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IStopSelector);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** StopSelector stopSequence. */
        public stopSequence: number;

        /** StopSelector stopId. */
        public stopId: string;

        /**
         * Creates a new StopSelector instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopSelector instance
         */
        public static create(properties?: transit_realtime.IStopSelector): transit_realtime.StopSelector;

        /**
         * Encodes the specified StopSelector message. Does not implicitly {@link transit_realtime.StopSelector.verify|verify} messages.
         * @param message StopSelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IStopSelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopSelector message, length delimited. Does not implicitly {@link transit_realtime.StopSelector.verify|verify} messages.
         * @param message StopSelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IStopSelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopSelector message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.StopSelector;

        /**
         * Decodes a StopSelector message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.StopSelector;

        /**
         * Verifies a StopSelector message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopSelector message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopSelector
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.StopSelector;

        /**
         * Creates a plain object from a StopSelector message. Also converts values to other types if specified.
         * @param message StopSelector
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.StopSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopSelector to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StopSelector
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }

    /** Properties of a ReplacementStop. */
    interface IReplacementStop {

        /** ReplacementStop travelTimeToStop */
        travelTimeToStop?: (number|null);

        /** ReplacementStop stopId */
        stopId?: (string|null);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];
    }

    /** Represents a ReplacementStop. */
    class ReplacementStop implements IReplacementStop {

        /**
         * Constructs a new ReplacementStop.
         * @param [properties] Properties to set
         */
        constructor(properties?: transit_realtime.IReplacementStop);

        /** Unknown fields preserved while decoding */
        public $unknowns?: Uint8Array[];

        /** ReplacementStop travelTimeToStop. */
        public travelTimeToStop: number;

        /** ReplacementStop stopId. */
        public stopId: string;

        /**
         * Creates a new ReplacementStop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplacementStop instance
         */
        public static create(properties?: transit_realtime.IReplacementStop): transit_realtime.ReplacementStop;

        /**
         * Encodes the specified ReplacementStop message. Does not implicitly {@link transit_realtime.ReplacementStop.verify|verify} messages.
         * @param message ReplacementStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transit_realtime.IReplacementStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplacementStop message, length delimited. Does not implicitly {@link transit_realtime.ReplacementStop.verify|verify} messages.
         * @param message ReplacementStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transit_realtime.IReplacementStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplacementStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplacementStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transit_realtime.ReplacementStop;

        /**
         * Decodes a ReplacementStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplacementStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transit_realtime.ReplacementStop;

        /**
         * Verifies a ReplacementStop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplacementStop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplacementStop
         */
        public static fromObject(object: { [k: string]: any }): transit_realtime.ReplacementStop;

        /**
         * Creates a plain object from a ReplacementStop message. Also converts values to other types if specified.
         * @param message ReplacementStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transit_realtime.ReplacementStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplacementStop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ReplacementStop
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        public static getTypeUrl(prefix?: string): string;
    }
}
