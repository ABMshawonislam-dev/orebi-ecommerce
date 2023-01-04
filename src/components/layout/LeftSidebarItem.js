import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const LeftSidebarItem = (props) => {
  let [drop, setDrop] = useState(props.subdropdown);
  let [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-5"
        >
          <h3 className="font-regular cursor-pointer font-dm text-base text-[#767676]">
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
          <AiOutlinePlus className="text-[#767676]" />
        </div>
      ) : (
        <h3 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
          {props.color} {props.title}{" "}
        </h3>
      )}
      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSidebarItem;
