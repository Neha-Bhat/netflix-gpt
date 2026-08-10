import React, { useEffect } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    useEffect(() => {
        console.log(title, movies)
    }, [title, movies])
  return (
    <div className='p-6'>
        <h1 className='text-3xl py-6 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {
                    movies && movies.map(m => <MovieCard key={m.id} posterPath={m && m.poster_path} />)
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList