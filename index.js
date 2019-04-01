import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import Navigation from './Navigation';
import AboutUs from './AboutUs';
import Header from './Header';
import Category from './Category';
import Service from './Service';
import Login from './Login';
import Registration from './Registration';
 
 
import * as serviceWorker from './serviceWorker';
import Contact from './Contact';
class App extends Component
{
    render()
    {
        return(
            <div>
            <Navigation logotitle="React PortFolio" />
            <Header title="Let’s Explore Idea!" heading="NOW YOU CAN WATCH THE TALENT" button="Explore Now"/>
            <Category/>
            <Service/>
            <Contact/>
            <AboutUs/>
            </div>


        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
 
serviceWorker.unregister();
export default App;

