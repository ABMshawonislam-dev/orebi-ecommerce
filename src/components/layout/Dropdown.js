import React from "react";

const Dropdown = ({ children, className, title, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Dropdown;
