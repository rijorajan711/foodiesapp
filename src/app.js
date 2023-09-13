import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { redirect } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./component/Header";
import Body from "./component/Body";
import Cart from "./component/Cart";
import Error from "./component/Error";
import Footer from "./component/Footer";
import store from "./util/store";
import { Provider } from "react-redux";
import Signup from "./component/Signup";
import ProtectedRoute from "./ProtectedRoute";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="box-border m-0 p-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const RenderRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "body",
        //  element: <Body />
        element: <ProtectedRoute component={Body} />, // Protect the Body route
      },
      {
        path: "cart",
        // element:<Cart />
        element: <ProtectedRoute component={Cart} />, // Protect the Body route
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RenderRouter} />);
