import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';
import '../css/Class.css'

function Class(props) {

    const useStyles = makeStyles({
        root: {
          maxWidth: 250,
          minWidth: 200,
          
          backgroundColor: "rgb(66, 66, 66)",
          color:"white",
        },
        media: {
          height: 140,
        },
      });

     

    const classes = useStyles();
    return (
        <div className="class__card">
            
        <Card className={classes.root}>

            <CardActionArea>

                <CardMedia
                className={classes.media}
                image="https://images.all-free-download.com/images/graphiclarge/canoe_water_nature_221611.jpg"
                title={`Class ${props.className}`}
                />

                <CardContent style={{backgroundColor:"#282b34"}} >
                    <Typography  gutterBottom variant="h5" component="h2">
                        Class {props.className}
                    </Typography>
                    <Typography  variant="body2"  component="p">
                       class teacher :{props.teacher}
                    </Typography>
                    <Typography variant="body2" color="" component="p">
                       Boys count : 28
                    </Typography>
                    <Typography variant="body2" color="" component="p">
                       Girls count : 26
                    </Typography>
                </CardContent>

            </CardActionArea>

           

        </Card>
               
        </div>
    )
}

export default Class
