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
