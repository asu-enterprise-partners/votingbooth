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

// Founders Arrays
// if undergrad student or graduate student checked
const affiliatedAnyStudentCHECKED = ourResults.filter(el=>el["Founders"]==="Any Student");
// console.log('any student');
// console.log(affiliatedAnyStudentCHECKED);

// if affiliated with asu checked
const affiliatedWithASUCHECKED = ourResults.filter(el=>el["Founders"]==="ASU-Affiliated");
// console.log('affiliated with asu');
// console.log(affiliatedWithASUCHECKED);

// if anyone checked
const affiliatedAnyoneCHECKED = ourResults.filter(el=>el["Founders"]==="Available to Anyone");
// console.log('anyone');
// console.log(affiliatedAnyoneCHECKED);

// if community checked
const affiliatedCommunityCHECKED = ourResults.filter(el=>el["Founders"]==="Community");
// console.log('community');
// console.log(affiliatedCommunityCHECKED);

// if faculty checked
const affiliatedFacultyCHECKED = ourResults.filter(el=>el["Founders"]==="Faculty");
// console.log('faculty');
// console.log(affiliatedFacultyCHECKED);

// if grad student checked
const affiliatedGradStudentCHECKED = ourResults.filter(el=>el["Founders"]==="Grad Student");
// console.log('grad student');
// console.log(affiliatedGradStudentCHECKED);

// if vets and students checked
const affiliatedVetsStudentsCHECKED = ourResults.filter(el=>el["Founders"]==="Veterans and Students");
// console.log('vets and students');
// console.log(affiliatedVetsStudentsCHECKED);
// Founders Arrays

// Business Stage Arrays
// if business stage is ideation to prototyping
const businessStageIdeationToPrototyping = ourResults.filter(el=>el["Business Stage"]==="Ideation to Prototype");
// console.log('ideation to protptyping');
// console.log(businessStageIdeationToPrototyping);

// if business stage is ideation to business formation
const businessStageIdeationToBusinessFormation = ourResults.filter(el=>el["Business Stage"]==="Ideation to Business Formation");
// console.log('ideation to business formation');
// console.log(businessStageIdeationToBusinessFormation);

// if business stage is prototype to business formation
const businessStagePrototypeToBusinessFormation = ourResults.filter(el=>el["Business Stage"]==="Prototype to Business Formation");
// console.log('prototype to business formation');
// console.log(businessStagePrototypeToBusinessFormation);

// if business stage is prototype to customer acquisition
const businessStagePrototypeToCustomerAcquisition = ourResults.filter(el=>el["Business Stage"]==="Prototype to Customer Acquisition");
// console.log('prototype to customer acquisition');
// console.log(businessStagePrototypeToCustomerAcquisition);

// if business stage is customer acquisition & emerging growth
const businessStageCustomerAcquisitionAndEmergingGrowth = ourResults.filter(el=>el["Business Stage"]==="Customer Acquisition & Emerging Growth");
// console.log('customer acquisition & emerging growth');
// console.log(businessStageCustomerAcquisitionAndEmergingGrowth);

// if business stage is customer acquisition & emerging growth
const businessStageExpansion = ourResults.filter(el=>el["Business Stage"]==="Expansion");
// console.log('expansion');
// console.log(businessStageExpansion);
// Business Stage Arrays

// Company Valuation Arrays
// if company valuation is $0-$1M
const companyValuation0To1M = ourResults.filter(el=>el["Company Valuation"]==="$0-$1M");
// console.log('company valuation $0-$1M');
// console.log(companyValuation0To1M);

// if company valuation is $1M-$15M
const companyValuation1MTo15M = ourResults.filter(el=>el["Company Valuation"]==="$1M-$15M");
// console.log('company valuation $1M-$15M');
// console.log(companyValuation1MTo15M);

// if company valuation is $500K-$3M
const companyValuation500KTo3M = ourResults.filter(el=>el["Company Valuation"]==="$500K-$3M");
// console.log('company valuation $500K-$3M');
// console.log(companyValuation500KTo3M);

// if company valuation is $75M-$500M+
const companyValuation74MTo500MPlus = ourResults.filter(el=>el["Company Valuation"]==="$75M-$500M+");
// console.log('company valuation $75M-$500M+');
// console.log(companyValuation74MTo500MPlus);
// Company Valuation Arrays

// Focus Arrays
// if focus is Any
const focusAny = ourResults.filter(el=>el["Focus"]==="Any");
// console.log('focus any');
// console.log(focusAny);

// if focus is CleanTech
const focusCleanTech = ourResults.filter(el=>el["Focus"]==="CleanTech");
// console.log('focus cleantech');
// console.log(focusCleanTech);

// if focus is EdTech
const focusEdTech = ourResults.filter(el=>el["Focus"]==="EdTech");
// console.log('focus edtech');
// console.log(focusEdTech);

// if focus is Engineering
const focusEngineering = ourResults.filter(el=>el["Focus"]==="Engineering");
// console.log('focus engineering');
// console.log(focusEngineering);

// if focus is Food
const focusFood = ourResults.filter(el=>el["Focus"]==="Food");
// console.log('focus food');
// console.log(focusFood);

// if focus is Hardware
const focusHardware = ourResults.filter(el=>el["Focus"]==="Hardware");
// console.log('focus hardware');
// console.log(focusHardware);

// if focus is Health
const focusHealth = ourResults.filter(el=>el["Focus"]==="Health");
// console.log('focus health');
// console.log(focusHealth);

// if focus is Health/ Sport
const focusHealthSport = ourResults.filter(el=>el["Focus"]==="Health/ Sport");
// console.log('focus health/sport');
// console.log(focusHealthSport);

// if focus is Manufacturing
const focusManufacturing = ourResults.filter(el=>el["Focus"]==="Manufacturing");
// console.log('focus manufacturing');
// console.log(focusManufacturing);

// if focus is Media
const focusMedia = ourResults.filter(el=>el["Focus"]==="Media");
// console.log('focus media');
// console.log(focusMedia);

// if focus is MedTech
const focusMedTech = ourResults.filter(el=>el["Focus"]==="MedTech");
// console.log('focus medtech');
// console.log(focusMedTech);

// if focus is ProtectedTech
const focusProtectedTech = ourResults.filter(el=>el["Focus"]==="Protected Tech");
// console.log('focus protectedtech');
// console.log(focusProtectedTech);

// if focus is Social
const focusSocial = ourResults.filter(el=>el["Focus"]==="Social");
// console.log('focus social');
// console.log(focusSocial);

// if focus is Social/ Sport
const focusSocialSport = ourResults.filter(el=>el["Focus"]==="Social/ Sport");
// console.log('focus social/sport');
// console.log(focusSocialSport);

// if focus is Tech
const focusTech = ourResults.filter(el=>el["Focus"]==="Tech");
// console.log('focus tech');
// console.log(focusTech);

// if focus is Tech/ IOT
const focusTechIOT = ourResults.filter(el=>el["Focus"]==="Tech/ IOT");
// console.log('focus tech/iot');
// console.log(focusTechIOT);

// if focus is Veterans + Any
const focusVeteransPlusAny = ourResults.filter(el=>el["Focus"]==="Veterans + Any");
// console.log('focus veterans+any');
// console.log(focusVeteransPlusAny);
// Focus Arrays

// Empty Starter Array
var ourEmptyArray = [];

// access current state conditions
if (this.state.affiliatedwithasu){
    // var unionizedArray = _.union(emptyAffiliationArray, affiliatedWithASUCHECKED);
    console.log('merged array 1');
    // _.merge(ourEmptyArray, affiliatedWithASUCHECKED);
    ourEmptyArray.concat(affiliatedWithASUCHECKED);
    console.log(ourEmptyArray);
}
if (this.state.anundergradstudent||this.state.agraduatestudent){
    // var unionizedArray = _.union(emptyAffiliationArray, affiliatedAnyStudentCHECKED, affiliatedGradStudentCHECKED);
    console.log('merged array 2');
    // _.merge(ourEmptyArray, affiliatedGradStudentCHECKED);
    ourEmptyArray.concat(affiliatedGradStudentCHECKED);
}
if (this.state.faculty){
    // var unionizedArray = _.union(emptyAffiliationArray, affiliatedFacultyCHECKED);
    console.log('merged array 3');
    // _.merge(ourEmptyArray, affiliatedFacultyCHECKED);
    ourEmptyArray.concat(affiliatedFacultyCHECKED);
}

        // union then uniq the arrays based on the current state conditions

        // union results
        // var unionizedArray = _.union(affiliatedAnyoneCHECKED, affiliatedWithASUCHECKED, affiliatedGradStudentCHECKED, affiliatedAnyStudentCHECKED, affiliatedFacultyCHECKED, affiliatedCommunityCHECKED, affiliatedVetsStudentsCHECKED)
        console.log(ourEmptyArray);

        // pull uniques
        var allUniqueIDs = _.uniq(ourEmptyArray, false, function(item, key, id){ return item.id; });
        console.log('all unique ids');
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
