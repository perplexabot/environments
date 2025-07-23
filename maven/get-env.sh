#!/bin/bash

IMAGE_NAME="${1:-maven}"

docker run \
    --rm \
    -it \
    -v $PWD/HelloWorldMaven:/HelloWorldMaven \
    -w /HelloWorldMaven \
    -u root "${IMAGE_NAME}" 
    /bin/bash
