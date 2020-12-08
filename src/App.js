import './App.css';
import {Button} from '@material-ui/core';
import SidebarGrade from './components/SidebarGrade';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import GradeBody from './components/GradeBody';





function App() {
  const arr = [1,2,3,4,5];
  return (
    <Router>
    <div className="App">
       <div className="App__header">
              <h3>ScHOolY</h3>
       </div>


        <div className="App__bodyContainer">
          <div className="App__sideBar">
            <h3>gRadeS</h3><br/>
            {arr.map(num => (
              <Link style={{textDecoration:"none"}} to={`/grade/${num}`}>
                <SidebarGrade year={num}/>
              </Link>
              ))}
         
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
