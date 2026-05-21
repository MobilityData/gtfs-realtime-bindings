# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Node.js](https://nodejs.org/) >= 22 (see `engines` in `package.json`).

#### Every time node package dependencies change

1. Edit the dependency versions using `npm install` and/or `npm remove` inside the `nodejs/` folder.

1. Re-generate the code by following the instructions below.

#### Re-generating the code

1. Install dependencies from the `nodejs/` folder:

    ```
    cd nodejs
    npm ci
    ```

1. Re-generate the JS bindings and TypeScript types from the root of the project:

    ```
    npm run buildProto
    ```

1. Test the generated code:

    ```
    npm test
    ```

1. Update the version number in `package.json`.

## Publishing a new release

Releases are published to npm automatically via GitHub Actions when a change to the `nodejs/` folder
is merged into `master`, provided the version in `package.json` has been bumped.

To publish manually (e.g. for testing), log in with an npm account that has permissions for
https://www.npmjs.com/package/gtfs-realtime-bindings and run from the `nodejs/` folder:

```
npm login
npm publish
```
