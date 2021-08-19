# gtfs-realtime-bindings
[![Join the MobilityData chat](https://bit.ly/mobilitydata-slack)](https://bit.ly/mobilitydata-slack)

Language bindings generated from the
[GTFS Realtime](https://github.com/google/transit/tree/master/gtfs-realtime) protocol
buffer spec for popular languages.

## Introduction

[GTFS Realtime](https://github.com/google/transit/tree/master/gtfs-realtime) is a data
format for communicating real-time information about public transit systems.
GTFS Realtime data is encoded and decoded using [Protocol
Buffers](https://developers.google.com/protocol-buffers/), a compact binary
representation designed for fast and efficient processing.  The data schema
itself is defined in
[gtfs-realtime.proto](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto).

To work with GTFS Realtime data, a developer would typically use the
`gtfs-realtime.proto` schema to generate classes in the programming language of
their choice.  These classes can then be used for constructing GTFS-realtime
data model objects and serializing them as binary data or, in the reverse
direction, parsing binary data into data model objects.

Because generating GTFS Realtime data model classes from the
`gtfs-realtime.proto` schema is such a common task, but also one that sometimes
causes confusion for first-time developers, this project aims to provide
pre-generated GTFS Realtime language bindings for a number of the most popular
programming languages.  Where possible, these language bindings will be
published as packages to facilitate their use in other projects.

## Supported Languages

* [.NET](dotnet/README.md)
* [Java](java/README.md)
* [JavaScript / Node.js](nodejs/README.md)
* [Python](python/README.md)
* [Golang](golang/README.md)
* ~~[Ruby](ruby/README.md)~~ *(Deprecated as of early 2019)*
* ~~[PHP](https://github.com/google/gtfs-realtime-bindings-php)~~ *(Deprecated as of early 2019)*

## Other Languages

We don't provide generated code for C++, use the official protoc compiler for that (from [here](https://developers.google.com/protocol-buffers/docs/downloads) or [here](https://github.com/google/protobuf))

Are we missing your favorite language? Consider contributing:

1. Read [CONTRIBUTING.md](CONTRIBUTING.md).
2. Open a pull request with your language of choice. Please include update instructions (ideally, scripts). Also, provide packaging suitable for the language ecosystem.

## Project History

This project was originally created by Google - MobilityData started to maintain the project in early 2019. 

Older versions of the bindings libraries are still published under Google's name.  See the documentation for each language [here](https://github.com/MobilityData/gtfs-realtime-bindings/tree/final-google-version) to find the last version published by Google.
