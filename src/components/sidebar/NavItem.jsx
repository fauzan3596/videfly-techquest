import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import HoverLine from "./HoverLine";
import clsx from "clsx";

const NavItem = ({ navItem }) => {
  const { icon, text, path } = navItem;
  const { isSidebarOpen } = useSelector((state) => state.isSidebarOpen);
  const { pathname } = useLocation();
  const isActive = pathname === path;
  const isDisabled = text === "Avatar";

  const navClasses = clsx(
    "relative group nav-item border-[#703BE7] duration-300",
    {
      "w-[186px] px-4": isSidebarOpen,
      "hover:bg-zinc-100 hover:py-2 hover:rounded-xl":
        !isActive && !isDisabled && isSidebarOpen,
      "cursor-not-allowed opacity-50": isDisabled,
      "hover:py-2": !isActive && !isDisabled && !isSidebarOpen,
    }
  );

  return (
    <li>
      <NavLink to={isDisabled ? "#" : path} className={navClasses}>
        <img src={icon} alt={`${text} Icon`} className="nav-item-img" />
        {isSidebarOpen && (
          <p
            className={clsx("nav-item-text", {
              "text-[#E6E6E6]": isDisabled,
            })}
          >
            {text}
          </p>
        )}
        {!isDisabled && <HoverLine isActive={isActive} />}
      </NavLink>
    </li>
  );
};

export default NavItem;
