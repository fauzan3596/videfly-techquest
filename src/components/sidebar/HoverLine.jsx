import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

const HoverLine = ({ isActive }) => {
  const { isSidebarOpen } = useSelector((state) => state.isSidebarOpen);

  return (
    <span
      className={clsx(
        "hover-line",
        {
          "h-0 group-hover:h-3": !isActive && isSidebarOpen,
          "h-5": isActive && isSidebarOpen,
          "h-0 !-right-3 group-hover:h-3": !isActive && !isSidebarOpen,
          "h-5 !-right-3": isActive && !isSidebarOpen,
        }
      )}
    ></span>
  );
};

export default HoverLine;
