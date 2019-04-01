import React, { Component } from 'react';
import './Category.css'
import './script.js'
import logo from './img/p1.jpg';  
import logo1 from './img/p2.jpg';
import logo2 from './img/p3.jpg';
import logo3 from './img/p4.jpg';
import logo4 from './img/p5.jpg';
import logo5 from './img/p6.jpg';

class Category extends Component
{
    render()
    {
        return(
            <div>
                <h1>Categories</h1>
                <div className="row">
                <div className="Container">
                    <ul className="filterlist">
                        <li className="button" data-filter="All">All</li>
                        <li className="button" data-filter="Music">Music</li>
                        <li className="button" data-filter="Dance">Dance</li>
                        <li className="button" data-filter="Art">Art</li>
                        <li className="button" data-filter="Others">Others</li>
                         
                    </ul>
                     
                </div>
                </div>
                <div className="galleryContainer">
                    <div className="Image-item">
                        <img src={logo} className="item Music"/>
                        <img src={logo1} className="item Music"/>
                        <img src={logo2} className="item Dance"/>
                        <img src={logo3} className="item Art"/>
                        <img src={logo4} className="item Desc"/>
                        <img src={logo5} className="item Art"/>
                    </div>   
                </div>        
            </div>

        )
    };

  
  
   
} 
export default Category;