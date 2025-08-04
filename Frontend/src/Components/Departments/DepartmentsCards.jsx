import { useNavigate } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import React from "react";
import CommonStyles, {
  MediumBlackBoldTypography,
  HeadingTypography,
  SmallRegularTypography,
} from "../../classes/CommonStyles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";

function DepartmentsCards({ data }) {
  const navigate = useNavigate();
  const classes = CommonStyles();

  function handleDeptCardClick() {
    navigate(`${data?.deptId}`);
  }
  return (
    <Stack
      className={classes.cms_cardsStyle}
      width="23%"
      spacing="0.5rem"
      onClick={handleDeptCardClick}
    >
      <MediumBlackBoldTypography>
        {data?.deptId} - {data?.deptName}
      </MediumBlackBoldTypography>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing="0.5rem">
          <SchoolIcon fontSize="1rem" />
          <SmallRegularTypography>
            Head Of the Department
          </SmallRegularTypography>
        </Stack>
        <SmallRegularTypography>
          {data?.headOfDepartment}
        </SmallRegularTypography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing="0.5rem">
          <EmailIcon fontSize="1rem" />
          <SmallRegularTypography> Dept Email</SmallRegularTypography>
        </Stack>
        <SmallRegularTypography>{data?.deptEmail}</SmallRegularTypography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing="0.5rem">
          <PhoneIcon fontSize="1rem" />
          <SmallRegularTypography>Dept Contact</SmallRegularTypography>
        </Stack>
        <SmallRegularTypography>{data?.deptPhone}</SmallRegularTypography>
      </Stack>
    </Stack>
  );
}

export default DepartmentsCards;
