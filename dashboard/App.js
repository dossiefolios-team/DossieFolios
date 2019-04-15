import React,{Component} from 'react';
import ReactDOM from 'react-dom'; 
import './App.css';
 import {Route,Switch} from 'react-router-dom'
import profile from './Component/Pages/Profile/Profile'
import welcome from './Component/Pages/Welcome/Welcome';
import Update from './Component/Pages/UpdateProfile/Update';
import Sidebar from './Sidebar';
class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
          
        <Switch>
          <Route path='/welcome' component={welcome}/>
          <Route path='/create' component={profile}/>
          <Route path='/update' component={Update}/>
        </Switch>

      </div>
    );
  }
}

export default App;
