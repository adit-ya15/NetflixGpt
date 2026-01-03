import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
const Login = lazy(() => import('./Login'))
const Browse = lazy(() => import('./Browse'))
const MovieDetail = lazy(() => import('./MovieDetail'))

const Body = () => {

  const appLayout = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<div className="bg-black h-screen text-white"></div>}><Login /></Suspense>
    },
    {
      path: 'browse',
      element: <Suspense fallback={<div className="bg-black h-screen text-white"></div>}><Browse /></Suspense>
    },
    {
      path: "details/:id",
      element: <Suspense fallback={<div className="min-h-screen bg-black text-white flex justify-center items-center">Loading...</div>}><MovieDetail /></Suspense>
    },

  ])

  return (
    <div>
      <RouterProvider router={appLayout} />
    </div>
  )
}

export default Body
