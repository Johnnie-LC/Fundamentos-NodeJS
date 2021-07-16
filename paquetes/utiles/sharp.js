// libreria de manejo de imagenes
const sharp = require('sharp')
sharp('original.png').resize(80).grayscale().toFile('resized.png')
