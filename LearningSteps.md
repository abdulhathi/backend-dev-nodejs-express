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
#### 11. Event arguments
- [ ] passing the arugments to the event
- [ ] Pass it like either seperated or object
- [ ] Receive the argument value when register listener
- [ ] And print argument values on the console
#### 12. Extending Event Emitter
- [ ] Create custom Logger class
- [ ] extends(inherit) the EventEmitter class in to Logger class
- [ ] create a log method
- [ ] emit the event inside the classe's log method
- [ ] Module.Export the logger class
- [ ] Import in another module.
- [ ] Create an object for the imported logger calls
- [ ] And call the log function and before listen the emitter.
#### 13. HTTP Module
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



## Node Package Manager(NPM)
#### 4. Using a package
- [ ] install 'underscore' pacakge using bun or npm
- [ ] verify a number contains inside the array of nums
#### 5. Package dependencies
- [ ] Install mangoose package
#### 6. NPM packages and source control
- [ ] 'npm i' (or) 'npm install' to install node modules
- [ ] 'git init' to initate the git
- [ ] .gitignore file to ignore the node_modules/ folder
- [ ] 'git status -s' to check the current status
- [ ] "git commit -m '[comment]'" to commit the pending fiels
#### 7. Symantic versioning
- [ ] "^4.8.3" if any package version like with carret
- [ ] This is call symantic versioning
- [ ] "^MajonVersion.MinorVersion.PatchVersion"
- [ ] if the carret or tilde is there then npm install
- [ ] Will update minorversion and patchversion
- [ ] Not the MajorVersion
#### 8. Listing the installed packages
- [ ] using 'npm list' command to see the list of packges
- [ ] This command to we can see dependencies inside tree structure
- [ ] 'npm list --depth=0' only show the dependencies in package
#### 9. Viewing the registary info for the pacakge
- [ ] 'npm view mangoose' all properties for the mangoose
- [ ] 'npm view mangoose dependencies' to view only deps
- [ ] 'npm view mangoose versions' to view all versions
#### 10. Install specific version of the package 
- [ ] 'npm i mangoose@2.4.2' to set the version
#### 11. Updating the local packages 
- [ ] 'npm outdated' command will show current, wanted and major rlease version
- [ ] 'npm update' command will update the wanted version
- [ ] 'sudo npm i -g npm-check-updates' will install below package
- [ ] npm-check-updates(ncu)
- [ ] 'ncu -u' or 'npm-check-updates' command will change the major package version in package.json
- [ ] And then if you run the command 'npm i' will install the major version
#### 12. Dev dependencies
- [ ] 'npm -i jshint --save-dev' command to we can install dev dependencies packages
#### 13. Uninstall packages
- [ ] 'npm un [package_name]' or 'npm uninstall [p_name]'
- [ ] Using the above command to we can uninstall packages.
#### 14. Working on global packages
- [ ] 'npm i -g npm' to install global npm package
- [ ] 'npm -g outdated' to check all outdated packages globaly.
- [ ] 'npm un -g [package_name]' to we can uninstall package
#### 15. Publishing the packages.
- [ ] Create a npm init and add index.js
- [ ] Module.export.add = function(a,b) { return a+b; }
- [ ] 'npm login' to login with creds
- [ ] 'npm publish' to publish package
- [ ] Create a new project using npm init
- [ ] npm i command to install the custom package
- [ ] and import useing the require 
- [ ] And use the function inside
#### 16. Updating the packages 
- [ ] Adding one more module.exports.multiply = function(a,b) { return a*b }
- [ ] 'npm version major' or 'npm version minor' or 'npm version patch' to update the latest version
- [ ] And then npm pushlish to publish the updated package

## Building RESTFul APIs Using Express
#### 3. Introducing Express
- [ ]  npm i express to install express
#### 4. Building your first node js application 
- [ ] create app object using the imported express
- [ ] create two routes '/' and '/api/courses'
#### 5. Install nodemon
- [ ] install nodemon package globally
- [ ] run the application using nodemon index.js
#### 6. Environment variables
- [ ] 'export PORT=5000' to setup the port
- [ ] process.env.PORT to use the port form env var
#### 7. Route parameter 
- [ ] setting the route path with ':id' or ':name'
- [ ] Inorder to read the param using req.params.id
- [ ] if route path like '/api/courses/:id/:name'
- [ ] using req.params object we read all the params.
- [ ] Pass the query stirng '/api/courses/id?sortBy=name&filterBy=abdul
- [ ] req.query will return the object of all query stirngs
#### 8. Handling HTTP GET request
- [ ] Define a courses object index.js file
- [ ] Create route with the :id param
- [ ] Find the course by id. 
- [ ] If course not found return (404)
- [ ] Else return the object
#### 9. Handling HTTP POST request
- [ ] Create a new route with app.post('/api/course')
- [ ] create a new object course.
- [ ] Use the req.body.name in the course object.
- [ ] Use the JSON middleware in express like below
- [ ] app.use(express.json())
- [ ] Push the course object inside courses
- [ ] Response to send the course object.
#### 10. Calling the endpoints using postman 
#### 11. Input validation
- [ ] Validate name using the Joi pacakge
- [ ] Create validation schema object using joi
- [ ] using joi validation schema object validate the request
- [ ] Send the result error to response using 400
#### 12. Handling http put request
- [ ] Lookup the course by :id route param
- [ ] If the course not return 404 (object not found)
- [ ] if exist and validate request body
- [ ] if invalid req return 400 (Bad request)
- [ ] Otherwise update the courses
- [ ] Return the course object
- [ ] Create seperate function for reuse the validate
#### 13. Handling HTTP delete request
- [ ] Lookup the course by :id route param
- [ ] If the course not return 404 (object not found)
- [ ] if exist find the index of the course
- [ ] And splice method to delete
- [ ] Finally return the deleted course
#### 13. Practice an simple application
- [ ] Create all CRUD operation
- [ ] Create, Read, Update and Delete

## Express : Advanced topics
#### 1. Introduction
- [ ] Middleware, Configuration, Debugging, Template Engines
#### 2. Middleware
- [ ] The middleware sits inbetween the request response flow. Or it's should be on the request processing pipeline.
- [ ] A middleware after done its job either it passes control to the next middler or the response object
- [ ] We can create our own custom middleware for the below purposes
- [ ] Logging, Authentication, Authorization
#### 3. Create custom middleware
- [ ] Create logging middle using app.use function to pass a function and pass the controll to the next middleware
- [ ] Create a middle function in seperate module
- [ ] And export the module exports
- [ ] Same create authentication middle ware
#### 4. Built in middleware
- [ ] express.urlencoded() middle ware create a payload from the url encoded params
- [ ] And express.static() middle ware is used to server public content items in the server. whatever files in the public folder will be server from by the URL.
#### 5. Third party middlewares
- [ ] In express we can use the thirdpart supporting middlewares that mentioned in the express document
- [ ] Ex:- Helment, morgan (logging middleware)
#### 6. Environments (Development, Testing & Production) 
- [ ] Set the 'NODE_ENV' value in environment variable
- [ ] Get the value either using app.get('env')
- [ ] Or using Process.env.NODE_ENV
- [ ] Using this NODE_ENV value we can enables middleware (ex: Morgan logging).
#### 7. Configuration
- [ ] Install config package
- [ ] Create a config folder and have development.json
- [ ] Create a config file production.json
- [ ] name and mail -> host config we can set it.
- [ ] So we can have different config based on the NODE_ENV
#### 8. Debugging
#### 9. Template Engine
- [ ] Pug, Mustache and EJS template view engine
- [ ] Install Pug
- [ ] app.set('view engine', 'pug')
- [ ] app.set('view', './views')
- [ ] create views folder inside create index.bug
- [ ] Create the template in index.bug file
- [ ] app.get create route '/' and request.render(index)
- [ ] And pass the title and message values
#### 10. Database integration 
#### 11. Authentication
#### 12. Structuring Express application
- [ ] Using express.router() to create seperate router for courses
- [ ] And use this router inside the index app
#### 13. Project - restructure the app

## Asynchronous Javascript
#### 3. Callbacks
- [ ] Create setTimout function 2 sec after to execute
- [ ] Inside the function can call a callback function
- [ ] And pass the id and username object
- [ ] When calling the setTimout function we can pass the callback
#### 4. Callback hell or Christmas tree problem
#### 5. Named functions to rescue
#### 6. Promises
- [ ] create a new promise object with the param of call back fucntion
- [ ] That call back function has two param result and reject
- [ ] The result is an another call back function which call if the promise status is from pending to success status.
- [ ] The reject is an another call back function which call if the promise status is from pending to rejected status.
#### 7. Replacing callback with promises
- [ ] use the promise object to have the resolve and reject
- [ ] resolve each call functions
#### 8. Consuming promises
- [ ] Call the getUser, getRepos, getCommits and displayCommits in the chaining method.
- [ ] Using catch method to capture if any error in the promise.
- [ ] 
- [ ] 
- [ ] 
- [ ] 