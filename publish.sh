#!/bin/bash

docker build -t feldrise/site:latest --platform linux/amd64 .
docker tag feldrise/site:latest feldrise/site:$1
docker push feldrise/site:latest
docker push feldrise/site:$1