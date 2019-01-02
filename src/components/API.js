class API {

  static getSatelliteCoords = () => {
    return fetch('http://api.open-notify.org/iss-now.json')
        .then(resp => resp.json())
  }

  static getPassBy = (lat, lon) => {
    return fetch(`http://localhost:3000/api/v1/adapters/${lat}/${lon}`)
      .then(resp => resp.json())
  }

}

export default API


