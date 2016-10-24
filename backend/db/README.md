


# Postgres install and Setup (notes)
Looks like you will need to install psql postgresql via homebrew. Need to double check.

`brew install postgresql`
`pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`
To start up the server

`initdb /usr/local/var/postgres -E utf8`
create the database, do initial config

`createdb`

`psql -h localhost`

once finally running [this](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) is a great resource

## Postgres use

### Start up server

To start the server after you have installed on your local machine, run `psql -h localhost` in a new tab.

### Commands for CLI Postgres

This is a great cheat sheet for using the Postgres database: [Postgres Cheat Sheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)











# File structure


### Models
This is where we are keeping all of the models for the project.

### Models/index.js
This index file is what will be used to get/access all of the models. It goes through the Models directory and grabs each of the models in it. It will then add each as a key of the export. It is best to use `var models = require("./models");` and then `models.users` to get access to whichever model you want instead of directly accesssing it.

# Database functions
Require db/databse.js to get db utility functions.

