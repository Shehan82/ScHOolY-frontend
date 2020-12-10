import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  
    
    
  },
});

function createData(index, fullName, view) {
  return { index, fullName, view };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];


function DetailsTable() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{backgroundColor:"black"}}>
            <TableRow >
              <TableCell style={{color:"white"}} >Index Number</TableCell>
              <TableCell style={{color:"white"}} align="right">Full Name</TableCell>
              <TableCell style={{color:"white"}} align="right">View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <TableRow key={row.index}>
                <TableCell component="th" scope="row">
                  {row.index}
                </TableCell>
                <TableCell  align="right">{row.fullName}</TableCell>
                <TableCell align="right">{row.view}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DetailsTable
