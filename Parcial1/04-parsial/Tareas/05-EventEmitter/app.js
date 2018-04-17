

// con este require estoy creando un nuevo objeto de otro archivo 
// let Emitter = require('./emitter');
// este es un emisor de eventos y es un core de node.js
let Emitter = require('events');
// lo estoy requiriendo pero a la vez estoy como diciendo que voy a usar las magicString de events
let eventConfig = require('./config').events;


let emtr=new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occurred!!');
});

console.log('Hello world');
emtr.emit('greet');




