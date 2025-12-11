import React, { useState } from 'react'
import Head from './Head'
import Footer from './Footer'
import { validate } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { userImage,loginPageBackgroundImage } from '../utils/constants';

const Login = () => {

    
    const dispatch = useDispatch()
    const [isSignUp, setSignUp] = useState(false);
    const [isChecked, setIsChecked] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const msg = validate(email, password);
        setMessage(msg);

        if (msg !== null) return;

        if (isSignUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name,
                        photoURL: userImage
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                        
                    }).catch((error) => {
                        setMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + '-' + errorMessage)
                });
        } else {
            
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    
                    const user = userCredential.user;
                
                    const { uid, email: userEmail, displayName, photoURL } = user;
                    dispatch(addUser({
                        uid,
                        email: userEmail,
                        displayName,
                        photoURL
                    }));
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + '-' + errorMessage)
                });

        };
    }
 
    const errorStyle = message ? "border-red-500" : "border-[#323233]";

    return (

        <div>
            <div className='bg-linear-to-r from-[#0000007e] to-[#0000007e] absolute h-[752px] sm:h-[855.07px] w-full'>
                <Head />
                <form
                    className='w-screen sm:w-[480px] bg-black absolute left-0 sm:left-28 md:left-36 lg:left-[480px] top-28 text-white flex flex-col p-6 sm:p-16 rounded-lg m-0 sm:m-4 sm:ml-5 opacity-80'
                    onSubmit={(e) => e.preventDefault()}
                >

                    {isSignUp ? (
                        <h1 className='mb-10 font-bold text-3xl'>Sign Up</h1>
                    ) : (
                        <h1 className='mb-10 font-bold text-3xl'>Sign In</h1>
                    )}

                    {isSignUp && (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Full Name'
                            className='h-14 bg-[#0F0F0F] border border-[#323233] p-2 px-4 mb-5 rounded-sm font-bold'
                        />
                    )}

                    
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className={`h-14 bg-[#0F0F0F] border p-2 px-4 mb-5 rounded-sm font-bold ${errorStyle}`}
                    />

                    
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className={`h-14 bg-[#0F0F0F] border p-2 px-4 mb-5 rounded-sm font-bold ${errorStyle}`}
                    />

                    <p className='text-red-500 mb-1'>{message}</p>

                    
                    {isSignUp ? (
                        <button
                            className='bg-[#E50914] w-full rounded-lg p-2 mb-5 font-bold cursor-pointer'
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    ) : (
                        <button
                            className='bg-[#E50914] w-full rounded-lg p-2 mb-5 font-bold cursor-pointer'
                            onClick={handleSubmit}
                        >
                            Sign In
                        </button>
                    )}

                    <h1 className='text-center text-[#B6B4B4] mb-5'>OR</h1>

                    {!isSignUp && (
                        <button className='bg-[#333333] w-full rounded-lg p-2 mb-5 font-bold'>
                            Use a sign-in code
                        </button>
                    )}

                    {!isSignUp && (
                        <a href="#" className='text-center underline mb-6'>Forgot Password?</a>
                    )}

                    <div className='mb-4'>
                        <input
                            type="checkbox"
                            id="remember"
                            checked={isChecked}
                            className='w-4 h-4 bg-white mr-2'
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <span className='text-[16px] font-bold'>Remember me</span>
                    </div>

                    {isSignUp ? (
                        <p className='text-[#B7B7B7] text-[16px] mb-5'>
                            Already registered?
                            <span
                                className='text-white cursor-pointer'
                                onClick={() => setSignUp(false)}
                            >
                                {" "}Sign In now
                            </span>
                        </p>
                    ) : (
                        <p className='text-[#B7B7B7] text-[16px] mb-5'>
                            New to Netflix?
                            <span
                                className='text-white cursor-pointer'
                                onClick={() => setSignUp(true)}
                            >
                                {" "}Sign up now
                            </span>
                        </p>
                    )}

                    <p className='text-[#B7B7B7]'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>
                </form>
            </div>
            <div className='h-screen lg:bg-cover lg:bg-center md:-mb-85 lg:mb-0'>
                <img src={loginPageBackgroundImage} alt="background image" className='h-screen w-screen sm:h-[855px]  lg:h-[854px]'/>
            </div>
            <Footer />
        </div>
    )
}

export default Login
