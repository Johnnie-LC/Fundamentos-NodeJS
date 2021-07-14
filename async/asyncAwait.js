const hola = async (nombre) => {
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

const hablar = async (nombre) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('Bla BLa Bla ...')
        resolve(nombre)
      }, 3000)
    } catch (error) {
      reject(error.message)
    }
  })
}
const adios = async (nombre) => {
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

const main = async () => {
  let nombre = await hola('Johnnie')
  await hablar()
  await adios(nombre)
}
console.log('Empizamos el proceso')
main()
console.log('Termina el proceso')
