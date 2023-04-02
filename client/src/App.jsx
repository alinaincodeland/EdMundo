import React from "react";
import { Outlet, useMatch, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from "./context/User";

const App = () => {
  const isLoginPage = !!useMatch("/login");

  return (
    <UserProvider>
      <Navbar />
      <Outlet />
      {!isLoginPage && <Footer />}
    </UserProvider>
  );
};

export default App;
