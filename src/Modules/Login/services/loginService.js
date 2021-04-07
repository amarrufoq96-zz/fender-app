import apiRoutes from '../../apiRoutes'

import cookie from 'js-cookie'

const handleResponse = response => {
  if (response.success === 1) return response
  throw new Error(response.message)
}

const returnData = result => result.data

const getHeaders = () => ({
  Accept: 'application/json',
  'content-type': 'application/json',
  token: cookie.get('token')
})

const parseResponse = response => {
  return response.json()
    .then(handleResponse)
}

export const returnFirstElement = data => {
  if (data.length > 0) return data[0]
  return {}
}

export const request = ({ route, method = 'GET', headers = getHeaders(), body, extractData = true, bodyAsJson = true }) => {
  const formatResponse = data => extractData ? returnData(data) : data
  if (body && bodyAsJson) body = JSON.stringify(body)
  return fetch(route, {
    method,
    headers,
    body
  })
    .then(parseResponse)
    .then(formatResponse)
}

const returnFirstlement = data => data[0]

export const login = body => {

    request({
        route: apiRoutes.login(),
        method: 'POST',
        body: body,
        headers: {
            Accept: 'application/json',
            'content-type': 'application/json'
        }
    })
    .then(returnFirstlement)
}
