import React from "react";
import NavItem from "./NavItem";
import { navItems } from "../../constants";
import SideNavMenu from "./SideNavMenu";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slice/sidebarSlice";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <nav className={`nav-bar side-nav z-50 ${isSidebarOpen ? "w-56" : "w-20"}`}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center h-11 gap-1 cursor-pointer">
          <NavLink to="/">
            <img
              src={
                isSidebarOpen
                  ? "/images/logo/logo-1.png"
                  : "/images/logo/logo-2.png"
              }
              alt="Videfly Logo"
              className={`transition-all duration-300 object-cover ${
                isSidebarOpen ? "h-11 w-36" : "h-5 w-7"
              }`}
            />
          </NavLink>

          <button
            onClick={() => dispatch(toggleSidebar())}
            className="text-[#703BE7] cursor-pointer"
          >
            <ChevronDown
              className={`h-5 w-5 transform duration-300 lg:hidden block ${
                isSidebarOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          </button>
        </div>
        <ul>
          <NavItem navItem={navItems[0]} />
        </ul>
        <SideNavMenu text="Buat Konten" />
        <SideNavMenu text="Kelola" />
      </div>
    </nav>
  );
};

export default Sidebar;
