import React, { useEffect, useState } from 'react';
import Class from './Class';
import '../css/GradeBody.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from '../axios';

function GradeBody({match}) {
  

    const [school, setSchool] = useState([]);
    const [classes, setclasses] = useState([]);
    const cls = ()=>{
        for(var i=0; i< school.length;i++)
        {
            if(school[i].grade == match.params.grade)
            {
                return school[i].class;
            }
        }
    }

    
  const allCls = cls();
  console.log(allCls)
    



  console.log(classes);

    useEffect(() => {
      axios.get('/grade')
      .then(res => {
        setSchool(res.data);
      });
      
    }, [])

   
    return (
      
        <div>
            <div className="GradeBody__header">
             <h3>Grade {match.params.grade}</h3>
            </div>
           
            <div className="GradeBody">
                {allCls.map(cls => (
                    <Link style={{textDecoration:"none"}} to={`/grade/${match.params.grade}/${cls}`}>
                      <Class classRoom={cls}/>
                   </Link>
                ))}
            </div>
        </div>

      
        
    )
}

export default GradeBody
