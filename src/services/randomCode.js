const consts = require('../const')

function getRandomInt() {
  return Math.floor(Math.random() * consts.CODES.length);
}

module.exports = function () {
  return consts.CODES[getRandomInt()]
}
