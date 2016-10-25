


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




---
# Postgres use

### Start up server

To start the server after you have installed on your local machine, run `psql -h localhost` in a new tab.

### Commands for CLI Postgres

This is a great cheat sheet for using the Postgres database: [Postgres Cheat Sheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)










---
# File structure


### Models
This is where we are keeping all of the models for the project.

### Models/index.js
This index file is what will be used to get/access all of the models. It goes through the Models directory and grabs each of the models in it. It will then add each as a key of the export. It is best to use `var models = require("./models");` and then `models.users` to get access to whichever model you want instead of directly accesssing it.

---

# Database functions
Require db/databse.js to get db utility functions.

| Function Name      | Input                        | Output        |
|--------------------|------------------------------|---------------|
| addUser            | {user obj}                   | {added user}  |
| getAllUsers        | none                         | [{user},{},{}]|
| deleteAUser        | id as 1 or '1'               | 0 or 1        |
| getAUser           | id as 1 or '1'               | {user}        |
| updateAUser        | id as 1 or '1' , {properties}| ???           |
| addTask            | {task obj}                   | {added task}  |
| getAllTasks        | none                         | [{task},{},{}]|
| deleteATask        | id as 1 or '1'               | 0 or 1        |
| getATask           | id as 1 or '1'               | {task}        |
| updateATask        | id as 1 or '1' , {properties}| ???           |
| getAllTasksForAUser| user id as 1 or '1'          | [{task},{},{}]|

---

#Schema
Here is the schema for the 2 current tables. 10/24 last updated

### Task

| id           | title | description |           start            |            end              | userId                |
|--------------|-------|-------------|----------------------------| ----------------------------|-----------------------|
| Number, Auto | string| string      | javascript date time object|  javascript date time object| foreign key from users|

Example for an entry would be (do not include id) `{title: 'test title', description: 'test description', startTime: new Date(), endTime: new Date(1477439896372), userId: 5}`

Start and end can take either a javacscript date time object or a number corresponding to a date time.

### User

| id           | username | password |
|--------------|----------|----------|
| Number, Auto | string   | string   |

There is currently no hashing being done on the passwords. Theses are mostly here as placeholders. Example entry (do not include id) `{username: 'XxSweetUserName87xX', password: '1337Password'}`
