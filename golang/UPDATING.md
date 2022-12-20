# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Docker](https://docs.docker.com/get-docker/)

#### Every time `gtfs-realtime.proto` changes

1. Run the following from the project root folder:

    ```
    # docker rmi to clean up past image tags
    # docker build to build the docker image and tag as gtfs-golang
    # docker run as unnamed container to ensure proto compiles and unit tests pass
    #   -it to make sure docker run can be killed with ctrl-c
    # docker run as named daemon container so we can copy the file to the host machine
    # docker cp to copy the file from the daemon container to the host machine
    # docker rm to clean up by deleting the named daemon container
    docker rmi gtfs-golang; docker build -t gtfs-golang -f golang/Dockerfile . && docker run -it gtfs-golang && docker run --name gtfs-golang-container -it -d gtfs-golang && docker cp gtfs-golang-container:/lib/gtfs/gtfs-realtime.pb.go golang/gtfs/gtfs-realtime.pb.go && docker rm -f gtfs-golang-container
    ```

1. Add the license header back to the generated source file.

## Publishing a new release

Ask someone with write permission for the repo to follow the [instructions for publishing Go modules](https://go.dev/blog/publishing-go-modules).