import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  footer: {
    backgroundColor: '#ffc627',
    height: '35vh',
    padding: theme.spacing(8),
  },
  footerText: {
    color: '#fff !important'
  },
  footerImage: {
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(1)}px`,
  },
  footerUnit: {
    backgroundColor: '#ffc627',
  },  
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (

        <footer className={classes.footer}>
          <div className={classes.defaultContent} style={{textAlign:"center", width:"100%"}}>
            <Typography style={{fontSize:"1.3rem"}} color="textPrimary">
              <b>THANKS TO THE GENEROSITY OF:</b>
            </Typography>
            <div className={classes.footerUnit}>
              <div className={classes.footerImage} style={{textAlign:"center"}}>
                <div style={{paddingBottom:"0px"}}> <img src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/f165a734-1084-4a79-9107-bd84440f93d4.png" height="auto" width="50%" alt="Desert Financial Credit Union" /></div>
              </div>
            </div>
          </div>
        </footer>

    )
  }
}

export default withStyles(styles)(Footer);
