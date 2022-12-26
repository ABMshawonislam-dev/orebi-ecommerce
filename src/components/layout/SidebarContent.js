import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import Flex from "./Flex";
import LeftSidebarItem from "./LeftSidebarItem";
const SidebarContent = ({ dropDown }) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(dropDown);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3>Shop by Category </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer">Shop by Category </h3>
      )}

      {show && (
        <>
          <LeftSidebarItem subdropdown={true} title="Category 1">
            <h1>asdasdasdasdasddsfsfdsfgdfg</h1>
          </LeftSidebarItem>
        </>
      )}

      {!drop && (
        <>
          <LeftSidebarItem subdropdown={true} title="Category 1" />
          <LeftSidebarItem subdropdown={false} title="Category 1" />
          <LeftSidebarItem subdropdown={true} title="Category 1" />
          <LeftSidebarItem subdropdown={false} title="Category 1" />
          <LeftSidebarItem subdropdown={true} title="Category 1" />
        </>
      )}
    </div>
  );
};

export default SidebarContent;
