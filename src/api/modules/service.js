const axios = require('axios')
const { Environment } = require('../../enviroment')
const apiUrl = `${Environment.getCurrent().endpoints.mailbox}`;
console.log(apiUrl, '<-----apiUrl')
require('es6-promise').polyfill()

const service = {}

service.postLogin = params => axios.post(`${apiUrl}/user/login`, params)
  .then(response => response.data)
  .catch(error => error);

module.exports = service
