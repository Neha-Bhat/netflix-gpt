import React, { useEffect } from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    useEffect(() => {
        console.log(posterPath)
    },[posterPath])
  return (
    <div className='w-48 pr-3'>
        <img alt="Movie Card" src={`${IMG_CDN_URL}${posterPath}`} />
    </div>
  )
}

export default MovieCard