#!/bin/bash -e -x

# store the directory information to allow the script to be executed from anywhere
JAVA_DIR=$(cd `dirname $0` && pwd)
PROJECT_ROOT_DIR=$(dirname "$JAVA_DIR")

# check to see if there is a leftover docker image with this tag to clean up
docker rmi -f gtfs-java
# build and tag the docker image
docker build -t gtfs-java -f $JAVA_DIR/Dockerfile $PROJECT_ROOT_DIR
# run the docker image as an unnamed, ephemeral container to ensure protoc and unit test execution succeeds
# specify -it so that we can ctrl-c kill if something gets stuck
docker run -it gtfs-java
# run the docker image as a named container running as a daemon (-d) that runs forever until killed
docker run --name gtfs-java-container -it -d gtfs-java tail -f > /dev/null
# execute the code gen in the foreground so there is no race condition
docker exec gtfs-java-container protoc --java_out=src/main/java gtfs-realtime.proto
# copy the file from the named container running as a daemon onto the host machine
docker cp gtfs-java-container:/lib/src/main/java/com/google/transit/realtime/GtfsRealtime.java $JAVA_DIR/src/main/java/com/google/transit/realtime/GtfsRealtime.java
# delete the named container
docker rm -f gtfs-java-container
