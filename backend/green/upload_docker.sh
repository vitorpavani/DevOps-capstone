#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# Create dockerpath
# dockerpath=<your docker ID/path>
dockerpath=testgreenimage

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker login --username vipavani85 --password pcII3$1YbDYPWb@N
docker tag testgreenimage vipavani85/testgreenimage
# Step 3:
# Push image to a docker repository
docker push vipavani85/testgreenimage
