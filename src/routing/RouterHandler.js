import React, { Component } from 'react';
import PostList from '../components/posts/PostList.js';
import PostCreate from '../components/posts/PostCreate.js';
import Welcome from '../components/Welcome.js';
import { Route } from "react-router-dom";

class RouterHandler extends Component {
    render(){
    return (
        <div>
            <Route path="/post" exact component={PostList}/>
            <Route path="/postCreate" exact component={PostCreate}/>
            <Route path="/welcome" exact component={Welcome}/>
        </div>
    );
  }
}

export default RouterHandler;