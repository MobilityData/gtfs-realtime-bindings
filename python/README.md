# Python GTFS-realtime Language Bindings

[![PyPI version](https://badge.fury.io/py/gtfs-realtime-bindings.svg)](http://badge.fury.io/py/gtfs-realtime-bindings)

Provides Python classes generated from the
[GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) Protocol
Buffer specification.  These classes will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into Python objects.

## Add the Dependency

To use the `gtfs-realtime-bindings-transit` classes in your own project, you need to
use the git dependency:

```
gtfs-realtime-bindings-transit @ git+ssh://git@github.com/TransitApp/gtfs-realtime-bindings@master#subdirectory=python
```

```
# Using easy_install
easy_install --upgrade gtfs-realtime-bindings

# Using pip
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
    print entity.trip_update
```

For more details on the naming conventions for the Python classes generated
from the
[gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto),
check out the
[Python Generated Code](https://developers.google.com/protocol-buffers/docs/reference/python-generated)
section of the Protocol Buffers developer site.
