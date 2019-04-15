import React from 'react'
import ReactCardFlip from 'react-card-flip';
import arya from './arya.png';
import './Update.css';
/*const Update=()=>{
    return(
        <div className="containerUpdate">
             Update
        </div>    
    );
}

export default Update;*/

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
        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div key="front" className="front">
             
          <img className="imagearya" src={arya}/>
          <p>Aditya Arya</p>
            <button onClick={this.handleClick}>More Info</button>
          </div>
   
          <div key="back" className="back">
            <p>B.Tech C.Se(2016-2020)</p><br/>
            <p>GLA University,Mathura(U.P)</p>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-github"></i>
            <button onClick={this.handleClick}>Back</button>
          </div>
        </ReactCardFlip></div> 
      )
    }
  }

 