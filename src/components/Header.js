import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import { toggleGptSearch } from "./utils/gptSearchSlice";
import { changeLanguage } from "./utils/configSlice";

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
    <div className="bg-black md:bg-gradient-to-b from-black to-transparent absolute w-screen md:px-8 px-4 py-1 md:py-2 z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
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
            className=" hover:bg-yellow-500 px-2 md:px-4 py-2 md:py-2 cursor-pointer rounded-md md:text-md my-4  md:font-medium text-black bg-yellow-600 "
          >
            {gptSearchView ? "Home Page" : "GPT search"}
          </button>

          <button
            onClick={signOutHandler}
            className=" hover:bg-red-500 px-2 my-4 md:px-4 md:py-2 md:m-4 cursor-pointer rounded-md font-medium text-white bg-red-600 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
