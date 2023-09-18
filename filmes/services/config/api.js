import axios from 'axios';
//import {TOKEN} from 'react-native-dotenv'
import token from '../../token';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`
    }
    
})

export default api