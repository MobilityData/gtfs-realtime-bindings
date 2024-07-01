using ProtoBuf;
using TransitRealtime;

namespace GtfsRealtimeBindingsTest;

[TestClass]
public class GtfsRealtimeBindingsTest
{
    [TestMethod]
    public void TestReadVehiclePosition()
    {
        var path = Path.Combine(Directory.GetCurrentDirectory(), "vehicle_position.pb");
        using var stream = File.OpenRead(path);
        var feed = Serializer.Deserialize<FeedMessage>(stream);
        var c = feed.Entities.Count;
        Assert.AreEqual(c, 1);
        var entity = feed.Entities[0];
        Assert.AreEqual(entity.Id, "1");
        Assert.IsTrue(entity.Vehicle != null);
    }
}
