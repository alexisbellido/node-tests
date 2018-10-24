React for Beginners Examples

From the root of this repository.

.. code-block:: bash

  $ docker stack deploy -c compose/react-for-beginners.yml react-for-beginners

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
