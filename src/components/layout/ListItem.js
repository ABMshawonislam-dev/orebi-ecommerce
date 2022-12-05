import React from "react";

const ListItem = ({ itemname, className }) => {
  return <li className={className}>{itemname}</li>;
};

export default ListItem;
