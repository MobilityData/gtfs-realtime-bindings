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
    feedMessageBuilder.setHeader(feedHeaderBuilder);

    feedEntityBuilder = GtfsRealtime.FeedEntity.newBuilder();
    feedEntityBuilder.setId(ENTITY_ID);

    vehiclePositionBuilder = GtfsRealtime.VehiclePosition.newBuilder();
    tripDescriptorBuilder = GtfsRealtime.TripDescriptor.newBuilder();
    vehicleDescriptorBuilder = GtfsRealtime.VehicleDescriptor.newBuilder();
  }

  @Test
  public void testWriteAndReadVehiclePositions() throws IOException {
    final String FILE_NAME = "test-write-vehicle-position.pb";

    // Write vehicle positions to a file
    tripDescriptorBuilder.setTripId("A");
    vehicleDescriptorBuilder.setId("1");
    GtfsRealtime.Position.Builder positionBuilder = GtfsRealtime.Position.newBuilder();
    positionBuilder.setLatitude(50.0f);
    positionBuilder.setLongitude(-60.0f);

    vehiclePositionBuilder.setVehicle(vehicleDescriptorBuilder.build());
    vehiclePositionBuilder.setTrip(tripDescriptorBuilder.build());
    vehiclePositionBuilder.setPosition(positionBuilder.build());
    feedEntityBuilder.setVehicle(vehiclePositionBuilder.build());
    feedMessageBuilder.addEntity(0, feedEntityBuilder.build());

    // Write and read vehicle positions to/from byte array
    byte[] bytes = feedMessageBuilder.build().toByteArray();
    validateParsedFeed(FeedMessage.parseFrom(bytes));

    // Write and read vehicle positions to/from file
    OutputStream out = new BufferedOutputStream(new FileOutputStream(new File(FILE_NAME)));
    feedMessageBuilder.build().writeTo(out);
    out.close();
    FileInputStream fis = new FileInputStream(FILE_NAME);
    validateParsedFeed(FeedMessage.parseFrom(fis));

    clearAndInitRequiredFeedFields();
  }

  private static void validateParsedFeed(FeedMessage feed) {
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
    assertFalse(entity.getVehicle().hasOccupancyStatus());
    assertFalse(entity.getVehicle().getTrip().hasDirectionId());
    assertFalse(entity.getVehicle().getTrip().hasRouteId());
    assertFalse(entity.getVehicle().getTrip().hasScheduleRelationship());
    assertFalse(entity.getVehicle().getTrip().hasStartDate());
    assertFalse(entity.getVehicle().getTrip().hasStartTime());
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
