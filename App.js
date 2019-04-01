import React, { Component } from 'react';
import {PushSpinner} from 'react-spinners-kit';
 

class App extends Component {
  
  render() {
    const {loading} =this.state;
    return (
       <PushSpinner
              size={30}
              color="#686769"
              loding={loading}
       />
    );
  }
}

export default App;
