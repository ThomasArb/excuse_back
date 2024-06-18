const healthHandler = require('./handlers/healthHandler')
const codeHandler = require('./handlers/codeHandler')
const allCodesHandler = require('./handlers/allCodesHandler')
const randomCodeHandler = require('./handlers/randomCodeHandler')

module.exports = {
  routes: [
    {
      method: ['GET'],
      path: '/all',
      handler: allCodesHandler
    },
    {
      method: ['GET'],
      path: '/random',
      handler: randomCodeHandler
    },
    {
      method: ['GET'],
      path: '/{code}',
      handler: codeHandler
    },
    {
      method: ['GET'],
      path: '/health',
      handler: healthHandler
    }
  ]
}
