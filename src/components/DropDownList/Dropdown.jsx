import React, { useState } from "react";
import DropdownListChild from "./DropdownListChild";
import "./dropdown.css";

export const Dropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div data-id="wrapper" className="dropdown-wrapper open">
      <button data-id="toggle" className="btn" onClick={toggleMenu}>
        <span>Account Settings</span>
        <span className="material-icons">public</span>
      </button>

      {isMenuOpen && <DropdownListChild />}
    </div>
  );
};

export default Dropdown;
