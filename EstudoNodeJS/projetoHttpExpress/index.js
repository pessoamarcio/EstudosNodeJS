//no console iniciar o npm init e usar o -y para passar pelas etapas. Assim cria o pack de json
//em seguida instalar o package npm install express


const express = require('express')
const { dirname } = require('path')
const app = express() //express instanciado
const port = 3000

//usando o path com Express e a pasta Templates e acessando o arquivo HTML contido nele
const path = require('path')
const basePath = path.join(__dirname, 'templates') //irá concatenar o diretorio com a base do template. Serve para saber onde o html está


//O Middle Ware faz a verificação no meio
//vamos de exemplo se um usuario está logado
const checkAuth = function(req, res, next){
    req.authStatus = true

    if(req.authStatus){
        console.log("Pode seguir usuario logado")
        next()
    }else{
        console.log("Usuario não está logado")
    }

}
//para charmar a verificação a cima
app.use(checkAuth)


app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`) //vou devolver o arquivo achado pelo basePath na tela. O retorno é o arquivo do template
})

app.get('/turma/:id', (req, res) => {
    const id = req.params.id
    res.sendFile(`${basePath}/turma.html`)
    console.log(`O id da turma é ${id}`)
})

//levantando o servidor
app.listen(port, () =>{
    console.log("Servidor no ar com express")
})