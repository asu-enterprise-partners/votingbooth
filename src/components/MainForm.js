import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
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

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

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

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){

        const { classes } = this.props;

        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };

      switch(step) {
      case 1:
          return <StepOne nextStep={this.nextStep} handleChange = {this.handleChange} values={values} />
      case 2:
          return <StepTwo nextStep={this.nextStep} prevStep={this.prevStep} handleChange = {this.handleChange} values={values} />
      case 3:
          return <StepThree nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
      case 4:
          return <Results />
      default:
          return null
      }
    }
}

MainForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainForm);
