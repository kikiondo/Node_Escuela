


let obj = {
    greet: 'Hi'
}

// tres maneras de imprimir lo que dije mi variable obj
console.log(obj.greet);
console.log(obj['greet']);
let prop = 'greet';
console.log(obj[prop]);

//functions and arrays
let arr = [];
arr.push(function() {
    console.log('Hola world 1');
});

arr.push(function(){
    console.log('Hola world 2');
});

arr.push(function(){
    console.log('Hola world 3');
});

// por cada que sea funcion mando a llamar a la funcion de ese item
arr.forEach(function(item) {
    item();
});






