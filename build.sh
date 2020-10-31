cd /usr/src/
git clone https://github.com/google/transit.git
cd /usr/src/app/

mkdir build
rm -rfv build/*
mkdir build/python
mkdir build/java
mkdir build/javascript
mkdir build/go

export PATH=$PATH:/root/go/bin

protoc gtfs-realtime.proto --proto_path /usr/src/transit/gtfs-realtime/proto --python_out=build/python --java_out=build/java --go_out=build/go/

cp -R /usr/src/app/nodejs /usr/src/nodejs
cp /usr/src/transit/gtfs-realtime/proto/gtfs-realtime.proto /usr/src/gtfs-realtime.proto
cd /usr/src/nodejs/
npm run buildProto
cp /usr/src/nodejs/gtfs-realtime.js /usr/src/app/build/javascript/gtfs-realtime.js

cp -R /usr/src/app/python /usr/src/python
cp /usr/src/app/build/python/gtfs_realtime_pb2.py /usr/src/python/gtfs_realtime_pb2.py
nosetests /usr/src/python

cp -R /usr/src/app/python /usr/src/python
cp /usr/src/app/build/python/gtfs_realtime_pb2.py /usr/src/python/gtfs_realtime_pb2.py
nosetests /usr/src/python

cp -R /usr/src/app/golang /usr/src/golang
cp /usr/src/app/build/go/gtfs-realtime.pb.go /usr/src/golang/gtfs/gtfs-realtime.pb.go
cd /usr/src/golang/gtfs
go test