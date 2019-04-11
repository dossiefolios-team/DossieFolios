
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import indexf from './index';
import axios from 'axios'; 
import cross from './img/cross.jpg'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import login from './Login';
import './Registration.css';
 
export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true,
            uname: '',
            pass: '',
            email: '',
            phone: '',
            isadmin:'',
            loading: false,
            message: ''
        }
    }
    dataChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    postData(event)
    {
        event.preventDefault();
        const username=this.state.uname;
        const password=this.state.pass;
        const email=this.state.email;
        const phone=this.state.phone;
        this.setState({loading: true})
        const regisData={
            username,
            password,
            email,
            phone
            
        }
        axios.post('/t/h9dl5-1554964464/post',regisData).then(response=>{
            this.setState({
                loading: false,
                message: response.regisData
            })
        }).catch(err=>{
            console.log(err);
            this.setState({loading: false})
        })
    }
    loadorshow()
    {
        if(this.state.loading)
        {
            return alert('Registration Succesful!!!');
            
        }
        else
        {
            return <p>{this.state.message}</p>
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
                    height="590"
                    effect="fadeInUp"
                    
                 >
                    <form onSubmit={this.postData.bind(this)}>
                        <h1>Registration</h1>
                        <Link to="/login" onClick={() => this.closeModal()}><img src={cross} className="Logo"/></Link>
                        <Route path="/login" component={login}/>
                        <div className="Rbox">
                         <input type="text" name="uname" placeholder="UserName" value={this.state.uname}  onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/>
                         <input type="password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.dataChange.bind(this)} required="true"/><br/>
                         <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/><br/>
                         <input type="number" pattern="[1-9]{1}[0-9]{9}" name="phone" placeholder="Phone" value={this.state.ph} onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/><br/>
                         <input type="radio" name="category" value="Admin" id="admin_field"/><label for="admin_field">Admin</label>
                         <input type="radio" name="category" value="User" id="user_field"/><label for="user_field">User</label> 
                         <button type="submit" className="Rbutton1">Submit</button>
                         </div>   
                    </form>
                     {this.loadorshow()}
                </Modal>
            </section>
        );
    }
}
