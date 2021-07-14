// function soyAsincrona(miCallback) {
//   console.log('Hola, Soy una funcion asincrona')
//   setTimeout(() => {
//     console.log('Estoy siendo asincrona')
//     miCallback()
//   }, 1000)
// }
// console.log('Iniciando Proceso')
// soyAsincrona(() => {
//   console.log('Terminando Proceso')
// })

// // los objetos son de primera clase (nivel)

const hola = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('hola ' + nombre)
    miCallback(nombre)
  }, 1500)
}

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log('Bla BLa Bla ...')
    callbackHablar()
  }, 1000)
}
const adios = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Adios ' + nombre)
    miCallback()
  }, 1000)
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

// --
console.log('Iniciando Proceso')
hola('Johnnie', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado')
  })
})

// hola('Johnnie', (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Terminando Proceso')
//         })
//       })
//     })
//   })
// })
