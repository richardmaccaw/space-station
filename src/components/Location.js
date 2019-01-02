import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography, Divider } from '@material-ui/core';

const styles = theme => ({
    button: {
        marginTop: 10
    },
    input: {
        display: 'none',
    },
})

const Location = (props) => {
    const { classes } = props
    return (
        <div className="location">
            <Typography variant="subtitle1">The International Space Station</Typography>
            <Divider style={{ marginBottom: 20 }} />
            <Typography variant="body1"> The ISS flies at an average altitude of 248 miles (400 kilometers) above Earth. It travels a massive 5 miles-per-second. That means the station circles the entire planet once every 90 minutes. You can see it best at night, when it looks like a fast moving bright light.</Typography>
            <Button 
                onClick={props.getUserLocation}
                variant="outlined"
                color="primary"
                className={classes.button}
            >
                Plot my location
            </Button>
        </div>
    )
}

export default withStyles(styles)(Location)