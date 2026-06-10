import React, { useState } from 'react';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg' alt='page background' />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='text-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            {
              !isSignIn && (
                <input type='text' placeholder='Username' className='p-2 my-4 w-full bg-gray-700' />
              )
            }
            <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            <button className='p-2 my-4 bg-red-700 w-full'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            {
              isSignIn && (
                <p className='py-2 my-4 text-gray-500'>New to Netflix? <span className='text-blue-700 cursor-pointer' onClick={toggleSignIn}>Sign Up </span></p>
              )
            }
            {
              !isSignIn && (
                <p className='py-2 my-4 text-gray-500'>Already registered? <span className='text-blue-700 cursor-pointer' onClick={toggleSignIn}>Sign In </span></p>
              )
            }
        </form>
    </div>
  )
}

export default Login