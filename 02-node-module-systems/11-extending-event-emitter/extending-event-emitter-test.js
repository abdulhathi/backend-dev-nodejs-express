const Logger = require('./logger')

const logger = new Logger()

logger.on('messageLog', () => {
  console.log('Listening the mssageLog')
})

logger.log('hi')
