let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Use numbers')
      }
    }, 1500)
  })
}
asyncAdd(5, '3').then((res) => {
  console.log('Result: ', res)
  return asyncAdd(res, 33)
}).then((res) => {
  console.log(res)
}).catch(e => {
  console.log('Use numbers')
})

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey! It Worked!');
//     reject('Unable to fulfill promise')
//   }, 2500)
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message)
// }, (e) => {
//   console.log('Error: ', e)
// })
