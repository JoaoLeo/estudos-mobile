import axios from 'axios';
//import {TOKEN} from 'react-native-dotenv'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDkxZDFjNTlmMDQ5MTMwZDk2NGUyNjVhZmQxZjQ3NyIsInN1YiI6IjY0MzQ4ZTBkOWI4NjE2MDBkNjJiOTYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uoiBXTksAh3zpidCpHjIZx1csaHCRuyitVcJd46z1tk`
    }
    
})

export default api