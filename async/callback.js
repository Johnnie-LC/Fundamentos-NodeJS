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
const adios = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Adios ' + nombre)
    miCallback()
  }, 1000)
}

console.log('Iniciando Proceso')
hola('Johnnie', (nombre) => {
  adios(nombre, () => {
    console.log('Terminando Proceso')
  })
})

// de esta forma si dos fucniones son asicronas puedo contral que una se ejecute
// una despues de la otra si las anido

// hola('Johnnie', () => {})
// adios('Johnnie', () => {})
