import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';



const useStyles = makeStyles({
    root: {
      minWidth: 400,
      maxWidth: 450,
      margin:10,
    },
    media: {
      height: 140,
    },
  });



function SemResult({semData, sem}) {
    
    const classes = useStyles();
    return (
        <div >
            <Card className={classes.root}>

                <CardHeader style={{backgroundColor:"#282b34", color:"white", border:"1px solid gray"}} title={`${sem}`}/>
                    
                <CardContent>

                    {Object.keys(semData).map(subject=>(
                         <Typography>
                            <h4>{subject} : {semData[subject]}</h4> 
                         </Typography>
                    ))}

                    {console.log(semData)}
                   
                </CardContent>
            </Card>
        </div>
    )
}

export default SemResult
