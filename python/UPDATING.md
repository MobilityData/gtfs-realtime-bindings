# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Docker](https://docs.docker.com/get-docker/)

#### Every time `gtfs-realtime.proto` changes

1. Run the following from the project root folder:

    ```
    docker build -t gtfs-python -f python/Dockerfile .
    # -it to make sure docker run can be killed with ctrl-c
    # -t uses TTY, which causes linux to include carriage returns, which are stripped using tr
    docker run -it --rm gtfs-python cat /lib/google/transit/gtfs_realtime_pb2.py | tr -d '\r' > python/google/transit/gtfs_realtime_pb2.py
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
