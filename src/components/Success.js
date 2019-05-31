import React, { Component } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';

import { withStyles } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      // <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      // </MuiThemeProvider>
    );
  }
}

const styles = {
  // button: {
  //   margin: 15
  // }
};

// export default Success;
export default withStyles(styles)(Success);
