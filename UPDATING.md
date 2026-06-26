# How-To Update Bindings When gtfs-realtime.proto Changes

When
[gtfs-realtime.proto](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto)
is updated upstream, the various language bindings must be regenerated,
packaged, and deployed.

## Automated flow (recommended)

Most of this is now automated:

1. The [`proto-sync`](.github/workflows/proto-sync.yml) workflow runs on a
   schedule. When it detects that the upstream `gtfs-realtime.proto` differs
   from the copy in this repo, it syncs the proto, regenerates **every**
   language binding, and opens a pull request with the changes.
2. The [`bindings-ci`](.github/workflows/bindings-ci.yml) workflow runs each
   language's test suite on that pull request.
3. Review and merge the PR, bump the per-language package versions, and let the
   per-language release workflows publish.

## Regenerating locally

All bindings are generated from the single root `gtfs-realtime.proto` by one
script, which builds each language's Docker image and runs its toolchain:

```sh
# regenerate every language
codegen/generate.sh

# regenerate selected languages
codegen/generate.sh python golang
```

Requires Docker. Each language directory contains a `Dockerfile` describing its
pinned toolchain; `codegen/generate.sh` is the single place that orchestrates
them (see [`codegen/`](codegen/)).

## Per-language packaging & publishing

After regenerating, follow each language's `UPDATING.md` for version bumping and
publishing specifics:

* [.NET](dotnet/UPDATING.md)
* [Java](java/UPDATING.md)
* [JavaScript / Node.js](nodejs/UPDATING.md)
* [PHP](php/README.md) (maintained in a separate repository)
* [Python](python/UPDATING.md)
* [Ruby](ruby/UPDATING.md)
* [Golang](golang/UPDATING.md)
