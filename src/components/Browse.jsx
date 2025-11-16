import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router'

const Browse = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    console.log("Sign Out clicked");
    // Add sign-out logic here
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div>
      <button
        className='bg-[#E50914] w-32 cursor-pointer rounded-lg p-2 mb-5 font-bold'
        onClick={handleSignOut}
      >
        Sign Out
      </button>
      
    </div>
  )
}

export default Browse
