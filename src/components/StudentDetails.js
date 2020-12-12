import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../css/StudentDetails.css';
import SemResult from './SemResult';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';

function StudentDetails({match}) {
    return (
        <div>
            <div className="StudentDetails__headerContainer">
                <div className="StudentDetails__headerGrade">
                <Link to={`/grade/${match.params.grade}`} style={{color:"white", textDecoration:"none"}}>
                    <h3>Grade {match.params.grade}</h3> 
                </Link >
                </div>
                <div className="StudentDetails__headerSlash">
                    <h3>/</h3>
                </div>
                
                <div className="StudentDetails__headerClass">
                    
                <Link to={`/grade/${match.params.grade}/${match.params.class}`} style={{color:"white", textDecoration:"none"}}>
                    <h3>Class {match.params.class}</h3>
                </Link >
                </div>

                <div className="StudentDetails__headerSlash">
                    <h3>/</h3>
                </div>

                <div className="StudentDetails__headerStudent">
                    
                    <h3>{match.params.student}</h3>

                </div>

            </div>

            <div>
                <div className="studentAllDetails">
                    <Card style={{width:"100%"}}>
                    <CardHeader style={{backgroundColor:"#282b34", color:"white", border:"1px solid gray"}} title="18000282 Details"/>

                    <CardContent>
                        <Typography>
                            askjfhaskjasfh
                        </Typography>
                        <Typography>
                            askjfhaskjasfh
                        </Typography>
                        <Typography>
                            askjfhaskjasfh
                        </Typography>
                        <Typography>
                            askjfhaskjasfh
                        </Typography>
                        <Typography>
                            askjfhaskjasfh
                        </Typography>
                    </CardContent>
                    </Card>
                </div>

                <div className="SemResult__container">
                <SemResult/>
                <SemResult/>
                <SemResult/>
                </div>
            </div>

            
        </div>
    )
}

export default StudentDetails
