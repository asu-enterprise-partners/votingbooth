import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: '#8c1d40',
    padding: theme.spacing.unit * 6,
  },
  footerText: {
    color: '#fff !important'
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (

        <footer className={classes.footer}>
          <Typography className={classes.footerText} variant="h6" align="center" gutterBottom>
            ASU Venture Ecosystem
          </Typography>
        </footer>

    )
  }
}

export default withStyles(styles)(Footer);
