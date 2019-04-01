import React, { Component } from 'react';
import './Header.css';
import BackGround from './img/new-one3.jpg';
const mystyles={
    backgroundImage: `url( ${BackGround} )`,
    height: '50vh',
    backgroundSize: 'cover'
}
class Header extends Component
{
  
 render()
 {
     return(
          
            <header style={mystyles}>
                <h5 className="HeaderLogo">{this.props.heading}</h5>
                <h1>{this.props.title}</h1>
     {/*<a href="#button" className="primary-btn text-uppercase">{this.props.button}</a>*/} 
            </header>
     );
 }   
};
export default Header;