
var exportar = require('./greet')

function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

person.prototype.greet = function(){  //con el prototipo puedo agregar cosas al constructor sin afectarlo
    console.log('Hi, ' + this.firstname + ' ' + this.lastname );
};

let vera = new person('Carlos','Vera');
let Jane = new person('Jane','Doe');

// console.log(exportar());
console.log(vera);




