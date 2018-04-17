//Function expression 
//Los modulos 
/*Conjunto de dificiniciones cuyo hambito està protegido */
var firstname = 'Jane';

(function (lastname){
    var firstname = 'John'
    console.log(firstname)
    console.log(lastname)
}('Doe')) //IIFE protected -> su scope

console.log(firstname)

// //HOISTI
// function pepe() {
//     a = 4;
//     return a;
//     var a;
// }

// pepe() == 4;
