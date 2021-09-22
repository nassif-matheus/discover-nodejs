const { EventEmitter } = require('events')
const ev = new EventEmitter()

console.log(ev)
// Pode-se utilizar o once para ouvir uma única vez
ev.on('saySomething', (message) => {
    console.log('I hear you:', message)
})
ev.emit('saySomething', 'Matheus')
ev.emit('saySomething', 'João')
ev.emit('saySomething', 'José')