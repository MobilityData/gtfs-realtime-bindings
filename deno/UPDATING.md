# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Node.js](https://www.npmjs.com/get-npm) (v10.15.2 LTS has been used)

#### Every time `gtfs-realtime.proto` changes

1. Run `npm install` from the `nodejs` folder to install the protobuf package

1. Regenerate the language binding source from gtfs-realtime.proto by running the following from the `nodejs` folder:

    ```
    npm run buildProto
    ```

1. Add the license header back to the generated source file.

1. Test the generated code:

    ```
    npm run test
    ```

1. Update the version number in `package.json`.

## Publishing a new release

#### Every release

Log in with your account on NPM that has permissions for https://www.npmjs.com/package/gtfs-realtime-bindings:

```
npm login
```

Publish the package to NPM:

```
npm publish
```
