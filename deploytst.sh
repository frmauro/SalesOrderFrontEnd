#!/bin/bash
########################################################

## Shell Script to Build Docker Image and run.

########################################################


result=$( docker images -q salesorderfrontend )
if [[ -n "$result" ]]; then
echo "image exists"
 docker rmi -f salesorderfrontend
else
echo "No such image"
fi

echo "build the docker image"
echo "built docker images and proceeding to delete existing container"

result=$( docker ps -q -f name=salesorderfrontend )
if [[ $? -eq 0 ]]; then
echo "Container exists"
 docker container rm -f salesorderfrontend
echo "Deleted the existing docker container"
else
echo "No such container"
fi

cp -a /home/francisco/estudos/azuredevops/myagent/_work/13/s/.  /home/francisco/estudos/azuredevops/myagent/_work/r12/a/

docker build -t salesorderfrontend .

echo "built docker images and proceeding to delete existing container"
echo "Deploying the updated container"

docker run --name salesorderfrontend -d -p 8086:80 --link apigetway salesorderfrontend


echo "Deploying the container"
