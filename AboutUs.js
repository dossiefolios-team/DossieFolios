import React,{Component} from 'react';
import logo from './img/about.jpg'
import './AboutUs.css'
 
class AboutUs extends Component
{
    render()
    {
        return(
            <div className="container">
             <div className="footer-main-div">
                <div className="footer-social-icons">
                    <ul>
                        <li><a href="#" target="blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" target="blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" target="blank"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#" target="blank"><i className="fa fa-github"></i></a></li>
                    </ul>    
                </div>
                <div className="footer-menu-one">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div> 
                <div className="footer-right">
                     <p>Copyright &copy; 2019 DossiFolio | All Right Reserved.</p>
                </div>      
             </div>
             </div>
        )
    };
}
export default AboutUs;

