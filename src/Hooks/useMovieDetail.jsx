import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetail } from "../utils/movieSlice";

const useMovieDetail = (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getDetails = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,API_OPTIONS);
            const json = await data.json();
            dispatch(addMovieDetail(json));
        }
        getDetails();
    },[movieId])
}

export default useMovieDetail;