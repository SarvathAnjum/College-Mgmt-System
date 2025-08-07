import { createSlice } from "@reduxjs/toolkit";
import { ActiveHomeIcon, HomeIcon } from "../../assets/SVGIcons";

const appReducer = createSlice({
  name: "app",
  initialState: {
    loggedInUserData: [],
    navItems: [
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "App Users",
        path: "/",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Students",
        path: "/Students",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Faculty",
        path: "/Faculty",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Departments",
        path: "/Departments",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Courses",
        path: "/Courses",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Attendance",
        path: "/Attendance",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Exams",
        path: "/Exams",
      },
      {
        icon: HomeIcon,
        activeIcon: ActiveHomeIcon,
        item: "Results",
        path: "/Results",
      },
    ],
  },
  reducers: {
    setLoggedInUserData: (state, action) => {
      state.loggedInUserData = action.payload;
    },
    setNavItems: (state, action) => {
      state.loggedInUserData = action.payload;
    },
  },
});

export const { setLoggedInUserData, setNavItems } = appReducer.actions;
export default appReducer.reducer;
