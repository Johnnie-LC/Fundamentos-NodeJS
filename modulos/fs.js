// to return the module in the file, I could use the requiere with the name of the module
// file system: fs is used to return a file
// fs runs asynchronously

const fs = require('fs')

const leer = (ruta, cb) => {
  fs.readFile(ruta, (error, data) => {
    //leido
    // console.log(data)
    // to read like a string, we can use data.toString
    cb(data.toString())
  })
}

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.log('no he podido escribirlo ', error)
    } else {
      console.log('Se ha escrito correctamente')
    }
  })
}

const borrar = (ruta, cb) => {
  fs.unlink(ruta, cb)
}

// borrar(__dirname + '/archivo1.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
// leer(__dirname + '/archivo.txt', console.log)
