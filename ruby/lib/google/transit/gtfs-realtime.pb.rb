# encoding: utf-8
#
# Copyright 2015 Google Inc.
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

##
# This file is auto-generated. DO NOT EDIT!
#
require 'protobuf/message'

module Transit_realtime

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
      end

    end


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
    end

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
    end

  end

  class VehicleDescriptor < ::Protobuf::Message; end
  class EntitySelector < ::Protobuf::Message; end
  class TranslatedString < ::Protobuf::Message
    class Translation < ::Protobuf::Message; end

  end



  ##
  # Message Fields
  #
  class FeedMessage
    required ::Transit_realtime::FeedHeader, :header, 1
    repeated ::Transit_realtime::FeedEntity, :entity, 2
    # Extension Fields
    extensions 1000...2000
  end

  class FeedHeader
    required :string, :gtfs_realtime_version, 1
    optional ::Transit_realtime::FeedHeader::Incrementality, :incrementality, 2, :default => ::Transit_realtime::FeedHeader::Incrementality::FULL_DATASET
    optional :uint64, :timestamp, 3
    # Extension Fields
    extensions 1000...2000
  end

  class FeedEntity
    required :string, :id, 1
    optional :bool, :is_deleted, 2, :default => false
    optional ::Transit_realtime::TripUpdate, :trip_update, 3
    optional ::Transit_realtime::VehiclePosition, :vehicle, 4
    optional ::Transit_realtime::Alert, :alert, 5
    # Extension Fields
    extensions 1000...2000
  end

  class TripUpdate
    class StopTimeEvent
      optional :int32, :delay, 1
      optional :int64, :time, 2
      optional :int32, :uncertainty, 3
      # Extension Fields
      extensions 1000...2000
    end

    class StopTimeUpdate
      optional :uint32, :stop_sequence, 1
      optional :string, :stop_id, 4
      optional ::Transit_realtime::TripUpdate::StopTimeEvent, :arrival, 2
      optional ::Transit_realtime::TripUpdate::StopTimeEvent, :departure, 3
      optional ::Transit_realtime::TripUpdate::StopTimeUpdate::ScheduleRelationship, :schedule_relationship, 5, :default => ::Transit_realtime::TripUpdate::StopTimeUpdate::ScheduleRelationship::SCHEDULED
      # Extension Fields
      extensions 1000...2000
    end

    required ::Transit_realtime::TripDescriptor, :trip, 1
    optional ::Transit_realtime::VehicleDescriptor, :vehicle, 3
    repeated ::Transit_realtime::TripUpdate::StopTimeUpdate, :stop_time_update, 2
    optional :uint64, :timestamp, 4
    optional :int32, :delay, 5
    # Extension Fields
    extensions 1000...2000
  end

  class VehiclePosition
    optional ::Transit_realtime::TripDescriptor, :trip, 1
    optional ::Transit_realtime::VehicleDescriptor, :vehicle, 8
    optional ::Transit_realtime::Position, :position, 2
    optional :uint32, :current_stop_sequence, 3
    optional :string, :stop_id, 7
    optional ::Transit_realtime::VehiclePosition::VehicleStopStatus, :current_status, 4, :default => ::Transit_realtime::VehiclePosition::VehicleStopStatus::IN_TRANSIT_TO
    optional :uint64, :timestamp, 5
    optional ::Transit_realtime::VehiclePosition::CongestionLevel, :congestion_level, 6
    optional ::Transit_realtime::VehiclePosition::OccupancyStatus, :occupancy_status, 9
    # Extension Fields
    extensions 1000...2000
  end

  class Alert
    repeated ::Transit_realtime::TimeRange, :active_period, 1
    repeated ::Transit_realtime::EntitySelector, :informed_entity, 5
    optional ::Transit_realtime::Alert::Cause, :cause, 6, :default => ::Transit_realtime::Alert::Cause::UNKNOWN_CAUSE
    optional ::Transit_realtime::Alert::Effect, :effect, 7, :default => ::Transit_realtime::Alert::Effect::UNKNOWN_EFFECT
    optional ::Transit_realtime::TranslatedString, :url, 8
    optional ::Transit_realtime::TranslatedString, :header_text, 10
    optional ::Transit_realtime::TranslatedString, :description_text, 11
    # Extension Fields
    extensions 1000...2000
  end

  class TimeRange
    optional :uint64, :start, 1
    optional :uint64, :end, 2
    # Extension Fields
    extensions 1000...2000
  end

  class Position
    required :float, :latitude, 1
    required :float, :longitude, 2
    optional :float, :bearing, 3
    optional :double, :odometer, 4
    optional :float, :speed, 5
    # Extension Fields
    extensions 1000...2000
  end

  class TripDescriptor
    optional :string, :trip_id, 1
    optional :string, :route_id, 5
    optional :string, :start_time, 2
    optional :string, :start_date, 3
    optional ::Transit_realtime::TripDescriptor::ScheduleRelationship, :schedule_relationship, 4
    # Extension Fields
    extensions 1000...2000
  end

  class VehicleDescriptor
    optional :string, :id, 1
    optional :string, :label, 2
    optional :string, :license_plate, 3
    # Extension Fields
    extensions 1000...2000
  end

  class EntitySelector
    optional :string, :agency_id, 1
    optional :string, :route_id, 2
    optional :int32, :route_type, 3
    optional ::Transit_realtime::TripDescriptor, :trip, 4
    optional :string, :stop_id, 5
    # Extension Fields
    extensions 1000...2000
  end

  class TranslatedString
    class Translation
      required :string, :text, 1
      optional :string, :language, 2
      # Extension Fields
      extensions 1000...2000
    end

    repeated ::Transit_realtime::TranslatedString::Translation, :translation, 1
    # Extension Fields
    extensions 1000...2000
  end

end

