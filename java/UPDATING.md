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

1. Create a new branch from the master branch where you will commit your changes.
   `git checkout -b your/new/branch`

2. After you've committed any changes, run `mvn release:prepare -Dresume=false`.  This will automatically bump the SNAPSHOT version number to the release version, commit this change, and then bump the version number again to the new SNAPSHOT version for the next development cycle and commit this change too. After running `mvn release:prepare` you'll be prompted to enter these version numbers as well as the tag release name - use the following values, where X is the new version to be released (e.g., if current version is `0.0.1-SNAPSHOT`, release would be `0.0.1`):
   	
   * `0.0.[X]`
   * `gtfs-realtime-bindings-java-0.0.[X]` (Note the addition of `-java`)
   * `0.0.[X+1]-SNAPSHOT`
   
3. Open a pull request using your branch and request a review. The release will be automatically published when your pull request is merged in the master branch.
    
4. Check out the master branch and pull the changes to continue development:
   
   ```
   git checkout master
   git pull
   ``` 