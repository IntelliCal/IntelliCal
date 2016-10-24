var models = require("./models");
var Promise = require("bluebird");
var users = require("./functions/usersFunctions.js")

//Set the relations
models.users.hasMany(models.tasks);
models.tasks.belongsTo(models.users);

//add all of the db functions to the utilities object
var utilities = {};

//users
utilities.addUserP = Promise.promisify(users.addUser); //use as promise to add a user
utilities.getAllUsers = Promise.promisify(users.getAllUsers); //use as promise to get all users
utilities.deleteAUser = Promise.promisify(users.deleteAUser); //use as promise to delete specific user
utilities.getAUser = Promise.promisify(users.getAUser); //use as promise to get specific user
utilities.updateAUser = Promise.promisify(users.updateAUser); //use as promise to update specific user

//tasks


module.exports = utilities;