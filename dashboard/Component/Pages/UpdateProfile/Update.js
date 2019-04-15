import React from 'react'
import ReactCardFlip from 'react-card-flip';
 
import './Update.css';
 
export default class Update extends React.Component {
    constructor() {
      super();
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <div className="containerUpdate">
          <p>/this is update section</p>
         </div> 
      )
    }
  }

 
