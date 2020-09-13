function http(url, method) {
  var promise = new Promise(function (resolve, reject) {
    // throw new Error('error in promise')
    setTimeout(function () {
      var data
      if (data) {
        resolve(data)
      } else {
        reject('No data')
      }
    }, 1000)
  })
  return promise
}

http('http://google.com', 'GET')
  .then(function (data) {
    console.log(data)
    throw new Error('error in promise.then')
  })
  .catch(function (err) {
    console.log('Catch:', err)
  })
