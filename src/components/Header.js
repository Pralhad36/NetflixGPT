import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import { toggleGptSearch } from "./utils/gptSearchSlice";
import { addLanguage } from "./utils/configSlice";
import {
  addRemoveMovieDetails,
  removeMovieDetails,
  removeSearchMovies,
} from "./utils/moviesSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gptSearchView = useSelector((store) => store?.gpt?.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmount.
    return () => unsubscribe();
  }, [navigate]);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
    navigate("/");

    dispatch(addRemoveMovieDetails());
  };

  const handleGptSearch = () => {
    // toggle search button
    dispatch(toggleGptSearch());
    dispatch(removeSearchMovies());
  };

  const handleLanguageChange = (e) => {
    dispatch(addLanguage(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className="w-screen md:bg-gradient-to-b  from-black to-transparent bg-black z-50 md:absolute fixed md:px-8 px-4 pt-0 md:py-1 flex flex-col md:flex-row justify-between item-center">
      <img className=" w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
      {user && (
        <div className=" flex  justify-between items-center ">
          <div className="flex">
            {gptSearchView && (
              <select
                onChange={handleLanguageChange}
                className=" bg-gray-800 text-xs rounded-lg text-white my-0 absolute md:top-4  top-12 p-2 right-[75%] md:right-52 mx-2 md:w-24"
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGptSearch}
              className="text-xs md:text-base font-normal md:font-medium hover:bg-yellow-500 md:flex justify-center items-center  absolute w-18 h-7 p-1 md:w-24 md:h-10 cursor-pointer md:-mt-8 md:top-12 top-4  md:right-28 md:mx-auto rounded-md text-black bg-yellow-600 "
            >
              {gptSearchView ? "Home Page" : "GPT search"}
            </button>
          </div>

          <button
            onClick={signOutHandler}
            className="text-xs md:text-base font-normal md:font-medium hover:bg-red-500 md:flex items-center justify-center w-18 h-7 p-1 md:w-20 md:h-10 top-4 right-4 absolute mr-0 md:mx-2 cursor-pointer rounded-md text-black bg-red-600 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
