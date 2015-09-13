'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
chai.use(chaiHttp);
require(__dirname + '/../server');

describe('GET time', function() {
  it('Should return the current server time at route /time', function(done) {
    chai.request('localhost:3000')
    .get('/time')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res).to.have.header("content-type", "text/plain");
      done();
    });
  });
});

describe('GET greet', function() {
  it('Should return hello plus an inputed name', function(done) {
    chai.request('localhost:3000')
    .get('/greet')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    });
  });
});

describe('POST greet', function() {
  it('should parse the json and return hello + name', function(done) {
    chai.request('localhost:3000/greet')
    .post('/greet')
    .send({name: 'test'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    });
  });
});