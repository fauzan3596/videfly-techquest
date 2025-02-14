import React from "react";
import { useLocation } from "react-router-dom";
import { navItems } from "../../constants";
import CurrentPath from "./CurrentPath";

const LeftNavbar = () => {
  const { pathname } = useLocation();
  const currentPath = navItems.find((item) => item.path === pathname);

  return (
    <div className="flex-1 flex items-center gap-5">
      <img
        src="/images/logo/logo-2.png"
        alt="Videfly Logo"
        className="h-auto w-10"
      />
      <div className="sm:block hidden">
        <CurrentPath currentPath={currentPath} />
      </div>
    </div>
  );
};

export default LeftNavbar;
