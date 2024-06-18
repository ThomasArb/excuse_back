module.exports = function (request, header) {
  let response = {
    service: 'excuses_de_dev_back',
    status: 'available',
    handler: 'healthHandler'
  }
  return response
}
