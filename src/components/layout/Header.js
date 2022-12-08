import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropSownShow, setUserDropSownShow] = useState(false);
  let categooryRef = useRef();
  let userRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categooryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropSownShow(true);
      } else {
        setUserDropSownShow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative" dropref={categooryRef}>
              <p className="font-regular flex items-center gap-x-2.5 font-dm text-sm">
                <FaBars /> Shop by Category
              </p>
              {categoryDropDownShow && (
                <List className="font-regular absolute top-8 w-[263px] bg-primary font-dm text-sm text-[#767676]">
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Furniture "
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
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
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative" dropref={userRef}>
                <div className="flex items-center ">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>

                {userDropSownShow && (
                  <List className="font-regular absolute top-8 right-0 w-[200px] border border-solid border-[#F0F0F0] bg-white text-center font-dm text-sm text-primary">
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0] py-4 px-5 duration-100 ease-in hover:bg-primary hover:bg-primary hover:font-bold hover:text-white"
                      itemname="My Account"
                    />
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0] py-4 px-5 duration-100 ease-in hover:bg-primary hover:font-bold hover:text-white"
                      itemname="Log Out "
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <HiShoppingCart />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
