import React, { useEffect } from "react";
import CommonStyles, { HeadingTypography } from "../../classes/CommonStyles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByDepartment } from "../../redux/actions";
import DepartmentCoursesCard from "./DepartmentCoursesCard";
import { deptSelector } from "../../redux/MemoizedSelectors";
import { Stack } from "@mui/material";

function DeptInfoPage() {
  const dispatch = useDispatch();

  const classes = CommonStyles();
  const { deptId } = useParams();
  const { deptCoursesData } = useSelector(deptSelector) || {};

  useEffect(() => {
    dispatch(getCoursesByDepartment(deptId));
  }, []);

  return (
    <div className={classes.cms_pageContainer}>
      <HeadingTypography> Department Courses</HeadingTypography>
      <Stack direction="row" className={classes.cms_cardsContainer}>
        {deptCoursesData?.map((item) => (
          <DepartmentCoursesCard key={item?.deptId} data={item} />
        ))}
      </Stack>
    </div>
  );
}

export default DeptInfoPage;
