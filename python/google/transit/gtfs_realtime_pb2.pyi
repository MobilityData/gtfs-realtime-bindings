from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf.internal import python_message as _python_message
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Alert(_message.Message):
    __slots__ = ["active_period", "cause", "description_text", "effect", "header_text", "informed_entity", "severity_level", "tts_description_text", "tts_header_text", "url"]
    class Cause(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class Effect(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class SeverityLevel(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    ACCESSIBILITY_ISSUE: Alert.Effect
    ACCIDENT: Alert.Cause
    ACTIVE_PERIOD_FIELD_NUMBER: _ClassVar[int]
    ADDITIONAL_SERVICE: Alert.Effect
    CAUSE_FIELD_NUMBER: _ClassVar[int]
    CONSTRUCTION: Alert.Cause
    DEMONSTRATION: Alert.Cause
    DESCRIPTION_TEXT_FIELD_NUMBER: _ClassVar[int]
    DETOUR: Alert.Effect
    EFFECT_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    HEADER_TEXT_FIELD_NUMBER: _ClassVar[int]
    HOLIDAY: Alert.Cause
    INFO: Alert.SeverityLevel
    INFORMED_ENTITY_FIELD_NUMBER: _ClassVar[int]
    MAINTENANCE: Alert.Cause
    MEDICAL_EMERGENCY: Alert.Cause
    MODIFIED_SERVICE: Alert.Effect
    NO_EFFECT: Alert.Effect
    NO_SERVICE: Alert.Effect
    OTHER_CAUSE: Alert.Cause
    OTHER_EFFECT: Alert.Effect
    POLICE_ACTIVITY: Alert.Cause
    REDUCED_SERVICE: Alert.Effect
    SEVERE: Alert.SeverityLevel
    SEVERITY_LEVEL_FIELD_NUMBER: _ClassVar[int]
    SIGNIFICANT_DELAYS: Alert.Effect
    STOP_MOVED: Alert.Effect
    STRIKE: Alert.Cause
    TECHNICAL_PROBLEM: Alert.Cause
    TTS_DESCRIPTION_TEXT_FIELD_NUMBER: _ClassVar[int]
    TTS_HEADER_TEXT_FIELD_NUMBER: _ClassVar[int]
    UNKNOWN_CAUSE: Alert.Cause
    UNKNOWN_EFFECT: Alert.Effect
    UNKNOWN_SEVERITY: Alert.SeverityLevel
    URL_FIELD_NUMBER: _ClassVar[int]
    WARNING: Alert.SeverityLevel
    WEATHER: Alert.Cause
    active_period: _containers.RepeatedCompositeFieldContainer[TimeRange]
    cause: Alert.Cause
    description_text: TranslatedString
    effect: Alert.Effect
    header_text: TranslatedString
    informed_entity: _containers.RepeatedCompositeFieldContainer[EntitySelector]
    severity_level: Alert.SeverityLevel
    tts_description_text: TranslatedString
    tts_header_text: TranslatedString
    url: TranslatedString
    def __init__(self, active_period: _Optional[_Iterable[_Union[TimeRange, _Mapping]]] = ..., informed_entity: _Optional[_Iterable[_Union[EntitySelector, _Mapping]]] = ..., cause: _Optional[_Union[Alert.Cause, str]] = ..., effect: _Optional[_Union[Alert.Effect, str]] = ..., url: _Optional[_Union[TranslatedString, _Mapping]] = ..., header_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., description_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., tts_header_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., tts_description_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., severity_level: _Optional[_Union[Alert.SeverityLevel, str]] = ...) -> None: ...

class EntitySelector(_message.Message):
    __slots__ = ["agency_id", "direction_id", "route_id", "route_type", "stop_id", "trip"]
    AGENCY_ID_FIELD_NUMBER: _ClassVar[int]
    DIRECTION_ID_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    ROUTE_ID_FIELD_NUMBER: _ClassVar[int]
    ROUTE_TYPE_FIELD_NUMBER: _ClassVar[int]
    STOP_ID_FIELD_NUMBER: _ClassVar[int]
    TRIP_FIELD_NUMBER: _ClassVar[int]
    agency_id: str
    direction_id: int
    route_id: str
    route_type: int
    stop_id: str
    trip: TripDescriptor
    def __init__(self, agency_id: _Optional[str] = ..., route_id: _Optional[str] = ..., route_type: _Optional[int] = ..., trip: _Optional[_Union[TripDescriptor, _Mapping]] = ..., stop_id: _Optional[str] = ..., direction_id: _Optional[int] = ...) -> None: ...

class FeedEntity(_message.Message):
    __slots__ = ["alert", "id", "is_deleted", "trip_update", "vehicle"]
    ALERT_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    ID_FIELD_NUMBER: _ClassVar[int]
    IS_DELETED_FIELD_NUMBER: _ClassVar[int]
    TRIP_UPDATE_FIELD_NUMBER: _ClassVar[int]
    VEHICLE_FIELD_NUMBER: _ClassVar[int]
    alert: Alert
    id: str
    is_deleted: bool
    trip_update: TripUpdate
    vehicle: VehiclePosition
    def __init__(self, id: _Optional[str] = ..., is_deleted: bool = ..., trip_update: _Optional[_Union[TripUpdate, _Mapping]] = ..., vehicle: _Optional[_Union[VehiclePosition, _Mapping]] = ..., alert: _Optional[_Union[Alert, _Mapping]] = ...) -> None: ...

class FeedHeader(_message.Message):
    __slots__ = ["gtfs_realtime_version", "incrementality", "timestamp"]
    class Incrementality(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    DIFFERENTIAL: FeedHeader.Incrementality
    Extensions: _python_message._ExtensionDict
    FULL_DATASET: FeedHeader.Incrementality
    GTFS_REALTIME_VERSION_FIELD_NUMBER: _ClassVar[int]
    INCREMENTALITY_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    gtfs_realtime_version: str
    incrementality: FeedHeader.Incrementality
    timestamp: int
    def __init__(self, gtfs_realtime_version: _Optional[str] = ..., incrementality: _Optional[_Union[FeedHeader.Incrementality, str]] = ..., timestamp: _Optional[int] = ...) -> None: ...

class FeedMessage(_message.Message):
    __slots__ = ["entity", "header"]
    ENTITY_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    HEADER_FIELD_NUMBER: _ClassVar[int]
    entity: _containers.RepeatedCompositeFieldContainer[FeedEntity]
    header: FeedHeader
    def __init__(self, header: _Optional[_Union[FeedHeader, _Mapping]] = ..., entity: _Optional[_Iterable[_Union[FeedEntity, _Mapping]]] = ...) -> None: ...

class Position(_message.Message):
    __slots__ = ["bearing", "latitude", "longitude", "odometer", "speed"]
    BEARING_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    LATITUDE_FIELD_NUMBER: _ClassVar[int]
    LONGITUDE_FIELD_NUMBER: _ClassVar[int]
    ODOMETER_FIELD_NUMBER: _ClassVar[int]
    SPEED_FIELD_NUMBER: _ClassVar[int]
    bearing: float
    latitude: float
    longitude: float
    odometer: float
    speed: float
    def __init__(self, latitude: _Optional[float] = ..., longitude: _Optional[float] = ..., bearing: _Optional[float] = ..., odometer: _Optional[float] = ..., speed: _Optional[float] = ...) -> None: ...

class TimeRange(_message.Message):
    __slots__ = ["end", "start"]
    END_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    START_FIELD_NUMBER: _ClassVar[int]
    end: int
    start: int
    def __init__(self, start: _Optional[int] = ..., end: _Optional[int] = ...) -> None: ...

class TranslatedString(_message.Message):
    __slots__ = ["translation"]
    class Translation(_message.Message):
        __slots__ = ["language", "text"]
        Extensions: _python_message._ExtensionDict
        LANGUAGE_FIELD_NUMBER: _ClassVar[int]
        TEXT_FIELD_NUMBER: _ClassVar[int]
        language: str
        text: str
        def __init__(self, text: _Optional[str] = ..., language: _Optional[str] = ...) -> None: ...
    Extensions: _python_message._ExtensionDict
    TRANSLATION_FIELD_NUMBER: _ClassVar[int]
    translation: _containers.RepeatedCompositeFieldContainer[TranslatedString.Translation]
    def __init__(self, translation: _Optional[_Iterable[_Union[TranslatedString.Translation, _Mapping]]] = ...) -> None: ...

class TripDescriptor(_message.Message):
    __slots__ = ["direction_id", "route_id", "schedule_relationship", "start_date", "start_time", "trip_id"]
    class ScheduleRelationship(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    ADDED: TripDescriptor.ScheduleRelationship
    CANCELED: TripDescriptor.ScheduleRelationship
    DIRECTION_ID_FIELD_NUMBER: _ClassVar[int]
    DUPLICATED: TripDescriptor.ScheduleRelationship
    Extensions: _python_message._ExtensionDict
    REPLACEMENT: TripDescriptor.ScheduleRelationship
    ROUTE_ID_FIELD_NUMBER: _ClassVar[int]
    SCHEDULED: TripDescriptor.ScheduleRelationship
    SCHEDULE_RELATIONSHIP_FIELD_NUMBER: _ClassVar[int]
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    TRIP_ID_FIELD_NUMBER: _ClassVar[int]
    UNSCHEDULED: TripDescriptor.ScheduleRelationship
    direction_id: int
    route_id: str
    schedule_relationship: TripDescriptor.ScheduleRelationship
    start_date: str
    start_time: str
    trip_id: str
    def __init__(self, trip_id: _Optional[str] = ..., route_id: _Optional[str] = ..., direction_id: _Optional[int] = ..., start_time: _Optional[str] = ..., start_date: _Optional[str] = ..., schedule_relationship: _Optional[_Union[TripDescriptor.ScheduleRelationship, str]] = ...) -> None: ...

class TripUpdate(_message.Message):
    __slots__ = ["delay", "stop_time_update", "timestamp", "trip", "trip_properties", "vehicle"]
    class StopTimeEvent(_message.Message):
        __slots__ = ["delay", "time", "uncertainty"]
        DELAY_FIELD_NUMBER: _ClassVar[int]
        Extensions: _python_message._ExtensionDict
        TIME_FIELD_NUMBER: _ClassVar[int]
        UNCERTAINTY_FIELD_NUMBER: _ClassVar[int]
        delay: int
        time: int
        uncertainty: int
        def __init__(self, delay: _Optional[int] = ..., time: _Optional[int] = ..., uncertainty: _Optional[int] = ...) -> None: ...
    class StopTimeUpdate(_message.Message):
        __slots__ = ["arrival", "departure", "schedule_relationship", "stop_id", "stop_sequence", "stop_time_properties"]
        class ScheduleRelationship(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
            __slots__ = []
        class StopTimeProperties(_message.Message):
            __slots__ = ["assigned_stop_id"]
            ASSIGNED_STOP_ID_FIELD_NUMBER: _ClassVar[int]
            Extensions: _python_message._ExtensionDict
            assigned_stop_id: str
            def __init__(self, assigned_stop_id: _Optional[str] = ...) -> None: ...
        ARRIVAL_FIELD_NUMBER: _ClassVar[int]
        DEPARTURE_FIELD_NUMBER: _ClassVar[int]
        Extensions: _python_message._ExtensionDict
        NO_DATA: TripUpdate.StopTimeUpdate.ScheduleRelationship
        SCHEDULED: TripUpdate.StopTimeUpdate.ScheduleRelationship
        SCHEDULE_RELATIONSHIP_FIELD_NUMBER: _ClassVar[int]
        SKIPPED: TripUpdate.StopTimeUpdate.ScheduleRelationship
        STOP_ID_FIELD_NUMBER: _ClassVar[int]
        STOP_SEQUENCE_FIELD_NUMBER: _ClassVar[int]
        STOP_TIME_PROPERTIES_FIELD_NUMBER: _ClassVar[int]
        UNSCHEDULED: TripUpdate.StopTimeUpdate.ScheduleRelationship
        arrival: TripUpdate.StopTimeEvent
        departure: TripUpdate.StopTimeEvent
        schedule_relationship: TripUpdate.StopTimeUpdate.ScheduleRelationship
        stop_id: str
        stop_sequence: int
        stop_time_properties: TripUpdate.StopTimeUpdate.StopTimeProperties
        def __init__(self, stop_sequence: _Optional[int] = ..., stop_id: _Optional[str] = ..., arrival: _Optional[_Union[TripUpdate.StopTimeEvent, _Mapping]] = ..., departure: _Optional[_Union[TripUpdate.StopTimeEvent, _Mapping]] = ..., schedule_relationship: _Optional[_Union[TripUpdate.StopTimeUpdate.ScheduleRelationship, str]] = ..., stop_time_properties: _Optional[_Union[TripUpdate.StopTimeUpdate.StopTimeProperties, _Mapping]] = ...) -> None: ...
    class TripProperties(_message.Message):
        __slots__ = ["start_date", "start_time", "trip_id"]
        Extensions: _python_message._ExtensionDict
        START_DATE_FIELD_NUMBER: _ClassVar[int]
        START_TIME_FIELD_NUMBER: _ClassVar[int]
        TRIP_ID_FIELD_NUMBER: _ClassVar[int]
        start_date: str
        start_time: str
        trip_id: str
        def __init__(self, trip_id: _Optional[str] = ..., start_date: _Optional[str] = ..., start_time: _Optional[str] = ...) -> None: ...
    DELAY_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    STOP_TIME_UPDATE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    TRIP_FIELD_NUMBER: _ClassVar[int]
    TRIP_PROPERTIES_FIELD_NUMBER: _ClassVar[int]
    VEHICLE_FIELD_NUMBER: _ClassVar[int]
    delay: int
    stop_time_update: _containers.RepeatedCompositeFieldContainer[TripUpdate.StopTimeUpdate]
    timestamp: int
    trip: TripDescriptor
    trip_properties: TripUpdate.TripProperties
    vehicle: VehicleDescriptor
    def __init__(self, trip: _Optional[_Union[TripDescriptor, _Mapping]] = ..., vehicle: _Optional[_Union[VehicleDescriptor, _Mapping]] = ..., stop_time_update: _Optional[_Iterable[_Union[TripUpdate.StopTimeUpdate, _Mapping]]] = ..., timestamp: _Optional[int] = ..., delay: _Optional[int] = ..., trip_properties: _Optional[_Union[TripUpdate.TripProperties, _Mapping]] = ...) -> None: ...

class VehicleDescriptor(_message.Message):
    __slots__ = ["id", "label", "license_plate"]
    Extensions: _python_message._ExtensionDict
    ID_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    LICENSE_PLATE_FIELD_NUMBER: _ClassVar[int]
    id: str
    label: str
    license_plate: str
    def __init__(self, id: _Optional[str] = ..., label: _Optional[str] = ..., license_plate: _Optional[str] = ...) -> None: ...

class VehiclePosition(_message.Message):
    __slots__ = ["congestion_level", "current_status", "current_stop_sequence", "multi_carriage_details", "occupancy_percentage", "occupancy_status", "position", "stop_id", "timestamp", "trip", "vehicle"]
    class CongestionLevel(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class OccupancyStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class VehicleStopStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class CarriageDetails(_message.Message):
        __slots__ = ["carriage_sequence", "id", "label", "occupancy_percentage", "occupancy_status"]
        CARRIAGE_SEQUENCE_FIELD_NUMBER: _ClassVar[int]
        Extensions: _python_message._ExtensionDict
        ID_FIELD_NUMBER: _ClassVar[int]
        LABEL_FIELD_NUMBER: _ClassVar[int]
        OCCUPANCY_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
        OCCUPANCY_STATUS_FIELD_NUMBER: _ClassVar[int]
        carriage_sequence: int
        id: str
        label: str
        occupancy_percentage: int
        occupancy_status: VehiclePosition.OccupancyStatus
        def __init__(self, id: _Optional[str] = ..., label: _Optional[str] = ..., occupancy_status: _Optional[_Union[VehiclePosition.OccupancyStatus, str]] = ..., occupancy_percentage: _Optional[int] = ..., carriage_sequence: _Optional[int] = ...) -> None: ...
    CONGESTION: VehiclePosition.CongestionLevel
    CONGESTION_LEVEL_FIELD_NUMBER: _ClassVar[int]
    CRUSHED_STANDING_ROOM_ONLY: VehiclePosition.OccupancyStatus
    CURRENT_STATUS_FIELD_NUMBER: _ClassVar[int]
    CURRENT_STOP_SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    EMPTY: VehiclePosition.OccupancyStatus
    Extensions: _python_message._ExtensionDict
    FEW_SEATS_AVAILABLE: VehiclePosition.OccupancyStatus
    FULL: VehiclePosition.OccupancyStatus
    INCOMING_AT: VehiclePosition.VehicleStopStatus
    IN_TRANSIT_TO: VehiclePosition.VehicleStopStatus
    MANY_SEATS_AVAILABLE: VehiclePosition.OccupancyStatus
    MULTI_CARRIAGE_DETAILS_FIELD_NUMBER: _ClassVar[int]
    NOT_ACCEPTING_PASSENGERS: VehiclePosition.OccupancyStatus
    NOT_BOARDABLE: VehiclePosition.OccupancyStatus
    NO_DATA_AVAILABLE: VehiclePosition.OccupancyStatus
    OCCUPANCY_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    OCCUPANCY_STATUS_FIELD_NUMBER: _ClassVar[int]
    POSITION_FIELD_NUMBER: _ClassVar[int]
    RUNNING_SMOOTHLY: VehiclePosition.CongestionLevel
    SEVERE_CONGESTION: VehiclePosition.CongestionLevel
    STANDING_ROOM_ONLY: VehiclePosition.OccupancyStatus
    STOPPED_AT: VehiclePosition.VehicleStopStatus
    STOP_AND_GO: VehiclePosition.CongestionLevel
    STOP_ID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    TRIP_FIELD_NUMBER: _ClassVar[int]
    UNKNOWN_CONGESTION_LEVEL: VehiclePosition.CongestionLevel
    VEHICLE_FIELD_NUMBER: _ClassVar[int]
    congestion_level: VehiclePosition.CongestionLevel
    current_status: VehiclePosition.VehicleStopStatus
    current_stop_sequence: int
    multi_carriage_details: _containers.RepeatedCompositeFieldContainer[VehiclePosition.CarriageDetails]
    occupancy_percentage: int
    occupancy_status: VehiclePosition.OccupancyStatus
    position: Position
    stop_id: str
    timestamp: int
    trip: TripDescriptor
    vehicle: VehicleDescriptor
    def __init__(self, trip: _Optional[_Union[TripDescriptor, _Mapping]] = ..., vehicle: _Optional[_Union[VehicleDescriptor, _Mapping]] = ..., position: _Optional[_Union[Position, _Mapping]] = ..., current_stop_sequence: _Optional[int] = ..., stop_id: _Optional[str] = ..., current_status: _Optional[_Union[VehiclePosition.VehicleStopStatus, str]] = ..., timestamp: _Optional[int] = ..., congestion_level: _Optional[_Union[VehiclePosition.CongestionLevel, str]] = ..., occupancy_status: _Optional[_Union[VehiclePosition.OccupancyStatus, str]] = ..., occupancy_percentage: _Optional[int] = ..., multi_carriage_details: _Optional[_Iterable[_Union[VehiclePosition.CarriageDetails, _Mapping]]] = ...) -> None: ...
