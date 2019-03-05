# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Node.js](https://www.npmjs.com/get-npm) (v10.15.2 LTS has been used)
1. Run `npm install` from the `nodejs` folder to install the protobuf package

#### Every time `gtfs-realtime.proto` changes

Regenerate the language binding source from gtfs-realtime.proto by running the following from the `nodejs` folder:

```
npm run buildProto
```

Add the license header back to the generated source file.

Test the generated code:

```
npm run test
```

Update the version number in `package.json`.

## Publishing a new release

#### One-Time Setup

?

#### Every release

Publish the package to NPM:

```
npm publish
```
