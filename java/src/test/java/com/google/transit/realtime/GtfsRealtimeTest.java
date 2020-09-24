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
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;

import static org.junit.Assert.*;

/**
 * Unit-test for {@link GtfsRealtime} generated class.
 */
public class GtfsRealtimeTest {

  @Test
  public void testParseFrom() throws IOException {
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
