import React from 'react'
import API from './API'
import EmailForm from './EmailForm'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography, Divider } from '@material-ui/core';

const styles = theme => ({
  button: {
      marginTop: 10
  }
})

class Passby extends React.Component {

  state = {
    email: ''
  }

  renderPassBy = pass => (new Date(parseInt(pass.risetime * 1000)).toLocaleString())

  handleChange = event => {
    this.setState({
      email: event.target.value,
    })
  }

  handleSubmit = () => {
    let passes = []
    
    this.props.passBy.forEach(pass => passes.push((this.renderPassBy(pass))))
    const user = {
      email_address: this.state.email,
      passes: passes.toString().replace(/, /g, " at ")
    }
    API.createUser(user)
  }

  render () {
    const { classes } = this.props

    return (
      <div>
        <Typography>The ISS flies at an average altitude of 248 miles (400 kilometers) above Earth. It travels a massive 5 miles-per-second. That means the station circles the entire planet once every 90 minutes. You can see it best at night, when it looks like a fast moving bright light.</Typography>
        {this.props.passBy && this.props.passBy.map(pass =>
          <Typography>
            {this.renderPassBy(pass)}
          </Typography>)
        }

        <Button
          onClick={this.props.getPassBy}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Get passby times
        </Button>

        <Divider style={{ margin: 20 }} ></Divider>

        <Typography> To get a reminder of when the ISS will be over your location, submit your email below</Typography>

        <EmailForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}>
        </EmailForm>
        
      </div>
    )
  }

}

export default withStyles(styles)(Passby)
