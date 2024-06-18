const randomCode = require('../services/randomCode')

module.exports = function (request, headers) {
  return randomCode()
}
