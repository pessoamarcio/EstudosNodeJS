//primeiro iniciar o npm init
//depois instalar o inquirer e configuar o start no package json

const inquirer = require("inquirer")
const fs = require('fs')
const { threadId } = require("worker_threads")

console.log("Iniciamos nosso app")
operacao()

function operacao(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: "O que você deseja?",
            choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],  //o que vc quer fazer?
        }

    ]).then((answer) =>{    //resposta chamando o menu
        const action = answer['action']
    
        if(action === 'Criar Conta'){
            criarConta()
        }else if(action === "Depositar"){
            depositar()

        }else if(action === "Consultar Saldo"){
            verificarSaldo()
            
        }else if(action === "Sacar"){
            sacarDinheiro()
            
        }else if(action === "Sair"){
            console.log("Obrigado por acessar")
            process.exit
        }
    
    }).catch(err => console.log(err))  //caso gere erro

}
//função para dar o caminho para criar conta
function criarConta(){
    console.log("Defina as informações da sua conta")
    definicaoConta()
}
function definicaoConta(){
    inquirer.prompt([
        {
            name: 'nomeconta',
            messagem: 'Digite um nome para sua conta: '
        }
    ]).then(answer => {
        const nomeConta = answer['nomeconta']

        if(!fs.existsSync('contas')){   //para verificar se existe uma conta. Neste caso não pode existir
            fs.mkdirSync('contas')      //se não existir ele vai criar
        }

        if(fs.existsSync(`contas/${nomeConta}.json`)){      //se a conta existir vem para esta funçao
            console.log("Já existe uma conta com este nome")
            return criarConta()
        }
        fs.writeFileSync(`contas/${nomeConta}.json`, '{"saldo": 0}')  //definir a conta como zero

        operacao() //chamando a função novamente
        
    }).catch(err => console.log(err))
}

function verificarConta(nomeConta){     //verificar se existe
    var flag =false
    if(fs.existsSync(`contas/${nomeConta}.json`)){
        console.log("Verificamos sua conta. Pode seguir")
        flag = true
    }else{
        console.log("Essa conta não existe")
        flag = false
    }
    return flag
}

//função para depositar
function depositar(){
    inquirer.prompt([{
        name: 'nomeConta',
        message: 'Qual o nome da sua conta?'

    }]).then((answer) =>{    //a resposta vai ser tratada a baixo
        const nomeConta = answer['nomeConta']
        if(verificarConta(nomeConta)){
            //infome o valor que quer depositar
            inquirer.prompt([{

                name: 'valor',
                message: 'Qual o que você quer depositar?' 
            }]).then((answer) => {
                const valor = answer['valor']
                adicionarValor(nomeConta, valor)
                operacao()

            }).catch(errc => console.log(err))
        }else{
            //se a conta não existe volta para o depositar
            depositar()

        }
    })
}
//função para ler arquivos
function getConta(nomeConta){
    const contaJSON = fs.readFileSync(`contas/${nomeConta}.json`,{
        encoding: 'utf-8',      //para entender os acentos
        flag: 'r',              //para leitura e escrita
    })
    return JSON.parse(contaJSON)
}

//adicionar o valor a conta
function adicionarValor(nomeConta, valor){
    const conta = getConta(nomeConta);
    if(!conta){
        console.log("Não foi possivel acessar a conta")
        return depositar()
    }
    conta.saldo = parseFloat(valor) + parseFloat(conta.saldo)  //função para adicionar o valor

    //para adicionar valor no arquivo JSON
    fs.writeFileSync(
        `contas/${nomeConta}.json`,
        JSON.stringify(conta),
        function(err){
            console.log(err)    //caso der um erro
        }
    )
}

function verificarSaldo(){
    inquirer.prompt([
        {
        name: 'nomeConta',
        message: 'Qual o nome da conta?',
        }

    ]).then((answer) => {
        const conta = answer['nomeConta']
        if(verificarConta(conta)){
            const dadosConta = getConta(conta)
            console.log(dadosConta.saldo)
        }
        operacao()
    })
}
//para sacar dinheiro
function sacarDinheiro(){
    inquirer.prompt([
        {
            name: 'nomeConta',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const nomeConta = answer['nomeConta']
        if(verificarConta(nomeConta)){                  //se a conta existe. Quanto quer sacar?
            inquirer.prompt([{
                name: 'valor',
                message: "Qual o valor que você quer sacar?"

            }]).then((answer) => {
                const valor = answer['valor']
                retirada(nomeConta, valor)
            })
        }
    })

}
//para retirar o valor da conta
function retirada(nomeConta, valor){
    //verificando a conta novamente
    const conta = getConta(nomeConta);
    if(!conta){                         //usando negação
        console.log("Tem um problema na conta")
        return sacarDinheiro()
    }
    //verificar se a retirada é maior que o saldo
    if(conta.saldo < valor){
        console.log("Você não tem saldo suficiente.")
        return sacarDinheiro()
    }
    conta.saldo = parseFloat(conta.saldo) - parseFloat(valor)   //caso tudo tiver correto

    //para gravar no arquivo json
    fs.writeFileSync(`contas/${nomeConta}.json`,
    JSON.stringify(conta),
    function(err){
        console.log(err)
    },
    )
    console.log(`Foi realizado um saque de ${valor} da sua conta!`)
    operacao()
}