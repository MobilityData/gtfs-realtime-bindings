# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
protoc --ruby_out=lib/google/transit gtfs-realtime.proto
```

Add the license header back to the generated source file.

Test the generated code:

```
rspec specs/
````

Build and deploy the gem to rubygems.org

```
gem build gtfs-realtime-bindings.gemspec
gem push gtfs-realtime-bindings-0.0.1.gem
```
