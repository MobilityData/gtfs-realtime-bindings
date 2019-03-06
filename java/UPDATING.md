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

You will need a GPG key to sign the release artifacts.  Generate a key and
publish it.

```
gpg --gen-key
gpg --keyserver hkp://pgp.mit.edu --send-keys HEX_KEY_ID_GOES_HERE
```

Add a profile in your `~/.m2/settings.xml` file with the key id and password.
I use `google-release` in this example:

```
<profile>
  <id>google-release</id>
  <properties>
    <gpg.keyname>HEX_KEY_ID_GOES_HERE</gpg.keyname>
    <gpg.passphrase>**************</gpg.passphrase>
  </properties>
</profile>
```

We will activate this profile when performing the release so that Maven knows
which key and password to use when signing the release.

#### Every release

Prepare the release:

```
mvn -P google-release release:clean release:prepare
```

When tagging the release, use a tag of
the form `gtfs-realtime-bindings-java-0.0.1` (Note the addition of `-java`).

Now perform the release:

```
mvn -P google-release release:perform
```

Push the release the central Maven repo:

* Login at https://oss.sonatype.org/
* Go to 'Staging Repositories'
* Select the `comgoogletransit` repo.
* Close the repo.
* Twiddle your thumbs.
* Select the repo again.
* Release the repo.
* Jars will be staged to central Maven repo after a couple of hours.
