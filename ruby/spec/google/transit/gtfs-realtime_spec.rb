# Copyright 2015 Google Inc.
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

require 'protobuf'
require 'google/transit/gtfs-realtime.pb'

describe ::Transit_realtime::FeedMessage, "#decode" do
  it "decodes serialized proto data without error" do
    feed = Transit_realtime::FeedMessage.new
    File.open("spec/google/transit/vehicle_position.pb", "r") do |file|
      feed.decode_from(file)
    end

    expect(feed.entity.length).to eq(1)
    entity = feed.entity[0]
    expect(entity.id).to eq("1")
    expect(entity.field?(:vehicle)).to be true
  end
end
