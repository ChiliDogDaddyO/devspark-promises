function http(url, method) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var data = 'the answer'
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
  })
  .catch(function (err) {
    console.log(err)
  })
