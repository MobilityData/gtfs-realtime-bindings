package transit_realtime

import (
	proto "github.com/golang/protobuf/proto"
	"io/ioutil"
	"testing"
)

func TestFeedMessage(t *testing.T) {
	var (
		expectedEntityLength = 1
		expectedEntityId     = "1"
		expectedTripId       = "t0"
	)

	vehiclePosition, err := ioutil.ReadFile("vehicle_position.pb")
	if err != nil {
		t.Errorf("Error reading vehicle_position.pb file: %s\n", err)
	}

	feed := FeedMessage{}
	err = proto.Unmarshal(vehiclePosition, &feed)
	if err != nil {
		t.Errorf("Error unmarshaling data: %s\n", err)
	}

	if len(feed.Entity) != expectedEntityLength {
		t.Errorf("Expected entity length: %d, got: %d\n", expectedEntityLength, len(feed.Entity))
	}

	entity := feed.Entity[0]
	if *entity.Id != expectedEntityId {
		t.Errorf("Expected entity id: %v, got: %v\n", expectedEntityId, entity.Id)
	}

	vehicle := entity.Vehicle
	if vehicle == nil {
		t.Errorf("Expected vehicle to not be nil\n")
	}

	trip := vehicle.Trip
	if trip == nil {
		t.Errorf("Expected trip to not be nil\n")
	}

	if *trip.TripId != expectedTripId {
		t.Errorf("Expected trip id: %v, got: %v", expectedTripId, trip.TripId)
	}
}
