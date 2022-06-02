# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and setup Protocol Buffer release from https://github.com/protocolbuffers/protobuf/releases (if you haven't already done this for another language).  As of February 2019 we're using v3.7 release, which is compatible with proto2 .proto files.
1. Download [Java JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
1. Download and install [Maven](https://maven.apache.org/download.cgi)

#### Every time `gtfs-realtime.proto` changes

Regenerate the language binding source from gtfs-realtime.proto.

From the project `/java` folder, run:

```
protoc --java_out=src/main/java --proto_path=.. ../gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
mvn verify
````

## Publishing a new release.

#### One-Time Setup

We're hosting releases on the [Maven Central Repository](http://search.maven.org/).

Note that we are using GitHub actions to publish new releases. These are the [steps](https://dzone.com/articles/how-to-publish-artifacts-to-maven-central) that were followed for publishing the `gtfs-realtime-bindings` library on `ossrh` repository using GitHub actions.

To sign the application (required for publishing to Maven Central) we use a GPG key as described [here](https://dzone.com/articles/how-to-publish-artifacts-to-maven-central#:~:text=%3C/servers%3E-,GPG%20Setup,-You%E2%80%99ll%20have%20to).

#### Every release

1. Create a new branch from the `master` branch and use it to push a commit to change to release version (i.e., without the `-SNAPSHOT`).
2. Open a PR with this release version and merge it in the `master` branch.
3. Create a tag with the name and release version `gtfs-realtime-bindings-java-[X].[Y].[Z]` (Note the addition of `-java`)
4. Create a new branch from the `master` branch and use it to push a commit to change to the next snapshot version (e.g., from `0.0.1` to `0.0.2-SNAPSHOT`).
5. Open a PR with this snapshot version and merge it in the `master` branch.
