import React, { useEffect, useState } from "react";
import "../../css/AddNewStudent.css";
import "../../css/AddResults.css";

import axios from "../../axios";
import Button from "@material-ui/core/Button";
import { NoMeetingRoom } from "@material-ui/icons";

function AddResults() {
  var gradeArr = [];
  var marksArrObj = [];
  var dropDownSub = [];
  var dropDownMarks = [];
  var i = 0;
  var cars = ["Saab", "Volvo", "BMW"];
  const [index, setindex] = useState(1234);
  const [term, setterm] = useState(0);
  const [grade, setgrade] = useState([]);
  const [grd, setgrd] = useState(0);
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
    var checkEmpty = 0;
    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
      if (elements[ii].value == "") {
        checkEmpty = checkEmpty + 1;
      }
    }

    if (checkEmpty == 0) {
      var dropDownSubjects = document.querySelectorAll(".subject");
      var x =
        dropDownSubjects[0].options[dropDownSubjects[0].selectedIndex].text;
      var t = document.getElementsByClassName("dropDownInput");
      var y = t[0].value;
      console.log(y);

      for (var j = 0; j < t.length; j++) {
        marksArrObj.push({
          [dropDownSubjects[j].options[dropDownSubjects[j].selectedIndex].text]:
            t[j].value,
        });
      }

      console.log(marksArrObj);

      axios
        .post("/createResult", {
          index: index,
          term: term,
          grade: grd,
          marks: marksArrObj,
        })
        .then((res) => {
          console.log(res);
          if (res.data == "ok") {
            alert("Result Saved!");
          } else {
            alert("Result Unsaved!");
          }
        });

      for (var ii = 0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
          elements[ii].value = "";
        }
      }

      marksArrObj = [];
    } else {
      alert("Please fill all field");
    }
  };

  const checkValidation = (e) => {
    e.preventDefault();

    sendDetails(e);
  };

  const loadSubjects = (e) => {
    // setgradeSelectVal(parseInt(e.target.value));

    setgrd(parseInt(e.target.value));

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
                <select
                  onChange={(e) => {
                    setterm(parseInt(e.target.value));
                  }}
                  name="term"
                  id="term"
                >
                  <option value="default">Select Term</option>
                  <option value="1">Term 1</option>
                  <option value="2">Term 2</option>
                  <option value="3">Term 3</option>
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
                      i = 0;
                      if (marksArrObj.length == 0) {
                        marksArrObj.push({ [sub]: e.target.value });
                      } else {
                        marksArrObj.map((subMarks) => {
                          if (Object.keys(subMarks)[0] == sub) {
                            subMarks[sub] = e.target.value;
                            i = i + 1;
                          }
                        });

                        if (i == 0) {
                          marksArrObj.push({ [sub]: e.target.value });
                        }
                      }
                    }}
                  />
                </div>
              ))}

              {kSubjects.map((sub) => (
                <div className="leftInside">
                  {/* ////////////////////////////////////////// */}
                  <select className="subject" name="subject" id="subject">
                    <option value="default">Select Subject</option>
                    {sub.map((s) => (
                      <option value={s}>{s}</option>
                    ))}
                  </select>
                  {/* //////////////////////////////////////////////////// */}
                  <input className="dropDownInput" type="text" />
                  {/* //////////////////////////////////////////// */}
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
