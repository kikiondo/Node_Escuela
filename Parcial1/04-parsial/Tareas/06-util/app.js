
let EventEmitter = require('events');
let util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

// con inherits puedo hacer que Greetr herede de EventEmitter
util.inherits(Greetr, EventEmitter);

// se esta metiendo con el prototipo y se le esta asignando una nuevaa funcionalidad
Greetr.prototype.greet = function(data) {
    console.log(`${this.greeting}: ${data}`);
    // console.log(this.greeting + ':' + data);
    this.emit('greet', data);
}

let greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log(`Someone greeted ${data}`);
    // console.log('Somenone greeted: ' + data);
});

greeter1.greet('Vera');




