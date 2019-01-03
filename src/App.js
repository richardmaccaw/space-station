import React, { Component, Fragment } from 'react';
import './App.css';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import API from './components/API'


class App extends Component {

  state = {
    userLocation: null,
    passBy: []
  }

  getUserLocation = () => {
    if (navigator.geolocation) {
      return new Promise ((resolve) => 
        navigator.geolocation.getCurrentPosition((position) => 
          resolve(this.showPosition(position))
        )
      )
    } else {
      alert('This feature is not supported on your browser. Try using the latest version of Chrome.')
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

  getPassBy = async () => {
    if (!this.state.userLocation) {
      this.getUserLocation().then(async () => {
        const resp = await API.getPassBy(this.state.userLocation.lat, this.state.userLocation.lng)
        this.setState({
          passBy: resp.response
        })
      })
    } else {
      const resp = await API.getPassBy(this.state.userLocation.lat, this.state.userLocation.lng)
      this.setState({
        passBy: resp.response
      })
    }
  }

  render() {
    return (
      <Fragment>
          {/* <Nav /> */}
          <div className = "flex-container" >
            <Sidebar 
              getUserLocation={this.getUserLocation}
              userLocation={this.state.userLocation}
              passBy={this.state.passBy}
              getPassBy={this.getPassBy}
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


