import React from 'react';
import '../css/ClassInside.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DetailsTable from './DetailsTable';
import ClassMainDetails from './ClassMainDetails'

function ClassInside({match}) {
    return (
        <div>
            <div className="ClassInside__headerContainer">
                <div className="ClassInside__headerGrade">
                <Link to={`/grade/${match.params.grade}`} style={{color:"white", textDecoration:"none"}}>
                    <h3>Grade {match.params.grade}</h3> 
                </Link >
                </div>
                <div className="ClassInside__headerSlash">
                    <h3>/</h3>
                </div>
                
                <div className="ClassInside__headerClass">
                    
                <Link to={`/grade/${match.params.grade}/${match.params.class}`} style={{color:"white", textDecoration:"none"}}>
                    <h3>Class {match.params.class}</h3>
                </Link >
                </div>

            </div>

            <div className="ClassInside__bodyContainer">

            <div className="studentDetails">
                    <DetailsTable/>
                </div>
                <div className="mainDetails">
                    <ClassMainDetails/>
                </div>
               
            </div>
           
            
            
        </div>
    )
}

export default ClassInside
