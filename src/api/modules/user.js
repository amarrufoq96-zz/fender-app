const axios = require('axios')
const configuration = require('../configuration')

const apiUrl = process.env.NODE_ENV === 'production' ? configuration.production : configuration.development

require('es6-promise').polyfill()

const user = {}

user.login = parameters => axios.post(`${apiUrl}/user/login`, parameters)
  .then(response => response)
  .catch(error => error)

user.insert = parameters => axios.post(`${apiUrl}/user`, parameters)
  .then(response => response.data)
  .catch(error => error)

module.exports = user
