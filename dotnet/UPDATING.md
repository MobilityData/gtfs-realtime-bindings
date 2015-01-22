# How-To Update Bindings When gtfs-realtime.proto Changes

Regenerate the language binding source from gtfs-realtime.proto.

```
protogen.exe -i:gtfs-realtime.proto -o:dotnet\GtfsRealtimeBindings\GfsRealtime.cs
```
protogen.exe is taken from the V1 release of protobuf-net

Add the license header back to the generated source file.

Update version number as needed.

Update .nuspec with latest release notes.

Build and deploy the package to NuGet.

```
nuget pack GtfsRealtimeBindings.csproj
nuget push GtfsRealtimeBindings-X.Y.Z.nupkg
```
