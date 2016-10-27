# Postgres install and Local setup
You'll need to run through each of these steps in order and very carefully to get postgres installed locally for local testing.

1. Install postgres with homebrew: `brew install postgresql`
2. Start up the server and start the log: `pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`
3. Do the initial configuration: `initdb /usr/local/var/postgres -E utf8`
4. Create the database: `createdb`
  * There may be an issue where the database is not created. Once, postgress did not correctly install the *'example'* or *'test'* database and that had to be solved by manually creating one.
5. Do a global instal of psql (this is the postgres CLI): `npm install -g psql`
6. Start up the sql CLI: `psql -h localhost`
  * If there is an issue here, kill all postgres processes by listing them `ps aux | grep post`, then uninstall postgres and psql, and try the instructions again.

After initial setup you *should* be able to use `psql` to open the postgres CLI prompt.

once finally running [this](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) is a great resource for psql commands.




---
# Postgres use

### Open the psql CLI

You may need to start the server after you have installed on your local machine, the run `psql -h localhost` or `psql` in a new terminal tab.

### Using Postgres psql CLI

This is a great cheat sheet for using the Postgres database: [Postgres Cheat Sheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)










---
# File structure


### Models
This is where we are keeping all of the models for the project.

### Models/index.js
This index file is what will be used to get/access all of the models. It goes through the Models directory and grabs each of the models in it. It will then add each as a key of the export. It is best to use `var models = require("./models");` and then `models.users` to get access to whichever model you want instead of directly accesssing it.



---
# Database functions
Require db/database.js to get db utility functions.

| Function Name      | api url                | Method| Input                        | Output        |
|--------------------|------------------------|-------|------------------------------|---------------|
| addUser            | /api/users             | PUT   | {user obj}                   | {added user}  |
| getAllUsers        | /api/users             | GET   |                              | [{user},{},{}]|
| deleteAUser        | /api/users/:user_id    | DELETE| id as 1 or '1'               | 0 or 1        |
| getAUser           | /api/users/:user_id    | GET   | id as 1 or '1'               | {user}        |
| updateAUser        | /api/users/:user_id    | PUT   | id as 1 or '1' , {properties}| 0 or 1        |
| addTask            | /api/tasks             | PUT   | {task obj}                   | {added task}  |
| getAllTasks        | /api/tasks             | GET   |                              | [{task},{},{}]|
| deleteATask        | /api/tasks/:task_id    | DELETE| id as 1 or '1'               | 0 or 1        |
| getATask           | /api/tasks/:task_id    | GET   | id as 1 or '1'               | {task}        |
| updateATask        | /api/tasks/:task_id    | PUT   | id as 1 or '1' , {properties}| 0 or 1        |
| getAllTasksForAUser| /api/usertasks/:user_id| GET   | user id as 1 or '1'          | [{task},{},{}]|

*0 or 1 outputs indicate either failure (0) or success (1)*


---
#Schema
Here is the schema for the 2 current tables. 10/24 last updated

### Task

| id           | title | description |           start            |            end              | userId                |
|--------------|-------|-------------|----------------------------|-----------------------------|-----------------------|
| Number, Auto | string| string      | javascript date time object|  javascript date time object| foreign key from users|

Example for an entry would be (do not include id) `{title: 'test title', description: 'test description', startTime: new Date(), endTime: new Date(1477439896372), userId: 5}`

Start and end can take either a javacscript date time object or a number corresponding to a date time.

### User

| id           | username | password |
|--------------|----------|----------|
| Number, Auto | string   | string   |

There is currently no hashing being done on the passwords. Theses are mostly here as placeholders. Example entry (do not include id) `{username: 'XxSweetUserName87xX', password: '1337Password'}`

---
# Heroku Postgres

## index.js connection

The connection has been modified to check for the **HEROKU_POSTGRESQL_IVORY_URL** enviornment variable. If it is defined, we change the connection type to work with Heroku. The match regex pulls out several different parameters from the enviornment variable that is set.

## Looking into psql on Heroku

*Heroku may not support the uerId that is getting added in throught the relational declarations on database.js*

Start by running `heroku pg:psql` in a terminal, this will open up a psql prompt that is connected to heroku.

You can see the name spaces by using `\dt`

~~If you try to search for something it may not work. So you'll need to set the search path: `SET search_path = '<name space found Owner>';`~~








