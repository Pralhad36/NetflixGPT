import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from './utils/checkValidate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { Background_Image_URL } from './utils/constants';



const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignInForm, SetIsSignInForm] = useState(true)

  const [errorMessage, setErrorMessage] = useState(null)


  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {

    const message = checkValidate(email.current.value, password.current.value)

    setErrorMessage(message)

    if (message) return

    // sign up form logic

    if (!isSignInForm) {
      // Signed up 

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/117182212?v=4",
          })

            .then(() => {

              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(addUser(
                {
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                }));

            })
            .catch((error) => {

              setErrorMessage(error.message)
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage)
          // ..
        });

    } else {

      // Sing In Form logic


      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Wrong email or password")

        });
    }


  }
  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={Background_Image_URL} alt='bg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=' opacity-80 w-3/12 bg-black  p-12 my-36 mx-auto absolute right-0 left-0'>
        <h1 className='text-white font-bold text-xl'>{!isSignInForm ? 'Sign Up' : 'Sign In'}</h1>
        {!isSignInForm && <input type='text' placeholder='Name' className='p-2 my-4 w-full rounded bg-gray-700'></input>}
        <input ref={email} type='text' placeholder='Email' className=' text-white p-2 my-4 w-full rounded bg-gray-700'></input>
        <input ref={password} type='password' placeholder='Password' className=' text-white p-2 my-4 w-full rounded bg-gray-700 '></input>
        <p className='text-red-600 font-bold text-xl'>{errorMessage}</p>
        <button onClick={handleButtonClick} className='p-2 rounded bg-red-600 w-full my-4 text-white' >{!isSignInForm ? 'Sign Up' : 'Sign In'}</button>
        <p className='text-white cursor-pointer  ' onClick={toggleSignInForm}>{isSignInForm ? 'Not a User? Sign Up Now' : 'Already Registered ? Sign In Now'}</p>
      </form>


    </div>

  )
}

export default Login
