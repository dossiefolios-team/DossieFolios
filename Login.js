import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import indexf from './index';
import cross from './img/cross.jpg'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Login.css';
import regis from './Registration';
export default class Login extends Component {
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
                    <div className="LoginContainer">
                        <h1>Login</h1>
                        <Link to="/index" onClick={() => this.closeModal()}><img src={cross} className="Logo"/></Link>
                        <Route path="/index" component={indexf}/>
                        <div className="box">
                         <input type="text" name="uname" placeholder="UserName"/>
                         <input type="password" name="pass" placeholder="Password"/><br/>
                         <button type="submit" className="button1">Login</button>
                         <p><Link to="regis">Not Registered yet,Register Now</Link></p> 
                         <Route path="/regis" component={regis}/>
                         <button type="submit" className="button2">Register</button>
                        </div>   
                    </div>
                     
                </Modal>
            </section>
        );
    }
}
