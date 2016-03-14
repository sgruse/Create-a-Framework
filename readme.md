# ReadMe for the GROSS module

### Description:
  The GROSS module is a NPM package that must be required in.  Requiring the module provides the functionality to create a HTTP server and handle the routing for 'GET', 'POST', 'PUT' and 'DELETE' requests.  The main structure for this module was built using a constructor function and the module as a whole acts similar to the express module.

### Requiring in the GROSS module:
  ```javascript
  var grossModule = require('gross');
  var gross = Router();
  ```
In this example you can see the 'gross' module being required in and set to the variable named 'grossModule'.  This variable can now be called and will instantiate all of the functionality of the 'gross' module.  A new variable named 'gross' is being used to hold all of that functionality.  Now the variable gross can be used to create a server and handle all RESTFUL routing.  

### Creating a server with the GROSS module:
  ```javascript
  gross.listen(port, cb);

  //Example

  gross.listen(3000, function() {
    console.log('Server started on port 3000');
  });
  ```
The 'gross' module contains the ability to create a server.  When calling 'gross.listen' you must also specify the port to listen on as well as a callback function.  Console logging the port in which the server has started on is a great use case for this call back as seen in the example.

### Routing with the GROSS module:
  ```javascript
  gross.get(route, cb);
  gross.post(route, cb);
  gross.put(route, cb);
  gross.delete(route, cb);
  gross.route();
  //Examples for how to use the "GET" and "DELETE" routes.

  gross.get('/data', function(request, response) {
    res.end();
  });

  gross.post('/data', function(request, response) {
    request.on('data', (data) => {
      // Do something with data.
      res.end();
    });
  });

  // This is how the 'GROSS' module handles requests and sends them to the right route.
  gross.route = function() {
    return (req, res) => {
      var routeFunction = this.routes[req.method][req.url];
      routeFunction(req, res);
    };
  };
  ```
 The 'gross' module can handle "GET", "POST", "PUT", and "DELETE" routes.  It controls these routes by first sending all request through the route function.  The final example shows how this route function works.  It will take in whichever route is hit, interpret the request method and request URL and then use this information to form a function that will handle the request.      
