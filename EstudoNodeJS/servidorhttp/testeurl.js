const url = require('url')

const meusite = 'http://www.investeflex.com.br/produto?produtos=criptomoeda'
const parseUrl = new url.URL(meusite) //para dividir as informações da URL e conseguir pegar as informações

//verificando os conteudos da URL
console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('produtos'))