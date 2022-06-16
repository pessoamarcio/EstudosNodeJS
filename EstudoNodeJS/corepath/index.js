const path = require('path')

const pathArquivo = '/estudo/empresa/analise.pdf' 

console.log(path.dirname(pathArquivo)) // retorna o nome do diretorio

console.log(path.basename) //retornar o nome do arquivo

console.log(path.extname(pathArquivo)) // retorna a extensão

console.log(path.resolve('texto.txt')) //para localizar o caminho de um arquivo

//montando um diretorio
const diretorio = "resultados"
const arquivo = "exemplo.txt"
const meuPath = path.join('/', 'arquivos', diretorio, arquivo)
console.log(meuPath)