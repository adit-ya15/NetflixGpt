import { lazy,Suspense }  from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Login'
import Browse from './Browse'

const MovieDetail = lazy(() => import('./MovieDetail'))

const Body = () => {
  
  const appLayout = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: 'browse',
      element: <Browse />
    },
    {
      path:"details/:id",
      element: <Suspense fallback={<div className="min-h-screen bg-black text-white flex justify-center items-center">Loading...</div>}><MovieDetail/></Suspense>
    },
    
  ])

  return (
    <div>
      <RouterProvider router={appLayout} />
    </div>
  )
}

export default Body
