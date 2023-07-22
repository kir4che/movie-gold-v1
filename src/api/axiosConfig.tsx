import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://4272-180-217-230-50.ngrok-free.app',
  headers: { "ngrok-skip-browser-warning": "true" },
})

export default axiosConfig