var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
  , FD_API_URL: '"http://104.236.92.231:9111/v3"'
})
