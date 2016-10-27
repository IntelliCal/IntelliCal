var models = require("./../models");

var addUser = function (user, callback) {
  if (typeof user !== 'object' ) {
    if (JSON.parse(user) === 'object') {
      user = JSON.parse(user);
    } else {
      console.error('Function addUser needs an Object {username, password}');
      return;
    }
  }

  models.users.build(user)
    .save()
    .then(function (currentUser) { //current task is the promise made above
      callback(null, currentUser.dataValues); //return the entry
    })
    .error(function(error) {
      callback(error);
    });
}

var getAllUsers = function (callback) {
  models.users.all()
    .then(function (usersArr) {
      var userArr = [];
      usersArr.forEach(function (user) {
        userArr.push(user.dataValues);
      });
      callback(null, userArr);
    })
    .error(function(error) {
      callback(error);
    });
}

var deleteAUser = function (userId, callback) {
  models.users.destroy({
      where: {
        id: Number(userId) //incase userId is given as string
      }
    })
    .then(function (result) {
      callback(null, result);
    })
    .error(function(error) {
      callback(error);
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
      callback(error);
    });
}

var updateAUser = function (userId, props, callback) {
  if (typeof props !== 'object' ) {
    if (JSON.parse(props) === 'object') {
      props = JSON.parse(props);
    } else {
      console.error('Function updateAUser needs an Object {prop: val}');
      return;
    }
  }

  models.users.update(props, {
      where: {
        id: Number(userId) //incase userId is given as string
      }
    })
    .then(function (result) {
      callback(null, result[0]);
    })
    .error(function(error) {
      callback(error);
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