import React, { Component } from 'react';
// import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import bartDancing from '../icons/bart-dancing.gif';
import catGIF from '../icons/cat.gif';
import drinkingGIF from '../icons/drinking.gif';
import pugGIF from '../icons/pug.gif';
import turtleGIF from '../icons/turtle.gif';



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
    setTimeout(() => {this.props.nextStep()}, 8000)
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
      ? <img src={bartDancing} alt="alt description goes here" />
      : (this.props.clickedvote === "artsculture")
        ? <img src={catGIF} alt="alt description goes here" />
        : (this.props.clickedvote === "health")
          ? <img src={drinkingGIF} alt="alt description goes here" />
          : (this.props.clickedvote === "education")
            ? <img src={pugGIF} alt="alt description goes here" />
            : (this.props.clickedvote === "college")
              ? <img src={turtleGIF} alt="alt description goes here" />
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