# Java GTFS-realtime Language Bindings

![Maven Central Version](https://img.shields.io/maven-central/v/io.mobilitydata.transit/gtfs-realtime-bindings.svg)

Provides Java classes generated from the [GTFS-realtime](https://github.com/google/transit/tree/master/gtfs-realtime)
Protocol Buffer specification.  These classes will allow you to parse a binary Protocol Buffer
GTFS-realtime data feed into Java objects.

## Add the Dependency 

To use the `gtfs-realtime-bindings` classes in your own project, you need to add
an appropriate dependency.  We publish our module to the [Maven Central Repository](http://search.maven.org/)
so that it can be easily referenced by Java build tools like Maven, Ivy, and Gradle.

For [Maven](http://maven.apache.org/), add the following to your `pom.xml`
dependencies section:

```xml
<dependency>
  <groupId>io.mobilitydata.transit</groupId>
  <artifactId>gtfs-realtime-bindings</artifactId>
  <version>0.0.6</version>
</dependency>
```

For [Gradle](https://www.gradle.org/), add the following to your `build.gradle`
dependecies section:

```
compile group: 'io.mobilitydata.transit', name: 'gtfs-realtime-bindings', version: '0.0.6'
```

Make sure the Maven central repository is referenced by your project.

## Example Code

The following code snippet demonstrates downloading a GTFS-realtime data feed
from a particular URL, parsing it as a FeedMessage (the root type of the
GTFS-realtime schema), and iterating over the results.

```java
import java.net.URL;

import com.google.transit.realtime.GtfsRealtime.FeedEntity;
import com.google.transit.realtime.GtfsRealtime.FeedMessage;

public class GtfsRealtimeExample {
  public static void main(String[] args) throws Exception {
    URL url = new URL("URL OF YOUR GTFS-REALTIME SOURCE GOES HERE");
    FeedMessage feed = FeedMessage.parseFrom(url.openStream());
    for (FeedEntity entity : feed.getEntityList()) {
      if (entity.hasTripUpdate()) {
        System.out.println(entity.getTripUpdate());
      }
    }
  }
}
```

For more details on the naming conventions for the Java classes generated from
the [gtfs-realtime.proto](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto),
check out the [Java Generated Code](https://developers.google.com/protocol-buffers/docs/reference/java-generated)
section of the Protocol Buffers developer site.
