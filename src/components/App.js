import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import  RouterHandler  from '../routing/RouterHandler.js';
import  MainComponent  from './MainComponent.js';
import '../styles/App.css';


class App extends Component {
  
  constructor(props){
    super(props)
    this.state = []; 
  }
  
  render(){
    return (
      <div>
        <BrowserRouter>
          <MainComponent/>
          <RouterHandler/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
