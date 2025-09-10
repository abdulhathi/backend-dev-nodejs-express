const os = require('os')

const totalMemory = os.totalmem()
const freeMemory = os.freemem()
const usedMemory = totalMemory - freeMemory

console.log('TotalMemory', totalMemory, totalMemory/1073741824)
console.log('FreeMemory', freeMemory, freeMemory/(1024*1024*1024))

console.log('usedMemory', usedMemory, usedMemory/1073741824) 