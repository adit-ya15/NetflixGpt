import React, { useState } from 'react'

const Head = () => {
    const [isSignUp, setSignIn] = useState(false);
  return (
    <div className='bg-linear-to-r from-[#0000007e] to-[#0000007e] absolute h-[855.07px] w-full'>
      <div className='absolute left-[8%] top-5'>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"
       className='w-42 h-20'
      />
      </div>
      <form className='w-[480px] bg-black absolute left-[480px] top-28 text-white flex flex-col p-16 rounded-lg m-4 ml-5 opacity-80'>
        {isSignUp?<h1 className='mb-10 font-bold text-3xl'>Sign Up</h1>:<h1 className='mb-10 font-bold text-3xl'>Sign In</h1>}
        {isSignUp && <input type="text" 
        placeholder='Full Name'
        className='h-14 bg-[#0F0F0F] border border-[#323233] p-2 px-4 mb-5 rounded-sm font-bold'
        />}
        <input type="text" 
        placeholder='Email or Mobile Number'
        className='h-14 bg-[#0F0F0F] border border-[#323233] p-2 px-4 mb-5 rounded-sm font-bold'
        />
        <input type="text" 
        placeholder='Password'
        className='h-14 bg-[#0F0F0F] border border-[#323233] p-2 px-4 mb-5 rounded-sm font-bold'
        />
        {isSignUp?<button className='bg-[#E50914] w-full rounded-lg p-2 mb-5 font-bold'>Sign Up</button>:<button className='bg-[#E50914] w-full rounded-lg p-2 mb-5 font-bold'>Sign In</button>}
        
        <h1 className='text-center text-[#B6B4B4] mb-5'>OR</h1>
        {!isSignUp && <button className='bg-[#333333] w-full rounded-lg p-2 mb-5 font-bold '>Use a sign-in code</button>}
        {!isSignUp && <a href="#" className='text-center underline mb-6'>Forgot Password?</a>}
        <div className='mb-4'>
            <input type="checkbox" name="" id="remember" checked 
            className='w-4 h-4 bg-white mr-2'/>
            <span className='text-[16px] font-bold '>Remember me</span>
        </div>
        
        {!isSignUp && <p className='text-[#B7B7B7] text-[16px] mb-5'>New to Netflix?<span className='text-white cursor-pointer'
         onClick={() => setSignIn(!isSignUp)}
        >Sign up now</span></p>}
        <p className='text-[#B7B7B7]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  )
}

export default Head
