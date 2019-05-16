import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import Welcome from './Welcome.js';

class MainComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = []; 
  }
  
  render(){
    return (
      <div>
          <Alert color="success"><h1>This is the main page :D</h1></Alert>
          <Welcome/>
      </div>
    );
  }
}

export default MainComponent;
