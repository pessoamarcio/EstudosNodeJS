//indicar os modulos a ser usados
const http= require("http")
const fs = require('fs')
const url = require('url')

//indicar a porta
const porta = 3000

//criando um servidor
const server = http.createServer((req, res) =>{

    const urlRq = url.parse(req.url, true) //vai pegar a requisição e transformar tudo em JSON

    const arquivo = urlRq.pathname.substring(1) //saber o nome do arquivo e o valor

    //verificando se o arquivo é do tipo html
    if(fs.existsSync(arquivo)){
        if(arquivo.includes('html')){
            fs.readFile(arquivo, function(err, data){        //ler o arquivo caso não der erro retorna o arquivo 
                res.writeHead(200, {'Content-Type' : 'text/html'})     //se retornar sem bloqueio, irá retornar o arquivo em html
                res.write(data)        //ira escrever o arquivo (onde data é o arquivo)
                return res.end()       //agora retorna o arquivo
            })
        }
    }else{      //se não achar o arquivo vai para o erro 404
        fs.readFile('404.html', function(err,data){
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.write(data)
            return res.end()
        })
    }
})

//levantar a portas
server.listen(porta, () => {
    console.log("Servidor no ar")
})


