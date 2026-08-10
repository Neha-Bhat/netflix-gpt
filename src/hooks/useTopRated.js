import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/slices/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    const getTopRatedMovies = async () => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const data = await resp.json()
        console.log(data)
        dispatch(addTopRatedMovies(data.results))
    }
}

export default useTopRatedMovies;
