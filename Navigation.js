import React, { Component } from 'react';
import aboutus from './AboutUs'; 
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Navigation.css';
import header from './Header';
import Service from './Service'; 
import login from './Login';

class Navigation extends Component {
  render() {
      //const sections=['Home','About','Category','Services','Login','SignUp'];
      //const navLink=sections.map(section =>
      /*{
           return(
                <li><a href="#">{section}</a></li>
           )
      });*/
    return (
      <Router>
       <nav>
            <div className="logo"></div>   
             <ul>
                {/*navLink*/}
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Category">Category</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/">SignUp</Link></li>
                 
                <Route path="/login" component={login}/> 
                <Route path="/home" exact strict render={
                  ()=>{return(header);}
                }/>               
            </ul>        
       </nav></Router>
        
    );
  }
}

export default Navigation;
