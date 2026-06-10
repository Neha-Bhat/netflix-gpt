import React, { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  const unameRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn)
  }

  const handleButtonClick = () => {
    const validity = isSignIn ? checkValidData(isSignIn, emailRef.current.value, pwdRef.current.value) : checkValidData(isSignIn, emailRef.current.value, pwdRef.current.value, unameRef.current.value)
    setErrorMessage(validity)
  }

  return (
    <div>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg' alt='page background' />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-32 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='text-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            {
              errorMessage && (
                <div className='bg-red-300 border border-red-600 p-2 rounded-lg opacity-50'>
                  <span className='text-red-800'>{errorMessage}</span>
                </div>
              )
            }
            {
              !isSignIn && (
                <input type='text' ref={unameRef} placeholder='Username' className='p-2 my-4 w-full bg-gray-700' />
              )
            }
            <input type='text' ref={emailRef} placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
            <input type='password' ref={pwdRef} placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />
            <button className='p-2 my-4 bg-red-700 w-full' onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
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