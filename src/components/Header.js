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
        <div className={classes.heroContent} style={{textAlign:"center"}}>
          <div style={{paddingBottom:"40px"}}> <img src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/dee63ed5-88d5-4ad0-ad05-db5420d80c7a.png" height="70px"/></div>
          <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
            <b>Vote for the cause you're passionate about!</b>
          </Typography>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
