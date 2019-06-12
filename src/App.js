import React from 'react';
import './App.css';
import MainForm from './components/MainForm';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const styles = theme => ({
  mainUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  mainContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 6}px`,
  },
});

class App extends React.Component {

handleChangeAffiliation = name => event => {
  this.setState({ [name]: event.target.checked });
  console.log(name);
};

handleChangeRadioCompanyValuation = event => {
  this.setState({ companyvaluation: event.target.value });
};

handleChangeRadioFundingSupport = event => {
  this.setState({ interestedinfundingtosupport: event.target.value });
};

handleChangeAreas = name => event => {
  this.setState({ [name]: event.target.checked });
};

// componentDidMount() {
//   console.log('can do something when main component is mounted here');
// }

handleBlakkow () {
  console.log('yoooo blakkow');
};

  render() {

    const { classes } = this.props;

    return(

      <React.Fragment>
        <CssBaseline />

          <Header/>

          <div className={classes.mainUnit}>
            <div className={classes.mainContent}>

              <MainForm />

            </div>
          </div>

        <Footer/>

        </React.Fragment>

      );
    };

    }

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
