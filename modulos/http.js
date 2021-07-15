const http = require('http')

http.createServer(router).listen(3000)

console.log('Escuchando http en el puerto 3000')

function router(req, res) {
  console.log('nueva peticion')
  console.log(req.url)

  switch (req.url) {
    case '/hola':
      res.write('<h1>Hola Que tal</h1>')
      res.end()
      break

    default:
      res.write('Error 404: No se lo que quieres')
      res.end()
  }

  //   res.writeHead(201, { 'Content-Type': 'text/plain' })

  //   // escribir respuesta al usuario
  //   res.write('Hola, ya se usar http de NodeJS')

  //   res.end()
}
