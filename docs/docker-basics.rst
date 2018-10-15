Docker Basics
======================================================================================

This is being used to run `React from scratch <../react-test/README.rst>`_.

Use a small Alpina-based `Node.js Docker image <https://hub.docker.com/_/node/>`_ to start. Note this image uses musl libc instead of glibc so certain software might run into issues.

Some tests for this repository use an Nginx web server. See for example `<../compose/react-test.yml>`_, which is started as a `Docker Swarm service <https://docs.docker.com/engine/swarm/stack-deploy/>`_ for easier configuration with the following:

.. code-block:: bash

  $ docker stack deploy -c compose/react-test.yml react-test

Now set up a directory to work with that web server, change to it and start a Node.js container to be able to edit files in that directory from the host. Note the bind target and work directory are /home/node, which already exist in the image.

.. code-block:: bash

  $ cd react-test
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node --user $(id -u):$(id -g) node:10.11-alpine /bin/ash
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node --user $(id -u):$(id -g) node:10.11-alpine npm init

Note that creating files via docker run, as when using npm init or building with webpack, may result in files owned by root on the host so it's better to use the id command on the host to pass the current user and group via --user to the Node.js container.

=================

TODO

Use what's below to complete what's above

for development the web service, which is Nginx, could use type bind instead of volume

once the code is built a new image can be created and used for production
also, once web service is used with a volume instead of a bind the code from static could copied with docker cp from host to container, hence to the volume
but at the end everything should be in the image and that should be used on production

===

Sending webpack's bundle directly to Django's static directory

See the znbmain directory, which is based on a Django application directory (the one containing apps.py, models.py and so on) for sample webpack files structure. This is for an older version of webpack but the ideas apply to other version.

There's a build script in package.json that passes a NODE_ENV environment variable to webpack.

.. code-block:: bash

  "build": "NODE_ENV=production webpack --config client/config/webpack.config.js -p",

and client/config/webpack.config.js uses it to build for either prodution or development.

There's also a watch script in package.json that can be called with a DJANGO_STATIC_PATH environment variable to set the buildPath for webpack.

.. code-block:: bash

  $ DJANGO_STATIC_PATH=/full-path-to-project/static/znbmain npm run watch

This can be build and send the files directly to the Django project's static directory during development. For production it should be all right to just build to the app's static directory and let collectstatic move everything to the project.

With Docker this would be something like the following (verify path to mount).

.. code-block:: bash

  $ docker run -it --rm --mount type=bind,source=/path/to/static/on/host,target=/root/project/static -w /root/project/static -e DJANGO_STATIC_PATH=/full-path-to/static/znbmain node:10.11-alpine npm run watch

Review how collectstatic should be run to move files from application directory to project static directory.

This does not prompt user for input and ignores the admin path (useful if it's been processed already).

.. code-block:: bash

  $ docker exec -it CONTAINER_ID docker-entrypoint.sh django-admin.py collectstatic --no-input -i admin

I think it would be easier if the webpack build would be provided by just one Django application but I suppose more than on app could build their own files if that makes sense.
