#!/bin/bash

sudo docker build -t feldrise/site:latest --platform linux/amd64 .
sudo docker tag feldrise/site:latest feldrise/site:$1
sudo docker push feldrise/site:latest
sudo docker push feldrise/site:$1
