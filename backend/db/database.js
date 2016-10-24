var models  = require("./models");
var Promise = require("bluebird");
var users   = require("./functions/usersFunctions.js");
var tasks   = require("./functions/tasksFunctions.js");

//Set the relations
models.users.hasMany(models.tasks);
models.tasks.belongsTo(models.users);

//add all of the db functions to the utilities object
var utilities = {};

//users
utilities.addUser     = Promise.promisify(users.addUser); //use as promise to add a user
utilities.getAllUsers = Promise.promisify(users.getAllUsers); //use as promise to get all users
utilities.deleteAUser = Promise.promisify(users.deleteAUser); //use as promise to delete specific user
utilities.getAUser    = Promise.promisify(users.getAUser); //use as promise to get specific user
utilities.updateAUser = Promise.promisify(users.updateAUser); //use as promise to update specific user

//tasks
utilities.addTask     = Promise.promisify(tasks.addTask); //use as promise to add a task
utilities.getAllTasks = Promise.promisify(tasks.getAllTasks); //use as promise to get all tasks
utilities.deleteATask = Promise.promisify(tasks.deleteATask); //use as promise to delete specific task
utilities.getATask    = Promise.promisify(tasks.getATask); //use as promise to get specific task
utilities.updateATask = Promise.promisify(tasks.updateATask); //use as promise to update specific task

//relational


module.exports = utilities;