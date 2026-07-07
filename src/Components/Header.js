import React from 'react'
import ProfileActions from './ProfileActions'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-middle'>
        <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
        {
          user && (
            <div className='p-4 flex'>
          <img className='w-8 h-8' alt='user icon' src={user?.photoURL} />
          <span className='text-white font-bold' onClick={handleSignOut}>Sign Out</span>
        </div>
          )
        }
        {
          console.log(user)
        }
    </div>
  )
}

export default Header