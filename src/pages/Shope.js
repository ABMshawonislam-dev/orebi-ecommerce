import React, { useState } from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import LeftSideBar from "../components/layout/LeftSideBar";

const Shope = () => {
  let [showNumber, setShowNumber] = useState(12);

  let handlePaginationChange = (e) => {
    setShowNumber(+e.target.value);
  };

  return (
    <Container>
      <Breadcrumb />

      <Flex className="flex gap-x-10">
        <div className="w-[25%] bg-red-500">
          <LeftSideBar />
        </div>
        <div className="relative w-[75%]">
          <div className="mb-3.5 flex gap-x-10">
            <div className="items-center gap-x-3.5 text-[#767676] md:flex">
              <span className="inine-block font-regular font-dm text-base text-[#767676]">
                Sort By:
              </span>
              <select
                id="countries"
                class="focus:border-black-500 font-regular block w-full rounded-lg border border-[#F0F0F0] p-2.5 font-dm text-sm text-base text-gray-900 text-[#767676] md:w-[239px]"
              >
                <option
                  selected
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  Featured
                </option>
                <option
                  value="US"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  United States
                </option>
                <option
                  value="CA"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  Canada
                </option>
                <option
                  value="FR"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  France
                </option>
                <option
                  value="DE"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  Germany
                </option>
              </select>
            </div>
            <div className="items-center gap-x-3.5 text-[#767676] md:flex">
              <span className="inine-block font-regular font-dm text-base text-[#767676]">
                Show:
              </span>
              <select
                onChange={handlePaginationChange}
                id="countries"
                class="focus:border-black-500 font-regular block w-full rounded-lg border border-[#F0F0F0] p-2.5 font-dm text-sm text-base text-gray-900 text-[#767676] md:w-[139px]"
              >
                <option
                  value="12"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  12
                </option>
                <option
                  value="24"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  24
                </option>
                <option
                  value="48"
                  className="font-regular font-dm text-base text-[#767676]"
                >
                  48
                </option>
              </select>
            </div>
          </div>
          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shope;
