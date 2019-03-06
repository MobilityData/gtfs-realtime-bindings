# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Install [Python](https://www.python.org/downloads/). Release 3.7.2 was most recently used.
1. Install [nose](https://nose.readthedocs.io/en/latest/) for unit tests by running `easy_install nose`
1. Install the Python protobuf library via `easy_install protobuf`

#### Every time `gtfs-realtime.proto` changes

Regenerate the language binding source from gtfs-realtime.proto by running the following from the `python` folder:

```
protoc --python_out=google/transit --proto_path=.. ../gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
nosetests
````

Bump the version number in `setup.py`.

## Publishing a new release

#### One-Time Setup

?

#### Every release

Build and deploy the package to PyPI.

```
python setup.py register sdist bdist_egg upload
```
