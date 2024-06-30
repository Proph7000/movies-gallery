import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/moviedb-tech/movies',
})

export { api }
