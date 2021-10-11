import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/products/",
    timeoutErrorMessage: 'Operation timed out',
    timeout: 10000
})
export default axiosInstance