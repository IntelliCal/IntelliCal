# Webpack

We are looking to setup webpack so that you will be able to run/use it without having to install it globally.

Each time you make a change to the REACT app you'll need to rebuiuld the bundle.js file. Currently, webpack builds it in a _dev_ mode that makes it about 2MB. We've added bundle.js to the .gitignore so you shouldn't have to worry when trying to add files.

### Rebuilding Bundle.js

To rebuild the bundle run `npm run webpack-build`. That will start a script to rebuild webpack and start up nodemon for port 1337.

~~**Lucas** is working on trimming down the bundle.js file and getting a production bundle.js going.~~

Got the bundle.js cut down from 2MB to ~350KB. Line 1 is commented out and is how the code is meant to be run. On line 2 we are forcing the webpack.config to run as if it were in a dev enviornment. Choose which you need to use as needed.

---
# Git goodies

Got sick of running `npm install` after rebasing. Run this command in your terminal to use `gitup` to do everything for you:
`echo "alias gitup='git pull --rebase upstream master && npm install'" >> ~/.bash_profile && source ~/.bash_profile && echo '\e[31mgitup\e[39m command ready'`

Then use `gitup` on your `master` branch.

---
# TODO:

- in db functions, need to return an error for specific lookups (getATask, deleteAUser, updateA etc...) that do not return a result. (when there is nothing in the database for the lookup)
- Enable automatic Heroku deployment off of Hermes master branch.
- Write instructions for manual Heroku pushes/testing
- Add testing folder that tests all functions, all api calls, any other server stuff, and the front end.
- Add authentication for users.
- Add signup for users.
- Protect calendar view with Authentication.

---
# Testing:

- db functions
- api calls
- locally everything is working
- on deployment user api calls are working, but userId is not found in task table.

---
# Heroku fun
[Adding users to the heroku app](https://devcenter.heroku.com/articles/collaborating)
`heroku access:add user@email.com`

Open a terminal to deployment: `heroku run bash`
You may need to specify the app: `heroku run bash --app app-name-1234`

**See db/README.md for notes on connecting to the deployed db.**


