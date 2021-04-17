import React from "react";
import "../css/Home.css";
import CardsForHome from "./Home/CardsForHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="Home__header">
        <h3>Home</h3>
      </div>
      <div className="HomeBody">
        <Link style={{ textDecoration: "none" }} to="/home/addNewStudent">
          <CardsForHome
            image={
              "https://us.123rf.com/450wm/azvector/azvector1809/azvector180900204/109861313-stock-vector-student-icon-education-concept-icon-with-add-sign-student-icon-and-new-plus-positive-symbol.jpg?ver=6"
            }
            title={"Add new student"}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/home/addResults">
          <CardsForHome
            image={
              "https://us.123rf.com/450wm/azvector/azvector1809/azvector180900204/109861313-stock-vector-student-icon-education-concept-icon-with-add-sign-student-icon-and-new-plus-positive-symbol.jpg?ver=6"
            }
            title={"Add Results"}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/home/updateStudent">
          <CardsForHome
            image={
              "https://previews.123rf.com/images/mialima/mialima1608/mialima160800062/61663579-student-line-icon-isolated-on-a-white-background-college-or-university-graduation-sign.jpg"
            }
            title={"Change Details"}
          />
        </Link>

        {/* <Link style={{ textDecoration: "none" }} to="/home/removeStudent">
          <CardsForHome
            image={
              "https://previews.123rf.com/images/azvector/azvector1809/azvector180900168/108450534-female-student-icon-graduation-cap-education-concept-icon-with-cancel-sign-student-icon-and-close-de.jpg"
            }
            title={"Remove student"}
          />
        </Link> */}

        <Link style={{ textDecoration: "none" }} to="/home/addNewGrade">
          <CardsForHome
            image={
              "https://previews.123rf.com/images/vectorv/vectorv1910/vectorv191023995/132947693-white-add-new-folder-icon-isolated-on-white-background-new-folder-file-sign-copy-document-icon-add-a.jpg"
            }
            title={"Add New grade"}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/home/updateGrade">
          <CardsForHome
            image={
              "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-white-edit-icon-image_1338673.jpg"
            }
            title={"Update grade"}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/home/removeGrade">
          <CardsForHome
            image={
              "https://www.uidownload.com/files/240/295/614/delete-icon.jpg"
            }
            title={"Remove grade"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
