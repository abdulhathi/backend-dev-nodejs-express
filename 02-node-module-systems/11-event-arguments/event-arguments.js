const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('requestReceived', (eventArg) => {
  console.log('Event listenened', eventArg)
})

eventEmitter.emit('requestReceived', { id: 1, url: 'http://abdulhathi.com' })
