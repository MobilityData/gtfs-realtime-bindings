# gtfs-realtime-bindings

Language bindings generated from the
[GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) protocol
buffer spec for popular languages.

## Introduction

[GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) is a data
format for communicating real-time information about public transit systems.
GTFS-realtime data is encoded and decoded using [Protocol
Buffers](https://developers.google.com/protocol-buffers/), a compact binary
representation designed for fast and efficient processing.  The data schema
itself is defined in
[gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto).

To work with GTFS-realtime data, a developer would typically use the
`gtfs-realtime.proto` schema to generate classes in the programming language of
their choice.  These classes can then be used for constructing GTFS-realtime
data model objects and serializing them as binary data or, in the reverse
direction, parsing binary data into data model objects.

Because generating GTFS-realtime data model classes from the
`gtfs-realtime.proto` schema is such a common task, but also one that sometimes
causes confusion for first-time developers, this project aims to provide
pre-generated GTFS-realtime language bindings for a number of the most popular
programming languages.  Where possible, these language bindings will be
published as packages to facilitate their use in other projects.

## Supported Languages

* [.NET](dotnet/README.md)
* [Java](java/README.md)
* [JavaScript / Node.js](nodejs/README.md)
* [PHP](https://github.com/google/gtfs-realtime-bindings-php)
* [Python](python/README.md)
* [Ruby](ruby/README.md)
* [Golang](golang/README.md)

## Other Languages

We don't provide generated code for C++, use the official protoc compiler for that (from [here](https://developers.google.com/protocol-buffers/docs/downloads) or [here](https://github.com/google/protobuf))

Are we missing your favorite language? Consider contributing:

1. Read [CONTRIBUTING.md](CONTRIBUTING.md).
2. Open a pull request with your language of choice. Please include update instructions (ideally, scripts). Also, provide packaging suitable for the language ecosystem.
