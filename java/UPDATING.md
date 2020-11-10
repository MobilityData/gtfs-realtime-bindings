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

To sign the application (required for publishing to Maven Central) we use Bintray's automated signing using their internal key as discussed [here](https://www.jfrog.com/confluence/display/BT/Managing+Uploaded+Content#ManagingUploadedContent-SigningwiththeBintrayKey). So, no certificate setup for signing is required.

#### Every release

1. After you've committed any changes, run `mvn release:prepare -Dresume=false`.  This will automatically bump the SNAPSHOT version number to the release version, commit this change, and then bump the version number again to the new SNAPSHOT version for the next development cycle and commit this change too. After running `mvn release:prepare` you'll be prompted to enter these version numbers as well as the tag release name - use the following values, where X is the new version to be released (e.g., if current version is `0.0.1-SNAPSHOT`, release would be `0.0.1`):
   	
   * `0.0.[X]`
   * `gtfs-realtime-bindings-java-0.0.[X]` (Note the addition of `-java`)
   * `0.0.[X+1]-SNAPSHOT`
   
1. Checkout the release commit:

   * `git checkout gtfs-realtime-bindings-java-0.0.[X]`

1. Deploy the artifacts to JCenter (which will automatically sync with Maven Central):

    ```
    mvn deploy
    ```
    
1. Check out the master branch again to continue development:
   
   `git checkout master` 