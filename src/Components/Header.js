import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slices/userSlice';
import { toggleGptSearchView } from '../utils/slices/gptSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid, email, displayName, photoURL}))
            navigate('/browse')
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser())
            navigate('/')
        }
        });
        return () => unsubscribe() //cleaning up on component unmount
    }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        // navigate('/')
      }).catch((error) => {
        // An error happened.
      });
  }

  const handleGPTSearchView = () => {
    dispatch(toggleGptSearchView())
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-middle'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo' />
        {
          user && (
            <div className='p-4 flex gap-1'>
              <button className='py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg' onClick={handleGPTSearchView}>GPT Search</button>
              <img className='w-8 h-8' alt='user icon' src={user?.photoURL} />
              <span className='text-white font-bold' onClick={handleSignOut}>Sign Out</span>
            </div>
          )
        }
    </div>
  )
}

export default Header