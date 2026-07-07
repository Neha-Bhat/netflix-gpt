import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './Header'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slices/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    const appRoute = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("auth state change")
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName, photoURL} = user;
            console.log(user)
            dispatch(addUser({uid, email, displayName, photoURL}))
            
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser())
        }
        });
    }, [])
  return (
    <>
        {/* <Header /> */}
        <RouterProvider router={appRoute} />
    </>
  )
}

export default Body