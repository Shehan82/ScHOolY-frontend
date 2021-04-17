import "./App.css";
import { Button, makeStyles, Breadcrumbs } from "@material-ui/core";
import SidebarGrade from "./components/SidebarGrade";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import GradeBody from "./components/GradeBody";
import { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import ClassInside from "./components/ClassInside";
import StudentDetails from "./components/StudentDetails";
import AddNewStudent from "./components/Home/AddNewStudent";
import ChangeStudentDetails from "./components/Home/ChangeStudentDetails";
import RemoveStudent from "./components/Home/RemoveStudent";
import AddNewGrade from "./components/Home/AddNewGrade";
import UpdateGrade from "./components/Home/UpdateGrade";
import RemoveGrade from "./components/Home/RemoveGrade";
import EditDetails from "./components/EditDetails";
import { auth } from "./components/firebase";

import axios from "./axios";
import AddResults from "./components/Home/AddResults";

axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";

function App() {
  const [key, setkey] = useState(0);
  const [school, setSchool] = useState([]);
  const [sID, setsID] = useState("");

  useEffect(() => {
    axios.get("/grade").then((res) => {
      setSchool(res.data);
    });

    axios.get("/getsID").then((res) => {
      console.log(res.data);
      setsID(res.data);
    });
  }, []);

  const [active, setActive] = useState({
    active: "home",
  });

  const useStyles = makeStyles({
    active: {
      backgroundColor: "red",
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  console.log(auth.currentUser);
  return (
    <Router>
      <div className="App">
        {/* header */}
        <div className="App__header">
          <h3>ScHOolY</h3>
        </div>

        {/* sidebar and app body */}
        <div className="App__bodyContainer">
          {/* sidebar */}
          <div className="App__sideBar">
            <div className="App__sideBarHeader">
              <h3>Menu</h3>
            </div>

            <div className="App__sideBarHome">
              <Link style={{ textDecoration: "none" }} to="/">
                <button
                  onClick={(e) => {
                    setActive({ active: e.target.value });
                  }}
                  value="home"
                  className={active.active === "home" ? "active" : "notActive"}
                >
                  HOME
                </button>
              </Link>
            </div>

            {school.map((grade) => (
              <Link
                style={{ textDecoration: "none", margin: "10px 0px 10px 0px" }}
                to={`/grade/${grade.grade}`}
              >
                <button
                  onClick={(e) => {
                    setActive({ active: e.target.value });
                  }}
                  value={grade.grade}
                  className={
                    parseInt(active.active) === grade.grade
                      ? "active"
                      : "notActive"
                  }
                >
                  GRADE {grade.grade}
                </button>
              </Link>
            ))}
          </div>

          {/* body */}
          <div className="App__body">
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route exact path="/grade/:grade" component={GradeBody} />
              <Route
                exact
                path="/grade/:grade/:class"
                component={ClassInside}
              />
              <Route
                path="/grade/:grade/:class/:student"
                component={StudentDetails}
              />
              <Route path="/home/addNewStudent" component={AddNewStudent} />
              <Route
                path="/home/updateStudent"
                component={ChangeStudentDetails}
              />
              <Route path="/home/removeStudent" component={RemoveStudent} />
              <Route path="/home/addNewGrade" component={AddNewGrade} />
              <Route path="/home/updateGrade" component={UpdateGrade} />
              <Route path="/home/removeGrade" component={RemoveGrade} />
              <Route path="/home/addResults" component={AddResults} />
              <Route
                path="/editStudentDetails/:index"
                component={EditDetails}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
