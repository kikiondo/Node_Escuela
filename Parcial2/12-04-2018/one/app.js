'use strict';

class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
    greet() {
        console.log('Hi '+ this.firstname + ' ' + this.lastname);
    }
}

var Juan = new Person('Juan' , 'Vazquez');
Juan.greet();

var Carlos = new Person('Carlos', 'Heredia');
Carlos.greet();


console.log(Juan._proto_);
console.log(Carlos._proto_);
console.log(Juan._proto_===Carlos._proto_);
