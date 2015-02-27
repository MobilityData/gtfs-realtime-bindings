/**
 * Copyright 2015 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = require("protobufjs").newBuilder().import({
    "package": "transit_realtime",
    "messages": [
        {
            "name": "FeedMessage",
            "fields": [
                {
                    "rule": "required",
                    "type": "FeedHeader",
                    "name": "header",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "repeated",
                    "type": "FeedEntity",
                    "name": "entity",
                    "id": 2,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "FeedHeader",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "gtfs_realtime_version",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Incrementality",
                    "name": "incrementality",
                    "id": 2,
                    "options": {
                        "default": "FULL_DATASET"
                    }
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "timestamp",
                    "id": 3,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "Incrementality",
                    "values": [
                        {
                            "name": "FULL_DATASET",
                            "id": 0
                        },
                        {
                            "name": "DIFFERENTIAL",
                            "id": 1
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "FeedEntity",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "id",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_deleted",
                    "id": 2,
                    "options": {
                        "default": false
                    }
                },
                {
                    "rule": "optional",
                    "type": "TripUpdate",
                    "name": "trip_update",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "VehiclePosition",
                    "name": "vehicle",
                    "id": 4,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Alert",
                    "name": "alert",
                    "id": 5,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "TripUpdate",
            "fields": [
                {
                    "rule": "required",
                    "type": "TripDescriptor",
                    "name": "trip",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "VehicleDescriptor",
                    "name": "vehicle",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "repeated",
                    "type": "StopTimeUpdate",
                    "name": "stop_time_update",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "timestamp",
                    "id": 4,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "delay",
                    "id": 5,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [
                {
                    "name": "StopTimeEvent",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "delay",
                            "id": 1,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "time",
                            "id": 2,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "uncertainty",
                            "id": 3,
                            "options": {}
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {},
                    "extensions": [
                        1000,
                        1999
                    ]
                },
                {
                    "name": "StopTimeUpdate",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "stop_sequence",
                            "id": 1,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "stop_id",
                            "id": 4,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "StopTimeEvent",
                            "name": "arrival",
                            "id": 2,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "StopTimeEvent",
                            "name": "departure",
                            "id": 3,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "ScheduleRelationship",
                            "name": "schedule_relationship",
                            "id": 5,
                            "options": {
                                "default": "SCHEDULED"
                            }
                        }
                    ],
                    "enums": [
                        {
                            "name": "ScheduleRelationship",
                            "values": [
                                {
                                    "name": "SCHEDULED",
                                    "id": 0
                                },
                                {
                                    "name": "SKIPPED",
                                    "id": 1
                                },
                                {
                                    "name": "NO_DATA",
                                    "id": 2
                                }
                            ],
                            "options": {}
                        }
                    ],
                    "messages": [],
                    "options": {},
                    "extensions": [
                        1000,
                        1999
                    ]
                }
            ],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "VehiclePosition",
            "fields": [
                {
                    "rule": "optional",
                    "type": "TripDescriptor",
                    "name": "trip",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "VehicleDescriptor",
                    "name": "vehicle",
                    "id": 8,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Position",
                    "name": "position",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "current_stop_sequence",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "stop_id",
                    "id": 7,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "VehicleStopStatus",
                    "name": "current_status",
                    "id": 4,
                    "options": {
                        "default": "IN_TRANSIT_TO"
                    }
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "timestamp",
                    "id": 5,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "CongestionLevel",
                    "name": "congestion_level",
                    "id": 6,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "OccupancyStatus",
                    "name": "occupancy_status",
                    "id": 9,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "VehicleStopStatus",
                    "values": [
                        {
                            "name": "INCOMING_AT",
                            "id": 0
                        },
                        {
                            "name": "STOPPED_AT",
                            "id": 1
                        },
                        {
                            "name": "IN_TRANSIT_TO",
                            "id": 2
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "CongestionLevel",
                    "values": [
                        {
                            "name": "UNKNOWN_CONGESTION_LEVEL",
                            "id": 0
                        },
                        {
                            "name": "RUNNING_SMOOTHLY",
                            "id": 1
                        },
                        {
                            "name": "STOP_AND_GO",
                            "id": 2
                        },
                        {
                            "name": "CONGESTION",
                            "id": 3
                        },
                        {
                            "name": "SEVERE_CONGESTION",
                            "id": 4
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "OccupancyStatus",
                    "values": [
                        {
                            "name": "EMPTY",
                            "id": 0
                        },
                        {
                            "name": "MANY_SEATS_AVAILABLE",
                            "id": 1
                        },
                        {
                            "name": "FEW_SEATS_AVAILABLE",
                            "id": 2
                        },
                        {
                            "name": "STANDING_ROOM_ONLY",
                            "id": 3
                        },
                        {
                            "name": "CRUSHED_STANDING_ROOM_ONLY",
                            "id": 4
                        },
                        {
                            "name": "FULL",
                            "id": 5
                        },
                        {
                            "name": "NOT_ACCEPTING_PASSENGERS",
                            "id": 6
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "Alert",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TimeRange",
                    "name": "active_period",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "repeated",
                    "type": "EntitySelector",
                    "name": "informed_entity",
                    "id": 5,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Cause",
                    "name": "cause",
                    "id": 6,
                    "options": {
                        "default": "UNKNOWN_CAUSE"
                    }
                },
                {
                    "rule": "optional",
                    "type": "Effect",
                    "name": "effect",
                    "id": 7,
                    "options": {
                        "default": "UNKNOWN_EFFECT"
                    }
                },
                {
                    "rule": "optional",
                    "type": "TranslatedString",
                    "name": "url",
                    "id": 8,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "TranslatedString",
                    "name": "header_text",
                    "id": 10,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "TranslatedString",
                    "name": "description_text",
                    "id": 11,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "Cause",
                    "values": [
                        {
                            "name": "UNKNOWN_CAUSE",
                            "id": 1
                        },
                        {
                            "name": "OTHER_CAUSE",
                            "id": 2
                        },
                        {
                            "name": "TECHNICAL_PROBLEM",
                            "id": 3
                        },
                        {
                            "name": "STRIKE",
                            "id": 4
                        },
                        {
                            "name": "DEMONSTRATION",
                            "id": 5
                        },
                        {
                            "name": "ACCIDENT",
                            "id": 6
                        },
                        {
                            "name": "HOLIDAY",
                            "id": 7
                        },
                        {
                            "name": "WEATHER",
                            "id": 8
                        },
                        {
                            "name": "MAINTENANCE",
                            "id": 9
                        },
                        {
                            "name": "CONSTRUCTION",
                            "id": 10
                        },
                        {
                            "name": "POLICE_ACTIVITY",
                            "id": 11
                        },
                        {
                            "name": "MEDICAL_EMERGENCY",
                            "id": 12
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "Effect",
                    "values": [
                        {
                            "name": "NO_SERVICE",
                            "id": 1
                        },
                        {
                            "name": "REDUCED_SERVICE",
                            "id": 2
                        },
                        {
                            "name": "SIGNIFICANT_DELAYS",
                            "id": 3
                        },
                        {
                            "name": "DETOUR",
                            "id": 4
                        },
                        {
                            "name": "ADDITIONAL_SERVICE",
                            "id": 5
                        },
                        {
                            "name": "MODIFIED_SERVICE",
                            "id": 6
                        },
                        {
                            "name": "OTHER_EFFECT",
                            "id": 7
                        },
                        {
                            "name": "UNKNOWN_EFFECT",
                            "id": 8
                        },
                        {
                            "name": "STOP_MOVED",
                            "id": 9
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "TimeRange",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "start",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "uint64",
                    "name": "end",
                    "id": 2,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "Position",
            "fields": [
                {
                    "rule": "required",
                    "type": "float",
                    "name": "latitude",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "float",
                    "name": "longitude",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "bearing",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "odometer",
                    "id": 4,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "float",
                    "name": "speed",
                    "id": 5,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "TripDescriptor",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "trip_id",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "route_id",
                    "id": 5,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "direction_id",
                    "id": 6,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "start_time",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "start_date",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "ScheduleRelationship",
                    "name": "schedule_relationship",
                    "id": 4,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "ScheduleRelationship",
                    "values": [
                        {
                            "name": "SCHEDULED",
                            "id": 0
                        },
                        {
                            "name": "ADDED",
                            "id": 1
                        },
                        {
                            "name": "UNSCHEDULED",
                            "id": 2
                        },
                        {
                            "name": "CANCELED",
                            "id": 3
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "VehicleDescriptor",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "id",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "label",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "license_plate",
                    "id": 3,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "EntitySelector",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "agency_id",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "route_id",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "route_type",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "TripDescriptor",
                    "name": "trip",
                    "id": 4,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "stop_id",
                    "id": 5,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        },
        {
            "name": "TranslatedString",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Translation",
                    "name": "translation",
                    "id": 1,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [
                {
                    "name": "Translation",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "text",
                            "id": 1,
                            "options": {}
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "language",
                            "id": 2,
                            "options": {}
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {},
                    "extensions": [
                        1000,
                        1999
                    ]
                }
            ],
            "options": {},
            "extensions": [
                1000,
                1999
            ]
        }
    ],
    "enums": [],
    "imports": [],
    "options": {
        "java_package": "com.google.transit.realtime"
    },
    "services": []
}).build("transit_realtime");
