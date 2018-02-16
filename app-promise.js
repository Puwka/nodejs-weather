const yargs = require('yargs')
const axios = require('axios')

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

let encodedAddress = encodeURIComponent(argv.address)
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
let city

axios.get(geocodeUrl)
    .then((response) => {
        JSON.stringify(response.data, undefined, 2)
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.')
        }
        let lat = response.data.results[0].geometry.location.lat
        let lng = response.data.results[0].geometry.location.lng
        city = response.data.results[0].formatted_address
        let weatherUrl = `https://api.darksky.net/forecast/813c3cb86e24ff44a1880eb6ceb74999/${lat},${lng}?units=si`
        return axios.get(weatherUrl, city)
    })
    .then((response) => {
        let temperature = response.data.currently.temperature
        let apparentTemperature = response.data.currently.apparentTemperature
        console.log(`Current temperature in ${city}: ${temperature} C `)
        console.log(`But feels like: ${apparentTemperature}`)
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API server')
        } else {
            console.log(e.message)
        }
    })

