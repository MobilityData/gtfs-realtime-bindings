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

Bump version numbers as appropriate in `pom.xml`

## Publishing a new release

#### One-Time Setup

We're hosting releases on JCenter via [Bintray](https://bintray.com/).

These are the steps for publishing the `gtfs-realtime-bindings` library on `jcenter` repository.

###### 1 - Create an account on [Bintray](https://bintray.com/).
###### 2 - Setup your pom.xml

We need to specify the URL from which to distribute your project. 
```
  <distributionManagement>
    <repository>
      <id>jCenter</id>
      <url>https://api.bintray.com/maven/mobilitydata/mobilitydata-mvn-repo/gtfs-realtime-bindings/;publish=1</url>
    </repository>
  </distributionManagement>
```

###### 3 - Setup your setting.xml
We need to provide Bintray username and API Key to the Maven `settings.xml` file.  This may be under your Maven installation directory (e.g., `C:\Program Files\Apache Software Foundation\apache-maven-3.2.5\conf`).

```
<server>
  <id>jCenter</id>
  <username>yourjcenteraccount</username>
  <password>***youraccount-secret-api-key***</password>
</server>
```

To sign the application (required for publishing to Maven Central) we use Bintray's automated signing using their internal key as discussed [here](https://www.jfrog.com/confluence/display/BT/Managing+Uploaded+Content#ManagingUploadedContent-SigningwiththeBintrayKey)

###### 4 - Run maven deploy

Finally, we can run ```mvn deploy``` to complete publishing.

#### Every release

1. Bump the version in `pom.xml`

1. Deploy it:

    ```
    mvn deploy
    ```

1. When tagging the release, use a tag of the form `gtfs-realtime-bindings-java-0.0.1` (Note the addition of `-java`).