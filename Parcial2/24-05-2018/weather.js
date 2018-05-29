const request = require('request');

//Declaro mi función, el callback va a regresar los resultados que regrese
var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/35644aa4d216e85779c2f788c1dd70db/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
        if (error){
            // console.log('Unable to connect to Forecast.io server.');
            callback('Unable to connect to Forecast.io server.');
        }else if (response.statusCode === 400) {
            // console.log('Unable to fetch wather');
            callback('Unable to fetch wather');
        }else if(response.statusCode === 200) {
        //    callback(body.currently.temperature)
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    });
}

module.exports.getWeather = getWeather;