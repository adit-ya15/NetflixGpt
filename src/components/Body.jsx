import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import Browse from './Browse'

const Body = () => {

    const appLayout = createBrowserRouter([
        {
            path:'/',
            element:<Login />
        },
        {
            path:'browse',
            element:<Browse />
        }
    ])

  return (
    <div>
      <RouterProvider router={appLayout} />
    </div>
  )
}

export default Body
