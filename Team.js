import React, { Component } from 'react';
import './Team.css'
import anand from './img/anand.jpeg';
import arya from './img/arya.png';
import adi from './img/adi.JPG';
import aman from './img/aman.JPG';
import muskan from './img/muskan.JPG';
import Particles from 'react-particles-js'; 
const particleOpt={
    particles: {
      number:{
        value: 150,
        density:{
          enable: true,
          value_area: 800
        }
      }

         }}
export default class Team extends Component
{
    
    render()
    {
        return(
             <div className="TeamBox">
                <div className="innerteam">
                         
                    <p>Our team</p>
                    <p className="mentor">Mentor</p>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                 <img src={anand}/>
                                 <p>Dr. Anand Parkash Gupta</p>   
                                  <h6>Microsoft Certified Technology Specialist(MCTS)</h6>
                            </div>
                            <div class="flip-card-back">
                                <h3>Technical Trainer</h3>
                                <p className="clg">GLA University</p>
                                <p className="clg">Mathura(U.P)</p>
                                <i className="fa fa-facebook"></i> <i className="fa fa-github"></i> <i className="fa fa-linkedin"></i> <i className="fa fa-twitter"></i> 
                                 
                            </div>
                        </div>
                    </div>
                    <div className="team_card_box">
                         <div className="team_card">
                              <img src={adi} className="adi"/> 
                              <p> 
                                  <center> Aditya Singh Rathore <br/> GLA University, Mathura</center>
                              </p>
                         </div>
                         <div className="team_card">
                         <img src={muskan} className="muskan"/>
                         <p> 
                                  <center> Muskan Gupta <br/> GLA University, Mathura</center>
                              </p>
                         </div>
                         <div className="team_card">
                              <img src={arya} className="arya"/> 
                              <p> 
                                  <center> Aditya Arya <br/> GLA University, Mathura</center>
                              </p>                 
                         </div>
                         <div className="team_card">
                            <img src={aman} className="aman"/>
                            <p> 
                                  <center> Aman Garg <br/> GLA University, Mathura</center>
                              </p>
                         </div>            
                    </div>
                    <Particles 
                params={particleOpt} />
                 </div>   
             
             </div>
        );
    }
}