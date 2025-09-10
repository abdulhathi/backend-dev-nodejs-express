# The Complete NodeJS Course
---

## 2. Node Module systems
#### 4. Creating a Node module
- [ ] create a module have a function called log
- [ ] export the module using module.exports.[name]
#### 5. Import and using a Node module
- [ ] import using the require
- [ ] jshint [fileName].js to capture errors in module
- [ ] We can also directly export a function to the module.export
#### 6. Module Wrapper function
- [ ] Node will create a wrapper function
- [ ] That does have exports, module, require, __filename, __dirname as a parameter to the wrapper function
#### 7. Path Module
- [ ] Create a new path module
- [ ] Node assume if there is no period(. or ./) in the require node assumes it's a built in module.
- [ ] using the path.parse to parse the __filename and print the parsed values
#### 8. OS Module
- [ ] Create a new os Module
- [ ] Using this module print below values
- [ ] TotalMemory, FreeMemory
#### 9. File System Module
- [ ] Create new fs module
- [ ] and try the readdir sync & async methods
- [ ] While trying async method and pass the call back function and print error and result
#### 10. Event Module
- [ ] Create a EventEmitter Module
- [ ] And create EventEmeiter class while require('events')
- [ ] create an object from this class
- [ ] And call the emit function which creates and event behind the seen.
- [ ] To listen the event we need to create listener function
- [ ] Using eventEmitter object to call the 'on' method.
- [ ] pass the callback function for listen the event.
#### 11. Extending Event Emitter
- [ ] Create custom Logger class
- [ ] extends(inherit) the EventEmitter class in to Logger class
- [ ] create a log method
- [ ] emit the event inside the classe's log method
- [ ] Module.Export the logger class
- [ ] Import in another module.
- [ ] Create an object for the imported logger calls
- [ ] And call the log function and before listen the emitter.
#### 12. HTTP Module
- [ ] Import http module to create a new http object
- [ ] Create the server using http
- [ ] http.listen method to set the port
- [ ] Log the listening message
- [ ] http module is also inherited the EventEmitter class
- [ ] So http.on to listen the 'connection'
- [ ] And print some message in the call back function
- [ ] Also while creatserver pass the callback function req,res
- [ ] Based on the different route ('/', '/api/course') in req param url 
- [ ] Write the different response.
- [ ] Write Json reponse for the course route.
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
