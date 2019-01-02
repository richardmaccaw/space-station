import React from 'react'
import Location from './Location'
import Passby from './Passby'
import API from './API'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

class SidebarTabs extends React.Component {

  state = {
   value: 0,
   passBy: []
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  getPassBy = async () => {
    if (this.props.userLocation) {
      const resp = await API.getPassBy(this.props.userLocation.lat, this.props.userLocation.lng)
      console.log(resp.response)
      this.setState({
        passBy: resp.response
      })
    } else {
      console.log('get location first')
    }
  }
  

  render () {
    const { value } = this.state;

    return (
      <div>
        <Tabs 
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="My location" />
          <Tab label="Next ISS pass" />
        </Tabs>
        {value === 0 && 
          <TabContainer>
            <Location getUserLocation={this.props.getUserLocation}/>
          </TabContainer>}
        {value === 1 && 
          <TabContainer> 
            <Passby
              getPassBy={this.getPassBy}
              passBy={this.state.passBy}
            />
          </TabContainer>
        }
      </div>
    )
  }
}

export default SidebarTabs