const fs = require('fs')
// buffer intermedio
const stream = require('stream')
const util = require('util')

let data = ''

// stream de lectura
// in this case we are going to read the input.txt file
let readableStream = fs.createReadStream(__dirname + '/input.txt')

// we had know that our data has a one codification, we can use
readableStream.setEncoding('UTF8')

// escuchar el evento
// readableStream.on('data', (chunk) => {
//   //   console.log(chunk.toString())
//   data += chunk
// })

// readableStream.on('end', () => {
//   console.log(data)
// })
// los streams sirve para mandar informacion a trozo, tiene sentido si se usa
// para paquetes grandes de informacion

// // stream de escriura
// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// buffer intermedio
const Transform = stream.Transform

function Mayus() {
  Transform.call(this)
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase()
  this.push(chunkMayus)
  callback()
}

let mayus = new Mayus()

readableStream.pipe(mayus).pipe(process.stdout)
