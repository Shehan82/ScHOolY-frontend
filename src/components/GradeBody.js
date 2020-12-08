import React, { useEffect } from 'react';
import Class from './Class';
import '../css/GradeBody.css'

function Test1({match}) {
    
    useEffect(() => {
       console.log(match);
    }, [])
    return (
        <div>
            <div className="GradeBody__header">
                <h3>Grade {match.params.year}</h3>
            </div>
           
            <div className="GradeBody">
            {/* <h3>Grade {match.params.year} </h3> */}
            
            <Class/>
            <Class/>
            <Class/>
            <Class/>
            <Class/>
            

            </div>
        </div>
        
    )
}

export default Test1
