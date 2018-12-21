import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'; 


class Nav extends Component {
  render() {
    return (
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Track the International Space Station
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Nav;
