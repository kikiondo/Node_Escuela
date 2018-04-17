
// este es el constructor de la funcion, events es una propiedad de mi funcion 
// y la estoy creando ahi misma con this.events={}, 
function Emitter() {
    this.events={};
}

Emitter.prototype.on=function(type, listener) {
    this.events[type]=this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit=function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

// con este exporto este modulo o clase para poderlo usar en otro archivo con require
module.exports=Emitter;







