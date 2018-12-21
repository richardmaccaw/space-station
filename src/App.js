import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Nav />
        <Sidebar />
        <Map className="map"/>
      </div>
    );
  }
}

export default App;
