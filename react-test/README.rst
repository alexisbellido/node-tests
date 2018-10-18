Creating a React App From Scratch With Webpack 4

Use this directory for tests. Keep react-basic as the initial, working configuration.

Some examples, such as the Clock component, follow the `main concepts guide <https://reactjs.org/docs/hello-world.html>`_.

Use this URL when using Nginx as described in `<../docs/docker-basics.rst>`_:

Browse http://localhost:33340/react-test/public/index.html (try http://127.0.0.1:33340/react-test/public/index.html or a host name pointing to the correct IP if localhost doesn't work)

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

This example uses multiple instances of `HtmlWebpackPlugin <https://webpack.js.org/plugins/html-webpack-plugin/>`_ with templates from `<public/template.html>`_  and `<public/template-footer.html>`_ to generate the HTML with the links to Javascript and CSS using lodash syntax. The inject option is set to false to avoid inserting the Javascript automatically and hash is true for cache busting. This can be used with Django templates.

Issues
---------------------

CleanWebpackPlugin with watch true sometimes doesn't recreate CSS when using MiniCssExtractPlugin

Troubleshooting
---------------------
