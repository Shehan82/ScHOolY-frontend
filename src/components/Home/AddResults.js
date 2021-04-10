import React, { useEffect, useState } from "react";
import "../../css/AddNewStudent.css";
import "../../css/AddResults.css";

import axios from "../../axios";
import Button from "@material-ui/core/Button";
import { NoMeetingRoom } from "@material-ui/icons";

function AddResults() {
  var gradeArr = [];
  var marksArrObj = [];
  var cars = ["Saab", "Volvo", "BMW"];
  const [index, setindex] = useState(1234);
  const [term, setterm] = useState("");
  const [marks, setmarks] = useState({});
  const [grade, setgrade] = useState([]);
  const [gradeData, setgradeData] = useState([]);
  const [subjectData, setsubjectData] = useState([]);
  const [selectedVal, setselectedVal] = useState(0);
  var name = "shena";

  useEffect(() => {
    axios.get("/grade").then((res) => {
      setgradeData(res.data);
    });
  }, []);

  gradeData.map((grade) => gradeArr.push(grade.grade));

  const sendDetails = (e) => {
    // axios
    //   .post("/create", {
    //     index: index,
    //     term: term,
    //     grade: grade,
    //     marks: marks,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data == "ok") {
    //       alert("Register Successfully!");
    //     } else {
    //       alert("register unsuccess!");
    //     }
    //   });

    console.log(marksArrObj);
  };

  const checkValidation = (e) => {
    e.preventDefault();

    sendDetails(e);
  };

  const loadSubjects = (e) => {
    // setgradeSelectVal(parseInt(e.target.value));

    axios.get("/gradeSub").then((res) => {
      setsubjectData(res.data);
      setselectedVal(parseInt(e.target.value));
    });
  };

  var normalSubjects = [];
  var kSubjects = [];

  const dividerSubjects = (arr) => {
    arr.map((grade) => {
      if (grade.grade == selectedVal) {
        Object.entries(grade.subjects).forEach(([key, value]) => {
          //   console.log(value);
          if (typeof value == "string") {
            normalSubjects.push(value);
          } else {
            kSubjects.push(value);
          }
        });
      }
    });
  };

  dividerSubjects(subjectData);

  console.log(normalSubjects);
  console.log(kSubjects);

  console.log(typeof gradeArr == "object" ? "fuck" : "yeach");

  return (
    <div>
      <div className="AddNewStudent__header">
        <h3>Add Results</h3>
      </div>
      <div className="AddNewStudent__formContainer">
        <form onSubmit={checkValidation}>
          <div id="mainDetails" className="mainDetails">
            <div className="left">
              <div className="leftInside">
                <label htmlFor="index">Index</label>
                <input
                  id="index"
                  name="index"
                  type="text"
                  onChange={(e) => {
                    setindex(e.target.value);
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="term">Term</label>
                <select name="term" id="term">
                  <option value="default">Select Term</option>
                  <option value="t1">Term 1</option>
                  <option value="t2">Term 2</option>
                  <option value="t3">Term 3</option>
                </select>
              </div>

              <div className="leftInside">
                <label htmlFor="grade">Grade</label>
                <select
                  onChange={(e) => {
                    loadSubjects(e);
                  }}
                  name="grade"
                  id="grade"
                >
                  <option value="default">Select Grade</option>
                  {gradeArr.map((grd) => (
                    <option value={grd}>Grade {grd}</option>
                  ))}
                </select>
              </div>
              {normalSubjects.map((sub) => (
                <div className="leftInside">
                  <label htmlFor={sub}>{sub}</label>
                  <input
                    id={sub}
                    name={sub}
                    type="text"
                    onBlur={(e) => {
                      marksArrObj.push({ [sub]: e.target.value });
                    }}
                  />
                </div>
              ))}

              {kSubjects.map((sub) => (
                <div className="leftInside">
                  <select name="grade" id="grade">
                    <option value="default">Select Subject</option>
                    {sub.map((s) => (
                      <option value={s}>{s}</option>
                    ))}
                  </select>
                  <input type="text" />
                </div>
              ))}
            </div>
          </div>
          <br /> <br />
          <div className="submitButton">
            <Button
              style={{ width: 200 }}
              variant="outlined"
              type="submit"
              color="secondary"
            >
              Add Results
            </Button>
            {/* <input type="submit"/>  */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddResults;
