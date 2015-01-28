# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
protogen.exe -i:gtfs-realtime.proto -o:dotnet\GtfsRealtimeBindings\GtfsRealtime.cs
```
protogen.exe is taken from the V1 release of protobuf-net

Add the license header back to the generated source file.

Update version number as needed.

Update .nuspec with latest release notes.

Rebuild the solution for Release.

Build and deploy the package to NuGet.

```
nuget pack GtfsRealtimeBindings.csproj -Prop Configuration=Release
nuget push GtfsRealtimeBindings-X.Y.Z.nupkg
```
