# .NET GTFS-realtime Language Bindings

[![NuGet version](https://badge.fury.io/nu/GtfsRealtimeBindings.svg)](http://badge.fury.io/nu/GtfsRealtimeBindings)

Provides .NET classes generated from the
[GTFS Realtime](https://gtfs.org/realtime/proto/) Protocol
Buffer specification. These classes will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into C# objects.

## Add the Dependency

To use the `gtfs-realtime-bindings` classes in your own project, you need to
first install the module from the
[NuGet repository](https://www.nuget.org/packages/GtfsRealtimeBindings/).

```
Install-Package GtfsRealtimeBindings
```

## Example Code

The following code snippet demonstrates downloading a GTFS-realtime data feed
from a particular URL, parsing it as a FeedMessage (the root type of the
GTFS-realtime schema), and iterating over the results.

```csharp
using ProtoBuf;
using TransitRealtime;

var client = new HttpClient();
using var stream = await client.GetStreamAsync("URL OF YOUR GTFS-REALTIME SOURCE GOES HERE");
var feed = Serializer.Deserialize<FeedMessage>(stream);
foreach (var entity in feed.Entities)
{
  ...
}
```