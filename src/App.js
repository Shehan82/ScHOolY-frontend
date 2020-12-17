import './App.css';
import {Button, makeStyles, Breadcrumbs} from '@material-ui/core';
import SidebarGrade from './components/SidebarGrade';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import GradeBody from './components/GradeBody';
import { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ClassInside from './components/ClassInside'
import StudentDetails from './components/StudentDetails';
import axios from './axios';




function App() {
   const arr1 = [1,2,3,4,5];
  const arr = {
    1:["A","B","C","D","E"],
    2:["A","B","C"],
    3:["A","B","C","D"],
    4:["A","B","C","D"],
  }

  const [school, setSchool] = useState([])

  useEffect(() => {
    axios.get('/grade')
    .then(res => {
      setSchool(res.data);
    })
  }, [])

  console.log(school);
  const [active, setActive] = useState({
    active:"home"
  });



  const useStyles = makeStyles({
    active: {
      backgroundColor:'red',
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  


  return (
    <Router>
    <div className="App">


      {/* header */}
      <div className="App__header">
          <h3>ScHOolY</h3>
      </div>



      {/* sidebar and app body */}
      <div className="App__bodyContainer">

        
        {/* sidebar */}
        <div className="App__sideBar">

          <div className="App__sideBarHeader">
            <h3>Menu</h3>
          </div>

          <div className="App__sideBarHome">
            <Link style={{textDecoration:"none"}} to='/'>
                <button  onClick={(e)=>{
                 setActive({active: e.target.value })
               }} value="home" className={active.active === "home" ? 'active' : 'notActive'}>HOME</button>

            </Link>
          </div>

          {school.map((grade) => (
            <Link style={{textDecoration:"none",  margin:"10px 0px 10px 0px"}} to={`/grade/${grade.grade}`}>
            <button onClick={(e)=>{
              setActive({active: e.target.value })
            }} value={grade.grade}  className={parseInt(active.active) === grade.grade ? 'active' : 'notActive'}>GRADE {grade.grade}</button>

          </Link>
          ))}
        </div>


        {/* body */}
        <div className="App__body">    
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact  path="/grade/:grade" component={GradeBody}/>
            <Route exact path="/grade/:grade/:class"  component={ClassInside}/>
            <Route path="/grade/:grade/:class/:student" component={StudentDetails}/>
          </Switch>  
          
        </div>
      </div>
      
    </div>
    </Router>
  );

}

export default App;
