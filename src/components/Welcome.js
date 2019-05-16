import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Welcome extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
    
    toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
    render(){
    return (
        <div>
            <div>
                <Navbar color="light" light expand="md">
                <Button outline color="warning">
                    <NavLink to="/post"><h3> Principal </h3></NavLink>
                </Button>
                <Button outline color="warning">
                    <NavLink to="/postCreate"><h3> Create </h3></NavLink>
                </Button>
                </Navbar>
            </div>
            <div style={{'text-align':'center'}}>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>REST REACT BONUS</ModalHeader>
                    <ModalBody>
                        1. Complete the CREATE POST section <br/>
                        1. Create the UPDATE POST section, update the menu<br/>
                        2. Create a page to view POST DETAILS<br/>
                        3. In the POST LIST section, each time that a post title is clicked, 
                        open the POST DETAILS PAGE with the post information.<br/>
                        4. Create a repo in your github organization named XXXRREACTBONUS, 
                        where XXX is your unal username.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Mission Accepted</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
  );
  }
}

export default Welcome;