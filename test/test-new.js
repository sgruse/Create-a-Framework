'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var expect = require('chai').expect;
var request = chai.request;
var fs = require('fs');
var url = require('url');
var newDate = new Date();
var counter = 0;
var isDeleted = false;

var myModule = require(__dirname + '/../myModule');
var router = myModule();

  //SERVER TESTS
describe('Testing "GET", "POST", "PATCH", and "DELETE" request', function() {

  before(function() {
    router.listen(3000, function() {
      console.log('Test server started on port 3000');
    });
  })
  //TESTING GET
  router.get('/data', function(req, res) {
    fs.readdir(__dirname + '/../data', function(err, files) {
      console.log('These are all the files inside /data requested by "GET" request', files);
    });
    res.end();
  });

  //TESTING POST
  router.post('/api', function(req, res) {
    req.on('data', (data) => {
      fs.writeFile(__dirname + '/../data/Bob' + newDate + '.json', data + 'Posting number: ', (err) => {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data + 'Posting number: ' + counter);
        console.log('Posting Data', data.toString());
        res.end();
      });
    });
  });

  //TESTING DELETE
  router.delete('/data/Bob', function(req, res) {
    isDeleted = true;
    fs.readdir(__dirname + '/../data', function(err, files) {
      fs.unlink(__dirname + '/../data/' + files[3], function(err) {
        console.log('Deleting Post ' + files[3]);
      })
    })
    res.end();
  });

  //TESTING PUT
  router.put('/data', function(req, res) {
    req.on('data', (data) => {
      fs.readdir(__dirname + '/../data', function(err, files) {
        fs.writeFile(__dirname + '/../data/' + files[1], data.toString(), (err) => {
          console.log('Updating the second file in the "data" directory to: ' + data.toString());
          res.write(data.toString());
          res.end();
        });
      })
    })
  })

  // GET
  it('Should respond to "GET" request to /data', function(done) {
    request('localhost:3000')
    .get('/data')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    });
  });

  // POST
  it('Should respond to a "POST" request to /data', function(done) {
    request('localhost:3000')
    .post('/api')
    .send('{"name":"Bob"}')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('{"name":"Bob"}' + 'Posting number: ' + counter);
      done();
    });
  });

  // PUT
  it('Should update the name of a file inside the data directory', function(done) {
    request('localhost:3000')
    .put('/data')
    .send('{"name":"Luc"}')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.eql('{"name":"Luc"}');
      done();
    });
  });

  // DELETE
  it('Should delete a file from the data directory', function(done) {
    request('localhost:3000')
    .delete('/data/Bob')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(isDeleted).to.eql(true);
      done();
    });
  });

});
