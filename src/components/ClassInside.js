import React from 'react'

function ClassInside({match}) {
    return (
        <div>
            {console.log(match.params)}
            Grade : {match.params.grade}
            <br/>
            <br/>
            class : {match.params.class}
        </div>
    )
}

export default ClassInside
