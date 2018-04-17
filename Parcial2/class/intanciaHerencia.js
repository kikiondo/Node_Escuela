var Greetr = require('./greetr')


var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
    console.log(`Someone greeted! ${data}`) // ._.)/ llamo de emisor.
})

greeter1.greet('Vera');