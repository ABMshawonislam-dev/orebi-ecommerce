import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navabar from "./Navabar";

const RootLayout = () => {
  return (
    <>
      <Navabar />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
