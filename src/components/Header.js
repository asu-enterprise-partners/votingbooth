import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: '#ffc627',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
            <b>Sun Devil GIVING DAY</b>
          </Typography>
          <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
            <b>Vote for the cause you're passionate about!</b>
          </Typography>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
