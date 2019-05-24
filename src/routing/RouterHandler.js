import React, { Component } from 'react';
import PostList from '../components/posts/PostList.js';
import PostDetail from '../components/posts/PostDetail';
import PostCreate from '../components/posts/PostCreate.js';
import PostUpdate from '../components/posts/PostUpdate';
import PostUpdateList from '../components/posts/PostUpdateList';
import Welcome from '../components/Welcome.js';
import { Route } from "react-router-dom";

import axios from 'axios';
import BackEndpoints from '../constants/BackEndpoints.js';
import {createPost} from '../constants/Create';
import {updatePost} from '../constants/Update';

class RouterHandler extends Component {
    
    constructor(props){
        super(props)
        this.state = {posts: []};
    }
    
    componentDidMount = () => {
        axios.get(BackEndpoints.POSTS.index).then(response => {
            console.log(response.data)
            this.setState({posts : response.data});
        });
    }
    
    crearPost = (post) => {
        createPost(this, post);
    }
    
    actualizarPost = (post) => {
        updatePost(this, post);
    }
    
    render(){
        return (
            <div>
                <Route path="/" exact component={Welcome}/>
                <Route path="/post" exact render={ () => 
                    (<PostList posts={this.state.posts}/>)
                }/>
                <Route path="/post/:id" exact render={ (props) => {
                        const idPost = Number(props.match.params.id);
                        let currentPost = this.state.posts.filter(post => ( post.id === idPost ));
                        return (<PostDetail post={currentPost[0]}/>)
                    }
                }/>
                <Route path="/postCreate" exact render={ () =>
                    (<PostCreate crearPost={this.crearPost}/>)
                }/>
                <Route path="/postUpdate" exact render={ () =>
                (<PostUpdateList posts={this.state.posts} />)
                }/>
                <Route path="/postUpdate/:id" exact render={ (props) => {
                        const idPost = Number(props.match.params.id);
                        let currentPost = this.state.posts.filter(post => ( post.id === idPost ));
                        return (<PostUpdate actualizarPost={this.actualizarPost} post={currentPost[0]}/>) 
                    
                    }
                }/>
                <Route path="/welcome" exact component={Welcome}/>
            </div>
        );
  }
}

export default RouterHandler;