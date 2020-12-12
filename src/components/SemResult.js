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



function SemResult() {
    const classes = useStyles();
    return (
        <div >
            <Card className={classes.root}>

               
                    
                <CardContent>
                    
                    <Typography>
                    buddhisam : 90
                    maths : 100
                    </Typography>
                    <Typography>
                    kajsfajhfasjflkajf
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>

                    <Typography>
                    afkjasflkas
                    </Typography>
                   
                   
                    
                    alfkajsdfkaj
                    afklajslfkajfas
                    afkjalkfj
                </CardContent>
            </Card>
        </div>
    )
}

export default SemResult
