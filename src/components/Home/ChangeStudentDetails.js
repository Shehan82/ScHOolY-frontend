import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../css/changeStudentDetails.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import axios from "../../axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ChangeStudentDetails() {
  const [searchText, setsearchText] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const useStyles = makeStyles({
    table: {
      minWidth: 800,
    },
  });

  const classes = useStyles();

  console.log(searchResult);
  return (
    <div>
      <div className="AddNewStudent__header">
        <h3>Change Student Details</h3>
      </div>
      <div className="container">
        <div className="inputField_div">
          <input
            id="inputField"
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value == "") {
                setsearchResult("");
              } else {
                axios.get(`/find/${e.target.value}`).then((res) => {
                  setsearchResult(res.data);
                });
              }
            }}
            type="text"
          />
        </div>
        <div className="table_div">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: " #282b34",
                  border: "1px solid gray",
                }}
              >
                <TableRow>
                  <TableCell style={{ color: "white" }}>Index Number</TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    Full Name
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="center">
                    Edit Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResult.length == 0 ? (
                  <h1></h1>
                ) : (
                  searchResult.map((student) => (
                    <TableRow key={student._id}>
                      <TableCell component="th" scope="row">
                        {student.index}
                      </TableCell>
                      <TableCell align="left">{student.fullName}</TableCell>
                      <TableCell align="center">
                        <Link
                          to={`/grade/${student.grade}/${student.class}/${student.index}`}
                        >
                          <IconButton
                            onClick={() => {
                              console.log("df");
                            }}
                            style={{ color: "black" }}
                          >
                            {" "}
                            <EditIcon />
                          </IconButton>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default ChangeStudentDetails;
