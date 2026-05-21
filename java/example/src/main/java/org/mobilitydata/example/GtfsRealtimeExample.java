/**
 * Copyright 2015-2019 Google Inc., MobilityData
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.mobilitydata.example;

import com.google.transit.realtime.GtfsRealtime.*;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

/**
 * Minimal example demonstrating how to build, serialize, and parse a GTFS-Realtime feed
 * using the gtfs-realtime-bindings Java library.
 *
 * <p>This example builds a feed message containing three entity types:
 * <ul>
 *   <li>A vehicle position update</li>
 *   <li>A trip update with a stop time update</li>
 *   <li>A service alert</li>
 * </ul>
 *
 * <p>Run with: {@code mvn exec:java} from the {@code example/} directory.
 */
public class GtfsRealtimeExample {

    public static void main(String[] args) throws Exception {

        // --- Build a FeedMessage ---

        FeedMessage feed = FeedMessage.newBuilder()
            .setHeader(FeedHeader.newBuilder()
                .setGtfsRealtimeVersion("2.0")
                .setIncrementality(FeedHeader.Incrementality.FULL_DATASET)
                .setTimestamp(System.currentTimeMillis() / 1000))

            // Entity 1: vehicle position
            .addEntity(FeedEntity.newBuilder()
                .setId("vehicle-1")
                .setVehicle(VehiclePosition.newBuilder()
                    .setTrip(TripDescriptor.newBuilder()
                        .setTripId("trip-42")
                        .setRouteId("route-7"))
                    .setPosition(Position.newBuilder()
                        .setLatitude(45.5017f)
                        .setLongitude(-73.5673f)
                        .setBearing(180.0f)
                        .setSpeed(12.5f))
                    .setVehicle(VehicleDescriptor.newBuilder()
                        .setId("bus-101")
                        .setLabel("101"))
                    .setCurrentStatus(VehiclePosition.VehicleStopStatus.IN_TRANSIT_TO)
                    .setCurrentStopSequence(5)
                    .setOccupancyStatus(VehiclePosition.OccupancyStatus.MANY_SEATS_AVAILABLE)))

            // Entity 2: trip update with a stop time update
            .addEntity(FeedEntity.newBuilder()
                .setId("trip-update-1")
                .setTripUpdate(TripUpdate.newBuilder()
                    .setTrip(TripDescriptor.newBuilder()
                        .setTripId("trip-42")
                        .setRouteId("route-7"))
                    .addStopTimeUpdate(TripUpdate.StopTimeUpdate.newBuilder()
                        .setStopSequence(5)
                        .setStopId("stop-99")
                        .setArrival(TripUpdate.StopTimeEvent.newBuilder()
                            .setDelay(120))   // 2 minutes late
                        .setDeparture(TripUpdate.StopTimeEvent.newBuilder()
                            .setDelay(120)))))

            // Entity 3: service alert
            .addEntity(FeedEntity.newBuilder()
                .setId("alert-1")
                .setAlert(Alert.newBuilder()
                    .addInformedEntity(EntitySelector.newBuilder()
                        .setRouteId("route-7"))
                    .setHeaderText(TranslatedString.newBuilder()
                        .addTranslation(TranslatedString.Translation.newBuilder()
                            .setLanguage("en")
                            .setText("Route 7 delay")))
                    .setDescriptionText(TranslatedString.newBuilder()
                        .addTranslation(TranslatedString.Translation.newBuilder()
                            .setLanguage("en")
                            .setText("Route 7 is experiencing delays due to traffic.")))
                    .setCause(Alert.Cause.TECHNICAL_PROBLEM)
                    .setEffect(Alert.Effect.SIGNIFICANT_DELAYS)))

            .build();

        System.out.println("Built feed with " + feed.getEntityCount() + " entities.");

        // --- Serialize to bytes (as you would when writing to a file or HTTP response) ---

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        feed.writeTo(out);
        byte[] bytes = out.toByteArray();
        System.out.println("Serialized feed: " + bytes.length + " bytes.");

        // --- Parse back from bytes (as a consumer would after fetching a GTFS-RT URL) ---

        FeedMessage parsed = FeedMessage.parseFrom(new ByteArrayInputStream(bytes));
        System.out.println("Parsed feed version : " + parsed.getHeader().getGtfsRealtimeVersion());
        System.out.println("Parsed entity count : " + parsed.getEntityCount());

        for (FeedEntity entity : parsed.getEntityList()) {
            if (entity.hasVehicle()) {
                VehiclePosition vp = entity.getVehicle();
                System.out.printf("  Vehicle  id=%-12s lat=%.4f lon=%.4f speed=%.1f m/s%n",
                    vp.getVehicle().getId(),
                    vp.getPosition().getLatitude(),
                    vp.getPosition().getLongitude(),
                    vp.getPosition().getSpeed());
            } else if (entity.hasTripUpdate()) {
                TripUpdate tu = entity.getTripUpdate();
                System.out.printf("  TripUpd  trip=%-10s stops=%d delay=%ds%n",
                    tu.getTrip().getTripId(),
                    tu.getStopTimeUpdateCount(),
                    tu.getStopTimeUpdate(0).getArrival().getDelay());
            } else if (entity.hasAlert()) {
                Alert a = entity.getAlert();
                System.out.printf("  Alert    cause=%-20s \"%s\"%n",
                    a.getCause(),
                    a.getHeaderText().getTranslation(0).getText());
            }
        }
    }
}
