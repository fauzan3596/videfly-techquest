import React, { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSidebar,
  openSidebar,
  toggleSidebar,
} from "../redux/slice/sidebarSlice";

const MainLayout = () => {
  const { isSidebarOpen } = useSelector((state) => state.isSidebarOpen);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const displayWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", displayWindowSize);
    return () => window.removeEventListener("resize", displayWindowSize);
  }, []);

  useEffect(() => {
    if (screenWidth < 1024) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  }, [screenWidth]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex font-[Poppins]">
      <Sidebar />
      <div
        className={`${
          isSidebarOpen && "lg:ps-56 ps-20"
        } ps-20 min-h-screen w-full transition-all duration-300 ease-in-out bg-white`}
      >
        {isSidebarOpen && screenWidth < 1024 && (
          <div
            className="inset-0 bg-black/30 transition-opacity z-20 h-screen w-full fixed"
            onClick={() => dispatch(toggleSidebar())}
          ></div>
        )}
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
