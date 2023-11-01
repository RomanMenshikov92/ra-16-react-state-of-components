import React, { useState } from "react";
import DropdownItemChild from "./DropdownItemChild";

export const DropdownListChild = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const items = [{ title: "Profile Information" }, { title: "Change Passward" }, { title: "Become PRO" }, { title: "Help" }, { title: "Log Out" }];

  const selectItem = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <ul className="dropdown">
      {items.map((item, index) => (
        <DropdownItemChild key={index} item={item} selected={index === selectedItemIndex} selectItem={() => selectItem(index)} />
      ))}
    </ul>
  );
};

export default DropdownListChild;
