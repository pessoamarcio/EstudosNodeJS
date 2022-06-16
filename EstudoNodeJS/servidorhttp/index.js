const http = require('http')

const porta = 3000 //porta comum

const server = http.createServer((req,res) => {  //requisição e resposta da requisição
    res.write("Meu texto que inclui")
    res.end() //para fechar
})
//Acima foi para criar o server
//abaixo para rodar em uma porta
server.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`) //$ é um modo alternativo de escrever
})