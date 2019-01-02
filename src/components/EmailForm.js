import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    button: {
        marginTop: 10
    },
    input: {
        display: 'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
})

const EmailForm = (props) => {

    const { classes } = props

    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    onChange={props.handleChange}
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <Button onClick={props.handleSubmit} color="primary" className={classes.button}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default withStyles(styles)(EmailForm)
