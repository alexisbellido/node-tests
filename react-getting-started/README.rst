React Getting Started

Based on https://www.taniarascia.com/getting-started-with-react/

From the root of this repository.

.. code-block:: bash

  $ docker stack deploy -c compose/react-getting-started.yml react-getting-started

URL: http://127.0.0.1:33341/public/index.html

.. code-block:: bash

  $ cd react-getting-started/
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine npm install
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine npm run start
