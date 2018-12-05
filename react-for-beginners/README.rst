React for Beginners Examples

From the root of this repository.

.. code-block:: bash

  $ docker stack deploy -c compose/react-for-beginners.yml react-for-beginners

Use this URL when using Nginx as described in `<../docs/docker-basics.rst>`_:

URL: http://127.0.0.1:33342/public/index.html

.. code-block:: bash

  $ cd react-for-beginners/
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine npm install
  # development with watch
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine npm start
  # production
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine npm run build

You can also get to the container's command line and run npm

.. code-block:: bash

  $ cd react-for-beginners/
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine /bin/ash

https://github.com/wesbos/React-For-Beginners-Starter-Files

Separate app and vendor entries
==================================================

In webpack version < 4 it was common to add vendors as separate entrypoint to compile it as separate file (in combination with the CommonsChunkPlugin). This is discouraged in webpack 4. Instead the optimization.splitChunks option takes care of separating vendors and app modules and creating a separate file. Do not create a entry for vendors or other stuff which is not the starting point of execution.

Using https://webpack.js.org/plugins/split-chunks-plugin/ in Webpack 4.
