import React from "react";
import {Outlet, useMatch, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useToken} from "./hooks/useToken";
import {useUser} from "./hooks/useUser";



const App = () => {
  const isLoginPage = !!useMatch('/login');

  return (
    <>
      <Navbar />
      <Outlet />
      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;
