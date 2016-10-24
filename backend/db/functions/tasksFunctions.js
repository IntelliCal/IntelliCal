var models = require("./../models");

var addTask = function (task, callback) {
  if (typeof task !== 'object') {
    console.error('Function addUser needs an Object {username, password}');
    return;
  }
  models.tasks.build(task)
    .save()
    .then(function (currentUser) { //current task is the promise made above
      callback(null, currentUser.dataValues); //return the entry
    })
    .error(function(error) {
      callback(error, currentUser.dataValues);
    });
}

var getAllTasks = function (callback) {
  models.tasks.all()
    .then(function (result) {
      var t = [];
      result.forEach(function (task) {
        t.push(task.dataValues);
      });
      callback(null, u);
    })
    .error(function(error) {
      callback(error, u);
    });
}

var deleteATask = function (taskId, callback) {
  models.tasks.destroy({
      where: {
        id: Number(taskId) //incase taskId is given as string
      }
    })
    .then(function (asd) {
      callback(null, asd);
    })
    .error(function(error) {
      callback(error, asd);
    });
}

var getATask = function (taskId, callback) {
  models.tasks.findOne({
      where: {
      id: Number(taskId) //incase taskId is given as string
      }
    })
    .then(function (result) {
      callback(null, result.dataValues);
    })
    .error(function(error) {
      callback(error, result.dataValues);
    });
}

var updateATask = function (taskId, props, callback) {
  models.tasks.update(props, {
      where: {
        id: Number(taskId) //incase taskId is given as string
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
exp.addTask = addTask;
exp.getAllTasks = getAllTasks;
exp.deleteATask = deleteATask;
exp.getATask = getATask;
exp.updateATask = updateATask;

module.exports = exp;