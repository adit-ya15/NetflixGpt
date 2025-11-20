import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const useNowPlayingMovies = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])

    const getNowPlayingMovies = async () => {
        const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',API_OPTIONS)
        const json = await movies.json();
        setNowPlayingMovies(json.results);
    }

    useEffect(() => {
        getNowPlayingMovies()
    },[])

    return nowPlayingMovies;
}

export default useNowPlayingMovies
