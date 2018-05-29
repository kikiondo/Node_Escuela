var obj = {
    name: 'Carlos Heredia',
    greet: function(param) {
        console.log('Hello ${ this.name }');
    }
}

obj.greet();
obj.greet.call({name: 'Juan Vazquez'});
obj.greet.apply({name: 'Juan Vazquez'});