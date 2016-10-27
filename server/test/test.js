//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var Tasks = require('../db/models/tasks.js');

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Tasks', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Tasks.remove({}, (err) => {
      done();
    });
  });

  // Test the /GET route
  describe('/GET tasks', () => {
    it('it should GET all the tasks', (done) => {
      chai.request(server)
        .get('/tasks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST tasks', () => {
    it('it should POST a task', (done) => {
      var dummyTask = {
        title: "Clean out the fridge",
        description: "I hate doing this ugh",
      }
      chai.request(server)
        .post('/tasks')
        .send(dummyTask)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

// end of test object
});
