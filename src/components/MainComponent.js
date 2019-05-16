import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { Navbar, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
          <div>
                <Navbar color="light" light expand="md">
                <Button outline color="warning">
                    <NavLink to="/welcome"><h3> Main </h3></NavLink>
                </Button>
                <Button outline color="warning">
                    <NavLink to="/post"><h3> Principal </h3></NavLink>
                </Button>
                <Button outline color="warning">
                    <NavLink to="/postCreate"><h3> Create </h3></NavLink>
                </Button>
                </Navbar>
            </div>
      </div>
    );
  }
}

export default MainComponent;
