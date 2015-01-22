# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
npm run buildProto
```

Add the license header back to the generated source file.

Test the generated code:

```
npm run test
```

Publish the package to NPM:

```
npm publish
```
