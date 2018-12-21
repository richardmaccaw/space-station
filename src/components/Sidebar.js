import React from 'react'
import Location from './Location'

const Sidebar = (props) => {
  return (
    <div className="sidebar">
        <Location getUserLocation={props.getUserLocation}/>
      </div>
  )
}

export default Sidebar