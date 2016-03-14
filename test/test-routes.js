// 'use strict';
//
// var chai = require('chai');
// var chaiHTTP = require('chai-http');
// chai.use(chaiHTTP);
// var expect = require('chai').expect;
// var request = chai.request;
// var fs = require('fs');
// var http = require('http');
//
// var Router = require(__dirname + '/../router/router');
// var newRouter = new Router();
//
// //SERVER TESTS
// describe('Testing "GET", "POST", "PATCH", and "DELETE" request', function() {
//
//   before(function() {
//     http.createServer(newRouter.route()).listen(3000, function() {
//       console.log('Test server started on port 3000');
//     });
//     newRouter.get('/data', function(req, res) {
//       console.log('/data');
//       res.end();
//     })
//   });
//
//   it('Should respond to "GET" request to /data', function(done) {
//     request('localhost:3000')
//     .get('/data')
//     .end(function(err, res) {
//       expect(err).to.eql(null);
//       expect(res).to.have.status(200);
//       done();
//
//     });
//   })
// })
