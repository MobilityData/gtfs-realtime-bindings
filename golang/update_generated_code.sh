#!/bin/bash -e -x

# store the directory information to allow the script to be executed from anywhere
GOLANG_DIR=$(cd `dirname $0` && pwd)
PROJECT_ROOT_DIR=$(dirname "$GOLANG_DIR")

# check to see if there is a leftover docker image with this tag to clean up
docker rmi -f gtfs-golang
# build and tag the docker image
docker build -t gtfs-golang -f $GOLANG_DIR/Dockerfile $PROJECT_ROOT_DIR
# run the docker image as an unnamed, ephemeral container to ensure protoc and unit test execution succeeds
# specify -it so that we can ctrl-c kill if something gets stuck
docker run -it gtfs-golang
# run the docker image as a named container running as a daemon (-d) that runs forever until killed
docker run --name gtfs-golang-container -it -d gtfs-golang tail -f > /dev/null
# execute the code gen in the foreground so there is no race condition
docker exec gtfs-golang-container protoc --go_out=./ --go_opt=Mgtfs-realtime.proto=./gtfs --proto_path=.. gtfs-realtime.proto
# copy the file from the named container running as a daemon onto the host machine
docker cp gtfs-golang-container:/lib/gtfs/gtfs-realtime.pb.go $GOLANG_DIR/gtfs/gtfs-realtime.pb.go
# delete the named container
docker rm -f gtfs-golang-container
