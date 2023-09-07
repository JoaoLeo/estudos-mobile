import api from "./config/api"

const api_movie = `${api}/movie`

function listNowPlaying(){
    return `${api_movie}/now_playing`
}

const listPopular = `${api_movie}/popular`


const listTopRated = () => {

}
export default listPopular;