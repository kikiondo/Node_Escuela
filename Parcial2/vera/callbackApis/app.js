const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=28979',
    json: true
}, (error, response, body)=>{
    // console.log(JSON.stringify(response, undefined, 2)) //Desglosa la información de objetos
    console.log(`Address ${body.results[0].formatted_address}`)
})

//Tarea imprimir la latitud y longitud