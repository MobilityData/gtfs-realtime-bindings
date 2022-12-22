FROM python:3.11.1

WORKDIR /lib

# Install protoc (cf. http://google.github.io/proto-lens/installing-protoc.html)
ENV PROTOC_ZIP=protoc-21.12-linux-x86_64.zip
RUN apt-get update && apt-get install -y unzip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v21.12/$PROTOC_ZIP \
    && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
    && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
    && rm -f $PROTOC_ZIP

RUN pip install protobuf==4.21.12
RUN pip install nose2==0.12.0

COPY gtfs-realtime.proto /gtfs-realtime.proto
RUN mkdir -p google/transit
RUN mkdir tests
COPY python/tests/test_gtfs_realtime_pb2.py /lib/tests/test_gtfs_realtime_pb2.py
COPY python/tests/vehicle_position.pb /lib/tests/vehicle_position.pb
COPY python/google/__init__.py /lib/google/__init__.py
COPY python/google/transit/__init__.py /lib/google/transit/__init__.py

CMD protoc --python_out=google/transit --proto_path=.. gtfs-realtime.proto && nose2
