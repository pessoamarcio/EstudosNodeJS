const http = require('http')
const fs = require('fs')

const porta = 3000

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(erro, data){  //aqui ele vai ler o arquivo html
        res.writeHead(200, {'Content-Type': 'text/html'}) //se retornar o status 200 (bloqueio)
        Response.write(data)  //retorna o data que é o html
        return res.end()  //finaliza

    })    
})

server.listen(porta, () =>{
    console.log("Servidor executando na porta" + porta)
})
