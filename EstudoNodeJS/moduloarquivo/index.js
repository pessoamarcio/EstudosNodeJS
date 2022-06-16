const fs = require('fs')

fs.readFile('arquivo.txt', 'utf8', (err, data) => {  //o primeiro é para ler e o segundo é o tipo. O terceiro é o que vai acontecer se tiver ok

    if(err){
        console.log(err) //caso der erro
    }
    console.log(data) //se tiver tudo ok
}) 