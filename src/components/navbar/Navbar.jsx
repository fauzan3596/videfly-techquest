import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Navbar = () => {
  return (
    <nav className="navbar nav-bar border-b-[1px]">
      <LeftNavbar />
      <RightNavbar />
    </nav>
  );
};

export default Navbar;
