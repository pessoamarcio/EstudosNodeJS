const fs = require('fs')

console.log("Inicio")

fs.writeFile('Arquivo1.txt', 'Olá mundo!', (err) => {  //recebe e escreve no arquivo
    setTimeout(function(){
        console.log("Arquivo Criado")
    }, 2000) //milisegundo = 2seg
})

console.log("Terminei")