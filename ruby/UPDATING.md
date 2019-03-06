# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and setup Protocol Buffer release from https://github.com/protocolbuffers/protobuf/releases (if you haven't already done this for another language).  As of February 2019 we're using v3.7 release, which is compatible with proto2 .proto files.
1. Install the Google protobuf Ruby gem using `gem install google-protobuf`
1. Download and install [Ruby](https://www.ruby-lang.org/en/downloads/)
1. `gem install rspec` to install [rspec](https://github.com/rspec/rspec) unit testing tool

**FIXME:** As of February 2019, the official `google-protobuf` Google protoc tool [doesn't support extensions](https://github.com/protocolbuffers/protobuf/issues/1198) in proto2 files.  A 3rd party tool, [ruby-protocol-buffers](https://github.com/codekitchen/ruby-protocol-buffers), can be installed using `gem install ruby-protocol-buffers`, but doesn't seem to match the existing structure of the Ruby GTFS-rt bindings, as the unit tests fail.  As a result we are deprecating the Ruby bindings until official support for proto2 files is implemented in the Google protocol buffer tools. 

#### Every time `gtfs-realtime.proto` changes

Regenerate the language binding source from gtfs-realtime.proto by running the following from the `ruby` directory:

```
protoc --ruby_out=lib/google/transit/gtfs-realtime.pb.rb --proto_path=.. ../gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
rspec
````

Update the version number in `gtfs-realtime-bindings.gemspec`.

## Publishing a new release

#### One-Time Setup

?

#### Every release

Build and deploy the gem to rubygems.org

```
gem build gtfs-realtime-bindings.gemspec
gem push gtfs-realtime-bindings-0.0.1.gem
```
