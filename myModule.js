'use strict';

var http = require('http');
var Router = require('./router/router');

module.exports = function() {
  var router = new Router();
  router.listen = function(port, callback) {

    http.createServer(router.route()).listen(port, callback)
  };

  return router;
};
