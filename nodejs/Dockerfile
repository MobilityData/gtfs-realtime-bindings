FROM node:18.12.1

WORKDIR /lib
COPY nodejs/package.json /lib/package.json
COPY nodejs/package-lock.json /lib/package-lock.json
COPY gtfs-realtime.proto /gtfs-realtime.proto
RUN npm install
RUN npm run buildProto
