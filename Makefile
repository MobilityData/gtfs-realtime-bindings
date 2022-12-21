protos: go-proto

go-proto:
	docker rmi -f gtfs-golang
	docker build -t gtfs-golang -f golang/Dockerfile . && docker run -it gtfs-golang && docker run --name gtfs-golang-container -it -d gtfs-golang
	docker cp gtfs-golang-container:/lib/gtfs/gtfs-realtime.pb.go golang/gtfs/gtfs-realtime.pb.go
	docker rm -f gtfs-golang-container
