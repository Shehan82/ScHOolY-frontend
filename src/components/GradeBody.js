import React, { useEffect, useState } from 'react';
import Class from './Class';
import '../css/GradeBody.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from '../axios';

function GradeBody({match}) {
  

    const [classes, setClasses] = useState([]);


  console.log(classes);

    useEffect(() => {
      axios.get(`/classes/${match.params.grade}`)
      .then(res => {
        setClasses(res.data[0].class);
      });
 
    }, [match.params.grade])

    console.log(classes +""+ match.params.grade);
    
   
    return (
      
        <div>
            <div className="GradeBody__header">
             <h3>Grade {match.params.grade}</h3>
            </div>
           
            <div className="GradeBody">
                {classes.map(cls => (
                    <Link style={{textDecoration:"none"}} to={`/grade/${match.params.grade}/${cls}`}>
                      <Class classRoom={cls}/>
                   </Link>
                ))}
            </div>
        </div>

      
        
    )
}

export default GradeBody
