import React, { useEffect, useState } from "react";
import "../../css/AddNewStudent.css";
import "../../css/AddResults.css";

import axios from "../../axios";
import Button from "@material-ui/core/Button";

function AddResults() {
  var gradeArr = [];
  const [index, setindex] = useState(1234);
  const [grade, setgrade] = useState([]);
  const [gradeData, setgradeData] = useState([]);
  const [gradeSelectVal, setgradeSelectVal] = useState(0);

  useEffect(() => {
    axios.get("/grade").then((res) => {
      setgradeData(res.data);
    });
  }, []);

  gradeData.map((grade) => gradeArr.push(grade.grade));

  const sendDetails = (e) => {
    axios
      .post("/create", {
        index: `${index}`,
      })
      .then((res) => {
        console.log(res);
        if (res.data == "ok") {
          alert("Register Successfully!");
        } else {
          alert("register unsuccess!");
        }
      });
  };

  const checkValidation = (e) => {
    e.preventDefault();

    sendDetails(e);
  };

  const loadSubjects = (e) => {
    setgradeSelectVal(parseInt(e.target.value));
  };

  console.log(gradeSelectVal);

  return (
    <div>
      <div className="AddNewStudent__header">
        <h3>Add Results</h3>
      </div>
      <div className="AddNewStudent__formContainer">
        <form onSubmit={checkValidation}>
          <div className="mainDetails">
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
