import React, { useEffect } from 'react';

function Test1({match}) {
    
    useEffect(() => {
       console.log(match);
    }, [])
    return (
        <div>
            <h3>Grade {match.params.year} </h3>
        </div>
    )
}

export default Test1
