import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
    height: '100%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 6}px`,
  },
});

// eslint-disable-next-line
const initialState = {
  step: 1,
  clickedvote: false,
  showText:  false,
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

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    firstStep = () => {
        this.setState({
            step : 1,
        })
    }

    secondStep = () => {
        this.setState({
            step : 2
        })
    }
    startOver = () => {
        this.setState({
          step: 1,
          clickedvote: false,
          showText: false,
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
        console.log(input);
    }

    areaofgreatestneedChoice = () => {
        this.setState({
          clickedvote: "areaofgreatestneed"
        })
    }

    k12supportChoice = () => {
        this.setState({
          clickedvote: "k12support"
        })
    }

    communityemergencysupportChoice = () => {
        this.setState({
          clickedvote: "communityemergencysupport"
        })
    }

    individualemergencysupportChoice = () => {
        this.setState({
          clickedvote: "individualemergencysupport"
        })
    }

    researchsupportChoice = () => {
        this.setState({
          clickedvote: "researchsupport"
        })
    }

    render(){

      console.log('step is:');
      console.log(this.state.step);

      console.log('clickedvote is:');
      console.log(this.state.clickedvote);

      console.log('showText is:');
      console.log(this.state.showText);

      const step = this.state.step;
      const clickedvote = this.state.clickedvote;

      switch(step) {
      case 1:
          return <StepDefault skipStep={this.skipStep} nextStep={this.nextStep} clickedvote={clickedvote} handleChange={this.handleChange}  areaofgreatestneedChoice={this.areaofgreatestneedChoice} k12supportChoice={this.k12supportChoice} communityemergencysupportChoice={this.communityemergencysupportChoice} individualemergencysupportChoice={this.individualemergencysupportChoice} researchsupportChoice={this.researchsupportChoice} />
      case 2:
          return <CardClickedStep skipStep={this.skipStep} showText={this.showText} prevStep={this.prevStep} nextStep={this.nextStep} clickedvote={clickedvote} handleChange={this.handleChange} areaofgreatestneedChoice={this.areaofgreatestneedChoice} k12supportChoice={this.k12supportChoice} communityemergencysupportChoice={this.communityemergencysupportChoice} individualemergencysupportChoice={this.individualemergencysupportChoice} researchsupportChoice={this.researchsupportChoice} />
      case 3:
          return <GraphicDisplayStep showText={this.showText} skipStep={this.skipStep} nextStep={this.nextStep} clickedvote={clickedvote} handleChange={this.handleChange} areaofgreatestneedChoice={this.areaofgreatestneedChoice} k12supportChoice={this.k12supportChoice} communityemergencysupportChoice={this.communityemergencysupportChoice} individualemergencysupportChoice={this.individualemergencysupportChoice} researchsupportChoice={this.researchsupportChoice} />
      case 4:
          return <Results initialState={this.initialState} firstStep={this.firstStep} startOver={this.startOver} />
      default:
          return <h2>Please refresh your browser.</h2>
      }
    }
}

MainForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainForm);
