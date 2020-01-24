import React, { Component } from 'react';

import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Results from './Results';
import MainState from './MainState';

const styles = theme => ({
  mainUnit: {
    backgroundColor: '#ffc627',
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
  affiliatedwithasu: true,
  anundergradstudent: false,
  agraduatestudent: false,
  faculty: false,
  universitystaff: false,
  community: false,
  anyone: false,

//Business stage filter
  interestedinfundingtosupport: "ideationtoprototyping",

//Valuation filter
  companyvaluation: "$0-500K",

//Focus filter
  manufacturinghardware: true,
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

      affiliatedwithasu: true,
      anundergradstudent: false,
      agraduatestudent: false,
      faculty: false,
      universitystaff: false,
      community: false,
      anyone: false,

      interestedinfundingtosupport: "ideationtoprototyping",

      companyvaluation: "$0-500K",

      manufacturinghardware: true,
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
// if affiliated with asu checked
const affiliatedWithASUCHECKED = ourResults.filter(el=>el["Founders"]==="ASU-Affiliated");
// console.log('affiliated with asu');
// console.log(affiliatedWithASUCHECKED);

// if undergrad student or graduate student checked
const affiliatedAnyStudentCHECKED = ourResults.filter(el=>el["Founders"]==="Any Student");
// console.log('any student');
// console.log(affiliatedAnyStudentCHECKED);

// if grad student checked
const affiliatedGradStudentCHECKED = ourResults.filter(el=>el["Founders"]==="Grad Student");
// console.log('grad student');
// console.log(affiliatedGradStudentCHECKED);

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

// if vets and students checked
const affiliatedVetsStudentsCHECKED = ourResults.filter(el=>el["Founders"]==="Veterans and Students");
// console.log('vets and students');
// console.log(affiliatedVetsStudentsCHECKED);
// Founders Arrays

// -- -- -- -- --

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

// -- -- -- -- --

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

// -- -- -- -- --

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

// -- -- -- -- --

// Founders Arrays Processing
// Empty Starter Array
// var ourEmptyArray = [];

// access current state conditions
  var affiliatedwithasuBOOM = []
  if (this.state.affiliatedwithasu){
    affiliatedwithasuBOOM = affiliatedWithASUCHECKED
  } else {
    affiliatedwithasuBOOM = []
  }
  console.log('affiliatedwithasuBOOM');
  console.log(affiliatedwithasuBOOM);

  var anundergradstudentBOOM = []
  if (this.state.anundergradstudent){
    anundergradstudentBOOM = affiliatedAnyStudentCHECKED
  } else {
    anundergradstudentBOOM = []
  }
  console.log('anundergradstudentBOOM');
  console.log(anundergradstudentBOOM);

  var agraduatestudentBOOM = []
  if (this.state.agraduatestudent){
    agraduatestudentBOOM = affiliatedGradStudentCHECKED
  } else {
    agraduatestudentBOOM = []
  }
  console.log('agraduatestudentBOOM');
  console.log(agraduatestudentBOOM);

  var facultyBOOM = []
  if (this.state.faculty){
    facultyBOOM = affiliatedFacultyCHECKED
  } else {
    facultyBOOM = []
  }
  console.log('facultyBOOM');
  console.log(facultyBOOM);

  var universitystaffBOOM = []
  if (this.state.universitystaff){
    universitystaffBOOM = affiliatedVetsStudentsCHECKED
  } else {
    universitystaffBOOM = []
  }
  console.log('universitystaffBOOM');
  console.log(universitystaffBOOM);

  var communityBOOM = []
  if (this.state.community){
    communityBOOM = affiliatedCommunityCHECKED
  } else {
    communityBOOM = []
  }
  console.log('communityBOOM');
  console.log(communityBOOM);

  var anyoneBOOM = []
  if (this.state.anyone){
    anyoneBOOM = affiliatedAnyoneCHECKED
  } else {
    anyoneBOOM = []
  }
  console.log('anyoneBOOM');
  console.log(anyoneBOOM);

  var unionizedFoundersArray = _.union(affiliatedwithasuBOOM, anundergradstudentBOOM, agraduatestudentBOOM, facultyBOOM, universitystaffBOOM, communityBOOM, anyoneBOOM);
  console.log(unionizedFoundersArray);
  var foundersArrays = _.uniq(unionizedFoundersArray, false, function(item, key, id){ return item.id; });
  console.log(foundersArrays);
// Founders Arrays Processing

// Business Stage Arrays Processing
var businessStageArrays = []
switch (this.state.interestedinfundingtosupport) {
  case 'ideationtoprototyping':
  console.log('we hit ideationtoprototyping')
  businessStageArrays = businessStageIdeationToPrototyping
  break
  case 'ideationtobusinessformation':
  console.log('we hit ideationtobusinessformation')
  businessStageArrays = businessStageIdeationToBusinessFormation
  break
  case 'prototypetobusinessformation':
  console.log('we hit prototypetobusinessformation')
  businessStageArrays = businessStagePrototypeToBusinessFormation
  break
  case 'prototypetocustomeracquisition':
  console.log('we hit prototypetocustomeracquisition')
  businessStageArrays = businessStagePrototypeToCustomerAcquisition
  break
  case 'customeracquisitionandemerginggrowth':
  console.log('we hit customeracquisitionandemerginggrowth')
  businessStageArrays = businessStageCustomerAcquisitionAndEmergingGrowth
  break
  case 'expansion':
  console.log('we hit expansion')
  businessStageArrays = businessStageExpansion
  break
  default:
  businessStageArrays = []
}
// Business Stage Arrays Processing

// Company Valuation Arrays Processing
var companyValuationArrays = []
switch (this.state.companyvaluation) {
  case '$0-$1M':
  console.log('we hit $0-$1M')
  companyValuationArrays = companyValuation0To1M
  break
  case '$1M-$15M':
  console.log('we hit $1M-$15M')
  companyValuationArrays = companyValuation1MTo15M
  break
  case '$500K-$3M':
  console.log('we hit $500K-$3M')
  companyValuationArrays = companyValuation500KTo3M
  break
  case '$75M-$500M+':
  console.log('we hit $75M-$500M+')
  companyValuationArrays = companyValuation74MTo500MPlus
  break
  default:
  companyValuationArrays = []
}
// Company Valuation Arrays Processing

// Focus Arrays Processing
var focusManuHardBOOM = []
if (this.state.manufacturinghardware){
  focusManuHardBOOM = _.union(focusManufacturing, focusHardware);
} else {
  focusManuHardBOOM = []
}
console.log('focusManuHardBOOM');
console.log(focusManuHardBOOM);

var focusSocialSportsBOOM = []
if (this.state.socialsports){
  focusSocialSportsBOOM = _.union(focusHealthSport, focusSocial, focusSocialSport);
} else {
  focusSocialSportsBOOM = []
}
console.log('focusSocialSportsBOOM');
console.log(focusSocialSportsBOOM);

var focusHealthBOOM = []
if (this.state.health){
  focusHealthBOOM = _.union(focusHealth, focusFood);
} else {
  focusHealthBOOM = []
}
console.log('focusHealthBOOM');
console.log(focusHealthBOOM);

var focusVeteransBOOM = []
if (this.state.veterans){
  focusVeteransBOOM = focusVeteransPlusAny;
} else {
  focusVeteransBOOM = []
}
console.log('focusVeteransBOOM');
console.log(focusVeteransBOOM);

var focusMediaBOOM = []
if (this.state.media){
  focusMediaBOOM = focusMedia;
} else {
  focusMediaBOOM = []
}
console.log('focusMediaBOOM');
console.log(focusMediaBOOM);

var focusGenTechBOOM = []
if (this.state.generaltechnology){
  focusGenTechBOOM = _.union(focusTechIOT, focusTech, focusProtectedTech, focusMedTech, focusEngineering, focusEdTech, focusCleanTech);
} else {
  focusGenTechBOOM = []
}
console.log('focusGenTechBOOM');
console.log(focusGenTechBOOM);

var focusEdTechBOOM = []
if (this.state.edtech){
  focusEdTechBOOM = focusEdTech;
} else {
  focusEdTechBOOM = []
}
console.log('focusEdTechBOOM');
console.log(focusEdTechBOOM);

var focusIOTBOOM = []
if (this.state.internetofthings){
  focusIOTBOOM = focusTechIOT;
} else {
  focusIOTBOOM = []
}
console.log('focusIOTBOOM');
console.log(focusIOTBOOM);

var focusOtherBOOM = []
if (this.state.other){
  focusOtherBOOM = focusAny;
} else {
  focusOtherBOOM = []
}
console.log('focusOtherBOOM');
console.log(focusOtherBOOM);

var unionizedFocusArrays = _.union(focusManuHardBOOM, focusSocialSportsBOOM, focusHealthBOOM, focusVeteransBOOM, focusMediaBOOM, focusGenTechBOOM, focusEdTechBOOM, focusIOTBOOM, focusOtherBOOM);
// Focus Arrays Processing


        // union then uniq the arrays based on the current state conditions

        // union results
        var unionizedArray = _.union(foundersArrays, businessStageArrays, companyValuationArrays, unionizedFocusArrays)
        console.log(unionizedArray);

        // pull uniques
        var allUniqueIDs = _.uniq(unionizedArray, false, function(item, key, id){ return item.id; });
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
          //return <StepOne nextStep={this.nextStep} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioCompanyValuation = {this.handleChangeRadioCompanyValuation} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} isCommunity={isCommunity} isAnyone={isAnyone} theCompanyValuation={theCompanyValuation} />
          return <MainState/>
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
