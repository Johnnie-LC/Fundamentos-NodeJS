// no hace falta usar la linea de abajo ya esta en globles
// const p = require('process')

// process  is used to listen od process

// process.on('beforeExit', () => {
//   console.log('El proceso va a terminar')
// })

// el exit sale del event loop
// process.on('exit', () => {
//   console.log('Ale, el proceso acabó')
//   setTimeout(() => {
//     console.log('esto no se va a ver nunca')
//   }, 0)
// })

// ecepcion a capturar
// process.on('uncaughtException', (err, origen) => {
//   console.error('Vaya se nos ha olvidado capturar un error: ')
//   console.error(err.message)
// })

// funcionQueNoExiste()
// console.log('Si el error no se recoje, no sale')

// promesas que se han rechazado y no tienen un catch
// process.om('uncaughtRejection')
