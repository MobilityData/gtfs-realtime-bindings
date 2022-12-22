#!/bin/bash -e

# check to see if there is a leftover docker image with this tag to clean up
docker rmi -f gtfs-golang
# build and tag the docker image
docker build -t gtfs-golang -f golang/Dockerfile .
# run the docker image as an unnamed, ephemeral container to ensure protoc and unit test execution succeeds
# specify -it so that we can ctrl-c kill if something gets stuck
docker run -it gtfs-golang
# run the docker image as a named container running as a daemon (-d)
docker run --name gtfs-golang-container -it -d gtfs-golang
# copy the file from the named container running as a daemon onto the host machine
docker cp gtfs-golang-container:/lib/gtfs/gtfs-realtime.pb.go golang/gtfs/gtfs-realtime.pb.go
# delete the named container
docker rm -f gtfs-golang-container