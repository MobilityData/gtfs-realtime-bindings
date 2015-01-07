/**
 * Copyright 2015 Google, Inc.
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

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.io.InputStream;

import org.junit.Test;

import com.google.transit.realtime.GtfsRealtime.FeedEntity;
import com.google.transit.realtime.GtfsRealtime.FeedMessage;

/**
 * Unit-test for {@link GtfsRealtime} generated class.
 */
public class GtfsRealtimeTest {

  @Test
  public void testParseFrom() throws IOException {
    InputStream in = getClass().getResourceAsStream("vehicle_position.pb");
    FeedMessage feed = FeedMessage.parseFrom(in);
    assertEquals(1, feed.getEntityCount());
    FeedEntity entity = feed.getEntity(0);
    assertEquals(entity.getId(), "1");
    assertTrue(entity.hasVehicle());
  }
}
