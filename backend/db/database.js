var models = require("./models");

models.users.hasMany(models.tasks);
models.tasks.belongsTo(models.users);


// var test = models.users.build({username: 'test', password: 'pass'}).save().then(function(anotherTask) {
//     // you can now access the currently saved task with the variable anotherTask... nice!
//     console.log('saved');
//     models.users.all().then(function(user) {
//       console.log(user[0].dataValues);
//       console.log('test');
//     });
//   }).error(function(error) {
//     // Ooops, do some error-handling
//     console.error(error);
//   });

var addUser = function(user, test) {
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
    return currentUser.dataValues; //return the entry
  })
  .error(function(error) {
    console.error(user, error);
  });
}

addUser({username: 'anotehr', password: 'test'}, true);



var utilities = {};
utilities.addUser = addUser;

module.exports = utilities;