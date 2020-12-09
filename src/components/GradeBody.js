import React, { useEffect } from 'react';
import Class from './Class';
import '../css/GradeBody.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function GradeBody({match}) {
    // const arr = (word)=>{
    //     var res = word.split(",");
    //     var res2 = [];
    //     for(var i = 0; i < res.length-1 ; i++)
    //     {
    //         res2[i] = res[i+1];
    //     }
    //     return res2;
    // }
    
    const classes = ['A','B','C','D'];
    return (
      
        <div>
            <div className="GradeBody__header">
             <h3>Grade {match.params.year}</h3>
            </div>
           
            <div className="GradeBody">
                {classes.map(cls => (
                    <Link to={`/grade/${match.params.year}/${cls}`}>
                      <Class classRoom={cls}/>
                   </Link>
                ))}
            </div>
        </div>
      
        
    )
}

export default GradeBody
