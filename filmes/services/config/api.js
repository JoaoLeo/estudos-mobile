import axios from 'axios';
import token from '../../token';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: `Bearer ${token}`
    }
    
})

export default api