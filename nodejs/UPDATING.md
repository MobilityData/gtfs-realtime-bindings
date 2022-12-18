# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. Download and install [Docker](https://docs.docker.com/get-docker/)

#### Every time node package dependencies change

1. Download and install [Node.js](https://www.npmjs.com/get-npm) (check the `package.json` for `engines` version).

1. Edit the dependency versions in using `npm install` and/or `npm remove`.

1. Re-generate the code by following instructions below.

#### Re-generating the code

1. Run the following from the project root folder:

    ```
    docker build -t gtfs-nodejs -f nodejs/Dockerfile .
    # -it to make sure docker run can be killed with ctrl-c
    # -t uses TTY, which causes linux to include carriage returns, which are stripped using tr
    docker run -it --rm gtfs-nodejs cat /lib/gtfs-realtime.js | tr -d '\r' > nodejs/gtfs-realtime.js
    docker run -it --rm gtfs-nodejs cat /lib/gtfs-realtime.d.ts | tr -d '\r' > nodejs/gtfs-realtime.d.ts
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
