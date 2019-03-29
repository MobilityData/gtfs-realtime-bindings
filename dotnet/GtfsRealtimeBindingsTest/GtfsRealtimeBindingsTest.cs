using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProtoBuf;
using transit_realtime;

namespace GtfsRealtimeBindingsTest
{
    [TestClass]
    public class GtfsRealtimeBindingsTest
    {
        [TestMethod]
        public void TestReadVehiclePosition()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "vehicle_position.pb");
            var req = WebRequest.Create(path);
            FeedMessage feed = Serializer.Deserialize<FeedMessage>(req.GetResponse().GetResponseStream());
            int c = feed.entity.Count;
            Assert.AreEqual(c, 1);
            var entity = feed.entity[0];
            Assert.AreEqual(entity.id, "1");
            Assert.IsTrue(entity.vehicle != null);
        }
    }
}
