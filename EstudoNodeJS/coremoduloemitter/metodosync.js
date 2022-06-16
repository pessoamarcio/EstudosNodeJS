const fs = require('fs') //metodo de arquivo

console.log("Inicio")

fs.writeFileSync('Arquivo.txt', "Escrevendo no arquivo") //ele vai escrever no arquivo txt criado

console.log("Final")