const yargs = require('yargs');

// const geocode = require('./geo')
const weather = require('./weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    //Regresara un err o un resultado el callback

weather.getWeather(39.9396284, -75.18663959999999, (errorMessage, weatherResults) => {
    if(errorMessage)
        console.log(errorMessage)
    else
        console.log(JSON.stringify (weatherResults, undefined, 2) ) //Indentado
});