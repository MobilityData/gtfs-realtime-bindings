/**
 * Copyright 2015-2019 Google, Inc., MobilityData
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.google.transit.realtime;

import com.google.transit.realtime.GtfsRealtime.FeedEntity;
import com.google.transit.realtime.GtfsRealtime.FeedMessage;
import org.junit.BeforeClass;
import org.junit.Test;

import java.io.*;

import static org.junit.Assert.*;

/**
 * Unit-test for {@link GtfsRealtime} generated class.
 */
public class GtfsRealtimeTest {

  static GtfsRealtime.FeedMessage.Builder feedMessageBuilder;
  static GtfsRealtime.FeedEntity.Builder feedEntityBuilder;
  static GtfsRealtime.FeedHeader.Builder feedHeaderBuilder;
  static GtfsRealtime.VehiclePosition.Builder vehiclePositionBuilder;
  static GtfsRealtime.TripDescriptor.Builder tripDescriptorBuilder;
  static GtfsRealtime.VehicleDescriptor.Builder vehicleDescriptorBuilder;

  public final static String ENTITY_ID = "TEST_ENTITY";

  @BeforeClass
  public static void setup() {
    feedMessageBuilder = GtfsRealtime.FeedMessage.newBuilder();

    feedHeaderBuilder = GtfsRealtime.FeedHeader.newBuilder();
    feedHeaderBuilder.setGtfsRealtimeVersion("2.0");
    feedEntityBuilder = GtfsRealtime.FeedEntity.newBuilder();
    feedEntityBuilder.setId(ENTITY_ID);

    feedMessageBuilder.setHeader(feedHeaderBuilder);
    feedMessageBuilder.addEntity(feedEntityBuilder.build());

    vehiclePositionBuilder = GtfsRealtime.VehiclePosition.newBuilder();
    tripDescriptorBuilder = GtfsRealtime.TripDescriptor.newBuilder();
    vehicleDescriptorBuilder = GtfsRealtime.VehicleDescriptor.newBuilder();
  }

  @Test
  public void testWriteAndReadVehiclePositions() throws IOException {
    final String FILE_NAME = "test-write-vehicle-position.pb";

    createVehicleEntity();
    feedEntityBuilder.setVehicle(vehiclePositionBuilder.build());
    feedMessageBuilder.setEntity(0, feedEntityBuilder.build());

    // Write and read vehicle positions to/from byte array
    final byte[] bytes = feedMessageBuilder.build().toByteArray();
    validateParsedFeed(FeedMessage.parseFrom(bytes), false);

    // Write and read vehicle positions to/from file
    final OutputStream out = new BufferedOutputStream(new FileOutputStream(new File(FILE_NAME)));
    feedMessageBuilder.build().writeTo(out);
    out.close();
    final FileInputStream fis = new FileInputStream(FILE_NAME);
    validateParsedFeed(FeedMessage.parseFrom(fis), false);

    clearAndInitRequiredFeedFields();
  }

  @Test
  public void testWriteAndReadVehiclePositionsWithOccupancyPreDefaults() throws IOException {
    final String FILE_NAME = "vehicle-position-pre-occupancy-defaults-with-occupancy-status.pb";

    createVehicleEntity();
    vehiclePositionBuilder.setOccupancyStatus(GtfsRealtime.VehiclePosition.OccupancyStatus.FEW_SEATS_AVAILABLE);
    feedEntityBuilder.setVehicle(vehiclePositionBuilder.build());
    feedMessageBuilder.setEntity(0, feedEntityBuilder.build());

    // Write and read vehicle positions to/from byte array
    final byte[] bytes = feedMessageBuilder.build().toByteArray();
    validateParsedFeed(FeedMessage.parseFrom(bytes), true);
    validateFewSeatsOccupancy(FeedMessage.parseFrom(bytes));

    // Write and read vehicle positions to/from file
    final OutputStream out = new BufferedOutputStream(new FileOutputStream(new File(FILE_NAME)));
    feedMessageBuilder.build().writeTo(out);
    out.close();
    final FileInputStream fis = new FileInputStream(FILE_NAME);
    validateParsedFeed(FeedMessage.parseFrom(fis), true);

    clearAndInitRequiredFeedFields();
  }

  @Test
  public void testWriteAndReadVehiclePositionsWithoutOccupancyPreDefaults() throws IOException {
    final String FILE_NAME = "vehicle-position-pre-occupancy-defaults-without-occupancy-status.pb";

    createVehicleEntity();
    feedEntityBuilder.setVehicle(vehiclePositionBuilder.build());
    feedMessageBuilder.setEntity(0, feedEntityBuilder.build());

    // Write and read vehicle positions to/from byte array
    final byte[] bytes = feedMessageBuilder.build().toByteArray();
    final FeedMessage messageFromBytes = FeedMessage.parseFrom(bytes);
    assertFalse(messageFromBytes.getEntity(0).getVehicle().hasOccupancyStatus());
    // Previous to setting explicit defaults in the .proto, if you ignore hasOccupancyStatus() and get it it will be EMPTY
    assertEquals(GtfsRealtime.VehiclePosition.OccupancyStatus.EMPTY, messageFromBytes.getEntity(0).getVehicle().getOccupancyStatus());

    // Write and read vehicle positions to/from file
    final OutputStream out = new BufferedOutputStream(new FileOutputStream(new File(FILE_NAME)));
    feedMessageBuilder.build().writeTo(out);
    out.close();
    final FileInputStream fis = new FileInputStream(FILE_NAME);
    final FeedMessage messageFromFile = FeedMessage.parseFrom(fis);
    assertFalse(messageFromBytes.getEntity(0).getVehicle().hasOccupancyStatus());
    // Previous to setting explicit defaults in the .proto, if you ignore hasOccupancyStatus() and get it it will be EMPTY
    assertEquals(GtfsRealtime.VehiclePosition.OccupancyStatus.EMPTY, messageFromFile.getEntity(0).getVehicle().getOccupancyStatus());

    clearAndInitRequiredFeedFields();
  }

  @Test
  public void testReadVehiclePositionsWithOccupancyPostDefaults() throws IOException {
    InputStream in = getClass().getResourceAsStream("vehicle-position-occupancy-defaults-with-occupancy-status.pb");

    final FeedMessage messageFromFile = FeedMessage.parseFrom(in);
    validateParsedFeed(messageFromFile, true);

    clearAndInitRequiredFeedFields();
  }

  @Test
  public void testWriteAndReadVehiclePositionsWithoutOccupancyPostDefaults() throws IOException {
    InputStream in = getClass().getResourceAsStream("vehicle-position-occupancy-defaults-without-occupancy-status.pb");

    final FeedMessage messageFromFile = FeedMessage.parseFrom(in);
    assertFalse(messageFromFile.getEntity(0).getVehicle().hasOccupancyStatus());
    // Previous to setting explicit defaults in the .proto, if you ignore hasOccupancyStatus() and get it it will be EMPTY
    assertEquals(GtfsRealtime.VehiclePosition.OccupancyStatus.EMPTY, messageFromFile.getEntity(0).getVehicle().getOccupancyStatus());

    clearAndInitRequiredFeedFields();
  }

  /**
   * Validates the given feed
   * @param feed a parsed GTFS-realtime feed from protobuf format
   * @param hasOccupancyStatus true if the feed contains OccupancyStatus information, false if it does not
   */
  private static void validateParsedFeed(FeedMessage feed, boolean hasOccupancyStatus) {
    // Header
    assertTrue(feed.hasHeader());
    assertTrue(feed.getHeader().hasGtfsRealtimeVersion());
    assertEquals("2.0", feed.getHeader().getGtfsRealtimeVersion());

    // Entity
    assertEquals(1, feed.getEntityCount());
    FeedEntity entity = feed.getEntity(0);
    assertEquals(entity.getId(), "TEST_ENTITY");
    assertTrue(entity.hasVehicle());
    assertTrue(entity.getVehicle().hasPosition());
    assertTrue(entity.getVehicle().getPosition().hasLatitude());
    assertEquals(50.0f, entity.getVehicle().getPosition().getLatitude(), .00000);
    assertTrue(entity.getVehicle().getPosition().hasLongitude());
    assertEquals(-60.0f, entity.getVehicle().getPosition().getLongitude(), .00000);
    assertTrue(entity.getVehicle().hasVehicle());
    assertEquals("1", entity.getVehicle().getVehicle().getId());
    assertTrue(entity.getVehicle().hasTrip());
    assertTrue(entity.getVehicle().getTrip().hasTripId());
    assertEquals("A", entity.getVehicle().getTrip().getTripId());

    assertFalse(entity.getVehicle().hasCurrentStopSequence());
    assertFalse(entity.getVehicle().hasStopId());
    assertFalse(entity.getVehicle().hasCurrentStatus());
    assertFalse(entity.getVehicle().hasTimestamp());
    assertFalse(entity.getVehicle().hasCongestionLevel());
    if (hasOccupancyStatus) {
      assertTrue(entity.getVehicle().hasOccupancyStatus());
    } else {
      assertFalse(entity.getVehicle().hasOccupancyStatus());
    }

    assertFalse(entity.getVehicle().getTrip().hasDirectionId());
    assertFalse(entity.getVehicle().getTrip().hasRouteId());
    assertFalse(entity.getVehicle().getTrip().hasScheduleRelationship());
    assertFalse(entity.getVehicle().getTrip().hasStartDate());
    assertFalse(entity.getVehicle().getTrip().hasStartTime());
  }

  private static void validateFewSeatsOccupancy(FeedMessage feed) {
    FeedEntity entity = feed.getEntity(0);
    assertTrue(entity.getVehicle().hasOccupancyStatus());
    assertTrue(entity.getVehicle().getOccupancyStatus().equals(GtfsRealtime.VehiclePosition.OccupancyStatus.FEW_SEATS_AVAILABLE));
  }

  private static void createVehicleEntity() {
    tripDescriptorBuilder.setTripId("A");
    vehicleDescriptorBuilder.setId("1");
    GtfsRealtime.Position.Builder positionBuilder = GtfsRealtime.Position.newBuilder();
    positionBuilder.setLatitude(50.0f);
    positionBuilder.setLongitude(-60.0f);

    vehiclePositionBuilder.setVehicle(vehicleDescriptorBuilder.build());
    vehiclePositionBuilder.setTrip(tripDescriptorBuilder.build());
    vehiclePositionBuilder.setPosition(positionBuilder.build());
  }

  private static void clearAndInitRequiredFeedFields() {
    // clear the fields first
    feedEntityBuilder.clear();
    feedMessageBuilder.clear();
    feedHeaderBuilder.clear();

    vehiclePositionBuilder.clear();

    feedHeaderBuilder.setGtfsRealtimeVersion("2.0");
    feedMessageBuilder.setHeader(feedHeaderBuilder);

    feedEntityBuilder.setId(ENTITY_ID);
    feedMessageBuilder.addEntity(feedEntityBuilder);
  }

  @Test
  public void testParseFromExistingFile() throws IOException {
    InputStream in = getClass().getResourceAsStream("vehicle_position.pb");
    FeedMessage feed = FeedMessage.parseFrom(in);

    // Header
    assertTrue(feed.hasHeader());
    assertTrue(feed.getHeader().hasGtfsRealtimeVersion());
    assertEquals("1.0", feed.getHeader().getGtfsRealtimeVersion());

    // Entity
    assertEquals(1, feed.getEntityCount());
    FeedEntity entity = feed.getEntity(0);
    assertEquals(entity.getId(), "1");
    assertTrue(entity.hasVehicle());
    assertTrue(entity.getVehicle().hasPosition());
    assertTrue(entity.getVehicle().getPosition().hasLatitude());
    assertEquals(47.0f, entity.getVehicle().getPosition().getLatitude(), .00000);
    assertTrue(entity.getVehicle().getPosition().hasLongitude());
    assertEquals(-122.0f, entity.getVehicle().getPosition().getLongitude(), .00000);
    assertTrue(entity.getVehicle().hasVehicle());
    assertEquals("1", entity.getVehicle().getVehicle().getId());
    assertTrue(entity.getVehicle().hasTrip());
    assertTrue(entity.getVehicle().getTrip().hasTripId());
    assertEquals("t0", entity.getVehicle().getTrip().getTripId());

    assertFalse(entity.getVehicle().hasCurrentStopSequence());
    assertFalse(entity.getVehicle().hasStopId());
    assertFalse(entity.getVehicle().hasCurrentStatus());
    assertFalse(entity.getVehicle().hasTimestamp());
    assertFalse(entity.getVehicle().hasCongestionLevel());
    assertFalse(entity.getVehicle().hasOccupancyStatus());
    assertFalse(entity.getVehicle().getTrip().hasDirectionId());
    assertFalse(entity.getVehicle().getTrip().hasRouteId());
    assertFalse(entity.getVehicle().getTrip().hasScheduleRelationship());
    assertFalse(entity.getVehicle().getTrip().hasStartDate());
    assertFalse(entity.getVehicle().getTrip().hasStartTime());
  }
}
