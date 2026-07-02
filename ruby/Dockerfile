FROM ruby:3.3

WORKDIR /lib

# Install protoc (cf. http://google.github.io/proto-lens/installing-protoc.html)
ENV PROTOC_ZIP=protoc-25.1-linux-x86_64.zip
RUN apt-get update && apt-get install -y unzip \
    && curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v25.1/$PROTOC_ZIP \
    && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
    && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
    && rm -f $PROTOC_ZIP

# The Ruby binding targets the `protobuf` gem's message format
# (::Protobuf::Message), produced by that gem's protoc-gen-ruby plugin -- NOT
# protoc's built-in google-protobuf "--ruby_out" generator. Modern protoc ships
# a built-in ruby generator that would shadow "--ruby_out", so we register the
# gem's plugin under a distinct name (--pbruby_out) and point protoc straight at
# the gem binstub.
RUN gem install protobuf -v 3.10.8

COPY gtfs-realtime.proto /lib/gtfs-realtime.proto

# Generate into ./out; codegen/generate.sh copies the result onto the host and
# re-applies the license header.
CMD ["bash", "-c", "mkdir -p out && protoc --plugin=protoc-gen-pbruby=\"$(which protoc-gen-ruby)\" --pbruby_out=out -I. gtfs-realtime.proto"]
