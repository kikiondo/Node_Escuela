//Function statement
function greet(){
    console.log('hi');
}
greet()

function logGreeting(fn){
    fn() //Como es una funcion la invoco con los parentesis !!!!
}
logGreeting(greet)

//function expression
 var greetMe = function(){
     console.log('Hi Tony');
 }
 greetMe()

 //It's first class
 logGreeting(greetMe)

 //use a function expression on the fly -> Màs sencillo que lo de arriba ._.)/(Mejorada con arrow function)
 logGreeting(function(){
     console.log('Hello Tony!')
 })
 
 logGreeting(()=>{
     console.log('Hello Tony!')
 })