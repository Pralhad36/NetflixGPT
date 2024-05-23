import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'
import { LOGO } from './utils/constants'

const Header = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser(
          {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }))

        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
      }
    });

    //unsubscribe when component unmount.
    return () => unsubscribe()
  }, [])

  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });

    navigate('/')

  }
  return (
    <div className="absolute bg-gradient-to-b from-black w-screen px-8 py-2 z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
      {user && (<button onClick={signOutHandler} className=' px-4 m-4 cursor-pointer rounded-lg font-medium text-white bg-red-600'>Sign Out</button>)}

    </div>
  )
}

export default Header