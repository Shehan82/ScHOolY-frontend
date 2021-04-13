import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/StudentDetails.css";
import SemResult from "./SemResult";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Typography } from "@material-ui/core";
import axios from "../axios";

function StudentDetails({ match }) {
  const [studentDetails, setStudentDetails] = useState([]);
  const [studentResult, setstudentResult] = useState([]);

  useEffect(() => {
    axios.get(`/index/${match.params.student}`).then((res) => {
      setStudentDetails(res.data);
    });

    axios.get(`/indexResult/${match.params.student}`).then((res) => {
      setstudentResult(res.data);
    });
  }, [match.params.student]);

  // studentDetails.sem.map(sem=>(
  //     console.log(sem.marks)
  // ))

  console.log(studentResult);

  return (
    <div>
      <div className="StudentDetails__headerContainer">
        <div className="StudentDetails__headerGrade">
          <Link
            to={`/grade/${match.params.grade}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Grade {match.params.grade}</h3>
          </Link>
        </div>
        <div className="StudentDetails__headerSlash">
          <h3>/</h3>
        </div>

        <div className="StudentDetails__headerClass">
          <Link
            to={`/grade/${match.params.grade}/${match.params.class}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Class {match.params.class}</h3>
          </Link>
        </div>

        <div className="StudentDetails__headerSlash">
          <h3>/</h3>
        </div>

        <div className="StudentDetails__headerStudent">
          <h3>{match.params.student}</h3>
        </div>
      </div>

      <div>
        <div className="studentAllDetails">
          <Card style={{ width: "100%" }}>
            <CardHeader
              style={{
                backgroundColor: "#282b34",
                color: "white",
                border: "1px solid gray",
              }}
              title="18000282 Details"
            />

            <CardContent>
              <Typography>
                Name : {studentDetails.map((student) => student.fullName)}
              </Typography>
              <br />
              <Typography>
                Mother's Name :{" "}
                {studentDetails.map((student) => student.mothersName)}
              </Typography>
              <br />
              <Typography>
                Father's Name :{" "}
                {studentDetails.map((student) => student.fathersName)}
              </Typography>
              <br />
              <Typography>
                Home number : {studentDetails.map((student) => student.landNum)}
              </Typography>
              <br />
              <Typography>
                Mobile number :{" "}
                {studentDetails.map((student) => student.mobileNum)}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="SemResult__container">
          {studentResult.map((termResult) => (
            <SemResult semData={termResult.marks} sem={termResult.term} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
