import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/slices/movieSlice';

const VideoBackground = ({movieID}) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
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
  return (
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground