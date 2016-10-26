var tasks = require('../db/functions/tasksFunctions.js');
var users = require('../db/functions/usersFunctions.js');
var relational = require('../db/functions/relationalFunctions.js');

// router for rest api
module.exports = function(app, express) {
  var router = express.Router();

  //tasks
  router.route('/tasks')
    .get(function(req, res) {
      tasks.getAllTasks(function(data) {
        res.json(data);
      })
    })
    .post(function(req, res) {
      tasks.addTask(req.body, function(data) {
        res.json(data);
      })
    });

  router.route('/tasks/:task_id')
    .get(function(req, res) {
      tasks.getATask(req.params.task_id, function(data) {
        res.json(data);
      })
    })
    .delete(function(req, res) {
      tasks.deleteATask(req.params.task_id, function(data) {
        res.json(data);
      })
    })
    .put(function(req, res) {
      tasks.updateATask(req.params.task_id, req.body, function(data) {
        res.json(data);
      })
    });

  //users
  router.route('/users')
    .get(function(req, res) {
      users.getAllUsers(function(data) {
        res.json(data);
      })
    })
    .post(function(req, res) {
      users.addUser(req.body, function(data) {
        res.json(data);
      })
    });

  router.route('/users/:user_id')
    .get(function(req, res) {
      users.getAUser(req.params.user_id, function(data) {
        res.json(data);
      })
    })
    .delete(function(req, res) {
      users.deleteAUser(req.params.user_id, function(data) {
        res.json(data);
      })
    })
    .put(function(req, res) {
      users.updateAUser(req.params.user_id, req.body, function(data) {
        res.json(data);
      })
    });

  //tasks for a specific given user
  router.route('/usertasks/:user_id')
    .get(function(req, res) {
      relational.getAllTasksForAUser(req.params.user_id, function(data) {
        res.json(data);
      })
    })

  //test function to make sure api is working
  router.get('/', function(req, res) {
    res.json({ message: 'calendar rest api' });
  });

  app.use('/api', router);
}
