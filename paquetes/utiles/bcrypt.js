const bcrypt = require('bcrypt')

const password = '1234Segura'

bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash)

  bcrypt.compare(password, hash, (err, res) => {
    // console.log(err)
    console.log(res)
  })
})

// un hash es una serie de pasos que cambia la cadena de texto por una serie de
// de caracteres que no se relacionan con la password inicial
