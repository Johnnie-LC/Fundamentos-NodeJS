// ejecutar cualquier comando en la terminal
const { exec, spawn } = require('child_process')

// exec('ls -la', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err.message)
//     return false
//   }
//   console.log(stdout)
// })

// exec('node consola.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err.message)
//     return false
//   }
//   console.log(stdout)
// })

let proceso = spawn('ls', ['-la'])

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', (dato) => {
  console.log('¿Está muerto?')
  console.log(proceso.killed)
  console.log(dato.toString())
})

proceso.on('exit', () => {
  console.log('El proceso termino')
  console.log(proceso.killed)
})
