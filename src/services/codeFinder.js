const consts = require('../const')

module.exports = function (requestedCode) {
  let returnValue = null

  consts.CODES.forEach((element) => {
    if (requestedCode == element.http_code) {
      returnValue = element
    }
  })

  return returnValue
}
