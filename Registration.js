
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
        const name=this.state.uname;
        const pass=this.state.pass;
        const email=this.state.email;
        this.setState({loading: true})
        const regisData={
            name,
            pass,
            email
        }
        axios.post('/t/lyyg4-1554869078/post',regisData).then(response=>{
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
                    height="500"
                    effect="fadeInUp"
                    
                 >
                    <form onSubmit={this.postData.bind(this)}>
                        <h1>Registration</h1>
                        <Link to="/login" onClick={() => this.closeModal()}><img src={cross} className="Logo"/></Link>
                        <Route path="/login" component={login}/>
                        <div className="Rbox">
                         <input type="text" name="uname" placeholder="UserName" value={this.state.uname}  onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/>
                         <input type="password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.dataChange.bind(this)} required="true"/><br/>
                         <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/><br/>
                         <button type="submit" className="Rbutton1">Submit</button>
                         </div>   
                    </form>
                     {this.loadorshow()}
                </Modal>
            </section>
        );
    }
}
