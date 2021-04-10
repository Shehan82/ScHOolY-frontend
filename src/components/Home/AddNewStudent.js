import React, { useState } from "react";
import "../../css/AddNewStudent.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "../../axios";
import Button from "@material-ui/core/Button";

function AddNewStudent() {
  const [index, setindex] = useState(1234);
  const [fullName, setfullName] = useState("");
  const [address, setaddress] = useState("");
  const [telePhone, settelePhone] = useState("");
  const [mobilePhone, setmobilePhone] = useState("");
  const [grade, setgrade] = useState("");
  const [cls, setcls] = useState("");
  const [motherName, setmotherName] = useState("");
  const [fatherName, setfatherName] = useState("");

  const sendDetails = (e) => {
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
        } else {
          alert("register unsuccess!");
        }
      });
  };

  const checkValidation = (e) => {
    e.preventDefault();
    // function isEmpty(myVar) {
    //   if (myVar === "") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    // function Empty() {
    //   var index = `${e.target.elements.index.value}`;
    //   var fullName = `${e.target.elements.fullName.value}`;
    //   var address = `${e.target.elements.address.value}`;
    //   var landNum = `${e.target.elements.landNum.value}`;
    //   var mobileNum = `${e.target.elements.mobileNum.value}`;
    //   var mothersName = `${e.target.elements.motherName.value}`;
    //   var fathersName = `${e.target.elements.fatherName.value}`;
    //   var grade = `${e.target.elements.grade.value}`;
    //   var cls = `${e.target.elements.class.value}`;

    //   var arr = [
    //     index,
    //     fullName,
    //     address,
    //     landNum,
    //     mobileNum,
    //     mothersName,
    //     fathersName,
    //     grade,
    //     cls,
    //   ];

    //   var arr2 = [
    //     "Index",
    //     "FullName",
    //     "Address",
    //     "TelephoneNumber",
    //     "MobileNumber",
    //     "Mother'sName",
    //     "Father'sName",
    //     "Grade",
    //     "Class",
    //   ];
    //   var emptyIndex = [];
    //   var empty = [];
    //   var length = arr.length;
    //   for (let i = 0; i < length; i++) {
    //     if (isEmpty(arr[i])) {
    //       emptyIndex.push(i);
    //     }
    //   }

    //   for (let i = 0; i < emptyIndex.length; i++) {
    //     empty.push(arr2[emptyIndex[i]]);
    //   }

    //   console.log(empty);

    //   if (empty.length == 0) {
    //     return true;
    //   } else if (empty.length == 1) {
    //     alert(empty[0] + " field is empty!");
    //   } else {
    //     let allEmpty = "";
    //     for (var j = 0; j < empty.length; j++) {
    //       allEmpty = allEmpty + empty[j] + "  ";
    //     }

    //     alert(allEmpty + " fields are empty!");
    //   }
    // }

    // if (Empty()) {
    sendDetails(e);
    // }
  };

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
              <div className="leftInside">
                <label htmlFor="grade">Grade</label>
                <input
                  id="grade"
                  name="grade"
                  type="text"
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
