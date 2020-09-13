function http(url, method, successCallbacck, errorHandler) {
  setTimeout(function () {
    var data = 'the answer'
    if (data) {
      successCallbacck(data)
    } else {
      errorHandler('No data')
    }
  }, 1000)
}

http(
  'http://google.com',
  'GET',
  function (data) {
    console.log(data)
  },
  function (err) {
    console.log(err)
  }
)
