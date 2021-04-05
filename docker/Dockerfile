FROM ubuntu:20.04
RUN apt update \
    && apt install nmap \
    nodejs npm \
    nmap-scripts \
    && mkdir nmap \
    && npm install xml2js
COPY . ./nmap
WORKDIR /nmap