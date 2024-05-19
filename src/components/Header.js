import React from 'react'

const Header = () => {
  return (
        <div className='absolute  z-20 w-full flex justify-between item-center px-40'>
        <img className='   w-52 bg-gradient-to-b from-black'  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
        <button className= ' px-5 my-6 cursor-pointer rounded-lg font-medium text-white bg-red-600'>Sign Out</button>

        </div>
  )
}

export default Header