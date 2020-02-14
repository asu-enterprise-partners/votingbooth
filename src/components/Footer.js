import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: '#ffc627',
    padding: theme.spacing.unit * 12,
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
