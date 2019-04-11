import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import indexf from './index';
import cross from './img/cross.jpg'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import Route from 'react-router-dom/Route';
import './Login.css';
import regis from './Registration';
import Admin from './Admin';
import dash from './Dashboard'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true,
            uname: '',
            pass: '',
            loading: false,
            message: "",
            loading: true,
            data: null
            
             
        }
        this.loadData()
       
    }
    loadData()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                loading: false,
                data: json
            })
        }) 
    }

    customRender()
    {
        if(this.state.loading)
         return <p>Loading</p> 
        else
            {let getData=this.state.data
            const op=getData.map(d=>{
                if(d.name==='Leanne Graham')
                return(<div><p>{d.email}</p></div>)
            })
            return op
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
        this.setState({loading: true})
        const data={
            name,
            pass
        }
        axios.post('/t/4tu0d-1554790567/post',data).then(response=>{
              this.setState({
                loading: false,
                message: response.data
            })
        }).catch(err =>{
            console.log(err);
            this.setState({loading: false})
        })
    }
  
   

     
    loadorshow()
    {
        if(this.state.loading)
        {
            return<p> Done</p> 
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
                        <h1>Login</h1>
                        <Link to="/index" onClick={() => this.closeModal()}><img src={cross} className="Logo"/></Link>
                        <Route path="/index" component={indexf}/>
                        <div className="box">
                         <input type="text" name="uname" placeholder="UserName" value={this.state.uname} onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/>
                         <input type="password" name="pass" placeholder="Password" value={this.state.pass} onChange={this.dataChange.bind(this)} required="true" autoComplete="off"/><br/>
                         <input type="radio" name="cetegory" value="Admin" id="admin_field"/><label for="admin_field">Admin</label>
                         <input type="radio" name="cetegory" value="User" id="user_field"/><label for="user_field">User</label>
                         <button type="submit" className="button1">Login</button>
                         <h4><Link to="/regis">Not Registered yet,Register Now</Link></h4> 
                         <Route path="/regis" component={regis}/>
                         
                        </div>   
                    </form>
                     {this.customRender()}
                </Modal>
            </section>
        );
    }
}
