import React from "react";
import SidebarContent from "./SidebarContent";

const LeftSideBar = () => {
  return (
    <>
      <SidebarContent dropDown={true} />
      <SidebarContent dropDown={false} />
      <SidebarContent dropDown={true} />
    </>
  );
};

export default LeftSideBar;
