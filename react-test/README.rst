Creating a React App From Scratch With Webpack 4

See `details <https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658>`_.

.. code-block:: bash

  $ cd react-test
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node --user $(id -u):$(id -g) node:10.11-alpine /bin/ash

  $ npm init -y

  # if getting "Unhandled rejection Error: EACCES: permission denied" during npm install try without --user to work as root in the container
  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine /bin/ash

  # may not need that dot at the end
  $ npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0 .
  $ npm install --save-dev webpack@4.20.2 webpack-cli@3.1.2 webpack-dev-server@3.1.9 style-loader@0.23.1 css-loader@1.0.0 babel-loader@8.0.4 .

  # install React
  $ npm install react@16.5.2 react-dom@16.5.2
  # optional
  $ npm install react-hot-loader@4.3.11

I can run this from inside the container using npx to execute the local webpack package.

.. code-block:: bash

  # npx webpack --mode development --watch

You can also run the same from scripts package.json.

.. code-block:: bash

  # npm run start

Finally, the same can  be run from the host.

.. code-block:: bash

  $ docker run -it --rm --mount type=bind,source=$(pwd),target=/home/node -w /home/node node:10.11-alpine npm run start

`HtmlWebpackPlugin <https://webpack.js.org/plugins/html-webpack-plugin/>`_ uses `<public/template.html>`_ to generate the HTML with the links to Javascript and CSS using lodash syntax. The inject option is set to false to avoid inserting the Javascript automatically and hash is true for cache busting. This could be a Django template in other directory.
