<?php
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

use transit_realtime\FeedMessage;

class GtfsRealtimeTest extends PHPUnit_Framework_TestCase
{
  public function testParse()
  {
    $data = file_get_contents(dirname(__FILE__) . "/vehicle_position.pb");
    $feed = new FeedMessage();
    $feed->parse($data);
    $this->assertEquals(1, count($feed->getEntityList()));
    $entity = $feed->getEntity(0);
    $this->assertEquals("1", $entity->getId());
    $this->assertTrue($entity->hasVehicle());
  }
}
