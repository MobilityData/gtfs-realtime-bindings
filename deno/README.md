# JavaScript GTFS-realtime Language Bindings

Provides JavaScript classes generated from the
[GTFS-realtime](https://github.com/google/transit/tree/master/gtfs-realtime) Protocol
Buffer specification.  These classes will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into JavaScript objects.

These bindings are designed to be used in the [Deno](https://deno.land/)
environment, but with some effort, they can probably be used in other
JavaScript environments as well.

We use the [protbuf-es.js](https://github.com/taisukef/protobuf-es.js/) library for
JavaScript Protocol Buffer support.

## Example Code

The following Node.js code snippet demonstrates downloading a GTFS-realtime
data feed from a particular URL, parsing it as a FeedMessage (the root type of
the GTFS-realtime schema), and iterating over the results.

```javascript
import { GtfsRealtimeApi } from "https://taisukef.github.io/gtfs-realtime-bindings/deno/gtfs-realtime.js";

const data = await Deno.readFile("test/vehicle_position.pb");
const feed = GtfsRealtimeApi.transit_realtime.FeedMessage.decode(data);
console.log(feed);
console.log(feed.entity[0].vehicle);
```

For more details on the naming conventions for the JavaScript classes generated
from the
[gtfs-realtime.proto](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto),
check out the [ProtoBuf.js project](https://github.com/dcodeIO/ProtoBuf.js/wiki)
which we use to handle our Protocol Buffer serialization.
