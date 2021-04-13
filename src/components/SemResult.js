import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    maxWidth: 450,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

function SemResult({ semData, sem }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          style={{
            backgroundColor: "#282b34",
            color: "white",
            border: "1px solid gray",
          }}
          title={"Term " + `${sem}`}
        />

        <CardContent>
          {/* {semData.length > 0
            ? semData.map((sub) => (
                <h4>
                  {Object.keys(sub)[0]} : {sub[Object.keys(sub)[0]]}
                </h4>
              ))
            : null} */}

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead
                style={{
                  backgroundColor: " #282b34",
                  border: "1px solid gray",
                }}
              >
                <TableRow>
                  <TableCell style={{ color: "white" }}>Subjects</TableCell>
                  <TableCell style={{ color: "white" }} align="left">
                    Marks
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {semData.map((sub) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {Object.keys(sub)[0]}
                    </TableCell>
                    <TableCell align="left">
                      {sub[Object.keys(sub)[0]]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default SemResult;
