;
((c)=>{
    let numero1 = 10,
        numero2 = 5,
        resultado
        
    
    c(resultado = numero1 +numero2)

})(console.log)


//Normal
function sumar( num1, num2){
    let resultado

    return console.log(resultado = num1 + num2)
}


//Estandar -> 6 
(function sumar(num1, num2) {
    return console.log(num1 + num2)
})(5, 5)


   