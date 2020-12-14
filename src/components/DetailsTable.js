import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

function createData(index, fullName, view) {
  return { index, fullName, view };
}






function DetailsTable(props) {
  console.log(props.students)
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{backgroundColor:" #282b34", border:"1px solid gray"}}>
            <TableRow >
              <TableCell style={{color:"white"}} >Index Number</TableCell>
              <TableCell style={{color:"white"}} align="left">Full Name</TableCell>
              <TableCell style={{color:"white"}} align="center">View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {props.students.map((student) => (
              <TableRow  key={student.index}>
                <TableCell component="th" scope="row">
                  {student.index}
                </TableCell>
                <TableCell  align="left">{student.fullName}</TableCell>
                <TableCell align="center">
                  <Link to={`/grade/${props.grade}/${props.class}/${student.index}`}>
                   <IconButton onClick={()=>{console.log(props)}} style={{color:"black"}} > <VisibilityIcon/></IconButton>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DetailsTable
