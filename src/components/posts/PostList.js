import React, { Component } from 'react';
import axios from 'axios';
import BackEndpoints from '../../constants/BackEndpoints.js';
import {ListGroupItem, ListGroup, Alert} from 'reactstrap';

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {posts: []}
    }
    
    componentDidMount(){
        axios.get(BackEndpoints.POSTS.index).then(response => {
            console.log(response.data)
            this.setState({posts : response.data});
        });
    }
    
    render(){
    return (
        <div>
           <Alert color="info"><h1>List of post</h1></Alert>
           <ListGroup>
           {this.state.posts.map((post)=>(
             <ListGroupItem key={post.id}>{post.title}</ListGroupItem>  
           ))}
           </ListGroup>
        </div>
  );
  }
}

export default PostList;