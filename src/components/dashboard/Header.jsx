import React from "react";

const Header = ({ title, desc }) => {
  return (
    <header>
      <h1 className="font-semibold text-[#111336] sm:text-xl text-base">{title}</h1>
      <p className="font-medium text-[#8A8A8A] sm:text-sm text-xs">{desc}</p>
      <div className="divider"></div>
    </header>
  );
};

export default Header;
