import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRated'
import useUpComingMovies from '../hooks/useUpComingMovies'

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpComingMovies()

  return (
    <div className='bg-black'>
      <Header />
      {
        showGptSearch ? <GptSearch />
        : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse