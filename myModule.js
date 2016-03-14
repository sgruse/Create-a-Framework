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


// On the testing page if I want to specify a "console.log" function as a callback I need to specify it here inside my module.  When bringing in my module to my testing page I now have access to a .listen function that takes in a port and callback.  All thist module does is take in the input I give it when using it and returns me value that I can use to create server.  This call-back inside of the router.listen allows me to have a callback in my listen function on my test page so that I can console log ('server has started');
