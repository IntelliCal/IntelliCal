# Webpack

We are looking to setup webpack so that you will be able to run/use it without having to install it globally.

Each time you make a change to the REACT app you'll need to rebuiuld the bundle.js file. Currently, webpack builds it in a _dev_ mode that makes it about 2MB. We've added bundle.js to the .gitignore so you shouldn't have to worry when trying to add files.

### Rebuilding Bundle.js

To rebuild the bundle run `npm run webpack-build`. That will start a script to rebuild webpack and start up nodemon for port 1337.

*Lucas* is working on trimming down the bundle.js file and getting a production bundle.js going.
