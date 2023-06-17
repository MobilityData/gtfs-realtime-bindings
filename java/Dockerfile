FROM maven:3.9.2-eclipse-temurin-17

WORKDIR /lib

# Install protoc (cf. http://google.github.io/proto-lens/installing-protoc.html)
ENV PROTOC_ZIP=protoc-21.12-linux-x86_64.zip
RUN apt-get update && apt-get install -y unzip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v21.12/$PROTOC_ZIP \
    && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
    && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
    && rm -f $PROTOC_ZIP

RUN mkdir -p src/main/java
RUN mkdir -p src/test/java/com/google/transit/realtime
RUN mkdir -p src/test/resources/com/google/transit/realtime
COPY gtfs-realtime.proto /lib/gtfs-realtime.proto
COPY java/pom.xml /lib/pom.xml
COPY java/src/test/java/com/google/transit/realtime/GtfsRealtimeTest.java src/test/java/com/google/transit/realtime/GtfsRealtimeTest.java
COPY java/src/test/resources/com/google/transit/realtime/* src/test/resources/com/google/transit/realtime

CMD protoc --java_out=src/main/java gtfs-realtime.proto && mvn verify
