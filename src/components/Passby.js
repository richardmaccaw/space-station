import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core/'

const styles = theme => ({
    button: {
        marginTop: 10
    },
    input: {
        display: 'none',
    },
})

class Passby extends React.Component {

    renderPassBy = pass => new Date(parseInt(pass.risetime * 1000))
    
    render () {
    
        return (
            <div>
                {this.props.passBy && this.props.passBy.map(pass => 
                    <Typography>
                        {(new Date(parseInt(pass.risetime*1000))).toLocaleString()}
                    </Typography>)}
                
                <Button
                    onClick={this.props.getPassBy}
                    variant="outlined"
                    color="primary"
                    className={this.props.classes.button}
                >
                    Get passby times
                </Button>

            </div>
        )
    }

}

export default withStyles(styles)(Passby)
