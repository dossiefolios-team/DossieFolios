 
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import indexf from './index';
import cross from './img/cross.jpg'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import login from './Login';
import './Registration.css';
 
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    

    closeModal() {
        this.setState({
            visible : false
            
        });
    }
    render() {
        return (
            <section>
              <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="500"
                    effect="fadeInUp"
                    
                 >
                    <div className="RegistrationContainer">
                        <h1>Registration</h1>
                        <Link to="/login" onClick={() => this.closeModal()}><img src={cross} className="Logo"/></Link>
                        <Route path="/login" component={login}/>
                        <div className="Rbox">
                         <input type="text" name="uname" placeholder="UserName"/>
                         <input type="password" name="pass" placeholder="Password"/><br/>
                         <input type="text" name="email" placeholder="Email"/><br/>
                         <button type="submit" className="Rbutton1">Submit</button>
                         
                         
                        </div>   
                    </div>
                     
                </Modal>
            </section>
        );
    }
}
