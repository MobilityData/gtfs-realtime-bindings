from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf.internal import python_message as _python_message
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Alert(_message.Message):
    __slots__ = ["active_period", "cause", "cause_detail", "description_text", "effect", "effect_detail", "header_text", "image", "image_alternative_text", "informed_entity", "severity_level", "tts_description_text", "tts_header_text", "url"]
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
    CAUSE_DETAIL_FIELD_NUMBER: _ClassVar[int]
    CAUSE_FIELD_NUMBER: _ClassVar[int]
    CONSTRUCTION: Alert.Cause
    DEMONSTRATION: Alert.Cause
    DESCRIPTION_TEXT_FIELD_NUMBER: _ClassVar[int]
    DETOUR: Alert.Effect
    EFFECT_DETAIL_FIELD_NUMBER: _ClassVar[int]
    EFFECT_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    HEADER_TEXT_FIELD_NUMBER: _ClassVar[int]
    HOLIDAY: Alert.Cause
    IMAGE_ALTERNATIVE_TEXT_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
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
    SPECIAL_EVENT: Alert.Cause
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
    cause_detail: TranslatedString
    description_text: TranslatedString
    effect: Alert.Effect
    effect_detail: TranslatedString
    header_text: TranslatedString
    image: TranslatedImage
    image_alternative_text: TranslatedString
    informed_entity: _containers.RepeatedCompositeFieldContainer[EntitySelector]
    severity_level: Alert.SeverityLevel
    tts_description_text: TranslatedString
    tts_header_text: TranslatedString
    url: TranslatedString
    def __init__(self, active_period: _Optional[_Iterable[_Union[TimeRange, _Mapping]]] = ..., informed_entity: _Optional[_Iterable[_Union[EntitySelector, _Mapping]]] = ..., cause: _Optional[_Union[Alert.Cause, str]] = ..., effect: _Optional[_Union[Alert.Effect, str]] = ..., url: _Optional[_Union[TranslatedString, _Mapping]] = ..., header_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., description_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., tts_header_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., tts_description_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., severity_level: _Optional[_Union[Alert.SeverityLevel, str]] = ..., image: _Optional[_Union[TranslatedImage, _Mapping]] = ..., image_alternative_text: _Optional[_Union[TranslatedString, _Mapping]] = ..., cause_detail: _Optional[_Union[TranslatedString, _Mapping]] = ..., effect_detail: _Optional[_Union[TranslatedString, _Mapping]] = ...) -> None: ...

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
    __slots__ = ["alert", "id", "is_deleted", "shape", "stop", "trip_modifications", "trip_update", "vehicle"]
    ALERT_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    ID_FIELD_NUMBER: _ClassVar[int]
    IS_DELETED_FIELD_NUMBER: _ClassVar[int]
    SHAPE_FIELD_NUMBER: _ClassVar[int]
    STOP_FIELD_NUMBER: _ClassVar[int]
    TRIP_MODIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    TRIP_UPDATE_FIELD_NUMBER: _ClassVar[int]
    VEHICLE_FIELD_NUMBER: _ClassVar[int]
    alert: Alert
    id: str
    is_deleted: bool
    shape: Shape
    stop: Stop
    trip_modifications: TripModifications
    trip_update: TripUpdate
    vehicle: VehiclePosition
    def __init__(self, id: _Optional[str] = ..., is_deleted: bool = ..., trip_update: _Optional[_Union[TripUpdate, _Mapping]] = ..., vehicle: _Optional[_Union[VehiclePosition, _Mapping]] = ..., alert: _Optional[_Union[Alert, _Mapping]] = ..., shape: _Optional[_Union[Shape, _Mapping]] = ..., stop: _Optional[_Union[Stop, _Mapping]] = ..., trip_modifications: _Optional[_Union[TripModifications, _Mapping]] = ...) -> None: ...

class FeedHeader(_message.Message):
    __slots__ = ["feed_version", "gtfs_realtime_version", "incrementality", "timestamp"]
    class Incrementality(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    DIFFERENTIAL: FeedHeader.Incrementality
    Extensions: _python_message._ExtensionDict
    FEED_VERSION_FIELD_NUMBER: _ClassVar[int]
    FULL_DATASET: FeedHeader.Incrementality
    GTFS_REALTIME_VERSION_FIELD_NUMBER: _ClassVar[int]
    INCREMENTALITY_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    feed_version: str
    gtfs_realtime_version: str
    incrementality: FeedHeader.Incrementality
    timestamp: int
    def __init__(self, gtfs_realtime_version: _Optional[str] = ..., incrementality: _Optional[_Union[FeedHeader.Incrementality, str]] = ..., timestamp: _Optional[int] = ..., feed_version: _Optional[str] = ...) -> None: ...

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

class ReplacementStop(_message.Message):
    __slots__ = ["stop_id", "travel_time_to_stop"]
    Extensions: _python_message._ExtensionDict
    STOP_ID_FIELD_NUMBER: _ClassVar[int]
    TRAVEL_TIME_TO_STOP_FIELD_NUMBER: _ClassVar[int]
    stop_id: str
    travel_time_to_stop: int
    def __init__(self, travel_time_to_stop: _Optional[int] = ..., stop_id: _Optional[str] = ...) -> None: ...

class Shape(_message.Message):
    __slots__ = ["encoded_polyline", "shape_id"]
    ENCODED_POLYLINE_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    SHAPE_ID_FIELD_NUMBER: _ClassVar[int]
    encoded_polyline: str
    shape_id: str
    def __init__(self, shape_id: _Optional[str] = ..., encoded_polyline: _Optional[str] = ...) -> None: ...

class Stop(_message.Message):
    __slots__ = ["level_id", "parent_station", "platform_code", "stop_code", "stop_desc", "stop_id", "stop_lat", "stop_lon", "stop_name", "stop_timezone", "stop_url", "tts_stop_name", "wheelchair_boarding", "zone_id"]
    class WheelchairBoarding(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    AVAILABLE: Stop.WheelchairBoarding
    Extensions: _python_message._ExtensionDict
    LEVEL_ID_FIELD_NUMBER: _ClassVar[int]
    NOT_AVAILABLE: Stop.WheelchairBoarding
    PARENT_STATION_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_CODE_FIELD_NUMBER: _ClassVar[int]
    STOP_CODE_FIELD_NUMBER: _ClassVar[int]
    STOP_DESC_FIELD_NUMBER: _ClassVar[int]
    STOP_ID_FIELD_NUMBER: _ClassVar[int]
    STOP_LAT_FIELD_NUMBER: _ClassVar[int]
    STOP_LON_FIELD_NUMBER: _ClassVar[int]
    STOP_NAME_FIELD_NUMBER: _ClassVar[int]
    STOP_TIMEZONE_FIELD_NUMBER: _ClassVar[int]
    STOP_URL_FIELD_NUMBER: _ClassVar[int]
    TTS_STOP_NAME_FIELD_NUMBER: _ClassVar[int]
    UNKNOWN: Stop.WheelchairBoarding
    WHEELCHAIR_BOARDING_FIELD_NUMBER: _ClassVar[int]
    ZONE_ID_FIELD_NUMBER: _ClassVar[int]
    level_id: str
    parent_station: str
    platform_code: TranslatedString
    stop_code: TranslatedString
    stop_desc: TranslatedString
    stop_id: str
    stop_lat: float
    stop_lon: float
    stop_name: TranslatedString
    stop_timezone: str
    stop_url: TranslatedString
    tts_stop_name: TranslatedString
    wheelchair_boarding: Stop.WheelchairBoarding
    zone_id: str
    def __init__(self, stop_id: _Optional[str] = ..., stop_code: _Optional[_Union[TranslatedString, _Mapping]] = ..., stop_name: _Optional[_Union[TranslatedString, _Mapping]] = ..., tts_stop_name: _Optional[_Union[TranslatedString, _Mapping]] = ..., stop_desc: _Optional[_Union[TranslatedString, _Mapping]] = ..., stop_lat: _Optional[float] = ..., stop_lon: _Optional[float] = ..., zone_id: _Optional[str] = ..., stop_url: _Optional[_Union[TranslatedString, _Mapping]] = ..., parent_station: _Optional[str] = ..., stop_timezone: _Optional[str] = ..., wheelchair_boarding: _Optional[_Union[Stop.WheelchairBoarding, str]] = ..., level_id: _Optional[str] = ..., platform_code: _Optional[_Union[TranslatedString, _Mapping]] = ...) -> None: ...

class StopSelector(_message.Message):
    __slots__ = ["stop_id", "stop_sequence"]
    Extensions: _python_message._ExtensionDict
    STOP_ID_FIELD_NUMBER: _ClassVar[int]
    STOP_SEQUENCE_FIELD_NUMBER: _ClassVar[int]
    stop_id: str
    stop_sequence: int
    def __init__(self, stop_sequence: _Optional[int] = ..., stop_id: _Optional[str] = ...) -> None: ...

class TimeRange(_message.Message):
    __slots__ = ["end", "start"]
    END_FIELD_NUMBER: _ClassVar[int]
    Extensions: _python_message._ExtensionDict
    START_FIELD_NUMBER: _ClassVar[int]
    end: int
    start: int
    def __init__(self, start: _Optional[int] = ..., end: _Optional[int] = ...) -> None: ...

class TranslatedImage(_message.Message):
    __slots__ = ["localized_image"]
    class LocalizedImage(_message.Message):
        __slots__ = ["language", "media_type", "url"]
        Extensions: _python_message._ExtensionDict
        LANGUAGE_FIELD_NUMBER: _ClassVar[int]
        MEDIA_TYPE_FIELD_NUMBER: _ClassVar[int]
        URL_FIELD_NUMBER: _ClassVar[int]
        language: str
        media_type: str
        url: str
        def __init__(self, url: _Optional[str] = ..., media_type: _Optional[str] = ..., language: _Optional[str] = ...) -> None: ...
    Extensions: _python_message._ExtensionDict
    LOCALIZED_IMAGE_FIELD_NUMBER: _ClassVar[int]
    localized_image: _containers.RepeatedCompositeFieldContainer[TranslatedImage.LocalizedImage]
    def __init__(self, localized_image: _Optional[_Iterable[_Union[TranslatedImage.LocalizedImage, _Mapping]]] = ...) -> None: ...

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
    __slots__ = ["direction_id", "modified_trip", "route_id", "schedule_relationship", "start_date", "start_time", "trip_id"]
    class ScheduleRelationship(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class ModifiedTripSelector(_message.Message):
        __slots__ = ["affected_trip_id", "modifications_id", "start_date", "start_time"]
        AFFECTED_TRIP_ID_FIELD_NUMBER: _ClassVar[int]
        Extensions: _python_message._ExtensionDict
        MODIFICATIONS_ID_FIELD_NUMBER: _ClassVar[int]
        START_DATE_FIELD_NUMBER: _ClassVar[int]
        START_TIME_FIELD_NUMBER: _ClassVar[int]
        affected_trip_id: str
        modifications_id: str
        start_date: str
        start_time: str
        def __init__(self, modifications_id: _Optional[str] = ..., affected_trip_id: _Optional[str] = ..., start_time: _Optional[str] = ..., start_date: _Optional[str] = ...) -> None: ...
    ADDED: TripDescriptor.ScheduleRelationship
    CANCELED: TripDescriptor.ScheduleRelationship
    DELETED: TripDescriptor.ScheduleRelationship
    DIRECTION_ID_FIELD_NUMBER: _ClassVar[int]
    DUPLICATED: TripDescriptor.ScheduleRelationship
    Extensions: _python_message._ExtensionDict
    MODIFIED_TRIP_FIELD_NUMBER: _ClassVar[int]
    NEW: TripDescriptor.ScheduleRelationship
    REPLACEMENT: TripDescriptor.ScheduleRelationship
    ROUTE_ID_FIELD_NUMBER: _ClassVar[int]
    SCHEDULED: TripDescriptor.ScheduleRelationship
    SCHEDULE_RELATIONSHIP_FIELD_NUMBER: _ClassVar[int]
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    START_TIME_FIELD_NUMBER: _ClassVar[int]
    TRIP_ID_FIELD_NUMBER: _ClassVar[int]
    UNSCHEDULED: TripDescriptor.ScheduleRelationship
    direction_id: int
    modified_trip: TripDescriptor.ModifiedTripSelector
    route_id: str
    schedule_relationship: TripDescriptor.ScheduleRelationship
    start_date: str
    start_time: str
    trip_id: str
    def __init__(self, trip_id: _Optional[str] = ..., route_id: _Optional[str] = ..., direction_id: _Optional[int] = ..., start_time: _Optional[str] = ..., start_date: _Optional[str] = ..., schedule_relationship: _Optional[_Union[TripDescriptor.ScheduleRelationship, str]] = ..., modified_trip: _Optional[_Union[TripDescriptor.ModifiedTripSelector, _Mapping]] = ...) -> None: ...

class TripModifications(_message.Message):
    __slots__ = ["modifications", "selected_trips", "service_dates", "start_times"]
    class Modification(_message.Message):
        __slots__ = ["end_stop_selector", "last_modified_time", "propagated_modification_delay", "replacement_stops", "service_alert_id", "start_stop_selector"]
        END_STOP_SELECTOR_FIELD_NUMBER: _ClassVar[int]
        Extensions: _python_message._ExtensionDict
        LAST_MODIFIED_TIME_FIELD_NUMBER: _ClassVar[int]
        PROPAGATED_MODIFICATION_DELAY_FIELD_NUMBER: _ClassVar[int]
        REPLACEMENT_STOPS_FIELD_NUMBER: _ClassVar[int]
        SERVICE_ALERT_ID_FIELD_NUMBER: _ClassVar[int]
        START_STOP_SELECTOR_FIELD_NUMBER: _ClassVar[int]
        end_stop_selector: StopSelector
        last_modified_time: int
        propagated_modification_delay: int
        replacement_stops: _containers.RepeatedCompositeFieldContainer[ReplacementStop]
        service_alert_id: str
        start_stop_selector: StopSelector
        def __init__(self, start_stop_selector: _Optional[_Union[StopSelector, _Mapping]] = ..., end_stop_selector: _Optional[_Union[StopSelector, _Mapping]] = ..., propagated_modification_delay: _Optional[int] = ..., replacement_stops: _Optional[_Iterable[_Union[ReplacementStop, _Mapping]]] = ..., service_alert_id: _Optional[str] = ..., last_modified_time: _Optional[int] = ...) -> None: ...
    class SelectedTrips(_message.Message):
        __slots__ = ["shape_id", "trip_ids"]
        Extensions: _python_message._ExtensionDict
        SHAPE_ID_FIELD_NUMBER: _ClassVar[int]
        TRIP_IDS_FIELD_NUMBER: _ClassVar[int]
        shape_id: str
        trip_ids: _containers.RepeatedScalarFieldContainer[str]
        def __init__(self, trip_ids: _Optional[_Iterable[str]] = ..., shape_id: _Optional[str] = ...) -> None: ...
    Extensions: _python_message._ExtensionDict
    MODIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    SELECTED_TRIPS_FIELD_NUMBER: _ClassVar[int]
    SERVICE_DATES_FIELD_NUMBER: _ClassVar[int]
    START_TIMES_FIELD_NUMBER: _ClassVar[int]
    modifications: _containers.RepeatedCompositeFieldContainer[TripModifications.Modification]
    selected_trips: _containers.RepeatedCompositeFieldContainer[TripModifications.SelectedTrips]
    service_dates: _containers.RepeatedScalarFieldContainer[str]
    start_times: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, selected_trips: _Optional[_Iterable[_Union[TripModifications.SelectedTrips, _Mapping]]] = ..., start_times: _Optional[_Iterable[str]] = ..., service_dates: _Optional[_Iterable[str]] = ..., modifications: _Optional[_Iterable[_Union[TripModifications.Modification, _Mapping]]] = ...) -> None: ...

class TripUpdate(_message.Message):
    __slots__ = ["delay", "stop_time_update", "timestamp", "trip", "trip_properties", "vehicle"]
    class StopTimeEvent(_message.Message):
        __slots__ = ["delay", "scheduled_time", "time", "uncertainty"]
        DELAY_FIELD_NUMBER: _ClassVar[int]
        Extensions: _python_message._ExtensionDict
        SCHEDULED_TIME_FIELD_NUMBER: _ClassVar[int]
        TIME_FIELD_NUMBER: _ClassVar[int]
        UNCERTAINTY_FIELD_NUMBER: _ClassVar[int]
        delay: int
        scheduled_time: int
        time: int
        uncertainty: int
        def __init__(self, delay: _Optional[int] = ..., time: _Optional[int] = ..., uncertainty: _Optional[int] = ..., scheduled_time: _Optional[int] = ...) -> None: ...
    class StopTimeUpdate(_message.Message):
        __slots__ = ["arrival", "departure", "departure_occupancy_status", "schedule_relationship", "stop_id", "stop_sequence", "stop_time_properties"]
        class ScheduleRelationship(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
            __slots__ = []
        class StopTimeProperties(_message.Message):
            __slots__ = ["assigned_stop_id", "drop_off_type", "pickup_type", "stop_headsign"]
            class DropOffPickupType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
                __slots__ = []
            ASSIGNED_STOP_ID_FIELD_NUMBER: _ClassVar[int]
            COORDINATE_WITH_DRIVER: TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType
            DROP_OFF_TYPE_FIELD_NUMBER: _ClassVar[int]
            Extensions: _python_message._ExtensionDict
            NONE: TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType
            PHONE_AGENCY: TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType
            PICKUP_TYPE_FIELD_NUMBER: _ClassVar[int]
            REGULAR: TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType
            STOP_HEADSIGN_FIELD_NUMBER: _ClassVar[int]
            assigned_stop_id: str
            drop_off_type: TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType
            pickup_type: TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType
            stop_headsign: str
            def __init__(self, assigned_stop_id: _Optional[str] = ..., stop_headsign: _Optional[str] = ..., pickup_type: _Optional[_Union[TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType, str]] = ..., drop_off_type: _Optional[_Union[TripUpdate.StopTimeUpdate.StopTimeProperties.DropOffPickupType, str]] = ...) -> None: ...
        ARRIVAL_FIELD_NUMBER: _ClassVar[int]
        DEPARTURE_FIELD_NUMBER: _ClassVar[int]
        DEPARTURE_OCCUPANCY_STATUS_FIELD_NUMBER: _ClassVar[int]
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
        departure_occupancy_status: VehiclePosition.OccupancyStatus
        schedule_relationship: TripUpdate.StopTimeUpdate.ScheduleRelationship
        stop_id: str
        stop_sequence: int
        stop_time_properties: TripUpdate.StopTimeUpdate.StopTimeProperties
        def __init__(self, stop_sequence: _Optional[int] = ..., stop_id: _Optional[str] = ..., arrival: _Optional[_Union[TripUpdate.StopTimeEvent, _Mapping]] = ..., departure: _Optional[_Union[TripUpdate.StopTimeEvent, _Mapping]] = ..., departure_occupancy_status: _Optional[_Union[VehiclePosition.OccupancyStatus, str]] = ..., schedule_relationship: _Optional[_Union[TripUpdate.StopTimeUpdate.ScheduleRelationship, str]] = ..., stop_time_properties: _Optional[_Union[TripUpdate.StopTimeUpdate.StopTimeProperties, _Mapping]] = ...) -> None: ...
    class TripProperties(_message.Message):
        __slots__ = ["shape_id", "start_date", "start_time", "trip_headsign", "trip_id", "trip_short_name"]
        Extensions: _python_message._ExtensionDict
        SHAPE_ID_FIELD_NUMBER: _ClassVar[int]
        START_DATE_FIELD_NUMBER: _ClassVar[int]
        START_TIME_FIELD_NUMBER: _ClassVar[int]
        TRIP_HEADSIGN_FIELD_NUMBER: _ClassVar[int]
        TRIP_ID_FIELD_NUMBER: _ClassVar[int]
        TRIP_SHORT_NAME_FIELD_NUMBER: _ClassVar[int]
        shape_id: str
        start_date: str
        start_time: str
        trip_headsign: str
        trip_id: str
        trip_short_name: str
        def __init__(self, trip_id: _Optional[str] = ..., start_date: _Optional[str] = ..., start_time: _Optional[str] = ..., shape_id: _Optional[str] = ..., trip_headsign: _Optional[str] = ..., trip_short_name: _Optional[str] = ...) -> None: ...
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
    __slots__ = ["id", "label", "license_plate", "wheelchair_accessible"]
    class WheelchairAccessible(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    Extensions: _python_message._ExtensionDict
    ID_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    LICENSE_PLATE_FIELD_NUMBER: _ClassVar[int]
    NO_VALUE: VehicleDescriptor.WheelchairAccessible
    UNKNOWN: VehicleDescriptor.WheelchairAccessible
    WHEELCHAIR_ACCESSIBLE: VehicleDescriptor.WheelchairAccessible
    WHEELCHAIR_ACCESSIBLE_FIELD_NUMBER: _ClassVar[int]
    WHEELCHAIR_INACCESSIBLE: VehicleDescriptor.WheelchairAccessible
    id: str
    label: str
    license_plate: str
    wheelchair_accessible: VehicleDescriptor.WheelchairAccessible
    def __init__(self, id: _Optional[str] = ..., label: _Optional[str] = ..., license_plate: _Optional[str] = ..., wheelchair_accessible: _Optional[_Union[VehicleDescriptor.WheelchairAccessible, str]] = ...) -> None: ...

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
