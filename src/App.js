import './App.css';
import {Button} from '@material-ui/core';
import SidebarGrade from './components/SidebarGrade';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import GradeBody from './components/GradeBody';
import { useState } from 'react';





function App() {
  // const arr = [1,2,3,4,5];
  const arr = {
    1:["A","B","C","D","E"],
    2:["A","B","C"],
    3:["A","B","C","D"],
    4:["A","B","C","D"],
  }

  const [active, setActive] = useState({
    active:""
  });

  console.log(active);




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
                <Button style={{color:"white", width:"100%"}}>Home</Button>
                </Link>
              </div>
            
            
            <div id="myDiv">
              {Object.keys(arr).map((key) => (
              <Link style={{textDecoration:"none"}} to={`/grade/${[key, arr[key]]}`}>
               <button onClick={(e)=>{
                 setActive({active: e.target.value })
               }} value={key} className={active.active === key ? 'active' : ''}>Grade {key}</button>
              </Link>
              ))}
            </div>
          
         
          </div>



          <div className="App__body">
              
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/grade/:year" component={GradeBody}/>
            
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
