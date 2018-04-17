//Metodo call es para sobre escribir sobre el this

var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name}`)
    }
}

//Se pasa por referencia
obj.greet();
obj.greet.call({ name: 'banana'}); // Necesita enviar lista de aprametros separados por comas
obj.greet.apply({ name: 'banana2'}); // Necesio especificar un pequeño array separado por comas

/*
Cuando escribio estas funciones apunta al this.
Es para tomar metodos prestados ._.)7
*/