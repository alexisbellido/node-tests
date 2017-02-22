Running Node.js and Javascript with Docker
=============================================================================

Build from my Dockerfile:

docker build -t my-nodejs-app .

Go to Node.js console:

  ``docker run --network=zinibu -it --rm --name node1 -v "$PWD":/usr/src/app -w /usr/src/app my-nodejs-app``

Run as daemon, expose a port to use with http-server and then ssh into it:

  ``docker run --network=zinibu -it -d --rm -p 8888:8888 --name node1 -v "$PWD":/usr/src/app -w /usr/src/app my-nodejs-app``
  ``docker ps``
  ``docker exec -it node1 /bin/bash``

Once in the container:

  ``npm install http-server -g``
  ``mkdir public``
  ``http-server -p 8888``

And then you can put your files in public in the host and it will be served from the container, for example, if you create a test.html in public you can visit it at:

  ``http://127.0.0.1:8888/test.html``
