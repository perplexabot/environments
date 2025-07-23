#!/bin/bash

docker run --rm -it -v $PWD/HelloWorldMaven:/HelloWorldMaven -w /HelloWorldMaven -u root maven /bin/bash
