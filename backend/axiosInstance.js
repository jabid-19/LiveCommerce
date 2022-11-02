import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://golaiv86664.herokuapp.com',
})

// for dev
// export const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8800',
// })
