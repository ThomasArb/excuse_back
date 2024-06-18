const codeFinder = require('../services/codeFinder')

module.exports = function (request, headers) {
  let code = codeFinder(request.params.code)
  
  if (code === null) {
    return headers.response({
      "http_code": null,
      "tag": null,
      "message": null
    }).code(404)
  }

  return code
}
