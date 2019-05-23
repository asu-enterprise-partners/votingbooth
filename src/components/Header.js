import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
});

class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>

          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            ASU Venture Ecosystem
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
            Description of project goes here.
          </Typography>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Nav);
