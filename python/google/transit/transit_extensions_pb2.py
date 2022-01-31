# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: transit-extensions.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gtfs_spec.gtfs_realtime.proto import gtfs_realtime_pb2 as gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2
from agency_extensions import tfnsw_vehicle_pb2 as agency__extensions_dot_tfnsw__vehicle__pb2
from agency_extensions import mtas_realtime_pb2 as agency__extensions_dot_mtas__realtime__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18transit-extensions.proto\x1a\x31gtfs-spec/gtfs-realtime/proto/gtfs-realtime.proto\x1a%agency-extensions/tfnsw-vehicle.proto\x1a%agency-extensions/mtas-realtime.proto\"a\n\x15TransitAlertExtension\x12\x12\n\ncreated_at\x18\x01 \x02(\x04\x12\x13\n\x0bsource_name\x18\x02 \x01(\t\x12\x1f\n\x17is_service_change_alert\x18\x03 \x01(\x08\"b\n\x1eTransitInformedEntityExtension\x12\x0f\n\x07\x66\x65\x65\x64_id\x18\x01 \x01(\x05\x12\x17\n\x0fglobal_route_id\x18\x02 \x01(\x05\x12\x16\n\x0estable_stop_id\x18\x03 \x01(\x05\"d\n!TransitVehicleDescriptorExtension\x12#\n\x1b\x62\x61sed_on_crowdsourcing_data\x18\x01 \x01(\x08\x12\x1a\n\x12transit_vehicle_id\x18\x02 \x01(\t\"\xec\x01\n\x1eTransitTripDescriptorExtension\x12\x61\n\x11origin_prediction\x18\x01 \x01(\x0e\x32\x30.TransitTripDescriptorExtension.OriginPrediction:\x14\x41GENCY_ORIGINAL_DATA\x12\x1a\n\x12prediction_made_at\x18\x02 \x01(\x04\"K\n\x10OriginPrediction\x12\x18\n\x14\x41GENCY_ORIGINAL_DATA\x10\x00\x12\x1d\n\x19TRANSIT_PREDICTION_ENGINE\x10\x01\"\xee\x01\n\x1eTransitStopTimeUpdateExtension\x12)\n!should_not_assume_vehicle_is_past\x18\x01 \x01(\x08\x12Q\n\x14prediction_algorithm\x18\x02 \x01(\x0e\x32\x33.TransitStopTimeUpdateExtension.PredictionAlgorithm\"N\n\x13PredictionAlgorithm\x12\x06\n\x02ML\x10\x00\x12\x0b\n\x07RECENCY\x10\x01\x12\x11\n\rDETERMINISTIC\x10\x02\x12\x0f\n\x0bPROPAGATION\x10\x03:Q\n\x17transit_alert_extension\x12\x17.transit_realtime.Alert\x18\xaaJ \x01(\x0b\x32\x16.TransitAlertExtension:m\n!transit_entity_selector_extension\x12 .transit_realtime.EntitySelector\x18\xaaJ \x01(\x0b\x32\x1f.TransitInformedEntityExtension:v\n$transit_vehicle_descriptor_extension\x12#.transit_realtime.VehicleDescriptor\x18\xaaJ \x01(\x0b\x32\".TransitVehicleDescriptorExtension:m\n!transit_trip_descriptor_extension\x12 .transit_realtime.TripDescriptor\x18\xaaJ \x01(\x0b\x32\x1f.TransitTripDescriptorExtension:y\n\"transit_stop_time_update_extension\x12+.transit_realtime.TripUpdate.StopTimeUpdate\x18\xaaJ \x01(\x0b\x32\x1f.TransitStopTimeUpdateExtension:_\n\x18tfnsw_vehicle_descriptor\x12#.transit_realtime.VehicleDescriptor\x18\xcf\x0f \x01(\x0b\x32\x17.TfnswVehicleDescriptor:H\n\x10nyct_feed_header\x12\x1c.transit_realtime.FeedHeader\x18\xe9\x07 \x01(\x0b\x32\x0f.NyctFeedHeader:T\n\x14nyct_trip_descriptor\x12 .transit_realtime.TripDescriptor\x18\xe9\x07 \x01(\x0b\x32\x13.NyctTripDescriptor:`\n\x15nyct_stop_time_update\x12+.transit_realtime.TripUpdate.StopTimeUpdate\x18\xe9\x07 \x01(\x0b\x32\x13.NyctStopTimeUpdate')


TRANSIT_ALERT_EXTENSION_FIELD_NUMBER = 9514
transit_alert_extension = DESCRIPTOR.extensions_by_name['transit_alert_extension']
TRANSIT_ENTITY_SELECTOR_EXTENSION_FIELD_NUMBER = 9514
transit_entity_selector_extension = DESCRIPTOR.extensions_by_name['transit_entity_selector_extension']
TRANSIT_VEHICLE_DESCRIPTOR_EXTENSION_FIELD_NUMBER = 9514
transit_vehicle_descriptor_extension = DESCRIPTOR.extensions_by_name['transit_vehicle_descriptor_extension']
TRANSIT_TRIP_DESCRIPTOR_EXTENSION_FIELD_NUMBER = 9514
transit_trip_descriptor_extension = DESCRIPTOR.extensions_by_name['transit_trip_descriptor_extension']
TRANSIT_STOP_TIME_UPDATE_EXTENSION_FIELD_NUMBER = 9514
transit_stop_time_update_extension = DESCRIPTOR.extensions_by_name['transit_stop_time_update_extension']
TFNSW_VEHICLE_DESCRIPTOR_FIELD_NUMBER = 1999
tfnsw_vehicle_descriptor = DESCRIPTOR.extensions_by_name['tfnsw_vehicle_descriptor']
NYCT_FEED_HEADER_FIELD_NUMBER = 1001
nyct_feed_header = DESCRIPTOR.extensions_by_name['nyct_feed_header']
NYCT_TRIP_DESCRIPTOR_FIELD_NUMBER = 1001
nyct_trip_descriptor = DESCRIPTOR.extensions_by_name['nyct_trip_descriptor']
NYCT_STOP_TIME_UPDATE_FIELD_NUMBER = 1001
nyct_stop_time_update = DESCRIPTOR.extensions_by_name['nyct_stop_time_update']

_TRANSITALERTEXTENSION = DESCRIPTOR.message_types_by_name['TransitAlertExtension']
_TRANSITINFORMEDENTITYEXTENSION = DESCRIPTOR.message_types_by_name['TransitInformedEntityExtension']
_TRANSITVEHICLEDESCRIPTOREXTENSION = DESCRIPTOR.message_types_by_name['TransitVehicleDescriptorExtension']
_TRANSITTRIPDESCRIPTOREXTENSION = DESCRIPTOR.message_types_by_name['TransitTripDescriptorExtension']
_TRANSITSTOPTIMEUPDATEEXTENSION = DESCRIPTOR.message_types_by_name['TransitStopTimeUpdateExtension']
_TRANSITTRIPDESCRIPTOREXTENSION_ORIGINPREDICTION = _TRANSITTRIPDESCRIPTOREXTENSION.enum_types_by_name['OriginPrediction']
_TRANSITSTOPTIMEUPDATEEXTENSION_PREDICTIONALGORITHM = _TRANSITSTOPTIMEUPDATEEXTENSION.enum_types_by_name['PredictionAlgorithm']
TransitAlertExtension = _reflection.GeneratedProtocolMessageType('TransitAlertExtension', (_message.Message,), {
  'DESCRIPTOR' : _TRANSITALERTEXTENSION,
  '__module__' : 'transit_extensions_pb2'
  # @@protoc_insertion_point(class_scope:TransitAlertExtension)
  })
_sym_db.RegisterMessage(TransitAlertExtension)

TransitInformedEntityExtension = _reflection.GeneratedProtocolMessageType('TransitInformedEntityExtension', (_message.Message,), {
  'DESCRIPTOR' : _TRANSITINFORMEDENTITYEXTENSION,
  '__module__' : 'transit_extensions_pb2'
  # @@protoc_insertion_point(class_scope:TransitInformedEntityExtension)
  })
_sym_db.RegisterMessage(TransitInformedEntityExtension)

TransitVehicleDescriptorExtension = _reflection.GeneratedProtocolMessageType('TransitVehicleDescriptorExtension', (_message.Message,), {
  'DESCRIPTOR' : _TRANSITVEHICLEDESCRIPTOREXTENSION,
  '__module__' : 'transit_extensions_pb2'
  # @@protoc_insertion_point(class_scope:TransitVehicleDescriptorExtension)
  })
_sym_db.RegisterMessage(TransitVehicleDescriptorExtension)

TransitTripDescriptorExtension = _reflection.GeneratedProtocolMessageType('TransitTripDescriptorExtension', (_message.Message,), {
  'DESCRIPTOR' : _TRANSITTRIPDESCRIPTOREXTENSION,
  '__module__' : 'transit_extensions_pb2'
  # @@protoc_insertion_point(class_scope:TransitTripDescriptorExtension)
  })
_sym_db.RegisterMessage(TransitTripDescriptorExtension)

TransitStopTimeUpdateExtension = _reflection.GeneratedProtocolMessageType('TransitStopTimeUpdateExtension', (_message.Message,), {
  'DESCRIPTOR' : _TRANSITSTOPTIMEUPDATEEXTENSION,
  '__module__' : 'transit_extensions_pb2'
  # @@protoc_insertion_point(class_scope:TransitStopTimeUpdateExtension)
  })
_sym_db.RegisterMessage(TransitStopTimeUpdateExtension)

if _descriptor._USE_C_DESCRIPTORS == False:
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.Alert.RegisterExtension(transit_alert_extension)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.EntitySelector.RegisterExtension(transit_entity_selector_extension)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.VehicleDescriptor.RegisterExtension(transit_vehicle_descriptor_extension)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.TripDescriptor.RegisterExtension(transit_trip_descriptor_extension)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.TripUpdate.StopTimeUpdate.RegisterExtension(transit_stop_time_update_extension)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.VehicleDescriptor.RegisterExtension(tfnsw_vehicle_descriptor)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.FeedHeader.RegisterExtension(nyct_feed_header)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.TripDescriptor.RegisterExtension(nyct_trip_descriptor)
  gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2.TripUpdate.StopTimeUpdate.RegisterExtension(nyct_stop_time_update)

  DESCRIPTOR._options = None
  _TRANSITALERTEXTENSION._serialized_start=157
  _TRANSITALERTEXTENSION._serialized_end=254
  _TRANSITINFORMEDENTITYEXTENSION._serialized_start=256
  _TRANSITINFORMEDENTITYEXTENSION._serialized_end=354
  _TRANSITVEHICLEDESCRIPTOREXTENSION._serialized_start=356
  _TRANSITVEHICLEDESCRIPTOREXTENSION._serialized_end=456
  _TRANSITTRIPDESCRIPTOREXTENSION._serialized_start=459
  _TRANSITTRIPDESCRIPTOREXTENSION._serialized_end=695
  _TRANSITTRIPDESCRIPTOREXTENSION_ORIGINPREDICTION._serialized_start=620
  _TRANSITTRIPDESCRIPTOREXTENSION_ORIGINPREDICTION._serialized_end=695
  _TRANSITSTOPTIMEUPDATEEXTENSION._serialized_start=698
  _TRANSITSTOPTIMEUPDATEEXTENSION._serialized_end=936
  _TRANSITSTOPTIMEUPDATEEXTENSION_PREDICTIONALGORITHM._serialized_start=858
  _TRANSITSTOPTIMEUPDATEEXTENSION_PREDICTIONALGORITHM._serialized_end=936
# @@protoc_insertion_point(module_scope)
