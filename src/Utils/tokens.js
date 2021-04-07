/* global localStorage */

import axios from 'axios'
import jwtDecode from 'jwt-decode'

export const setHeaders = token => {
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`
  else delete axios.defaults.headers.common.Authorization
}

export const setToken = token => {
  if (!token) localStorage.removeItem('token')
  else localStorage.setItem('token', token)
}

export const decode = token => {
  try {
    return jwtDecode(token)
  } catch (error) {
    return { id: false }
  }
}

export const decodedToken = () => {
  try {
    return jwtDecode(localStorage.token)
  } catch (error) {
    return { id: false }
  }
}

export const setTokenExpirationInterceptor = onError => {
  axios.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : 500
    const data = error.response ? error.response.data : {}
    switch (status) {
      case 401:
        setToken()
        setHeaders()
        onError()
        return Promise.resolve(Object.assign({}, error, { data }))
      default: return Promise.reject(Object.assign({}, { status, data }))
    }
  })
}
