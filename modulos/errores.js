//  esto es en sincrono
const otraFuncion = () => {
  serompe()
}

const serompe = () => {
  return 3 + z
}

// en asincrono
const seRompeAsincrona = (cb) => {
  setTimeout(() => {
    try {
      return 3 + a
    } catch (error) {
      console.log('Error en mi funcion asincrona')
      cb(error.message)
    }
  }, 1000)
}

try {
  //   otraFuncion()
  seRompeAsincrona(console.log)
} catch (error) {
  console.error('vaya algo se ha roto ', error.message)
}

console.log('Esto de aqui esta al final')

//  un error en node rompe la ejecucion por completo en mi programa
