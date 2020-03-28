const crypto = require('crypto')
module.exports = function generateHash() {
  return crypto.randomBytes(8).toString('HEX')
}