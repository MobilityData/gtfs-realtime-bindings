# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
protoc --python_out=google/transit --proto_path=.. ../gtfs-realtime.proto
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
