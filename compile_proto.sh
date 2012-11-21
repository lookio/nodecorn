#!/bin/sh
protoc --descriptor_set_out=popcorn.desc --include_imports popcorn.proto
