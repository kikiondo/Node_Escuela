function greet(callback) {
    console.log('Hello')
    callback() 
    console.log('Hello')
}


greet(
    ()=> {
        setInterval( ()=>  console.log('Que onda') , 3000);
    }
)