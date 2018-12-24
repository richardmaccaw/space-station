import React from 'react'
import SidebarTabs from './SidebarTabs'



const Sidebar = (props) => {
  return (

    <div className="sidebar">
        <SidebarTabs getUserLocation={props.getUserLocation}/>
    </div>
  )
}

export default Sidebar