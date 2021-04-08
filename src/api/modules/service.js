const axios = require('axios')
const { Environment } = require('../../enviroment')
const apiUrl = `${Environment.getCurrent().endpoints.mailbox}`;
require('es6-promise').polyfill()

const service = {}

service.postLogin = params => axios.post(`${apiUrl}/user/login`, params)
  .then(response => response.data)
  .catch(error => error);

service.postCreateUser = params => axios.post(`${apiUrl}/user/createUser`, params)
  .then(response => response.data)
  .catch(error => error);

service.getCharacters = () => axios.get('https://rickandmortyapi.com/api/character')
  .then(response => response.data.results)
  .catch(error => error);

service.createFavorite = params => axios.post(`${apiUrl}/user/createFavorite`, params)
  .then(response => response.data)
  .catch(error => error);

service.getUserProfile = id => axios.get(`${apiUrl}/user/userInformation/${id}`)
  .then(response => response.data.data)
  .catch(error => error.response.data);

service.updateUserInformation = params => axios.post(`${apiUrl}/user/editUser`, params)
  .then(response => response.data)
  .catch(error => error.response);

service.getUsersList = () => axios.get(`${apiUrl}/user/usersList`)
  .then(response => response.data)
  .catch(error => error.response);
module.exports = service
