import React from 'react'
import { IoPlaySharp } from "react-icons/io5";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
                <span className='flex'><IoPlaySharp className='pt-2 text-2xl' />
                Play</span>
                </button>
            <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle