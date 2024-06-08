import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./login";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "./utils/firebase";
import GetMovie from "./GetMovie";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movies",
      element: <GetMovie />,
    },
  ]);

  return (
    <div className="z-20 no-scrollbar">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
