#!/usr/bin/env bash
#
# Unified code generation for all GTFS-realtime language bindings.
#
# Regenerates each language's committed sources from the canonical
# gtfs-realtime.proto, using that language's own Docker image so contributors
# and CI run identical, reproducible toolchains. This replaces the per-language
# update_generated_code.sh scripts and the manual, copy-paste UPDATING steps
# (closes #114 and #124).
#
# Usage:
#   codegen/generate.sh                # regenerate every language
#   codegen/generate.sh python golang  # regenerate selected languages
#
# Requires: Docker.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

ALL_LANGUAGES=(python golang java nodejs ruby)

log() { printf '\n\033[1m==> %s\033[0m\n' "$*"; }
die() { printf '\033[31merror:\033[0m %s\n' "$*" >&2; exit 1; }

# _codegen <lang> <dockerfile> <gen-cmd> <copy-pair>...
#
# Shared boilerplate for every language: build the language image, run <gen-cmd>
# inside a throwaway container, copy each generated artifact back onto the host,
# then clean up. <copy-pair> is "CONTAINER_PATH:HOST_PATH".
_codegen() {
  local lang=$1 dockerfile=$2 gencmd=$3; shift 3
  local img="gtfs-codegen-$lang" cid=""

  log "[$lang] building image"
  docker build -t "$img" -f "$dockerfile" "$ROOT"

  log "[$lang] generating"
  cid=$(docker run -d "$img" tail -f /dev/null)
  # shellcheck disable=SC2064
  trap "docker rm -f '$cid' >/dev/null 2>&1 || true" RETURN
  # Use `sh` (not `bash`): the Node image is Alpine-based and ships no bash.
  docker exec -w /lib "$cid" sh -c "$gencmd"

  local pair
  for pair in "$@"; do
    docker cp "$cid:${pair%%:*}" "$ROOT/${pair#*:}"
  done

  log "[$lang] done"
}

gen_python() {
  _codegen python python/Dockerfile \
    'protoc --python_out=google/transit --pyi_out=google/transit --proto_path=.. gtfs-realtime.proto' \
    '/lib/google/transit/gtfs_realtime_pb2.py:python/google/transit/gtfs_realtime_pb2.py' \
    '/lib/google/transit/gtfs_realtime_pb2.pyi:python/google/transit/gtfs_realtime_pb2.pyi'
}

gen_golang() {
  _codegen golang golang/Dockerfile \
    'protoc --go_out=./ --go_opt=Mgtfs-realtime.proto=./gtfs --proto_path=.. gtfs-realtime.proto' \
    '/lib/gtfs/gtfs-realtime.pb.go:golang/gtfs/gtfs-realtime.pb.go'
}

gen_java() {
  _codegen java java/Dockerfile \
    'protoc --java_out=src/main/java gtfs-realtime.proto' \
    '/lib/src/main/java/com/google/transit/realtime/GtfsRealtime.java:java/src/main/java/com/google/transit/realtime/GtfsRealtime.java'
}

gen_nodejs() {
  _codegen nodejs nodejs/Dockerfile \
    'npm run buildProto' \
    '/lib/gtfs-realtime.js:nodejs/gtfs-realtime.js' \
    '/lib/gtfs-realtime.d.ts:nodejs/gtfs-realtime.d.ts'
}

# Ruby is special: the protobuf gem's generator emits a bare file; we re-apply
# the repo's Apache license header (the first comment block of the current file)
# on top of the freshly generated body.
gen_ruby() {
  local out="ruby/lib/google/transit/gtfs-realtime.pb.rb"
  local header; header=$(mktemp)
  # capture the existing license header (up to and including the license line)
  awk '/^# limitations under the License\./{print; exit} {print}' "$ROOT/$out" > "$header"

  _codegen ruby ruby/Dockerfile \
    'mkdir -p out && protoc --plugin=protoc-gen-pbruby="$(which protoc-gen-ruby)" --pbruby_out=out -I. gtfs-realtime.proto' \
    "/lib/out/gtfs-realtime.pb.rb:$out"

  { cat "$header"; echo; cat "$ROOT/$out"; } > "$ROOT/$out.tmp"
  mv "$ROOT/$out.tmp" "$ROOT/$out"
  rm -f "$header"
}

command -v docker >/dev/null || die "docker is required but not found on PATH"

languages=("${@:-${ALL_LANGUAGES[@]}}")
[ "${1:-}" = "all" ] && languages=("${ALL_LANGUAGES[@]}")

for lang in "${languages[@]}"; do
  case "$lang" in
    python|golang|java|nodejs|ruby) "gen_$lang" ;;
    *) die "unknown language: $lang (valid: ${ALL_LANGUAGES[*]})" ;;
  esac
done

log "Regenerated: ${languages[*]}"
echo "Review changes with: git diff"
