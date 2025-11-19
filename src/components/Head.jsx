import React, { useEffect, useRef, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { Logo } from '../utils/constants';
import { signOut } from 'firebase/auth'


const Head = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        setUser(user)
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }))
        navigate('/browse')
      } else {
        navigate('/')
        dispatch(removeUser())
      }
    });

    //unsubscribe on unmount
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    console.log("Sign Out clicked");
    // Add sign-out logic here
    signOut(auth).then(() => {

    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <>
      {!user && <div className='absolute left-[8%] top-5'>
        <img
          src={Logo}
          alt="logo"
          className='w-42 h-20'
        />
      </div>}
      {user && <div className='flex justify-between gap-2 w-screen items-center'>
        <div className='flex gap-2'>
          <img src={Logo} alt="Netflix logo" className='w-42 h-20' />
          <div className='flex items-center gap-2'>
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
            <a href="#">Browse by Languages</a>
          </div>
        </div>
        <div className='flex gap-2 items-center pr-2'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMlaskpawLnP7H4Mg-1qLGM4PLwiQ7uPmeg&s"
            alt="search icon"
            className='w-10 h-10'
          />
          <a href="#">Children</a>
          <img
            src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTc3LnBuZw.png"
            alt="bell icon"
            className='w-10 h-10'
          />
          <img src={user.photoURL} alt=""
            className='w-10 h-10' />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkh54EH2IFEyvZeZJJ9K7yf0EwAM5pJyR4w&s"
            alt=""
            className='w-6 h-6'
            onClick={() => setOpen(!open)}
          />
          <ul className={`${open ? "block" : "hidden"} bg-white p-2 shadow rounded absolute right-0 mt-38 mr-2`}>
            <li>Accounts</li>
            <li>Help</li>
            <li>
              <button
                className='bg-[#E50914] w-28 cursor-pointer rounded-lg p-2 font-bold mt-2'
                onClick={handleSignOut}
              >
                Sign Out
              </button>

            </li>
          </ul>
        </div>
      </div>}
    </>
  );
};

export default Head;
