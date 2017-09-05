# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
go get -u github.com/golang/protobuf/protoc-gen-go
protoc --go_out=./golang/gtfs/ ./gtfs-realtime.proto
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

Test the generated code:

```
go test
````
