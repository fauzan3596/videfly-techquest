import React from "react";
import { navItems } from "../../constants";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const NAV_CATEGORIES = {
  "Buat Konten": [1, 5],
  Kelola: [5, 8],
};

const SideNavMenu = ({ text }) => {
  const [start, end] = NAV_CATEGORIES[text] || [0, 0];
  const { isSidebarOpen } = useSelector((state) => state.isSidebarOpen);

  return (
    <div className={`flex flex-col gap-4 ${isSidebarOpen && "px-4"}`}>
      {isSidebarOpen && <p className="text-xs text-[#8A8A8A]">{text}</p>}
      <ul className="flex flex-col gap-4">
        {navItems.slice(start, end).map((navItem) => (
          <NavItem key={navItem.text} navItem={navItem} />
        ))}
      </ul>
    </div>
  );
};

export default SideNavMenu;
