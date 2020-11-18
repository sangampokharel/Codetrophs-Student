import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import BarChartIcon from "@material-ui/icons/BarChart";
const useStyles = makeStyles({
  root: {
    width: 800,
  },

  table: {
    width: 750,
  },
});

const Tables = ({
  teacherLists,
  studentLists,
  handleDelete,
  showModal,
  teacher,
}) => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              {!teacher && <TableCell align="right">Roll No</TableCell>}
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!teacher &&
              studentLists.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  {!teacher && <TableCell align="right">{row.roll}</TableCell>}
                  <TableCell align="right">{row.class}</TableCell>
                  <TableCell align="right">
                    {row.section.toUpperCase()}
                  </TableCell>

                  <TableCell align="right">
                    <EditIcon onClick={() => showModal(row)} />
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}

            {teacher &&
              teacherLists.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  {!teacher && <TableCell align="right">{row.roll}</TableCell>}
                  <TableCell align="right">
                    {row.class.map((item) => (
                      <p key={item.id}>{item.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {row.section.map((item) => (
                      <p key={item.id}>{item.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="right" onClick={() => {}}>
                    <EditIcon onClick={() => showModal(row)} />
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          {teacher && teacherLists.length <= 0 && (
            <div
              style={{
                textAlign: "center",
                paddingTop: 10,
                paddingBottom: 10,
                width: "500%",
              }}
            >
              <BarChartIcon style={{ color: "#ccc" }} />
              <Typography variant="h6" style={{ color: "#ccc" }}>
                No Data
              </Typography>
            </div>
          )}

          {!teacher && studentLists.length <= 0 && (
            <div
              style={{
                textAlign: "center",
                paddingTop: 10,
                paddingBottom: 10,
                width: "600%",
              }}
            >
              <BarChartIcon style={{ color: "#ccc" }} />
              <Typography variant="h6" style={{ color: "#ccc" }}>
                No Data
              </Typography>
            </div>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tables;
