Build from my Dockerfile:
docker build -t my-nodejs-app .

Go to Node.js console:
docker run --network=zinibu -it --rm --name node1 -v "$PWD":/usr/src/app -w /usr/src/app my-nodejs-app 

Run as daemon and then ssh into it:
docker run --network=zinibu -it -d --rm --name node1 -v "$PWD":/usr/src/app -w /usr/src/app my-nodejs-app 
docker ps
docker exec -it node1 /bin/bash
