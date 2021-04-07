// const axios = require('axios')
const configuration = require('../configuration')

const apiUrl = process.env.NODE_ENV === 'production' ? configuration.production : configuration.development

require('es6-promise').polyfill()

const service = {}

// service.getInvoices = () => axios.get('https://clongram-api-j2hwstk1d.now.sh/categories')
//   .then(response => response.data)
//   .catch(error => error)


module.exports = service
