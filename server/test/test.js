//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var Tasks = require('../../db/models/tasks.js');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

//Our TASKS parent block
describe('Tasks', () => {

  // Test the /GET route
  describe('/GET tasks', () => {
    it('it should GET all the tasks', (done) => {
      chai.request(server)
        .get('/api/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
    it('it should GET a tasks with a specific id', (done) => {
      chai.request(server)
        .get('/api/tasks/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });

  });

  //Our /POST route
  describe('/POST tasks', () => {
    it('it should POST a task', (done) => {
      var dummyTask = {
        id: 1,
        title: "Clean out the fridge",
        description: "I hate doing this ugh",
        startTime: 01 / 01 / 2016,
        endTime: 01 / 01 / 2016,
        userID: 1
      }
      chai.request(server)
        .post('/api/tasks')
        .send(dummyTask)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  //Our /PUT update Route
  describe('/PUT tasks', () => {
    it('it should UPDATE a tasks with a specific id', (done) => {
      chai.request(server)
        .put('/api/tasks/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  //Our /DELETE route
  describe('/DELETE tasks', () => {
    it('it should DELETE a tasks with a specific id', (done) => {
      chai.request(server)
        .delete('/api/tasks/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  // end of task test object
});

//Our Users Test Block object
describe('Users', () => {

  // Test the /GET route
  describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
    it('it should GET a user with a specific id', (done) => {
      chai.request(server)
        .get('/api/users/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  //Test /POST Route
  describe('/POST users', () => {
    it('it should POST a task', (done) => {
      var dummyUser = {
        id: 1,
        username: 'Lucas Hawes',
        password: 'KevinDaBest'
      }
      chai.request(server)
        .post('/api/users')
        .send(dummyUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  //PUT Route to update
  describe('/PUT users', () => {
    it('it should UPDATE a user with a specific id', (done) => {
      chai.request(server)
        .put('/api/users/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });

  //Delete route to delete
  describe('/DELETE users', () => {
    it('it should DELETE a user with a specific id', (done) => {
      chai.request(server)
        .delete('/api/users/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  // end of user test object
});
