import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CommonStyles, { HeadingTypography } from "../../classes/CommonStyles";
import DepartmentsCards from "./DepartmentsCards";
import { getAllDepts } from "../../redux/actions";
import { deptSelector } from "../../redux/MemoizedSelectors";
import { Stack } from "@mui/material";

function Departments() {
  const dispatch = useDispatch();
  const classes = CommonStyles();

  const { deptData } = useSelector(deptSelector) || {};

  useEffect(() => {
    dispatch(getAllDepts());
  }, []);

  return (
    <div className={classes.cms_pageContainer}>
      <HeadingTypography>College Departments</HeadingTypography>
      <Stack direction="row" className={classes.cms_cardsContainer}>
        {deptData?.map((item) => (
          <DepartmentsCards key={item?.deptId} data={item} />
        ))}
      </Stack>
    </div>
  );
}

export default Departments;
