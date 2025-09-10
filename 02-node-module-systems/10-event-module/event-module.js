const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

// ^ Listener message in callback
eventEmitter.on('requestReceived', () => {
  console.log('Listening the event')
})

// ^ Raise the event
eventEmitter.emit('requestReceived')