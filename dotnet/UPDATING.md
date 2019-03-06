# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. You'll need a file `protogen.exe`, which is from [protobuf-net](https://github.com/mgravell/protobuf-net). You can download the `protogen.exe` file from https://protogen.marcgravell.com/ (for example, https://protogen.marcgravell.com/protogen/protogen%202.3.16.zip).  When you extract the zip the exe will be in the `net462` folder.

#### Every time `gtfs-realtime.proto` changes

From the root folder, run:

```
protogen.exe gtfs-realtime.proto --csharp_out=dotnet/GtfsRealtimeBindings/
cd dotnet/GtfsRealtimeBindings/
del GtfsRealtime.cs
rename gtfs-realtime.cs GtfsRealtime.cs 
git add -- GtfsRealtime.cs
```

Add the license header back to the generated source file.

Update version number as needed in AssemblyInfo.cs.

Update .nuspec with latest release notes.

## Publishing a new release

#### One-Time Setup

1. Download [Visual Studio](https://visualstudio.microsoft.com/downloads/) - the free "Community" version is fine

#### Every release

Rebuild the solution for `Release` - you can do this by selecting the drop down at the top of the screen

Build and deploy the package to NuGet.

```
nuget pack GtfsRealtimeBindings.csproj -Prop Configuration=Release
nuget push GtfsRealtimeBindings-X.Y.Z.nupkg
```
