import { useNavigate } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import React from "react";
import CommonStyles, {
  MediumBlackBoldTypography,
  HeadingTypography,
  SmallRegularTypography,
} from "../../classes/CommonStyles";


function DepartmentCoursesCard({ data }) {
  const classes = CommonStyles();

  return (
    <Stack className={classes.cms_cardsStyle} width="23%" spacing="0.5rem">
      <MediumBlackBoldTypography>
        {data?.courseId} - {data?.courseName}
      </MediumBlackBoldTypography>

      <Stack direction="row" spacing="0.5rem">
        <SmallRegularTypography>Course credits</SmallRegularTypography>
        <SmallRegularTypography>{data?.courseCredits}</SmallRegularTypography>
      </Stack>

      <Stack direction="row" spacing="0.5rem">
        <SmallRegularTypography> Semester</SmallRegularTypography>
        <SmallRegularTypography>{data?.courseSemester}</SmallRegularTypography>
      </Stack>
    </Stack>
  );
}

export default DepartmentCoursesCard;
