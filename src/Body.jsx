import React from 'react'
import { createBrowserRouter } from 'react-router'

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
      
    </div>
  )
}

export default Body
