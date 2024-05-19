import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm, SetIsSignInForm] = useState(true)

  const onClickHandler = () => {
    SetIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg Image' />
      </div>
      <form className=' opacity-80 w-3/12 bg-black  p-12 my-36 mx-auto absolute right-0 left-0'>
        <h1 className='text-white font-bold text-xl'>{!isSignInForm ? 'Sign Up' : 'Sign In'}</h1>
        {!isSignInForm && <input type='text' placeholder='Name' className='p-2 my-4 w-full rounded bg-gray-700'></input>}
        <input type='text' placeholder='Email' className='p-2 my-4 w-full rounded bg-gray-700'></input>
        <input type='text' placeholder='Password' className='p-2 my-4 w-full rounded bg-gray-700 '></input>
        <button className='p-2 rounded bg-red-600 w-full my-4 text-white' >{!isSignInForm ? 'Sign Up' : 'Sign In'}</button>
        <p className='text-white cursor-pointer  ' onClick={onClickHandler}>{isSignInForm ? 'Not a User? Sign Up Now' : 'Already Registered ? Sign In Now'}</p>
      </form>


    </div>

  )
}

export default Login