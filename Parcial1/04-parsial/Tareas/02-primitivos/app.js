// cuando se pasa por valor
function change(b) {
    b=2;
}

let a=1;
change(a);
console.log(a);

//pasado como referencia
function changeObj(d) { 
    d.prop1= function() {};
    d.prop2 = {};
}

let c = {};
c.prop1 = {};
changeObj(c);
console.log(c);



//IIFE funciones que se ejecutan luego luego
let firstname= 'Carlos';
    /*este se comporta como un modulo y tiene protegido el
    codigo con los parentesis al inicio y al final, esto es considerado como un IIFE */
(function (lastname) {    
    let firstname= 'Vera'; 
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);






