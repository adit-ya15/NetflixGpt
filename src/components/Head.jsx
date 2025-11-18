import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { Logo } from '../utils/constants';

const Head = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

   useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
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

  return (
    <>
    <div className='absolute left-[8%] top-5'>
      <img
        src={Logo}
        alt="logo"
        className='w-42 h-20'
      />
    </div>
    
    </>
  );
};

export default Head;
