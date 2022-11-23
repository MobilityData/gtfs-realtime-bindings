# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Docker](https://docs.docker.com/get-docker/)

#### Every time node package dependencies change

1. Download and install [Node.js](https://www.npmjs.com/get-npm) (check the `package.json` for `engines` version).

1. Edit the dependency versions in `package.json` and run `npm install`.

1. Re-generate the code by following instructions below.

#### Re-generating the code

1. Run the following from the project root folder:

    ```
    docker build -t gtfs-nodejs -f nodejs/Dockerfile .
    docker create --name temp gtfs-nodejs
    docker cp temp:/lib/gtfs-realtime.js $(pwd)/nodejs/gtfs-realtime.js
    docker rm -f temp
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
