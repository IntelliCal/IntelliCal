var models = require("./models");
var Promise = require("bluebird");

models.users.hasMany(models.tasks);
models.tasks.belongsTo(models.users);

var addUser = function(user, test, callback) {
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
    callback(currentUser.dataValues); //return the entry
  })
  .error(function(error) {
    console.error('addUser error occured', user, error);
  });
}

var getAllUsers = function (callback) {
  models.users.all().then(function (usersArr) {
    var u = [];
    usersArr.forEach(function (user) {
      u.push(user.dataValues);
    });
    console.log('u is: ', u);
    callback(u);
  })
  .error(function(error) {
    console.error(error);
  });
}

getAllUsers(function (d) {
 console.log('d is: ',d);
});

var utilities = {};
utilities.addUser = addUser;

module.exports = utilities;