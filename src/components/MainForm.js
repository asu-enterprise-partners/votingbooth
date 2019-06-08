import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Results from './Results';

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

const ourData = require('../Venture_Ecosystem_Data.json');
console.log(ourData[0]);

class MainForm extends Component {

    state = {
      step: 1,

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

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    parseResults = () => {
        const ourResults = this.state.results
        // const ourAffiliatedwithasu = this.state.affiliatedwithasu
        // access state conditions

        // parse based on each condition BUNCH OF OR STATEMENTS FOR MOST RESULTS
        // var thisOurAffiliatedwithasu = ourAffiliatedwithasu;
        var arr = ourResults;
        var filteredArray = arr.filter(el=>el["Founders"]==="Available to Anyone");
        // var filteredArray2 = filteredArray.filter(el=>el["Business Stage"]==="Ideation to Prototype");
        // var filteredArray3 = filteredArray2.filter(el=>el["Focus"]=="Any");
        const newResults = filteredArray;

        // var filteredArray = arr.filter(el=>el["Founders"]=="ASU-Affiliated"&&el=>el["Business Stage"]=="Ideation to Prototype"&&el=>el["Focus"]=="Tech");

        // var filteredArray = arr.filter(el=>el.type==filterConditionType&&el=>el.type==filterConditionType);

        // console.log(ourResults);
        this.setState({
            results: newResults
        })
        console.log(newResults);
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleChangeAffiliation = name => event => {
      this.setState({ [name]: event.target.checked });
      // console.log(name);
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

    render(){

      const step = this.state.step;

      const isOwnerOfCompany = this.state.ownerofcompany;
      const isAffiliatedWithASU = this.state.affiliatedwithasu;
      const isAnUndergradStudent = this.state.anundergradstudent;
      const isAGraduateStudent = this.state.agraduatestudent;
      const isFaculty = this.state.faculty;
      const isUniversityStaff = this.state.universitystaff;
      const theCompanyValuation = this.state.companyvaluation;

      const theInterestedInFundingToSupport = this.state.interestedinfundingtosupport;
      const isManufacturingHardware = this.state.manufacturinghardware;
      const isSocialSports = this.state.socialsports;
      const isHealth = this.state.health;
      const isVeterans = this.state.veterans;
      const isMedia = this.state.media;
      const isGeneralTechnology = this.state.generaltechnology;
      const idEdTech = this.state.edtech;
      const isInternetOfThings = this.state.internetofthings;
      const isOther = this.state.other;

      const ourResults = this.state.results;

      switch(step) {
      case 1:
          return <StepOne nextStep={this.nextStep} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioCompanyValuation = {this.handleChangeRadioCompanyValuation} isOwnerOfCompany={isOwnerOfCompany} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} theCompanyValuation={theCompanyValuation} />
      case 2:
          return <StepTwo nextStep={this.nextStep} prevStep={this.prevStep} parseResults={this.parseResults} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioFundingSupport = {this.handleChangeRadioFundingSupport} handleChangeAreas = {this.handleChangeAreas} isOwnerOfCompany={isOwnerOfCompany} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} theCompanyValuation={theCompanyValuation} isManufacturingHardware={isManufacturingHardware} isSocialSports={isSocialSports} isHealth={isHealth} isVeterans={isVeterans} isMedia={isMedia} isGeneralTechnology={isGeneralTechnology} idEdTech={idEdTech} isInternetOfThings={isInternetOfThings} isOther={isOther} theInterestedInFundingToSupport={theInterestedInFundingToSupport}  />
      case 3:
          return <Results nextStep={this.nextStep} prevStep={this.prevStep} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioFundingSupport = {this.handleChangeRadioFundingSupport} handleChangeAreas = {this.handleChangeAreas} isOwnerOfCompany={isOwnerOfCompany} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} theCompanyValuation={theCompanyValuation} isManufacturingHardware={isManufacturingHardware} isSocialSports={isSocialSports} isHealth={isHealth} isVeterans={isVeterans} isMedia={isMedia} isGeneralTechnology={isGeneralTechnology} idEdTech={idEdTech} isInternetOfThings={isInternetOfThings} isOther={isOther} theInterestedInFundingToSupport={theInterestedInFundingToSupport} ourResults={ourResults} />
      default:
          return <h2>Please refresh your browser.</h2>
      }
    }
}

MainForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainForm);
