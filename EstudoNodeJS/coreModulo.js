const path = require('path')

const extensao = path.extname('texto.txt')

console.log(extensao)

const lerlinha = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout,

})

lerlinha.question('Qual é o seu time? ', (time) =>{
    if(time === 'Cruzeiro'){
        console.log("Zeiro")
    }
    lerlinha.close()
})