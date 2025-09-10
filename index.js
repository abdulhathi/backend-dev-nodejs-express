// const http = require('http')

// http.createServer((req, res) => {
//   res.write('hello from server')
//   res.end()
// }).listen(6000)

function sayHello() {
  console.log('Hi hello')
}

sayHello()

// Javascript we have the window as global object
// Node js we have the global as a global object

global.console.log("hi how are you.")

// ^ Module object
console.log(module)

