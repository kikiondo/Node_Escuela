var util = require('util');

function Person() {
    this.firstname = 'Carlos'
    this.lastname = 'Vera'
}

Person.prototype.greet = function() {
    console.log('Hello '+ this.firstname + ' ' + this.lastname);
    console.log(this.badgenumber);
}

//Llamo al superconstructor pasar la direccion del this al otro this para poder inicializar los valores (funciones y valores)
function Policeman() {
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
let officer = new Policeman();
officer.greet();