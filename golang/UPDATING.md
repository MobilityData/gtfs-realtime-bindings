# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Docker](https://docs.docker.com/get-docker/)

#### Every time `gtfs-realtime.proto` changes

1. Run the update script:

    ```
    ./update_generated_code.sh
    ```

1. Add the license header back to the generated source file.

## Publishing a new release

Ask someone with write permission for the repo to follow the [instructions for publishing Go modules](https://go.dev/blog/publishing-go-modules).