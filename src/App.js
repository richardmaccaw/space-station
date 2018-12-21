import React, { Component, Fragment } from 'react';
import './App.css';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'

class App extends Component {

  state = {
    userLocation: null
  }

  getUserLocation = async () => {
    console.log('click')
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(this.showPosition)
      }
  }

  showPosition = (position) => {
    this.setState({
      userLocation: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }

  render() {
    return (
      <Fragment>
          <Nav />
          <div className = "flex-container" >
            <Sidebar 
              getUserLocation={this.getUserLocation}
            />
            <Map
              className="map"
              userLocation={this.state.userLocation}
            />
          </div>
      </Fragment>
    )
  }
}

export default App;


