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
            <Typography variant="body1"> The International Space Station is a large spacecraft. It orbits around Earth. It is a home where astronauts live. The space station is also a science lab. Many countries worked together to build it. They also work together to use it. The space station is made of many pieces. The pieces were put together in space by astronauts. The space station's orbit is approximately 250 miles above Earth. NASA uses the station to learn about living and working in space. These lessons will help NASA explore space.</Typography>
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