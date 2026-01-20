FROM node:18.12.1-alpine

WORKDIR /lib
COPY nodejs/package.json /lib/package.json
COPY nodejs/package-lock.json /lib/package-lock.json
COPY gtfs-realtime.proto /gtfs-realtime.proto
RUN mkdir test
COPY nodejs/test/test.js /lib/test/test.js
COPY nodejs/test/vehicle_position.pb /lib/test/vehicle_position.pb
RUN npm ci
CMD npm run codeGen && npm run test
