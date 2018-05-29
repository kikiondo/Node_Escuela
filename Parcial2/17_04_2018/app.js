function greet(callback) {
    console.log('Hola'); 
    let data = {
        name: 'Juan Vazquez'
    }
    callback(data);
}

greet (function(data) {
    console.log('The callback was invoked');
    console.log(data)
});

greet (function(data) {
    console.log('A different callback was invoked');
    console.log(data.name)
});