const axios = require('axios')

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
  let encodedAddress = encodeURIComponent(address)

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`)
  .then(response => {
    JSON.stringify(response.data, undefined, 2)
    if (response.data.status === 'OK') {
      resolve({
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng
      })
    } else if (response.data.status === 'ZERO_RESULTS') {
      reject(undefined, 'Unable to find that address.')
    }
  }).catch(e => {
    reject('Unable to connect to google service')
  })
  })
}

geocodeAddress('190000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}).catch(e => {
  console.log(e)
})
