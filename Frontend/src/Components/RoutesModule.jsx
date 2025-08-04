//React Import
import React from "react";
import { Routes, Route } from "react-router";

//File Import

import Students from "./Students/Students";
import Faculty from "./Faculty/Faculty";
import Departments from "./Departments/Departments";
import Courses from "./Courses/Courses";
import DeptInfoPage from "./Departments/DeptInfoPage";

//React.memo - Render "RoutesModule" component when the props changes
const RoutesModule = React.memo(function RoutesModule() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Students />} />
        <Route exact path="/Students" element={<Students />} />
        <Route exact path="/Faculty" element={<Faculty />} />
        <Route exact path="/Departments" element={<Departments />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route exact path="/Departments/:deptId" element={<DeptInfoPage />} />
      </Routes>
    </>
  );
});

export default RoutesModule;
