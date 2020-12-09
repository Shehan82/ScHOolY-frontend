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
       <div className="App__header">
              <h3>ScHOolY</h3>
       </div>


        <div className="App__bodyContainer">
          <div className="App__sideBar">

            <div className="App__sideBarHeader">
            <h3>Menu</h3>
            </div>

            
              <div className="App__sideBarHome">
              <Link style={{textDecoration:"none"}} to='/'>
                {/* <Button startIcon={<HomeIcon/>} style={{color:"white", width:"100%"}}>Home</Button> */}

                <button  onClick={(e)=>{
                 setActive({active: e.target.value })
               }} value="home" className={active.active === "home" ? 'active' : 'notActive'}>HOME</button>

                </Link>
              </div>
            
            
               
              {/* {Object.keys(arr).map((key) => (
              <Link style={{textDecoration:"none"}} to={`/grade/${[key, arr[key]]}`}>
               <button onClick={(e)=>{
                 setActive({active: e.target.value })
                 console.log(e.target.value)
                 console.log(active.active);
                 console.log(key);
                 console.log(active.active === key)
               }} value={key} className={active.active === key ? console.log("meka") : 'notActive'}>GRADE {key}</button> */}

              {arr1.map((key) => (
                <Link style={{textDecoration:"none"}} to={`/grade/${key}`}>
               <button onClick={(e)=>{
                 setActive({active: e.target.value })
                //  console.log(e.target.value)
                //  console.log(active.active);
                //  console.log(key);
                //  console.log(arr1.map(String))
                //  console.log(Object.keys(arr))

               }} value={key}  className={parseInt(active.active) === key ? 'active' : 'notActive'}>GRADE {key}</button>

              </Link>
              ))}
          
          
         
          </div>



          <div className="App__body">

                <Breadcrumbs aria-label="breadcrumb">
                    <Link to='/grade/year/class'>
                      Material-UI
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                      Core
                    </Link>
                    <Link
                      color="textPrimary"
                      href="/components/breadcrumbs/"
                      onClick={handleClick}
                      aria-current="page"
                    >
                      Breadcrumb
                    </Link>
                </Breadcrumbs>
              
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route exact  path="/grade/:year" component={GradeBody}/>
              <Route path="/grade/:year/:class"  component={ClassInside}/>
            
            </Switch>
            {/* <Home/>
            <Test1/>
            <Test2/> */}
            
          </div>
        </div>
      
    </div>
    </Router>
  );

}

export default App;
