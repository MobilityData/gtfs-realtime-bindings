FROM python:3.11.1

WORKDIR /lib
COPY python/setup.py /lib/setup.py
COPY gtfs-realtime.proto /gtfs-realtime.proto
RUN mkdir -p google/transit

# Install protoc (cf. http://google.github.io/proto-lens/installing-protoc.html)
ENV PROTOC_ZIP=protoc-21.12-linux-x86_64.zip
RUN apt-get update && apt-get install -y unzip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v21.12/$PROTOC_ZIP \
    && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
    && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
    && rm -f $PROTOC_ZIP

RUN pip install -I protobuf==4.21.12
RUN protoc --python_out=google/transit --proto_path=.. gtfs-realtime.proto
# RUN protoc --go_out=./ --go_opt=Mgtfs-realtime.proto=./gtfs --proto_path=.. gtfs-realtime.proto
