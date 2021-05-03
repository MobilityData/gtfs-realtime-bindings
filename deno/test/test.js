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
import { GtfsRealtimeApi } from "https://taisukef.github.io/gtfs-realtime-bindings/deno/gtfs-realtime.js";

const data = await Deno.readFile("test/vehicle_position.pb");
const feed = GtfsRealtimeApi.transit_realtime.FeedMessage.decode(data);
console.log(feed);
console.log(feed.entity[0].vehicle);

// todo

/*
feed.entity.should.have.length(1);
feed.entity[0].should.have.property('id', '1');
feed.entity[0].should.have.property('vehicle');
var vehicle = feed.entity[0].vehicle;
vehicle.should.have.properties('trip', 'vehicle', 'position');
//assert.equal(vehicle.trip.tripId, "t0")
*/
