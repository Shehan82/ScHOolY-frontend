import React from 'react';
import {Button} from '@material-ui/core';
import '../css/SidebarGrade.css';
import { makeStyles } from '@material-ui/core/styles';

function Grade({year}) {
    const useStyles = makeStyles({
        button: {
         backgroundColor:"red"
        },
      });
      const classes = useStyles();

      

    return (
        <div className="Grade__container">
            <Button   style={{color:"white", width:"100%", }}>Grade {year}</Button>
        </div>
    )
}

export default Grade
