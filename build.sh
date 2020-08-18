cd /usr/src/
git clone https://github.com/google/transit.git
cd /usr/src/app/

mkdir -p release/python
mkdir -p release/java
mkdir -p release/javascript
mkdir -p release/go

export PATH=$PATH:/root/go/bin

protoc gtfs-realtime.proto --proto_path /usr/src/transit/gtfs-realtime/proto --python_out=release/python --java_out=release/java --go_out=release/go/

cp -R /usr/src/app/nodejs /usr/src/nodejs
cp /usr/src/transit/gtfs-realtime/proto/gtfs-realtime.proto /usr/src/gtfs-realtime.proto
cd /usr/src/nodejs/
npm install
npm run buildProto
cp /usr/src/nodejs/gtfs-realtime.js /usr/src/app/release/javascript/gtfs-realtime.js

cp -R /usr/src/app/python /usr/src/python
cp /usr/src/app/release/python/gtfs_realtime_pb2.py /usr/src/python/gtfs_realtime_pb2.py
nosetests /usr/src/python

cp -R /usr/src/app/python /usr/src/python
cp /usr/src/app/release/python/gtfs_realtime_pb2.py /usr/src/python/gtfs_realtime_pb2.py
nosetests /usr/src/python

cp -R /usr/src/app/golang /usr/src/golang
cp /usr/src/app/release/go/gtfs-realtime.pb.go /usr/src/golang/gtfs/gtfs-realtime.pb.go
cd /usr/src/golang/gtfs
go test