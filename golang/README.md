# Golang GTFS-realtime Language Bindings

Provides Golang structs generated from the
[GTFS-realtime](https://github.com/google/transit/tree/master/gtfs-realtime) Protocol
Buffer specification.  These structs will allow you to parse a binary Protocol
Buffer GTFS-realtime data feed into Golang objects.

## Add the Dependency

To use the `gtfs-realtime-bindings` structs in your own project, you need to
first install this library with: 

```
go get github.com/MobilityData/gtfs-realtime-bindings/golang/gtfs
```

And install the golang protobuf library dependency with:
```
go get google.golang.org/protobuf/proto
```

## Example Code

The following code snippet demonstrates downloading a GTFS-realtime data feed
from a particular URL, parsing it as a FeedMessage (the root type of the
GTFS-realtime schema), and iterating over the results.

```golang
package main

import (
    "fmt"
    "google.golang.org/protobuf/proto"
    "github.com/MobilityData/gtfs-realtime-bindings/golang/gtfs"
    "io/ioutil"
    "log"
    "net/http"
)

func main() {
    var (
        username = "YOUR_ACCESS_KEY"
        password = "YOUR_SECRET_KEY"
    )

    client := &http.Client{}
    req, err := http.NewRequest("GET", "URL OF YOUR GTFS-REALTIME SOURCE GOES HERE", nil)
    req.SetBasicAuth(username, password)
    resp, err := client.Do(req)
    defer resp.Body.Close()
    if err != nil {
        log.Fatal(err)
    }
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        log.Fatal(err)
    }

    feed := gtfs.FeedMessage{}
    err = proto.Unmarshal(body, &feed)
    if err != nil {
        log.Fatal(err)
    }

    for _, entity := range feed.Entity {
        tripUpdate := entity.TripUpdate
        trip := tripUpdate.Trip
        tripId := trip.TripId
        fmt.Printf("Trip ID: %s\n", *tripId)
    }
}
```

For more details on the naming conventions for the Golang structs generated
from the
[gtfs-realtime.proto](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto),
check out the
[Golang Generated Code](https://developers.google.com/protocol-buffers/docs/reference/go-generated)
section of the Protocol Buffers developer site.
