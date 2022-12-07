import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars, FaSearch } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(ref.current);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative" dropref={ref}>
              <p className="font-regular flex items-center gap-x-2.5 font-dm text-sm">
                <FaBars /> Shop by Category
              </p>
              {show && (
                <List className="font-regular absolute top-8 w-[263px] bg-primary font-dm text-sm text-[#767676]">
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Furniture "
                  />
                  <ListItem
                    className="border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="v border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-[600px]">
            <Search
              className="font-regular w-full py-4 px-5 font-dm text-sm placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="flex items-center">ad</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
