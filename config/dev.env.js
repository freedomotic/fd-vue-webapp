var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  , FD_API_URL: '"http://51.77.212.115:9111/v3"'
})
