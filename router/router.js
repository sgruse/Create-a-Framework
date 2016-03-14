'use strict'

//ROUTER

var Router = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, cb) {
  this.routes['GET'][route] = cb;
};

Router.prototype.post = function(route, cb) {
  this.routes['POST'][route] = cb;
};

Router.prototype.delete = function(route, cb) {
  this.routes['DELETE'][route] = cb;
};

Router.prototype.put = function(route, cb) {
  this.routes['PUT'][route] = cb;
};

Router.prototype.route = function() {
  //Using an arrow function means that 'this' is accessing all of the propterties on the instance of 'big Router' instantiatied through little 'router'.  If I was to use a regular function, 'this' would be accessing the constructor propterites on 'big Router'
  return (req, res) => {
    var routeFunction = this.routes[req.method][req.url];
    routeFunction(req, res);
  };
};

module.exports = Router;
