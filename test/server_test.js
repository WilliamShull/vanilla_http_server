'use strict';

var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
require(__dirname + '/../server');

describe('vanilla js server test', function() {
  it('Should return the current server time at route /time', function(done) {
    chai.request('localhost:3000')
    .get('/time')
    .end(function(err, res) {
      expect(res.status).to.eql(200);
      expect(res.text).to.not.eql(null);
    });
    done();
  });
  it('Should return hello plus an inputed name', function(done) {
    chai.request('localhost:3000')
    .get('/time/test')
    .end(function(err, res) {
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('hello test');
    });
    done();
  });
});
