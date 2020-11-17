#!/usr/bin/python
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


import os.path
from google.transit import gtfs_realtime_pb2
import unittest


class GtfsRealtimeTest(unittest.TestCase):

    def testParseFromString(self):
        feed = gtfs_realtime_pb2.FeedMessage()
        data_dir = os.path.dirname(os.path.abspath(__file__))
        with open(os.path.join(data_dir, 'vehicle_position.pb'), 'r') as f:
            feed.ParseFromString(f.read())
        self.assertEquals(1, len(feed.entity))
        entity = feed.entity[0]
        self.assertEquals('1', entity.id)
        self.assert_(entity.HasField('vehicle'))
