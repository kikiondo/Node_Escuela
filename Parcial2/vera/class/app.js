//Cambio de codigo es llamado refactor

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}

var vera = new Person('Carlos', 'Vera')
vera.greet()