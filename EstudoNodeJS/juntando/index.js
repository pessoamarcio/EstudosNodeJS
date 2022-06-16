const minimist = require("minimist")

console.log(argumentos)

const somar = require('./calculo').conta

const x = parseInt(argumentos ['x']);
const y = parseInt(argumentos ['y']);


somar(x,y)
