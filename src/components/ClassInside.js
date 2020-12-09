import React from 'react';
import '../css/ClassInside.css'

function ClassInside({match}) {
    return (
        <div>
            <div className="ClassInside__headerContainer">
                <div className="ClassInside__headerGrade">
                    
                    <h3>Grade {match.params.grade}</h3> 
                </div>
                <div className="ClassInside__headerSlash">
                    <h3>/</h3>
                </div>
                <div className="ClassInside__headerClass">
                    <h3>Class {match.params.class}</h3>
                </div>

            </div>
           
            

            {console.log(match.params)}
            
        </div>
    )
}

export default ClassInside
