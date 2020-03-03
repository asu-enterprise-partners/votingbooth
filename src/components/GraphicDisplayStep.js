import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: 0,
    padding: '25px',
  },
  closeButton: {
    position: 'absolute',
    right: '25px',
    top: '25px',
    color: theme.palette.grey[500],
  },
});

class GraphicDisplayStep extends Component {

  timeOut(){
    setTimeout(() => {this.props.nextStep()}, 4000)
  }

  submitResults = (e) => {
    e.preventDefault()
    this.props.skipStep()
  }

  choiceOfUser = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  environmentChoice = (e) => {
    e.preventDefault()
    this.props.environmentChoice()
    this.props.nextStep()
  }

  artscultureChoice = (e) => {
    e.preventDefault()
    this.props.artscultureChoice()
    this.props.nextStep()
  }

  healthChoice = (e) => {
    e.preventDefault()
    this.props.healthChoice()
    this.props.nextStep()
  }

  educationChoice = (e) => {
    e.preventDefault()
    this.props.educationChoice()
    this.props.nextStep()
  }

  collegeChoice = (e) => {
    e.preventDefault()
    this.props.collegeChoice()
    this.props.nextStep()
  }

  render(){
    return(
    <React.Fragment>
    <div style={{textAlign:"center"}}>
    {
      (this.props.clickedvote === "environment")
      ? <img style={{width:"75%"}}src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/2df7b69e-b530-440b-9998-9d41507aa476.gif" alt="alt description goes here" />
      : (this.props.clickedvote === "artsculture")
        ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/e9103cb2-8b6e-4c60-9777-621ef6a602a0.gif" alt="alt description goes here" />
        : (this.props.clickedvote === "health")
          ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/26cb08ce-903e-4941-8c9d-0cc6d0b23596.gif" alt="alt description goes here" />
          : (this.props.clickedvote === "education")
            ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/d54f569b-a7f7-4c97-b1c8-79a70c5ea492.gif" alt="alt description goes here" />
            : (this.props.clickedvote === "collegesprograms")
              ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/28e36750-0316-4d2d-b22a-30e046de72e1.gif" alt="alt description goes here" />
              : null
    }
    </div>
      {this.timeOut()}
    </React.Fragment>
    )
  }
}

GraphicDisplayStep.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GraphicDisplayStep);
