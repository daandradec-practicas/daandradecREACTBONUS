import React, { Component } from 'react';
import {ListGroupItem, ListGroup, Alert} from 'reactstrap';
import { Link } from 'react-router-dom';

class PostUpdateList extends Component {
    
    
    render(){
        return (
            <div>
               <Alert color="info"><h1>List of post ---- Click to update it </h1></Alert>
               <ListGroup>
               {this.props.posts.map((post)=>(
                 <Link to={`/postUpdate/${post.id}`} key={post.id}><ListGroupItem>{post.title}</ListGroupItem></Link>
               ))}
               </ListGroup>
            </div>
        );
  }
}

export default PostUpdateList;