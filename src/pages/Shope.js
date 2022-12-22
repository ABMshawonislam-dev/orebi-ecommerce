import Container from "../components/layout/Container";
import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";

const Shope = () => {
  console.log();
  return (
    <Container>
      <Breadcrumb />

      <Flex className="flex gap-x-10">
        <div className="w-[25%] bg-red-500">adad</div>
        <div className="relative w-[75%]">
          <Pagination itemsPerPage={12} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shope;
