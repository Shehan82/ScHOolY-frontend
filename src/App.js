import "./App.css";
import { makeStyles } from "@material-ui/core";
// import SidebarGrade from "./components/SidebarGrade";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Home from "./components/Home";
import GradeBody from "./components/GradeBody";
import { useEffect, useState } from "react";
// import HomeIcon from "@material-ui/icons/Home";
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
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";

function App() {
  const [key, setkey] = useState(0);
  const [school, setSchool] = useState([]);
  const [sID, setsID] = useState("");
  const [user, setuser] = useState({});

  useEffect(() => {
    axios.get("/grade").then((res) => {
      setSchool(res.data);
    });

    axios.get("/getsID").then((res) => {
      console.log(res.data);
      setsID(res.data);
    });

    console.log(auth.currentUser);
    auth.onAuthStateChanged((user) => {
      setuser(user);
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

  const history = useHistory();
  const signOut = async () => {
    await auth
      .signOut()
      .then((res) => {
        console.log("signout");
        history.push("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
    console.log(auth.currentUser);
  };

  const classes = useStyles();
  console.log(user);
  return (
    <Router>
      {user ? (
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
                <Link style={{ textDecoration: "none" }} to="/home">
                  <button
                    onClick={(e) => {
                      setActive({ active: e.target.value });
                    }}
                    value="home"
                    className={
                      active.active === "home" ? "active" : "notActive"
                    }
                  >
                    HOME
                  </button>
                </Link>
              </div>

              {school.map((grade) => (
                <Link
                  style={{
                    textDecoration: "none",
                    margin: "10px 0px 10px 0px",
                  }}
                  to={`/home/grade/${grade.grade}`}
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

              <button onClick={signOut} className="logout_btn">
                LOGOUT <span className="spn_cls"></span> <ExitToAppIcon />
              </button>
            </div>

            {/* body */}
            <div className="App__body">
              <Switch>
                {auth.currentUser != null ? (
                  <Route path="/home" exact component={Home} />
                ) : null}
                {/* <Route path="/home" exact component={Home} /> */}
                <Route exact path="/home/grade/:grade" component={GradeBody} />
                <Route
                  exact
                  path="/home/grade/:grade/:class"
                  component={ClassInside}
                />
                <Route
                  path="/home/grade/:grade/:class/:student"
                  component={StudentDetails}
                />
                <Route path="/home/addNewStudent" component={AddNewStudent} />
                <Route
                  exact
                  path="/home/updateStudent"
                  component={ChangeStudentDetails}
                />
                <Route path="/home/removeStudent" component={RemoveStudent} />
                <Route path="/home/addNewGrade" component={AddNewGrade} />
                <Route path="/home/updateGrade" component={UpdateGrade} />
                <Route path="/home/removeGrade" component={RemoveGrade} />
                <Route path="/home/addResults" component={AddResults} />
                <Route
                  path="/home/updateStudent/editStudentDetails/:index"
                  component={EditDetails}
                />
              </Switch>
            </div>
          </div>
        </div>
      ) : (
        <h1>fuck</h1>
      )}
    </Router>
  );
}

export default App;
