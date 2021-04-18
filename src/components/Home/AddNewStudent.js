import React, { useState, useEffect } from "react";
import "../../css/AddNewStudent.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "../../axios";
import Button from "@material-ui/core/Button";

function AddNewStudent() {
  var gradeArr = [];
  var clsArr = [];
  const [index, setindex] = useState(1234);
  const [fullName, setfullName] = useState("");
  const [address, setaddress] = useState("");
  const [telePhone, settelePhone] = useState("");
  const [mobilePhone, setmobilePhone] = useState("");
  const [grade, setgrade] = useState("");
  const [cls, setcls] = useState("");
  const [motherName, setmotherName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [gradeData, setgradeData] = useState([]);
  const [classArr, setclassArr] = useState([]);

  //   useEffect hook
  useEffect(() => {
    axios.get("/grade").then((res) => {
      setgradeData(res.data);
    });
  }, []);

  gradeData.map((grade) => gradeArr.push(grade.grade));
  console.log(gradeData);

  const loadClass = (e) => {
    clsArr = [];
    setgrade(parseInt(e.target.value));
    gradeData.map((grade) => {
      if (grade.grade == e.target.value) {
        console.log(grade.class);
        grade.class.map((cls) => {
          clsArr.push(cls.name);
        });
      }
    });
    setclassArr(clsArr);
  };

  const sendDetails = (e) => {
    var checkEmpty = 0;
    var elements = document.getElementsByTagName("input");

    for (var ii = 0; ii < elements.length; ii++) {
      if (elements[ii].value == "") {
        checkEmpty = checkEmpty + 1;
      }
    }

    if (checkEmpty == 0) {
      axios
        .post("/create", {
          index: `${index}`,
          fullName: `${fullName}`,
          address: `${address}`,
          landNum: `${telePhone}`,
          mobileNum: `${mobilePhone}`,
          mothersName: `${motherName}`,
          fathersName: `${fatherName}`,
          grade: `${grade}`,
          class: `${cls}`,
        })
        .then((res) => {
          console.log(res);
          if (res.data == "ok") {
            alert("Register Successfully!");
            for (var ii = 0; ii < elements.length; ii++) {
              if (elements[ii].type == "text") {
                elements[ii].value = "";
              }
            }
          } else {
            alert("register unsuccess!");
          }
        });
    } else {
      alert("Please fill all field");
    }
  };

  const checkValidation = (e) => {
    e.preventDefault();
    sendDetails(e);
  };
  console.log(classArr);
  return (
    <div>
      <div className="AddNewStudent__header">
        <h3>Add New Student</h3>
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
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="landNum">Telephone Number</label>
                <input
                  id="landNum"
                  name="landNum"
                  type="text"
                  onChange={(e) => {
                    settelePhone(e.target.value);
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="mobileNum">Mobile Number</label>
                <input
                  id="mobileNum"
                  name="mobileNum"
                  type="text"
                  onChange={(e) => {
                    setmobilePhone(e.target.value);
                  }}
                />
              </div>
              {/* <div className="leftInside">
                <label htmlFor="grade">Grade</label>
                <input
                  id="grade"
                  name="grade"
                  type="text"
                  onChange={(e) => {
                    setgrade(e.target.value);
                  }}
                />
              </div> */}
              {/* /////////////////////// */}
              <div className="leftInside">
                <label htmlFor="grade">Grade</label>
                <select
                  onChange={(e) => {
                    loadClass(e);
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
              {/* /////////////////////////// */}

              {/* <div className="leftInside">
                <label htmlFor="class">Class</label>
                <input
                  id="class"
                  name="class"
                  type="text"
                  onChange={(e) => {
                    setcls(e.target.value.toUpperCase());
                  }}
                />
              </div> */}

              <div className="leftInside">
                <label htmlFor="class">Class</label>
                <select
                  onChange={(e) => {
                    setcls(e.target.value);
                  }}
                  name="class"
                  id="class"
                >
                  <option value="default">Select Class</option>
                  {classArr.length != 0
                    ? classArr.map((cls) => (
                        <option value={cls}>Class {cls}</option>
                      ))
                    : null}
                </select>
              </div>

              <div className="leftInside">
                <label htmlFor="motherName">Mother's Name</label>
                <input
                  id="motherName"
                  name="motherName"
                  type="text"
                  onChange={(e) => {
                    setmotherName(e.target.value);
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="fatherName">Father's Name</label>
                <input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  onChange={(e) => {
                    setfatherName(e.target.value);
                  }}
                />
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
              Add Student
            </Button>
            {/* <input type="submit"/>  */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewStudent;
