var db = require('../db/database.js');

// router for rest api
module.exports = function(app, express) {
  var router = express.Router();

  //middleware to keep routes DRY-er
  var responseHandling = function (req, res, fn) {
    fn.then(function (response) {
        res.json(response);
      })
      .error(function (error) {
        console.error(error);
        res.status(400).json(error);
      })
  }

  //tasks
  router.route('/tasks')
    .get(function(req, res) {
      responseHandling(req, res, db.getAllTasks());
    })
    .post(function(req, res) {
      responseHandling(req, res, db.addTask(req.body));
    });

  router.route('/tasks/:task_id')
    .get(function(req, res) {
      responseHandling(req, res, db.getATask(req.params.task_id));
    })
    .delete(function(req, res) {
      responseHandling(req, res, db.deleteATask(req.params.task_id));
    })
    .put(function(req, res) {
      responseHandling(req, res, db.updateATask(req.params.task_id, req.body));
    });

  //users
  router.route('/users')
    .get(function(req, res) {
      responseHandling(req, res, db.getAllUsers());
    })
    .post(function(req, res) {
      responseHandling(req, res, db.addUser(req.body));
    });

  router.route('/users/:user_id')
    .get(function(req, res) {
      responseHandling(req, res, db.getAUser(req.params.user_id));
    })
    .delete(function(req, res) {
      responseHandling(req, res, db.deleteAUser(req.params.user_id));
    })
    .put(function(req, res) {
      responseHandling(req, res, db.updateAUser(req.params.user_id, req.body));
    });

  //tasks for a specific given user
  router.route('/usertasks/:user_id')
    .get(function(req, res) {
      responseHandling(req, res, db.getAllTasksForAUser(req.params.user_id));
    })

  //test function to make sure api is working
  router.get('/', function(req, res) {
    res.json({ message: 'calendar rest api' });
  });

  //test function to make sure api is working
  router.get('/deploy', function(req, res) {
    res.json({ message: 'Lucas deployment test' });
  });

  app.use('/api', router);
}
