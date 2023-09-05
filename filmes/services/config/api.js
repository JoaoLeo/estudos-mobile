import axios from 'axios';

const token = process.env.TOKEN;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`
    }
    
})

export default api