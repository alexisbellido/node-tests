Running Node.js and Javascript with Docker
=============================================================================

This is based on the official Node.js image: https://hub.docker.com/_/node/

Build from my Dockerfile:

  ``docker build -t alexisbellido/node:7.6.0 .``

Create a network to use for your containers.

  ``docker network create -d bridge zinibu``

Go to Node.js console:

  ``docker run --network=zinibu -it --rm --hostname=node1 --name node1 -v "$PWD":/usr/src/app -w /usr/src/app alexisbellido/node:7.6.0``

Notice that --rm will remove the container and its volume without a name when it exits or the host restarts. Don't use it this parameter if this is not what you want.

  ``docker run --network=zinibu -it --hostname=node1 --name node1 -v "$PWD":/usr/src/app -w /usr/src/app alexisbellido/node:7.6.0``

Run as daemon, expose a port to use with http-server and then ssh into it:

  ``docker run --network=zinibu -it -d -p 8888:8888 --hostname=node1 --name node1 -v "$PWD":/usr/src/app -w /usr/src/app alexisbellido/node:7.6.0``
  ``docker ps``
  ``docker exec -it node1 /bin/bash``

Once in the container:

  ``npm install http-server -g``
  ``mkdir public``
  ``http-server -p 8888``

And then you can put your files in public in the host and it will be served from the container, for example, if you create a test.html in public you can visit it at:

  ``http://127.0.0.1:8888/test.html``

For using as daemon with React Create App (https://github.com/facebookincubator/create-react-app), expose port 3000:

  ``docker run --network=zinibu -it -d -p 3000:3000 --hostname=node1 --name node1 -v "$PWD":/usr/src/app -w /usr/src/app alexisbellido/node:7.6.0``
  ``docker exec -it node1 /bin/bash``

And then browse to:

  ``http://127.0.0.1:3000/``

But the problem with that is that the current directory ($PWD) is created and owned by the root user and I prefer to create the directory myself. If your host user has the same uid as the one used by the node user created by the container (1000) then you can create a host directory first and the user permissions should match when mapping the volume. Then just run your container like this:

  ``mkdir app2`
  ``docker run --network=zinibu -it -d -p 3001:3000 --hostname=node2 --name node2 -v ~/mydocker/node-tests/app2:/usr/src/app -w /usr/src/app alexisbellido/node:7.6.0``

This assumes your host will use port 3001 to map to port 3000 on the container.

Now you can ssh into the container and install create-react-app as root:

  ``docker exec -it node2 /bin/bash``
  ``npm install -g create-react-app``

And then su to the node user to make sure the permissions match the host user. Remember, this assumes your uid between host and container match:

  ``su node``
  ``create-react-app my-app``
  ``cd my-app/``
  ``npm start``

Check original Dockerfile if you need to tweak user details.

To create your custom Webpack configuration

  ``mkdir custom-webpack`
  ``docker run --network=zinibu -it -d -p 3002:3000 --hostname=node3 --name node3 -v ~/mydocker/node-tests/custom-webpack:/usr/src/app -w /usr/src/app alexisbellido/node:7.6.0``
  ``docker exec -it node3 /bin/bash``

Check latest version available via npm:

  ``npm show babel-preset-es2015 version``

And check all versions available:
  ``npm show babel-preset-react@* version``


Webpack 2 and React
==================================

Using custom-webpack2 directory and node4 container.


Some npm commands
==================================

If you are only interested in the packages installed globally without the full TREE then:

  ``npm -g ls --depth=0``

or locally:

  ``npm ls --depth=0``
