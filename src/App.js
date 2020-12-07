import './App.css';
import {Button} from '@material-ui/core';
import Grade from './components/Grade'

function App() {
  return (
    <div className="App">
       <div className="App__header">
              <h3>ScHOolY</h3>
       </div>


        <div className="App__bodyContainer">
          <div className="App__sideBar">
            <h3>gRadeS</h3><br/>
            <Grade/>
            <Grade/>
            <Grade/>
            <Grade/>
          </div>



          <div className="App__body">
            <h3>appbody</h3>
          </div>
        </div>
      
    </div>
  );
}

export default App;
