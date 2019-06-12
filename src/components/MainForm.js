import React, { Component } from 'react';

import _ from 'lodash';

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
// console.log(ourData[0]);

const initialState = {
  step: 1,

//Founders filter
  affiliatedwithasu: false,
  anundergradstudent: false,
  agraduatestudent: false,
  faculty: false,
  universitystaff: false,
  community: false,
  anyone: false,

//Business stage filter
  interestedinfundingtosupport: false,

//Valuation filter
  companyvaluation: false,

//Focus filter
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

class MainForm extends Component {

    state = {
      step: 1,

      affiliatedwithasu: false,
      anundergradstudent: false,
      agraduatestudent: false,
      faculty: false,
      universitystaff: false,
      community: false,
      anyone: false,

      interestedinfundingtosupport: false,

      companyvaluation: false,

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

    firstStep = () => {
        this.setState({
            step : 1
        })
    }

    secondStep = () => {
        this.setState({
            step : 2
        })
    }

    startOver = () => {
        this.setState(initialState)
    }

    parseResults = () => {
        const ourResults = this.state.results

// affiliated arrays
        // if undergrad student or graduate student checked
        console.log(this.state.affiliatedwithasu);
        const affiliatedAnyStudentCHECKED = ourResults.filter(el=>el["Founders"]==="Any Student");
        console.log('any student');
        console.log(affiliatedAnyStudentCHECKED);

        // if affiliated with asu checked
        console.log(this.state.affiliatedwithasu);
        const affiliatedWithASUCHECKED = ourResults.filter(el=>el["Founders"]==="ASU-Affiliated");
        console.log('affiliated with asu');
        console.log(affiliatedWithASUCHECKED);

        // if anyone checked
        const affiliatedAnyoneCHECKED = ourResults.filter(el=>el["Founders"]==="Available to Anyone");
        console.log('anyone');
        console.log(affiliatedAnyoneCHECKED);

        // if grad student checked
        const affiliatedGradStudentCHECKED = ourResults.filter(el=>el["Founders"]==="Grad Student");
        console.log('grad student');
        console.log(affiliatedGradStudentCHECKED);

        // if faculty checked
        const affiliatedFacultyCHECKED = ourResults.filter(el=>el["Founders"]==="Faculty");
        console.log('faculty');
        console.log(affiliatedFacultyCHECKED);

        // if community checked
        const affiliatedCommunityCHECKED = ourResults.filter(el=>el["Founders"]==="Community");
        console.log('community');
        console.log(affiliatedCommunityCHECKED);

        // if vets and students checked
        const affiliatedVetsStudentsCHECKED = ourResults.filter(el=>el["Founders"]==="Veterans and Students");
        console.log('vets and students');
        console.log(affiliatedVetsStudentsCHECKED);

        // access state conditions

        // affiliations "Available to Anyone", "ASU-Affiliated", "Faculty", "Grad Student", "Any Student", "Veterans and Students", "Community (Women or Minority)", "Community", "Community (Women)"

        // union results
        var unionizedArray = _.union(affiliatedAnyoneCHECKED, affiliatedWithASUCHECKED, affiliatedGradStudentCHECKED, affiliatedAnyStudentCHECKED, affiliatedFacultyCHECKED, affiliatedCommunityCHECKED, affiliatedVetsStudentsCHECKED)
        // console.log(unionizedArray);

        // pull uniques
        var allUniqueIDs = _.uniq(unionizedArray, false, function(item, key, id){ return item.id; });
        console.log(allUniqueIDs);



        // create all arrays, deduplicate based on ids

        // parse based on each condition BUNCH OF OR STATEMENTS FOR MOST RESULTS
        // var thisOurAffiliatedwithasu = ourAffiliatedwithasu;
        // const arr = ourResults;
        // const filteredArray = arr.filter(el=>el["Founders"]==="Available to Anyone");
        // var filteredArray2 = filteredArray.filter(el=>el["Business Stage"]==="Ideation to Prototype");
        // var filteredArray3 = filteredArray2.filter(el=>el["Focus"]=="Any");
        // const newResults = filteredArray;

        // var filteredArray = arr.filter(el=>el["Founders"]=="ASU-Affiliated"&&el=>el["Business Stage"]=="Ideation to Prototype"&&el=>el["Focus"]=="Tech");

        // var filteredArray = arr.filter(el=>el.type==filterConditionType&&el=>el.type==filterConditionType);

        // console.log(ourResults);
        this.setState({
            results: allUniqueIDs
        })
        // console.log(newResults);
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

      const isAffiliatedWithASU = this.state.affiliatedwithasu;
      const isAnUndergradStudent = this.state.anundergradstudent;
      const isAGraduateStudent = this.state.agraduatestudent;
      const isFaculty = this.state.faculty;
      const isUniversityStaff = this.state.universitystaff;
      const isCommunity = this.state.community;
      const isAnyone = this.state.anyone;

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
          return <StepOne nextStep={this.nextStep} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioCompanyValuation = {this.handleChangeRadioCompanyValuation} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} isCommunity={isCommunity} isAnyone={isAnyone} theCompanyValuation={theCompanyValuation} />
      case 2:
          return <StepTwo nextStep={this.nextStep} prevStep={this.prevStep} parseResults={this.parseResults} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioFundingSupport = {this.handleChangeRadioFundingSupport} handleChangeAreas = {this.handleChangeAreas} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} isCommunity={isCommunity} isAnyone={isAnyone} theCompanyValuation={theCompanyValuation} isManufacturingHardware={isManufacturingHardware} isSocialSports={isSocialSports} isHealth={isHealth} isVeterans={isVeterans} isMedia={isMedia} isGeneralTechnology={isGeneralTechnology} idEdTech={idEdTech} isInternetOfThings={isInternetOfThings} isOther={isOther} theInterestedInFundingToSupport={theInterestedInFundingToSupport} />
      case 3:
          return <Results nextStep={this.nextStep} prevStep={this.prevStep} firstStep={this.firstStep} secondStep={this.secondStep} startOver={this.startOver} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioFundingSupport = {this.handleChangeRadioFundingSupport} handleChangeAreas = {this.handleChangeAreas} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} isCommunity={isCommunity} isAnyone={isAnyone} theCompanyValuation={theCompanyValuation} isManufacturingHardware={isManufacturingHardware} isSocialSports={isSocialSports} isHealth={isHealth} isVeterans={isVeterans} isMedia={isMedia} isGeneralTechnology={isGeneralTechnology} idEdTech={idEdTech} isInternetOfThings={isInternetOfThings} isOther={isOther} theInterestedInFundingToSupport={theInterestedInFundingToSupport} ourResults={ourResults} />
      default:
          return <h2>Please refresh your browser.</h2>
      }
    }
}

MainForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainForm);
