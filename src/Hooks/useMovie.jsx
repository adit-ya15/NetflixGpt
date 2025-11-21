import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants"

const useMovie = (movie_id) => {

    const [id, setId] = useState({});

    const getMovieId = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS)
        const json = await data.json();
        const trailer = json.results.filter((object) => object.type==='Trailer')
        setId(trailer[0].key)
    }

    useEffect(() => {
        getMovieId()
    },[])

    return id;
}

export default useMovie
