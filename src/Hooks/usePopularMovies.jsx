import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.popular)

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addPopular(json?.results));
    }

    useEffect(() => {
        !movies && getPopularMovies();
    },[])
}

export default usePopularMovies;