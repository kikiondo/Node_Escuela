function greet(callback){
    console.log('Hello')
    var data = {
        name: 'John Doe'
    }
    callback(data)
}

greet(
    function(data){
    console.log('The callback was invoked')
    console.log(data)
})

greet( function(data) {
    console.log(`A different calbback was invoked`)
    console.log(data.name)
})

// function banana(){
//     setTimeout(() => {
//         console.log('Que onda ._.)/')
//     }, 10000);
// }