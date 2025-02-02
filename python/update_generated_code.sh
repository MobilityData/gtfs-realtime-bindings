#!/bin/bash -e -x

# store the directory information to allow the script to be executed from anywhere
PYTHON_DIR=$(cd `dirname $0` && pwd)
PROJECT_ROOT_DIR=$(dirname "$PYTHON_DIR")

# check to see if there is a leftover docker image with this tag to clean up
docker rmi -f gtfs-python
# build and tag the docker image
docker build -t gtfs-python -f $PYTHON_DIR/Dockerfile $PROJECT_ROOT_DIR
# run the docker image as an unnamed, ephemeral container to ensure protoc and unit test execution succeeds
# specify -it so that we can ctrl-c kill if something gets stuck
docker run -it gtfs-python
# run the docker image as a named container running as a daemon (-d) that runs forever until killed
docker run --name gtfs-python-container -it -d gtfs-python tail -f > /dev/null
# execute the code gen in the foreground so there is no race condition
docker exec gtfs-python-container protoc --python_out=google/transit --pyi_out=google/transit --proto_path=.. gtfs-realtime.proto
# copy the generated files from the named container running as a daemon onto the host machine
docker cp gtfs-python-container:/lib/google/transit/gtfs_realtime_pb2.py $PYTHON_DIR/google/transit/gtfs_realtime_pb2.py
docker cp gtfs-python-container:/lib/google/transit/gtfs_realtime_pb2.pyi $PYTHON_DIR/google/transit/gtfs_realtime_pb2.pyi
# create py.typed file in the host machine's package directory
touch $PYTHON_DIR/google/transit/py.typed
# delete the named container
docker rm -f gtfs-python-container
