var banana = require('./geet.js') 

banana()

//Como está recibiendo una funcion se convierte en una funcion ._.)/!!!
//Un objeto es definido como instancia de una clase.

//Key value pars{}
// OBJETOS 
var person = {
    fistname: 'Carlos',
    lastname: 'Vera',
    greet: function(){
        console.log(`Hello ${this.fistname}, tu apellido es ${this.lastname}?`)
    },
    caracteristicas: {
        estatura: 1.65,
        peso: 50,
        sexo: 'Hombre'
    }
}

//Solo mostrar
person.greet()

//Corchetes [] si es en tiempo de ejecución puedo igualar un stream a cualquier propiedad.
console.log(person['fistname']);
console.log(person['caracteristicas'].peso)



//HERENCIA por medio de prototypo

function Person(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.greet = function(){
    console.log(`Hello, ${this.firstname}, ${this.lastname}`)
}

var carlos = new Person('Carlos', 'Vera')
carlos.greet()

/// ===  comparación por tipo de objeto