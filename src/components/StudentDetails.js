import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../css/StudentDetails.css'

function StudentDetails({match}) {
    return (
        <div>
            <div className="StudentDetails__headerContainer">
                <div className="StudentDetails__headerGrade">
                <Link to={`/grade/${match.params.grade}`} style={{color:"white", textDecoration:"none"}}>
                    <h3>Grade {match.params.grade}</h3> 
                </Link >
                </div>
                <div className="StudentDetails__headerSlash">
                    <h3>/</h3>
                </div>
                
                <div className="StudentDetails__headerClass">
                    
                <Link to={`/grade/${match.params.grade}/${match.params.class}`} style={{color:"white", textDecoration:"none"}}>
                    <h3>Class {match.params.class}</h3>
                </Link >
                </div>

                <div className="StudentDetails__headerSlash">
                    <h3>/</h3>
                </div>

                <div className="StudentDetails__headerStudent">
                    
                    <h3>{match.params.student}</h3>

                </div>

            </div>
        </div>
    )
}

export default StudentDetails
