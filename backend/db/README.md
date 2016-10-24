## Postgres install notes
Looks like you will need to install psql postgresql via homebrew. Need to double check.

`brew install postgresql`
`pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`
To start up the server

`initdb /usr/local/var/postgres -E utf8`
create the database, do initial config

`createdb`

`psql -h localhost`

once finally running [this](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) is a great resource