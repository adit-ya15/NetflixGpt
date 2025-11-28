import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { Logo } from '../utils/constants';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faCaretDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { toggleGpt } from '../utils/GptSlice';
import choosenLanguage from '../Translate/language';


const Head = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const selectedLang = useSelector((store) => store.lang.identifier)
  const isGpt = useSelector((store) => store.gpt.isGpt)
 
  

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

  const handleGptSearch = () =>{
    dispatch(toggleGpt())
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
      {user && <div
  className={`flex justify-between items-center text-white fixed top-0 left-0 w-full z-20 py-2 px-6 
    `}
>
        <div className='flex gap-2'>
          <img src={Logo} alt="Netflix logo" className='w-42 h-20' />
          <div className='flex items-center gap-2'>
            <a href="#">{choosenLanguage[selectedLang].Home}</a>
            <a href="#">{choosenLanguage[selectedLang].TvShows}</a>
            <a href="#">{choosenLanguage[selectedLang].Movies}</a>
            <a href="#">{choosenLanguage[selectedLang].NewPopular}</a>
            <a href="#">{choosenLanguage[selectedLang].MyList}</a>
            <a href="#">{choosenLanguage[selectedLang].Browselanguages}</a>
          </div>
        </div>
        <div className='flex gap-4 items-center pr-2'>

          <FontAwesomeIcon
            icon={isGpt? faHouse:faSearch}
            className='text-white text-xl cursor-pointer'
            onClick={handleGptSearch}
          />

          <a href="#">{choosenLanguage[selectedLang].Children}</a>

          <FontAwesomeIcon
            icon={faBell}
            className='text-white text-xl cursor-pointer'
          />

          <img
            src={user.photoURL}
            alt="user"
            className='w-10 h-10 rounded'
          />

          <FontAwesomeIcon
            icon={faCaretDown}
            className='text-white text-xl cursor-pointer'
            onClick={() => setOpen(!open)}
          />

          <ul className={`${open ? "block" : "hidden"} bg-white p-2 shadow rounded absolute right-0 mt-42 mr-2`}>
            <li className='text-black'>Accounts</li>
            <li className='text-black'>Help</li>
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
