import React, { Component } from 'react';
import './App.css';
import VideoComponent from './videoComponent.js'
import NavComponent from './NavComponent.js'
import ImgComponent from './ImgComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">


        <VideoComponent/>

      </div>
    );
  }
}

export default App;
