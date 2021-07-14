const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('hola ' + nombre)
        resolve(nombre)
      }, 1500)
    } catch (error) {
      reject(error.message)
    }
  })
}

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('Bla BLa Bla ...')
        resolve(nombre)
      }, 1000)
    } catch (error) {
      reject(error.message)
    }
  })
}
const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('Adios ' + nombre)
        resolve()
      }, 1000)
    } catch (error) {
      reject(error.message)
    }
  })
}

const conversacion = (nombre, veces, callback) => {
  if (veces >= 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback)
    })
  } else {
    adios(nombre, callback)
  }
}

console.log('Inciando el proceso')
hola('Johnnie')
  .then(hablar)
  .then(adios)
  .catch((mensaje) => {
    console.log('Error: ' + mensaje)
  })
