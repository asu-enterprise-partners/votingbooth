import React from 'react';
import './App.css';
import MainForm from './components/MainForm';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './components/Nav.js';
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

const ourData = require('./Venture_Ecosystem_Data.json');
console.log(ourData);

class App extends React.Component {

  state = {
    affiliatedwithasu: false,
    anundergradstudent: false,
    agraduatestudent: false,
    faculty: false,
    universitystaff: false,

    ownerofcompany: false,
    companyvaluation: false,

    interestedinfundingtosupport: false,
    manufacturinghardware: false,
    socialsports: false,
    health: false,
    veterans: false,
    media: false,
    generaltechnology: false,
    edtech: false,
    internetofthings: false,
    other: false,

    results: ourData,
  };

handleChangeAffiliation = name => event => {
  this.setState({ [name]: event.target.checked });
  console.log(name);
  // if (this.state.affiliatedwithasu === true) {
  //   const parsedData = ourData.filter(fund => fund.Founders === 'ASU-Affiliated');
  //   console.log(parsedData);
  //   this.setState({
  //     results: parsedData
  //   })
  // } else if (name === 'anundergradstudent') {
  //   const parsedData = ourData.filter(fund => fund.Founders === 'Available to Anyone');
  //   console.log(parsedData);
  //   this.setState({
  //     results: parsedData
  //   })
  // } else {
  //   this.setState({
  //     results: ourData
  //   })
  // }
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

componentDidMount() {
  console.log('can do something when main component is mounted here');
}

handleBlakkow () {
  console.log('yoooo blakkow');
};

  render() {

    const { classes } = this.props;

    // const isAffiliatedWithASU = this.state.affiliatedwithasu;
    // const isAnUndergradStudent = this.state.anundergradstudent;
    // const isAGraduateStudent = this.state.agraduatestudent;
    // const isFaculty = this.state.faculty;
    // const isUniversityStaff = this.state.universitystaff;
    //
    // const isOwnerOfCompany = this.state.ownerofcompany;
    // const theCompanyValuation = this.state.companyvaluation;
    //
    // const theInterestedInFundingToSupport = this.state.interestedinfundingtosupport;
    //
    // const isManufacturingHardware = this.state.manufacturinghardware;
    // const isSocialSports = this.state.socialsports;
    // const isHealth = this.state.health;
    // const isVeterans = this.state.veterans;
    // const isMedia = this.state.media;
    // const isGeneralTechnology = this.state.generaltechnology;
    // const idEdTech = this.state.edtech;
    // const isInternetOfThings = this.state.internetofthings;
    // const isOther = this.state.other;
    //
    // const ourResults = this.state.results;

    return(

      <React.Fragment>
        <CssBaseline />

        <Nav/>

        <main>

          <Header/>

          <div className={classes.mainUnit}>
            <div className={classes.mainContent}>

              <MainForm />

            </div>
          </div>

        </main>

        <Footer/>

        </React.Fragment>

      );
    };

    }

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
