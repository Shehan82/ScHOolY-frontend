import React, { useEffect, useState } from "react";
import Class from "./Class";
import "../css/GradeBody.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "../axios";

function GradeBody({ match }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(`/classes/${match.params.grade}`).then((res) => {
      res.data.map((classes) => setClasses(classes.class));
    });
  }, [match.params.grade]);

  // console.log(classes);
  classes.map((cls) => console.log(cls));

  return (
    <div>
      <div className="GradeBody__header">
        <h3>Grade {match.params.grade}</h3>
      </div>

      <div className="GradeBody">
        {classes.map((cls) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/home/grade/${match.params.grade}/${cls.name}`}
          >
            <Class
              className={cls.name}
              teacher={cls.classTeacher}
              monitor={cls.monitor}
              monitress={cls.monitress}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GradeBody;
