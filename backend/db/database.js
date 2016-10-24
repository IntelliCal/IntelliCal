var models = require("./models");

models.users.sync({force:true}).error(function(err){
  console.error(err);
});
models.tasks.sync({force:true}).error(function(err){
  console.error(err);
});

// model.users.hasMany(Task);
// Task.belongsTo(User);

models.users.hasMany(models.tasks);
models.tasks.belongsTo(models.users);


models.users.all().then(function(taskList) {
    console.log(taskList);
    console.log('test');
  });