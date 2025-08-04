import {
  Button,
  IconButton,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { appSelector, studentSelector } from "../../redux/MemoizedSelectors";
import SaveIcon from "@mui/icons-material/Save";
import {
  createNewStudent,
  deleteStudent,
  updateStudent,
} from "../../redux/actions";
import { MediumBlackBoldTypography } from "../../classes/CommonStyles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const StudentsTable = () => {
  const dispatch = useDispatch();
  const { studentsData } = useSelector(studentSelector);
  const { loggedInUserData } = useSelector(appSelector);

  const [rowToEdit, setRowToEdit] = useState("");
  const [rowToAdd, setRowToAdd] = useState(null);

  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentRoll, setStudentRoll] = useState("");
  const [studentBirthday, setStudentBirthday] = useState("");
  const [studentAddress, setStudentAddress] = useState("");

  const loggedInUserDetails = loggedInUserData?.UserInfo;

  const studentInfo = {
    studentId: parseInt(studentId),
    studentName: studentName,
    roll: parseInt(studentRoll),
    birthday: studentBirthday,
    address: studentAddress,
  };

  function onEditClick(row) {
    setRowToEdit(row?._id);
    setStudentId(row.studentId);
    setStudentName(row.studentName);
    setStudentRoll(row.roll);
    setStudentBirthday(row.birthday);
    setStudentAddress(row.address);
  }

  function onSaveClick() {
    setRowToEdit("");
    dispatch(updateStudent(studentInfo));
  }

  function onDeleteClick(row) {
    dispatch(deleteStudent(row?.studentId));
  }

  function onAddStudent() {
    setRowToAdd(true);
  }

  function onSaveNewStudent() {
    setRowToAdd(false);
    dispatch(createNewStudent(studentInfo));
  }

  return (
    <TableContainer component={Paper}>
      <TableHead>
        <TableRow>
          <TableCell>
            <MediumBlackBoldTypography>Student ID</MediumBlackBoldTypography>
          </TableCell>
          <TableCell>
            <MediumBlackBoldTypography>Student Name</MediumBlackBoldTypography>
          </TableCell>
          <TableCell>
            <MediumBlackBoldTypography>Student Roll</MediumBlackBoldTypography>
          </TableCell>
          <TableCell>
            <MediumBlackBoldTypography>
              Student Birthday
            </MediumBlackBoldTypography>
          </TableCell>
          <TableCell>
            <MediumBlackBoldTypography>
              Student Address
            </MediumBlackBoldTypography>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {studentsData?.map((row) => (
          <TableRow>
            <TableCell>
              {rowToEdit == row?._id ? (
                <TextField
                  defaultValue={row?.studentId}
                  value={row?.studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              ) : (
                row.studentId
              )}
            </TableCell>
            <TableCell>
              {rowToEdit == row?._id ? (
                <TextField
                  defaultValue={row?.studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              ) : (
                row.studentName
              )}
            </TableCell>

            <TableCell>
              {rowToEdit == row?._id ? (
                <TextField
                  defaultValue={row?.roll}
                  onChange={(e) => setStudentRoll(e.target.value)}
                />
              ) : (
                row.roll
              )}
            </TableCell>

            <TableCell>
              {rowToEdit === row?._id ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={studentBirthday || null}
                    onChange={(newValue) => setStudentBirthday(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              ) : (
                row.birthday
              )}
            </TableCell>

            <TableCell>
              {rowToEdit == row?._id ? (
                <TextField
                  defaultValue={row?.address}
                  onChange={(e) => setStudentAddress(e.target.value)}
                />
              ) : (
                row.address
              )}
            </TableCell>
            {loggedInUserDetails?.rolename == "Admin" ? (
              <TableCell>
                <Stack direction="row">
                  {rowToEdit == row?._id ? (
                    <IconButton onClick={() => onSaveClick()}>
                      <SaveIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => onEditClick(row)}>
                      <EditIcon />
                    </IconButton>
                  )}

                  <IconButton onClick={() => onDeleteClick(row)}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            ) : (
              <TableCell>-</TableCell>
            )}
          </TableRow>
        ))}
        {rowToAdd && (
          <TableRow>
            <TableCell>
              <TextField onChange={(e) => setStudentId(e.target.value)} />
            </TableCell>
            <TableCell>
              <TextField onChange={(e) => setStudentName(e.target.value)} />
            </TableCell>

            <TableCell>
              <TextField onChange={(e) => setStudentRoll(e.target.value)} />
            </TableCell>

            <TableCell>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={studentBirthday || null}
                  onChange={(newValue) => setStudentBirthday(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </TableCell>

            <TableCell>
              <TextField onChange={(e) => setStudentAddress(e.target.value)} />
            </TableCell>
            <IconButton onClick={() => onSaveNewStudent()}>
              <SaveIcon />
            </IconButton>
          </TableRow>
        )}
      </TableBody>
      <Button variant={"contained"} onClick={() => onAddStudent()}>
        Add New Student
      </Button>
    </TableContainer>
  );
};

export default StudentsTable;
