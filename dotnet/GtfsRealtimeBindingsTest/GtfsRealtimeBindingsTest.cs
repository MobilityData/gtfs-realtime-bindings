using System.IO;
using System.Net;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProtoBuf;
using TransitRealtime;

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
            int c = feed.Entities.Count;
            Assert.AreEqual(c, 1);
            var entity = feed.Entities[0];
            Assert.AreEqual(entity.Id, "1");
            Assert.IsTrue(entity.Vehicle != null);
        }
    }
}
