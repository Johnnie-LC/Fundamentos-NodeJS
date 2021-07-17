// los buffers son datos en binario
// dentro de alloc se establace la cantidad de bytes que deseamos usar
// let buffer = Buffer.alloc(6)
// let buffer = Buffer.from([1, 2, 3])
// con from se almacena lo que queremos en binario
// let buffer = Buffer.from('Hola')

// console.log(buffer.toString())
// los buffer son los datos mas crudos
// console.log(buffer)

// --

// las letras del abcedario
let abc = Buffer.alloc(26)
console.log(abc)

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97
}

console.log(abc.toString())
