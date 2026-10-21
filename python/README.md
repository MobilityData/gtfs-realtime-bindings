# Python GTFS-realtime Language Bindings

[![PyPI version](https://badge.fury.io/py/gtfs-realtime-bindings.svg)](http://badge.fury.io/py/gtfs-realtime-bindings)

Provides Python classes generated from the
[GTFS-realtime](https://github.com/google/transit/tree/master/gtfs-realtime) Protocol
Buffer specification.  These classes will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into Python objects.

## Breaking Changes

### Version 3.0.0

Version 3.0.0 requires **Python 3.10 or later** and **protobuf 7.34.0 or later**. If you are using an older version of Python or need an older protobuf runtime, please continue using version `2.x`.

## Add the Dependency

To use the `gtfs-realtime-bindings` classes in your own project, you need to
first install the module from the
[PyPI repository](https://pypi.python.org/pypi/gtfs-realtime-bindings).

```
pip install --upgrade gtfs-realtime-bindings
```

## Example Code

The following code snippet demonstrates downloading a GTFS-realtime data feed
from a particular URL, parsing it as a FeedMessage (the root type of the
GTFS-realtime schema), and iterating over the results.

```python
from google.transit import gtfs_realtime_pb2
import requests

feed = gtfs_realtime_pb2.FeedMessage()
response = requests.get('URL OF YOUR GTFS-REALTIME SOURCE GOES HERE')
feed.ParseFromString(response.content)
for entity in feed.entity:
    if entity.HasField('trip_update'):
        print(entity.trip_update)
```

For more details on the naming conventions for the Python classes generated
from the
[gtfs-realtime.proto](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto),
check out the
[Python Generated Code](https://developers.google.com/protocol-buffers/docs/reference/python-generated)
section of the Protocol Buffers developer site.

## A Common Gotcha: Optional Fields Agencies Leave Empty

The spec marks several `TripDescriptor` fields optional, and in practice not
every agency populates all of them. For example, BART's own TripUpdates feed
leaves `trip.route_id` as an empty string on every entity:

```python
feed = gtfs_realtime_pb2.FeedMessage()
feed.ParseFromString(response.content)
for entity in feed.entity:
    tu = entity.trip_update
    print(repr(tu.trip.route_id))  # '' for every entity in BART's feed
```

If your code needs the route for a realtime trip update, don't assume this
field is populated -- check `HasField`/truthiness first, and fall back to
joining `trip.trip_id` against the agency's static `trips.txt` (which always
has `route_id`) when the realtime field comes back empty:

```python
route_id = tu.trip.route_id or static_trip_id_to_route.get(tu.trip.trip_id)
```

This isn't a bug in this library or in BART's feed -- both are spec-compliant,
since the field is optional. It's just easy to miss until a feed you didn't
expect to omit it does.
