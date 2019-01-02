import React from 'react'
import SidebarTabs from './SidebarTabs'

const Sidebar = (props) => {
  return (

    <div className="sidebar">
        <SidebarTabs
          passBy={props.passBy}
          getPassBy={props.getPassBy}
          getUserLocation={props.getUserLocation}
          userLocation={props.userLocation}
        />
    </div>
  )
}

export default Sidebar