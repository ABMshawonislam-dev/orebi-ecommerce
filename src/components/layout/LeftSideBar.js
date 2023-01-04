import React from "react";
import SidebarContent from "./SidebarContent";

const LeftSideBar = () => {
  return (
    <>
      <SidebarContent dropDown={true} droptitle="Shop by Category" />
      <SidebarContent dropDown={true} droptitle="Shop by Color" />
      <SidebarContent dropDown={true} droptitle="Shop by Brand" />
      <SidebarContent dropDown={true} droptitle="Shop by Price" />
    </>
  );
};

export default LeftSideBar;
