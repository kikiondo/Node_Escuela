//var Emitter = require('./emitter') 
var Emitter = require('events'); //Voy a cambiar la referencia a un modulo de node
var eventConfig = require('./config').events; //Tiene todos los magic de events


var emtr = new Emitter()

emtr.on(eventConfig.GREET, function(){
    console.log('Que onda mi may ._.)/ ')
})

emtr.on('greet', function () {
    console.log('Que onda mi jorge ._.)/ ')
})

console.log('Hello!')
emtr.emit('greet')