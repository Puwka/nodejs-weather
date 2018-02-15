const axios = require('axios')

let getWeather = (lat, lng, callback) => {
  axios.get(`https://api.darksky.net/forecast/813c3cb86e24ff44a1880eb6ceb74999/${lat},${lng}?units=si`)
    .then(response => {
      JSON.stringify(response.data, undefined, 2)
      callback(undefined, {
        temperature: response.data.currently.temperature,
        apparentTemperature: response.data.currently.apparentTemperature
      })
    })
    .catch(e => {
      callback('Something went wrong')
    })
}

module.exports = {
  getWeather
}
