import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core/';

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
            {/* <Typography variant="subtitle1">The international spacestation</Typography> */}
            {/* <Divider style={{marginBottom: 20}}/> */}
            {/* <Typography variant="body1" >The international space station (ISS) is a outpost in space launched in 1998. It can be seen easily from the earth.</Typography> */}
            {<Typography variant='body1'> To plot your position, we need permission to access your browsers location. Click the button below and select 'allow' when prompted. This may take a few seconds.</Typography>}
            <Button onClick={props.getUserLocation}variant="outlined" color="primary" className={classes.button}>
                Get my location
            </Button>
        </div>
    )
}

export default withStyles(styles)(Location)