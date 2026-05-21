/**
 * Copyright 2015-2019 Google Inc., MobilityData
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
var GtfsRealtimeApi = require('../gtfs-realtime.js');
var fs = require('fs');
var should = require('should');
var assert = require('assert');

var tr = GtfsRealtimeApi.transit_realtime;

// Helper: encode a FeedMessage then decode it back
function roundTrip(msg) {
  var buf = tr.FeedMessage.encode(msg).finish();
  return tr.FeedMessage.decode(buf);
}

describe('GtfsRealtimeApi', function () {

  // ── Existing fixture test ────────────────────────────────────────────────
  describe('FeedMessage#decode() from binary fixture', function () {
    it('should decode vehicle position proto data without error', function (done) {
      fs.readFile('test/vehicle_position.pb', function (err, data) {
        if (err) throw err;
        var feed = tr.FeedMessage.decode(data);
        feed.entity.should.have.length(1);
        feed.entity[0].should.have.property('id', '1');
        feed.entity[0].should.have.property('vehicle');
        var vehicle = feed.entity[0].vehicle;
        vehicle.should.have.properties('trip', 'vehicle', 'position');
        assert.equal(vehicle.trip.tripId, 't0');
        done();
      });
    });
  });

  // ── Encode / decode round-trips ──────────────────────────────────────────
  describe('FeedMessage encode/decode round-trip', function () {
    it('should preserve FeedHeader fields', function () {
      var msg = tr.FeedMessage.create({
        header: {
          gtfsRealtimeVersion: '2.0',
          incrementality: tr.FeedHeader.Incrementality.FULL_DATASET,
          timestamp: 1700000000,
        },
        entity: [],
      });
      var decoded = roundTrip(msg);
      assert.equal(decoded.header.gtfsRealtimeVersion, '2.0');
      assert.equal(decoded.header.incrementality, tr.FeedHeader.Incrementality.FULL_DATASET);
      assert.equal(decoded.header.timestamp, 1700000000);
    });

    it('should preserve a TripUpdate entity', function () {
      var msg = tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'tu-1',
          tripUpdate: {
            trip: { tripId: 'trip-42', routeId: 'route-7', scheduleRelationship: tr.TripDescriptor.ScheduleRelationship.SCHEDULED },
            stopTimeUpdate: [{
              stopSequence: 3,
              stopId: 'stop-A',
              arrival: { delay: 60 },
              departure: { delay: 90 },
            }],
            timestamp: 1700000001,
          },
        }],
      });
      var decoded = roundTrip(msg);
      var tu = decoded.entity[0].tripUpdate;
      assert.equal(decoded.entity[0].id, 'tu-1');
      assert.equal(tu.trip.tripId, 'trip-42');
      assert.equal(tu.trip.routeId, 'route-7');
      assert.equal(tu.stopTimeUpdate[0].stopSequence, 3);
      assert.equal(tu.stopTimeUpdate[0].arrival.delay, 60);
      assert.equal(tu.stopTimeUpdate[0].departure.delay, 90);
    });

    it('should preserve a VehiclePosition entity', function () {
      var msg = tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'vp-1',
          vehicle: {
            trip: { tripId: 'trip-1' },
            position: { latitude: 37.7749, longitude: -122.4194, bearing: 90.0, speed: 15.0 },
            currentStopSequence: 5,
            stopId: 'stop-5',
            currentStatus: tr.VehiclePosition.VehicleStopStatus.IN_TRANSIT_TO,
            occupancyStatus: tr.VehiclePosition.OccupancyStatus.FEW_SEATS_AVAILABLE,
            timestamp: 1700000002,
          },
        }],
      });
      var decoded = roundTrip(msg);
      var vp = decoded.entity[0].vehicle;
      assert.equal(vp.trip.tripId, 'trip-1');
      assert.ok(Math.abs(vp.position.latitude - 37.7749) < 0.001);
      assert.ok(Math.abs(vp.position.longitude - (-122.4194)) < 0.001);
      assert.equal(vp.currentStatus, tr.VehiclePosition.VehicleStopStatus.IN_TRANSIT_TO);
      assert.equal(vp.occupancyStatus, tr.VehiclePosition.OccupancyStatus.FEW_SEATS_AVAILABLE);
    });

    it('should preserve an Alert entity', function () {
      var msg = tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'alert-1',
          alert: {
            activePeriod: [{ start: 1700000000, end: 1700003600 }],
            informedEntity: [{ routeId: 'route-7' }],
            cause: tr.Alert.Cause.CONSTRUCTION,
            effect: tr.Alert.Effect.DETOUR,
            severityLevel: tr.Alert.SeverityLevel.WARNING,
            headerText: { translation: [{ text: 'Track work', language: 'en' }] },
            descriptionText: { translation: [{ text: 'Buses replace trains', language: 'en' }] },
          },
        }],
      });
      var decoded = roundTrip(msg);
      var alert = decoded.entity[0].alert;
      assert.equal(alert.cause, tr.Alert.Cause.CONSTRUCTION);
      assert.equal(alert.effect, tr.Alert.Effect.DETOUR);
      assert.equal(alert.severityLevel, tr.Alert.SeverityLevel.WARNING);
      assert.equal(alert.activePeriod[0].start, 1700000000);
      assert.equal(alert.headerText.translation[0].text, 'Track work');
    });
  });

  // ── New ScheduleRelationship values (issue #161) ─────────────────────────
  describe('TripDescriptor.ScheduleRelationship new values', function () {
    function makeFeedWithRelationship(rel) {
      return tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'e1',
          tripUpdate: {
            trip: { tripId: 'trip-1', scheduleRelationship: rel },
            stopTimeUpdate: [],
          },
        }],
      });
    }

    it('should support CANCELED', function () {
      var rel = tr.TripDescriptor.ScheduleRelationship.CANCELED;
      assert.equal(roundTrip(makeFeedWithRelationship(rel)).entity[0].tripUpdate.trip.scheduleRelationship, rel);
    });

    it('should support DUPLICATED', function () {
      var rel = tr.TripDescriptor.ScheduleRelationship.DUPLICATED;
      assert.equal(roundTrip(makeFeedWithRelationship(rel)).entity[0].tripUpdate.trip.scheduleRelationship, rel);
    });

    it('should support DELETED', function () {
      var rel = tr.TripDescriptor.ScheduleRelationship.DELETED;
      assert.equal(roundTrip(makeFeedWithRelationship(rel)).entity[0].tripUpdate.trip.scheduleRelationship, rel);
    });

    it('should support NEW', function () {
      var rel = tr.TripDescriptor.ScheduleRelationship.NEW;
      assert.equal(roundTrip(makeFeedWithRelationship(rel)).entity[0].tripUpdate.trip.scheduleRelationship, rel);
    });

    it('should support REPLACEMENT', function () {
      var rel = tr.TripDescriptor.ScheduleRelationship.REPLACEMENT;
      assert.equal(roundTrip(makeFeedWithRelationship(rel)).entity[0].tripUpdate.trip.scheduleRelationship, rel);
    });
  });

  // ── TripProperties (issue #161) ──────────────────────────────────────────
  describe('TripUpdate.TripProperties', function () {
    it('should preserve all TripProperties fields', function () {
      var msg = tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'e1',
          tripUpdate: {
            trip: { tripId: 'original-trip', scheduleRelationship: tr.TripDescriptor.ScheduleRelationship.DUPLICATED },
            stopTimeUpdate: [],
            tripProperties: {
              tripId: 'new-trip-id',
              startDate: '20240101',
              startTime: '10:00:00',
              shapeId: 'shape-99',
              tripHeadsign: 'Downtown',
              tripShortName: 'Express',
            },
          },
        }],
      });
      var props = roundTrip(msg).entity[0].tripUpdate.tripProperties;
      assert.equal(props.tripId, 'new-trip-id');
      assert.equal(props.startDate, '20240101');
      assert.equal(props.startTime, '10:00:00');
      assert.equal(props.shapeId, 'shape-99');
      assert.equal(props.tripHeadsign, 'Downtown');
      assert.equal(props.tripShortName, 'Express');
    });
  });

  // ── Shape message (issue #161) ───────────────────────────────────────────
  describe('Shape', function () {
    it('should preserve Shape fields', function () {
      var msg = tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'shape-1',
          shape: {
            shapeId: 'detour-shape-1',
            encodedPolyline: '_p~iF~ps|U_ulLnnqC_mqNvxq`@',
          },
        }],
      });
      var shape = roundTrip(msg).entity[0].shape;
      assert.equal(shape.shapeId, 'detour-shape-1');
      assert.equal(shape.encodedPolyline, '_p~iF~ps|U_ulLnnqC_mqNvxq`@');
    });
  });

  // ── Stop message (issue #161) ────────────────────────────────────────────
  describe('Stop', function () {
    it('should preserve Stop fields', function () {
      var msg = tr.FeedMessage.create({
        header: { gtfsRealtimeVersion: '2.0' },
        entity: [{
          id: 'stop-1',
          stop: {
            stopId: 'S001',
            stopName: { translation: [{ text: 'Central Station', language: 'en' }] },
            stopLat: 40.7128,
            stopLon: -74.0060,
            wheelchairBoarding: tr.Stop.WheelchairBoarding.AVAILABLE,
          },
        }],
      });
      var stop = roundTrip(msg).entity[0].stop;
      assert.equal(stop.stopId, 'S001');
      assert.equal(stop.stopName.translation[0].text, 'Central Station');
      assert.ok(Math.abs(stop.stopLat - 40.7128) < 0.001);
      assert.equal(stop.wheelchairBoarding, tr.Stop.WheelchairBoarding.AVAILABLE);
    });
  });

  // ── Enum completeness ────────────────────────────────────────────────────
  describe('Enum values', function () {
    it('TripDescriptor.ScheduleRelationship should have all expected values', function () {
      var sr = tr.TripDescriptor.ScheduleRelationship;
      assert.equal(sr.SCHEDULED, 0);
      assert.equal(sr.UNSCHEDULED, 2);
      assert.equal(sr.CANCELED, 3);
      assert.equal(sr.REPLACEMENT, 5);
      assert.equal(sr.DUPLICATED, 6);
      assert.equal(sr.DELETED, 7);
      assert.equal(sr.NEW, 8);
    });

    it('VehiclePosition.OccupancyStatus should have all expected values', function () {
      var os = tr.VehiclePosition.OccupancyStatus;
      assert.equal(os.EMPTY, 0);
      assert.equal(os.MANY_SEATS_AVAILABLE, 1);
      assert.equal(os.FEW_SEATS_AVAILABLE, 2);
      assert.equal(os.STANDING_ROOM_ONLY, 3);
      assert.equal(os.CRUSHED_STANDING_ROOM_ONLY, 4);
      assert.equal(os.FULL, 5);
      assert.equal(os.NOT_ACCEPTING_PASSENGERS, 6);
      assert.equal(os.NO_DATA_AVAILABLE, 7);
      assert.equal(os.NOT_BOARDABLE, 8);
    });

    it('Alert.SeverityLevel should have all expected values', function () {
      var sl = tr.Alert.SeverityLevel;
      assert.equal(sl.UNKNOWN_SEVERITY, 1);
      assert.equal(sl.INFO, 2);
      assert.equal(sl.WARNING, 3);
      assert.equal(sl.SEVERE, 4);
    });
  });

  // ── Error handling ───────────────────────────────────────────────────────
  describe('Error handling', function () {
    it('should throw when decoding invalid bytes', function () {
      assert.throws(function () {
        tr.FeedMessage.decode(Buffer.from([0xff, 0xff, 0xff]));
      });
    });

    it('should throw when encoding a FeedMessage without a header', function () {
      assert.throws(function () {
        var msg = tr.FeedMessage.create({ entity: [] });
        var err = tr.FeedMessage.verify(msg);
        if (err) throw new Error(err);
      });
    });
  });
});

