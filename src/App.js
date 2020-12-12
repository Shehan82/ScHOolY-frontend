import './App.css';
import {Button, makeStyles, Breadcrumbs} from '@material-ui/core';
import SidebarGrade from './components/SidebarGrade';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import GradeBody from './components/GradeBody';
import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ClassInside from './components/ClassInside'





function App() {
   const arr1 = [1,2,3,4,5];
  const arr = {
    1:["A","B","C","D","E"],
    2:["A","B","C"],
    3:["A","B","C","D"],
    4:["A","B","C","D"],
  }


  const [active, setActive] = useState({
    active:"home"
  });

  console.log(active);

  const useStyles = makeStyles({
    active: {
      backgroundColor:'red',
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


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

          {arr1.map((key) => (
            <Link style={{textDecoration:"none",  margin:"10px 0px 10px 0px"}} to={`/grade/${key}`}>
            <button onClick={(e)=>{
              setActive({active: e.target.value })
            }} value={key}  className={parseInt(active.active) === key ? 'active' : 'notActive'}>GRADE {key}</button>

          </Link>
          ))}
        </div>


        {/* body */}
        <div className="App__body">    
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route exact  path="/grade/:grade" component={GradeBody}/>
            <Route path="/grade/:grade/:class"  component={ClassInside}/>
          </Switch>  
        </div>
      </div>
      
    </div>
    </Router>
  );

}

export default App;
