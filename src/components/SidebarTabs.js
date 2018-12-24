import React from 'react'
import Location from './Location'
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
   value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
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
          <Tab label="Next fly by" />
        </Tabs>
        {value === 0 && <TabContainer> <Location getUserLocation={this.props.getUserLocation}/> </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    )
  }
}

export default SidebarTabs