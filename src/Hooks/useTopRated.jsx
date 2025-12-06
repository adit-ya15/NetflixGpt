import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.topRated)

    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRated(json?.results));
    }

    useEffect(() => {
        !movies && getTopRated();
    },[])
}

export default useTopRated;