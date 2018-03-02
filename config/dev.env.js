var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  , FD_API_URL: '"http://174.138.4.3:9111/v3"'
})
