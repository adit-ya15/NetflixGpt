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

    // Controlled inputs (Netflix-like)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const msg = validate(email, password);
        setMessage(msg);

        if (msg !== null) return;

        if (isSignUp) {
            // Sign Up logic here
            console.log("Signing Up with:", { email, password });

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
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
            // Sign In logic here
            console.log("Signing In with:", { email, password });
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // Update redux store with signed-in user info
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
    // Red border when error exists
    const errorStyle = message ? "border-red-500" : "border-[#323233]";

    return (

        <div>
            <div className='bg-linear-to-r from-[#0000007e] to-[#0000007e] absolute h-[855.07px] w-full'>
                <Head />
                <form
                    className='w-[480px] bg-black absolute left-[480px] top-28 text-white flex flex-col p-16 rounded-lg m-4 ml-5 opacity-80'
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

                    {/* Email */}
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className={`h-14 bg-[#0F0F0F] border p-2 px-4 mb-5 rounded-sm font-bold ${errorStyle}`}
                    />

                    {/* Password */}
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className={`h-14 bg-[#0F0F0F] border p-2 px-4 mb-5 rounded-sm font-bold ${errorStyle}`}
                    />

                    <p className='text-red-500 mb-1'>{message}</p>

                    {/* Button */}
                    {isSignUp ? (
                        <button
                            className='bg-[#E50914] w-full rounded-lg p-2 mb-5 font-bold'
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    ) : (
                        <button
                            className='bg-[#E50914] w-full rounded-lg p-2 mb-5 font-bold'
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

                    {/* Checkbox */}
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

                    {/* Toggle Sign In / Sign Up */}
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
            <div className='bg-cover bg-center'>
                <img src={loginPageBackgroundImage} alt="background image" />
            </div>
            <Footer />
        </div>
    )
}

export default Login
