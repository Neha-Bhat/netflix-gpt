import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './Header'

const Body = () => {
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
        <Header />
        <RouterProvider router={appRoute} />
    </>
  )
}

export default Body