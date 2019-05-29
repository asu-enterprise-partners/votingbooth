import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (

        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            ASU Venture Ecosystem
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Description of project goes here.
          </Typography>
        </footer>

    )
  }
}

export default withStyles(styles)(Footer);
