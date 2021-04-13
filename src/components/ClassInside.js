import React, { useEffect, useState } from "react";
import "../css/ClassInside.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsTable from "./DetailsTable";
import ClassMainDetails from "./ClassMainDetails";
import axios from "../axios";

function ClassInside({ match }) {
  const [students, setStudents] = useState([]);
  const [classDetails, setClassDetails] = useState({});
  useEffect(() => {
    axios
      .get(`/grade/${match.params.grade}/${match.params.class}`)
      .then((res) => {
        setStudents(res.data);
      });

    axios.get(`/classDetails/${match.params.grade}`).then((res) => {
      res.data.map((grade) =>
        grade.class
          .filter((cls) => cls.name == `${match.params.class}`)
          .map((clsObj) => setClassDetails(clsObj))
      );
    });
  }, []);
  console.log("hellooooooooooooo");
  console.log(classDetails);
  return (
    <div>
      <div className="ClassInside__headerContainer">
        <div className="ClassInside__headerGrade">
          <Link
            to={`/grade/${match.params.grade}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Grade {match.params.grade}</h3>
          </Link>
        </div>
        <div className="ClassInside__headerSlash">
          <h3>/</h3>
        </div>

        <div className="ClassInside__headerClass">
          <Link
            to={`/grade/${match.params.grade}/${match.params.class}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Class {match.params.class}</h3>
          </Link>
        </div>
      </div>

      <div className="ClassInside__bodyContainer">
        <div className="mainDetails">
          <ClassMainDetails
            teacher={classDetails.classTeacher}
            monitor={classDetails.monitor}
            monitress={classDetails.monitress}
          />
        </div>

        <div className="studentDetails">
          <DetailsTable
            grade={match.params.grade}
            class={match.params.class}
            students={students}
          />
        </div>
      </div>
    </div>
  );
}

export default ClassInside;
