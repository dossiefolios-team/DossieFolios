import React, { Component } from 'react';
import './Contact.css'
class Contact extends Component
{
    render()
    {
        return(
            <div className="contact">
                <div className="check">
                    <h1>Contact Us</h1>
                    <div className="pin">
                    <ion-icon name="pin"></ion-icon></div>
                    <p>GLA University, NH-2, Mathura, Uttar Pradesh</p>
                    <div className="mailc">
                    <ion-icon name="mail" ></ion-icon>
                    <p className="email">infodossiefolio@gmail.com</p></div>
                    <div className="call">
                    <ion-icon name="call" ></ion-icon> 
                    <p className="ph">+91 7466821023</p></div>
                </div>
            </div>
        )
    };
}
export default Contact;