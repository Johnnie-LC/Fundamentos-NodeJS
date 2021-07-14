// las varaibles de entorno sirve para meter informacion fuera de nuestro programa
// al programa

// para acceder a las variables de entorno debemos usar process.env y la variable deseada en mayusculas
// y enterminal podemos asignar un valor a la variable, por ejemplo: NOMBRE='Johnnie'
// Para dar un valor por defecto a nuestra variabla podemos usar ||
// Como buenas practicas, las variables de entorno se recomienda escribirlas en mayusculas
// en el caso que sea dos palabras se separan con un guion bajo
let nombre = process.env.NOMBRE || 'Sin Nombre'
let web = process.env.MI_WEB || 'no tengo web'
console.log('Hola ' + nombre)
console.log('Mi Web es ' + web)
