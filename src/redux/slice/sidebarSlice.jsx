import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "isSidebarOpen",
  initialState: { isSidebarOpen: true },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
