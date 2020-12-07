import './App.css';
import {Button} from '@material-ui/core';
import Grade from './components/Grade';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Test1 from './components/Test1';
import Test2 from './components/Test2';




function App() {
  return (
    <Router>
    <div className="App">
       <div className="App__header">
              <h3>ScHOolY</h3>
       </div>


        <div className="App__bodyContainer">
          <div className="App__sideBar">
            <h3>gRadeS</h3><br/>
           
            <Link to="/grade2">
            <Grade/>
            </Link>
            
            <Grade/>
            <Grade/>
            <Grade/>
         
          </div>



          <div className="App__body">
           
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/grade1" component={Test1}/>
              <Route path="/grade2" component={Test2}/>
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
