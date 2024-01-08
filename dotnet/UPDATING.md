# How-To Update Bindings When gtfs-realtime.proto Changes

## Regenerate the language binding source from gtfs-realtime.proto.

#### One-Time Setup

1. You'll need a file `protogen.exe`, which is from [protobuf-net](https://github.com/mgravell/protobuf-net). You can download the `protogen.exe` file from https://protogen.marcgravell.com/ (for example, https://protogen.marcgravell.com/protogen/protogen%202.3.16.zip).  When you extract the zip the exe will be in the `net462` folder.
1. Add the path to `net462` folder containing `protogen.exe` to your Windows Path (it must be executed from a directory that contains the other .dll files).

#### Every time `gtfs-realtime.proto` changes

1. From the root folder, run:

    ```
    protogen.exe gtfs-realtime.proto --csharp_out=dotnet/GtfsRealtimeBindings/
    cd dotnet/GtfsRealtimeBindings/
    del GtfsRealtime.cs
    rename gtfs-realtime.cs GtfsRealtime.cs 
    git add -- GtfsRealtime.cs
    ```

1. Add the license header back to the generated source file.

1. Update version number and release notes in Visual Studio project properties.

## Publishing a new release

#### One-Time Setup

1. Download and install [Visual Studio](https://visualstudio.microsoft.com/downloads/) - the free "Community" version is fine.

1. Download and install [NuGet CLI](https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference).

1. Create an API key and configure Nuget using your authorized account for [gtfs-realtime-bindings](https://www.nuget.org/packages/GtfsRealtimeBindings/) as discussed [here](https://docs.microsoft.com/en-us/nuget/create-packages/publish-a-package).

#### Every release

1. Start the "Developer Command Prompt for VS 2022" in the root project directory.

2. Rebuild the solution for `Release`:

    `msbuild dotnet\GtfsRealtimeBindings.sln /p:Configuration=Release`

3. Run the unit test to make sure you didn't break anything:

    `vstest.console dotnet\GtfsRealtimeBindingsTest\bin\Release\GtfsRealtimeBindingsTest.dll`

4. Set API key, build and deploy the package to NuGet.

```
nuget setApiKey xxxxxxx
nuget pack GtfsRealtimeBindings/GtfsRealtimeBindings.csproj -Prop Configuration=Release
nuget push GtfsRealtimeBindings.X.Y.Z.nupkg -Source https://api.nuget.org/v3/index.json
```
