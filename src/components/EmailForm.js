import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Typography } from '@material-ui/core';

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
    color: {
        color: '#f50057',
    }
})

class EmailForm extends React.Component {
    
    state = {
        submitted: false
    }

    submitForm = () => {
        this.setState({
            submitted: !this.state.submitted
        })
    }
    
    render () {
        return (
            <div>
                <ValidatorForm 
                    ref='form'
                    onSubmit={() => {
                        this.props.handleSubmit()
                        this.submitForm()
                    }}
                    onError={errors => console.log(errors)}
                    className={this.props.classes.container} 
                    autoComplete="off"
                >
                    <TextValidator
                        onChange={this.props.handleChange}
                        id="outlined-email-input"
                        label="Email"
                        className={this.props.classes.textField}
                        type="email"
                        name="email"
                        margin="normal"
                        variant="outlined"
                        // validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    <Button 
                        type='submit' 
                        color="primary" 
                        className={this.props.classes.button}
                        disabled={this.state.submitted}
                        >
                        {!this.state.submitted ? 'submit' : 'done!'}
                    </Button>
                        {
                            this.state.submitted && 
                            <Typography style={{color: '#00a152'}}>Your email is on the way!</Typography>
                        }
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(EmailForm)
