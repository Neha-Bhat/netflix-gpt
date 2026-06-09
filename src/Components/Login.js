import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg' alt='page background' />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0'>
            <input type='text' placeholder='Email Address' className='p-2 m-2' />
            <input type='password' placeholder='Password' className='p-2 m-2' />
            <button className='p-4 m-4'>Sign In</button>
        </form>
    </div>
  )
}

export default Login