const axios = require('axios')

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address)

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`)
  .then(response => {
    JSON.stringify(response.data, undefined, 2)
    if (response.data.status === 'OK') {
      callback(undefined, {
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng
      })
    } else if (response.data.status === 'ZERO_RESULTS') {
      callback(undefined, 'Unable to find that address.')
    }
  }).catch(e => {
    callback('Unable to connect to google service')
  })
}




module.exports = {
  geocodeAddress
}
