import React, { useEffect } from 'react';
import Class from './Class';
import '../css/GradeBody.css'

function Test1({match}) {
    const arr = (word)=>{
        var res = word.split(",");
        var res2 = [];
        for(var i = 0; i < res.length-1 ; i++)
        {
            res2[i] = res[i+1];
        }
        return res2;
    }
    
    useEffect(() => {
        console.log(arr(match.params.year));
        
        
    }, [])
    return (
        <div>
            <div className="GradeBody__header">
                <h3>Grade {match.params.year[0]}</h3>
            </div>
           
            <div className="GradeBody">
            {/* <h3>Grade {match.params.year} </h3> */}
            {arr(match.params.year).map(letter=>(
                    <Class cls={letter}/>
            ))}
            
            
           
            

            </div>
        </div>
        
    )
}

export default Test1
