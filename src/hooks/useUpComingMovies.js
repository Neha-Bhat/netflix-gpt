import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/slices/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useUpComingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getUpComingMovies()
    }, [])

    const getUpComingMovies = async () => {
        const resp = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const data = await resp.json()
        console.log(data)
        dispatch(addUpcomingMovies(data.results))
    }
}

export default useUpComingMovies;
