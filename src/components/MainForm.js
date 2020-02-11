import React, { Component } from 'react';

// import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import StepOne from './StepOne';
// import StepTwo from './StepTwo';

import StepDefault from './StepDefault';
import CardClickedStep from './CardClickedStep';
import GraphicDisplayStep from './GraphicDisplayStep';
import Results from './Results';

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

// const ourData = require('../Venture_Ecosystem_Data.json');
// console.log(ourData[0]);

const initialState = {
  step: 1,
  clickedvote: "false",
  showText:  "false",
};

class MainForm extends Component {

    state = {
      step: 1,
      clickedvote: false,
      showText: false,
    };

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    skipStep = () => {
      const {step} = this.state
      this.setState({
            step: step + 2
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

    environmentChoice = () => {
        this.setState({
          clickedvote: "environment"
        })
    }

    artscultureChoice = () => {
        this.setState({
          clickedvote: "artsculture"
        })
    }

    healthChoice = () => {
        this.setState({
          clickedvote: "health"
        })
    }

    educationChoice = () => {
        this.setState({
          clickedvote: "education"
        })
    }

    collegeChoice = () => {
        this.setState({
          clickedvote: "college"
        })
    }

    // parseResults = () => {
    //     const ourResults = this.state.results
    // }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
        console.log(input);
    }

    chooseEnvironment = () => {
        this.setState({
            clickedvote : "environment"
        })
    }

    render(){

      console.log('step is:');
      console.log(this.state.step);

      console.log('clickedvote is:');
      console.log(this.state.clickedvote);

      const step = this.state.step;
      const clickedvote = this.state.clickedvote;

      switch(step) {
      case 1:
          //return <StepOne nextStep={this.nextStep} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioCompanyValuation = {this.handleChangeRadioCompanyValuation} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} isCommunity={isCommunity} isAnyone={isAnyone} theCompanyValuation={theCompanyValuation} />
          return <StepDefault skipStep={this.skipStep} nextStep={this.nextStep} clickedvote={clickedvote} handleChange={this.handleChange} environmentChoice={this.environmentChoice} artscultureChoice={this.artscultureChoice} healthChoice={this.healthChoice} educationChoice={this.educationChoice} collegeChoice={this.collegeChoice} />
      case 2:
          return <CardClickedStep showText={this.showText} prevStep={this.prevStep} nextStep={this.nextStep} clickedvote={clickedvote}  handleChange={this.handleChange} environmentChoice={this.environmentChoice} artscultureChoice={this.artscultureChoice} healthChoice={this.healthChoice} educationChoice={this.educationChoice} collegeChoice={this.collegeChoice} />
      case 3:
          // return <Results nextStep={this.nextStep} prevStep={this.prevStep} firstStep={this.firstStep} secondStep={this.secondStep} startOver={this.startOver} handleChange = {this.handleChange} handleChangeAffiliation = {this.handleChangeAffiliation} handleChangeRadioFundingSupport = {this.handleChangeRadioFundingSupport} handleChangeAreas = {this.handleChangeAreas} isAffiliatedWithASU={isAffiliatedWithASU} isAnUndergradStudent={isAnUndergradStudent} isAGraduateStudent={isAGraduateStudent} isFaculty={isFaculty} isUniversityStaff={isUniversityStaff} isCommunity={isCommunity} isAnyone={isAnyone} theCompanyValuation={theCompanyValuation} isManufacturingHardware={isManufacturingHardware} isSocialSports={isSocialSports} isHealth={isHealth} isVeterans={isVeterans} isMedia={isMedia} isGeneralTechnology={isGeneralTechnology} idEdTech={idEdTech} isInternetOfThings={isInternetOfThings} isOther={isOther} theInterestedInFundingToSupport={theInterestedInFundingToSupport} ourResults={ourResults} />
          //return <Results startOver={this.startOver} />
          return <GraphicDisplayStep showText={this.showText} skipStep={this.skipStep} nextStep={this.nextStep} clickedvote={clickedvote} handleChange={this.handleChange} environmentChoice={this.environmentChoice} artscultureChoice={this.artscultureChoice} healthChoice={this.healthChoice} educationChoice={this.educationChoice} collegeChoice={this.collegeChoice}/>
      case 4:
          return <Results/>
      default:
          return <h2>Please refresh your browser.</h2>
      }
    }
}

MainForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainForm);
