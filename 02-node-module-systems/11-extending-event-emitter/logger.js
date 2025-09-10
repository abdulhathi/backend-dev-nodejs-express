const EventEmitter = require('events')

class Logger extends EventEmitter {
  log(message) {
    this.emit('messageLog')
    console.log(message)
  }
}

module.exports = Logger