import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://hackatom2022.herokuapp.com',
})
