const axios = require('axios')

let getWeather = () => {
  axios.get('https://api.darksky.net/forecast/813c3cb86e24ff44a1880eb6ceb74999/64.5950323,30.6115492?units=si')
    .then(response => {
      JSON.stringify(response.data, undefined, 2)
      console.log(response.data.currently.temperature)
    })
    .catch(e => {
      console.log(e)
    })
}

module.exports = {
  getWeather
}
