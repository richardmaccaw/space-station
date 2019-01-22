class API {

  static getSatelliteCoords = () => {
    return fetch(`https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json`, {
      headers: {
        'X-Requested-With': 'true'
      },
    }).then(resp => resp.json())
  }

  static getPassBy = (lat, lon) => {
    return fetch(`http://space-station-api.herokuapp.com/api/v1/adapters/${lat}/${lon}`)
      .then(resp => resp.json())
  }

  static createUser = (user) => {
    return fetch('http://spacestation-api.herokuapp.com/api/v1/users/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(response => response.json())
  }

}

export default API


