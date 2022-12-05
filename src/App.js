import Image from "./components/layout/Image";
import Flex from "./components/layout/Flex";
import List from "./components/layout/List";
import ListItem from "./components/layout/ListItem";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { useEffect, useState } from "react";
function App() {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <nav>
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="assets/logo.png" />
          </div>
          <div className="lg:w-9/12 w-full">
            <RiBarChartHorizontalFill
              onClick={() => setShow(!show)}
              className="block lg:hidden ml-auto absolute top-2.5 right-2.5"
            />

            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
                <ListItem
                  className="font-dm text-sm font-bold hover:font-bold my-2.5 lg:my-0"
                  itemname="Home"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname="About"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname="Service"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname="Contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  );
}

export default App;
