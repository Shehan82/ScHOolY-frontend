import React, { useState } from "react";
import "../css/EditDetails.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "../axios";
import Button from "@material-ui/core/Button";
import "../css/AddNewStudent.css";
import { useEffect } from "react";

function EditDetails({ match }) {
  const [studentDetails, setstudentDetails] = useState({});
  const [index, setindex] = useState("");
  const [fullName, setfullName] = useState("");
  const [address, setaddress] = useState("");
  const [telePhone, settelePhone] = useState(111);
  const [mobilePhone, setmobilePhone] = useState(111);
  const [grade, setgrade] = useState(0);
  const [cls, setcls] = useState("");
  const [motherName, setmotherName] = useState("");
  const [fatherName, setfatherName] = useState("");
  useEffect(() => {
    getStuDetails();
  }, []);

  const getStuDetails = async () => {
    await axios.get(`/index/${match.params.index}`).then((res) => {
      setstudentDetails(res.data[0]);
    });
  };

  const sendDetails = (e) => {
    axios
      .post("/updateStu", {
        index: document.getElementsByName("index")[0].value,
        fullName: document.getElementsByName("fullName")[0].value,
        address: document.getElementsByName("address")[0].value,
        landNum: document.getElementsByName("landNum")[0].value,
        mobileNum: document.getElementsByName("mobileNum")[0].value,
        mothersName: document.getElementsByName("motherName")[0].value,
        fathersName: document.getElementsByName("fatherName")[0].value,
        grade: document.getElementsByName("grade")[0].value,
        class: document.getElementsByName("class")[0].value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data == "yes") {
          alert("Update Successfully!");
        } else {
          alert("Update unsuccess!");
        }
      });
  };

  const checkValidation = (e) => {
    e.preventDefault();

    sendDetails(e);
  };

  return (
    <div>
      <div className="EditDetails__headerContainer">
        <div className="EditDetails__headerGrade">
          <Link
            to={`/home/updateStudent`}
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Change Student Details</h3>
          </Link>
        </div>
        <div className="EditDetails__headerSlash">
          <h3>/</h3>
        </div>

        <div className="EditDetails__headerClass">
          <h3>{match.params.index}</h3>
        </div>
      </div>

      <div className="AddNewStudent__formContainer">
        <form onSubmit={checkValidation}>
          <div className="mainDetails">
            <div className="left">
              <div className="leftInside">
                <label htmlFor="index">Index</label>
                <input
                  disabled
                  id="index"
                  name="index"
                  type="text"
                  value={studentDetails.index}
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
                  defaultValue={studentDetails.fullName}
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
                  defaultValue={studentDetails.address}
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
                  defaultValue={studentDetails.landNum}
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
                  defaultValue={studentDetails.mobileNum}
                  onChange={(e) => {
                    setmobilePhone(e.target.value);
                  }}
                />
              </div>
              <div className="leftInside">
                <label htmlFor="grade">Grade</label>
                <input
                  id="grade"
                  name="grade"
                  type="text"
                  defaultValue={studentDetails.grade}
                  onChange={(e) => {
                    setgrade(e.target.value);
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="class">Class</label>
                <input
                  id="class"
                  name="class"
                  type="text"
                  defaultValue={studentDetails.class}
                  onChange={(e) => {
                    setcls(e.target.value.toUpperCase());
                  }}
                />
              </div>

              <div className="leftInside">
                <label htmlFor="motherName">Mother's Name</label>
                <input
                  id="motherName"
                  name="motherName"
                  type="text"
                  defaultValue={studentDetails.mothersName}
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
                  defaultValue={studentDetails.fathersName}
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
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDetails;
