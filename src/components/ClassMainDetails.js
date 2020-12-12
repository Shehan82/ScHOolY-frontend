import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 300,
      backgroundColor: "",
      color:"black"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
     
    },
    my:{
      marginLeft:20,
      fontSize: 15,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const border = {
    
    borderRight:"10px solid gray",
    borderLeft:"10px solid gray",
    borderTop:"1px solid gray",
    minWidth:"100%"
  }

function ClassMainDetails() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (

      <Card style={border} className={classes.root}>
         
      
      <CardActions style={{backgroundColor:" #282b34", color:"white"}}>
        <Typography className={classes.title} gutterBottom>
         Class Details
        </Typography>
        </CardActions>
        <br/>

        
        <Typography className={classes.my}  component="h2">
        <b>Class Teacher - Mrs. Shyamalee</b> 
        </Typography>
        <br/>
        <Typography className={classes.my}  component="h2">
         <b>Boys Count - 28</b> 
        </Typography>
        <Typography className={classes.my}  component="h2">
         <b>Girls Count - 26</b> 
        </Typography>
        <br/>
        <Typography className={classes.my}  component="h2">
         <b>Monitor - Shehan</b> 
        </Typography>
        <Typography className={classes.my}  component="h2">
          <b>Monitress - Nisali</b>  
        </Typography>
        
     <br/>
     
    </Card>

    // <Card className={classes.root}>
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         alt="Contemplative Reptile"
    //         height="140"
    //         image="/static/images/cards/contemplative-reptile.jpg"
    //         title="Contemplative Reptile"
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="h2">
    //           Lizard
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p">
    //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //           across all continents except Antarctica
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button size="small" color="primary">
    //         Share
    //       </Button>
    //       <Button size="small" color="primary">
    //         Learn More
    //       </Button>
    //     </CardActions>
    // </Card>
    )
}

export default ClassMainDetails
