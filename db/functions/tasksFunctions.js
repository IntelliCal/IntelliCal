var models = require("./../models");

var addTask = function (task, callback) {
  if (typeof task !== 'object' ) {
    if (JSON.parse(task) === 'object') {
      user = JSON.parse(task);
    } else {
      console.error('Function addTask needs an Object {username, password}');
      return;
    }
  }

  models.tasks.build(task)
    .save()
    .then(function (currentUser) { //current task is the promise made above
      callback(null, currentUser.dataValues); //return the entry
    })
    .error(function(error) {
      callback(error);
    });
}

var getAllTasks = function (callback) {
  models.tasks.all()
    .then(function (result) {
      var taskArr = [];
      result.forEach(function (task) {
        taskArr.push(task.dataValues);
      });
      callback(null, taskArr);
    })
    .error(function(error) {
      callback(error);
    });
}

var deleteATask = function (taskId, callback) {
  models.tasks.destroy({
      where: {
        id: Number(taskId) //incase taskId is given as string
      }
    })
    .then(function (result) {
      callback(null, result);
    })
    .error(function(error) {
      callback(error);
    });
}

var getATask = function (taskId, callback) {
  models.tasks.findOne({
      where: {
      id: Number(taskId) //incase taskId is given as string
      }
    })
    .then(function (result) {
      if (result === null) { //if there is no result from the search
        callback({cause: 'No such task to get'}, result); //send back error
      } else {
        callback(null, result.dataValues); //search was good.
      }
    })
    .error(function(error) {
      callback(error);
    });
}

var updateATask = function (taskId, props, callback) {
  if (typeof props !== 'object' ) {
    if (JSON.parse(props) === 'object') {
      props = JSON.parse(props);
    } else {
      console.error('Function addTask needs an Object {username, password}');
      return;
    }
  }

  models.tasks.update(props, {
      where: {
        id: Number(taskId) //incase taskId is given as string
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
exp.addTask = addTask;
exp.getAllTasks = getAllTasks;
exp.deleteATask = deleteATask;
exp.getATask = getATask;
exp.updateATask = updateATask;

module.exports = exp;