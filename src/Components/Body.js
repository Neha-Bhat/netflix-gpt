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

  return (
    <>
        {/* <Header /> */}
        <RouterProvider router={appRoute} />
    </>
  )
}

export default Body