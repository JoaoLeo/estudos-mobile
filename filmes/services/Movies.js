import api from "./config/api"

const api_movie = `${api}/movie`

const listNowPlaying = (numberPages,language) => { 
    return `${api_movie}/now_playing?page=${numberPages}&language=${language}`
}

const listPopular = (numberPages,language) =>{
    return `${api_movie}/popular?page=${numberPages}&language=${language}`
}

const listTopRated = () => {

}
export {listNowPlaying, listPopular};