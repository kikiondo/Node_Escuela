var EventEmitter = require('events'),
    util = require('util');

function Greetr(data) {
    this.greeting = 'Hello word';
}

util.inherits(Greetr, EventEmitter);// Mi objeto va a heredar del EventEmitter

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data)
    this.emit('greet', data) //Estoy llamando al emisor de eventos.
}

var greeter1 =new Greetr();

greeter1.on('greet', function(data) {
    console.log(`Someone greeted! ${data}`) // ._.)/ llamo de emisor.
})

greeter1.greet('Tony');