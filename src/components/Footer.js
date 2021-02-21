import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: '#ffc627',
    height: '35vh',
    padding: theme.spacing(16),
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
        </footer>

    )
  }
}

export default withStyles(styles)(Footer);
