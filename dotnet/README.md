# .NET GTFS-realtime Language Bindings

Provides .NET classes generated from the
[GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) Protocol
Buffer specification.  These classes will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into C# objects.

## Add the Dependency

To use the `gtfs-realtime-bindings` classes in your own project, you need to
first install the module from the
[NuGet repository](https://www.nuget.org/).

```
Install-Package GtfsRealtimeBindings
```

## Example Code

The following code snippet demonstrates downloading a GTFS-realtime data feed
from a particular URL, parsing it as a FeedMessage (the root type of the
GTFS-realtime schema), and iterating over the results.

```csharp
using System.Net;
using ProtoBuf;
using transit_realtime;

WebRequest req = HttpWebRequest.Create("URL OF YOUR GTFS-REALTIME SOURCE GOES HERE");
FeedMessage feed = Serializer.Deserialize<FeedMessage>(req.GetResponse().GetResponseStream());
foreach (FeedEntity entity in feed.entity) {
  ...
}
```

For more details on the naming conventions for the C# classes generated
from the
[gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto).