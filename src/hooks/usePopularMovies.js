import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/slices/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const usePopularMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getPopularMovies()
    }, [])

    const getPopularMovies = async () => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const data = await resp.json()
        console.log(data)
        dispatch(addPopularMovies(data.results))
    }
}

export default usePopularMovies;
