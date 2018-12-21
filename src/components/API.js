class API {

  static getSatelliteCoords = () => {
    return fetch('http://api.open-notify.org/iss-now.json')
        .then(resp => resp.json())
  }
}


export default API