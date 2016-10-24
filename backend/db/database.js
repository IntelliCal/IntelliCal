var models = require("./models");
var Promise = require("bluebird");

models.users.hasMany(models.tasks);
models.tasks.belongsTo(models.users);

var addUser = function (user, test, callback) {
  if (typeof user !== 'object') {
    console.error('Function addUser needs an Object {username, password}');
  }
  if (test !== undefined && typeof test !== 'boolean') {
    console.error('Function addUser needs test to be a boolean if specified');
  }
  models.users.build(user)
    .save()
    .then(function (currentUser) { //current task is the promise made above
      if (test) {
        console.log('User saved to database', user, currentUser);
      }
      callback(null, currentUser.dataValues); //return the entry
    })
    .error(function(error) {
            callback(error, currentUser.dataValues);
      console.error('addUser error occured', user, error);
    });
}

var getAllUsers = function (callback) {
  models.users.all()
    .then(function (usersArr) {
      var u = [];
      usersArr.forEach(function (user) {
        u.push(user.dataValues);
      });
      callback(null, u);
    })
    .error(function(error) {
      callback(error, u);
    });
}

var deleteUser = function (userId, callback) {
  models.users.destroy({
    where: {
      id: userId
    }
  })
  .then(function (asd) {
    callback(null, asd);
  })
  .error(function(error) {
    callback(error, asd);
  });
}



var utilities = {};
utilities.getAllUsers = Promise.promisify(getAllUsers); //use as promise to get all users
utilities.addUserP = Promise.promisify(addUser); //use as promise to add a user
utilities.deleteUser = Promise.promisify(deleteUser); //use as promise to delete a user



module.exports = utilities;