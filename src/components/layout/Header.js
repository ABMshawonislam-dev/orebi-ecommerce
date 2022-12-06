import Container from "./Container";
import React, { useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";

const Header = () => {
  let [show, setShow] = useState(false);

  let handleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#F5F5F3]">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <Dropdown onClick={handleDropdown}>
              <p className="flex items-center gap-x-2.5">
                <FaBars /> Shop by Category
              </p>
              {show && (
                <List className="absolute">
                  <ListItem itemname="asdasd" />
                  <ListItem itemname="asdasd" />
                  <ListItem itemname="asdasdß" />
                </List>
              )}
            </Dropdown>
          </div>
          <div>ad</div>
          <div>ad</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
