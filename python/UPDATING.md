# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
protoc --python_out=google/transit -I=.. ../gtfs-spec/gtfs-realtime/proto/gtfs-realtime.proto ../transit-extensions.proto ../agency-extensions/tfnsw-vehicle.proto ../agency-extensions/mtas-realtime.proto
```

Switch to relative imports in `transit_extensions_pb2.py` (add the leading period):

```python
from .gtfs_spec.gtfs_realtime.proto import gtfs_realtime_pb2 as gtfs__spec_dot_gtfs__realtime_dot_proto_dot_gtfs__realtime__pb2
from .agency_extensions import tfnsw_vehicle_pb2 as agency__extensions_dot_tfnsw__vehicle__pb2
from .agency_extensions import mtas_realtime_pb2 as agency__extensions_dot_mtas__realtime__pb2
```


Add the license header back to the generated source file.

Test the generated code:

```
nosetests
````

Bump the version number in `setup.py`.

Build and deploy the package to PyPI.

```
python setup.py register sdist bdist_egg upload
```
