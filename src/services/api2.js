import axios from 'axios'


const api2 = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
})

export default api2