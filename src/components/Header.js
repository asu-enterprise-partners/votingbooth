import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heroUnit: {
    backgroundColor: '#ffc627',
  },
  heroContent: {
    maxWidth: '600px',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 1}px`,
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent} style={{textAlign:"center"}}>
          <div style={{paddingBottom:"0px"}}> <img src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/21c3dd97-09b6-4dcd-9236-8ada3931f513.png" height="auto" width="50%" alt="Sun Devil Giving Day" /></div>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
