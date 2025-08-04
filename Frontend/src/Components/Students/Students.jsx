import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../redux/actions";
import StudentsTable from "./StudentsTable";
import { appSelector } from "../../redux/MemoizedSelectors";
import CommonStyles from "../../classes/CommonStyles";

function Students() {
  const dispatch = useDispatch();
  const { loggedInUserData } = useSelector(appSelector);

  const commonStyles = CommonStyles();

  useEffect(() => {
    dispatch(getAllStudents());
  }, [loggedInUserData]);

  return (
    <div className={commonStyles.cms_pageContainer}>
      <StudentsTable />
    </div>
  );
}

export default Students;
