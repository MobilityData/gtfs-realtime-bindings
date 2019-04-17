# How-To Update Bindings When gtfs-realtime.proto Changes

## One-Time Setup

You will need a GPG key to sign the release artificats.  Generate a key and
publish it.

```
gpg --gen-key
gpg --keyserver hkp://pgp.mit.edu --send-keys HEX_KEY_ID_GOES_HERE
```

Add a profile in your `~/.m2/settings.xml` file with the key id and password.
I use `mobilitydata-release` in this example:

```
<profile>
  <id>mobilitydata-release</id>
  <properties>
    <gpg.keyname>HEX_KEY_ID_GOES_HERE</gpg.keyname>
    <gpg.passphrase>**************</gpg.passphrase>
  </properties>
</profile>
```

We will activate this profile when performing the release so that Maven knows
which key and password to use when signing the release.

## Updates

Regenerate the language binding source from gtfs-realtime.proto.

```
protoc --java_out=src/main/java --proto_path=.. ../gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
mvn verify
````

Prepare the release:

```
mvn -P mobilitydata-release release:clean release:prepare
```

Bump version numbers as appropriate.  When tagging the release, use a tag of
the form `gtfs-realtime-bindings-java-0.0.1` (Note the addition of `-java`).

Now perform the release:

```
mvn -P mobilitydata-release release:perform
```

Push the release the central Maven repo:

* Login at https://oss.sonatype.org/
* Go to 'Staging Repositories'
* Select the `iomobilitydatatransit` repo.
* Close the repo.
* Twiddle your thumbs.
* Select the repo again.
* Release the repo.
* Jars will be staged to central Maven repo after a couple of hours.
