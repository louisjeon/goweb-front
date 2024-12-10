import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./menu/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./menu/About";
import Products from "./menu/Products";
import News from "./menu/News";
import Board from "./menu/Board";
import Signup from "./menu/Signup";
import Login from "./menu/Login";
import Quadstar from "./product/Quadstar";
import Magicquatturo1 from "./product/Magicquattuor1";
import Magicquatturo2 from "./product/Magicquatturo2";
import Post from "./board/Post";
import MapView from "./menu/MapView";
import BikeMap from "./menu/BikeMap";
import WritePost from "./board/WritePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "bikemap",
    element: <BikeMap />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "board",
    element: <Board />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "post",
    element: <Post />,
  },
  {
    path: "writePost",
    element: <WritePost />,
  },
  {
    path: "quadstar",
    element: <Quadstar />,
  },
  {
    path: "quatturo1",
    element: <Magicquatturo1 />,
  },
  {
    path: "quatturo2",
    element: <Magicquatturo2 />,
  },
  {
    path: "mapView",
    element: <MapView />,
  },
]);

const App = () => {
  const [login, setLogin] = useState({ isLoggedIn: false, accessToken: null });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      setLogin({ isLoggedIn: true, accessToken: token });
    } else {
      setLogin({ isLoggedIn: false, accessToken: null });
    }
  }, [localStorage.getItem("accessToken")]);

  return (
    <>
      <Header></Header>
      <RouterProvider router={router} login={login} />
    </>
  );
};

export default App;
