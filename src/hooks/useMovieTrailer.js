import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/slices/movieSlice";

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getMovieVideos()
    }, [])
    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, API_OPTIONS)
            const json = await data.json()
            const filteredData = json.results.filter(vid => vid.type === 'Trailer')
            const trailer = filteredData.length ? filteredData[0] : json.results[0]
            dispatch(addTrailerVideo(trailer))
        } catch(err) {

        }
    }
}

export default useMovieTrailer;