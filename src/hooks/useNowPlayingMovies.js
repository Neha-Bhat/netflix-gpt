import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/slices/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getNowPlayingMovies()
    }, [])

    const getNowPlayingMovies = async () => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await resp.json()
        console.log(data)
        dispatch(addNowPlayingMovies(data.results))
    }
}

export default useNowPlayingMovies;
