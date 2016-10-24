var models = require("./../models");

var addUser = function (user, callback) {
  if (typeof user !== 'object') {
    console.error('Function addUser needs an Object {username, password}');
    return;
  }
  models.users.build(user)
    .save()
    .then(function (currentUser) { //current task is the promise made above
      callback(null, currentUser.dataValues); //return the entry
    })
    .error(function(error) {
      callback(error, currentUser.dataValues);
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

var deleteAUser = function (userId, callback) {
  models.users.destroy({
      where: {
        id: Number(userId) //incase userId is given as string
      }
    })
    .then(function (asd) {
      callback(null, asd);
    })
    .error(function(error) {
      callback(error, asd);
    });
}

var getAUser = function (userId, callback) {
  models.users.findOne({
      where: {
      id: Number(userId) //incase userId is given as string
      }
    })
    .then(function (result) {
      callback(null, result.dataValues);
    })
    .error(function(error) {
      callback(error, result.dataValues);
    });
}

var updateAUser = function (userId, props, callback) {
  models.users.update(props, {
      where: {
        id: Number(userId) //incase userId is given as string
      }
    })
    .then(function (result) {
      callback(null, result);
    })
    .error(function(error) {
      callback(error, result);
    });
}

//Add all functions to the export object
var exp = {};
exp.addUser = addUser;
exp.getAllUsers = getAllUsers;
exp.deleteAUser = deleteAUser;
exp.getAUser = getAUser;
exp.updateAUser = updateAUser;

module.exports = exp;