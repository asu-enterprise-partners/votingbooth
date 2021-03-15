import React, { Component } from 'react';
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
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(1)}px`,
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroContent} style={{textAlign:"center"}}>
          <div style={{paddingBottom:"0px"}}> <img src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/331049e2-2ec1-463c-9c21-89a9bb559083.png" height="auto" width="50%" alt="Sun Devil Giving Day" /></div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
