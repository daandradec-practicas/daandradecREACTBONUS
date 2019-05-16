import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, Navbar} from 'reactstrap'

class Welcome extends Component {
    render(){
    return (
        <div>
            <div>
                <Navbar color="dark" light expand="md">
                    <NavLink to="/post"><h3> Principal </h3></NavLink>
                    <NavLink to="/postCreate"><h3> Create </h3></NavLink>
                </Navbar>
            </div>
        </div>
  );
  }
}

export default Welcome;