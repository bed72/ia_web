import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 1000,
  responseType: 'json'
})
