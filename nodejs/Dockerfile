FROM node:18.12.1-alpine

WORKDIR /lib
COPY nodejs/package.json /lib/package.json
COPY nodejs/package-lock.json /lib/package-lock.json
COPY gtfs-realtime.proto /gtfs-realtime.proto
RUN npm ci
RUN npm run buildProto
