import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slice/sidebarSlice";

const store = configureStore({
  reducer: {
    isSidebarOpen: sidebarSlice,
  },
});

export default store;
