import React, { useEffect } from 'react';
import Class from './Class';

function Test1({match}) {
    
    useEffect(() => {
       console.log(match);
    }, [])
    return (
        <div>
            <h3>Grade {match.params.year} </h3>

            <Class/>
        </div>
    )
}

export default Test1
