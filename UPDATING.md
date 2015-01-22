# How-To Update Bindings When gtfs-realtime.proto Changes

When
[gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto)
is updated, the various languages bindings must be regenerated, packaged, and
deployed.

First step is to copy the latest version of `gtfs-realtime.proto` into project.
Then, follow the instructions in each individual UPDATING.md file for each
language type. 
