FROM golang:1.19.3

WORKDIR /lib
COPY golang/gtfs/go.mod /lib/go.mod
COPY golang/gtfs/go.sum /lib/go.sum
COPY gtfs-realtime.proto /gtfs-realtime.proto
RUN mkdir gtfs
COPY golang/gtfs/gtfs_test.go /lib/gtfs/gtfs_test.go
COPY golang/gtfs/vehicle_position.pb /lib/gtfs/vehicle_position.pb

# Install protoc (cf. http://google.github.io/proto-lens/installing-protoc.html)
ENV PROTOC_ZIP=protoc-21.9-linux-x86_64.zip
RUN apt-get update && apt-get install -y unzip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v21.9/$PROTOC_ZIP \
    && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
    && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
    && rm -f $PROTOC_ZIP

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.1
CMD protoc --go_out=./ --go_opt=Mgtfs-realtime.proto=./gtfs --proto_path=.. gtfs-realtime.proto && go test ./...
