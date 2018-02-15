const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      alias: 'address',
      demand: true,
      descrive: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// geocode.geocodeAddress(argv.address, (e, results) => {
//   if (e) {
//     console.log(e)
//   } else {
//     console.log(results)
//   }
// })

weather.getWeather()