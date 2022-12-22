#!/bin/bash -e

# check to see if there is a leftover docker image with this tag to clean up
docker rmi -f gtfs-python
# build and tag the docker image
docker build -t gtfs-python -f python/Dockerfile .
# run the docker image as an unnamed, ephemeral container to ensure protoc and unit test execution succeeds
# specify -it so that we can ctrl-c kill if something gets stuck
docker run -it gtfs-python
# run the docker image as a named container running as a daemon (-d)
docker run --name gtfs-python-container -it -d gtfs-python
# copy the file from the named container running as a daemon onto the host machine
docker cp gtfs-python-container:/lib/google/transit/gtfs_realtime_pb2.py python/google/transit/gtfs_realtime_pb2.py
# delete the named container
docker rm -f gtfs-python-container
