import React, { Component, Fragment } from 'react';
import './App.css';
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import API from './components/API'


class App extends Component {

  state = {
    userLocation: null,
    passBy: []
  }

  getUserLocation = () => {
    this.showPosition()
    // getLocation is depreciated on http and the spacestation api only exists on http. So its one or the other! Hardcoding location.

    // if (navigator.geolocation) {
    //   return new Promise ((resolve) => 
    //     navigator.geolocation.getCurrentPosition((position) => 
    //       resolve(this.showPosition(position))
    //     )
    //   )
    // } else {
    //   alert('This feature is not supported on your browser. Try using the latest version of Chrome.')
    // }
  }
  showPosition = (position) => {
    this.setState({
      userLocation: {
        lat: 51.5200652,
        lng: -0.08773099999999999
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


