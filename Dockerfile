FROM ubuntu:18.04 as protoc

WORKDIR /usr/src/protoc

RUN apt-get update \
    && apt-get install -y \
        wget unzip \
    && rm -rf /var/lib/apt/lists/*

RUN wget -O /usr/src/protoc/protoc.zip "https://github.com/protocolbuffers/protobuf/releases/download/v3.12.3/protoc-3.12.3-linux-x86_64.zip" \
    && unzip protoc.zip

FROM ubuntu:18.04

RUN apt-get update \
    && apt-get install -y \
        python3 python3-pip golang git \
    && pip3 install nose protobuf

RUN apt-get install -y --no-install-recommends \
        software-properties-common nodejs npm \
    && rm -rf /var/lib/apt/lists/*

RUN go get -u github.com/golang/protobuf/protoc-gen-go

WORKDIR /usr/src/app

COPY ./nodejs/package.json /usr/src/app/nodejs/package.json
RUN npm --prefix /usr/src/app/nodejs/ install

COPY --from=protoc /usr/src/protoc/bin/protoc /usr/local/bin/protoc
COPY . /usr/src/app

CMD [ "/bin/sh", "./build.sh"]
