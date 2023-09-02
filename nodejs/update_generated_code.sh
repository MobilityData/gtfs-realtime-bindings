#!/bin/bash -e -x

# store the directory information to allow the script to be executed from anywhere
NODEJS_DIR=$(cd `dirname $0` && pwd)
PROJECT_ROOT_DIR=$(dirname "$NODEJS_DIR")

# check to see if there is a leftover docker image with this tag to clean up
docker rmi -f gtfs-nodejs
# build and tag the docker image
docker build -t gtfs-nodejs -f $NODEJS_DIR/Dockerfile $PROJECT_ROOT_DIR
# run the docker image as an unnamed, ephemeral container to ensure protoc and unit test execution succeeds
# specify -it so that we can ctrl-c kill if something gets stuck
docker run -it gtfs-nodejs
# run the docker image as a named container running as a daemon (-d) that runs forever until killed
docker run --name gtfs-nodejs-container -d -it gtfs-nodejs tail -f > /dev/null
# execute the code gen in the foreground so there is no race condition
docker exec gtfs-nodejs-container npm run codeGen
# copy the files from the named container running as a daemon onto the host machine
docker cp gtfs-nodejs-container:/lib/gtfs-realtime.js $NODEJS_DIR/gtfs-realtime.js
docker cp gtfs-nodejs-container:/lib/gtfs-realtime.d.ts $NODEJS_DIR/gtfs-realtime.d.ts
# delete the named container
docker rm -f gtfs-nodejs-container
