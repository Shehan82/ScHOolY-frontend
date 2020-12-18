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

function CardsForHome(props) {
    const useStyles = makeStyles({
        root: {
          width:180,
       
          
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
                    image={props.image}
                    title={`Class`}
                    />
    
                    <CardContent style={{backgroundColor:"#282b34"}} >
                        <Typography  >
                          {props.title}
                        </Typography>
                        
                    </CardContent>
    
                </CardActionArea>
    
               
    
            </Card>

        </div>
    )
}

export default CardsForHome
