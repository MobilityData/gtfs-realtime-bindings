# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Docker](https://docs.docker.com/get-docker/)

#### Every time `gtfs-realtime.proto` changes

1. Run the following from the project root folder:

    ```
    # docker rmi to clean up past image tags
    # docker build to build the docker image
    # docker run to copy a (slightly processed) version of the generated code to the host machine
    #   -it to make sure docker run can be killed with ctrl-c
    #   -t uses TTY, which causes linux to include carriage returns, which are stripped using tr
    docker rmi gtfs-golang; docker build -t gtfs-golang -f golang/Dockerfile . && docker run -it --rm gtfs-golang cat /lib/gtfs/gtfs-realtime.pb.go | tr -d '\r' > golang/gtfs/gtfs-realtime.pb.go
    ```

1. Add the license header back to the generated source file.

## Publishing a new release

Ask someone with write permission for the repo to follow the [instructions for publishing Go modules](https://go.dev/blog/publishing-go-modules).