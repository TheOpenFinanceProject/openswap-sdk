
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./openswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./openswap-sdk.cjs.development.js')
}
