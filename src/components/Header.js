import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import { toggleGptSearch } from "./utils/gptSearchSlice";
import { changeLanguage } from "./utils/configSlice";
import { addRemoveMovieDetails, removeMovieDetails } from "./utils/moviesSlice";

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
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className="bg-gradient-to-b from-black to-transparent z-50 md:absolute fixed w-screen md:px-8 px-4 py-1 md:py-2 flex flex-col md:flex-row justify-between item-center">
      <img className=" w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
      {user && (
        <div className=" flex justify-between">
          {gptSearchView && (
            <select
              className="p-2 bg-gray-900 text-white mr-4 rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearch}
            className=" hover:bg-yellow-500 w-24 h-10 cursor-pointer -mt-4 md:mt-4 md:mx-2 ml-0 rounded-md md:text-md   md:font-medium text-black bg-yellow-600 "
          >
            {gptSearchView ? "Home Page" : "GPT search"}
          </button>

          <button
            onClick={signOutHandler}
            className=" hover:bg-red-500 w-20 h-10 md:mt-4 -mt-4 mr-0 md:mx-2 cursor-pointer rounded-md font-medium text-white bg-red-600 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
