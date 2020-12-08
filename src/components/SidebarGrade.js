import React from 'react';
import {Button} from '@material-ui/core';
import '../css/SidebarGrade.css';

function Grade({year}) {
    return (
        <div className="Grade__container">
            <Button style={{color:"white", width:"100%"}}>Grade {year}</Button>
        </div>
    )
}

export default Grade
