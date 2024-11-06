import React from "react";
import Header from "./components/Header";
import Home from "./menu/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./menu/About";
import Products from "./menu/Products";
import Stores from "./menu/Stores";
import News from "./menu/News";
import Support from "./menu/Support";
import Signup from "./menu/Signup";
import Login from "./menu/Login";
import Quadstar from "./product/Quadstar";
import Magicquatturo1 from "./product/Magicquattuor1";
import Magicquatturo2 from "./product/Magicquatturo2";

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
    path: "stores",
    element: <Stores />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "support",
    element: <Support />,
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
    path: "quadstar",
    element: <Quadstar/>,
  },
  {
    path: "quatturo1",
    element: <Magicquatturo1/>
  },
  {
    path: "quatturo2",
    element: <Magicquatturo2/>
  }
]);

const App = () => {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
