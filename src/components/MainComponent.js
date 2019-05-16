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
          <Alert color="success">
          <div style={{'text-align':'center'}}>
            <h1>Welcome to POSTER.IO</h1>
          </div>
          </Alert>
          <br/>
          <Welcome buttonLabel="click me if you can"/>
      </div>
    );
  }
}

export default MainComponent;
