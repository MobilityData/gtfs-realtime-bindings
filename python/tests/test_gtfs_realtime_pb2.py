#!/usr/bin/python

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
