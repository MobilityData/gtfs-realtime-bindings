# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and setup Protocol Buffer release from https://github.com/protocolbuffers/protobuf/releases (if you haven't already done this for another language).  As of February 2019 we're using v3.7 release, which is compatible with proto2 .proto files.
1. Download [Go](https://golang.org/dl/)

#### Every time `gtfs-realtime.proto` changes

Regenerate the language binding source from gtfs-realtime.proto by running the following from the `golang` directory:

```
go get -u github.com/golang/protobuf/protoc-gen-go
protoc --go_out=./gtfs/ --proto_path=.. ../gtfs-realtime.proto
```

Add the license header back to the generated source file.

Change the line:
```golang
package transit_realtime
```

to:

```golang
package gtfs
```

Test the generated code from the `golang/gtfs` directory:

```
go test
````

## Publishing a new release

Not needed - Users can pull dependency directly from GitHub after the above process is completed. See [Go README](/golang/README.md) for details.