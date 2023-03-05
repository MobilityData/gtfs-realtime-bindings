FROM eclipse-temurin:17.0.6_10-jdk

WORKDIR /lib

# Install protoc (cf. http://google.github.io/proto-lens/installing-protoc.html)
ENV PROTOC_ZIP=protoc-21.12-linux-x86_64.zip
RUN apt-get update && apt-get install -y unzip
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v21.12/$PROTOC_ZIP \
    && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
    && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
    && rm -f $PROTOC_ZIP

# Install maven
ENV MAVEN_VERSION=3.9.0
RUN curl -OL https://dlcdn.apache.org/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.zip \
    && unzip -o apache-maven-$MAVEN_VERSION-bin.zip -d /usr/local \
    && rm -f apache-maven-$MAVEN_VERSION-bin.zip
ENV PATH=$PATH:/usr/local/apache-maven-$MAVEN_VERSION/bin

RUN mkdir -p src/main/java
RUN mkdir -p src/test/java/com/google/transit/realtime
RUN mkdir -p src/test/resources/com/google/transit/realtime
COPY gtfs-realtime.proto /lib/gtfs-realtime.proto
COPY java/pom.xml /lib/pom.xml
COPY java/src/test/java/com/google/transit/realtime/GtfsRealtimeTest.java src/test/java/com/google/transit/realtime/GtfsRealtimeTest.java
COPY java/src/test/resources/com/google/transit/realtime/* src/test/resources/com/google/transit/realtime

CMD protoc --java_out=src/main/java gtfs-realtime.proto && mvn verify
