# encoding: utf-8
#
# Copyright 2015-2019 Google Inc., MobilityData
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# encoding: utf-8

##
# This file is auto-generated. DO NOT EDIT!
#
require 'protobuf'

module Transit_realtime
  ::Protobuf::Optionable.inject(self) { ::Google::Protobuf::FileOptions }

  ##
  # Message Classes
  #
  class FeedMessage < ::Protobuf::Message; end
  class FeedHeader < ::Protobuf::Message
    class Incrementality < ::Protobuf::Enum
      define :FULL_DATASET, 0
      define :DIFFERENTIAL, 1
    end

  end

  class FeedEntity < ::Protobuf::Message; end
  class TripUpdate < ::Protobuf::Message
    class StopTimeEvent < ::Protobuf::Message; end
    class StopTimeUpdate < ::Protobuf::Message
      class ScheduleRelationship < ::Protobuf::Enum
        define :SCHEDULED, 0
        define :SKIPPED, 1
        define :NO_DATA, 2
        define :UNSCHEDULED, 3
      end

      class StopTimeProperties < ::Protobuf::Message
        class DropOffPickupType < ::Protobuf::Enum
          define :REGULAR, 0
          define :NONE, 1
          define :PHONE_AGENCY, 2
          define :COORDINATE_WITH_DRIVER, 3
        end

      end


    end

    class TripProperties < ::Protobuf::Message; end

  end

  class VehiclePosition < ::Protobuf::Message
    class VehicleStopStatus < ::Protobuf::Enum
      define :INCOMING_AT, 0
      define :STOPPED_AT, 1
      define :IN_TRANSIT_TO, 2
    end

    class CongestionLevel < ::Protobuf::Enum
      define :UNKNOWN_CONGESTION_LEVEL, 0
      define :RUNNING_SMOOTHLY, 1
      define :STOP_AND_GO, 2
      define :CONGESTION, 3
      define :SEVERE_CONGESTION, 4
    end

    class OccupancyStatus < ::Protobuf::Enum
      define :EMPTY, 0
      define :MANY_SEATS_AVAILABLE, 1
      define :FEW_SEATS_AVAILABLE, 2
      define :STANDING_ROOM_ONLY, 3
      define :CRUSHED_STANDING_ROOM_ONLY, 4
      define :FULL, 5
      define :NOT_ACCEPTING_PASSENGERS, 6
      define :NO_DATA_AVAILABLE, 7
      define :NOT_BOARDABLE, 8
    end

    class CarriageDetails < ::Protobuf::Message; end

  end

  class Alert < ::Protobuf::Message
    class Cause < ::Protobuf::Enum
      define :UNKNOWN_CAUSE, 1
      define :OTHER_CAUSE, 2
      define :TECHNICAL_PROBLEM, 3
      define :STRIKE, 4
      define :DEMONSTRATION, 5
      define :ACCIDENT, 6
      define :HOLIDAY, 7
      define :WEATHER, 8
      define :MAINTENANCE, 9
      define :CONSTRUCTION, 10
      define :POLICE_ACTIVITY, 11
      define :MEDICAL_EMERGENCY, 12
      define :SPECIAL_EVENT, 13
    end

    class Effect < ::Protobuf::Enum
      define :NO_SERVICE, 1
      define :REDUCED_SERVICE, 2
      define :SIGNIFICANT_DELAYS, 3
      define :DETOUR, 4
      define :ADDITIONAL_SERVICE, 5
      define :MODIFIED_SERVICE, 6
      define :OTHER_EFFECT, 7
      define :UNKNOWN_EFFECT, 8
      define :STOP_MOVED, 9
      define :NO_EFFECT, 10
      define :ACCESSIBILITY_ISSUE, 11
    end

    class SeverityLevel < ::Protobuf::Enum
      define :UNKNOWN_SEVERITY, 1
      define :INFO, 2
      define :WARNING, 3
      define :SEVERE, 4
    end

  end

  class TimeRange < ::Protobuf::Message; end
  class Position < ::Protobuf::Message; end
  class TripDescriptor < ::Protobuf::Message
    class ScheduleRelationship < ::Protobuf::Enum
      define :SCHEDULED, 0
      define :ADDED, 1
      define :UNSCHEDULED, 2
      define :CANCELED, 3
      define :REPLACEMENT, 5
      define :DUPLICATED, 6
      define :DELETED, 7
      define :NEW, 8
    end

    class ModifiedTripSelector < ::Protobuf::Message; end

  end

  class VehicleDescriptor < ::Protobuf::Message
    class WheelchairAccessible < ::Protobuf::Enum
      define :NO_VALUE, 0
      define :UNKNOWN, 1
      define :WHEELCHAIR_ACCESSIBLE, 2
      define :WHEELCHAIR_INACCESSIBLE, 3
    end

  end

  class EntitySelector < ::Protobuf::Message; end
  class TranslatedString < ::Protobuf::Message
    class Translation < ::Protobuf::Message; end

  end

  class TranslatedImage < ::Protobuf::Message
    class LocalizedImage < ::Protobuf::Message; end

  end

  class Shape < ::Protobuf::Message; end
  class Stop < ::Protobuf::Message
    class WheelchairBoarding < ::Protobuf::Enum
      define :UNKNOWN, 0
      define :AVAILABLE, 1
      define :NOT_AVAILABLE, 2
    end

  end

  class TripModifications < ::Protobuf::Message
    class Modification < ::Protobuf::Message; end
    class SelectedTrips < ::Protobuf::Message; end

  end

  class StopSelector < ::Protobuf::Message; end
  class ReplacementStop < ::Protobuf::Message; end


  ##
  # File Options
  #
  set_option :java_package, "com.google.transit.realtime"


  ##
  # Message Fields
  #
  class FeedMessage
    required ::Transit_realtime::FeedHeader, :header, 1
    repeated ::Transit_realtime::FeedEntity, :entity, 2
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class FeedHeader
    required :string, :gtfs_realtime_version, 1
    optional ::Transit_realtime::FeedHeader::Incrementality, :incrementality, 2, :default => ::Transit_realtime::FeedHeader::Incrementality::FULL_DATASET
    optional :uint64, :timestamp, 3
    optional :string, :feed_version, 4
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class FeedEntity
    required :string, :id, 1
    optional :bool, :is_deleted, 2, :default => false
    optional ::Transit_realtime::TripUpdate, :trip_update, 3
    optional ::Transit_realtime::VehiclePosition, :vehicle, 4
    optional ::Transit_realtime::Alert, :alert, 5
    optional ::Transit_realtime::Shape, :shape, 6
    optional ::Transit_realtime::Stop, :stop, 7
    optional ::Transit_realtime::TripModifications, :trip_modifications, 8
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class TripUpdate
    class StopTimeEvent
      optional :int32, :delay, 1
      optional :int64, :time, 2
      optional :int32, :uncertainty, 3
      optional :int64, :scheduled_time, 4
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    class StopTimeUpdate
      class StopTimeProperties
        optional :string, :assigned_stop_id, 1
        optional :string, :stop_headsign, 2
        optional ::Transit_realtime::TripUpdate::StopTimeUpdate::StopTimeProperties::DropOffPickupType, :pickup_type, 3
        optional ::Transit_realtime::TripUpdate::StopTimeUpdate::StopTimeProperties::DropOffPickupType, :drop_off_type, 4
        # Extension Fields
        extensions 1000...2000
        extensions 9000...10000
      end

      optional :uint32, :stop_sequence, 1
      optional :string, :stop_id, 4
      optional ::Transit_realtime::TripUpdate::StopTimeEvent, :arrival, 2
      optional ::Transit_realtime::TripUpdate::StopTimeEvent, :departure, 3
      optional ::Transit_realtime::VehiclePosition::OccupancyStatus, :departure_occupancy_status, 7
      optional ::Transit_realtime::TripUpdate::StopTimeUpdate::ScheduleRelationship, :schedule_relationship, 5, :default => ::Transit_realtime::TripUpdate::StopTimeUpdate::ScheduleRelationship::SCHEDULED
      optional ::Transit_realtime::TripUpdate::StopTimeUpdate::StopTimeProperties, :stop_time_properties, 6
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    class TripProperties
      optional :string, :trip_id, 1
      optional :string, :start_date, 2
      optional :string, :start_time, 3
      optional :string, :shape_id, 4
      optional :string, :trip_headsign, 5
      optional :string, :trip_short_name, 6
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    required ::Transit_realtime::TripDescriptor, :trip, 1
    optional ::Transit_realtime::VehicleDescriptor, :vehicle, 3
    repeated ::Transit_realtime::TripUpdate::StopTimeUpdate, :stop_time_update, 2
    optional :uint64, :timestamp, 4
    optional :int32, :delay, 5
    optional ::Transit_realtime::TripUpdate::TripProperties, :trip_properties, 6
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class VehiclePosition
    class CarriageDetails
      optional :string, :id, 1
      optional :string, :label, 2
      optional ::Transit_realtime::VehiclePosition::OccupancyStatus, :occupancy_status, 3, :default => ::Transit_realtime::VehiclePosition::OccupancyStatus::NO_DATA_AVAILABLE
      optional :int32, :occupancy_percentage, 4, :default => -1
      optional :uint32, :carriage_sequence, 5
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    optional ::Transit_realtime::TripDescriptor, :trip, 1
    optional ::Transit_realtime::VehicleDescriptor, :vehicle, 8
    optional ::Transit_realtime::Position, :position, 2
    optional :uint32, :current_stop_sequence, 3
    optional :string, :stop_id, 7
    optional ::Transit_realtime::VehiclePosition::VehicleStopStatus, :current_status, 4, :default => ::Transit_realtime::VehiclePosition::VehicleStopStatus::IN_TRANSIT_TO
    optional :uint64, :timestamp, 5
    optional ::Transit_realtime::VehiclePosition::CongestionLevel, :congestion_level, 6
    optional ::Transit_realtime::VehiclePosition::OccupancyStatus, :occupancy_status, 9
    optional :uint32, :occupancy_percentage, 10
    repeated ::Transit_realtime::VehiclePosition::CarriageDetails, :multi_carriage_details, 11
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class Alert
    repeated ::Transit_realtime::TimeRange, :active_period, 1
    repeated ::Transit_realtime::EntitySelector, :informed_entity, 5
    optional ::Transit_realtime::Alert::Cause, :cause, 6, :default => ::Transit_realtime::Alert::Cause::UNKNOWN_CAUSE
    optional ::Transit_realtime::Alert::Effect, :effect, 7, :default => ::Transit_realtime::Alert::Effect::UNKNOWN_EFFECT
    optional ::Transit_realtime::TranslatedString, :url, 8
    optional ::Transit_realtime::TranslatedString, :header_text, 10
    optional ::Transit_realtime::TranslatedString, :description_text, 11
    optional ::Transit_realtime::TranslatedString, :tts_header_text, 12
    optional ::Transit_realtime::TranslatedString, :tts_description_text, 13
    optional ::Transit_realtime::Alert::SeverityLevel, :severity_level, 14, :default => ::Transit_realtime::Alert::SeverityLevel::UNKNOWN_SEVERITY
    optional ::Transit_realtime::TranslatedImage, :image, 15
    optional ::Transit_realtime::TranslatedString, :image_alternative_text, 16
    optional ::Transit_realtime::TranslatedString, :cause_detail, 17
    optional ::Transit_realtime::TranslatedString, :effect_detail, 18
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class TimeRange
    optional :uint64, :start, 1
    optional :uint64, :end, 2
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class Position
    required :float, :latitude, 1
    required :float, :longitude, 2
    optional :float, :bearing, 3
    optional :double, :odometer, 4
    optional :float, :speed, 5
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class TripDescriptor
    class ModifiedTripSelector
      optional :string, :modifications_id, 1
      optional :string, :affected_trip_id, 2
      optional :string, :start_time, 3
      optional :string, :start_date, 4
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    optional :string, :trip_id, 1
    optional :string, :route_id, 5
    optional :uint32, :direction_id, 6
    optional :string, :start_time, 2
    optional :string, :start_date, 3
    optional ::Transit_realtime::TripDescriptor::ScheduleRelationship, :schedule_relationship, 4
    optional ::Transit_realtime::TripDescriptor::ModifiedTripSelector, :modified_trip, 7
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class VehicleDescriptor
    optional :string, :id, 1
    optional :string, :label, 2
    optional :string, :license_plate, 3
    optional ::Transit_realtime::VehicleDescriptor::WheelchairAccessible, :wheelchair_accessible, 4, :default => ::Transit_realtime::VehicleDescriptor::WheelchairAccessible::NO_VALUE
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class EntitySelector
    optional :string, :agency_id, 1
    optional :string, :route_id, 2
    optional :int32, :route_type, 3
    optional ::Transit_realtime::TripDescriptor, :trip, 4
    optional :string, :stop_id, 5
    optional :uint32, :direction_id, 6
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class TranslatedString
    class Translation
      required :string, :text, 1
      optional :string, :language, 2
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    repeated ::Transit_realtime::TranslatedString::Translation, :translation, 1
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class TranslatedImage
    class LocalizedImage
      required :string, :url, 1
      required :string, :media_type, 2
      optional :string, :language, 3
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    repeated ::Transit_realtime::TranslatedImage::LocalizedImage, :localized_image, 1
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class Shape
    optional :string, :shape_id, 1
    optional :string, :encoded_polyline, 2
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class Stop
    optional :string, :stop_id, 1
    optional ::Transit_realtime::TranslatedString, :stop_code, 2
    optional ::Transit_realtime::TranslatedString, :stop_name, 3
    optional ::Transit_realtime::TranslatedString, :tts_stop_name, 4
    optional ::Transit_realtime::TranslatedString, :stop_desc, 5
    optional :float, :stop_lat, 6
    optional :float, :stop_lon, 7
    optional :string, :zone_id, 8
    optional ::Transit_realtime::TranslatedString, :stop_url, 9
    optional :string, :parent_station, 11
    optional :string, :stop_timezone, 12
    optional ::Transit_realtime::Stop::WheelchairBoarding, :wheelchair_boarding, 13, :default => ::Transit_realtime::Stop::WheelchairBoarding::UNKNOWN
    optional :string, :level_id, 14
    optional ::Transit_realtime::TranslatedString, :platform_code, 15
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class TripModifications
    class Modification
      optional ::Transit_realtime::StopSelector, :start_stop_selector, 1
      optional ::Transit_realtime::StopSelector, :end_stop_selector, 2
      optional :int32, :propagated_modification_delay, 3, :default => 0
      repeated ::Transit_realtime::ReplacementStop, :replacement_stops, 4
      optional :string, :service_alert_id, 5
      optional :uint64, :last_modified_time, 6
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    class SelectedTrips
      repeated :string, :trip_ids, 1
      optional :string, :shape_id, 2
      # Extension Fields
      extensions 1000...2000
      extensions 9000...10000
    end

    repeated ::Transit_realtime::TripModifications::SelectedTrips, :selected_trips, 1
    repeated :string, :start_times, 2
    repeated :string, :service_dates, 3
    repeated ::Transit_realtime::TripModifications::Modification, :modifications, 4
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class StopSelector
    optional :uint32, :stop_sequence, 1
    optional :string, :stop_id, 2
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

  class ReplacementStop
    optional :int32, :travel_time_to_stop, 1
    optional :string, :stop_id, 2
    # Extension Fields
    extensions 1000...2000
    extensions 9000...10000
  end

end

