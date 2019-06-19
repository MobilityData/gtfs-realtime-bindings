# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and setup Protocol Buffer release from https://github.com/protocolbuffers/protobuf/releases (if you haven't already done this for another language).  As of February 2019 we're using v3.7 release, which is compatible with proto2 .proto files.
1. Install [Python](https://www.python.org/downloads/). Release 3.7.2 was most recently used.
1. Install [nose](https://nose.readthedocs.io/en/latest/) for unit tests by running `easy_install nose`
1. Install the Python protobuf library via `easy_install protobuf`

#### Every time `gtfs-realtime.proto` changes

1. Regenerate the language binding source from gtfs-realtime.proto by running the following from the `python` folder:

    ```
    protoc --python_out=google/transit --proto_path=.. ../gtfs-realtime.proto
    ```

1. Add the license header back to the generated source file.

1. Test the generated code:

    ```
    nosetests
    ````

1. Bump the version number in `setup.py`.

## Publishing a new release

#### One-Time Setup

1. Create an account on PyPI that has permissions to publish to the [gtfs-realtime-bindings](https://pypi.org/manage/project/gtfs-realtime-bindings/releases/) project.
1. Install twine:
   
   `pip install -U pip setuptools twine`

#### Every release

1. Build and deploy the package to PyPI - you'll be prompted for your login info from the command-line:

  ```
  python setup.py sdist
  twine upload dist/*
  ```
