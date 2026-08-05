import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieID}) => {
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
    useMovieTrailer(movieID)
  return (
    <div className='w-screen aspect-video'>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground