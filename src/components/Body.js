import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./login";
import { useDispatch } from "react-redux";

import GetMovie from "./GetMovie";
import GetDetail from "./GetDetail";

const Body = () => {
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
    {
      path: "/movieDetail",
      element: <GetDetail />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
