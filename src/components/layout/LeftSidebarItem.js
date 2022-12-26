import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
const LeftSidebarItem = ({ subdropdown, title }) => {
  let [drop, setDrop] = useState(subdropdown);
  let [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3>{title} </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer">{title} </h3>
      )}
      {show && (
        <div>
          <p>adasdsad</p>
          <p>adasdsad</p>
          <p>adasdsad</p>
          <p>adasdsad</p>
          <p>adasdsad</p>
        </div>
      )}
    </div>
  );
};

export default LeftSidebarItem;
