import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import Flex from "./Flex";
import LeftSidebarItem from "./LeftSidebarItem";
const SidebarContent = ({ dropDown, droptitle }) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(dropDown);
  return (
    <div className="mb-14">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-9 flex cursor-pointer items-center justify-between"
        >
          <h3 className="cursor-pointer font-dm text-xl font-bold">
            {droptitle}{" "}
          </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold">
          {droptitle}{" "}
        </h3>
      )}

      {show && (
        <>
          <LeftSidebarItem subdropdown={false} title="Color 1">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawonasdasd
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 2" color="yellow">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 3" color="green">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 4" color="blue">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 5" color="purple">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
        </>
      )}

      {!drop && (
        <>
          <LeftSidebarItem subdropdown={true} title="Category 1">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 2" color="red">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 3" color="red">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 4" color="red">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subdropdown={true} title="Category 5" color="red">
            <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
              shawon
            </h1>
          </LeftSidebarItem>
        </>
      )}
    </div>
  );
};

export default SidebarContent;
