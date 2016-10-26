
"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");

if (process.env.HEROKU_POSTGRESQL_IVORY_URL) {
    var sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_IVORY_URL, "", "", {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    });
} else {
    var sequelize = new Sequelize(process.env.POSTGRESQL_LOCAL_DB, "", "", {
        host: process.env.POSTGRESQL_LOCAL_HOST,
        dialect: 'postgres',
        freezeTableName: true,
        define: {
            timestamps: false
        },
        pool: {
            max: 9,
            min: 0,
            idle: 10000
        }
    });
}







var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        console.log('file is: ',file);
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});


// sequelize.sync({force:true});
sequelize.sync({force:false});
// Sequelize.sync({force:true});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;