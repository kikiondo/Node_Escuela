

function greet(){
    console.log(`hi`);
}
greet();

function logGreeting(fn){    //esta funcion recibe otra funcion y para invocar esa funcion esta abajo
    fn();
} 
logGreeting(greet);

let greetMe= function(){    //esta variable se comporta como funcion
    console.log(`Hola Vera`);
} 
greetMe();


logGreeting(greetMe);

logGreeting(()=>{
    console.log(`Que onda Vera`);

});




