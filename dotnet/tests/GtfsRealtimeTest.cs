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

using System.Net;
using ProtoBuf;
using transit_realtime;
using NUnit.Framework;
using System.IO;

class GtfsRealtimeTest
{
    static void Main()
    {
		var path = Path.Combine(Directory.GetCurrentDirectory(), "vehicle_position.pb");
		var req=WebRequest.Create(path);
		FeedMessage feed = Serializer.Deserialize<FeedMessage>(req.GetResponse().GetResponseStream());
		int c = feed.entity.Count;
		Assert.AreEqual(c,1);
		var entity=feed.entity[0];	
		Assert.AreEqual(entity.id,"1");
		Assert.IsTrue(entity.vehicle != null);
    }			
}