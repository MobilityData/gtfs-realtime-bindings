# Ruby GTFS-realtime Language Bindings

Provides Ruby classes generated from the
[GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) Protocol
Buffer specification.  These classes will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into Ruby objects.

## Add the Dependency

To use the `gtfs-realtime-bindings` classes in your own project, you need to
first install the Ruby gem:

```
gem install gtfs-realtime-bindings
```

## Example Code

The following code snippet demonstrates downloading a GTFS-realtime data feed
from a particular URL, parsing it as a FeedMessage (the root type of the
GTFS-realtime schema), and iterating over the results.

```ruby
require 'protobuf'
require 'google/transit/gtfs-realtime.pb'
require 'net/http'
require 'uri'

data = Net::HTTP.get(URI.parse("URL OF YOUR GTFS-REALTIME SOURCE GOES HERE"))
feed = Transit_realtime::FeedMessage.decode(data)
for entity in feed.entity do
  if entity.field?(:trip_update)
    p entity.trip_update
  end
end
```

For more details on the naming conventions for the Ruby classes generated from
the [gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto),
check out the [the gtfs-realtime.pb.rb source file](TODO).
