// este es un modulo
const saludar = () => {
  console.log('Hola mundo')
}

// esta es la sintaxis para exportar en node
// para exportar el modulo
module.exports = {
  saludar,
  prop1: 'Hola que tal',
}
