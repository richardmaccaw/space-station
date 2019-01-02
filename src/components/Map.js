import React, { Component } from 'react';
import API from './API'
import GoogleMapReact from 'google-map-react';
import Satellite from './Satellite'
import UserLocation from './UserLocation'
 
const MAP_KEY = process.env.REACT_APP_MAPS_API

class Map extends Component {

  constructor(props) {
    super(props)

    this.interval = null

    this.state = {
      center: {
        lat: null,
        lng: null
      },
      mapCenter: {
        lat: null,
        lng: null
      }
    }
  }
  
  static defaultProps = {
    center: {
      lat: 33.7831,
      lng: 37.9712
    },
    zoom: 3
  };

  getSatelliteCoords = async () => {
    const resp = await API.getSatelliteCoords()
    this.setState({
      center: {
        lat: parseInt(resp.iss_position.latitude),
        lng: parseInt(resp.iss_position.longitude)
      }
    })
  }

  getMapCoords = async () => {
    const resp = await API.getSatelliteCoords()
    this.setState({
      mapCenter: {
        lat: parseInt(resp.iss_position.latitude),
        lng: parseInt(resp.iss_position.longitude)
      }
    })
  }

  componentDidMount() {
    this.getSatelliteCoords()
    this.interval = setInterval(this.getSatelliteCoords, 5000)
    this.getMapCoords()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  renderUserLocation() {
    if (this.props.userLocation) {
      return <UserLocation
        lat={this.props.userLocation.lat}
        lng={this.props.userLocation.lng}
      />
    } else return
  }

  render() {
    return (
      <div className='map' style={{ height: '90vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_KEY, v: 3.32 }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.state.mapCenter}
          getUserLocation={this.getUserLocation}
        >
          <Satellite
            lat={this.state.center.lat}
            lng={this.state.center.lng}
          />
          {this.renderUserLocation()}
        </GoogleMapReact>
      </div>
    )
  }
}
 
export default Map