//criação de evento
const EvenEmitter = require('events')
const eventEmitter = new EvenEmitter()

eventEmitter.on('iniciar', () => {  //para iniciar o evendo usa-se o 'on'
    console.log("Iniciando o evento")
})

console.log("Começando a app");
eventEmitter.emit('iniciar')

console.log("Finalizando o app");