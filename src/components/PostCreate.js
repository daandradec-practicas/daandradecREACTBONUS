import React, { Component } from 'react';
import axios from 'axios';
import BackEndpoints from '../constants/BackEndpoints.js';
import {Alert} from 'reactstrap';

class PostCreate extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
    return (
        <div>
           <Alert color="danger"><h1>Create a post</h1></Alert>
        </div>
  );
  }
}

export default PostCreate;